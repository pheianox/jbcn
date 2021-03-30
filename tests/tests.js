module.exports = [
    {
        input: {
            container: true,
            dark: true,
            center: false,
        },
        expectedOutput: "container dark",
    },

    {
        input: {
            btn: {
                alpha: true,
                beta: true,
                gamma: false,
            },
        },
        expectedOutput: "btn btn--alpha btn--beta",
    },
];
