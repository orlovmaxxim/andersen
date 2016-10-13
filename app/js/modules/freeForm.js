module.exports = {

  checkView: function() {
    $('.checkbox').on('click touchstart', function(e){
      //e.preventDefault();
      var name = $(this).data("name");
      if ($(this).prop("checked")) {
         console.log(name);
        $('#' + name).show();
      } else {
        $('#' + name).hide();
      }
    });
  }
};
