function media(x) {
    if (x.matches) {
        window.scrollTo(0, 90); // Offset scroll on mobile
    }
}
  
var x = window.matchMedia("(max-width: 700px)")
media(x) // Call listener function at runtime
x.addListener(media) // Attach listener function on state changes

const quote = document.getElementById('message')
const author = document.getElementById('quote-author')

var request = new XMLHttpRequest()
request.open('GET', 'https://quotes.rest/qod?category=inspire&language=en', true)
request.onload = function() {
    var body = JSON.parse(this.response)
    console.log(body)
    quote.innerHTML = `"${body.contents.quotes[0].quote}"`
    author.innerHTML = body.contents.quotes[0].author
}
request.send()