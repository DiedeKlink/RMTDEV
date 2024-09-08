import {
    RESULTS_PER_PAGE,
    state,
    paginationEl,
    paginationNumberNextEl,
    paginationNumberBackEl,
    paginationBtnBackEl,
    paginationBtnNextEl,
} from "../common.js";
import renderJobList from "./JobList.js";

const renderPaginationButtons = () => {
    if (state.currentPage >= 2) {
        paginationBtnBackEl.classList.remove('pagination__button--hidden')
    } else {
        paginationBtnBackEl.classList.add('pagination__button--hidden')
    }

    if (state.currentPage == Math.ceil(state.searchJobItems.length / RESULTS_PER_PAGE)) {
        paginationBtnNextEl.classList.add('pagination__button--hidden')
    } else {
        paginationBtnNextEl.classList.remove('pagination__button--hidden')
    }




    paginationNumberNextEl.textContent = state.currentPage + 1;
    paginationNumberBackEl.textContent = state.currentPage - 1;

    paginationBtnNextEl.blur();
    paginationBtnBackEl.blur();

}

const clickHandler = event => {

    const clickedButtonEl = event.target.closest('.pagination__button');

    if (!clickedButtonEl) return;

    const nextPage = clickedButtonEl.className.includes('--next') ? true : false;

    nextPage ? state.currentPage++ : state.currentPage--;

    renderPaginationButtons();

    renderJobList();
}

paginationEl.addEventListener('click', clickHandler)

export default renderPaginationButtons
