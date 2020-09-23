import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as faceapi from 'face-api.js';

const Loader = styled.canvas`
    color: #ffffff;
    font-size: 20px;
    margin: 100px auto;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    -webkit-animation: load 1.3s infinite linear;
    animation: load 1.3s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
`;

const Container = styled.div``;

function FaceSwap({ faces }) {
    const [initialized, setInitialized] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        (async function () {
            await Promise.all([
                faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
                faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
                faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
            ]);

            setInitialized(true);
        })();
    }, []);

    useEffect(() => {
        if (!initialized) {
            return;
        }

        const canvas = faceapi.createCanvasFromMedia(faces);
        faceapi.matchDimensions(canvas, { width: 770, height: 443 });

        const context = canvas.getContext('2d');

        const sailorMoon = new Image();
        sailorMoon.src = '/sailor-moon.png';

        sailorMoon.onload = async () => {
            const detections = await faceapi
                .detectAllFaces(faces)
                .withFaceLandmarks()
                .withFaceDescriptors();

            const { box } = detections[0].detection;

            context.drawImage(
                faces,
                box.topLeft.x,
                box.topLeft.y,
                box.width,
                box.height,
                330,
                85,
                160,
                160
            );

            context.drawImage(
                sailorMoon,
                0,
                0,
                sailorMoon.width,
                sailorMoon.height,
                0,
                0,
                sailorMoon.width,
                sailorMoon.height
            );

            containerRef.current.append(canvas);
        };
    }, [faces, initialized]);

    return initialized ? <Container ref={containerRef} /> : <Loader />;
}

export default FaceSwap;
