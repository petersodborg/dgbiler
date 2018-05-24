
$(document).ready(function(){
//$('#action-button').click(function() {
  $.ajax({
    url: 'http://dgbiler.dev5.mediastyle.dk/socket.io',
    type: 'GET',
    contentType: 'application/json; charset=utf-8',
    data: {
       format: 'JSON',
    },
    dataType: 'json',
    error: function() {
       $('#info').html('<p>An error has occurred</p>');
    },
    success: function(data) {
       //console.log(data);
       //var $all = $('<p>').text(data);

    carTotal = data.length;

    $(".car-total").append(carTotal + " Søgeresultater");
    
    //Søgning på tekst
    $(".form-control").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".info *" ).filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  //SELECT BOX KATEGORI
 $(function() {

  // Read selected option
  $('#but_read').click(function(){
    var Make = $('#selUser option:selected').text();

    $('#info').html("Make : " + option.selected);

  });
});  

//bil liste
  $.each(data, function(i, item){
  $(".bil-container")
  .append("<div class='col-md-4'>"
  + '<img src="' + item.Pictures[0] + '" height="232" width="436">' +
  "<a href='biler.html?=index class=''><div class='info'>" + "<h5>" + item.Model + " " + item.Make + "</h5>"
  + "<p>" + item.KmPerLiter + "Km/l" + " "+ item.Variant + "</p>" + 
  "<div class='car-body'><p> LEASING(incl service):" + data.Mileage + "</p></div></div>"  +
  "<div class='btn-container'>" + "<button type='button' class='btn btn-danger'>" + item.RetailPrice + " kr." + "</button>" + "</div>" +"</div>")
        }),
        

  $.each(data, function(index, items){
    console.log(index);
    console.log(items);
    console.log(items.Make);
  $(".one-car-container")
  .append("<div class='page-header'>" + "<h1>" 
  + items.Make + "<h1>" + "</div>");
})
  /*
    $.each(data, function(index, items){
    console.log(index);
    console.log(items);
    console.log(items.Make);
  $(".one-car-container")
  .append("<div class='page-header'>" + "<h1>" 
  + items.Make + "<h1>" + "</div>") + "<td class="prisetc">" + items.Mileage + "</td>";
  + "<td class="prisetc">" + items.RegistrationDate + "</td>"; + "<td class="prisetc">" + items.Color + "</td>";
  + "<td class"prisetc">" + items.KmPerLiter + "</td>"; + "<td class="prisetc">" + items.Edb + "</td>" 
  */




    },
   });//slut ajax


//});//slut action
});//slut document

$('#example').pagination({

  ajax: function(options, refresh, $target){
    $.ajax({
      url: '',
      data:{
        current: options.current,
        length: options.length
      },
      dataType: 'json'
    }).done(function(res){
      console.log(res.data);
      refresh({
        total: res.total, // optional
        length: res.length // optional
      });
    }).fail(function(error){

    });
  }

});
