"use client";

import * as THREE from "three";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useSlider } from "./context";
import { useEffect } from "react";
import Image from "next/image"

export default function Three() {
  useEffect(() => {
    const container = document.getElementById("three-container");
    if (!container) return;

    // Set renderer size to match container
    const getSize = () => ({
      width: container.clientWidth,
      height: container.clientHeight,
      // height: window.innerHeight,
    });

    const { width, height } = getSize();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    container?.appendChild(renderer.domElement);

    const loader = new GLTFLoader();

    let model: THREE.Object3D | undefined; // Declare the variable to store the model

    loader.load(
      "/cyberbike_lower_poly.glb", // Path to the .glb file
      (gltf: GLTF) => {
        model = gltf.scene; // Assign the loaded scene to the `model` variable
        scene.add(model); // Add the model to the scene
        console.log("Model loaded successfully:", model);
      },
      undefined
    );

    // const geometry = new THREE.BoxGeometry(3, 2, 2);
    // const material = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
    // const model = new THREE.Mesh(geometry, material);

    // loader.load("/Guitar.glb");

    camera.position.z = 18.5;
    // camera.up.set(0, -1, 0);

    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(1, 0.2, 1).normalize();
    scene.add(directionalLight);

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener("mousemove", (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2;
      mouseY = -(event.clientY / window.innerWidth) * 2;

      if (model) {
        model.rotation.y = (mouseX - Math.PI) * Math.PI;
        model.rotation.x = (mouseY - Math.PI / 2) * Math.PI;
      }
    });

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });

    return () => {
      if (container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const { inputValue } = useSlider();
  return (
    <div className={`absolute h-full w-full lg:fixed lg:top-0 lg:h-[100vh] lg:w-[50vw] overflow-visible -z-10`}>
      <div
        id="three-container"
        className={`absolute w-full h-full overflow-visible transition-all duration-200 ${
          inputValue <= 0.5 ? "opacity-100" : "opacity-100 lg:opacity-0"
        }`}
      ></div>
      <Image
        className={`hidden lg:block absolute bottom-[130px] right-10 ${
          inputValue <= 0.5 ? "opacity-100" : "opacity-0"
        }`}
        src="/imadethisinblender2.png"
        alt="imadethisinblender"
        width={300}
        height={200}
      />
      <img
        className="block lg:hidden absolute bottom-0 right-10"
        src="/imadethisinblender2.png"
        alt="imadethisinblender"
        width={300}
        height={200}
      />
    </div>
  );
}
