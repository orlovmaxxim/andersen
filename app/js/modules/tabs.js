module.exports = {
  init: function () {
    $('.buy-method-tabs__tab').on('click', function(e) {
      e.preventDefault();

      var $this = $(this),
        method = $this.closest('.methods-block'),
        tab = $this.closest('.buy-method-tabs__item'),
        index = tab.index(),
        content = method.find('.mortgage').eq(index);

      tab.addClass('buy-method-tabs__item_active').siblings().removeClass('buy-method-tabs__item_active');
      content.addClass('active').siblings().removeClass('active');
      // if( index == 2 ) {
      //   tab1.removeClass('buy-method-tabs__item_color-dark');
      // } else if (!tab1.hasClass('buy-method-tabs__item_color-dark')) {
      //   tab1.addClass('buy-method-tabs__item_color-dark');
      // }
    });
  }
};