import React, { useState } from 'react';
import PhotoBooth from './photo-booth';
import FaceSwap from './face-swap';

function App() {
    const [faces, setFaces] = useState(null);

    return faces ? <FaceSwap faces={faces} /> : <PhotoBooth onLoad={setFaces} />;
}

export default App;
