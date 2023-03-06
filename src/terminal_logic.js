import { getCaret, getInput1, getInput2, getInputContainer, getThemeCheckbox, getOutputBlocks, getInputBlocks, getTerminalContainer, getPromptDir } from "./selectors";
import { contactText, creditsText, helpText, sudoText, welcomeText } from "./constants";
import { escapeHtml } from "./ui";


// Terminal input functions
export function insertChar(key, settings) {
    settings.inputText = settings.inputText.slice(0, settings.cursorIdx)
        + key
        + settings.inputText.slice(settings.cursorIdx);
    settings.cursorIdx += 1;
}

export function deleteChar(settings) {
    settings.inputText = settings.inputText.slice(0, settings.cursorIdx - 1)
        + settings.inputText.slice(settings.cursorIdx);

    settings.cursorIdx = Math.max(settings.cursorIdx - 1, 0);
}

export function cursorLeft(settings) {
    settings.cursorIdx = Math.max(settings.cursorIdx - 1, 0);
}

export function cursorRight(settings) {
    settings.cursorIdx = Math.min(settings.cursorIdx + 1, settings.inputText.length);
}

export function prevCommand(settings) {
    if (settings.commandIdx === settings.commandHistory.length - 1) {
        return;
    }
    settings.commandIdx += 1;
    settings.inputText = settings.commandHistory[settings.commandIdx];
    settings.cursorIdx = settings.inputText.length;
}

export function nextCommand(settings) {
    if (settings.commandIdx === 0) {
        return;
    }
    settings.commandIdx -= 1;
    settings.inputText = settings.commandHistory[settings.commandIdx];
    settings.cursorIdx = settings.inputText.length;
}

// Creating elements for terminal output
function createOutputBlock() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("output-block");
    return newDiv;
}

function createTextEleFromInput(settings) {
    const terminal = getTerminalContainer();
    const inputContainer = getInputContainer();
    const input1 = getInput1();
    const input2 = getInput2();
    const caret = getCaret();

    const newDiv = document.createElement("div");
    newDiv.classList.add("input-block");

    const outputPrompt = document.createElement("span");
    outputPrompt.classList.add("prompt");
    outputPrompt.classList.add("emphasis");
    outputPrompt.innerHTML = `jal@localhost:${settings.dirName}:$`;
    // outputPrompt.innerHTML = "/Users/jliversi" + ':$'; // TODO change this to the directory
    const outputInput = document.createElement("span");
    outputInput.innerHTML = escapeHtml(settings.inputText);
    newDiv.appendChild(outputPrompt);
    newDiv.appendChild(outputInput);

    terminal.insertBefore(newDiv, inputContainer);

    terminal.scrollTop = terminal.scrollHeight;

    input1.innerHTML = "";
    input2.innerHTML = "";
    caret.innerHTML = " ";
    settings.inputText = "";
    settings.cursorIdx = 0;
}

function outputText(outputString) {
    const terminal = getTerminalContainer();
    const inputContainer = getInputContainer();

    const outputBlock = createOutputBlock();
    outputBlock.innerHTML = outputString;
    terminal.insertBefore(outputBlock, inputContainer);
    terminal.scrollTop = terminal.scrollHeight;
}

// Commands
function clear_fn() {
    getOutputBlocks().forEach(el => el.remove());
    getInputBlocks().forEach(el => el.remove());
}

function help_fn() {
   outputText(helpText); 
}

function welcome_fn() {
   outputText(welcomeText); 
}

function credits_fn() {
    outputText(creditsText);
}

function contact_fn() {
    outputText(contactText);
}

function sudo_fn() {
    outputText(sudoText);
}

function echo_fn(...args) {
    outputText(args.join(" "));
}

function pwd_fn(settings) {
    return function(...args) {
        outputText(settings.dirName.replace('~', '/Users/jal'));
    }
}

function dirFilterBuilder(curDir) {
    return function(dir_name) {
        return typeof curDir[dir_name] === 'object';
    }
}

