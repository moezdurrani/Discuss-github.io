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


let video = 0;
videoholder.style.transform = 'scaleY(0%)'
function videoOpen(){
    
    if(video == 0){
        videoholder.style.transform = 'scaleY(100%)'
        video = 1;
    }
    else if(video == 1){
        videoholder.style.transform = 'scaleY(0%)'
        video = 0;
    }
}

let ind = 0;
websiteView.style.transform = 'scaleY(0%)'
function searchBing(){

    var txt = document.getElementById('userSearch').value;
    document.getElementById('web').src = 'https://www.google.com/search?igu=1&q=' + txt;
    
    if(ind == 0){
        websiteView.style.transform = 'scaleY(100%)'
        ind = 1;
    }
    else if(ind == 1){
        websiteView.style.transform = 'scaleY(0%)'
        ind = 0;
    }
}

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


function changeIcon(id){
    let displayImage = document.getElementById(id)
    if(displayImage.src.match('images/like-red.png')){
        displayImage.src = 'images/like.png'
    } 
    else {
        displayImage.src = 'images/like-red.png'
    }
}

let myNumber = 50;
let myNumber2 = 87;
let myNumber3 = 34;
let myNumber4 = 12;
let myNumber5 = 97;
let myNumber6 = 50;
let myNumber7 = 97;

let flip = 0 //unlike position
document.getElementById("numlik1").textContent = myNumber;
document.getElementById("numlik2").textContent = myNumber2;
document.getElementById("numlik3").textContent = myNumber3;
document.getElementById("numlik4").textContent = myNumber4;
document.getElementById("numlik5").textContent = myNumber5;
document.getElementById("numlik6").textContent = myNumber6;
document.getElementById("numlik7").textContent = myNumber7;

function Incr(id){
    if (flip == 0)
    {
        flip = 1;

        if(id == 'numlik1'){
            myNumber += 1;
            document.getElementById(id).textContent = myNumber;
        }
        else if(id == 'numlik2'){
            myNumber2 += 1;
            document.getElementById(id).textContent = myNumber2;
        }
        else if(id == 'numlik3'){
            myNumber3 += 1;
            document.getElementById(id).textContent = myNumber3;
        }
        else if(id == 'numlik4'){
            myNumber4 += 1;
            document.getElementById(id).textContent = myNumber4;
        }
        else if(id == 'numlik5'){
            myNumber5 += 1;
            document.getElementById(id).textContent = myNumber5;
        }
        else if(id == 'numlik6'){
            myNumber6 += 1;
            document.getElementById(id).textContent = myNumber6;
        }
        else if(id == 'numlik7'){
            myNumber7 += 1;
            document.getElementById(id).textContent = myNumber7;
        }
    }
    else
    {
        flip = 0;

        if(id == 'numlik1'){
            myNumber -= 1;
            document.getElementById(id).textContent = myNumber;
        }
        else if(id == 'numlik2'){
            myNumber2 -= 1;
            document.getElementById(id).textContent = myNumber2;
        }
        else if(id == 'numlik3'){
            myNumber3 -= 1;
            document.getElementById(id).textContent = myNumber3;
        }
        else if(id == 'numlik4'){
            myNumber4 -= 1;
            document.getElementById(id).textContent = myNumber4;
        }
        else if(id == 'numlik5'){
            myNumber5 -= 1;
            document.getElementById(id).textContent = myNumber5;
        }
        else if(id == 'numlik6'){
            myNumber6 -= 1;
            document.getElementById(id).textContent = myNumber6;
        }
        else if(id == 'numlik7'){
            myNumber7 += 1;
            document.getElementById(id).textContent = myNumber7;
        }
    }
}
