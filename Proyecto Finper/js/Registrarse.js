$(function(){
  $('select').material_select();
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 70,
    min: new Date(1929,11,31),
    max: new Date(2002,12,31),
    today: 'Hoy',
    clear: 'Limpiar',
    close: 'Cerrar',
    closeOnSelect: true,
    labelMonthNext: 'Siguiente mes',
    labelMonthPrev: 'Anterior mes',
    labelMonthSelect: 'Selecciona Mes',
    labelYearSelect: 'Selecciona Año',
    monthsFull: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
    monthsShort: [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ],
    weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
    weekdaysShort: [ 'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab' ],
    weekdaysLetter: [ 'D', 'L', 'M', 'X', 'J', 'V', 'S' ],
    format: 'yyyy-mm-dd',
    changeMonth: true,
    changeYear: true
  });


  $('#formulario').submit(function(event){
    event.preventDefault();
    checkContrasena();
  })
})

function checkContrasena(){
  var contrasena = $('#passw').val();
  var repContrasena = $('#passw2').val();

  if (contrasena===repContrasena) {
    getDatos();

  }else {
    alert('Las contraseñas no coinciden')
  }
}

function getDatos(){
  var form_data = new FormData();
  form_data.append('first_name', $('#first_name').val());
  form_data.append('last_name', $('#last_name').val());
  form_data.append('date', $('#date').val());
  form_data.append('passw', $('#passw').val());
  form_data.append('email', $('#email').val());
  sendForm(form_data);
}

function sendForm(formData){
  $.ajax({
    url: 'server/create_user.php',
    dataType: "json",
    cache: false,
    processData: false,
    contentType: false,
    data: formData,
    type: 'POST',
    success: function(php_response){
      if (php_response.msg == "exito en la inserción") {
        window.location.href = 'welcome.html';
      }else {
        alert(php_response.msg);
      }
    },
    error: function(){
      alert("error en la comunicación con el servidor");
    }
  })
}
