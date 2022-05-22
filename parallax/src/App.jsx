import { useRef } from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import Projects from "./components/Project";
import Calendar from "./components/SideProject/Calendar";

function App() {
  const test = useRef(null);

  console.log(test);

  return (
    <div className="App">
      <Parallax pages={6}>
        <ParallaxLayer sticky={{ start: 1.5, end: 5 }}>
          <NavBar/>
        </ParallaxLayer>
        <ParallaxLayer class="bg-gradient-to-r from-cyan-500 to-blue-500">
          <Layout class="align-self-center" />
        </ParallaxLayer>
        <ParallaxLayer
          factor={2}
          class="bg-gradient-to-r from-violet-500 to-fuchsia-500"
          offset={1}
        >
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer
          class="bg-gradient-to-r from-purple-500 to-pink-500"
          offset={3}
        >
          <About />
        </ParallaxLayer>
        <ParallaxLayer
          class="bg-gradient-to-r from-fuchsia-500 to-yellow-500"
          offset={4}
        >
          <Contact />
        </ParallaxLayer>
        <ParallaxLayer
          class="bg-gradient-to-r from-purple-500 to-pink-500"
          offset={5}
        >
          {" "}
          <Calendar />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
