document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const lista = document.querySelectorAll('#lista-competencias li');

  const imagenesPorCategoria = {
    "Huawei": "huawei.png",
    "Iphone": "iphone.jpg",
    "Samsung": "samsunsing.webp"
  };

  const fondoOriginal = getComputedStyle(body).backgroundImage;

  lista.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const categoria = item.textContent;
      const nuevaImagen = imagenesPorCategoria[categoria];

      if (nuevaImagen) {
        body.style.backgroundImage = `url('${nuevaImagen}')`;
      }
    });

    item.addEventListener('mouseleave', () => {
      body.style.backgroundImage = fondoOriginal;
    });
  });
});