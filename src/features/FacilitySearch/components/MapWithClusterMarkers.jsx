import Map, { Marker, Popup, Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const locations = [
    { id: 1, longitude: -74.006, latitude: 40.7128, title: "New York City" },
    { id: 2, longitude: -118.2437, latitude: 34.0522, title: "Los Angeles" },
    { id: 3, longitude: -87.6298, latitude: 41.8781, title: "Chicago" },
];

const MapWithClusterMarkers = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [radius, setRadius] = useState(100); // Radius in miles
    const MAPBOX_TOKEN =
        "pk.eyJ1Ijoiam9zaGNhcmxvZyIsImEiOiJjbTNvbGttNXUwNHR1MmxwcjFvNzNpb3BhIn0.HVElWTKoAwubl7IRU6y6Fw";

    // Function to generate GeoJSON circle
    const createCircle = (center, radiusInMiles) => {
        const radiusInKm = radiusInMiles * 1.60934;
        const points = 64; // More points make the circle smoother
        const coords = [];
        const earthRadius = 6371; // Earth's radius in km
        const { longitude, latitude } = center;

        for (let i = 0; i < points; i++) {
            const angle = (i * 360) / points;
            const radian = (Math.PI / 180) * angle;

            const newLatitude =
                latitude +
                (radiusInKm / earthRadius) * (180 / Math.PI) * Math.sin(radian);
            const newLongitude =
                longitude +
                (radiusInKm / earthRadius) *
                (180 / Math.PI) *
                Math.cos(radian) /
                Math.cos((Math.PI / 180) * latitude);

            coords.push([newLongitude, newLatitude]);
        }

        // Close the circle by repeating the first point
        coords.push(coords[0]);

        return {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [coords],
            },
        };
    };

    // Generate circle GeoJSON for the first location (change if needed)
    const circleGeoJSON = selectedLocation
        ? createCircle(selectedLocation, radius)
        : null;

    const handleMarkerClick = (loc) => {
        setSelectedLocation(loc); // Set the location for popup
    };

    return (
        <div style={{ width: "80%", height: "100vh" }}>
            <div style={{ marginBottom: "10px" }}>
                <label>
                    Radius (miles):{" "}
                    <input
                        type="number"
                        value={radius}
                        onChange={(e) => setRadius(Number(e.target.value))}
                    />
                </label>
            </div>
            <Map
                initialViewState={{
                    longitude: -74.006,
                    latitude: 40.7128,
                    zoom: 4,
                }}
                style={{ width: "100%", height: "100%" }}
                mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
                mapboxAccessToken={MAPBOX_TOKEN}
            >
                {/* Render markers */}
                {locations.map((loc) => (
                    <Marker
                        key={loc.id}
                        longitude={loc.longitude}
                        latitude={loc.latitude}
                        anchor="bottom"
                    >
                        <div onClick={() => handleMarkerClick(loc)}>
                            <FaMapMarkerAlt
                                color="red"
                                size={24}
                                className="cursor-pointer"
                            />
                        </div>
                    </Marker>
                ))}

                {/* Show popup for the selected marker */}
                {selectedLocation && (
                    <Popup
                        longitude={selectedLocation.longitude}
                        latitude={selectedLocation.latitude}
                        anchor="top"
                        onClose={() => setSelectedLocation(null)} // Close the popup
                        closeOnClick={true}
                    >
                        <div>
                            <strong>{selectedLocation.title}</strong>
                        </div>
                    </Popup>
                )}

                {/* Render circle layer */}
                {circleGeoJSON && (
                    <Source id="circle-data" type="geojson" data={circleGeoJSON}>
                        <Layer
                            id="circle-layer"
                            type="fill"
                            paint={{
                                "fill-color": "rgba(0, 128, 255, 0.5)",
                                "fill-outline-color": "rgba(0, 128, 255, 1)",
                            }}
                        />
                    </Source>
                )}
            </Map>
        </div>
    );
};

export default MapWithClusterMarkers;
