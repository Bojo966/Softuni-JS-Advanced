function getArgumentInfo() {
    let argumentTypes = {}

    for (let index = 0; index < arguments.length; index++) {
        let argument = arguments[index];
        let argumentType = typeof argument
        console.log(`${argumentType}: ${argument}`)
        if (!argumentTypes.hasOwnProperty(argumentType)) {
            argumentTypes[argumentType] = 0
        }

        argumentTypes[argumentType]++
    }

    let sortedArgumentTypes = []
    for (let argumentType in argumentTypes) {
        if (argumentTypes.hasOwnProperty(argumentType)) {
            let element = argumentTypes[argumentType];

            sortedArgumentTypes.push({ value: element, type: argumentType })
        }
    }

    sortedArgumentTypes.sort((a, b) => {
        return b.value - a.value
    }).forEach(function(element) {
        console.log(`${element.type} = ${element.value}`)
    }, this);


}

getArgumentInfo('cat', 42, 23, function() { console.log('Hello world!'); });