class Light {
  constructor(size, intensity) {
    this.size = size;
    this.intensity = intensity;
    this.geometry = new THREE.SphereGeometry(this.size, 24, 24);
    this.material = new THREE.MeshBasicMaterial({
      color: 'rgb(255, 255, 255)'
    });
    this.mesh = new THREE.Mesh(
      this.geometry,
      this.material 
    );
    this.theactuallight = new THREE.PointLight(0xffffff, this.intensity);
  }

}
  
