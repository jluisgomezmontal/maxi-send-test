import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import our custom CSS
import "./scss/styles.scss";

// Import all of Bootstrap's JS
import "bootstrap";
import ErrorPage from "./components/Error/ErrorPage.jsx";
import { Inicio } from "./routes/Inicio.jsx";
import { Series } from "./routes/Series.jsx";
import { Movies } from "./routes/Movies.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Inicio />,
      },
      {
        path: "series",
        element: <Series />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
