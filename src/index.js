const SPACE = " ";
const DOUBLE_HYPHEN = "--";
const INPUT_TYPE_ERROR = "[JBCN] Input must be a descriptive object.";

const isPureObject = obj => obj !== null && typeof obj === "object" && Object.prototype.toString.call(obj) === "[object Object]";

const jbcn = desc => {
    if (!isPureObject) return new Error(INPUT_TYPE_ERROR);

    const add = text => (result === "" ? (result += text) : (result += SPACE + text));

    let result = "";

    for (const className in desc) {
        const classNameValue = desc[className];

        if (isPureObject(classNameValue)) {
            add(className);

            for (const modifier in classNameValue) {
                const modifierValue = classNameValue[modifier];

                if (!!modifierValue) {
                    add(className + DOUBLE_HYPHEN + modifier);
                }
            }

            continue;
        }

        if (!!classNameValue) {
            add(className);
            continue;
        }
    }

    return result;
};

module.exports = jbcn;
