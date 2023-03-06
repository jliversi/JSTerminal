export const typableCharacters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~1234567890-=!@#$%^&*()_+[]\\{}|;':",./<>? `

export const welcomeText = `\
Hi!

This site is a "pretend" text-based terminal.

Type '<span class="emphasis">help</span>' to see a list of available commands.
`;

export const creditsText = `\
    Colors: Solarized by Ethan Schoonover
    Icons: Font Awesome and Devicons
    Font: Fira Code

    Everything else on this site was built by me using HTML, CSS, and vanilla Javascript.
    Source code here: <a href="https://github.com/jliversi/JSTerminal" target="_blank">https://github.com/jliversi/JSTerminal</a>
`;

export const contactText = `
    <span class="magenta-txt">Github:</span>     <a href="https://github.com/jliversi" target="_blank">https://github.com/jliversi</a>

    <span class="blue-txt">LinkedIn:</span>   <a href="https://www.linkedin.com/in/jliversi/" target="_blank">https://www.linkedin.com/in/jliversi/</a>
    
    <span class="green-txt">Email:</span>      <a href="mailto:jliversi.dev@gmail.com">jliversi.dev@gmail.com</a>
`;

export const sudoText = `\
ACCESS DENIED! (jk, but sudo won't do anything here)
`;

export const helpText = `\
    help            Prints this message
    ls              Prints contents of current directory
    cat [filename]  Prints the contents of the provided file
    cd [dirname]    Change directories
    pwd             Print current working directory
    theme           Changes current theme
    clear           Clear the terminal output
    welcome         Print the site welcome message
    credits         Print a list of credits for creation of this site
    contact         Prints my contact info (github, linkedin, email)
`;


const sample = `\
This is text in a sample file
`;

const sample2 = `\
This is text in another sample file
`;

const contact_file_txt = `\
Github: https://github.com/jliversi

LinkedIn: https://www.linkedin.com/in/jliversi/

Email: jliversi.dev@gmail.com

Source code: https://github.com/jliversi/JSTerminal
`;

export const fileText = {
    sample,
    sample2,
    contact_info: contact_file_txt,
}

const initialFileSetup = {
    '~': {
        'DIR_NAME': '~',
        'sample.txt': fileText.sample,
        'contact_info.txt': fileText.contact_info,
        'folder_1': {
            'DIR_NAME': '~/folder_1',
            'sample2.txt': fileText.sample2,
        },
        'folder_2': {
            'DIR_NAME': '~/folder_2',
        }
    },
}

initialFileSetup['~']['folder_1']['..'] = initialFileSetup['~'];
initialFileSetup['~']['folder_2']['..'] = initialFileSetup['~'];

export const fileSetup = initialFileSetup;