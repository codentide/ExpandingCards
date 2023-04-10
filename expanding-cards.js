const cardItems = document.querySelectorAll(".card-item");

cardItems.forEach((cardItem) => {
  cardItem.addEventListener("click", () => {
    //Eliminar la clase de todos los elementos
    cardItems.forEach((cardItem) => {
      cardItem.classList.remove("active");
    });

    //Añadir la clase solo al elemento seleccionado
    cardItem.classList.add("active");
  });
});
