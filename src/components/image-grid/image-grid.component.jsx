import React from 'react';

import useFirestore from '../../hooks/useFirestore';

import './image-grid.styles.scss';

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');
    console.log(docs);

    return (
        <div className='img-grid'>
            { docs && docs.map(doc => (
                <div className='img-wrap' key={doc.id}
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <img src={doc.url} alt='uploaded doc' />
                    <p>Image's Name </p>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;