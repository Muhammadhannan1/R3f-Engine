import { useState, Suspense, useRef, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Canvas, events } from "@react-three/fiber";
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
import { BlendFunction, Resizer, KernelSize } from 'postprocessing'
import Spinner from "./components/Spinner";
const data = {
  B1_1_2_2: { plug: "B1-2", stage: "3", blades: "42", stage_2: "2" },
  B1_1_1: { plug: "B1-1", stage: "2", blades: "26", stage_2: "1" },
  B1_1_2: { plug: "B1-0", stage: "1", blades: "36", stage_2: "1" },
  // B1_1_2: { plug: "B1-2", stage: "3", blades: "42", stage_2: "2" },
  B1_1_3: { plug: "B1-3", stage: "4", blades: "46", stage_2: "3" },
  B1_1_4: { plug: "B1-4", stage: "5", blades: "48", stage_2: "4" },
  B1_1_5: { plug: "B1-5", stage: "6", blades: "54", stage_2: "5" },
  B1_1_6: { plug: "B1-6", stage: "7", blades: "56", stage_2: "6" },
  B1_1_7: { plug: "B1-7", stage: "8", blades: "64", stage_2: "7" },
  B1_1_8: { plug: "B1-8", stage: "9", blades: "66", stage_2: "8" },
  B1_1_9: { plug: "B1-9", stage: "10", blades: "66", stage_2: "9" },
  B1_1_10: { plug: "B1_-0", stage: "11", blades: "76", stage_2: "10" },
  B1_1_11: { plug: "B1-11", stage: "12", blades: "76", stage_2: "11" },
  B1_1_12: { plug: "B1-12", stage: "13", blades: "76", stage_2: "12" },
  B1_1_13: { plug: "B1-13", stage: "14", blades: "76", stage_2: "13" },
  B2_1_1: { plug: "B2-1", position: "1" },
  B2_1_2: { plug: "B2-2", position: "5" },
  B2_1_3: { plug: "B2-3", position: "7" },
  B2_1_4: { plug: "B2-4", position: "9:30" },
  B2_1_5: { plug: "B2-5", position: "11" },
  B3_1: { plug: "B3-1", stage: "1", blades: "80" },
  B3_2: { plug: "B3-2", stage: "2", blades: "74", stage_2: "1" },
  B4_1: { plug: "B4-1", stage: "1", blades: "118", stage_2: "2" },
  B4_1_2: { plug: "B4-3", stage: "2", blades: "124", stage_2: "1" },
  B4_1_3: { plug: "B4-4", stage: "4", blades: "88", stage_2: "3" },
};
const data2 = {
  B1_1_2: { text:'(Plug B1-0) Stage1 - 36 Blades Leading Edge'},
  B1_1_1:   { text:'(Plug B1-1) Stage 2 - 26 Blades Leading Edge / Stage 1 Trailing Edge' },
  B1_1_2_2: { text:'(Plug B1- 2) Stage 3 - 42 Blades Leading Edge / Stage 2 Trailing Edge' },
  B1_1_3: { text:'(Plug B1- 3) Stage 4 - 46 Blades Leading Edge / Stage 3 Trailing Edge' },
  B1_1_4: { text:'(Plug B1-4) Stage 5 – 48 Blades Leading Edge / Stage 4 Trailing Edge' },
  B1_1_5: { text:'(Plug B1-5) Stage 6 – 54 Blades Leading Edge / Stage 5 Trailing Edge' },
  B1_1_6: { text:'(Plug B1-6) Stage 7 – 56 Blades Leading Edge / Stage 6 Trailing Edge' },
  B1_1_7: { text:'(Plug B1- 7) Stage 8 – 64 Blades Leading Edge / Stage 7 Trailing Edge' },
  B1_1_8: { text:'(Plug B1-8) Stage 9 – 66 Blades Leading Edge / Stage 8 Trailing Edge' },
  B1_1_9: { text:'(Plug B1 - 9) Stage 10 - 66 Blades Leading Edge / Stage 9 Trailing Edge' },
  B1_1_10: { text:'(Plug B1- 10) Stage 11 – 76 Blades Leading Edge / Stage 10 Trailing Edge' },
  B1_1_11: { text:'(Plug B1-11) Stage 12 – 76 Blades Leading Edge / Stage 11 Trailing Edge' },
  B1_1_12: { text:'(Plug B1-12) Stage 13 – 76 Blades Leading Edge / Stage 12 Trailing Edge' },
  B1_1_13: { text:'(Plug B1-13) Stage 14 – 76 Blades Leading Edge / Stage 13 Trailing Edge' },
  B2_1_1: { text:'(Plug B2-1) - 1 O’clock position.' },
  B2_1_2: { text:'(Plug B2- 2) - 5 O’clock position' },
  B2_1_3: { text:'(Plug B2-3) - 7 O’clock Position.' },
  B2_1_4: { text:'(Plug B2- 4) - 9:30 O’clock Position.' },
  B2_1_5: { text:'(Plug B2- 5) – 11 O’clock Position.' },
  B3_1: {text: '(Plug B3-1) Stage 1 – 80 Blades Leading Edge' },
  B3_2: {text: '(Plug B3-2) Stage 2 – 74 Blades Leading Edge / Stage 1 Trailing Edge' },
  B4_1: {text: '(Plug B4-1) Stage 1 - 118 Blades Leading Edge / HP Turbine Stage 2 Trailing Edge' },
  B4_1_2: { text:'(Plug B4- 3) Stage 2 – 124 Blades Leading Edge /  Stage 1 Trailing Edge' },
  B4_1_3: { text:'(Plug B4- 4) Stage 4 – 88 Blades Leading Edge / Stage 3 Trailing Edge' },
};

