import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { LanguageContext } from "./context/LanguageContext";

export function RootLayout() {
  const [language, setLanguage] = useState<"en" | "zh">("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="flex flex-col min-h-screen bg-background text-foreground dark selection:bg-primary/30 selection:text-primary">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}