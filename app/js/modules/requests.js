var valid = require('./validate.js');
module.exports = {
  callForm: function () {
    $('.callform').on('submit', function(e) {
      e.preventDefault();

      var form = $(this),
        alldata = form.serialize();

      // var data = {
      //   name: $('[name=name]').closest('.callform__input').val(),
      //   tel: $('[name=tel]').closest('.callform__input').val()
      // };

if(valid.validateForm(form)) {
  $.ajax({
    url: 'static/email.php',
    data: alldata,
    type: 'POST',
    dataType: 'json',
    beforeSend: function() {
    },
    success: function(data) {
      if(data.error) {

      } else {
        form.find('.suc-alert').text('Спасибо, ваша заявка отправлена').show();
      }
    },
    error: function() {
      form.trigger('reset');
      form.find('.error-alert').text('Ошибка на сервере').show();
    }
  });
}


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
        alldata = form.serialize();

      // var data = {
      //   name: $('[name=name]').closest('.addition-manager-form__input').val(),
      //   call: $('[name=call]').closest('.addition-manager-form__input').val()
      // };
      if(valid.validateForm(form)) {
        jQuery.ajax({
          url: 'static/email.php',
          data: alldata,
          type: 'POST',
          dataType: 'json',
          beforeSend: function() {
          },
          success: function(data) {
            if(data.error) {
            } else {
              form.find('.suc-alert').text('Спасибо, ваша заявка отправлена').show();
            }
          },
          error: function() {
            form.trigger('reset');
            form.find('.error-alert').text('Ошибка на сервере').show();
          }
        });
      }
    })
  },

  consultCall: function() {
    $('.manager-consult-form').on('submit', function(e){
      e.preventDefault();

      var form = $(this),
        alldata = form.serialize();

      var data = {
        name: $('[name=name]').closest('.manager-consult-form__input').val(),
        call: $('[name=call]').closest('.manager-consult-form__input').val(),
        manager: "Консультация " + $('#consult-form').find('h2 span').text()
      };

      alldata = alldata + data.manager;
      if(valid.validateForm(form)) {
        jQuery.ajax({
          url: 'static/email.php',
          data: alldata,
          type: 'POST',
          dataType: 'json',
          beforeSend: function() {
          },
          success: function(data) {
            if(data.error) {
            } else {
              form.find('.suc-alert').text('Спасибо, ваша заявка отправлена').show();
            }
          },
          error: function() {
            form.trigger('reset');
            form.find('.error-alert').text('Ошибка на сервере').show();
          }
        });
      }
    })
  },

  questionSend: function() {
    $('.question-manager-form').on('submit', function(e){
      e.preventDefault();

      var form = $(this),
        alldata = form.serialize();

      // var data = {
      //   name: $('[name=name]').closest('.question-manager-form__input').val(),
      //   email: $('[name=email]').closest('.question-manager-form__input').val(),
      //   call: $('[name=call]').closest('.question-manager-form__input').val(),
      //   questionText: $('[name=desc]').closest('.question-manager-form__input').val()
      // };
      // console.log(data);
      if(valid.validateForm(form)) {
        jQuery.ajax({
          url: 'static/email.php',
          data: alldata,
          type: 'POST',
          dataType: 'json',
          beforeSend: function() {
          },
          success: function(data) {
            if(data.error) {
            } else {
              form.find('.suc-alert').text('Спасибо, ваша заявка отправлена').show();
            }
          },
          error: function() {
            form.trigger('reset');
            form.find('.error-alert').text('Ошибка на сервере').show();
          }
        });
      }
    })
  },

  tabSend: function() {
    $('.everymonth-pay').on('submit', function(e){
      e.preventDefault();

      var form = $(this),
        alldata = form.serialize();

        var data = {
          startpay: $('[name=startpay]').val(),
          typehome: $('[name=typehome]').val(),
          timelimit: $('[name=timelimit]').val()
        };

     var formId = form.attr('id');

      // alldata = alldata + data.plan + ". Этаж: " + data.hight + ". Ссылка на фото: " + data.foto;


      if(valid.validateForm(form)) {
        jQuery.ajax({
          url: 'static/email.php',
          data: alldata,
          type: 'POST',
          dataType: 'json',
          beforeSend: function() {
          },
          success: function(data) {
            if(data.error) {
            } else {
              form.find('.suc-alert').text('Спасибо, ваша заявка отправлена').show();
            }
          },
          error: function() {
            form.trigger('reset');
            form.find('.error-alert').text('Ошибка на сервере').show();
          }
        });
      }
    })
  },

  planSend: function() {
    $('.planing-choose-form').on('submit', function(e){
      e.preventDefault();

      var form = $(this),
         alldata = form.serialize();

      var data = {
        name: $('[name=name]').closest('.planing-choose-form__input').val(),
        tel: "test=" + $('[name=tel]').closest('.planing-choose-form__input').val(),
        plan: $('#planing-form .popup-header__title').text(),
        hight: $('#planing-form .planing-choose-form__title').text(),
        foto: $('#planing-form .plan__img').attr('src')
      };

      alldata = alldata + data.plan + ". Этаж: " + data.hight + ". Ссылка на фото: " + "http://lp.domandersen.ru" + data.foto;



        // url: 'static/email.php',
        // data: JSON.stringify(alldata),
        // type: 'POST',
        // contentType: 'application/json',
      if(valid.validateForm(form)) {
        jQuery.ajax({
          url: 'static/email.php',
          data: alldata,
          type: 'POST',
          dataType: 'json',
          beforeSend: function() {
          },
          success: function(data) {
            if(data.error) {
            } else {
              //$('#planing-form').fadeOut();
              form.find('.suc-alert').text('Спасибо, ваша заявка отправлена').show();
            }
          },
          error: function() {
            form.trigger('reset');
            form.find('.error-alert').text('Ошибка на сервере').show();
          }
        });
      }
    })
  },

  freeformSend: function() {
    $('.freeform').on('submit', function(e){
      e.preventDefault();

      var form = $(this),
        alldata = form.serialize();

      console.log(alldata);

      if(valid.validateForm(form)) {
        jQuery.ajax({
          url: 'static/email.php',
          data: alldata,
          type: 'POST',
          dataType: 'json',
          beforeSend: function() {
          },
          success: function(data) {
            if(data.error) {
            } else {
              //$('#planing-form').fadeOut();
              form.find('.suc-alert').text('Спасибо, ваша заявка отправлена').show();
            }
          },
          error: function() {
            form.trigger('reset');
            form.find('.error-alert').text('Ошибка на сервере').show();
          }
        });
      }
    })
  }

};