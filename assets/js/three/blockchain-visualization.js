import * as THREE from 'three';

export function initBlockchainVisualization() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        preserveDrawingBuffer: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    document.getElementById('blockchain-viz').appendChild(renderer.domElement);

    // Node creation (Stationary green spheres - User requested removal)
    /*
    const geometry = new THREE.IcosahedronGeometry(1, 2);
    const material = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true
    });

    const nodes = Array.from({ length: 100 }, () => {
        const node = new THREE.Mesh(geometry, material);
        node.position.set(
            Math.random() * 40 - 20,
            Math.random() * 40 - 20,
            Math.random() * 40 - 20
        );
        scene.add(node);
        return node;
    });
    */

    camera.position.z = 50;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        // nodes.forEach(node => { // Nodes are removed, so no rotation needed
        //     node.rotation.x += 0.01;
        //     node.rotation.y += 0.01;
        // });
        renderer.render(scene, camera); // Render the scene (will be empty or show other elements if any)
    }
    animate();

    // Resize handler
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
    };
}
