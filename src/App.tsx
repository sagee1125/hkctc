import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout";
import { EducatorsStudents, GeneralPublic, Home, Industry } from "./pages";
import { SettingsProvider } from "./context";

function App() {
  return (
    <Router>
      <SettingsProvider>
        <Layout>
          <Routes>
            <Route path="/hkctc" element={<Home />} />
            <Route path="/hkctc/general-public" element={<GeneralPublic />} />
            <Route
              path="/hkctc/educators-students"
              element={<EducatorsStudents />}
            />
            <Route path="/hkctc/industry" element={<Industry />} />
            {/* Default route to redirect all undefined paths to '/' */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </SettingsProvider>
    </Router>
  );
}

export default App;
