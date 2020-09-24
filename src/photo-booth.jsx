import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Webcam from 'webcam-easy';
import Button from './button';

const Video = styled.video`
    width: 100%;
    height: 440px;
    margin-bottom: 10px;
`;

const Container = styled.div`
    width: 640px;
    height: 480px;
    max-width: 100%;
    text-align: center;
`;

const Canvas = styled.canvas`
    display: none;
`;

function PhotoBooth({ onLoad }) {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [webcam, setWebcam] = useState(null);

    useEffect(() => {
        let initialized = false;
        const webcam = new Webcam(videoRef.current, 'user', canvasRef.current);
        setWebcam(webcam);

        (async function () {
            await webcam.start();
            initialized = true;
        })();

        return () => {
            if (initialized) {
                webcam.stop();
            }
        };
    }, []);

    function takePhoto() {
        const photo = webcam.snap();
        const image = new Image();
        image.src = photo;

        image.onload = () => {
            onLoad(image);
        };
    }

    return (
        <Container>
            <Video ref={videoRef} autoPlay playsinline />
            <Canvas className="d-none" ref={canvasRef} />
            {webcam && <Button onClick={takePhoto}>I want to be a &lt;TAILor moon_&gt;</Button>}
        </Container>
    );
}

export default PhotoBooth;
