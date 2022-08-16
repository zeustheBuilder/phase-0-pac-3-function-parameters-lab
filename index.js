const name = "Brian";

function introduction(name) {
    return `Hi, my name is ${name}.`;
}

const language = "JavaScript";

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}