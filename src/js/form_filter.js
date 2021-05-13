let btnFilter = document.querySelector('.btn_filter'),
    btnFormFilter = document.getElementById('btn_form_filter');

if (btnFilter) {
  btnFilter.addEventListener('click', formFilter)
}
if (btnFormFilter) {
  btnFilter.addEventListener('click', formFilter)
}

function formFilter() {
  let formfilter = document.querySelector('.form_filter');
  if (formfilter) {
    if (formfilter.classList.contains('active')) {
      formfilter.classList.remove('active')
    } else {
      formfilter.classList.add('active')
    }
  }
}
