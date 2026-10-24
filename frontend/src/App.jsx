import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import EnquireBar from "./components/layout/EnquireBar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Academics from "./pages/Academics.jsx";
import Admissions from "./pages/Admissions.jsx";
import Contact from "./pages/Contact.jsx";
function NotFound() {
  return (
    <main className="container-width py-24 text-center">
      <div className="text-sm font-extrabold uppercase tracking-widest text-gold">404 · Page not found</div>
      <h1 className="heading-serif mt-4 text-4xl font-bold text-purplebrand">This page isn&apos;t here.</h1>
      <a href="/" className="btn-primary mt-7">
        Back to home
      </a>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <EnquireBar />
    </>
  );
}
