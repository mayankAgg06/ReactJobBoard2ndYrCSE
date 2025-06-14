import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css';
import { HomeLayout, DashboardLayout, Error, Landing } from './pages';
import { Login,Register } from './components';

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout />,
    errorElement: <Error />,
  },
  {
    path: '/landing',
    element: <Landing />
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path:'/dashboard',
    element: <DashboardLayout/>
  },
  {
    path:'/about',
    element:(<div>
                <h1>This is About page open now</h1>
                <h1>What are you thinking today</h1>
            </div>)
  },
])

function App() {
  return <RouterProvider router={router}/>
};

export default App;
