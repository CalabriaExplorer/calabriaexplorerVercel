import fs from 'fs/promises';
import osmtogeojson from 'osmtogeojson';

async function main() {
  const nominatimUrl = 'https://nominatim.openstreetmap.org/search?format=json&polygon_geojson=1&q=Cir%C3%B2%20Marina';
  let geo = null;
  try {
    const res = await fetch(nominatimUrl, { headers: { 'User-Agent': 'CalabriaExplorer/1.0' } });
    const data = await res.json();
    const found = data.find((d) => d.geojson && (d.geojson.type === 'Polygon' || d.geojson.type === 'MultiPolygon'));
    if (found) {
      geo = found.geojson;
    }
  } catch (err) {
    console.error('Nominatim fetch failed:', err);
  }

  if (!geo) {
    try {
      const searchQuery = '[out:json];rel["name"="Cirò Marina"]["boundary"="administrative"];out ids;';
      const searchRes = await fetch('https://overpass-api.de/api/interpreter', { method: 'POST', body: searchQuery });
      const searchData = await searchRes.json();
      const id = searchData.elements?.[0]?.id;
      if (!id) throw new Error('relation not found');
      const geomQuery = `[out:json];relation(${id});out geom;`;
      const geomRes = await fetch('https://overpass-api.de/api/interpreter', { method: 'POST', body: geomQuery });
      const geomData = await geomRes.json();
      const gj = osmtogeojson(geomData);
      geo = gj.features[0].geometry;
    } catch (err) {
      console.error('Overpass fetch failed:', err);
    }
  }

  if (!geo) {
    throw new Error('Failed to fetch boundary data');
  }

  const featureCollection = { type: 'FeatureCollection', features: [{ type: 'Feature', properties: {}, geometry: geo }] };
  await fs.mkdir('public/geo', { recursive: true });
  await fs.writeFile('public/geo/ciro_marina.geojson', JSON.stringify(featureCollection, null, 2));
  console.log('Saved to public/geo/ciro_marina.geojson');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
