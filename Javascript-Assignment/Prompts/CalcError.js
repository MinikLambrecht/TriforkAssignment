// Import the inquirer library
import inquirer from 'inquirer';

// Import Prompts.
import { Exit } from './Exit.mjs';
import { Menu } from './Menu.mjs';
import { CalcPrompt } from './Calc.mjs';

// Import custom logging functionality.
import { LogVariable, LoggingOptions } from '../Functions/CustomLogging.mjs';

// If there's a syntax error in the equation, show this prompt to correct them, go to the main menu or exit the calc.
export function CalcError(argType) 
{
    const ErrorMsg = () => {
        switch(argType)
        {
            case 'Two_Args':
                {
                    return LogVariable(`${LogVariable([LoggingOptions.bold, LoggingOptions.fg.red], 'Wrong Syntax detected!')} \n\n
                                        You can do basic equations like ${LogVariable([LoggingOptions.bold, LoggingOptions.fg.green], '1*1, 1/1, 1+1 & 1-1')}.
                                        But if you on the other hand wants to exit or try out the other Arg types, choose '${LogVariable([LoggingOptions.bold, LoggingOptions.fg.yellow], 'Main Menu')}' or '${LogVariable([LoggingOptions.bold, LoggingOptions.fg.red], 'Exit')}'`);
                }
            case 'Varargs':
                {
                    return LogVariable(`${LogVariable([LoggingOptions.bold, LoggingOptions.fg.red], 'Wrong Syntax detected!')} \n\n
                                        You can do basic equations like ${LogVariable([LoggingOptions.bold, LoggingOptions.fg.green], '1*1, 1/1, 1+1 & 1-1')}.
                                        But if you on the other hand wants to exit or try out the other Arg types, choose '${LogVariable([LoggingOptions.bold, LoggingOptions.fg.yellow], 'Main Menu')}' or '${LogVariable([LoggingOptions.bold, LoggingOptions.fg.red], 'Exit')}'`);
                }
            case 'Single_Arg':
                {
                    return LogVariable(`${LogVariable([LoggingOptions.bold, LoggingOptions.fg.red], 'Wrong Syntax detected!')} \n\n
                                        You can do basic equations like ${LogVariable([LoggingOptions.bold, LoggingOptions.fg.green], '1*1, 1/1, 1+1 & 1-1')}.
                                        But if you on the other hand wants to exit or try out the other Arg types, choose '${LogVariable([LoggingOptions.bold, LoggingOptions.fg.yellow], 'Main Menu')}' or '${LogVariable([LoggingOptions.bold, LoggingOptions.fg.red], 'Exit')}'`);
                }
        }
    };

    // Register a new prompt as the type 'list', to give the user a choice of what function they want to do.
    inquirer.registerPrompt('CalcErrorPrompt', 
        inquirer.prompt({
            type: 'list',
            name: 'Calc Error',
            message: ErrorMsg(),
            choices: [
                'Reset',
                'Main Menu',
                'Exit'
            ]
        }).then((answers) => {

            // If resetting get the parameter argType to define which promp to reset to,
            // After that we'll open the chosen calcprompt,
            // If the user wants to exit, they're getting the choice as well.
            switch(answers['Calc Error'])
            {
                case 'Reset': 
                    {
                        switch(argType)
                        {
                            case 'Two_Args':
                                {
                                    console.clear();
                                    CalcPrompt.Two_Args();
                                    break;
                                }
                            case 'Varargs':
                                {
                                    console.clear();
                                    CalcPrompt.Varargs();
                                    break;
                                }
                            case 'Single_Arg':
                                {
                                    console.clear();
                                    CalcPrompt.Single_Arg();
                                    break;
                                }
                        }
                        break;
                    }
                case 'Main Menu':
                    {
                        console.clear();
                        Menu();
                    }
                case 'Exit Calc': 
                    {
                        console.clear();
                        Exit();
                    }
            }
        })
    );
};