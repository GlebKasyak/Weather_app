import React, { useState } from "react";
import "./FormControl.scss";

const FormControl  = props => {

    const [locationName, setLocationName] = useState("");

    const onSelectCity = () => {
        props.eventEmitter.emit("updateWeather", locationName);
        props.handleClick();
    };

    const handleChange = e => {
        setLocationName(e.target.value)
    };

    return (
        <div className="form-container">
            <label htmlFor="location-name">Location Name</label>
            <input
                type="text"
                id="location-name"
                placeholder="City Name"
                onChange={ handleChange }
                value={ locationName }
            />
            <button className="btn btn-select-location" onClick={ onSelectCity }>Select</button>
        </div>
    )
};

export default FormControl;