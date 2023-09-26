import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div>
			{/* passing props from here to navbar component */}
			<Navbar title='My App' />
			<div className='container my-3'>
				<Form heading='Enter text here' />
			</div>
		</div>
	);
}

export default App;
