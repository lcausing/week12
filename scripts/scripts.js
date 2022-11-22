const clickMeButton = document.querySelector(".click-me");
// console.log(clickMeButton)

function handleClickMeButton(){
    alert("You have clicked the button!");
    // clickMeButton.removeEventListener('click',handleClickMeButton)
}

clickMeButton.addEventListener('click',handleClickMeButton,{once:true})


