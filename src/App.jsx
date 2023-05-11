import Canvas from "./canvas/index";
import Customizer from "./pages/customizer";
import Home from "./pages/home";
function App() {
  return (
    <div>
      <main className="transition-all ease-in app">
        <Home />
        <Canvas />
        <Customizer />
      </main>
    </div>
  );
}

export default App;
