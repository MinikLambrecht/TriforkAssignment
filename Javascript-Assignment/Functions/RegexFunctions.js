export const RegexFunctions = {
    CalcTest: function(input)
    {
        // Match input against regex the first group (\d+) matches whole numbers,
        // The second [?:*|\/|\+|-] matches all operaters e.g. *, /, + & -.
        // And the last group matches against whole numbers again.
        // If the input matches return true, otherwise return false.
        let match = /^(\d+)[?:*|\/|\+|-](\d+)+$/.test(input);
        return match;
    },
    CalcTestVarargs: function(input)
    {
        // Match input against regex the first group (\d+) matches whole numbers,
        // The second [?:*|\/|\+|-] matches all operaters e.g. *, /, + & -.
        // And the third group matches against whole numbers again,
        // the fourth group mathces operators again, and the last group matches whole numbers again.
        // If the input matches return true, otherwise return false.
        let match = /^(\d+)[?:*|\/|\+|-](\d+)[?:*|\/|\+|-](\d+)+$/.test(input);
        return match;
    }
};