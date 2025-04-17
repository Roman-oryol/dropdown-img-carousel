const toggleDropdown = (dropdown, toggleSelector, menuSelector) => {
  const dropdownToggle = dropdown.querySelector(toggleSelector);
  const menu = dropdown.querySelector(menuSelector);

  if (!menu || !dropdownToggle) {
    console.warn('Dropdown menu or dropdown toggle not found');
    return;
  }

  menu.style.maxHeight = `${menu.scrollHeight}px`;

  const isVisible = menu.classList.contains('visible');

  if (isVisible) {
    menu.style.maxHeight = '0';
  }

  menu.classList.toggle('visible', !isVisible);
};

export default toggleDropdown;
