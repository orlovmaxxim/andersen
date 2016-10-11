module.exports = {

  checkView: function() {
    $('.checkbox').on('click touchstart', function(e){
      //e.preventDefault();
      var name = $(this).data("name");
      if ($(this).prop("checked")) {
        // console.log('check');
         
         console.log(name);
        $('#' + name).show();
        //$('.freeform__overlay').show();
      } else {
        // console.log('uncheck');
        //$('.freeform__overlay').hide();
        $('#' + name).hide();
      }
    });

    // $('input[type="checkbox"]').each(function() {
    //   if ($(this).prop("checked")) {
    //     $('.freeform__overlay').show();
    //   } else {
    //     $('.freeform__overlay').hide();
    //   }
    // });
  }
};
