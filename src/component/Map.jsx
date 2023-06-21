import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 800,
      }}
      style={{ width: "100%", height: "100vh" }}
    >
      <Geographies
        geography="/features.json"
        fill="#3c3b3f"
        stroke="#FF5533"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[30.3753, 69.3451]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#fff",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#fff">
          {"PAK"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
