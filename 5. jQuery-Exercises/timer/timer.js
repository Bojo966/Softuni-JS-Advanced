function timer() {
    let totalSeconds = 0
    let timerId = 0
    let hasStarted = false
    $('#start-timer').click(start)
    $('#stop-timer').click(stop)

    function start() {
        if (!hasStarted) {
            timerId = setInterval(step, 1000)
            hasStarted = true
        }
    }

    function stop() {
        if (hasStarted) {
            clearInterval(timerId)
            hasStarted = false
        }

    }

    function step() {
        totalSeconds++
        let currentSeconds = totalSeconds % 60
        let currentMinutes = Math.floor(totalSeconds / 60 % 60)
        let currentHours = Math.floor(totalSeconds / 60 / 60)

        $('#hours').text(('0' + currentHours).slice(-2))
        $('#minutes').text(('0' + currentMinutes).slice(-2))
        $('#seconds').text(('0' + currentSeconds).slice(-2))
    }
}