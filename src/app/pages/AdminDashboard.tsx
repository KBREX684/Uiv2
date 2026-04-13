import { useLanguage, t } from "../context/LanguageContext";
import { Shield, Activity, Users, Settings, Database, Server, Clock, AlertOctagon, TerminalSquare } from "lucide-react";
import { Link } from "react-router";
import { clsx } from "clsx";

export function AdminDashboard() {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col flex-1 bg-background h-screen overflow-hidden">
      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="w-64 border-r border-border/40 bg-muted/10 shrink-0 hidden lg:flex flex-col h-full z-10 backdrop-blur-sm">
          <div className="p-6 border-b border-border/40">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-red-500 to-rose-600 border border-border shadow-inner flex items-center justify-center font-bold text-white shadow-red-500/20">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-bold text-foreground text-sm tracking-tight">{t(language, "VibeHub Admin", "VibeHub 管理后台")}</h2>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">System Control</p>
              </div>
            </div>
          </div>
          
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {[
              { id: "overview", label: { en: "Overview", zh: "总览" }, icon: Activity, active: true },
              { id: "users", label: { en: "User Management", zh: "用户管理" }, icon: Users },
              { id: "content", label: { en: "Content Moderation", zh: "内容审核" }, icon: AlertOctagon },
              { id: "api", label: { en: "API & MCP Logs", zh: "API与MCP审计" }, icon: TerminalSquare },
              { id: "infra", label: { en: "Infrastructure", zh: "基础设施" }, icon: Server },
              { id: "settings", label: { en: "System Settings", zh: "系统设置" }, icon: Settings },
            ].map(item => (
              <a
                key={item.id}
                href="#"
                className={clsx(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all group",
                  item.active 
                    ? "bg-primary/10 text-primary border border-primary/20 shadow-sm" 
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground border border-transparent"
                )}
              >
                <item.icon className={clsx("h-4 w-4", item.active ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
                {t(language, item.label.en, item.label.zh)}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-background/50">
          <div className="p-6 lg:p-10 space-y-8 max-w-7xl mx-auto">
            
            <header className="flex flex-col md:flex-row items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-foreground mb-1">
                  {t(language, "System Dashboard", "系统仪表板")}
                </h1>
                <p className="text-sm text-muted-foreground font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
                  {t(language, "All systems operational", "所有系统运行正常")}
                </p>
              </div>
              
              <div className="flex items-center gap-3 bg-muted/30 px-4 py-2 rounded-md border border-border/40 text-xs font-mono text-muted-foreground shadow-sm">
                <Clock className="h-4 w-4" />
                <span>{new Date().toISOString().replace('T', ' ').slice(0, 19)} UTC</span>
              </div>
            </header>

            {/* Metrics */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Total Users", value: "142,304", trend: "+12% MoM", status: "good" },
                { title: "Active Projects", value: "12,450", trend: "+5% MoM", status: "good" },
                { title: "MCP Invocations", value: "8.4M", trend: "High load", status: "warning" },
                { title: "Reported Content", value: "24", trend: "Needs review", status: "error" },
              ].map((stat, i) => (
                <div key={i} className="p-5 rounded-xl border border-border/40 bg-card shadow-sm hover:border-primary/30 transition-colors">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">{stat.title}</div>
                  <div className="text-2xl font-extrabold text-foreground mb-2">{stat.value}</div>
                  <div className={clsx(
                    "text-xs font-medium inline-flex px-2 py-0.5 rounded-sm border",
                    stat.status === "good" ? "bg-success/10 text-success border-success/20" :
                    stat.status === "warning" ? "bg-warning/10 text-warning border-warning/20" :
                    "bg-destructive/10 text-destructive border-destructive/20"
                  )}>
                    {stat.trend}
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Audit Logs */}
            <div className="bg-card rounded-xl border border-border/40 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-border/40 bg-muted/20 flex justify-between items-center">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <TerminalSquare className="h-5 w-5 text-primary" />
                  {t(language, "Recent MCP / API Audit Logs", "近期 MCP / API 调用审计")}
                </h3>
                <button className="text-xs font-bold text-primary hover:underline">
                  {t(language, "View All", "查看全部")}
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-[10px] uppercase font-bold text-muted-foreground bg-muted/10 border-b border-border/40 tracking-wider">
                    <tr>
                      <th className="px-6 py-3">Timestamp</th>
                      <th className="px-6 py-3">Actor / Client</th>
                      <th className="px-6 py-3">Action</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3 text-right">Latency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/20">
                    {[
                      { time: "2 mins ago", actor: "Aura Agent", action: "mcp.call_tool (read_file)", status: "200 OK", latency: "45ms" },
                      { time: "5 mins ago", actor: "Enterprise Key #4", action: "api.v1.projects.create", status: "201 Created", latency: "120ms" },
                      { time: "12 mins ago", actor: "Nexus DB Bot", action: "mcp.call_tool (execute_query)", status: "200 OK", latency: "850ms" },
                      { time: "15 mins ago", actor: "Unknown IP", action: "api.v1.auth.login", status: "401 Unauthorized", latency: "12ms", error: true },
                    ].map((log, i) => (
                      <tr key={i} className="hover:bg-muted/10 transition-colors">
                        <td className="px-6 py-3 font-mono text-[11px] text-muted-foreground whitespace-nowrap">{log.time}</td>
                        <td className="px-6 py-3 font-medium text-foreground whitespace-nowrap">{log.actor}</td>
                        <td className="px-6 py-3 font-mono text-[11px] text-primary whitespace-nowrap">{log.action}</td>
                        <td className="px-6 py-3 whitespace-nowrap">
                          <span className={clsx(
                            "px-2 py-0.5 rounded text-[10px] font-bold border",
                            log.error ? "bg-destructive/10 text-destructive border-destructive/20" : "bg-success/10 text-success border-success/20"
                          )}>
                            {log.status}
                          </span>
                        </td>
                        <td className="px-6 py-3 text-right font-mono text-[11px] text-muted-foreground whitespace-nowrap">{log.latency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
}