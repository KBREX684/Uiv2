import { useLanguage, t } from "../context/LanguageContext";
import { ArrowRight, Terminal, Zap, Users, Code, Activity, Github } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

const STATS = [
  { label: { en: "Active Builders", zh: "活跃开发者" }, value: "140K+" },
  { label: { en: "Projects Launched", zh: "发布项目" }, value: "12K+" },
  { label: { en: "Open Collaborations", zh: "开放协作" }, value: "8,400" },
  { label: { en: "MCP Integrations", zh: "MCP 接口接入" }, value: "3,200" },
];

const FEATURED_PROJECTS = [
  {
    title: "Aura Agent",
    desc: "Autonomous AI agent framework supporting multi-modal inputs.",
    tags: ["AI", "Rust", "MCP"],
    img: "https://images.unsplash.com/photo-1775994121020-86426451f8bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGNvZGUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc2MDg4NjU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "David L.",
    stars: 1204
  },
  {
    title: "Nexus DB",
    desc: "Next-generation vector database for high-throughput AI workloads.",
    tags: ["Database", "C++", "Vector"],
    img: "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwcHJvamVjdCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzYwODg2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Nexus Team",
    stars: 340
  },
  {
    title: "Vibe UI",
    desc: "Dark-themed minimal UI component library for React and Tailwind.",
    tags: ["Frontend", "React", "Design System"],
    img: "https://images.unsplash.com/photo-1753450298481-362990f811ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwcm9maWxlfGVufDF8fHx8MTc3NjA4ODY1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Sarah W.",
    stars: 890
  }
];

export function Home() {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none" />
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                <Zap className="h-4 w-4" />
                {t(language, "VibeHub 2.0 is now live", "VibeHub 2.0 正式发布")}
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6">
                {t(language, "Where the future of software is built", "构建软件未来的开源协作网络")}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                {t(
                  language,
                  "Connect with elite developers, discover AI-native projects, and orchestrate open collaborations. The unified platform for modern builders.",
                  "连接顶尖开发者，发现 AI 原生项目，组织开源协作。面向现代 Builder 的一站式社区平台。"
                )}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/discover" className="h-12 px-8 rounded-md bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center">
                  <Terminal className="h-5 w-5" />
                  {t(language, "Explore Projects", "探索项目")}
                </Link>
                <Link to="/discussions" className="h-12 px-8 rounded-md border border-border bg-background/50 text-foreground font-medium flex items-center gap-2 hover:bg-muted transition-colors w-full sm:w-auto justify-center backdrop-blur-sm">
                  {t(language, "Join Discussions", "参与讨论")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-xl border border-border/40 bg-muted/20 backdrop-blur-md"
          >
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{t(language, stat.label.en, stat.label.zh)}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Today */}
      <section className="py-20 border-t border-border/20 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                <Activity className="h-6 w-6 text-primary" />
                {t(language, "Featured Today", "今日精选")}
              </h2>
              <p className="text-muted-foreground">
                {t(language, "Trending open-source projects and AI agents.", "趋势开源项目与 AI Agents 推荐。")}
              </p>
            </div>
            <Link to="/discover" className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              {t(language, "View all", "查看全部")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.map((project, i) => (
              <Link to={`/projects/proj-${i}`} key={i} className="group rounded-xl border border-border/40 bg-card overflow-hidden hover:border-primary/50 transition-colors hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 z-20 flex gap-2">
                    <span className="bg-background/80 backdrop-blur-md px-2 py-1 rounded-md text-xs font-medium text-foreground flex items-center gap-1 border border-border/50">
                      <Github className="h-3 w-3" /> {project.stars}
                    </span>
                  </div>
                </div>
                <div className="p-5 relative z-20 -mt-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-sm bg-accent text-accent-foreground text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/40">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-[10px] text-white font-bold">
                        {project.author.charAt(0)}
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">{project.author}</span>
                    </div>
                    <span className="text-xs text-primary font-medium group-hover:underline">
                      {t(language, "Details", "查看详情")}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community Feed / Discussions */}
      <section className="py-20 border-t border-border/20 bg-muted/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Code className="h-6 w-6 text-primary" />
                {t(language, "Community Discussions", "社区讨论")}
              </h2>
              
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="p-5 rounded-lg border border-border/40 bg-card hover:border-border/80 transition-colors flex gap-4">
                    <div className="hidden sm:flex flex-col items-center gap-1">
                      <button className="text-muted-foreground hover:text-primary"><ArrowRight className="h-5 w-5 -rotate-90" /></button>
                      <span className="font-bold text-foreground">{42 - item * 5}</span>
                      <button className="text-muted-foreground hover:text-destructive"><ArrowRight className="h-5 w-5 rotate-90" /></button>
                    </div>
                    <div className="flex-1">
                      <Link to={`/discussions/post-${item}`} className="text-lg font-medium text-foreground hover:text-primary transition-colors block mb-1">
                        {t(language, `How to scale PostgreSQL for multi-tenant AI applications? (Part ${item})`, `如何为多租户 AI 应用扩展 PostgreSQL 架构？(篇 ${item})`)}
                      </Link>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
                        We are currently building an AI native agent platform, and struggling with vector search performance when data...
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {12 + item} replies</span>
                        <span className="px-2 py-0.5 rounded-sm bg-muted text-foreground">Database</span>
                        <span className="px-2 py-0.5 rounded-sm bg-muted text-foreground">Architecture</span>
                        <span>• 2 hours ago</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Link to="/discussions" className="text-sm font-medium text-primary hover:underline">
                  {t(language, "View all discussions →", "查看所有讨论 →")}
                </Link>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-foreground mb-6">
                {t(language, "Active Teams", "活跃团队")}
              </h2>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="p-4 rounded-lg border border-border/40 bg-card flex items-center gap-4">
                     <div className="h-12 w-12 rounded-md bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-border flex items-center justify-center font-bold text-foreground">
                       T{item}
                     </div>
                     <div className="flex-1">
                       <h4 className="font-medium text-foreground text-sm">Nexus Core Team</h4>
                       <p className="text-xs text-muted-foreground mb-1">Looking for: Rust Devs, UI Designers</p>
                       <div className="flex gap-1">
                         <span className="w-2 h-2 rounded-full bg-success"></span>
                         <span className="text-[10px] text-muted-foreground">Hiring</span>
                       </div>
                     </div>
                     <Link to="/teams" className="h-8 px-3 rounded text-xs font-medium border border-border/50 hover:bg-muted flex items-center justify-center transition-colors">
                       View
                     </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}