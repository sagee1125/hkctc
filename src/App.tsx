import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout";
import { Home } from "./pages";
import { SettingsProvider } from "./context";
import { routesConfiguration } from "./const/RoutesConfiguration";

function App() {
  return (
    <Router>
      <SettingsProvider>
        <Layout>
          <Routes>
            {routesConfiguration.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
            {/* Default route to redirect all undefined paths to '/' */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </SettingsProvider>
    </Router>
  );
}

export default App;
