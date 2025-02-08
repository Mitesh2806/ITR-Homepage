// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About";

import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";

import { ScrollToTop } from "./components/ScrollToTop";

import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import Dashboard from "./components/Dashboard";
import "./App.css";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Team />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
