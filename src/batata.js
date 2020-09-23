import React, { useState } from 'react';
import PhotoBooth from './photo-booth.jsx';
import FaceSwap from './face-swap.jsx';

function App() {
    const [faces, setFaces] = useState(null);

    return faces ? <FaceSwap faces={faces} /> : <PhotoBooth onLoad={setFaces} />;
}

export default App;
