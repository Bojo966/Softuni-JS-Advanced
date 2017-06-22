function create(sentences) {
    let content = document.getElementById('content')

    for (var index = 0; index < sentences.length; index++) {
        var sentence = sentences[index];
        let divElement = document.createElement('div')
        let paragraphElement = document.createElement('p')
        paragraphElement.textContent = sentence
        paragraphElement.style.display = 'none'

        divElement.addEventListener('click', showParagraph)
        divElement.appendChild(paragraphElement)
        content.appendChild(divElement)
    }

    function showParagraph(event) {
        event.target.children[0].style.display = 'inline-block'
    }
}