import React from "react";
import ReactDOMClient from "react-dom/client";
import { MainDashboard } from "./screens/MainDashboard";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<MainDashboard />);
