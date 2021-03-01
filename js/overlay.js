const hbm_btn = document.getElementById('menu_btn');
const cls_btn = document.getElementById('close_btn');
const fadeElems = document.querySelectorAll('.has-fade');
const thing = document.querySelector('.black-thing');


function checkAll () {
    console.log('chamou');
    if (!hbm_btn.classList.contains('none')) {
        hbm_btn.classList.add('none')
        cls_btn.classList.remove('none')
        fadeElems.forEach((element) => {
            element.classList.add('fade-in')
            element.classList.remove('fade-out')
        })
        document.body.style.overflow = 'hidden';
    } else {
        hbm_btn.classList.remove('none')
        cls_btn.classList.add('none')
        fadeElems.forEach((element) => {
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
        document.body.style.overflow = 'visible';
    }
}

hbm_btn.addEventListener('click', checkAll);
cls_btn.addEventListener('click', checkAll);
thing.addEventListener('click', checkAll);