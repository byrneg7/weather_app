import React from 'react';

const Location = ({coords})=> {
    return(
        <div>
            {`Latitude: ${coords.lat}, longitude: ${coords.long}`}
        </div>
    )
}

export default Location