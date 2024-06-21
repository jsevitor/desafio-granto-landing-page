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
    });
}

function main() {
  toggleSubMenu();
  toggleMenu();
}

main();
