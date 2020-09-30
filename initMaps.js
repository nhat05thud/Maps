var p1 = new google.maps.LatLng(45.463688, 9.18814);
var p2 = new google.maps.LatLng(46.0438317, 9.75936230000002);

alert(calcDistance(p1, p2));

//calculates distance between two points in km's
function calcDistance(p1, p2) {
  return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
}

var maps = {
    findNearMe: function() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);
        }
        else{
            console.log("geolocation doesn't support on your browser")
        }
    },
    geoSuccess: function(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        console.log("lat: " + lat + "," + "long: " + lng);
        maps.generateMaps(lat, lng);
    },
    geoError: function(er) {
        console.log(er.message);
    },
    generateMaps: function (lat, lng) {
        let map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: new google.maps.LatLng(lat, lng),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        new google.maps.Marker({
            position: new google.maps.LatLng(lat, lng),
            map: map
        });
    },
    init: function() {

    }
}