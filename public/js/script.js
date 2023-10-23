// ---------------------------------------VARIABLES
const currentPage = window.location.pathname;
const navButtons = document.querySelectorAll(".navigation-menu li");

//-----MODAL VARIABLES
const addEventButton = document.getElementById('addEventButton');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalButton = modalOverlay.querySelector('.close');
const cancelModalButton = modalOverlay.querySelector('.template-modal footer .cancel');
const saveChangeButton = modalOverlay.querySelector('.template-modal-footer .save-changes');



navButtons.forEach(navButton => {
    const navCopy = navButton.textContent
    if (navCopy.includes('My Plans') && (currentPage === '/' || currentPage === '/travelplan')) {
        navButton.classList.add('active-nav-button');
    }
})

//-----OPEN & CLOSE MODALS
function openModal() {
    modalOverlay.style.display = 'block';
}

function closeModal() {
    modalOverlay.style.display = 'none';
}

addEventButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
cancelModalButton.addEventListener('click', closeModal)

