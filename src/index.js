import { toggleTheme, typeChar } from "./listener_callbacks";
import { getTerminal, getThemeButton } from "./selectors";
import { setupWelcomeMessage } from "./ui";

// TODO check if on mobile and in that case only go to non-terminal site

// Create default settings
const settings = {
    theme: "dark",
    animating: false,
    // terminal settings
    inputText: "",
    cursorIdx: 0,
    commandHistory: [""],
    commandIdx: 0,
    // dir: "/Users/jliversi",
}

// Run setup functions
setupWelcomeMessage();

// Attach listeners
// Stop animation on window resize
// TODO: do we need this? 
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

// Callback listeners
const themeButton = getThemeButton();
themeButton.addEventListener("click", toggleTheme(settings));
const terminalContainer = getTerminal();
terminalContainer.addEventListener('keydown', typeChar(settings));
terminalContainer.focus();
