
$(document).ready(function(){
$('#action-button').click(function() {
   $.ajax({
      url: 'https://services.web.bilinfo.dk/api/vehicle/?user=demo&password=ocfB6XzF73&format=json',
      type: 'GET',
      data: {
         format: 'JSON'
      },
      dataType: 'jsonp',
      error: function() {
         $('#info').html('<p>An error has occurred</p>');
      },
      success: function(data) {

    $.each(data.Vehicles, function(index, item) {
    $(".col-md-4")
    .append('<img src= "' + item.Pictures[0] + '" height="200" width="373">')
    .append("<h5>" + item.Model + item.Make + "</h5>")
    .append("<p>" + item.KmPerLiter + "Km/l" + " "+ item.Variant + "</p>")
    .append("<p> LEASING(incl service):" + item.Mileage + "</p>")
    //.append(".button" + item.RetailPrice);

}); 

      }
   });//slut ajax
});//slut action
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