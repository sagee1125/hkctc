import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { Layout } from "./Layout";
import { SettingsProvider } from "./context";
import { routesConfiguration } from "./const/RoutesConfiguration";
import { NotFound } from "./pages/NotFound/NotFound";
import { theme } from "./Theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <SettingsProvider>
          <Layout>
            <Routes>
              {routesConfiguration.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
              {/* Default route to redirect all undefined paths to '/' */}
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Layout>
        </SettingsProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
