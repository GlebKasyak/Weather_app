import React from "react";
import preloader from "../../images/loader.gif";
import  "./Preloader.scss";

const Preloader = () => (
        <div className="preloader">
            <img src={ preloader } alt="preloader"/>
        </div>
);

export default Preloader;


