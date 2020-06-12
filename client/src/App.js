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
      <AppRouter />
    </Router>
  );
}

export default App;
