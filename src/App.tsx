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
    <Router basename="/hkctc">
      <SettingsProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/general-public" element={<GeneralPublic />} />
            <Route path="/educators-students" element={<EducatorsStudents />} />
            <Route path="/industry" element={<Industry />} />
            <Route path="/service-users" element={<ServiceUsers />} />
            <Route path="/events-landing" element={<EventsLanding />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </SettingsProvider>
    </Router>
  );
}

export default App;
