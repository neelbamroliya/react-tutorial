import "./App.css";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            {/* passing props from here to navbar component */}
            <Navbar title="My App" />
        </div>
    );
}

export default App;
