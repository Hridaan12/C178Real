let latitude = 22.7868542, longitude = 88.3643296;

// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 4
});

map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	})
);


var img1 = document.querySelector("#Red Fort")


var marker1 = new mapboxgl.Marker({
	element: img1
})
	.setLngLat([77.2410, 28.6562])
	.addTo(map);

var img2 = document.querySelector("#Taj Mahal")

var marker2 = new mapboxgl.Marker({
	element: img2
})
	.setLngLat([78.0421, 27.1])
	.addTo(map);

var img3 = document.querySelector("#Lotus Temple")

var marker3 = new mapboxgl.Marker({
	element: img3
})
	.setLngLat([77.25880, 28.553501])
	.addTo(map);


var img4 = document.querySelector("#Qutumb Minnar")


var marker4 = new mapboxgl.Marker({
	element: img4
})
	.setLngLat([77.185248, 28.524355])
	.addTo(map);



var img5 = document.querySelector("#Golden Temple")

var marker5 = new mapboxgl.Marker({
	element: img5
})
	.setLngLat([88.342785, 22.546170])
	.addTo(map);