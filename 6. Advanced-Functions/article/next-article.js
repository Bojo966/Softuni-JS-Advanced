function getArticleGenerator(articles) {
    let fucn = (() => {
        let currentIndex = 0
        let wantedArticles = articles
        return function() {
            if (currentIndex < wantedArticles.length) {
                let contentHolder = $('#content')
                contentHolder.append($('<article>').text(wantedArticles[currentIndex]))
                currentIndex++
            }
        }
    })()

    return fucn
}