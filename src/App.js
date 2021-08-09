import "./App.css";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/Sidebar/SIdebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideBar />
      <Form />
    </div>
  );
}

export default App;
