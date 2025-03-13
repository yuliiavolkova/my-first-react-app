import { StrictMode } from "react";

import "./index.css";
import App from "./App.jsx";

import { createRoot } from "react-dom/client";
import { Fragment } from "react";
const root = createRoot(document.getElementById("root"));

function Header() {
  return (
    <header>
      <img src="react-logo.png" width="40px" alt="React logo" />
    </header>
  );
}

function MainComponent() {
  return (
    <main>
      <h1>Reason, why i do it?</h1>
      <ol>
        <ol>I want earn enough money</ol>
        <ol>I like logical tasks</ol>
        <ol>I like be like Sherlock but in IT world</ol>
        <ol>I think im ready</ol>
      </ol>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <small>"2025, Yuliia development. All rights reserved."</small>
    </footer>
  );
}

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
