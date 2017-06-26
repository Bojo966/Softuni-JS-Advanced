function processCommands(commands) {
    let commandExecutor = {
        result: '',
        append: function(string) {
            this.result += string
        },
        removeStart: function(startSplit) {
            startSplit = Number(startSplit)
            this.result = this.result.substr(startSplit, this.result.length - startSplit)
        },
        removeEnd: function(endSplit) {
            endSplit = Number(endSplit)
            this.result = this.result.substr(0, this.result.length - endSplit)
        },
        print: function() {
            console.log(this.result)
        }
    }

    commands.forEach(function(element) {
        let data = element.split(' ')
        let currentCommand = data[0]
        let currentData = data[1]
        if (commandExecutor.hasOwnProperty(currentCommand))
            commandExecutor[currentCommand](currentData)
    }, this);
}

processCommands(['append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print'
])