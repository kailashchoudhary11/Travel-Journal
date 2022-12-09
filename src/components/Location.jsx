import React from "react";
import "./Location.css";
import locLogo from "../assets/loc-logo.png";

function Location(props) {
    const item = props.item;
    return (
        <div className="location">
            <img src={item.imageUrl} alt="" className="location--img" />
            <div className="about">
                <div className="loc">
                    <img src={locLogo} alt="" className="loc--logo"/>
                    <span className="country">{item.location.toUpperCase()}</span>
                    <a href={item.googleMapsUrl} className="map" target="_blank">View on Google Maps</a>
                </div>
                <h1 className="title">{item.title}</h1>
                <div className="duration">
                    {item.startDate} - {item.endDate}
                </div>
                <div className="description">
                    {item.description}
                </div>
            </div>
        </div>
    );
}

export default Location;