// Import the inquirer library
import inquirer from 'inquirer';

// Import Prompts
import { Exit } from './Exit.js';
import { CalcPrompt } from './Calc.js';

// Create Menu Prompt as a function to pass on.
export function Menu() {

    // Register a new prompt as the type 'list', to give the user a choice of what function they want to try.
    inquirer.registerPrompt('MenuPrompt', 
        inquirer.prompt({
            type: 'list',
            name: 'Calc Menu',
            message: 'Calculator menu',
            choices: [
                'Open Calc (Two Args)',
                'Open Calc (Varargs)',
                'Open Calc (Single Arg)',
                'Exit Calc'
            ]
        }).then((answers) => {

            // Open a function based on the users answer,
            // or exit the calculator, if wanted.
            switch(answers['Calc Menu'])
            {
                case 'Open Calc (Two Args)': 
                {
                    console.clear();
                    CalcPrompt.Two_Args();
                    break;
                }
                case 'Open Calc (Varargs)': 
                {
                    console.clear();
                    CalcPrompt.Varargs();
                    break;
                }
                case 'Open Calc (Single Arg)': 
                {
                    console.clear();
                    CalcPrompt.Single_Arg();
                    break;
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