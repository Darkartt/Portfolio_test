export class BlockchainVisualizer {
    constructor(config) {
      this.config = {
        container: document.body,
        chain: 'ethereum',
        ...config
      };
      
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer({ alpha: true });
      this.nodes = [];
    }
  
    init() {
      // Setup Three.js scene
      this.renderer.setSize(300, 300);
      this.config.container.appendChild(this.renderer.domElement);
      
      // Add blockchain nodes
      this.createBlockchainNodes();
      this.animate();
    }
  
    createBlockchainNodes() {
      const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
      const material = new THREE.MeshBasicMaterial({ 
        color: this.config.chain === 'ethereum' ? 0x3C3C3D : 0x00FF00,
        wireframe: true
      });
  
      for(let i = 0; i < 50; i++) {
        const node = new THREE.Mesh(geometry, material);
        node.position.x = Math.random() * 100 - 50;
        node.position.y = Math.random() * 100 - 50;
        node.position.z = Math.random() * 100 - 50;
        this.scene.add(node);
        this.nodes.push(node);
      }
  
      this.camera.position.z = 50;
    }
  
    animate() {
      requestAnimationFrame(() => this.animate());
      
      this.nodes.forEach(node => {
        node.rotation.x += 0.01;
        node.rotation.y += 0.01;
      });
  
      this.renderer.render(this.scene, this.camera);
    }
  }