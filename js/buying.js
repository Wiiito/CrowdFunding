//Click on buy
const buybtn = document.querySelectorAll('.buying-btn');

buybtn.forEach((element) => {
    element.addEventListener('click', () => {
        modal.classList.remove('fade-in')
        modal.classList.add('fade-out');

        document.getElementById('modal').style.display = "block";

        $('html, body').animate({ scrollTop: 0 }, 'slow');

        //Getting value
        var id = element.dataset.id;
        var value = Number(document.getElementById(`pledge-input-${id}`).value);

        if (value != 0) {
            addToTotal(value);
            itemLeft(document.getElementsByClassName(`itens-left-${id}`), id);
        }
    });
})

//Function that change quantity
var bamboo = [101, 64, 0];

for (i = 0; i < bamboo.length; i++) {
    if (bamboo[i] == 0) {
        document.getElementById(`modal-container-0${i + 2}`).classList.add('out-of-stock');
        document.getElementsByClassName(`about__container__item`)[i].classList.add('out-of-stock')
    }
}

function itemLeft(item, id) {
        
    if (bamboo[id-2] > 0) {

        bamboo[id-2]--

        for (i = 0; i < item.length; i++) {
            item[i].innerHTML = bamboo[id-2];
        }
    }
}

function checkIfThere() {
    
}


//Changing Value
var backed = 89914;
const ebacked = document.getElementById('backed');
ebacked.innerHTML = '$ ' + addCommas(backed);

var backers = 5007;
const ebackers = document.getElementById('backers');
ebackers.innerHTML = addCommas(backers);

function addCommas (num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function addToTotal(v) {
    backed = backed + v;
    ebacked.innerHTML = '$ ' + addCommas(backed);

    backers++
    ebackers.innerHTML = addCommas(backers);

    document.getElementById('goal-bar').style.width = backed / 1000 + '%';
}

//Click Get it!
const getIt = document.getElementById('success-modal-btn');

getIt.addEventListener('click', () => {
    closeModal();
})