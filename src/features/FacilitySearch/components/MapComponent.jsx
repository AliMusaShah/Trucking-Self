import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { useGetAllFacilityQuery } from "../../../api/apiSlice";


const MapComponent = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const MAPBOX_TOKEN = "pk.eyJ1Ijoiam9zaGNhcmxvZyIsImEiOiJjbTNvbGttNXUwNHR1MmxwcjFvNzNpb3BhIn0.HVElWTKoAwubl7IRU6y6Fw";
    const { data, } = useGetAllFacilityQuery(1);

    const handleMarkerClick = (loc) => {
        setSelectedLocation(loc); // Set the selected location
        console.log(selectedLocation); // Log the id
    };
    return (
        <div style={{ width: "80%", height: "100vh" }}>
            <Map
                initialViewState={{
                    longitude: -74.006,
                    latitude: 40.7128,
                    zoom: 5,
                }}
                style={{ width: "100%", height: "100%" }}
                mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
                mapboxAccessToken={MAPBOX_TOKEN}
            >
                {/* Marker */}
                {data?.data?.data.map((loc, index) => (
                    <Marker
                        key={index}
                        longitude={loc.longitude}
                        latitude={loc.latitude}
                        anchor="bottom"
                    >
                        <div onClick={() => handleMarkerClick(loc)}>
                            <FaMapMarkerAlt color='red' size={24} className='cursor-pointer' />
                        </div>
                    </Marker>
                ))}

                {selectedLocation && (
                    <Popup
                        longitude={selectedLocation.longitude}
                        latitude={selectedLocation.latitude}
                        // anchor="top"
                        onClose={() => setSelectedLocation(null)}
                    >
                        <div>{selectedLocation.title}</div>
                    </Popup>
                )}
            </Map>
        </div>
    );
};

export default MapComponent;
