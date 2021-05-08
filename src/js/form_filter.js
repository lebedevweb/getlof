document.querySelector('.btn_filter').addEventListener('click', formFilter)
document.getElementById('btn_form_filter').addEventListener('click', formFilter)

function formFilter() {
    let formfilter = document.querySelector('.form_filter');
    if (formfilter.classList.contains('active')) {
        formfilter.classList.remove('active')
    } else {
        formfilter.classList.add('active')
    }
}
