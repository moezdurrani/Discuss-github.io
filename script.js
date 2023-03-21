var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
} 
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}

/**Trying out things now */

var story1 = document.getElementById("storyy1");
var storyy2 = document.getElementById("storyy2");

// story1.addEventListener("onmouseleave",shrink1());
// story1.addEventListener("onmouseenter",scale1());

// document.querySelector("storyy2").addEventListener("mouseenter", function () {
//     alert("Ouch! Stop poking me!");
//   });

// const myImage = document.querySelector("storyy1");
// myImage.mouseenter = scale1();
// myImage.mouseleave = shrink1();


//Scaling up the stories when hovering the mouse over them------------------------
function scale1()
{
    storyy1.style.transform = 'translate(-25%,25%) scale(1.5)'
}
function shrink1()
{
    storyy1.style.transform = 'scale(1)'
}
function scale2()
{
    storyy2.style.transform = 'translate(-25%,25%) scale(1.5)'
}
function shrink2()
{
    storyy2.style.transform = 'scale(1)'
}
function scale3()
{
    storyy3.style.transform = 'translate(-25%,25%) scale(1.5)'
}
function shrink3()
{
    storyy3.style.transform = 'scale(1)'
}
function scale4()
{
    storyy4.style.transform = 'translate(-25%,25%) scale(1.5)'
}
function shrink4()
{
    storyy4.style.transform = 'scale(1)'
}
function scale5()
{
    storyy5.style.transform = 'translate(-25%,25%) scale(1.5)'
}
function shrink5()
{
    storyy5.style.transform = 'scale(1)'
}

//changing like and unlike icon

// var firstLike = document.querySelector("#like_unlike1");
// firstLike.addEventListener("click", changeIconn, false);

// function changeIconn(e){
//     //let displayImage = e.target.id;
//     let displayImage = e.target.document.getElementById('like_unlike1');
//     if(displayImage.src.match('images/like-red.png')){
//         displayImage.src = 'images/like.png'
//     } 
//     else {
//         displayImage.src = 'images/like-red.png'
//     }
// }


function changeIcon(){
    let displayImage = document.getElementById('like_unlike1')
    if(displayImage.src.match('images/like-red.png')){
        displayImage.src = 'images/like.png'
    } 
    else {
        displayImage.src = 'images/like-red.png'
    }
}
function changeIcon2(){
    let displayImage = document.getElementById('like_unlike2')
    if(displayImage.src.match('images/like-red.png')){
        displayImage.setAttribute("src", 'images/like.png');
        //displayImage.src = 'images/like.png'
    } 
    else {
        //displayImage.src = 'images/like-red.png'
        displayImage.setAttribute("src", 'images/like-red.png');
    }
}
function changeIcon3(){
    let displayImage = document.getElementById('like_unlike3')
    if(displayImage.src.match('images/like-red.png')){
        displayImage.src = 'images/like.png'
    } 
    else {
        displayImage.src = 'images/like-red.png'
    }
}
function changeIcon4(){
    let displayImage = document.getElementById('like_unlike4')
    if(displayImage.src.match('images/like-red.png')){
        displayImage.src = 'images/like.png'
    } 
    else {
        displayImage.src = 'images/like-red.png'
    }
}
function changeIcon5(){
    let displayImage = document.getElementById('like_unlike5')
    if(displayImage.src.match('images/like-red.png')){
        displayImage.src = 'images/like.png'
    } 
    else {
        displayImage.src = 'images/like-red.png'
    }
}
function changeIcon6(){
    let displayImage = document.getElementById('like_unlike6')
    if(displayImage.src.match('images/like-red.png')){
        displayImage.src = 'images/like.png'
    } 
    else {
        displayImage.src = 'images/like-red.png'
    }
}
function changeIcon7(){
    let displayImage = document.getElementById('like_unlike7')
    if(displayImage.src.match('images/like-red.png')){
        displayImage.src = 'images/like.png'
    } 
    else {
        displayImage.src = 'images/like-red.png'
    }
}

