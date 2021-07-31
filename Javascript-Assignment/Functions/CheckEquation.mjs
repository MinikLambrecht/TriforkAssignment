// Add basic calculator functionalities.
import { Multiply, Divide, Add, Subtract } from './CalcFunctions.mjs';

// Import regex functionalities, to test and correct.
import { RegexFunctions } from './RegexFunctions.mjs';

// Import prompts.
import { ResultPrompt } from '../Prompts/Result.mjs';

// Custom enum to define which arg type to reset to if failing.
// const CurrentArgType = {
//     Two_Args,
//     Varargs,
//     Single_Arg
// };

function RegexNoMatch(argType)
{
    console.log('Error');
}

export function TestEquation_Two_Args(args)
{
    // Match the user input to our regex pattern.
    let res = RegexFunctions.CalcTest(args);

    // If the users input does not match our pattern, then return an error.
    // Otherwise go on with the equation.
    if(!res)
    {
        RegexNoMatch();
    }
    else
    {
        // Get the operator for the equation, by regex again.
        let Operator = args.match(/[?:*|\/|\+|-]/);

        // With regex, we'll split the equation into an array from the operator e.g. 1+1 would return ['1', '1'].
        const eqArr = args.split(/[?:*|\/|\+|-]/);
        let n1 = eqArr[0];
        let n2 = eqArr[1];

        let res = '';

        // Calculate the equation based on the operator in use.
        if (Operator == '*')
        {
            res = Multiply.Two_Args(n1, n2);

            console.clear();
            ResultPrompt(res);
        }

        if (Operator == '/')
        {
            res = Divide.Two_Args(n1, n2);

            console.clear();
            ResultPrompt(res);
        }

        if (Operator == '+')
        {
            res = Add.Two_Args(n1, n2);

            console.clear();
            ResultPrompt(res);
        }

        if (Operator == '-')
        {
            res = Subtract.Two_Args(n1, n2);

            ResultPrompt(res);
        }
    }
}

export function TestEquation_Varargs(args)
{
    // Match the user input to our regex pattern.
    let res = RegexFunctions.CalcTestVarargs(args);

    // If the users input does not match our pattern, then return an error.
    // Otherwise go on with the equation.
    if(!res)
    {
        RegexNoMatch();
    }
    else
    {
        // Get the operator for the equation, by regex again.
        let Operator = args.match(/[?:*|\/|\+|-]/);

        // With regex, we'll split the equation into an array from the operator e.g. 1+1+1 would return ['1', '1', '1'].
        const eqArr = args.split(/[?:*|\/|\+|-]/);
        let n1 = eqArr[0];
        let n2 = eqArr[1];
        let n3 = eqArr[2];

        let res = '';

        // Calculate the equation based on the operator in use.
        if (Operator == '*')
        {
            res = Multiply.Varargs(n1, n2, n3);

            console.clear();
            ResultPrompt(res);
        }

        if (Operator == '/')
        {
            res = Divide.Varargs(n1, n2, n3);

            console.clear();
            ResultPrompt(res);
        }

        if (Operator == '+')
        {
            res = Add.Varargs(n1, n2, n3);

            console.clear();
            ResultPrompt(res);
        }

        if (Operator == '-')
        {
            res = Subtract.Varargs(n1, n2, n3);

            console.clear();
            ResultPrompt(res);
        }
    }
}

export function TestEquation_Single_Arg(args)
{
    // Match the user input to our regex pattern.
    let res = RegexFunctions.CalcTest(args);

    // If the users input does not match our pattern, then return an error.
    // Otherwise go on with the equation.
    if(!res)
    {
        RegexNoMatch();
    }
    else
    {
        // Get the operator for the equation, by regex again.
        let Operator = args.match(/[?:*|\/|\+|-]/);

        // With regex, we'll split the equation into an array from the operator e.g. 1+1 would return ['1', '1'].
        const eqArr = args.split(/[?:*|\/|\+|-]/);
        let n1 = eqArr[0];
        let n2 = eqArr[1];

        let res = '';

        // Calculate the equation based on the operator in use.
        if (Operator == '*')
        {
            res = Multiply.Single_Arg(n1)(n2);

            console.clear();
            ResultPrompt(res);
        }

        if (Operator == '/')
        {
            res = Divide.Single_Arg(n1)(n2);

            console.clear();
            ResultPrompt(res);
        }

        if (Operator == '+')
        {
            res = Add.Single_Arg(n1)(n2);

            console.clear();
            ResultPrompt(res);
        }

        if (Operator == '-')
        {
            res = Subtract.Single_Arg(n1)(n2);

            console.clear();
            ResultPrompt(res);
        }
    }
}