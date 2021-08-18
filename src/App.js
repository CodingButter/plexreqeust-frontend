import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import FullPageBackground from "./components/FullPageBackground/FullPageBackground";
import NavBar from "./components/NavBar/NavBar";
import FullPage from "./components/FullPage/FullPage";
import Sidebar from "./components/Sidebar/Sidebar";
import {
  MoviesProvider,
  SidebarProvider,
  ActivityProvider,
  UserSettingsProvider,
} from "./context";
import { Home, Movies, TV, Activity } from "./pages";
import PageContentContainer from "./components/PageContentContainer";

function App() {
  return (
    <Router>
      <ActivityProvider>
        <MoviesProvider>
          <UserSettingsProvider>
            <SidebarProvider>
              <StyledApp>
                <FullPageBackground />
                <NavBar />
                <FullPage>
                  <Sidebar />
                  <Switch>
                    <PageContentContainer className="page-content-container">
                      <Route exact path="/">
                        <Home />
                      </Route>
                      <Route exact path="/movies">
                        <Movies />
                      </Route>
                      <Route exact path="/tv">
                        <TV />
                      </Route>
                      <Route exact path="/activity">
                        <Activity />
                      </Route>
                    </PageContentContainer>
                  </Switch>
                </FullPage>
              </StyledApp>
            </SidebarProvider>
          </UserSettingsProvider>
        </MoviesProvider>
      </ActivityProvider>
    </Router>
  );
}

export default App;

const StyledApp = styled.div`
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;
