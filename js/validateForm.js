//validation function for lets talk
function validateForm() {
  let info = [document.forms["contactForm"]["name"].value, document.forms["contactForm"]["phone"].value, document.forms["contactForm"]["email"].value, document.forms["contactForm"]["subject"].value, document.forms["contactForm"]["message"].value];
  let filled = true;
  let nonfilled = [];

  info.forEach(function(value, index) {
    if (value == "" || value == null) {
      filled = false;

      switch (index) {
        case 0:
          nonfilled.push('name');
          break;
        case 1:
          nonfilled.push('phone');
          break;
        case 2:
          nonfilled.push('email');
          break;
        case 3:
          nonfilled.push('subject');
          break;
        case 4:
          nonfilled.push('message');
      }
    }
  });

  if (!filled) {

    if (nonfilled.length == 2) {
      nonfilled[0] = (`${nonfilled[0]} and ${nonfilled[1]}`);
      nonfilled.pop();
    } else {
      nonfilled.forEach(function(value, index) {
        if (index != 0 && index != (nonfilled.length - 1)) {
          nonfilled[index] = (` ${nonfilled[index]}`);
        }

        if (index == (nonfilled.length - 1) && nonfilled.length != 1) {
          nonfilled[index] = (` and ${nonfilled[index]}`);
        }
      });
    }

    console.log(`Please fill in your ${nonfilled}!`);
    return false;

  } else {
    $('.sent').removeClass('fadeOut');
    $('.sent').addClass('fadeIn');
    $('.sent').show();
    setTimeout(function() {
      document.forms["contactForm"]["name"].value = "";
      document.forms["contactForm"]["phone"].value = "";
      document.forms["contactForm"]["email"].value = "";
      document.forms["contactForm"]["subject"].value = "";
      document.forms["contactForm"]["message"].value = "";
    }, 1000);
    setTimeout(function() {
      $('.sent').removeClass('fadeIn');
      $('.sent').addClass('fadeOut');
    }, 2000);
  };
};
