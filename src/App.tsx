import { useState } from "react";
import { HomePage } from "./components/HomePage";
import { HospitalPage } from "./components/HospitalPage";
import { DoctorPage } from "./components/DoctorPage";
import { AppointmentPage } from "./components/AppointmentPage";
import "./index.css";

export function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "hospital":
        return <HospitalPage onNavigate={handleNavigate} />;
      case "doctor":
        return <DoctorPage onNavigate={handleNavigate} />;
      case "appointment":
        return <AppointmentPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return <div className="min-h-screen">{renderPage()}</div>;
}

export default App;
