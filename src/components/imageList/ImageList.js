import React from 'react';
import './ImageList.scss'

const ImageList = ( {data} ) => {
    return(
        <>
            {data.map(value => (
                <div key={value.id} className="container">
                    <p>{value.tags}</p>
                </div>
            ))}
        </>
    )
}

export default ImageList;