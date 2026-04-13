import { useLanguage, t } from "../context/LanguageContext";
import { Trophy, TrendingUp, Activity, Award, Star, Flame } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

export function Leaderboards() {
  const { language } = useLanguage();
  const [timeframe, setTimeframe] = useState("weekly");

  const HALL_OF_FAME = Array.from({ length: 5 }).map((_, i) => ({
    rank: i + 1,
    name: `Creator_${i + 1}`,
    score: 12000 - i * 1500,
    badges: ["Top Contributor", "Bug Hunter", "Mentor"].slice(0, 3 - Math.floor(i / 2)),
    avatar: `C${i+1}`
  }));

  const TRENDING_PROJECTS = Array.from({ length: 5 }).map((_, i) => ({
    rank: i + 1,
    name: `Aura Framework v${i + 2}`,
    starsGained: 500 - i * 50,
    author: `Team Alpha ${i}`,
  }));

  return (
    <div className="flex flex-col flex-1 bg-background">
      <div className="relative overflow-hidden py-16 border-b border-border/40 bg-gradient-to-b from-primary/10 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background/0 to-transparent pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex h-16 w-16 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20 items-center justify-center mb-6 border border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
            <Trophy className="h-8 w-8 text-yellow-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            {t(language, "Global Leaderboards", "全球排行榜")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {t(language, "Recognizing the most impactful creators, fastest growing projects, and top contributors in the community.", "表彰社区中最具影响力的创作者、增长最快的项目以及顶级贡献者。")}
          </p>
          
          <div className="inline-flex bg-muted/40 p-1 rounded-lg border border-border/50 backdrop-blur-sm">
            {[
              { id: "weekly", en: "This Week", zh: "本周" },
              { id: "monthly", en: "This Month", zh: "本月" },
              { id: "all-time", en: "All Time", zh: "总榜" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setTimeframe(tab.id)}
                className={clsx(
                  "px-6 py-2 rounded-md text-sm font-bold transition-all",
                  timeframe === tab.id 
                    ? "bg-card text-foreground shadow-sm border border-border" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t(language, tab.en, tab.zh)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Hall of Fame */}
          <div>
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                {t(language, "Contribution Hall of Fame", "贡献者名人堂")}
              </h2>
            </div>
            
            <div className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-lg shadow-background/50">
              <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-muted/30 border-b border-border/40 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                <div className="col-span-2 text-center">Rank</div>
                <div className="col-span-6">Creator</div>
                <div className="col-span-4 text-right">Score</div>
              </div>
              
              <div className="divide-y divide-border/20">
                {HALL_OF_FAME.map((creator) => (
                  <div key={creator.rank} className="grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-muted/10 transition-colors">
                    <div className="col-span-2 text-center">
                      <span className={clsx(
                        "inline-flex h-8 w-8 items-center justify-center rounded-full font-bold text-sm",
                        creator.rank === 1 ? "bg-yellow-500/20 text-yellow-500 border border-yellow-500/30" :
                        creator.rank === 2 ? "bg-slate-300/20 text-slate-300 border border-slate-300/30" :
                        creator.rank === 3 ? "bg-amber-600/20 text-amber-600 border border-amber-600/30" :
                        "text-muted-foreground font-medium"
                      )}>
                        {creator.rank}
                      </span>
                    </div>
                    <div className="col-span-6 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-xs shadow-inner border border-white/10">
                        {creator.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-foreground text-sm">{creator.name}</div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {creator.badges.map(badge => (
                            <span key={badge} className="text-[10px] px-1.5 py-0.5 bg-accent/20 text-accent-foreground rounded-sm border border-accent/20">
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-span-4 text-right font-mono text-sm font-bold text-primary">
                      {creator.score.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trending Projects */}
          <div>
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Flame className="h-6 w-6 text-warning" />
                {t(language, "Trending Projects", "趋势项目")}
              </h2>
            </div>
            
            <div className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-lg shadow-background/50">
              <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-muted/30 border-b border-border/40 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                <div className="col-span-2 text-center">Rank</div>
                <div className="col-span-7">Project</div>
                <div className="col-span-3 text-right flex items-center justify-end gap-1"><Star className="h-3 w-3" /> Gained</div>
              </div>
              
              <div className="divide-y divide-border/20">
                {TRENDING_PROJECTS.map((project) => (
                  <div key={project.rank} className="grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-muted/10 transition-colors">
                    <div className="col-span-2 text-center">
                      <span className={clsx(
                        "inline-flex h-8 w-8 items-center justify-center rounded font-bold text-sm",
                        project.rank <= 3 ? "bg-card border border-border text-foreground shadow-sm" : "text-muted-foreground font-medium"
                      )}>
                        #{project.rank}
                      </span>
                    </div>
                    <div className="col-span-7">
                      <div className="font-bold text-foreground text-sm hover:text-primary transition-colors cursor-pointer">{project.name}</div>
                      <div className="text-xs text-muted-foreground mt-1 line-clamp-1">by {project.author}</div>
                    </div>
                    <div className="col-span-3 text-right">
                      <span className="inline-flex items-center gap-1 font-mono text-sm font-bold text-success bg-success/10 px-2 py-1 rounded-md border border-success/20">
                        <TrendingUp className="h-3 w-3" /> +{project.starsGained}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}