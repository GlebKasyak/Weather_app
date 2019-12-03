import React, { useState } from "react";
import "./PopperUp.scss";
import { Manager, Reference, Popper } from 'react-popper';

import FormControl from "../FormControl/FormControl";

const PopperUp = props => {

    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <Manager>
            <Reference>
                {({ ref }) => (
                    <button ref={ ref } type="button" className="btn btn-select-location" onClick={ handleClick }>
                        Select Location
                    </button>
                )}
            </Reference>

            {visible &&
                <Popper placement="top">
                    {({ref, placement, arrowProps}) => (
                        <div  className="popup-container" ref={ref} data-placement={placement}>
                            <FormControl eventEmitter={ props.eventEmitter } handleClick={ handleClick }/>
                            <div ref={arrowProps.ref} style={arrowProps.style}/>
                        </div>
                    )}
                </Popper>
            }
        </Manager>
    )
};

export default PopperUp;