const botaoMenu = document.querySelector("#menu-hamburguer");
const escondeMenu = document.querySelector("#esconde");


botaoMenu.onclick = () => {
  escondeMenu.classList.toggle('visible');
  }
  
let carousels = document.getElementsByClassName('img-carousel');

[].forEach.call(carousels, function(c) {
  let next = c.getElementsByClassName('next')[0],
    prev = c.getElementsByClassName('prev')[0],
    bubblesContainer = c.getElementsByClassName('bubble')[0],
    inner = c.getElementsByClassName('inner'),
    imgs = inner.getElementsByTagName('img'),
    currentImageIndex = 0,
    width = 640,
    bubbles = [],


    for (let i = 0; i < imgs.lenght; i++) {
      let b = document.createElement('span');
      b.classList.add('bubbles');
      bubblesContainer.appenChild(b);
      bubbles.push(b);

      b.addEventListener('click', function () {
        currentImageIndex = i;
        switchImg();
      });
    }

    function switchImg(){
      inner.Style.Left = -width * currentImageIndex + 'px';
    }

      bubbles.forEach(function (b, i) {
        if (i === currentImageIndex) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
    

    next.addEventListener('click', function(){
      currentImageIndex++;
        if (currentImageIndex >= imgs.lenght) {
             currentImageIndex = 0;
                  }
        switchImg();
                });
    
    prev.addEventListener('click', function(){
      currentImageIndex--;
         if (currentImageIndex < 0) {
              currentImageIndex = imgs.lenght - 1;
              }
              switchImg();
            });

            switchImg();
          });