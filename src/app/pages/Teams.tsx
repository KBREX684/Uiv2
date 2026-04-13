import { useLanguage, t } from "../context/LanguageContext";
import { Users, UserPlus, MapPin, Globe, Plus, Code, Target } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import { clsx } from "clsx";

export function Teams() {
  const { language } = useLanguage();
  const [filter, setFilter] = useState("all");

  const TEAMS = Array.from({ length: 8 }).map((_, i) => ({
    id: `team-${i}`,
    name: `Team Alpha ${i}`,
    desc: "We are building an open source conversational AI interface with specialized integrations for enterprise systems.",
    members: Math.floor(Math.random() * 8) + 2,
    location: "Remote / Global",
    lookingFor: ["Frontend", "Rust", "Design"],
    isHiring: Math.random() > 0.3,
  }));

  return (
    <div className="flex flex-col flex-1 bg-background">
      <div className="border-b border-border/40 bg-muted/10 pt-12 pb-10">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex h-14 w-14 rounded-2xl bg-primary/20 items-center justify-center mb-6 border border-primary/30 shadow-lg shadow-primary/20">
            <Users className="h-7 w-7 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            {t(language, "Find Your Crew", "寻找你的团队")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {t(language, "Join active teams building the next generation of AI-native products and open source tools.", "加入活跃的团队，共同构建下一代 AI 原生产品和开源工具。")}
          </p>
          <button className="h-12 px-6 rounded-md bg-foreground text-background font-bold flex items-center gap-2 hover:bg-muted-foreground transition-all mx-auto shadow-xl">
            <Plus className="h-5 w-5" />
            {t(language, "Create a Team", "创建团队")}
          </button>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex space-x-2 bg-muted/30 p-1 rounded-lg border border-border/40">
            {[
              { id: "all", en: "All Teams", zh: "所有团队" },
              { id: "hiring", en: "Looking for Members", zh: "招募中" },
              { id: "active", en: "Most Active", zh: "最活跃" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={clsx(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all",
                  filter === tab.id 
                    ? "bg-card text-foreground shadow-sm border border-border/50" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t(language, tab.en, tab.zh)}
              </button>
            ))}
          </div>
          
          <span className="text-sm font-medium text-muted-foreground">
            {t(language, "Showing 124 teams", "共找到 124 个团队")}
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAMS.map((team) => (
            <div key={team.id} className="group rounded-xl border border-border/40 bg-card p-6 hover:border-primary/50 transition-all flex flex-col hover:-translate-y-1 hover:shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-blue-600/20 border border-border/50 flex items-center justify-center font-bold text-foreground text-lg shadow-inner">
                    {team.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      <Link to={`/teams/${team.id}`} className="before:absolute before:inset-0">{team.name}</Link>
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                      <Users className="h-3.5 w-3.5" /> {team.members} {t(language, "Members", "成员")}
                    </div>
                  </div>
                </div>
                {team.isHiring && (
                  <span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/20 flex items-center gap-1">
                    <Target className="h-3 w-3" /> {t(language, "Hiring", "招募")}
                  </span>
                )}
              </div>
              
              <p className="text-sm text-muted-foreground mb-5 flex-1 line-clamp-3 leading-relaxed">
                {team.desc}
              </p>
              
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4 bg-muted/30 px-3 py-2 rounded-md border border-border/20">
                <Globe className="h-3.5 w-3.5" /> {team.location}
              </div>
              
              <div className="mt-auto border-t border-border/40 pt-4">
                <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Code className="h-3 w-3" /> {t(language, "Looking for", "需要人才")}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {team.lookingFor.map(role => (
                    <span key={role} className="px-2 py-0.5 rounded-sm bg-accent/20 text-accent-foreground text-[11px] font-medium border border-accent/30">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
           <button className="h-10 px-8 rounded-full border border-border/60 bg-muted/10 text-foreground text-sm font-medium hover:bg-muted/50 transition-colors shadow-sm">
             {t(language, "Load More Teams", "加载更多团队")}
           </button>
        </div>
      </div>
    </div>
  );
}