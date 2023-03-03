import { typableCharacters } from "./constants";
import { getAboutBtn,
    getCaret,
    getInput1,
    getInput2,
    getMain,
    getThemeButton,
    getContactLinks
} from "./selectors";

import { buildRunCommand, cursorLeft, cursorRight, deleteChar, insertChar, prevCommand, nextCommand } from "./terminal_logic";
import { renderInput, tradeClasses } from "./ui";

export function typeChar(settings) {
    const inputEle1 = getInput1();
    const inputEle2 = getInput2();
    const caretEle = getCaret();

    const runCommand = buildRunCommand(settings);
    return (e) => {
        if (typableCharacters.includes(e.key)) {
            insertChar(e.key, settings);
            
            renderInput(inputEle1, inputEle2, caretEle, settings);
        } else if (e.key === "Backspace") {
            if (settings.cursorIdx === 0) return;
            deleteChar(settings);
            
            renderInput(inputEle1, inputEle2, caretEle, settings);
        } else if (e.key === "ArrowLeft") {
            cursorLeft(settings);
            renderInput(inputEle1, inputEle2, caretEle, settings);
        } else if (e.key === "ArrowRight") {
            cursorRight(settings);
            renderInput(inputEle1, inputEle2, caretEle, settings);
        } else if (e.key === "ArrowUp") {
            prevCommand(settings);
            renderInput(inputEle1, inputEle2, caretEle, settings);
        } else if (e.key === "ArrowDown") {
            nextCommand(settings);
            renderInput(inputEle1, inputEle2, caretEle, settings);
        } else if (e.key === "Enter") {
            runCommand();
        } else if (e.key === "Tab") {
            e.preventDefault();
        }
    }
}

export function toggleTheme(settings) {
    const button = getThemeButton();
    const icon = button.children[0];
    const main = getMain();
    const contactLinks = getContactLinks();

    return function() {
        if (settings.animating) return;
        settings.animating = true;
        if (settings.theme === "dark") {
            tradeClasses(main, "dark", "light");
            tradeClasses(button, "dark", "light");
            tradeClasses(contactLinks, "dark", "light");
            
            settings.theme = "light";
            setTimeout(() => {
                tradeClasses(icon, "fa-sun", "fa-moon");
                settings.animating = false;
            },  200);
        } else {
            tradeClasses(main, "light", "dark");
            tradeClasses(contactLinks, "light", "dark");

            settings.theme = "dark";
            setTimeout(() => {
                settings.animating = false;
                tradeClasses(icon, "fa-moon", "fa-sun");
            },  200);
        }
    }
}