const web__btn = document.querySelector('#web__btn'),
      works = document.querySelector('#works_container'),
      more = document.querySelector('.more'),
      menu = document.querySelector('#menu'),
      mainWorkBtn = document.querySelector('#main-work__btn'),
      activeBtn = document.querySelector('.work__btn'),
      work = document.createElement('div');
      work.className = "col-lg-6 text-center";
      work.innerHTML = `
                      <div id="web" id="work" class="portfolio-block__work">
                  <img src="/img/portfolio/1.png" width="100%" alt="work_1">
                  <p>Isometric Perspective Mock-Up</p>
                </div>`;
      work_2 = document.createElement('div');
      work_2.className = "col-lg-6 text-center";
      work_2.innerHTML = `
      <div id="apps" class="portfolio-block__work">
      <img src="/img/portfolio/2.png" width="100%" alt="work_2">
      <p>Time Zone App UI</p>
    </div>`;

// Удаление фиксированного меню на экранах меньше 992 пикселей
if(window.innerWidth < 992) {
  menu.classList.remove('fixed-top');
}

// Переключатель в блоке портфолио
activeBtn.addEventListener('click', () => {
  mainWorkBtn.classList.remove('active')
})

// Добавление элементов в портфолио по клику
more.addEventListener('click', () => {
  more.remove();
  works.appendChild(work);
  works.appendChild(work_2);
})




