import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AuthProvider from "./Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="max-w-screen-2xl min-h-screen mx-auto bg-slate-500">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
