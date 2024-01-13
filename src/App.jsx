import { createContext } from "react";
import React from "react";
import { todosStore } from "./store/todosStore";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { RootPage } from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";
import { OutletPage } from "./pages/OutletPage";

export const TodosStoreContext = createContext(null);

const router = createBrowserRouter([
  {
    path: "/",
    element: <OutletPage />,
    children: [
      {
        path: "/",
        element: <RootPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export function App() {
  return (
    <TodosStoreContext.Provider value={todosStore}>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </TodosStoreContext.Provider>
  );
}
