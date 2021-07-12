// Import the inquirer library
import inquirer from 'inquirer';

// Import Menu Prompt in case of the user was not trying to exit.
import { Menu } from './Menu.js';

// Create a countdown before closing, giving the user some extra time,
// if they end up regretting.
function ExitCountdown(seconds) {

    // This will run the specific instructions below every second,
    // if not canceled.
    const interval = setInterval(() => {

        // If the seconds hit 0, exit the terminal/shell,
        // otherwise, continue the countdown.
        if (seconds > 0)
        {
            process.stdout.clearLine(); // Clear the line.
            process.stdout.cursorTo(0); // Reset the cursor.
            process.stdout.write(`Closing in ${seconds}, press c to cancel`); // Update the text.

            process.stdin.setRawMode(true); // Set the stream to raw mode.
            process.stdin.resume(); // Run any action afterwards.
            seconds--; // Subtract one second.
        }
        else
        {
            process.exit(0);
        }
    }, 1000);

    // Give the user a choice to cancel, by adding a keypress event.
    // Clearing the interval, and console, then opening the menu again.
    process.stdin.on('keypress', function (ch, key) {
        if (key.name == 'c') {
            clearInterval(interval);
            console.clear();
            Menu();
        }
    });
}

// Create Exit Prompt as a function to pass on.
export function Exit() {
    // Register a new prompt as the type 'confirm', for a more direct question, 
    // and a more precise answer as to what the user wants to do.
    inquirer.registerPrompt('ExitPrompt', inquirer.prompt({
        type: 'confirm',
        name: 'Exit Prompt', 
        message: 'Are you sure you want to exit?'
    }).then((answers) => {

        // If the user chose 'y', the terminal/shell will close.
        // But if the user chose 'n', the menu will open again.
        switch(answers['Exit Prompt'])
        {
            case true:
            {
                // Exit the current process.
                // process.exit(0);
                ExitCountdown(3);
                break;
            }
            case false: 
            {
                // Clear the console, before opening the menu.
                console.clear();
                Menu();
            }
        }
    }));
};
