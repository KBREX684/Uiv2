import { useLanguage, t } from "../context/LanguageContext";
import { Search, Filter, SlidersHorizontal, ChevronDown, Check, Star, GitFork, Github, Loader2 } from "lucide-react";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { clsx } from "clsx";

export function Discover() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const res = await fetch('/api/v1/projects');
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("Failed to load projects", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [activeTab]);

  return (
    <div className="flex flex-col flex-1 bg-background">
      <div className="border-b border-border/40 bg-muted/10 pt-10 pb-6 sticky top-16 z-30 backdrop-blur-md">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
                {t(language, "Discover Projects", "发现项目")}
              </h1>
              <p className="text-muted-foreground text-sm">
                {t(language, "Explore the latest open-source tools, AI agents, and frameworks.", "探索最新的开源工具、AI Agents 和框架。")}
              </p>
            </div>
            
            <div className="flex w-full md:w-auto gap-3">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={t(language, "Search by name, tag, tech stack...", "搜索名称、标签或技术栈...")}
                  className="h-9 w-full rounded-md border border-border/50 bg-card pl-9 pr-4 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/50 shadow-sm"
                />
              </div>
              <button className="h-9 px-4 rounded-md border border-border/50 bg-card hover:bg-muted transition-colors flex items-center justify-center gap-2 text-sm font-medium text-foreground shadow-sm">
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline">{t(language, "Filters", "筛选")}</span>
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-8 border-b border-border/40 w-full overflow-x-auto">
            <div className="flex space-x-1 sm:space-x-4">
              {["all", "trending", "new", "ai", "mcp"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={clsx(
                    "px-3 sm:px-4 py-2 border-b-2 text-sm font-medium transition-colors capitalize whitespace-nowrap",
                    activeTab === tab
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                  )}
                >
                  {tab === "all" ? t(language, "All Projects", "所有项目") : tab}
                </button>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <span>{t(language, "Sort by:", "排序:")}</span>
              <button className="flex items-center gap-1 text-foreground font-medium hover:text-primary transition-colors">
                {t(language, "Most Stars", "最多 Star")} <ChevronDown className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
        {/* Sidebar Filters (Desktop) */}
        <div className="hidden lg:block w-64 shrink-0 space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-3">
              <SlidersHorizontal className="h-4 w-4" />
              {t(language, "Tech Stack", "技术栈")}
            </h3>
            <div className="space-y-2">
              {["React", "Next.js", "TypeScript", "Rust", "Go", "Python", "PostgreSQL"].map((tech) => (
                <label key={tech} className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-4 h-4 rounded border border-border bg-card flex items-center justify-center group-hover:border-primary transition-colors">
                    {tech === "TypeScript" && <Check className="h-3 w-3 text-primary" />}
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{tech}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="h-px bg-border/40 w-full" />

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              {t(language, "Project Status", "项目状态")}
            </h3>
            <div className="space-y-2">
              {["Active", "Beta", "Archived"].map((status) => (
                <label key={status} className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-4 h-4 rounded border border-border bg-card group-hover:border-primary transition-colors">
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{status}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="h-px bg-border/40 w-full" />

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              {t(language, "Team", "团队")}
            </h3>
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="w-4 h-4 rounded border border-border bg-card group-hover:border-primary transition-colors">
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {t(language, "Looking for Contributors", "寻找贡献者")}
              </span>
            </label>
          </div>
        </div>

        {/* Project Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-muted-foreground">
              {t(language, `Showing ${projects.length} results`, `显示 ${projects.length} 条结果`)}
            </span>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="group rounded-xl border border-border/40 bg-card p-5 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-md bg-gradient-to-br from-gray-700 to-gray-900 border border-border flex items-center justify-center font-bold text-foreground text-xs overflow-hidden">
                        {project.img ? (
                          <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                        ) : (
                          `P${project.id.slice(-1)}`
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                          <Link to={`/projects/${project.id}`} className="before:absolute before:inset-0 before:z-10">{project.title}</Link>
                        </h3>
                        <p className="text-xs text-muted-foreground">by {project.author}</p>
                      </div>
                    </div>
                    <span className={clsx(
                      "text-[10px] px-2 py-0.5 rounded font-medium border",
                      project.status === "Active" ? "bg-success/10 text-success border-success/20" :
                      project.status === "Beta" ? "bg-warning/10 text-warning border-warning/20" :
                      "bg-muted text-muted-foreground border-border"
                    )}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag: string) => (
                      <span key={tag} className="px-2 py-0.5 rounded-sm bg-accent/50 text-accent-foreground text-[10px] font-medium border border-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/40">
                    <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                      <span className="flex items-center gap-1 hover:text-foreground transition-colors z-20 relative cursor-pointer"><Star className="h-3.5 w-3.5" /> {project.stars}</span>
                      <span className="flex items-center gap-1 hover:text-foreground transition-colors z-20 relative cursor-pointer"><GitFork className="h-3.5 w-3.5" /> {project.forks}</span>
                    </div>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors z-20 relative">
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-1">
              <button className="h-8 w-8 flex items-center justify-center rounded border border-border/40 bg-card text-muted-foreground hover:bg-muted disabled:opacity-50" disabled>
                &lt;
              </button>
              <button className="h-8 w-8 flex items-center justify-center rounded bg-primary text-primary-foreground font-medium">1</button>
              <button className="h-8 w-8 flex items-center justify-center rounded border border-border/40 bg-card text-muted-foreground hover:bg-muted">2</button>
              <button className="h-8 w-8 flex items-center justify-center rounded border border-border/40 bg-card text-muted-foreground hover:bg-muted">3</button>
              <span className="px-2 text-muted-foreground">...</span>
              <button className="h-8 w-8 flex items-center justify-center rounded border border-border/40 bg-card text-muted-foreground hover:bg-muted">12</button>
              <button className="h-8 w-8 flex items-center justify-center rounded border border-border/40 bg-card text-muted-foreground hover:bg-muted">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}