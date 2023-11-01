// const { event } = require("jquery");

// ---------------------------------------VARIABLES
const currentPage = window.location.pathname;
const navButtons = document.querySelectorAll('.navigation-menu li');

//-----MODAL VARIABLES
const modal = document.querySelector('.template-modal');
const addEventButton = document.getElementById('addEventButton');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalButton = modalOverlay.querySelector('.close');
const cancelModalButton = modalOverlay.querySelector('.cancel');


const saveChangeButton = modalOverlay.querySelector('.save-changes');

//–––––––––––-Variable for Event Form
const modalForm = document.getElementById('addEventForm')

const eventList = document.getElementById('eventList')



navButtons.forEach(navButton => {
    const menuItemURL = navButton.querySelector('a').getAttribute('href');
    if (currentPage === menuItemURL) {
      navButton.classList.add('active-nav-button');
    }else {
      navButton.classList.remove('active-nav-button');
    }
  });
  

navButtons.forEach(navButton => {
    const navCopy = navButton.textContent
    if (navCopy.contains('My Plans') && (currentPage === '/' || currentPage === '/travelplan')) {
        navButton.classList.add('active-nav-button');
    }
})

// //-----OPEN & CLOSE MODALS
// function openModal() {
//     modalOverlay.style.display = 'block';
// }


//-----OPEN & CLOSE MODALS
function openModal() {
    modalOverlay.style.display = 'block';
}

function closeModal() {
    modalOverlay.style.display = 'none';
}

addEventButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
cancelModalButton.addEventListener('click', closeModal);
