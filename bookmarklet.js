document.keydown = function(e){
  if (e.key == "k") {
    a=prompt("Name:")
    b=prompt("Emoji:")
    c=prompt("First Discovery? (y/n):")
    d=JSON.parse(localStorage.getItem("infinite-craft-data"))
    d.elements.stringify()
  }
}
