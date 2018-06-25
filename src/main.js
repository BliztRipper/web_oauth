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

$(document).ready(function (){
  var dateobj = new Date();
  var bcyear = dateobj.getFullYear() + 543;
  function pad(n) {return n < 10 ? "0"+n : n;}
  var result = pad(dateobj.getDate())+"/"+pad(dateobj.getMonth()+1)+"/"+bcyear;
  $("#validate-dob").attr("placeholder",result);
})

/* Signature Section */
$('.js-signature').jqSignature();
$('.js-signature').on('jq.signature.changed', function () {
  $('.sign-btn').attr('disabled', false);
  $('.sign-btn').removeClass('btn-secondary');
});

function clearCanvas() {
  $('.js-signature').jqSignature('clearCanvas');
  $('.sign-btn').attr('disabled', true);
  $('.sign-btn').addClass('btn-secondary');
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



