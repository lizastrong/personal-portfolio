// get current date and time
const date = new Date();
document.getElementById('date').innerHTML = `Last login: ${date}`;

// get shell and insert elements
const shell = document.getElementById('shell');
const insert = document.getElementById('insert');
const terminal = document.getElementById('terminal');
const restore = document.getElementById('restore');
const message = document.getElementById('message');


function createNewShell() {
    const newShell = document.createElement('div');
    newShell.id = 'shell';
    const innerShell = `<label for='command-input' class='root inline'><span class='tag'>root</span>@liza-strong $ </label>
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
        if (event.target.value.toLowerCase() === 'help') {
            showHelp();
        } else if (event.target.value === 'about') {
            showAbout();
        } else if (event.target.value === 'contact') {
            showContact();
        } else if (event.target.value === 'cls') {
            clearTerminal();
        } else if (event.target.value === 'exit') {
            exitTerminal();
        } else if (event.target.value === 'skills') {
            showSkills();
        } else {
            invalidInput(event.target.value);
        };
        const blankShell = createNewShell();
        insert.append(blankShell);
        shellFocus();
        blankShell.addEventListener('keypress', commandInput);
    }
};


const invalidInput = (invalidCommand) => {
    const error = document.createElement('div');
    error.id = 'error';
    const errorInner = `<div id='error'>
                            <p>
                                <span class='errorName'>Error : InvalidCommand  ->  </span>
                                <span class='phrase'>'${invalidCommand}': command not found.</span>
                                <br>
                                Type <span class='help'>'help'</span> for available commands.
                            </p>
                        </div>`;
    error.innerHTML = errorInner;
    insert.append(error);
}


const showHelp = () => {
    const help = document.createElement('div');
    help.id = 'help';
    const helpInner = `<p>Available commands listed below. 
                    Type <span class='clear'>'cls'</span> to clear or type <span class='exit'>'exit'</span> to close terminal.</p>
                    <ul class='commandList'>
                        <li class='item'>about</li>
                        <li class='item'>skills</li>
                        <li class='item'>contact</li>
                    </ul>`;
    help.innerHTML = helpInner;
    insert.append(help);
}

const showAbout = () => {
    const about = document.createElement('div');
    about.id = 'about';
    const aboutInner = `<p>Hey hey 👋<br>I'm <span class='name'>Liza</span>!
                        I am 22 and I'm an aspiring full-stack web developer.<br>
                        I recently graduated 🎓 from UCLA with a B.S. in 🧠 Psychobiology. 
                        I love coding, travelling, eating good food, and 🧶 crocheting.<br>
                        I am currently living abroad in 📍 Tallinn, Estonia 🇪🇪.<br></p>`;
    about.innerHTML = aboutInner;
    insert.append(about);
};

const showSkills = () => {
    const skills = document.createElement('div');
    skills.id = 'skills';
    const skillsInner = `<p><span id='skill'>core: </span>HTML, CSS, JavaScript</p>
                         <p><span id='skill'>frameworks: </span>React</p>
                         <p><span id='skill'>database: </span>SQL</p>
                         <p><span id='skill'>other: </span>Git, GitHub, Figma, MATLAB</p>`;
    skills.innerHTML = skillsInner;
    insert.append(skills);
}

const showContact = () => {
    const contact = document.createElement('div');
    contact.id = 'contact';
    const contactInner = `<ul>
                            <li class='contact'><a href="mailto:lizastrong14@gmail.com?subject=hey you up? 👅 💦'">lizastrong14@gmail.com</a></li>
                            <li class='contact'><a href='https://github.com/lizastrong' target='_blank'>GitHub</a></li>
                            <li class='contact'><a href='https://linkedin.com/in/liza-strong' target='_blank'>LinkedIn</a></li>
                          </ul>`;
    contact.innerHTML = contactInner;
    insert.append(contact);
};

const clearTerminal = () => {
    message.style.display = 'none';
    insert.innerHTML = "";
};

const restoreTerminal = () => {
    restore.style.display = "none";
    terminal.style.display = "block";
    insert.innerHTML = "";
    const blankShell = createNewShell();
    insert.append(blankShell);
    shellFocus();
    blankShell.addEventListener('keypress', commandInput);
}

const exitTerminal = () => {
    terminal.style.display = "none";
    restore.style.display = "block";
    restore.addEventListener('click', restoreTerminal);
};



document.getElementById('command-input').addEventListener('keypress', commandInput);