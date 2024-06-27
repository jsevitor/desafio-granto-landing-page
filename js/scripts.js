const toggleSubMenu = () => {
  let headerSubmenu = document.querySelector(".header-submenu");
  let dropdownMenu = document.querySelector("#dropdown-menu");

  if (headerSubmenu && dropdownMenu) {
    dropdownMenu.addEventListener("click", () => {
      headerSubmenu.classList.toggle("visible");
    });
  } else {
    console.error("Elementos não encontrados.");
  }
};

const toggleMenu = () => {
  let btn = document.querySelector("#btn-menu");
  let headerMenu = document.querySelector(".header-menu-items");

  btn.addEventListener("click", () => {
    headerMenu.classList.toggle("visible");

    if (btn.classList.contains("bi-list")) {
      btn.classList.remove("bi-list");
      btn.classList.add("bi-x");
    } else {
      btn.classList.remove("bi-x");
      btn.classList.add("bi-list");
    }
  });
};

function main() {
  toggleSubMenu();
  toggleMenu();
}

main();
