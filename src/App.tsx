import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout";
import {
  EducatorsStudents,
  EventsLanding,
  GeneralPublic,
  Home,
  Industry,
  SeminarsWorkshops,
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
            <Route path="/general-public" element={<GeneralPublic />} />
            <Route path="/educators-students" element={<EducatorsStudents />} />
            <Route path="/industry" element={<Industry />} />
            <Route path="/service-users" element={<ServiceUsers />} />
            <Route path="/events-landing" element={<EventsLanding />} />
            <Route path="/seminars-workshops" element={<SeminarsWorkshops />} />

            {/* Default route to redirect all undefined paths to '/' */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </SettingsProvider>
    </Router>
  );
}

export default App;
