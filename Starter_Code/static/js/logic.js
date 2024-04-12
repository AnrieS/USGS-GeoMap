// script.js
const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
// Create a Leaflet map instance
var myMap = L.map('map').setView([0, 0], 2); // Set initial view and zoom level

// Add a tile layer (OpenStreetMap as the base map)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(myMap);

// Fetch GeoJSON data using D3.js
d3.json(url).then(function (data) {

    function SetRadius(magnitude) {
        //In case magnitude is 0, return radius of 1
        if (magnitude === 0) {
            return 1;
        }
        //Else, return radius * 4
        return magnitude * 4;
    }

    function SetColour(depth) {
        //Switch cases handle correct return
        switch (true) {
            case depth > 90:
                return "orangered";
            case depth > 70:
                return "orange";
            case depth > 50:
                return "yellow";
            case depth > 30:
                return "greenyellow";
            case depth > 10:
                return "green";
            default:
                return "lightgreen";
        }
    }

    // Create function for the markerSize based on the magnitude
    function SetStyle(earthquake) {
        return {
            opacity: 1,
            fillOpacity: 1,
            fillColor: SetColour(earthquake.geometry.coordinates[2]),
            color: "black",
            radius: SetRadius(earthquake.properties.mag),
            stroke: true,
            weight: 0.5
        };
    }

    L.geoJSON(data, {
        pointToLayer: function (earthquake, latlng) {
            return L.circleMarker(latlng);
        },

        style: SetStyle,

        onEachFeature: function (earthquake, layer) {
            layer.bindPopup("Magnitude: " + earthquake.properties.mag + "<br>Location: " + earthquake.properties.place + "<br>Depth: " + earthquake.geometry.coordinates[2]);

            layer.on({
                mouseover: function(event){
                    layer = event.target;
                    layer.setStyle({
                        fillOpacity: 0.9
                    });
                },
                mouseout: function(event) {
                    layer = event.target;
                    layer.setStyle({
                        fillOpacity: 0.5});
                },
                click: function(event) {
                    myMap.fitBounds(event.target.getBounds())
                }
            });
        },

    }).addTo(myMap); // Don't forget to add the layer to the map using .addTo(map)


   // Create legend control
let legend = L.control({ position: "bottomright" });

legend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend");
    let depth = [-10, 10, 30, 50, 70, 90]; // Assuming you have defined 'depth' elsewhere

    // Define color levels and their corresponding labels
    let colorLevels = [
        { color: "darkred", label: "Depth > 90 km" },
        { color: "orangered", label: "Depth > 70 km" },
        { color: "orange", label: "Depth > 50 km" },
        { color: "yellow", label: "Depth > 30 km" },
        { color: "green", label: "Depth > 10 km" },
        { color: "lightgreen", label: "Depth <= 10 km" }
    ];

    // Create legend content with color blocks and labels
    colorLevels.forEach(level => {
        div.innerHTML += '<div><i style="background:' + level.color + '"></i> ' + level.label + '</div>';
    });

    return div;
};

// Add legend control to map
legend.addTo(myMap);


});
