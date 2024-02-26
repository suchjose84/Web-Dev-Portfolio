import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ExperiencePage from "./pages/Experience";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: '/',
    // errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'work-experience', element: <ExperiencePage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'projects/:websiteId', element: <ProjectsPage />},
    ]
  }

]);

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}