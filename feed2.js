
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

//bil liste
  $.each(data, function(i, items){
  $(".one-car-container")
  .append("<div class='page-header'>"
 + "<h1>" 
  + items.Make + "<h1>" + "</div>" + "<div class=row>" + "<div class=col-md-5>" + "<table class=table>" + "</tr>" + "<tr class=table-active>"
  + "<td>" + "<p>" + "kørt km:" + "</p>" +  "</td>" + "<td class=prisetc id=km>" + items.Mileage + "</td>" + "</tr>"/*slut kørt km*/
  + "<tr class=table-active>" + "<td>" + "<p>" + "Første registrering:" + "</p>" + "</td>"
  + "<td class=prisetc id=registrationdate>" + items.RegistrationDate + "</td>" + "</tr>"/*slut første registrering km*/
  + "<tr class=table-success>" + "<td>" + "<p>" + "Farve:" + "</p>" + "</td>"
  + "<td class=prisetc id=Color>" + items.Color + "</td>" + "</tr>"/*slut Farve km*/
  + "<tr class=table-warning>" + "<td>" + "<p>" + "KM per liter:" + "</p>" + "</td>"
  + "<td class=prisetc id=kmprliter>" + items.KmPerLiter + "</td>" + "</tr>"/*slut KmPerLiter km*/
  + "<tr class=table-danger>" + "<td>" + "<p>" + "EDB:" + "</p>" + "</td>"
  + "<td class=prisetc id=edb>" + "EDB Data her" + "</td>" + "</tr>"/*slut EDB km*/
  + "<tr class=table-danger>" + "<td>" + "<p>" + "EDB:" + "</p>" + "</td>"
  + "<td class=prisetc id=Propellant>" + items.Propellant + "</td>" + "</tr>"/*slut Propellant km*/
  + "<tr class=table-danger>" + "<td>" + "<p>" + "Afdeling:" + "</p>" + "</td>"
  + "<td class=prisetc id=Afdeling>" + items.DealerAddressCity + "</td>" + "</tr>"/*slut Afdeling km*/
  + "<tr class=table-danger>" + "<td>" + "<p>" + "Pris:" + "</p>" + "</td>"
  + "<td class=prisetc id=Pris>" + items.RetailPrice + "</td>" + "</tr>"/*slut Pris km*/
  + "</tbody>" + "</table>" + "<div class=card-car>" + "<h5 class=card-header-car>" + "</h5>" +  "<div class=card-body-car>" + "<p class=card-text>"
  + "<p class=car>" + "Ekstraudstyr" + "</h5>" + "<p class=car>" + items.Comment + "</p>" + "</div>"
  + "<div class=card-footer-car>" + "</div>" + "</div>"
  + "<div class=col-md-8>" + "<h3>" + "Kontakt os ang. denne bil" + "</h3>" + "<h2 class=car>" + "Ring 35835900 / Send os en mail" + "</h2>" + "</div>" + "</div>"
  + "<div class=col-md-6>" + '<img src="' + items.Pictures[0] + '" height="510" width="900">' + "</div>" + "</div>" + "</div>")
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

        
/*
  $.each(data, function(index, items){
    console.log(index);
    console.log(items);
    console.log(items.Make);
  $(".one-car-container")
  .append("<div class='page-header'>" + "<h1>" 
  + items.Make + "<h1>" + "</div>");
})
*/
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











  /*
   $.ajax({
      url: 'http://dgbiler.dev5.mediastyle.dk/socket.io',
      type: 'GET',
      data: {
         format: 'JSON'
      },
      dataType: 'jsonp',
      error: function() {
         $('#info').html('<p>An error has occurred</p>');
      },
      success: function(data) {
  $.each(data, function (index, data) {

    $(".bil-container")
    .append("<div class='col-md-4'>"
      + '<img src= "' + data.Pictures[0] + '" height="232" width="436">' +
      "<div class='info'>" + "<h5>" + data.Model + " " + data.Make + "</h5>"
      + data.KmPerLiter + "Km/l" + " "+ data.Variant + "<br>" + "<br>" + 
      "<p> LEASING(incl service):" + data.Mileage + "</p>"  +
      "<div class='btn-container'>" + "<button type='button' class='btn btn-danger'>" + data.RetailPrice + "</button>" + "</div>" +"</div>");
});

    //Car site
     $(".container-fluid")
     .append("<div class='prisetc'>" + item.Color + item.KmPerLiter + item.Propellant + item.NewPrice + "</div>");


      }
   });//slut ajax
//});//slut action
});//slut document













        //var i = 0;
        /*
            $.each( data, function(index, d){
              $('.col-md-4')
              //.append('<img src= "' + data[1].Pictures + '">')
            //.append("picture" + '<li><img src= "' + 'https://images.bilinfo.dk/images/44700008.jpg' + '"></li>')
            .append("<h1> Model:" + d[0].Model + "</h1>")
            .append("<h1> make:" + d[0].Make + "</h1>")
            .append("<p> variant:" + d[0].Variant + "</p>")
            .append("<p> registrationDate:" + d[0].RegistrationDate + "</p>");
})
*/


/*
        $.each(data, function(i, data){
          $('.col-md-4')
            .append("<h1> Model:" + data[0].Model + "</h1>")
            .append("<h1> make:" + data[0].Make + "</h1>")
            .append("<p> variant:" + data[0].Variant + "</p>")
            .append("<p> registrationDate:" + data[0].RegistrationDate + "</p>");

*/
         //console.log(data);
         //var $all = $('<p>').text(data);
//          $.each(data, function(i, data){
  //          $('.col-md-4')
    //        .append("<h1> Model:" + data.Model + "</h1>")
      //      .append("<h1> make:" + data.Make + "</h1>")
        //    .append("<p> variant:" + data.Variant + "</p>")
          //  .append("<p> registrationDate:" + data.RegistrationDate + "</p>");
            //.append("<li>" + data.Pictures + "</li>");



/*
<div class="row">
    <?
    $i = 0;
    foreach ($cars as $car) {
        ?>
        Your code here
        <?
        $i++;
        if ($i % 3 == 0) {
            echo '</div><div class="row">';
        }
    }
    ?>
</div>
*/

         // for (var i=0; i<data.Object.length; i++) {
         //var $make = $('<h1>').text(data.Object[i].Id);
         // var $model = $('<h1>').text(data.Object[i].Model);

         //var $pictures = $('<img src="">').text(data.Vehicles[i].Pictures);
            //.append($all)
            //.append($make)
            // .append($model)
            //.append($registrationDate)
            //.append($variant)
            //.append($pictures);

           


   //      var $title = $('<h1>').text(data.Vehicles[0].Id);
     //    var $description = $('<p>').text(data.Vehicles[0].Model);
