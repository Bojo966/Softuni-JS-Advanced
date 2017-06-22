function notify(message) {
    let notificationElement = document.getElementById('notification')
    notificationElement.textContent = message
    notificationElement.style.display = 'inline-block'

    let oneTimeInterval = setInterval(hideMessage, 2000)

    function hideMessage() {
        clearInterval(oneTimeInterval)
        notificationElement.style.display = 'none'
    }
}