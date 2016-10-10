module.exports = {
  validateForm: function (form) {
      var requiredInputs = form.find('input').not(
          'input[type="hidden"], ' +
          'input[type="submit"], ' +
          'input[type="radio"]'
        ),
        isValid = true;
    
      var patternMail =  /\w+@\w+\.\w{2,4}/;
    
      $.each(requiredInputs, function(index, val) {
        var element = $(val),
          val = element.val(),
          placeholder = element.attr('placeholder');

        if((!val.length) || (val === placeholder)) {
          isValid = false;
          element.addClass('light-error');
          (element.attr('name') == 'name') ? (element.next('span').text('Не указано имя')):
          (element.attr('name') == 'tel') ? (element.next('span').text('Не указан телефон')):
          (element.next('span').text('Не указан email адрес'));
        } else if ( ( element.hasClass('e-mail') ) && ( !patternMail.test(val) ) ) {
          isValid = false;
          element.addClass('light-error');
        }
      });
      return isValid;
  }
};
