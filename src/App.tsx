import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout";
import {
  AwardScheme,
  EducatorsStudents,
  EventsLanding,
  GeneralPublic,
  ProfileAndRole,
  Home,
  Industry,
  ResourcesReports,
  SeminarsWorkshops,
  ServiceUsers,
  StudentCompetitions,
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
            <Route
              path="/events-landing/award-scheme"
              element={<AwardScheme />}
            />

            <Route path="/profile-and-role" element={<ProfileAndRole />} />

            <Route path="/seminars-workshops" element={<SeminarsWorkshops />} />

            <Route
              path="/student-competitions"
              element={<StudentCompetitions />}
            />

            <Route path="/resources-reports" element={<ResourcesReports />} />

            {/* Default route to redirect all undefined paths to '/' */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </SettingsProvider>
    </Router>
  );
}

export default App;
