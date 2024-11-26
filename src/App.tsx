import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout";
import { EducatorsStudents, GeneralPublic, Home } from "./pages";
import { SettingsProvider } from "./context";

function App() {
  return (
    <Router>
      <SettingsProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/general-public" element={<GeneralPublic />} />
            <Route path="/educators-students" element={<EducatorsStudents />} />
            {/* Default route to redirect all undefined paths to '/' */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </SettingsProvider>
    </Router>
  );
}

export default App;
