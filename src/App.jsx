import { useState, Suspense, useRef, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Loader } from "./components/Scene";
import {
  Selection,
  Select,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";

const data = {
  B1_1_1: { plug: "B1_1", stage: "2", blades: "26", stage_2: "1" },
  B1_1_2: { plug: "B1_2", stage: "3", blades: "42", stage_2: "2" },
  B1_1_3: { plug: "B1_3", stage: "4", blades: "46", stage_2: "3" },
  B1_1_4: { plug: "B1_4", stage: "5", blades: "48", stage_2: "4" },
  B1_1_5: { plug: "B1_5", stage: "6", blades: "54", stage_2: "5" },
  B1_1_6: { plug: "B1_6", stage: "7", blades: "56", stage_2: "6" },
  B1_1_7: { plug: "B1_7", stage: "8", blades: "64", stage_2: "7" },
  B1_1_8: { plug: "B1_8", stage: "9", blades: "66", stage_2: "8" },
  B1_1_9: { plug: "B1_9", stage: "10", blades: "66", stage_2: "9" },
  B1_1_10: { plug: "B1_10", stage: "11", blades: "76", stage_2: "10" },
  B1_1_11: { plug: "B1_11", stage: "12", blades: "76", stage_2: "11" },
  B1_1_12: { plug: "B1_12", stage: "13", blades: "76", stage_2: "12" },
  B1_1_13: { plug: "B1_13", stage: "14", blades: "76", stage_2: "13" },
  B2_1_1: { plug: "B2_1", position: "1" },
  B2_1_2: { plug: "B2_2", position: "5" },
  B2_1_3: { plug: "B2_3", position: "7" },
  B2_1_4: { plug: "B2_4", position: "9:30" },
  B2_1_5: { plug: "B2_5", position: "11" },
  B2_1_5: { plug: "B2_5", position: "11" },
  B2_1_5: { plug: "B2_5", position: "11" },
  B3_1: { plug: "B3_1", stage: "1", blades: "80" },
  B3_2: { plug: "B3_2", stage: "2", blades: "74", stage_2: "1" },
  B4_1: { plug: "B4_1", stage: "1", blades: "118", stage_2: "2" },
  B4_1_2: { plug: "B4_2", stage: "2", blades: "124", stage_2: "1" },
  B4_1_3: { plug: "B4_3", stage: "4", blades: "88", stage_2: "3" },
};

function App() {
  const [meshName, setMeshName] = useState("");
  const [rotation, setRotaion] = useState(false);
  const setName = (name) => {
    setMeshName(name);
  };
  const popUpBox = useRef(null);

  return (
    <>
      <div
        style={{
          position: "absolute",
          zIndex: "1",
          padding: "1rem",
          top: "3%",
          backgroundColor: "black",
          width: "15%",
        }}
      >
        <button
          onClick={() => setRotaion(!rotation)}
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: "10px",
            backgroundColor: "burlywood",
            fontSize: "19px",
            fontWeight: "bold",
            marginBottom:"10px"
          }}
        >
          Show me {rotation ===true ? '(click to stop)':'(click to start)'}
        </button>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                B1 Parts
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li onClick={() => setName("B1_1_1")}>
                    <a href="#">B1-1</a>
                  </li>
                  <li onClick={() => setName("B1_1_2")}>
                    <a href="#">B1-2</a>
                  </li>
                  <li onClick={() => setName("B1_1_3")}>
                    <a href="#">B1-3</a>
                  </li>
                  <li onClick={() => setName("B1_1_4")}>
                    <a href="#">B1-4</a>
                  </li>
                  <li onClick={() => setName("B1_1_5")}>
                    <a href="#">B1-5</a>
                  </li>
                  <li onClick={() => setName("B1_1_6")}>
                    <a href="#">B1-6</a>
                  </li>
                  <li onClick={() => setName("B1_1_7")}>
                    <a href="#">B1-7</a>
                  </li>
                  <li onClick={() => setName("B1_1_8")}>
                    <a href="#">B1-8</a>
                  </li>
                  <li onClick={() => setName("B1_1_9")}>
                    <a href="#">B1-9</a>
                  </li>
                  <li onClick={() => setName("B1_1_10")}>
                    <a href="#">B1-10</a>
                  </li>
                  <li onClick={() => setName("B1_1_11")}>
                    <a href="#">B1-11</a>
                  </li>
                  <li onClick={() => setName("B1_1_12")}>
                    <a href="#">B1-12</a>
                  </li>
                  <li onClick={() => setName("B1_1_3")}>
                    <a href="#">B1-13</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                B2 Parts
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li onClick={() => setName("B2_1_1")}>
                    <a href="#">B2-1</a>
                  </li>
                  <li onClick={() => setName("B2_1_2")}>
                    <a href="#">B2-2</a>
                  </li>
                  <li onClick={() => setName("B2_1_3")}>
                    <a href="#">B2-3</a>
                  </li>
                  <li onClick={() => setName("B2_1_4")}>
                    <a href="#">B2-4</a>
                  </li>
                  <li onClick={() => setName("B2_1_5")}>
                    <a href="#">B2-5</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                B3 parts
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li onClick={() => setName("B3_1")}>
                    <a href="#">B3-1</a>
                  </li>
                  <li onClick={() => setName("B3_2")}>
                    <a href="#">B3-2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                B4 parts
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li onClick={() => setName("B4_1")}>
                    <a href="#">B4-1</a>
                  </li>
                  <li onClick={() => setName("B4_1_2")}>
                    <a href="#">B4-2</a>
                  </li>
                  <li onClick={() => setName("B4_1_3")}>
                    <a href="#">B4-3</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="popUpBox"
        ref={popUpBox}
        style={{
          position: "absolute",
          top: "8%",
          right: "5%",
          padding: "20px",
          width: "20%",
          height: "fit-content",
          backgroundColor: "green",
          color: "white",
          borderRadius: "15px",
          fontWeight: "bold",
          fontSize: "20px",
          display: "none",
        }}
      >
        {meshName !== "" && data[meshName] && meshName.startsWith("B2") ? (
          <>
            <div>Plug {data[meshName].plug}</div>
            {data[meshName].position} o'clock position
          </>
        ) : (
          <>
            {data[meshName] && (
              <>
                <p>plug {data[meshName].plug}</p>
                <p>Stage {data[meshName].stage}</p>
                {data[meshName].blades} Blades Leading Edge{" "}
                {meshName !== "B3_1" &&
                  `/${meshName === "B4_1" ? "HP Turbine" : ""} Stage ${
                    data[meshName].stage_2
                  } Trailing Edge`}
              </>
            )}
          </>
        )}
      </div>

      {/* <Environment preset="sunset" background /> */}
      <Canvas>
        {/* <PerspectiveCamera makeDefault position={[0, 0, 5]} /> */}
        <OrbitControls enablePan={false} enableRotate={rotation} />
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Selection>
            <EffectComposer multisampling={8} autoClear={false}>
              <Outline
                blur
                visibleEdgeColor="white"
                edgeStrength={100}
                width={500}
              />
            </EffectComposer>
            <Loader meshName={meshName} boxRef={popUpBox} />
          </Selection>
          <Environment preset="sunset" background/>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
