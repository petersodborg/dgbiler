
$(document).ready(function(){

// Set up the Select2 control
$('#mySelect2').select2({
    ajax: {
        url: 'http://dgbiler.dev5.mediastyle.dk/socket.io'
    }
});

// Fetch the preselected item, and add to the control
var carSelect = $('#mySelect2');
$.ajax({
    type: 'GET',
    url: 'http://dgbiler.dev5.mediastyle.dk/socket.io' + Id;
}).then(function (data) {
    // create the option and append to Select2
    var option = new Option(data.Propellant, data.id, true, true);
    carSelect.append(option).trigger('change');

    // manually trigger the `select2:select` event
    carSelect.trigger({
        type: 'select2:select',
        params: {
            data: data
        }
    });
});

});
