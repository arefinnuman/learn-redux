import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/login";
import NotFound from "../page/notFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;

