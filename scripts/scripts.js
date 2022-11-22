const clickMeButton = document.querySelector(".click-me");
// console.log(clickMeButton)

function handleClickMeButton(){
    alert("Clicked!");
    // clickMeButton.removeEventListener('click',handleClickMeButton)
}

// clickMeButton.addEventListener('click',handleClickMeButton,{once:true})
// This will make event listener only do once and then gets removed

// clickMeButton.addEventListener('click',handleClickMeButton);
function changeBGcolor()
{
    // document.body.style.backgroundColor = "pink" 
    // This one just changes the background color of the body to pink

    document.body.classList.add("pink")
    //This will add a class from css that has the background color pink

}
clickMeButton.addEventListener('click',changeBGcolor);


function changeText(){
    if (clickMeButton.textContent === "Clicked")
    clickMeButton.textContent = "Click Me!";
    else if (clickMeButton.textContent === "Click Me!")
    clickMeButton.textContent = "Clicked";
    // This is the code for changing if the button is clicked
}

clickMeButton.addEventListener("click",changeText);

