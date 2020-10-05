import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';
import Loading from './components/Loading/Loading';
import './Global/Global.css';

const loading = () => <Loading />;

const AppRouter = () => (
  <Switch>
    {routes.map(route => (
      <Route key={route} {...route} />
    ))}
    {/* <Route component={NotFound} /> */}
  </Switch>
);

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading()}>
        <AppRouter />
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
