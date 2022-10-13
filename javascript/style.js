$(function() {
  $('#toggle').on('click', function() {
    $('body').toggleClass('is-open');
  });
});

new ScrollHint('.js-scrollable', {
  scrollHintIconAppendClass: 'scroll-hint-icon-white', // white-icon will appear
  i18n: {
    scrollable: 'スクロールできます'
  }
});