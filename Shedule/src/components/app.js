import React from 'react';
import Shedule from './shedule';
import ClearButton from './clear_button';
import SaveButton from './save_button';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <h1>SET SHEDULE</h1>
                <Shedule/>
                <ClearButton/>
                <SaveButton/>
            </div>
        </div>
    )
};

export default App;