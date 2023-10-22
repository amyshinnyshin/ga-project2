const currentPage = window.location.pathname;
const navButtons = document.querySelectorAll(".navigation-menu li");

navButtons.forEach(navButton => {
    const navCopy = navButton.textContent
    if (navCopy.includes('My Plans') && (currentPage === '/' || currentPage === '/travelplan')) {
        navButton.classList.add('active-nav-button');
    }
})

