import React from 'react';
import './locate.css'

export default function locate() {
    function changeLocation(e) {
        e.preventDefault();
        let loc = document.getElementById('searchLoc').value;
        let newLoc = loc.replace(/,/g, '%2c');
        document.getElementById('gmap_canvas').setAttribute('src', 'https://maps.google.com/maps?q=' + newLoc + '&t=&z=15&ie=UTF8&iwloc=&output=embed')
    }
    return (
        <div>
            <div className='googleMaps'>
                <div>
                    <div className='searchLocation'>
                        <form onSubmit={changeLocation}>
                            <input id='searchLoc' type="text" />
                            <button type='submit'>Locate</button>
                        </form>
                    </div>
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe title='googleMaps' width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=lagos&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
