  // Открытие/закрытие меню

  var mainNav = '.main-nav';
  var mainMenu = '.main-menu';
  var noJS = 'main-nav--no-js';
  var menuClosed = 'main-menu--menu-closed';
  var btnToggle = 'main-nav__toggle';
  var btnToggleOff = 'main-nav__toggle--off';

  var mainNav = document.querySelector(mainNav);
  var mainMenu = document.querySelector(mainMenu);

  if (mainNav && mainNav.classList.contains(noJS)) {
    mainNav.classList.remove(noJS);

    if (mainMenu) {
      mainMenu.classList.add(menuClosed);
    }
  }

  mainNav.addEventListener('click', function (event) {
    if (event.target.classList.contains(btnToggle)) {
      event.preventDefault();

      mainMenu.classList.toggle(menuClosed);
      event.target.classList.toggle(btnToggleOff);
    }
  });
