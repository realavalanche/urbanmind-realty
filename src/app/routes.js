import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Listings from "./pages/Listings";
import PropertyDetail from "./pages/PropertyDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "listings", Component: Listings },
      { path: "property/:id", Component: PropertyDetail },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
