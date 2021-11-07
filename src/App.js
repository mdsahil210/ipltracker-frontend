import './App.scss';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';
import { HeadToHeadPage } from './pages/HeadToHeadPage';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/teams/:teamName" exact component={TeamPage}/>
          <Route path="/head-to-head" component={HeadToHeadPage}/>
          <Route path="/teams/:teamName/matches/:year" component={MatchPage}/>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
