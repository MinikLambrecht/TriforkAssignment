// These are all the current options to pick from,
// This is where the magic happens.
export const LoggingOptions = {
    reset: "\x1b[0m",
    bold: "\x1b[1m",
    dim: "\x1b[2m",
    itallic: "\x1b[3m",
    underscore: "\x1b[4m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",

    // Foreground (text) colors
    fg: {
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
    },

    // Custom RGB foreground (text) color 
    fg_rgb: function (r, g, b) 
    {
        return `\x1b[38;2;${r};${g};${b}m`;
    },

    // Custom HEX foreground (text) color
    fg_hex: function (hex) 
    {
        const value = HexToRGB(hex);

        return `\x1b[38;2;${value.r};${value.g};${value.b}m`;
    },

    // Background colors
    bg: {
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
    },

    // Custom RGB foreground (text) color 
    bg_rgb: function (r, g, b) 
    {
        return `\x1b[48;2;${r};${g};${b}m`;
    },

    // Custom HEX foreground (text) color
    bg_hex: function (hex) 
    {
        const value = HexToRGB(hex);

        return `\x1b[48;2;${value.r};${value.g};${value.b}m`;
    },
};

// Convert HEX codes to RGB codes.
function HexToRGB(hex) 
{
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF").
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    // Utilize Regex and split the hexadecimal in three arrays (red, green & blue).
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    // Return the result, by parsing the retrieved result into a 16 bit integer,
    // If noting was found by regex, return null.
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

// Create the new logging method, that will replace 'console.log()',
// With e.g. Log(LoggingOptions.fg.green ,`New Logging Method!`).
export const Log = (args, text) => {
    let params = '';

    // If the args return as a string, do nothing and continue.
    // If the args return as an object, put the values beside eachother,
    // for multiple effects.
    switch (typeof(args))
    {
        case "object":
            {
                for(let i = 0; i < args.length; i++)
                {
                    params += args[i];
                }
                
                break;
            }
        case "string":
            {
                params = args;
                break;
            }
    }

    // If no args were provided, default the text color to a certain value,
    // else return the log.
    if (text == null || text == undefined)
    {
        text = args;
        console.log(`${LoggingOptions.fg_rgb(176, 182, 194)}%s${LoggingOptions.reset}`, text);
    }
    else
    {
        console.log(`${params}%s${LoggingOptions.reset}`, text);
    }
};

// In addition to the new Logging method, we would like to be able to add custom "variables",
// with different args into another string.
// E.g. Log(LoggingOptions.fg.magenta ,`Logging variables with the ${LogVariable(LoggingOptions.fg.red, 'New')} ${LogVariable(LoggingOptions.fg.green, 'Logging')} ${LogVariable(LoggingOptions.fg.cyan, 'Method')}`);
// This will make the first text magenta, 'New' would be red, 'Logging' would be green & 'Method' would be blue,
// all in one contained string.
export const LogVariable = (args, text) => {
    let params = '';

    // If the args return as a string, do nothing and continue.
    // If the args return as an object, put the values beside eachother,
    // for multiple effects.
    switch (typeof(args))
    {
        case "object":
            {
                for(let i = 0; i < args.length; i++)
                {
                    params += args[i];
                }
                
                break;
            }
        case "string":
            {
                params = args;
                break;
            }
    }

    // If no args were provided, default the text color to a certain value,
    // else return the log.
    if (text == null || text == undefined)
    {
        text = args;
        return `${LoggingOptions.fg_rgb(176, 182, 194)}${text}${LoggingOptions.reset}`;
    }
    else
    {
        return `${params}${text}${LoggingOptions.reset}`;
    }
};