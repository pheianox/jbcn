const jbcn = require("../src/index");
const tests = require("./tests");

tests.forEach(({ input, expectedOutput }, idx) => {
    test(`Test #${idx + 1}`, () => {
        const output = jbcn(input);
        expect(output).toBe(expectedOutput);
    });
});
