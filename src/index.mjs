import "./styles.css";

const submitMood = document.querySelector('#submitMood');

submitMood.addEventListener('click', function(event){
  event.preventDefault();
  const moodInput = document.querySelector("[name=mood]:checked")
  const myMood = document.querySelector('#myMood');
  const moodValue = moodInput.value;
  myMood.innerHTML = moodValue;
  console.log(moodInput.value); 
  console.log(myMood.classList);
  const classes = myMood.classList;
  classes.toggle('default-mood')
  switch(moodValue){
    case 'Very Happy':
      classes.toggle('very-happy')
    break;
    case 'Happy':
      classes.toggle('happy-mood')
    break;
    case'Not So Happy':
      classes.toggle('not-so-happy-mood')
    break;
    default:
      console.log("IT'S A SWITCH")
  }
})