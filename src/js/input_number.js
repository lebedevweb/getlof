function btnGetAttr() {
  let input = document.querySelector('.input_number'),
    min = input.getAttribute('min'),
    max = input.getAttribute('max'),
    val = input.value;

  return {'element': input, 'value': val, 'min': min, 'max': max}

}

function btnPlus() {
  let attr = btnGetAttr();

  if (parseInt(attr.element.value) < parseInt(attr.element.max)) {
    attr.element.value ++
  }

  console.log(attr);
}

function btnMinus() {
  let attr = btnGetAttr();

  if (parseInt(attr.element.value) > parseInt(attr.element.min)) {
    attr.element.value --
  }
}
