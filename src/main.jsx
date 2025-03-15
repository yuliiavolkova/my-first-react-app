import { StrictMode } from "react";

import "./index.css";
import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import Header from "./Header2";
import MainComponent from "./MainContent";
import Footer from "./Footer";
const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <>
      <Header />
      <MainComponent />
      <Footer />
    </>
  );
}

root.render(<Page />);