function cd_fn(settings) {
    const promptDir = getPromptDir();
    return function(arg) {
        if (arg === '.' || !arg) {
            return;
        }
        const dirFilter = dirFilterBuilder(settings.curDir);
        const dir_names = Object.keys(settings.curDir).filter(dirFilter);
        if (dir_names.includes(arg)) {
            const newDir = settings.curDir[arg];
            const newDirName = newDir.DIR_NAME;
            settings.curDir = newDir;
            settings.dirName = newDirName;
            promptDir.innerHTML = 'jal@localhost:' + settings.dirName + ':$';

        } else if (Object.keys(settings.curDir).includes(arg)) {
            const outputString = `cd: not a directory: ${arg}`;
            outputText(outputString);
        } else {
            const outputString = `cd: no such file or directory: ${arg}`;
            outputText(outputString);
        }
    }
}

function buildLsOutput(names, dir_names) {
    let result = `\
<span class="emphasis">.</span>
`;
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (name === 'DIR_NAME') continue;
        if (dir_names.includes(name)) {
            result += `<span class="emphasis">${name}</span>\n`
        } else {
            result += `${name}\n`
        }
    }

    return result;
}

function ls_fn(settings) {
    return function(arg) {
        if (!arg || arg === '.') {
            const dirFilter = dirFilterBuilder(settings.curDir);
            const dir_names = Object.keys(settings.curDir).filter(dirFilter);
            const outputString = buildLsOutput(Object.keys(settings.curDir).sort(), dir_names);
            outputText(outputString);
            return;
        }

        const dirFilter = dirFilterBuilder(settings.curDir);
        const dir_names = Object.keys(settings.curDir).filter(dirFilter);
        if (dir_names.includes(arg)) {
            const dirToUse = settings.curDir[arg];
            const dirFilter = dirFilterBuilder(dirToUse);
            const dir_names = Object.keys(dirToUse).filter(dirFilter);
            const outputString = buildLsOutput(Object.keys(dirToUse).sort(), dir_names);
            outputText(outputString);

        } else {
            const outputString = `ls: ${arg}: no such file or directory`;
            outputText(outputString);
        }
    }
}

function cat_fn(settings) {
    return function(arg) {
        if (!arg) return;
        const dirFilter = dirFilterBuilder(settings.curDir);
        const dir_names = Object.keys(settings.curDir).filter(dirFilter);
        if (dir_names.includes(arg)) {
            const outputString = `cat: ${arg}: Is a directory`;
            outputText(outputString);
        } else if (Object.keys(settings.curDir).includes(arg)) {
            outputText(settings.curDir[arg]);
        } else {
            const outputString = `cat: ${arg}: No such file or directory`;
            outputText(outputString);
        }
    }
}

function theme_fn(settings) {
    const checkbox = getThemeCheckbox();
    return function(arg) {
        if (arg === settings.theme) {
            return;
        }
        if (settings.theme === "dark") {
            settings.theme = "light"
            checkbox.checked = true;
        } else {
            settings.theme = "dark";
            checkbox.checked = false;
        }
    }
}

function build_command_map(settings) {
    return {
        clear: clear_fn,
    
        // Prints constant text 
        help: help_fn,
        welcome: welcome_fn,
        credits: credits_fn,
        sudo: sudo_fn,
        contact: contact_fn,
        
        theme: theme_fn(settings),
        echo: echo_fn,
        pwd: pwd_fn(settings),
        cd: cd_fn(settings),
        ls: ls_fn(settings),
        cat: cat_fn(settings),
    };
}


function commandNotFound(commandString) {
    const outputString = "command not found: " + commandString.split(" ")[0];
    outputText(escapeHtml(outputString));
}

function processCommand(commandMap, commandString) {
    if (commandString.length === 0) {
        return;
    }
    const [cmd, ...args] = commandString.split(" ");
    if (cmd in commandMap) {
        commandMap[cmd](...args);
    } else {
        commandNotFound(commandString);
    }
}

// UI function runs on enter
export function buildRunCommand(settings) {
    return function() {
        settings.commandHistory[0] = settings.inputText;
        settings.commandHistory.unshift("");
        settings.commandIdx = 0;
        let commandString = settings.inputText.trim();

        const commandMap = build_command_map(settings);
        
        createTextEleFromInput(settings);
        processCommand(commandMap, commandString);
    }
}


