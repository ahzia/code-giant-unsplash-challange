const displaySlider = (data) => {
  const section = document.getElementById('carouselExampleControls');
  const list = document.createElement('div');
  list.classList.add('carousel-inner');
  if (data !== []) {
    let active = 'active';
    data.forEach((row) => {
      const { url, description } = row;
      const data = `<div class="carousel-item ${active}">
      <img class="d-block image"
          src="${url}"
          alt="${description}">
      </div>`;
      active = '';
      list.insertAdjacentHTML('beforeend', data);
    });
  }
  section.insertBefore(list, section.firstChild);
};

export default displaySlider;
