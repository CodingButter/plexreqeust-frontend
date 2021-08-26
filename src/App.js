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
  MediaScaleProvider,
} from "./context";
import { Home, Movies, TV, Activity, Search } from "./pages";
import PageContentContainer from "./components/PageContentContainer";
import MediaDetails from "./pages/MediaDetails/MediaDetails";

function App() {
  return (
    <Router>
      <ActivityProvider>
        <MoviesProvider>
          <SidebarProvider>
            <StyledApp>
              <FullPageBackground />
              <NavBar />
              <FullPage>
                <MediaScaleProvider>
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
                      <Route path="/search">
                        <Search />
                      </Route>
                      <Route path="/movie/">
                        <MediaDetails />
                      </Route>
                      <Route path="/show/">
                        <MediaDetails />
                      </Route>
                    </PageContentContainer>
                  </Switch>
                </MediaScaleProvider>
              </FullPage>
            </StyledApp>
          </SidebarProvider>
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
