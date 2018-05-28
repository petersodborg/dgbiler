
$(document).ready(function(){
      var $pagination = $('#pagination'),
            totalRecords = 0,
            records = [],
            displayRecords = [],
            recPerPage = 10,
            page = 1,
            totalPages = 0;
//$('#action-button').click(function() {
        $.ajax({
            url: "http://dgbiler.dev5.mediastyle.dk/socket.io?",
            async: true,
            dataType: 'json',
            success: function (data) {
                  records = data;
                  console.log(records);
                  totalRecords = records.length;
                  totalPages = Math.ceil(totalRecords / recPerPage);
                  apply_pagination();
       //console.log(data);
       //var $all = $('<p>').text(data);

    //carTotal = data.length;

    //$(".car-total").append(carTotal + " Søgeresultater");
    
    //Søgning på tekst
    $(".form-control").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".col-md-4").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });


  //SELECT BOX KATEGORI
 $(function() {
  // Read selected option
  $('#but_read').click(function(){
    var Make = $('#selUser option:selected').text();
    $('.bil-container').html("Make : " + option.selected);
  });
});  

//bil liste
  $.each(data, function(i, displayRecords){
  $(".bil-container")
  .append("<div class='col-md-4'>"
  + '<img src="' + displayRecords.Pictures[0] + '" height="232" width="436">' +
  "<a href='biler.html?=$GET{Id}'><div class='info'>" + "<h5>" + displayRecords.Model + " " + displayRecords.Make + "</h5>"
  + "<p>" + displayRecords.KmPerLiter + "Km/l" + " "+ displayRecords.Variant + "</p>" + 
  "<div class='car-body'><p> LEASING(incl service):" + displayRecords.Mileage + "</p></div></div>"  +
  "<div class='btn-container'>" + "<button type='button' class='btn btn-danger'>" + displayRecords.RetailPrice + " kr." + "</button>" + "</div>" +"</div>")
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
      function apply_pagination() {
            $pagination.twbsPagination({
                  totalPages: totalPages,
                  visiblePages: 6,
                  onPageClick: function (event, page) {
                        displayRecordsIndex = Math.max(page - 1, 0) * recPerPage;
                        endRec = (displayRecordsIndex) + recPerPage;
                        console.log(displayRecordsIndex + 'ssssssssss'+ endRec);
                        displayRecords = records.slice(displayRecordsIndex, endRec);
                        generate_table();
                  }
            });
      }


//});//slut action
});//slut document

