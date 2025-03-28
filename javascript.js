// function to load the map
function loadMap() {
    // Matches the array posistions. i.e. locations[0] = Wimbledon, which CONTENT is equal to.
    const CONTENT = 0, LATITUDE = 1, LONGITUDE = 2

    // Used to define locations that will eventually be pinned on map. This is not the pinning logic
    let locations = [
        ["Wimbledon", 51.4183, 0.2206]
    ]

    let map = new google.maps.Map(document.getElementById("map"), {
        mapId: "MY_MAP_ID",
        zoom: 5,
        center: new google.maps.LatLng(54.5644, -1.4438), // The map will center around these coordinates
        mapTypeId: google.maps.MapTypeId.ROADMAP
    })

    let infoWindow = null

    locations.forEach(location => {
        // Pinning logic here
        let marker = new google.maps.marker.AdvancedMarkerElement({
            position: new google.maps.LatLng(location[LATITUDE], location[LONGITUDE]),
            map: map
        })

        // Logic for showing the info window when a user clicks on a pinned location
        if (infoWindow === null) {
            infoWindow = new google.maps.InfoWindow()
        }

        google.maps.event.addListener(marker, "click", () => {
            infoWindow.setContent(location[CONTENT])
            infoWindow.open(map, marker)
        })
    })
}