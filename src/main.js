//@prepros-prepend ../node_modules/jquery/dist/jquery.min.js
//@prepros-prepend ../node_modules/jq-signature/jq-signature.min.js
//@prepros-prepend ../node_modules/bootstrap/dist/js/bootstrap.bundle.js
//@prepros-prepend ../node_modules/cleave.js/dist/cleave.min.js 

/*Form Validation*/
(function form_check() {
  'use strict';
  window.addEventListener('load', function () {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('keyup', function (event) {
        var btnClass = document.getElementById("check-invalid");
        btnClass.setAttribute("disabled", "disabled");
        btnClass.classList.add("btn-secondary");
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
          btnClass.removeAttribute("disabled");
          btnClass.classList.remove("btn-secondary");
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false); 
})();

$('#styled-checkbox-2').click(function(){ 
  var $list = $('.next--btn');
  var btnClass = $('#check-invalid')
  if ($list.attr('disabled')) {
    $list.removeAttr('disabled');
    btnClass.removeClass("btn-secondary");
  } else { 
    $list.attr('disabled', 'disabled');
    btnClass.addClass("btn-secondary");
  }
})

$(document).ready(function (){
  // $('.otp__reset').click(function(){
  //   $('#check-invalid').attr('disabled', 'disabled');
  //   $('#check-invalid').addClass('btn-secondary');
  // })
  var dateobj = new Date();
  var bcyear = dateobj.getFullYear() + 543;
  function pad(n) {return n < 10 ? "0"+n : n;}
  var result = pad(dateobj.getDate())+"/"+pad(dateobj.getMonth()+1)+"/"+bcyear;
  $("#validate-dob").attr("placeholder",result);
})

/* Signature Section */
$('.js-signature').jqSignature();
$('.js-signature').on('jq.signature.changed', function () {
  $('.next--btn').attr('disabled', false);
  $('.next--btn').removeClass('btn-secondary');
});

function clearCanvas() {
  $('.js-signature').jqSignature('clearCanvas');
  $('.next--btn').attr('disabled', true);
  $('.next--btn').addClass('btn-secondary');
}
function saveCanvas() {
  var signature = $('.js-signature').jqSignature('getDataURL');
  console.log(signature);
  window.location.href = 'otp.html'
}

function isNumberKey(evt){
  var charCode = (evt.which) ? evt.which : event.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
  return true;
}

/*OTP auto focus*/
$(".otp input").keyup(function () {
  if ($(this).val().length >= 1) {
    var input_flds = $(this).closest('form').find(':input');
    input_flds.eq(input_flds.index(this) + 1).focus();
  }
});



