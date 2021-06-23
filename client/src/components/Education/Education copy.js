import React, { useEffect, useRef } from "react";
import Style from "./Education.module.scss";
import * as THREE from 'three';

export const Education = (props) => {
  const selectedRef = useRef();

  useEffect(() => {
    applyThree();
  }, []);

  const applyThree = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, Math.floor( selectedRef.current.offsetWidth ) / Math.floor( selectedRef.current.offsetHeight ), 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer({
      canvas: selectedRef.current
    });

    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( Math.floor( selectedRef.current.offsetWidth ), Math.floor( selectedRef.current.offsetHeight ) );
    camera.position.setZ( 30 );

    const dioTexture = new THREE.TextureLoader().load('./public/diocartoon.png');

    const geometry = new THREE.BoxGeometry(3,3,3);
    const material = new THREE.MeshBasicMaterial({ map: dioTexture });
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    renderer.render( scene, camera );

    const animate = () => {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.005
      cube.rotation.z += 0.01;

      renderer.render( scene, camera );
    }

    animate()
  };

  return <div className={ Style.education } >
    <canvas className={ Style.wrapperEducation } ref={ selectedRef }></canvas>
    <div className={Style.content}>
      <div className={Style.title}>title</div>
    </div>
  </div>;
};