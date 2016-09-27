module.exports = {
  callForm: function () {
    $('.callform').on('submit', function(e) {
      e.preventDefault();

      var form = $(this),
        data = form.serialize();
      console.log(data);

      var data = {
        name: $('[name=name]').val(),
        call: $('[name=call]').val()
      };

      console.log(data.call);

      jQuery.ajax({
        url: 'mail.php',
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
            console.log(data.status);
            form.find('.suc-alert').text('Запрос отправлен').show();
          }
        },
        error: function() {
          form.trigger('reset');
          console.log("last error");
          form.find('.error-alert').text('Ошибка на сервере').show();
        }
      });

    })
  },

  // everymonthPay: function() {
  //   $('.everymonth-pay').on('submit', function(e){
  //     e.preventDefault();
  //
  //     var form = $(this),
  //       data = form.serialize();
  //     console.log(data);
  //
  //     var data = {
  //       first: $('[name=first]').val(),
  //       second: $('[name=second]').val(),
  //       third: $('[name=third]').val()
  //     };
  //     console.log(data);
  //   })
  // },

  additionSend: function() {
    $('.addition-manager-form').on('submit', function(e){
      e.preventDefault();

      var form = $(this),
        data = form.serialize();
      console.log(data);

      var data = {
        name: $('[name=name]').closest('.addition-manager-form__input').val(),
        call: $('[name=call]').closest('.addition-manager-form__input').val()
      };
      console.log(data);

      jQuery.ajax({
        url: 'mail.php',
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
            console.log(data.status);
            form.find('.suc-alert').text('Запрос отправлен').show();
          }
        },
        error: function() {
          form.trigger('reset');
          console.log("last error");
          form.find('.error-alert').text('Ошибка на сервере').show();
        }
      });
    })
  },

  consultCall: function() {
    $('.manager-consult-form').on('submit', function(e){
      e.preventDefault();

      var form = $(this),
        data = form.serialize();
      console.log(data);

      var data = {
        name: $('[name=name]').closest('.manager-consult-form__input').val(),
        call: $('[name=call]').closest('.manager-consult-form__input').val(),
        nameManager: "Консультация " + $('#consult-form').find('h2 span').text()
      };
      console.log(data);

      jQuery.ajax({
        url: 'mail.php',
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
            console.log(data.status);
            form.find('.suc-alert').text('Запрос отправлен').show();
          }
        },
        error: function() {
          form.trigger('reset');
          console.log("last error");
          form.find('.error-alert').text('Ошибка на сервере').show();
        }
      });
    })
  },

  questionSend: function() {
    $('.question-manager-form').on('submit', function(e){
      e.preventDefault();

      var form = $(this),
        data = form.serialize();
      console.log(data);

      var data = {
        name: $('[name=name]').closest('.question-manager-form__input').val(),
        email: $('[name=email]').closest('.question-manager-form__input').val(),
        call: $('[name=call]').closest('.question-manager-form__input').val(),
        questionText: $('[name=desc]').closest('.question-manager-form__input').val()
      };
      console.log(data);

      jQuery.ajax({
        url: 'mail.php',
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
            console.log(data.status);
            form.find('.suc-alert').text('Запрос отправлен').show();
          }
        },
        error: function() {
          form.trigger('reset');
          console.log("last error");
          form.find('.error-alert').text('Ошибка на сервере').show();
        }
      });
    })
  },

  tabSend: function() {
    $('.everymonth-pay').on('submit', function(e){
      e.preventDefault();

      var form = $(this),
        data = form.serialize();
      console.log(data);

        var data = {
          first: $('[name=first]').val(),
          second: $('[name=second]').val(),
          third: $('[name=third]').val(),
          name: $('[name=name]').closest('.everymonth-pay__input').val(),
          call: $('[name=call]').closest('.everymonth-pay__input').val()
        };


      console.log(data);

      jQuery.ajax({
        url: 'mail.php',
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
            console.log(data.status);
            form.find('.suc-alert').text('Запрос отправлен').show();
          }
        },
        error: function() {
          form.trigger('reset');
          console.log("last error");
          form.find('.error-alert').text('Ошибка на сервере').show();
        }
      });
    })
  }
};