        // $(document).ready(function(){
        // //alert("test");
        // })

        // function initMap() {
        //     var myLatLng = {lat: 41.007611, lng: -91.963691};

        //     var map = new google.maps.Map(document.getElementById('meromap'), {
        //       zoom: 13,
        //       center: myLatLng
        //     });

        //     var marker = new google.maps.Marker({
        //       position: myLatLng,
        //       map: map,
        //       title: 'Mero Marker'
        //     });
        //   }

        var map;
        var bounds;
        var mapOptions;
        var oldmark;
        var mapMarkers=[];
        var infoWindowContent=[];
          function initialize() {

            bounds = new google.maps.LatLngBounds();
            mapOptions = {
                mapTypeId: 'roadmap'
            };
                            
            // Display a map on the page
            map = new google.maps.Map(document.getElementById("meromap"), mapOptions);
            map.setTilt(45);
                
            // Multiple mark



             oldmark = [
                ['Fairfield, Iowa', 41.007611,-91.963691],
                ['Iowa City, Iowa', 41.661128,-91.530168],
                ['Davenport, Iowa', 41.523644,-90.577637],
                ['Ottumwa, Iowa', 41.016029,-92.408302],
                ['Des moines, Iowa', 41.600545,-93.609106],
                ['Debuque, Iowa', 42.500558,-90.664572],

            ];
                                
            // Info Window Content
             infoWindowContent = [
                ['<div class="info_content">' +
                '<h3>Default Fairfield</h3>' +
                '<p>The hawkEye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' +        '</div>'],
                ['<div class="info_content">' +
                '<h3>Default Iowa City</h3>' +
                '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
                '</div>'],
                ['<div class="info_content">' +
                '<h3>Default Davenport</h3>' +
                '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
                '</div>'],
                ['<div class="info_content">' +
                '<h3>Default Ottumwa</h3>' +
                '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
                '</div>'],
                   ['<div class="info_content">' +
                '<h3>Default Des Moines</h3>' +
                '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
                '</div>'],
                   ['<div class="info_content">' +
                '<h3>Default Debuque</h3>' +
                '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
                '</div>']
            ];
                
            // Display multiple mark on a map
            var infoWindow = new google.maps.InfoWindow(), marker, i;
            
            // Loop through our array of mark & place each one on the map  
            for( i = 0; i < oldmark.length; i++ ) {
                //console.log(oldmark[i][1]);
                var position = new google.maps.LatLng(oldmark[i][1], oldmark[i][2]);
                bounds.extend(position);
                marker = new google.maps.Marker({
                    position: position,
                    map: map,
                    title: oldmark[i][0]
                });
                mapMarkers[i] = marker;
                
                // Allow each marker to have an info window    
                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    var current = i;
                    return function() {
                       
                        var defaultContent = infoWindowContent[i][0];
                       
                       var CityURL = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles='+marker.title+'&format=json&formatversion=2&exintro=1&callback=?';
        var data; 
        $.ajax({
            url : CityURL,
            method:'get',
            dataType:'JSON',
            success:function(s){
                  $.each(s.query.pages, function(count, item) {
                    if(item.extract !== undefined){
                        data+= item.extract;
                        }
                        
                    });
                  if(data){
                   infoWindow.setContent(data.split("undefined").join(""));
               }else{
               infoWindow.setContent(defaultContent);
               }
                  
            }
        });
                       
                       
                        infoWindow.open(map, marker);
                    }
                })(marker, i));

                // Automatically center the map fitting all mark on the screen
                map.fitBounds(bounds);
            }

            // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
            var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
                this.setZoom(7);
                google.maps.event.removeListener(boundsListener);
            });
            
        }




        function updateMap(mark){
            
            
            google.maps.event.trigger(map, 'resize');
                //Clearing markers, if they exist
                if(oldmark && oldmark.length !== 0){
                    for(var i = 0; i < oldmark.length; ++i){
                       // console.log(oldmark[i]);
                        mapMarkers[i].setMap(null);
                    }
                }
                //Adding new markers
                oldmark = [];

        // mark = [
        //         ['Fairfield, Iowa', 41.007611,-91.963691],
        //         ['Iowa Ciry, Iowa', 41.661128,-91.530168],
        // ]

              for( i = 0; i < mark.length; i++ ) {
                mark[i].replace(/\"/g, "")
                var valNew=mark[i].split(',');
                var ti =  valNew[0].replace("'", "")+","+valNew[1].replace("'", "");
                var position = new google.maps.LatLng(valNew[2], valNew[3]);
                bounds.extend(position);
                marker = new google.maps.Marker({
                    position: position,
                    map: map,
                    title: ti
                });
                mapMarkers[i] = marker;
                oldmark.push(valNew[0].replace(/\"/g, "")+","+valNew[2]+","+valNew[3]);


                 var infoWindow = new google.maps.InfoWindow(), marker, i;
                 // Allow each marker to have an info window    
                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    var current = i;
                    return function() {
                       console.log(marker.title);
                        var defaultContent = infoWindowContent[i][0];
                       
                       var CityURL = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles='+marker.title.replace("'", "")+'&format=json&formatversion=2&exintro=1&callback=?';
        var data; 
        $.ajax({
            url : CityURL,
            method:'get',
            dataType:'JSON',
            success:function(s){
                  $.each(s.query.pages, function(count, item) {
                    if(item.extract !== undefined){
                        data+= item.extract;
                        }
                        
                    });
                  if(data){
                   infoWindow.setContent(data.split("undefined").join(""));
               }else{
               infoWindow.setContent(defaultContent);
               }
                  
            }
        });
                       
                       
                        infoWindow.open(map, marker);
                    }
                })(marker, i));

           };

        }


        var open = true;

        function sidebar(){
           if(open==true){
            $('.sidebar').animate({width:'toggle'},350);


            $('.main').removeClass('col-md-9');
            $('.main').removeClass('col-sm-9');

            $('.main').addClass('col-md-12');
            $('.main').addClass('col-sm-12');

            open = false;
           }else{
            $('.sidebar').fadeIn(500);

            $('.main').addClass('col-md-9');
            $('.main').addClass('col-sm-9');

            $('.main').removeClass('col-md-12');
            $('.main').removeClass('col-sm-12');

            open = true;
           }
        }



