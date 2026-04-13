import { useLanguage, t } from "../context/LanguageContext";
import { useParams } from "react-router";
import { Target, Star, GitFork, Github, Link as LinkIcon, Download, Users, PlusCircle, Globe, Box, Terminal, MessageSquare, ExternalLink, Cpu } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";
import { Link } from "react-router";

export function ProjectDetail() {
  const { language } = useLanguage();
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex flex-col flex-1 bg-background">
      <div className="bg-gradient-to-b from-muted/50 to-background border-b border-border/40 pt-10 pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between mb-8">
            <div className="flex gap-6 items-start">
              <div className="h-24 w-24 shrink-0 rounded-xl bg-gradient-to-br from-primary to-purple-600 shadow-xl border-4 border-background flex items-center justify-center text-4xl font-black text-white relative z-10 overflow-hidden">
                <span className="relative z-10 uppercase">{slug?.charAt(0)}</span>
                <div className="absolute inset-0 bg-black/20" />
              </div>
              
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground capitalize">
                    {slug?.replace("-", " ")}
                  </h1>
                  <span className="px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-success/10 text-success border border-success/20">
                    Active
                  </span>
                </div>
                
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-4">
                  An advanced modular agent framework for enterprise AI operations. Supports plugins and MCP integrations out of the box.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground">
                  <div className="flex items-center gap-1.5 hover:text-foreground cursor-pointer transition-colors">
                    <Star className="h-4 w-4" /> 4,500 Stars
                  </div>
                  <div className="flex items-center gap-1.5 hover:text-foreground cursor-pointer transition-colors">
                    <GitFork className="h-4 w-4" /> 340 Forks
                  </div>
                  <div className="flex items-center gap-1.5 hover:text-foreground cursor-pointer transition-colors">
                    <Users className="h-4 w-4" /> 12 Contributors
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 w-full lg:w-auto shrink-0">
              <a href="#" className="h-10 px-5 rounded-md bg-foreground text-background font-bold flex items-center justify-center gap-2 hover:bg-muted-foreground transition-all shadow-md flex-1 lg:flex-auto">
                <Github className="h-5 w-5" /> Repository
              </a>
              <a href="#" className="h-10 px-5 rounded-md border border-border/50 bg-card text-foreground font-medium flex items-center justify-center gap-2 hover:bg-muted transition-all shadow-sm flex-1 lg:flex-auto">
                <Globe className="h-4 w-4" /> Website
              </a>
              <button className="h-10 w-10 rounded-md border border-border/50 bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all shadow-sm shrink-0">
                <PlusCircle className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="flex space-x-6 border-b border-border/40 mt-8 overflow-x-auto pb-1">
             {[
               { id: "overview", label: { en: "Overview", zh: "总览" } },
               { id: "installation", label: { en: "Installation", zh: "安装" } },
               { id: "mcp", label: { en: "MCP Config", zh: "MCP 接口配置" }, icon: Cpu },
               { id: "discussions", label: { en: "Discussions (24)", zh: "讨论 (24)" } },
             ].map(tab => (
               <button
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id)}
                 className={clsx(
                   "pb-3 text-sm font-semibold transition-all border-b-2 whitespace-nowrap flex items-center gap-2",
                   activeTab === tab.id
                     ? "border-primary text-primary"
                     : "border-transparent text-muted-foreground hover:text-foreground hover:border-border/50"
                 )}
               >
                 {tab.icon && <tab.icon className="h-4 w-4" />}
                 {t(language, tab.label.en, tab.label.zh)}
               </button>
             ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-10">
        
        {/* Main Content Area */}
        <div className="flex-1 min-w-0 space-y-10">
          
          <section>
            <h3 className="text-xl font-bold text-foreground mb-4">{t(language, "About", "关于项目")}</h3>
            <div className="prose prose-invert max-w-none text-muted-foreground">
              <p>Aura Framework is designed for high-performance modular AI operations. It unifies state management, plugin orchestration, and MCP capabilities into a single predictable runtime.</p>
              <p>Features include:</p>
              <ul>
                <li>Hot-reloading of agent capabilities without downtime.</li>
                <li>Type-safe MCP integrations and native observability.</li>
                <li>Zero-dependency core package for edge deployment.</li>
              </ul>
            </div>
          </section>

          <div className="h-px bg-border/40 w-full" />

          <section>
            <h3 className="text-xl font-bold text-foreground mb-4">{t(language, "Screenshot Gallery", "截图画廊")}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border/40 overflow-hidden bg-muted/20 aspect-video flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer group relative">
                <img src="https://images.unsplash.com/photo-1775994121020-86426451f8bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGNvZGUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc2MDg4NjU1fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-lg border border-border/40 overflow-hidden bg-muted/20 aspect-video flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer group relative">
                 <img src="https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwcHJvamVjdCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzYwODg2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </section>
          
          <div className="h-px bg-border/40 w-full" />
          
          <section>
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Cpu className="h-5 w-5 text-primary" />
              {t(language, "MCP Configuration", "MCP 接口配置")}
            </h3>
            <div className="bg-[#0B0E14] border border-border/40 rounded-xl overflow-hidden shadow-inner">
              <div className="flex items-center justify-between px-4 py-2 border-b border-border/40 bg-muted/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">mcp_config.json</span>
              </div>
              <div className="p-4 overflow-x-auto text-sm font-mono text-[#E2E8F0] leading-relaxed">
                <pre><code>{`{
  "mcpServers": {
    "aura-tools": {
      "command": "node",
      "args": ["dist/mcp-server.js"],
      "env": {
        "AURA_API_KEY": "YOUR_API_KEY"
      }
    }
  }
}`}</code></pre>
              </div>
            </div>
          </section>

        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 shrink-0 space-y-8">
          
          <div className="p-5 rounded-xl border border-border/40 bg-card shadow-sm">
            <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
              <Box className="h-4 w-4 text-muted-foreground" />
              {t(language, "Tech Stack", "技术栈")}
            </h4>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "Rust", "React", "Next.js", "PostgreSQL", "TailwindCSS"].map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded bg-muted/50 text-muted-foreground text-xs font-medium border border-border/50 hover:bg-muted transition-colors cursor-pointer">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="p-5 rounded-xl border border-primary/20 bg-primary/5 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 -mr-4 -mt-4 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
             <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
               <Target className="h-5 w-5 text-primary" />
               {t(language, "Collaboration Intent", "协作意向")}
             </h4>
             <p className="text-sm text-muted-foreground mb-4">
               {t(language, "The team is actively looking for developers to join their core maintenance group.", "团队正在积极寻找开发者加入核心维护组。")}
             </p>
             <button className="w-full h-10 rounded-md bg-primary text-primary-foreground font-bold flex items-center justify-center hover:bg-primary/90 transition-colors shadow-sm">
               {t(language, "Apply to Join", "申请加入")}
             </button>
          </div>
          
          <div className="p-5 rounded-xl border border-border/40 bg-card shadow-sm">
            <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              {t(language, "Team", "所属团队")}
            </h4>
            <Link to="/teams/team-1" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50 group cursor-pointer">
              <div className="h-10 w-10 rounded bg-gradient-to-br from-indigo-500/20 to-blue-600/20 border border-border flex items-center justify-center font-bold text-foreground text-sm group-hover:border-primary/50 transition-colors">
                N
              </div>
              <div>
                <h5 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">Nexus Core Team</h5>
                <p className="text-xs text-muted-foreground mt-0.5">8 Members</p>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

