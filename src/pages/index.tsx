import { Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { Cemda } from './Cemda';

const routes = [{ path: '/', Page: Home }, { path: '/cemda', Page: Cemda }];

function Routing() {
  const getRoutes = () => routes.map(({ path, Page }) => <Route key={path} path={path} element={<Page />} />);

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
