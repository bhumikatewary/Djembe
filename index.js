

//Detecting Button Press

var numberOfDrumButtons= document.querySelectorAll (".drum").length;
for (var i=0; i<numberOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() { //anonymous function
    
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

    });

}

    //Detecting keyboard press

    document.addEventListener("keydown", function(event) {

        makeSound(event.key);
        buttonAnimation(event.key);
    
    });


    function makeSound(key){
 
    switch (key) {
        case "m":
            var djembe1 = new Audio("sounds/djembe1.mp3");  
            djembe1.play();
            break;

            case "n":
            var djembe2 = new Audio("sounds/djembe2.mp3");
            djembe2.play();
            break;

            case "b":
            var djembe3 = new Audio("sounds/djembe3.mp3");
            djembe3.play();
            break;

             case "k":
            var djembe4 = new Audio("sounds/djembe4.mp3");
            djembe4.play();
            break;
    
             case "j":
            var djembe5 = new Audio("sounds/djembe5.mp3");
            djembe5.play();
            break;
    
            case "h":
            var djembe6 = new Audio("sounds/djembe6.mp3");
            djembe6.play();
            break;
    
            case "i":
            var djembe7 = new Audio("sounds/djembe7.mp3");
            djembe7.play();
            break;
    

            case "u":
            var djembe8 = new Audio("sounds/djembe8.mp3");
            djembe8.play();
            break;
    
            default: console.log(buttonInnerHTML);
        
    }
}

function buttonAnimation(currentkey){

    var activeButton= document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}