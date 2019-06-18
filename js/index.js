// Your code goes here
// * [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
// 	* [ ] `mouseover`
// 	* [ ] `keydown`
// 	* [ ] `wheel`
// 	* [ ] `drag / drop`
// 	* [ ] `load`
// 	* [ ] `focus`
// 	* [ ] `resize`
// 	* [ ] `scroll`
// 	* [ ] `select`
// 	* [ ] `dblclick`

// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
// * [ ] Stop the navigation from items from refreshing the page by using `preventDefault()`

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