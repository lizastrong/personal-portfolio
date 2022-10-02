// get current date and time
const date = new Date();
document.getElementById('date').innerHTML = `Last login: ${date}`;

// get shell and insert elements
const shell = document.getElementById('shell');
const insert = document.getElementById('insert');


function createNewShell() {
    const newShell = document.createElement('div');
    newShell.id = 'shell';
    const innerShell = `<label for='command-input' class='root inline'>root@liza-strong $ </label>
                        <input id='command-input' class='command inline' type='text' autofocus>`
    newShell.innerHTML = innerShell;
    return newShell;
}

function shellFocus() {
    const target = document.querySelectorAll('.command');
    const lastInput = target[document.querySelectorAll('.command').length - 1];
    lastInput.focus();
}


// command input event listener function
const commandInput = (event) => {
    if (event.key === "Enter") {
        event.target.disabled = true;
        event.target.style.opacity = 0.75;
        event.target.removeEventListener('keypress', commandInput);
        if (event.target.value === 'help') {
            showHelp();
        } else if (event.target.value === 'about'){
            showAbout();
        } else if (event.target.value === 'projects') {
            showProjects();
        } else if (event.target.value === 'contact') {
            showContact();
        } else if (event.target.value === 'cls') {
            clearTerminal();
        } else if (event.target.value === 'exit') {
            exitTerminal();
        } else {
            invalidInput();
        };
    const blankShell = createNewShell();
    insert.appendChild(blankShell);
    shellFocus();
    blankShell.addEventListener('keypress', commandInput);
    }
};

const showHelp = () => {
    const help = document.createElement('div');
    help.id = 'help';
    const helpInner = `<p>Available commands listed below. 
                    Type <span class='clear'>'cls'</span> to clear or type <span class='exit'>'exit'</span> to close terminal.</p>
                    <ul class='commandList'>
                        <li class='item'>about</li>
                        <li class='item'>projects</li>
                        <li class='item'>contact</li>
                    </ul>`;
    help.innerHTML = helpInner;
    insert.appendChild(help);
}

const showAbout = () => {
    insert.append(document.createElement('h1'));
};

const showProjects = () => {
    insert.append(document.createElement('h2'))
};

const showContact = () => {
    insert.append(document.createElement('h3'))
};

const clearTerminal = () => {

};

const exitTerminal = () => {

};

const invalidInput = () => {

};

document.getElementById('command-input').addEventListener('keypress', commandInput);