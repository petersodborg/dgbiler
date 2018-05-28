
$(document).ready(function(){
      var $pagination = $('#pagination'),
            totalRecords = 0,
            records = [],
            displayRecords = [],
            recPerPage = 10,
            page = 1,
            totalPages = 0;
           
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
            }
      });
      function generate_table() {
            var tr;
            $('#emp_body').html('');
            for (var i = 0; i < displayRecords.length; i++) {
                  tr = $('<tr/>');
                  tr.append("<div class='col-md-4'>" +  '<img src="' + displayRecords[i].Pictures[0] + '" height="232" width="436">' + "</td>" + 
                         + displayRecords[i].Make + displayRecords[i].RetailPrice + "</div>");
                  $('#emp_body').append(tr);
            }
      }
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
  });

