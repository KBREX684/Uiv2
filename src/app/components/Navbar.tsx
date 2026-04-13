import { Link, NavLink } from "react-router";
import { useLanguage, t } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";
import { Search, Bell, Globe, Menu, X, LogIn, LogOut } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const { user, login, logout, loading } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { to: "/", en: "Overview", zh: "概览" },
    { to: "/discover", en: "Discover", zh: "发现" },
    { to: "/discussions", en: "Discussions", zh: "讨论" },
    { to: "/teams", en: "Teams", zh: "团队" },
    { to: "/leaderboards", en: "Leaderboards", zh: "排行榜" },
    { to: "/admin", en: "Admin", zh: "管理后台" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white text-xs font-black">V</span>
              </div>
              VibeHub
            </Link>

            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-1 lg:space-x-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      clsx(
                        "px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap",
                        isActive
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      )
                    }
                  >
                    {t(language, item.en, item.zh)}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={t(language, "Search...", "搜索...")}
                className="h-9 w-48 lg:w-64 rounded-md border border-border/50 bg-muted/30 pl-9 pr-4 text-sm outline-none transition-all focus:border-primary focus:bg-background focus:ring-1 focus:ring-primary/50"
              />
            </div>

            <button className="text-muted-foreground hover:text-foreground transition-colors relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-primary text-[8px] font-bold text-primary-foreground">
                3
              </span>
            </button>

            <div className="flex items-center rounded-md border border-border/40 p-0.5 bg-muted/20">
              <button
                onClick={() => setLanguage("en")}
                className={clsx(
                  "px-2 py-1 text-xs font-medium rounded-sm transition-colors",
                  language === "en" ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                )}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("zh")}
                className={clsx(
                  "px-2 py-1 text-xs font-medium rounded-sm transition-colors",
                  language === "zh" ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                )}
              >
                中
              </button>
            </div>

            <Link to="/workspace/enterprise" className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              {t(language, "Workspace", "工作台")}
            </Link>

            {user ? (
              <div className="relative group">
                <button className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border border-border flex items-center justify-center text-sm font-bold shadow-sm">
                  {user.name.charAt(0)}
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-card border border-border/50 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col z-50 overflow-hidden">
                  <div className="px-4 py-3 border-b border-border/40">
                    <p className="text-sm font-medium text-foreground truncate">{user.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                  </div>
                  <button onClick={logout} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors text-left">
                    <LogOut className="h-4 w-4" />
                    {t(language, "Sign Out", "退出登录")}
                  </button>
                </div>
              </div>
            ) : (
              <button onClick={login} disabled={loading} className="h-9 px-4 rounded-md bg-primary text-primary-foreground font-medium text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50">
                <LogIn className="h-4 w-4" />
                {t(language, "Sign In", "登录")}
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              className="flex items-center gap-1 text-xs font-medium text-muted-foreground"
            >
              <Globe className="h-4 w-4" />
              {language === "en" ? "EN" : "中文"}
            </button>
            
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-foreground">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    isActive
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  )
                }
              >
                {t(language, item.en, item.zh)}
              </NavLink>
            ))}
          </div>
          <div className="border-t border-border pb-4 pt-4 px-4 flex flex-col gap-4">
             <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={t(language, "Search...", "搜索...")}
                className="h-10 w-full rounded-md border border-border/50 bg-muted/30 pl-10 pr-4 text-sm outline-none"
              />
            </div>
            <Link 
              to="/workspace/enterprise" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex justify-center items-center gap-2 w-full py-2 rounded-md bg-primary/10 text-primary font-medium"
            >
              {t(language, "Enterprise Workspace", "企业工作台")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}