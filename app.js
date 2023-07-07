(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');
  
    buttons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        let value = e.target.dataset.num;
        screen.value += value;
      });
    });
  
    equal.addEventListener('click', function(e) {
      evaluateExpression();
    });
  
    clear.addEventListener('click', function() {
      screen.value = '';
    });
  
    document.addEventListener('keydown', function(e) {
      // Allow numbers, operators, parentheses, and decimal point
      if (/[\d+\-*/().]/.test(e.key)) {
        screen.value += e.key;
      }
      // Evaluate expression on Enter key
      else if (e.key === 'Enter') {
        evaluateExpression();
      }
    });
  
    function evaluateExpression() {
      if (screen.value === '') {
        screen.value = '';
      } else {
        try {
          let sanitizedExpression = screen.value.replace(/[^-()\d/*+.]/g, '');
          let result = new Function('return ' + sanitizedExpression)();
          screen.value = result;
        } catch (error) {
          screen.value = 'Error';
        }
      }
    }
  })();
  