  $(document).ready(function(){


  $.ajax({
    url: 'http://dgbiler.dev5.mediastyle.dk/socket.io?Id=106602549',
    type: 'GET',
    contentType: 'application/json; charset=utf-8',
    data: {
       format: 'JSON',
    },
    dataType: 'json'
})

let app = new function() {
    // Récupération des données
    this.cars = cars;

    // Affiche les films (tous par défaut)
    this.FetchAll = function(data) {
      // Selection de l'élément
      let elCars = document.getElementById('Make');


      //til indhold af html
      let htmlCars = '';

      for (let i in data) {
        htmlCars += '<article class="card mb-3"><div class="card-header">';
        for (let j in data[i].Type) {
          htmlCars += '<i class="fa fa-tag" aria-hidden="true"></i> ' + data[i].Type[j] + ' ';
        }
        htmlCars+= '</div>';
        htmlCars += '<div class="card-block"><h2>' + data[i].Type + '</h2></div>';
        htmlCars += '<div class="card-footer text-muted text-center"> <i class="fa fa-calendar" aria-hidden="true"></i> ' + data[i].Make + '</div>';
        htmlCars += '</article>';
      }

      // Affichage de l'ensemble des lignes en HTML
      elCars.innerHTML = htmlCars;

      // Affiche le nombre de films
      this.Count(data);
    };

    // Retourne le nombre de films
    this.Count = (data) => document.getElementById('count').innerHTML = data.length + ' cars';

    // Retourne la liste des checkboxes
    this.DisplayFilters = function() {
      // Selection de l'élément
      let elTypes = document.getElementById('Type');
      let types   = [];

      // Chaque ligne (film)
      for (let i in cars) {

        // Chaque "type" dans chaque ligne (film)
        for (let j in cars[i].Type) {
          types.push(cars[i].Type[j]);
        }

      }

      let uniqueTypes = types.filter( (value, index, self) => self.indexOf(value) === index );
      let htmlTypes = '';

      for (let i in uniqueTypes) {
        htmlTypes += '<li><input type="checkbox" id="' + uniqueTypes[i] + '" name="types[]" value="' + uniqueTypes[i] + '"> <label for="' + uniqueTypes[i] + '">' + uniqueTypes[i] + '</label></li>';
      }

      elTypes.innerHTML = htmlTypes;
    };





    });//slut document
