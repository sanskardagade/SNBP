import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import EnquireBar from "./components/layout/EnquireBar.jsx";
import Home from "./pages/Home.jsx";
import Admissions from "./pages/Admissions.jsx";
import Contact from "./pages/Contact.jsx";
import StaticPage from "./pages/StaticPage.jsx";
import Placements from "./pages/Placements.jsx";
import AboutUniversity from "./pages/AboutUniversity.jsx";
import MandatoryDisclosure from "./pages/MandatoryDisclosure.jsx";
import ProgramPage, { SchoolPage } from "./pages/ProgramPage.jsx";
import Scholarships from "./pages/Scholarships.jsx";
import OurJourney from "./pages/OurJourney.jsx";
import SponsoringBody from "./pages/SponsoringBody.jsx";
import OurTeam from "./pages/OurTeam.jsx";
import { programPages, schoolPages } from "./content/programs.js";
function NotFound() {
  return (
    <main className="container-width py-24 text-center">
      <div className="text-sm font-extrabold uppercase tracking-widest text-gold">404 · Page not found</div>
      <h1 className="font-heading mt-4 text-4xl font-bold text-purplebrand">This page isn&apos;t here.</h1>
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
          <Route path="/about" element={<AboutUniversity />} />
          <Route path="/our-journey" element={<OurJourney />} />
          <Route path="/sponsoring-body" element={<SponsoringBody />} />
          <Route path="/snbp-leadership" element={<StaticPage pageKey="/snbp-leadership" />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/chancellor-message" element={<StaticPage pageKey="/chancellor-message" />} />
          <Route path="/vice-chancellor-message" element={<StaticPage pageKey="/vice-chancellor-message" />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/life-at-snbp" element={<StaticPage pageKey="/life-at-snbp" />} />
          <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
          <Route path="/scholarships" element={<Scholarships />} />
          {Object.keys(schoolPages).map((key) => (
            <Route key={key} path={key} element={<SchoolPage pageKey={key} />} />
          ))}
          {Object.keys(programPages).map((key) => (
            <Route key={key} path={key} element={<ProgramPage pageKey={key} />} />
          ))}
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
          <Route path="/academics" element={<Navigate to="/placements" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <EnquireBar />
    </>
  );
}
