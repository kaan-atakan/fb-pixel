function _merge(seperator, lists) {
    if (typeof seperator != "string") {
        throw "Seperator must be a string";
    }
    let output = [];
    for (list of lists) {
        switch (typeof list) {
            case "string":
                list = list.split(seperator);
                break;
            case "object":
                if (list == null) continue;
                if (Array.isArray(list)) break;
                let temp = [];
                for (item of list) {
                    temp.push(item);
                }
                list = temp;
                break;
            case "number":
                break;
            default:
                continue;
        }
        output = output.concat(list);
    }
    return [...new Set(output)];
}

function isValidClassName(input) {
    if (typeof input != "string") return false;
    return input.match(/^[\-_a-z]/i) != null;
}

function isValidInlineStyle(input) {
    if (typeof input != "string") return false;
    return input.match(/^[\-a-z]+\s*:\s*.*/i) != null;
}

module.exports = {
    classes: (...param) => {
        return _merge(" ", param).filter(isValidClassName).join(" ");
    },

    styles: (...param) => {
        return _merge(";", param)
            .map((item) => item.trim())
            .filter(isValidInlineStyle)
            .join("; ");
    },
};
