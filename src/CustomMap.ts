export interface Mappable {
	location: {
		lat: number;
		lng: number;
	};

	markerContent(): string;
}

export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(map: google.maps.Map) {
		this.googleMap = map;
	}

	public static async build(mapDiv: string): Promise<CustomMap> {
		const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;

		let map = new Map(
			document.getElementById(mapDiv) as HTMLElement,
			{
				mapId: "6ff586e93e18149f",
				center: { lat: 47.609414458375674, lng: -122.33897030353548 },
				zoom: 17,
			} as google.maps.MapOptions
		);

		/*
		// Create the initial InfoWindow.
		let infoWindow = new google.maps.InfoWindow({
			content: "Click the map to get Lat/Lng!",
			position: { lat: 47.609414458375674, lng: -122.33897030353548 },
		});

		infoWindow.open(map);

		// Configure the click listener.
		map.addListener("click", (mapsMouseEvent) => {
			// Close the current InfoWindow.
			infoWindow.close();

			// Create a new InfoWindow.
			infoWindow = new google.maps.InfoWindow({
				position: mapsMouseEvent.latLng,
			});
			infoWindow.setContent(
				JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
			);
			infoWindow.open(map);
		});
		*/

		return new CustomMap(map);
	}

	async addMarker(mappable: Mappable): Promise<void> {
		const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
		let markers: google.maps.marker.AdvancedMarkerElement[] = [];

		let locations = [
			[mappable.location.lat, mappable.location.lng],
		];

		let collisionBehavior = google.maps.CollisionBehavior.REQUIRED;

		locations.forEach(([lng, lat]: number[]) => {
			const advancedMarker = new AdvancedMarkerElement({
				position: new google.maps.LatLng({
					lat: lat,
					lng: lng
				}),
				map: this.googleMap,
				collisionBehavior: collisionBehavior
			});

			// Create the initial InfoWindow.
			let infoWindow = new google.maps.InfoWindow({
				content: "Click the map to get Lat/Lng!",
				position: advancedMarker.position,
			});

			//   infoWindow.open(map);

			// Configure the click listener.
			advancedMarker.addListener("click", (mapsMouseEvent) => {
				// Close the current InfoWindow.
				infoWindow.close();

				// Create a new InfoWindow.
				infoWindow = new google.maps.InfoWindow({
					position: mapsMouseEvent.latLng,
				});
				infoWindow.setContent(
					mappable.markerContent() + '@' +
					JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
				);
				infoWindow.open(this.googleMap, advancedMarker);
			});

			markers.push(advancedMarker);
		});
	}

}