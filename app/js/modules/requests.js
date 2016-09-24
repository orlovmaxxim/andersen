module.exports = {
  callForm: function () {
    $('.callform').on('submit', function(e) {
      e.preventDefault();

      var form = $(this),
        data = form.serialize();
      console.log(data);

      var data = {
        name: $('[name=name]').val(),
        call: $('[name=call]').val(),
      };

      console.log(data);

      jQuery.ajax({
        url: '/call',
        data: JSON.stringify(data),
        type: 'POST',
        contentType: 'application/json',
        beforeSend: function() {
          console.log(data);
        },
        success: function(data) {
          if(data.error) {
            console.log('data error');
          } else {
            console.log("good job");
          }
        },
        error: function() {
          form.trigger('reset');
          console.log("last error");
        }
      });

    })
  },

  everymonthPay: function() {
    $('.everymonth-pay').on('submit', function(e){
      e.preventDefault();

      var form = $(this),
        data = form.serialize();
      console.log(data);

      var data = {
        first: $('[name=first]').val(),
        second: $('[name=second]').val(),
        third: $('[name=third]').val(),
      };
      console.log(data);
    })
  }
};