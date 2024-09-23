import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../assets/pages/Home";
import Layout from "../assets/pages/layouts/layout";
import About from "../assets/pages/About";
import Service from "../assets/pages/Service";
import Skills from "../assets/pages/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/services",
        element: <Service />
      },
      {
        path: "/skills",
        element: <Skills />
      }
    ]
  },
]);

export default router;
