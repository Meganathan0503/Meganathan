var poppupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpoppupbutton = document.getElementById("add-popup-button")

addpoppupbutton.addEventListener('click',function(){
    poppupoverlay.style.display = "block"
    popupbox.style.display ="block"
})
//select cancel button
var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    poppupoverlay.style.display = "none"
    popupbox.style.display ="none"
})
//select container
var addbook = document.getElementById("add-book")
var container = document.querySelector(".container")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")
addbook.addEventListener('click',function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h1>${booktitleinput.value}</h1>`
    container.append(div)
    poppupoverlay.style.display = "none"
    popupbox.style.display ="none"
})