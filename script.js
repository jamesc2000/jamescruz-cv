function myFunction(x) 
{
    if (x.matches) 
    { // If media query matches
        window.scrollTo(0, 90);
    } else {
        window.scrollTo(0, 0);
    }
}
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes