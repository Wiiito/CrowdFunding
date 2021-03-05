//Overlay
const hbm_btn = document.getElementById('menu_btn');
const cls_btn = document.getElementById('close_btn');
const fadeElems = document.querySelectorAll('.has-fade');
const thing = document.querySelector('.black-thing');


function checkAll () {
    if (!hbm_btn.classList.contains('none')) {
        window.menu = new Boolean(true);
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
thing.addEventListener('click', closeOverlay);

//Close clicking on overlay
function closeOverlay () {
    //Check if the menu is open
    if (window.menu) {
        window.menu = false;
        checkAll();
    } else {
        closeModal();
    }
}

//Bookmark
document.querySelector('.text__btns__bookmark').addEventListener('click', () => {
    if (document.getElementById('book').checked){
        document.getElementById('bookmark-txt').innerHTML = "Bookmark";
    } else {
        document.getElementById('bookmark-txt').innerHTML = "Bookmarked";
    }
})

//Modal
const inputModal = document.querySelectorAll('.modal-input');

inputModal.forEach((element) => {
    var id = element.dataset.id;
    var pledge = document.getElementById(`modal-pledge-${id}`);

    element.addEventListener('click', () => {
        hideAll();
        pledge.style.display = "block";
        document.getElementById(`modal-container-${id}`).style.borderColor = "hsl(176, 72%, 28%)";
    })
})

function hideAll () {
    inputModal.forEach((element) => {
        var id = element.dataset.id;

        document.getElementById(`modal-pledge-${id}`).style.display = "none";
        document.getElementById(`modal-container-${id}`).style.borderColor = "hsl(0, 0%, 48%)";
    })
}

//Modal Overlay

//Open from buttons
const modal = document.querySelector('.modal');
const slctRwrd = document.querySelectorAll('.slct-rwrd');

slctRwrd.forEach((element) => {
    element.addEventListener('click', () => {
        var id = element.dataset.id;

        if (!modal.classList.contains('fade-in')) {
            modal.classList.remove('fade-out');
            thing.classList.remove('fade-out');

            modal.classList.add('fade-in');
            thing.classList.add('fade-in');

            $('html, body').animate({scrollTop: document.getElementById(`modal-container-${id}`).offsetHeight * (id * 0.8)}, 'slow');

            document.querySelector(`#modal-input-${id}`).checked = true;
            document.getElementById(`modal-pledge-${id}`).style.display = "block";
            document.getElementById(`modal-container-${id}`).style.borderColor = "hsl(176, 72%, 28%)";
        }
    })
})

//Close Modal
document.getElementById('close-modal').addEventListener('click', closeModal);

function closeModal () {
    hideAll();

    modal.classList.remove('fade-in');
    thing.classList.remove('fade-in');

    document.getElementById('modal').style.display = "none";

    modal.classList.add('fade-out');
    thing.classList.add('fade-out');
}