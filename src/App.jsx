import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "./pages/page1";
import Features from "./components/features";
import Abilityofthis from "./components/abilityofthis";
import Resumeediting from "./pages/Resumeediting";

import ResumeTemplate from "./components/resume-template";
import Preview from "./components/Preview";
import Resumeinput from "./components/input";
import Searchbar from "./components/Searchbar";
import Layout from "./components/layouts/layout";
import { useState } from "react";

const App = () => {
  const [resumes, Setresume] = useState([]);
  const [editIndex, Seteditindex] = useState(null);


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
          children: [
            { path: "features", element: <Features /> },
            { path: "ability", element: <ResumeTemplate /> },
          ],
        },
        {
          path: "/editingpage",
          element: <Resumeediting resumes={resumes} Setresume={Setresume} editIndex={editIndex} Seteditindex={Seteditindex} />,
          children: [
            {
              index: true,
              element: <Resumeinput />,
            },
          ],
        },
        { path: "/dashboard", element: <Searchbar resumes={resumes} Setresume={Setresume} editIndex={editIndex} Seteditindex={Seteditindex} /> },
      ],
    },

    { path: "*", element: <h1>not found</h1> },
  ]);

  return <RouterProvider router={router} />;
};
// export default App;
export default App;
