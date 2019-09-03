/*--- yamm menu ---*/

$(document).on('click', '.yamm .dropdown-menu', function (e) {
  e.stopPropagation()
})

/*--- owl-1 ---*/

$('#multi-1').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 2
    },
    1000: {
      items: 5
    }
  }
})

var multi1 = $('#multi-1');
multi1.owlCarousel();
// Go to the next item
$('.multi-1nextbtn').click(function () {
  multi1.trigger('next.owl.carousel', [500]);
})
// Go to the previous item
$('.multi-1prevbtn').click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  multi1.trigger('prev.owl.carousel', [500]);
})

/*--- owl 2 ---*/

$('#multi-2').owlCarousel({
  center: true,
  items: 2,
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 3
    },
    1200: {
      items: 5
    }
  }
});

var multi2 = $('#multi-2');
multi2.owlCarousel();
// Go to the next item
$('.multi-2nextbtn').click(function () {
  multi2.trigger('next.owl.carousel', [500]);
})
// Go to the previous item
$('.multi-2prevbtn').click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  multi2.trigger('prev.owl.carousel', [500]);
})

/*--- owl 11 db kártya mobil --- */

$('.owl-carousel').owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 4
    },
    350: {
      items: 5
    }
  }
})