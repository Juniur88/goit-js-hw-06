let counterValue = 0;
const refs = {
    counterValue: document.querySelector('#value'),
    reduceClickButton: document.querySelector('[data-action="decrement"]'),
    addClickButton: document.querySelector('[data-action="increment"]'),
};
refs.reduceClickButton.addEventListener('click', (event) => {
  counterValue -= 1;
  refs.counterValue.textContent = refs.counterValue;
  });
refs.addClickButton.addEventListener('click', (event) => {
counterValue += 1;  
refs.counterValue.textContent = counterValue;
});
