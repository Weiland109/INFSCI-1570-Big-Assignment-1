//This Script will allow the user to swap back and forth between 2 different images.
//A sound will be played with every swap.

//console.log("JS Loaded");
var PressCounter = false;

function ExecuteFullEvent(){
    PlaySound(); //Sound will play regardless of what phase we're on.

    if(PressCounter == false){GoToPhase2();}
    if(PressCounter == true){GoToPhase1();}

    //This counter is used to determine what phase we are on. Swaps between true/false with every button press.
    if(PressCounter == false){PressCounter = true;}
    else{PressCounter = false;}
    //console.log(PressCounter);
}

function GoToPhase1(){
    RemoveImage2();
    AddImage1();
}

function GoToPhase2(){
    RemoveImage1();
    AddImage2();
}

function RemoveImage1(){
    //Identifies and removes the Phase 1 gif.
    const KillElement = document.getElementById("Eoc_P1");
    KillElement.remove();
}

function AddImage1(){
    //This creates the Phase 1 image element.
    const pic = document.createElement("img");
    pic.setAttribute("id", "Eoc_P1");
    pic.setAttribute("src","images/images_EoC/Eye_of_Cthulhu_(Phase_1).gif");
    pic.setAttribute("alt","Gif of Eye of Cthulhu Phase 1.");

    //And this adds it to the button on the html page.
    const target = document.getElementById("ImageButton");
    target.appendChild(pic);
}

function RemoveImage2(){
    //Identifies and removes the Phase 2 gif.
    const KillElement = document.getElementById("Eoc_P2");
    KillElement.remove();
}

function AddImage2(){
    //This creates the Phase 2 image element.
    const pic = document.createElement("img");
    pic.setAttribute("id", "Eoc_P2");
    pic.setAttribute("src","images/images_EoC/Eye_of_Cthulhu_(Phase_2).gif");
    pic.setAttribute("alt","Gif of Eye of Cthulhu Phase 2. A mouth has opened in the center of the Eye.");

    //And this adds it to the button on the html page.
    const target = document.getElementById("ImageButton");
    target.appendChild(pic);
}

function PlaySound(){
    const audio = new Audio("sounds/Roar_0.wav");
    audio.play();
}

const MyButton = document.getElementById("ImageButton");
MyButton.addEventListener("click", ExecuteFullEvent);