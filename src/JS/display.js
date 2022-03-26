const displaySlider = (data) => {
  const section = document.getElementById('carouselExampleControls');
  const list = document.createElement('div');
  list.classList.add('carousel-inner');
  if (data !== []) {
    let active = "active";
    data.forEach((row) => {
      const { url, description } = row;
      const data = `<div class="carousel-item ${active}">
      <img class="d-block w-100"
          src="${url}"
          alt="${description}">
      </div>`;
      active = "";
      list.insertAdjacentHTML('beforeend', data);
    });
  }
  const buttons = `<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>`;
  section.appendChild(list);
  section.appendChild(buttons);
};

export default displaySlider;
