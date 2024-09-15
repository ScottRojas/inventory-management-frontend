import "./App.css";
import Landing from "./components/Landing";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Layout from "./layouts/Layout";

function App() {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/dashboard" exact element={<Layout><Dashboard/></Layout>} />
        </Routes>
    </Router>
    );
}

export default App;
