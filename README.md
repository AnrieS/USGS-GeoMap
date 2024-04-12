# USGS-GeoMap

The purpose of this exercise is to create a geo map of the recent earthquakes from the United States Geological Survey or the USGS -who are responsible for providing scientific data about natural hazards, health of our ecosystems and environments. Specifically, the exercise requires developing a new set of tools to visualize USGS earthquake data globally. This involves collecting and processing a significant amount of data collected by USGS daily and presenting it in a meaningful and informative way. The goal is to create visualizations that can effectively educate the public and government organizations about the Earth's seismic activity and related issues.

The framework of this exercise goes as follows:
•	Fetch earthquake data from the USGS API.
•	Create a Leaflet map instance.
•	Add a tile layer to the map.
•	Plot earthquake data on the map with markers.
•	Style the markers based on earthquake magnitude and depth.
•	Add popups to provide additional information about each earthquake.
•	Create a legend to display color-coded depth levels.

The first step of the code was fetching the earthquake data from the USGS API. This line of code is responsible for sending a request to the USGS API to retrieve that earthquake data. Then use the URL provided to access the earthquake data, in a GeoJSON format. Hence, why the library of “D3.js” to make a HTTP request to the API and handle the response data.

The second step is creating the leaflet map instance, which involved using the JavaScript library to create the interactive map to initiate the leaflet map object. Creating the leaflet map involved using “L.map()” to create the instance for the new map and pass the ID of the div element.

Adding the tile layer to the map, provided the base imagery of the map underneath the data. Leaflet supports various tile providers, such as OpenStreetMap, Mapbox and others.

Plotting the earthquake data on the map with the markers. One the earthquake data has been fetched and the map has been set up, the next phase is plotting the newly acquired data from the API and representing them as markers. Using latitude and longitude coordinates, the markers can be created to be added to the map using “L.geoJSON()” function.

Styling the markers based on the magnitude of the earthquake and the depth of the earthquake took place. To visually represent each earthquake on the map, defining the functions to calculate the marker size and the colour based on earthquake properties was created.

The next phase is to add popups to provide additional information. The popups are interactive elements that appear when users click on a marker providing additional information about the earthquake. Using “L.bindPopup()” to attach the popups to each marker, displaying earthquake details such as magnitude, location and depth.

Finally creating the legend to display the colour coded depth levels was the final step of initialising the code executable. The legend acts as a key that explains the symbols on the map and colours used to represent the earthquake. The legend will typically include colour blocks to represent the different depths of the ranges and corresponding labels.

Overall, the purpose of this exercise is to create a comprehensive and compelling visual of USGS earthquake data into JavaScript and HTML. 
