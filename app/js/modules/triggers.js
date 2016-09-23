module.exports = {
  callForm: function() {

    var callform = $('.callform');

    $('.call__btn').on('click touchstart', function(e){
      e.preventDefault();
      var $this = $(this);

      if(!callform.hasClass('active')) {
        //callform.show().addClass('active');
        callform.fadeIn(function(){
          $(this).addClass('active');
        });
      } else {
        callform.fadeOut(function(){
          $(this).removeClass('active');
        });
      }
    });

    $(document).on('click touchstart', function(e){
      var target = $(e.target),
        notPlank = !target.closest('.callform').length,
        notBtn = !target.hasClass('callform__btn');
      if(callform.hasClass('active') && notPlank && notBtn) {
        callform.fadeOut(function(){
          callform.removeClass('active');
        });
      }
    });

  }
};