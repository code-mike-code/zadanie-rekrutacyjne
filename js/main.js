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

  // Event Listeners
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
  });