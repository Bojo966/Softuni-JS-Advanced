function takeinput(input) {
    let processor = function() {
        let arr = []
        return {
            add: function(element) {
                arr.push(element)
            },
            remove: function(element) {
                arr = arr.filter(function(value, index) {
                    if (value !== element)
                        return value
                })
            },
            print: function() {
                console.log(arr.join(','))
            }
        }
    }()



    for (let index = 0; index < input.length; index++) {
        let commandData = input[index].split(' ');
        let command = commandData[0]
        let commandValue = commandData[1]
        processor[command](commandValue)
    }
}

takeinput(['add pesho', 'add gosho', 'add pesho', 'remove pesho', 'print'])