import maplibregl from "maplibre-gl";
import * as THREE from "three";

/* --- 1. MapLibre-kartta --- */
const map = new maplibregl.Map({
  container: "app",
  style: "https://demotiles.maplibre.org/style.json",
  center: [24.9384, 60.1699],  // Helsinki
  zoom: 15,
  pitch: 60,
  terrain: { source: "maplibre-dem", exaggeration: 1.6 },
});

/* --- 2. Three.js-kerros kuutiolle --- */
map.on("load", () => {
  const layer: maplibregl.CustomLayerInterface = {
    id: "three-layer",
    type: "custom",
    renderingMode: "3d",
    onAdd: (_map, gl) => {
      const scene = new THREE.Scene();
      const camera = new THREE.Camera();
      const renderer = new THREE.WebGLRenderer({
        canvas: map.getCanvas() as HTMLCanvasElement,
        context: gl as unknown as WebGLRenderingContext,
      });
      renderer.autoClear = false;

      const cube = new THREE.Mesh(
        new THREE.BoxGeometry(10, 10, 10),
        new THREE.MeshBasicMaterial({ color: 0xff0000 })
      );
      scene.add(cube);

      layer.render = (_gl, matrix) => {
        camera.projectionMatrix.fromArray(matrix as unknown as number[]);
        renderer.state.reset();
        renderer.render(scene, camera);
        map.triggerRepaint();
      };
    },
    render() {},
  };
  map.addLayer(layer);
});
