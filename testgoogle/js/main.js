var viewModel; 
$(function() {
    var places = [
        {address:'Fairfield, Iowa', lat:41.007611,longi:-91.963691},
        {address:'Iowa Ciry, Iowa', lat:41.661128,longi:-91.530168},
        {address:'Davenport, Iowa', lat:41.523644,longi:-90.577637},
        {address:'Ottumwa, Iowa', lat:41.016029,longi:-92.408302},
        {address:'Des moines, Iowa', lat:41.600545,longi:-93.609106},
        {address:'Debuque, Iowa', lat:42.500558,longi:-90.664572},

    ];

    viewModel = {
      places: ko.observableArray(places),

      query: ko.observable(''),

      search: function() {
        var value = $('#searchquery').val();
        viewModel.places.removeAll();
        var praman=[];
        for(var x in places) {
          if(places[x].address.toLowerCase().indexOf(value.toLowerCase()) >= 0) {

            viewModel.places.push(places[x]);
             praman.push("'"+places[x].address+"'"+", "+parseFloat(places[x].lat)+","+parseFloat(places[x].longi));
          }
        }

        updateMap(praman);

      }
    };

    viewModel.query.subscribe(viewModel.search);

    ko.applyBindings(viewModel);
  });

