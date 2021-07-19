function getAttr() {
  let inputs = document.querySelectorAll('.input_number'),
    inputsArray = [];

  for (const input of inputs) {
    let min = parseInt(input.getAttribute('min')),
        max = parseInt(input.getAttribute('max')),
        val = parseInt(input.value),
        data = parseInt(input.getAttribute('data-price'));
    inputsArray.push({'element': input, 'value': val, 'min': min, 'max': max, 'data': data})
  }

  return inputsArray
}

function inputOuter(value, i) {
  return `<input class="profile_orders_number input_number" type="number" value="${value}" min="1" max="20" step="1" data-price="${getAttr()[i].data}">`
}

function inputPrice(value, price) {
  return `<span class="price_text">${value * price}</span>`
}

function totalPrice() {
  let price = document.querySelectorAll('.price_text'),
      total = 0;
  for (const priceKey of price) {
    total = total + parseInt(priceKey.innerHTML)
  }
  return `<p class="price_total">${total}</p>`
}


let btnPlus = document.querySelectorAll('.btnplus'),
    btnMinus = document.querySelectorAll('.btnminus'),
    price = document.querySelectorAll('.profile_orders_price');

    for (let i = 0; i < btnMinus.length; i++) {
      setListener(btnPlus[i],'click', () => {
        if (getAttr()[i].value < getAttr()[i].max) {
          getAttr()[i].element.outerHTML = inputOuter(getAttr()[i].value + 1, i)
          if (price) {
            price[i].innerHTML = inputPrice(getAttr()[i].value, getAttr()[i].data)
            document.querySelector('.price_total').outerHTML = totalPrice()
          }
        }
      })
      setListener(btnMinus[i],'click', () => {
        if (getAttr()[i].value > getAttr()[i].min) {
          getAttr()[i].element.outerHTML = inputOuter(getAttr()[i].value - 1, i)
          if (price) {
            price[i].innerHTML = inputPrice(getAttr()[i].value, getAttr()[i].data)
            document.querySelector('.price_total').outerHTML = totalPrice()
          }
        }
      })
    }
