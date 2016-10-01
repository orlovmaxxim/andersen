module.exports = {
  validateForm: function (form) {
      var requiredInputs = form.find('input').not(
          'input[type="hidden"], ' +
          'input[type="submit"], ' +
          'input[type="radio"]'
        ),
        isValid = true;

      // выделим шаблон проверки почты
      var patternMail =  /\w+@\w+\.\w{2,4}/;

      // проходимя по каждому найденному полю
      $.each(requiredInputs, function(index, val) {
        var element = $(val),
          val = element.val(),
          placeholder = element.attr('placeholder');

        if((!val.length) || (val === placeholder)) {
          isValid = false;
          element.addClass('light-error');
        } else if ( ( element.hasClass('e-mail') ) && ( !patternMail.test(val) ) ) {
          isValid = false;
          element.addClass('light-error');
        }
      });
      return isValid;
  }
};
