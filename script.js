function media(x) {
    if (x.matches) {
        window.scrollTo(0, 90); // Offset scroll on mobile
    }
}
  
var x = window.matchMedia("(max-width: 700px)")
media(x) // Call listener function at run time
x.addListener(media) // Attach listener function on state changes