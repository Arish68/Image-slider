$( document ).ready(function() {
  let selected_color =  $('.product__color-swatches').find('.product__color-swatch.selected').attr('data-label');
   swatchMediaByColor(selected_color);
});

$( ".product__details .product__color-swatch" ).on( "click", function() {
   swatchMediaByColor($(this).attr('data-label'));
});

function swatchMediaByColor(selected_color_option)
{
   let current_color = ".color-"+selected_color_option;
   setTimeout(function() {
   $(".js-product-media .product__media").slick('slickUnfilter');
   $(".js-product-media .product__media").slick('slickFilter',current_color);
   $(".js-product-media .product-thumbnails").slick('slickUnfilter');
   $(".js-product-media .product-thumbnails").slick('slickFilter',current_color);
  }, 500);
}
