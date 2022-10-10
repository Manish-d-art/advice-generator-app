
const Btn=document.querySelector('.main__diceContainer');
const adviceId=document.querySelector('.main__advice-no');

fetch('https://api.adviceslip.com/advice')
.then(response => {
  // console.log(response.json());
  if(! response.ok)
    throw new Error(`advice not found(${response.status})`);
  return response.json();
})
.then(data =>{
  console.log(data);
  const id=data.slip.id;
  const adviceText=data.slip.advice;
  console.log(id);
  console.log(adviceText);
})
// .catch(error =>{
//   console.log(2);
// });