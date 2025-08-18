 $(document).ready(function() {
    

    // Mobile Menu Logic
  const $mobileMenu = $('.mobile-menu');
  const $mobileMenuOverlay = $('.mobile-menu-overlay');
  const $menuTrigger = $('.header__icon--bars');
  const $menuClose = $('.mobile-menu__close');

  const $navClone = $('.header__nav').clone();
  $navClone.removeClass('header__nav flex-grow-1 d-none d-md-flex align-items-center justify-content-center').addClass('mobile-menu__nav-container');

  let mobileNavHtml = '<ul class="mobile-menu__nav list-unstyled">';
  $navClone.children('a, .dropdown').each(function() {
      if ($(this).hasClass('dropdown')) {
          const dropdownTitle = $(this).find('.dropdown-toggle').text();
          mobileNavHtml += `<li class="mobile-menu__item--dropdown"><strong>${dropdownTitle}</strong>`;
          mobileNavHtml += '<ul class="mobile-menu__submenu list-unstyled ms-3">';
          $(this).find('.dropdown-item').each(function() {
              mobileNavHtml += `<li>${$(this).prop('outerHTML')}</li>`;
          });
          mobileNavHtml += '</ul></li>';
      } else {
          mobileNavHtml += `<li>${$(this).prop('outerHTML')}</li>`;
      }
  });
  mobileNavHtml += '</ul>';

  $mobileMenu.find('.mobile-menu__body').html(mobileNavHtml);

  function openMenu() {
      $('body').addClass('mobile-menu-active');
      $mobileMenuOverlay.css('display', 'block');
      $mobileMenu.css('display', 'flex');
      setTimeout(() => {
          $mobileMenuOverlay.addClass('is-visible');
          $mobileMenu.addClass('is-open');
      }, 10);
  }

  function closeMenu() {
      $('body').removeClass('mobile-menu-active');
      $mobileMenu.removeClass('is-open');
      $mobileMenuOverlay.removeClass('is-visible');
      setTimeout(() => {
          $mobileMenu.hide();
          $mobileMenuOverlay.hide();
      }, 300);
  }

  $menuTrigger.on('click', function(e) {
      e.preventDefault();
      openMenu();
  });

  $menuClose.on('click', function(e) {
      e.preventDefault();
      closeMenu();
  });

  $mobileMenuOverlay.on('click', function(e) {
      e.preventDefault();
      closeMenu();
  });


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

// Slick slider Hero Section

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

 // Cart open
  $(document).off('click', '.header__icon--cart').on('click', '.header__icon--cart', function(e) {
    e.preventDefault();
    console.log('Kliknięto ikonę koszyka');
    $('.cart-preview, .cart-overlay').show();
    setTimeout(function() {
      $('.cart-preview, .cart-overlay').addClass('open');
    }, 10);
  });
  // Cart close
  $('.cart-preview__close, .cart-overlay').on('click', function() {
    $('.cart-preview, .cart-overlay').removeClass('open');
    setTimeout(function() {
      $('.cart-preview, .cart-overlay').hide();
    }, 300);
  });


  // Promotions Slider Section

  //  Mock data
  const productsData = {
    promotions: [
      { name: 'Półbuty mokasyny na grubej podeszwie', price: '350,10zł', img: 'assets/product-1-slider.png', labels: [{type: 'promo', text: 'PROMOCJA'}, {type: 'new', text: 'NOWOŚĆ'}] },
      { name: 'Eleganckie czółenka skórzane', price: '299,99zł', img: 'assets/product-2-slider.png', labels: [{type: 'promo', text: 'PROMOCJA'}] },
      { name: 'Wygodne sandały na lato', price: '180,50zł', img: 'assets/product-1-slider.png', labels: [{type: 'promo', text: 'PROMOCJA'}, {type: 'bestseller', text: 'BESTSELLER'}] },
      { name: 'Stylowe botki jesienne', price: '420,00zł', img: 'assets/product-2-slider.png', labels: [{type: 'promo', text: 'PROMOCJA'}] },
      { name: 'Klasyczne baleriny damskie', price: '150,00zł', img: 'assets/product-1-slider.png', labels: [{type: 'promo', text: 'PROMOCJA'}] },
      { name: 'Sportowe sneakersy miejskie', price: '310,00zł', img: 'assets/product-2-slider.png', labels: [{type: 'promo', text: 'PROMOCJA'}] },
      { name: 'Kozaki za kolano zamszowe', price: '550,00zł', img: 'assets/product-1-slider.png', labels: [] },
      { name: 'Letnie klapki na platformie', price: '210,00zł', img: 'assets/product-2-slider.png', labels: [{type: 'promo', text: 'PROMOCJA'}] },
    ],
    news: [
      { name: 'Nowoczesne jazzówki z Włoch', price: '480,00zł', img: 'assets/product-1-slider.png', labels: [{type: 'new', text: 'NOWOŚĆ'}] },
      { name: 'Awangardowe półbuty na koturnie', price: '390,00zł', img: 'assets/product-2-slider.png', labels: [{type: 'new', text: 'NOWOŚĆ'}] },
      { name: 'Minimalistyczne botki białe', price: '410,00zł', img: 'assets/product-1-slider.png', labels: [{type: 'new', text: 'NOWOŚĆ'}] },
      { name: 'Skórzane kozaki w stylu retro', price: '620,00zł', img: 'assets/product-2-slider.png', labels: [{type: 'new', text: 'NOWOŚĆ'}] },
      { name: 'Skórzane kozaki w stylu retro', price: '620,00zł', img: 'assets/product-1-slider.png', labels: [{type: 'new', text: 'NOWOŚĆ'}] },
    ],
    bestsellers: [
      { name: 'Bestsellerowe mokasyny', price: '350,10zł', img: 'assets/product-1-slider.png', labels: [{type: 'bestseller', text: 'BESTSELLER'}] },
      { name: 'Bestsellerowe sneakersy', price: '310,00zł', img: 'assets/product-2-slider.png', labels: [{type: 'bestseller', text: 'BESTSELLER'}] },
      { name: 'Bestsellerowe botki', price: '420,00zł', img: 'assets/product-1-slider.png', labels: [{type: 'bestseller', text: 'BESTSELLER'}, {type: 'promo', text: 'PROMOCJA'}] },
      { name: 'Bestsellerowe sandały', price: '180,50zł', img: 'assets/product-2-slider.png', labels: [{type: 'bestseller', text: 'BESTSELLER'}] },
      { name: 'Bestsellerowe czółenka', price: '299,99zł', img: 'assets/product-1-slider.png', labels: [{type: 'bestseller', text: 'BESTSELLER'}] },
    ]
  };

  
  function renderProductCards(products) {
    let html = '';
    products.forEach(product => {
      let labelsHtml = product.labels.map(label => 
        `<span class="product-card__label product-card__label--${label.type}">${label.text}</span>`
      ).join('');

      html += `
        <div>
          <div class="product-card">
            <div class="product-card__labels">${labelsHtml}</div>
            <img src="${product.img}" alt="${product.name}" class="img-fluid" loading="lazy" />
            <div class="product-card__body">
                <h3 class="product-card__name">${product.name}</h3>
                <div class="product-card__price">${product.price}</div>
            </div>
          </div>
        </div>
      `;
    });
    return html;
  }

  const productSliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: $('.promotions__slider-wrapper'),
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  function loadProducts(filter) {
    const $slider = $('.promotions__slider');
    
    if ($slider.hasClass('slick-initialized')) {
      $slider.slick('unslick');
    }
    
    const productsHtml = renderProductCards(productsData[filter]);
    $slider.html(productsHtml);
    
    $slider.slick(productSliderSettings);
  }

  $('.promotions__tab').on('click', function(e) {
    e.preventDefault();
    const $this = $(this);
    const filter = $this.data('filter');

    $('.promotions__tab').removeClass('active');
    $this.addClass('active');

    loadProducts(filter);
  });

  loadProducts('promotions');

  });