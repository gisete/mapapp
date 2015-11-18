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
        self.map.createMarker(place);
    });

    this.computedCityNames = ko.computed(function() {
        return ko.utils.arrayFilter(self.citiesList(), function(item) {
            return item.name.toLowerCase().indexOf(self.query().toLowerCase()) >= 0;
        });
    });
    
};


var GoogleMapView = function() {
    var self = this;

    // Craete Google Map
    this.init = function() {
       self.googleMap = new google.maps.Map(document.getElementById('map-container'), {
            center: {lat: 47.606, lng: -122.332},
            zoom: 14,
            test: 'test'
        });
    }
    
    // Create Marker and Info Window
    this.createMarker = function(data) {
        var that = this;

        this.newMarker = new google.maps.Marker({
            position: data.location,
            map: self.googleMap,
            title: data.name,

        });

        this.infoWindow = new google.maps.InfoWindow({
            content: "Loading..."
        });

        // Use closure here
        this.newMarker.addListener('click', function() {
            that.infoWindow.setContent( data.name );
            that.infoWindow.open(self.googleMap, this);
        });
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



// AIzaSyCX13s8KCuYBfs363O7tvQI3JkCSfgWbqg