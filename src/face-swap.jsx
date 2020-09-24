import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as faceapi from 'face-api.js';

const Container = styled.div``;

const Loader = styled.h1`
    text-align: center;
`;

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

        const title = new Image();

        sailorMoon.onload = async () => {
            title.src = '/title.png';

            title.onload = async () => {
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

                context.drawImage(title, 0, sailorMoon.height - 62);

                containerRef.current.append(canvas);
            };
        };
    }, [faces, initialized]);

    return initialized ? <Container ref={containerRef} /> : <Loader>Loading</Loader>;
}

export default FaceSwap;
