document.querySelector('.text__btns__bookmark').addEventListener('click', () => {
    if (document.getElementById('book').checked){
        document.getElementById('bookmark-txt').innerHTML = "Bookmark";
    } else {
        document.getElementById('bookmark-txt').innerHTML = "Bookmarked";
    }
})