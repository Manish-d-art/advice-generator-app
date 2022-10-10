
const Btn=document.querySelector('.main__diceContainer');
const adviceId=document.querySelector('.main__advice-no');
const advicePara=document.querySelector('.main__adviceText');

const adviceFunc=function(){
  fetch('https://api.adviceslip.com/advice')
  .then(response => {
    if(! response.ok)
      throw new Error(`advice not found(${response.status})`);
    return response.json();
  })
  .then(data =>{
    console.log(data);
    const id=data.slip.id;
    let adviceText=data.slip.advice;
    advicePara.textContent=adviceText;
    console.log(adviceText);
    console.log(id);
    adviceId.textContent=id;
  })
  .catch(error =>{
    console.log(2);
  });
}


Btn.addEventListener('click',adviceFunc);
window.addEventListener('load',adviceFunc);