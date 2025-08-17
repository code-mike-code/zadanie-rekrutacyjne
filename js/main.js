 $(document).ready(function() {
    
    const categories = [
    { name: 'Baleriny', id: 101 },
    { name: 'Jazzówki', id: 102 },
    { name: 'Mokasyny', id: 103 },
    { name: 'Czółenka', id: 104 },
    { name: 'Sandały', id: 105 },
    { name: 'Kozaki', id: 106 },
    { name: 'Półbuty', id: 107 },
    { name: 'Wyprzedaż', id: 108 }
  ];
  const $catLoader = $('#category-loader').parent();
  $catLoader.empty();
  categories.forEach(function(cat, i) {
    const imgId = 237 + i;
    $catLoader.append(`
      <div class="col-6 col-md-3">
        <div class="categories__item">
          <img src="https://picsum.photos/id/${imgId}/600/400" alt="${cat.name}" loading="lazy" />
          <div class="categories__item-name">${cat.name}</div>
        </div>
      </div>
    `);
  });

// Slick slider 

  $('.slider__wrapper').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>'
    });

 // Otwieranie podglądu koszyka
  $(document).off('click', '.header__icon--cart').on('click', '.header__icon--cart', function(e) {
    e.preventDefault();
    console.log('Kliknięto ikonę koszyka');
    $('.cart-preview, .cart-overlay').show();
    setTimeout(function() {
      $('.cart-preview, .cart-overlay').addClass('open');
    }, 10);
  });
  // Zamknięcie podglądu koszyka
  $('.cart-preview__close, .cart-overlay').on('click', function() {
    $('.cart-preview, .cart-overlay').removeClass('open');
    setTimeout(function() {
      $('.cart-preview, .cart-overlay').hide();
    }, 300);
  });
  });