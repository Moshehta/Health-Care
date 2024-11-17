import { Fragment } from 'react';
import './App.css';
import Home from './Components/Pages/HomePage/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Contact from './Components/Pages/ContactPAge/Contact';
import Search from './Components/Pages/Search-Page/Search';
const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/search' element={<Search />} />
  </Route>
));
function App() {
  return (
    <Fragment>
      <RouterProvider router={routes} />
    </Fragment>
  );
}
export default App;
