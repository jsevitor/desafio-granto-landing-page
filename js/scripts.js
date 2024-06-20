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

function main() {
  toggleSubMenu();
}

main();
