import toggleDropdown from './js/modules/dropdown';
import initSlider from './js/modules/slider';
('./js/modules/slider');

import './styles/style.css';

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', () =>
    toggleDropdown(dropdown, '.dropdown-toggle', '.dropdown-menu'),
  );
});

document.addEventListener('DOMContentLoaded', initSlider);
