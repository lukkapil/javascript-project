'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

function closeModal(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

function openModal(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
for(let i=0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', openModal);
}

// nie używamy wywołania w ten sposób closeModal() bo to wywołałoby funkcję od razu, a my
// chcemy żeby wywołała się po kliknięciu
btnCloseModal.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

// parametr event przekazywany w funkcji to po prostu obiekt tworzony przez JS
// można go nazwać jakkolwiek
// kiedy ten 'event' będzie miał miejsce, to JS wywoła tą funkcję
// po ludzku "Hej JavaScript, wywołaj tą funkcje wtedy kiedy event się wydarzy, jak się 
// wydarzy, to przekaż event jako argument"
document.addEventListener('keydown', function(event){
    console.log(event.key);
    if(event.key === 'Escape' && !modal.classList.contains('hidden')){
        // takie zamknięcie modala mogło by zadziałać w cypressie przy przedłużeniu sesji
            closeModal();
    }
})