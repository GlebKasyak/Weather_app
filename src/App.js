import React from 'react';
import "./sass/app.scss";

import TopSection from "./components/TopSection/TopSection"
import BottomSection from "./components/BottomSection/BottomSection";
import Preloader from "./components/Preloader/Preloader";

const App = props => {

    if(props.isLoading) return <Preloader />;

    return (
          <div className="app-container">

            <div className="main-container">
              <div className="bottom-section">
                <TopSection {...props}/>
              </div>
              <div className="bottom-section">
                <BottomSection />
              </div>
            </div>

          </div>
    );
};


export default App;
