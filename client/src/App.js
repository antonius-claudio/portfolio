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
import Container from '@material-ui/core/Container';
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
      <Container maxWidth='xl'>
        <NavigationBar />
        <Grid container spacing={1} style={{margin: 'auto'}}>
          <AppRouter />
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
