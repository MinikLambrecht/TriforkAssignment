// Import the inquirer library
import inquirer from 'inquirer';

// Add the ability to create the 'require' method
import { createRequire } from "module";

// Construct the require method
const require = createRequire(import.meta.url);

// Import test functions for the equations, to divide the operations and to correct the syntax if wrong.
import { TestEquation_Two_Args, TestEquation_Varargs, TestEquation_Single_Arg } from '../Functions/CheckEquation.js';

// Import custom logging functionality
import { Log, LogVariable, LoggingOptions } from '../Functions/CustomLogging.js';

// Get all information from package.json, to use in the program.
const info = require('../package.json');

export const CalcPrompt = {

    // Create Calculator Prompt as a function to pass on, with Two Args.
    Two_Args: function () 
    {
        // Put up a litte display, so the user knows exactly where they are,
        // and how they can exit or go back, if they want to.
        Log([LoggingOptions.fg.green, LoggingOptions.bold],`Terminal Calc \n`)
        Log(`Version: ${LogVariable([LoggingOptions.bold, LoggingOptions.fg.yellow], info.version)}`);
        Log(`Arg type: ${LogVariable([LoggingOptions.bold, LoggingOptions.fg.yellow], 'Two Args ')}\n`);

        Log(`To ${LogVariable([LoggingOptions.bold, LoggingOptions.fg.red], 'Exit')} press 'ctrl+c'.`);
        Log(`To ${LogVariable([LoggingOptions.bold, LoggingOptions.fg.red], 'Go Back')} press 'ctrl+b'.`);
                
        // Register a new prompt as the type 'input', and await user input to calculate their equation.
        inquirer.registerPrompt('Calc_Two_Args', 
            inquirer.prompt({
                type: 'input',
                name: 'Two Args Menu',
                message: 'Equation: '
            }).then((answers) => {
                let eq = answers['Two Args Menu'];
                TestEquation_Two_Args(eq);
            })
        );
    },

    // Create Menu Prompt as a function to pass on.
    Varargs: function () 
    {
        // Put up a litte display, so the user knows exactly where they are,
        // and how they can exit or go back, if they want to.
        Log([LoggingOptions.fg.green, LoggingOptions.bold],`Terminal Calc \n`)
        Log(`Version: ${LogVariable([LoggingOptions.bold, LoggingOptions.fg.yellow], info.version)}`);
        Log(`Arg type: ${LogVariable([LoggingOptions.bold, LoggingOptions.fg.yellow], 'Varargs ')}\n`);

        Log(`To ${LogVariable([LoggingOptions.bold, LoggingOptions.fg.red], 'Exit')} press 'ctrl+c'.`);
        Log(`To ${LogVariable([LoggingOptions.bold, LoggingOptions.fg.red], 'Go Back')} press 'ctrl+b'.`);

        // Register a new prompt as the type 'input', and await user input to calculate their equation.
        inquirer.registerPrompt('Calc_Varargs', 
            inquirer.prompt({
                type: 'input',
                name: 'Varargs Menu',
                message: 'Equation: '
            }).then((answers) => {
                let eq = answers['Varargs Menu'];
                TestEquation_Varargs(eq);
            })
        );
    },

    // Create Menu Prompt as a function to pass on.
    Single_Arg: function () 
    {
        // Put up a litte display, so the user knows exactly where they are,
        // and how they can exit or go back, if they want to.
        Log([LoggingOptions.fg.green, LoggingOptions.bold],`Terminal Calc \n`)
        Log(`Version: ${LogVariable([LoggingOptions.bold, LoggingOptions.fg.yellow], info.version)}`);
        Log(`Arg type: ${LogVariable([LoggingOptions.bold, LoggingOptions.fg.yellow], 'Single Arg ')}\n`);

        Log(`To ${LogVariable([LoggingOptions.bold, LoggingOptions.fg.red], 'Exit')} press 'ctrl+c'.`);
        Log(`To ${LogVariable([LoggingOptions.bold, LoggingOptions.fg.red], 'Go Back')} press 'ctrl+b'.`);

        // Register a new prompt as the type 'input', and await user input to calculate their equation.
        inquirer.registerPrompt('Calc_Single_Arg', 
            inquirer.prompt({
                type: 'input',
                name: 'Single Arg Menu',
                message: 'Equation: '
            }).then((answers) => {
                let eq = answers['Single Arg Menu'];
                TestEquation_Single_Arg(eq);
            })
        );
    }
};