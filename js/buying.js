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
        }
    });
})

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