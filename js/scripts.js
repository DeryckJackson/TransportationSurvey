$(document).ready(function() {
  $("form#transportation_survey1").submit(function(event) {
    event.preventDefault();
    
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      const workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    
    $("#transportation_survey1").hide();
    $("#transportation_survey2").show();
  });
  $("form#transportation_survey2").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      const funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    });
    $('#transportation_survey2').hide();
    $("#work-responses").show();
    $("#fun-responses").show();
  });
});