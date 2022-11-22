const clickMeButton = document.querySelector(".click-me");
// console.log(clickMeButton)

function handleClickMeButton(){
    alert("You have clicked the button!");
}

clickMeButton.addEventListener('click',handleClickMeButton)

clickMeButton.removeEventListener('click',handleClickMeButton)