function App() {
  const [meshName, setMeshName] = useState("");
  const [rotation, setRotaion] = useState(false);
  const [tabName, setTabName] = useState('')
  // const [plugDetails, setPlugDetails] = useState(false)
//  const updateTabName = (event) => {
//   if (tabName === event.target.innerText) {
//     setTabName('')
//   } else {
//     setTabName(event.target.innerText)
//   }

//  } 
//   useEffect(() => {
//     updateTabName(e)
//   }, [meshName])
  
  const setName = (name) => {
    setMeshName(name);
    if (tabName === event.target.innerText) {
      setTabName('')
      console.log(tabName)
    } else {
      setTabName(event.target.innerText)
      console.log(tabName)
    }

  };
  const popUpBox = useRef(null);

  return (
    <>
    <Suspense fallback={<Spinner/>}>
      <div
        style={{
          position: "absolute",
          zIndex: "1",
          // padding: "5px 1rem",
          backgroundColor: "rgb(28 23 22)",
          width: "21vw",
          // height:"10vh"
          marginLeft:'1rem',
          marginTop:'1rem'
        }}
      >
        <button
          onClick={() => setRotaion(!rotation)}
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: "10px",
            backgroundColor: "rgb(28 23 22)",
            color:"rgb(221, 139, 59)",
            // fontSize: "19px",
            fontWeight: "bold",
            marginBottom:"10px"
          }}
        >
          Show me
        </button>
        { 
        <div style={{backgroundColor:'rgb(28 23 22)'}} className="accordion" id="accordionExample">
          <div style={{backgroundColor:'rgb(28 23 22)',color:"rgb(221, 139, 59)"}} className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
              style={{backgroundColor:'rgb(28 23 22)',color:"rgb(221, 139, 59)"}}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                High Pressure Compressor Plugs
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
                  <li onClick={() => setName("B1_1_2")}>
                    <a href="#">B1-0</a>
                  </li>
                  <li onClick={() => setName("B1_1_1")}>
                    <a href="#">B1-1</a>
                  </li>
                  <li onClick={() => setName("B1_1_2_2")}>
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
                  <li onClick={() => setName("B1_1_13")}>
                    <a href="#">B1-13</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{backgroundColor:'rgb(28 23 22)',color:"rgb(221, 139, 59)"}} className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
              style={{backgroundColor:'rgb(28 23 22)',color:"rgb(221, 139, 59)"}}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Combustion Chamber Plugs
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

          <div style={{backgroundColor:'rgb(28 23 22)',color:"rgb(221, 139, 59)"}} className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
              style={{backgroundColor:'rgb(28 23 22)',color:"rgb(221, 139, 59)"}}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                High Pressure Turbine Plugs
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

          <div style={{backgroundColor:'rgb(28 23 22)',color:"rgb(221, 139, 59)"}} className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
              style={{backgroundColor:'rgb(28 23 22)',color:"rgb(221, 139, 59)"}}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Low Pressure Turbine Plugs
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
                    <a href="#">B4-3</a>
                  </li>
                  <li onClick={() => setName("B4_1_3")}>
                    <a href="#">B4-4</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        }
      </div>

      <div
        id="popUpBox"
        ref={popUpBox}
        style={{
          zIndex:'1',
          position: "absolute",
          padding: "20px",
          width: "20%",
          top: "8%",
          right: "5%",
          height: "fit-content",
          backgroundColor:'rgb(28 23 22)',
          color:"rgb(221, 139, 59)",
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
                {meshName !== "B3_1" && meshName!=='B1_1_2_2' &&
                  `/${meshName === "B4_1" ? "HP Turbine" : ""} Stage ${
                    data[meshName].stage_2
                  } Trailing Edge`}
              </>
            )}
          </>
        )}
        {/* {meshName !== "" && data2[meshName] && 
           <>
           {data2[meshName].text}
          
           </>
        } */}
      </div>

      {/* <Environment preset="sunset" background /> */}
      
      <Canvas>
        {/* <PerspectiveCamera makeDefault position={[0, 0, 5]} /> */}
        
        <OrbitControls enableRotate={true} enableDamping={false} />
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} />
          <Selection>
            <EffectComposer multisampling={8} autoClear={false}>
              <Outline
              selectionLayer={100} 
                visibleEdgeColor='green'
                hiddenEdgeColor='green'
                edgeStrength={50}
                width={800}
                blendFunction={BlendFunction.ALPHA}
                pulseSpeed={1}
                kernelSize={KernelSize.VERY_LARGE} 
                // xRay={true}
                // blur
              />
            </EffectComposer>
            <Loader meshName={meshName} boxRef={popUpBox} orbitRotation={rotation} tabName={tabName} />
          </Selection>
          <Environment files={'/assets/models/Concrete_Shelter.exr'} background  />
          {/* <Environment preset="" background  /> */}
        
      </Canvas>
        </Suspense>
    </>
  );
}

export default App;
