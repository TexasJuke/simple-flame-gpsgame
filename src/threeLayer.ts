import type { CustomLayerInterface, Map } from 'maplibre-gl'
import { Matrix4, Scene, Camera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, Vector3 } from 'three'
import { MercatorCoordinate } from 'maplibre-gl'

interface ThreeLayer extends CustomLayerInterface {
  map?: Map
  renderer?: WebGLRenderer
  scene?: Scene
  camera?: Camera
}

export const threeLayer: ThreeLayer = {
  id: 'avatar',
  type: 'custom',
  renderingMode: '3d',
  onAdd(map, gl) {
    this.map = map
    this.camera = new Camera()
    this.scene = new Scene()

    const merc = MercatorCoordinate.fromLngLat({ lng: 24.941, lat: 60.173 }, 0)
    const scale = merc.meterInMercatorCoordinateUnits()
    const geometry = new BoxGeometry(1 * scale, 1 * scale, 1 * scale)
    const material = new MeshBasicMaterial({ color: 0xff0000 })
    const mesh = new Mesh(geometry, material)
    mesh.position.set(merc.x, merc.y, merc.z)
    this.scene.add(mesh)

    this.renderer = new WebGLRenderer({ canvas: map.getCanvas(), context: gl })
    this.renderer.autoClear = false
  },
  render(gl, matrix) {
    if (!this.renderer || !this.scene || !this.camera || !this.map) return
    const rotationX = new Matrix4().makeRotationAxis(new Vector3(1, 0, 0), Math.PI / 2)
    this.camera.projectionMatrix = new Matrix4().fromArray(matrix).multiply(rotationX)
    this.renderer.state.reset()
    this.renderer.render(this.scene, this.camera)
    this.map.triggerRepaint()
  },
}
