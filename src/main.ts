import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { threeLayer } from './threeLayer'

const map = new maplibregl.Map({
  container: 'app',
  style: 'https://demotiles.maplibre.org/style.json',
  center: [24.941, 60.173], // Helsinki
  zoom: 15,
  pitch: 60,
})

map.on('load', () => {
  map.addSource('terrain', {
    type: 'raster-dem',
    url: 'https://demotiles.maplibre.org/terrain/tiles.json',
  })
  map.setTerrain({ source: 'terrain', exaggeration: 1 })
  map.addLayer(threeLayer)
})
