import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { AuthProvider } from "./context/AuthContext";

export function RootLayout() {
  const [language, setLanguage] = useState<"en" | "zh">("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <AuthProvider>
        <div className="flex flex-col min-h-screen bg-background text-foreground dark selection:bg-primary/30 selection:text-primary relative overflow-hidden">
          {/* Circuit board texture overlay */}
          <div 
            className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h10v10H10V10zm20 20h10v10H30V30zm40-20h10v10H70V10zm-20 40h10v10H50V50zM10 70h10v10H10V70zm60 0h10v10H70V70zM30 90h10v10H30V90z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E"), 
                                url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83-5.5 5.5h-5.828l-5.5-5.5.828-.828 4.672 4.672h4.172l4.672-4.672zM0 54.627l.83.83 5.5-5.5V44.13l5.5-5.5-.828-.828-4.672 4.672v4.172l-4.672 4.672zM54.627 60l.83-.83-5.5-5.5h-5.828l-5.5 5.5.828.828 4.672-4.672h4.172l4.672 4.672zM0 5.373l.83-.83 5.5 5.5V15.87l5.5 5.5-.828.828-4.672-4.672V10.87L.83 6.201z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px, 60px 60px',
              backgroundPosition: '0 0, 30px 30px'
            }}
          />
          <Navbar />
          <main className="flex-1 flex flex-col relative z-10">
            <Outlet />
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </LanguageContext.Provider>
  );
}