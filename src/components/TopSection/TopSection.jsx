import React from "react";
import "./TopSection.scss";

import Weather from "./Weather";
import PopperUp from "../Popper/PopperUp";

const TopSection = props => (
    <div className="top-container">
        <div className="title">Weather Up</div>
        <Weather {...props}/>

        <PopperUp eventEmitter={ props.eventEmitter }/>
    </div>
);

export default TopSection;