function init () {
    document.querySelector('.faq-question').addEventListener('click', function(event) {
        if (event.target.tagName === 'H2') {
            header = event.target
            arrow =  event.target.nextElementSibling
            answer = event.target.parentElement.nextElementSibling
            header.classList.toggle('header-active')
            arrow.classList.toggle('active')
            answer.classList.toggle('hidden')
            
        } else {
            // do nothing
        }
    });
}


init();