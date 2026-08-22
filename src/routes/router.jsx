import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import App from "../App";
import Login from "../Components/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
        {index:true, element: <App></App>},
        {path:'login', element: <Login></Login> }
    ]
  },
]);