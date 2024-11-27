import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout";
import {
  EducatorsStudents,
  EventsLanding,
  GeneralPublic,
  Home,
  Industry,
  ServiceUsers,
} from "./pages";
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
            <Route path="/hkctc/service-users" element={<ServiceUsers />} />
            <Route path="/hkctc/events-landing" element={<EventsLanding />} />

            {/* Default route to redirect all undefined paths to '/' */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </SettingsProvider>
    </Router>
  );
}

export default App;
