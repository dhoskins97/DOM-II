// Your code goes here

var titleText = document.querySelector('h1');
var busPic = document.querySelector('.intro img')
var headerText = document.querySelector('.intro h2')
var letsGoText = document.querySelector('.content-section .text-content h2')
var mapPic = document.querySelector('.content-section .img-content img')
var topPage = document.querySelector('.main-navigation')

titleText.addEventListener(`mouseover`, function() {
    titleText.textContent = "Howdy!";
})

titleText.addEventListener(`mouseleave`, function() {
    titleText.textContent = "Fun Bus";
})

busPic.addEventListener(`dblclick`, function(){
    busPic.style.display = "none";
})

headerText.addEventListener(`click`, function(){
    headerText.textContent = "Ouch!"
})

headerText.addEventListener(`mouseleave`, function() {
    headerText.textContent = "Welcome To Fun Bus!";
})

letsGoText.addEventListener(`mousemove`, function(){
    console.log("Selected.");
    letsGoText.textContent = "Here We Go!"
})

mapPic.addEventListener(`contextmenu`, function(){
    mapPic.style.display = "none";
})

busPic.addEventListener(`auxclick`, function(){
    mapPic.style.display = "initial";
})

headerText.addEventListener(`copy`, function(){
    headerText.textContent = "This text has been copied."
})