import { StrictMode } from "react";

import "./index.css";
import { createRoot } from "react-dom/client";
import { Fragment } from "react";
const root = createRoot(document.getElementById("root"));

function Header() {
  return (
    <header className="header">
      <img src="react-logo.png" className="nav-logo" alt="React logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainComponent() {
  return (
    <main>
      <h1>Reason, why i do it?</h1>
      <ol>
        <li>I want earn enough money</li>
        <li>I like logical tasks</li>
        <li>I like be like Sherlock but in IT world</li>
        <li>I think im ready</li>
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
