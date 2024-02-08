// AnimatedBackground.js
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

// Define your array of linked images
const linkedImages = [
  'https://cdn-icons-png.flaticon.com/128/281/281764.png',
  'https://cdn-icons-png.flaticon.com/128/145/145802.png',
  'https://cdn-icons-png.flaticon.com/128/145/145808.png',
  'https://cdn-icons-png.flaticon.com/128/3955/3955024.png',
  'https://cdn-icons-png.flaticon.com/128/3670/3670166.png'
  // Add more image URLs as needed
];

const AnimatedBackground = () => {
  const containerRef = useRef();
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const explosionRadius = 100; // Define explosion radius
  const explosionSpeed = 0.001; // Define explosion speed
  const originalPositions = useRef([]); // Store original positions of dots
  const [numDots, setNumDots] = useState(100); // Number of dots

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(105, window.innerWidth / window.innerHeight, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha to true for transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const dots = [];

    // Create dots
    for (let i = 0; i < numDots; i++) {
      const dotGeometry = new THREE.CircleGeometry(5, 32);
      const dotMaterial = new THREE.MeshBasicMaterial({ transparent: true, opacity: .1 }); // Make dot transparent
      const dot = new THREE.Mesh(dotGeometry, dotMaterial);
      dot.position.x = (Math.random() - 0.5) * window.innerWidth;
      dot.position.y = (Math.random() - 0.5) * window.innerHeight;

      // Assign a random linked image to the dot
      const randomIndex = Math.floor(Math.random() * linkedImages.length);
      const linkedImage = linkedImages[randomIndex];
      const dotTexture = textureLoader.load(linkedImage);
      dotMaterial.map = dotTexture;

      dots.push(dot);
      scene.add(dot);
    }

    // Store original positions
    originalPositions.current = dots.map((dot) => ({ x: dot.position.x, y: dot.position.y }));

    camera.position.z = 100;

    const handleMouseMove = (event) => {
      mouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY.current = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleMouseClick = () => {
      // Increment number of dots
      setNumDots(prevNumDots => prevNumDots + 100);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Update dots position to oscillate between original and exploded positions
      dots.forEach((dot, index) => {
        const originalPosition = originalPositions.current[index];
        const distanceX = originalPosition.x - dot.position.x;
        const distanceY = originalPosition.y - dot.position.y;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance > explosionRadius) {
          // Dot is outside explosion radius, move it towards original position
          dot.position.x += distanceX * explosionSpeed;
          dot.position.y += distanceY * explosionSpeed ;
        } else {
          // Dot is inside explosion radius, move it away from original position
          dot.position.x -= distanceX * explosionSpeed ;
          dot.position.y -= distanceY * explosionSpeed;
        }
      });

      renderer.render(scene, camera);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleMouseClick);

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleMouseClick);
    };
  }, [numDots]);

  return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} />;
};

export default AnimatedBackground;
