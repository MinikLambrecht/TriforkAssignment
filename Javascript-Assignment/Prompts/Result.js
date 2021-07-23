// Import the inquirer library
import inquirer from 'inquirer';

// Import the calc prompt.
import { Menu } from './Menu.js';

// Import custom logging functionality
import { Log, LogVariable, LoggingOptions } from '../Functions/CustomLogging.js';

export function ResultPrompt(res) {
    // Register a new prompt as the type 'confirm', for a more direct question, 
    // and a more precise answer as to what the user wants to do.
    inquirer.registerPrompt('ResultPrompt', inquirer.prompt({
        type: 'confirm',
        name: 'Result Prompt', 
        message: `The result to your equation is ${LogVariable([LoggingOptions.bold, LoggingOptions.fg.green], res)}, do you want to try again?`
    }).then((answers) => {

        // If the user chose 'y', the terminal/shell will close.
        // But if the user chose 'n', the calc prompt will open again.
        switch(answers['Result Prompt'])
        {
            case true:
            {
                // Clear the console, before opening the menu.
                console.clear();
                Menu();
                break;
            }
            case false: 
            {
                // Exit the current process.
                process.exit(0);
                break;   
            }
        }
    }));
};