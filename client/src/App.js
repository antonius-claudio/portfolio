import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';
import Loading from './components/Loading/Loading';
import './Global/Global.css';
import SocialMedia from './components/SocialMedia/SocialMedia';
import PageLine from './components/PageLine/PageLine';
import Scroll from './components/Scroll/Scroll';

const loading = () => <Loading />;

const AppRouter = (props) => (
  <Switch>
    {routes.map(route => {
      const add = {...props};
      const component = (p) => <route.component {...p} {...add} />;
      const propsRoute = { path: route.path , component, exact:  route.exact, key: route.path };
      return (
        <Route {...propsRoute}/>
      );
    })}
    {/* <Route component={NotFound} /> */}
  </Switch>
);

function App() {
  const [percent, setPercent] = React.useState(0);
  const [page, setPage] = React.useState(false);

  const checkPage = (path) => { //add page point here
    if (path === '/') delaySetPercent(10);
    else if (path === '/experience') delaySetPercent(20);
    else if (path === '/project') delaySetPercent(30);
  };

  const delaySetPercent = (num) => {
    setTimeout(() => {
      setPercent(num);
    }, 500);
  };

  React.useEffect(() => {
    setPercent(0);
  }, []);

  return (
    <>
      <BrowserRouter>
        <React.Suspense fallback={loading()}>
          <AppRouter checkPage={checkPage}/>
          {/* <Scroll page={page} setPage={setPage}/> */}
        </React.Suspense>
        <React.Suspense fallback={loading()}>
          <SocialMedia />
        </React.Suspense>
        {/* <React.Suspense fallback={loading()}>
          <PageLine percent={percent}/>
        </React.Suspense> */}
      </BrowserRouter>
    </>
  );
}

export default App;