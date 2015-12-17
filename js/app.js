function ViewModel() {
    var self = this;
    this.map = new GoogleMapView;
    this.query = ko.observable("");
    this.citiesList = ko.observableArray([]);
    this.markerList = ko.observableArray([]);
    this.map.init();
    
    places.forEach(function(eachPlace) {
        self.citiesList.push(new Place(eachPlace) );
    });

    //this.map.googleMap
    self.citiesList().forEach(function(place) {
        self.markerList.push(new self.map.marker(place));
        //self.map.marker(place);
    });

    this.computedCityNames = ko.computed(function() {
        return ko.utils.arrayFilter(self.markerList(), function(item) {
            return item.name().toLowerCase().indexOf(self.query().toLowerCase()) >= 0;
        });
    });

    self.filterPins = ko.computed(function () {
        var search  = self.query().toLowerCase();

        return ko.utils.arrayFilter(self.markerList(), function (marker) {
            var doesMatch = marker.name().toLowerCase().indexOf(search) >= 0;
            marker.isVisible(doesMatch);
            return doesMatch;
        });
    });

    this.setMarker = function(currentMarker) {
        google.maps.event.trigger(currentMarker.newMarker, 'click');
    }
};


var GoogleMapView = function() {
    var self = this;

    this.infoWindow = new google.maps.InfoWindow({
        content: "Loading..."
    });

    // Craete Google Map
    this.init = function() {
       self.googleMap = new google.maps.Map(document.getElementById('map-container'), {
            center: {lat: 47.606, lng: -122.332},
            zoom: 14,
            test: 'test'
        });
    }

    this.getMapName = function() {
        return self.googleMap;
    };
    
    // Create Marker and Info Window
    this.marker = function(data) {
        var that = this;
        this.name = ko.observable(data.name);
        this.lat  = ko.observable(data.location.lat);
        this.long  = ko.observable(data.location.lng);

        this.newMarker = new google.maps.Marker({
            position: new google.maps.LatLng(that.lat(), that.long())
        });

        this.newMarker.addListener('click', function() {
            self.infoWindow.setContent( data.name );
            self.infoWindow.open(self.googleMap, this);
        });

        this.isVisible = ko.observable(false);

        this.isVisible.subscribe(function(currentState) {
            if (currentState) {
                that.newMarker.setMap(self.googleMap);
            } else {
                that.newMarker.setMap(null);
            }
        });

        this.isVisible(true);
    };
    
};

// Creates a new place with name and marker
var Place = function(data) {
    this.name = data.name;
    this.location = data.location;
};

var places =  [  
    { 
        name: "Pacific Place",
        location:  {
            lat: 47.612868, lng: -122.335515 
        }
    },
    { 
        name: "Westlake Center",
        location:  {
            lat: 47.612047, lng: -122.337700 
        }
    },
    { 
        name: "Cinerama",
        location:  {
            lat: 47.614053, lng: -122.341471
        }
    },
    { 
        name: "The ShowBox",
        location:  {
            lat: 47.608514, lng: -122.339428 
        }
    },
    { 
        name: "Pike Place Market",
        location:  {
            lat: 47.608956, lng: -122.340606 
        }
    },
    { 
        name: "The Moore",
        location:  {
            lat: 47.611829, lng: -122.341550
        }
    }
];

ko.applyBindings(new ViewModel());