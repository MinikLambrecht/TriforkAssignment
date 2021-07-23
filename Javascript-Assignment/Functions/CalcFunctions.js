// For each arg type, multiply the numbers.
export const Multiply = {
    Two_Args: function (n1, n2)
    {
        return parseInt(n1) * parseInt(n2);
    },

    Varargs: function (n1, n2 ,n3)
    {
        return parseInt(n1) * parseInt(n2) * parseInt(n3);
    },

    Single_Arg: function (n1)
    {
        return function (n2)
        {
            return parseInt(n1) * parseInt(n2);
        };
    }
};

// For each arg type, divide the numbers.
export const Divide = {
    Two_Args: function (n1, n2)
    {
        return parseInt(n1) / parseInt(n2);
    },

    Varargs: function (n1, n2 ,n3)
    {
        return parseInt(n1) / parseInt(n2) / parseInt(n3);
    },

    Single_Arg: function (n1)
    {
        return function (n2)
        {
            return parseInt(n1) / parseInt(n2);
        };
    }
};

// For each arg type, add up the numbers.
export const Add = {
    Two_Args: function (n1, n2)
    {
        return parseInt(n1) + parseInt(n2);
    },

    Varargs: function (n1, n2 ,n3)
    {
        return parseInt(n1) + parseInt(n2) + parseInt(n3);
    },

    Single_Arg: function (n1)
    {
        return function (n2)
        {
            return parseInt(n1) + parseInt(n2);
        };
    }
};

// For each arg type, subtract the numbers.
export const Subtract = {
    Two_Args: function (n1, n2)
    {
        return parseInt(n1) - parseInt(n2);
    },

    Varargs: function (n1, n2 ,n3)
    {
        return parseInt(n1) - parseInt(n2) - parseInt(n3);
    },

    Single_Arg: function (n1)
    {
        return function (n2)
        {
            return parseInt(n1) - parseInt(n2);
        };
    }
};