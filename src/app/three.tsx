"use client";

import * as THREE from "three";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSlider } from "./context";
import { useEffect } from "react";

export default function Three() {
  useEffect(() => {
    const container = document.getElementById("three-container");
    const WIDTH = 600;
    const HEIGHT = 800;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(WIDTH, HEIGHT);
    container?.appendChild(renderer.domElement);

    const loader = new GLTFLoader();

    let model: THREE.Object3D | undefined; // Declare the variable to store the model

    loader.load(
      "/donut.glb", // Path to the .glb file
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

    camera.position.z = 0.17;
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
        model.rotation.y = (mouseX - Math.PI / 1.5) * Math.PI * 0.8;
        model.rotation.x = (mouseY - Math.PI / 1.5) * Math.PI * 0.8;
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
      renderer.setSize(WIDTH, HEIGHT);
    });

    scene.add(model);

    return () => {
      if (container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const { inputValue } = useSlider();
  return (
    <div className={`relative col-span-2 w-100`}>
      <div
        id="three-container"
        className={`absolute w-full h-full overflow-visible transition-all duration-200 -right-1/2 ${
          inputValue < 0.5 ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </div>
  );
}
