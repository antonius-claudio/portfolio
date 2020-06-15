import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import NavigationBar from './components/NavigationBar';
import './assets/css/style.css';
import Grid from '@material-ui/core/Grid';
const routes = [
  {
    exact: true,
    path: '/',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/experience',
    component: Experiences
  },
  {
    path: '/projects',
    component: Projects
  },
  {
    path: '/contact',
    component: Contact
  }
];

const AppRouter = () => (
  <Switch>
    {routes.map(route => (
      <Route key={route} {...route} />
    ))}
    <Route component={NotFound} />
  </Switch>
);

function App() {
  return (
    <Router>
        <NavigationBar />
        <Grid container spacing={1} style={{margin: 'auto'}}>
          <AppRouter />
        </Grid>
    </Router>
  );
}

export default App;
