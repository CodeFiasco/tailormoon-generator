import { useState, useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';

function loadImage(path) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = path;

        image.onload = () => {
            resolve(image);
        };

        image.onerror = () => {
            reject(`unable to load image from: ${path}`);
        };
    });
}

function useFaceSwap(faces) {
    useEffect(() => {
        async function initializeModels(onLoad) {
            await Promise.all([
                faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
                faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
                faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
            ]);
            setInitialized(true);
        }

        initializeModels();
    }, []);
}

export default useFaceSwap;
