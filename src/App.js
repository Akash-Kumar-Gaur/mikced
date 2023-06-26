import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./scenes/Login";
import { initializeFb } from "./firebase.configs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  let app = initializeFb();

  if (app) {
    return <RouterProvider router={router} />;
  }
}

export default App;
