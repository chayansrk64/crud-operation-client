import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NewChocolate from './componenets/NewChocolate/NewChocolate.jsx';
import UpdateChocolate from './componenets/UpdateChocolate/UpdateChocolate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch(`http://localhost:5000/chocolate`)
  },
  {
    path: "/newChocolate",
    element: <NewChocolate></NewChocolate>
  },
  {
    path: "/updateChocolate/:id",
    element: <UpdateChocolate></UpdateChocolate>,
    loader: ({params}) => fetch(`http://localhost:5000/chocolate/${params.id}`)

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
