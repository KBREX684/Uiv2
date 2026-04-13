import { useLanguage, t } from "../context/LanguageContext";
import { MessageSquare, Flame, Star, TrendingUp, Search, PlusCircle, ThumbsUp, MessageCircle } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import { clsx } from "clsx";

export function Discussions() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("recent");

  const DISCUSSIONS = Array.from({ length: 12 }).map((_, i) => ({
    id: `post-${i}`,
    title: `How to manage large scale state with React and Redux? (${i + 1})`,
    preview: "I've been working on a enterprise dashboard and the state management is getting out of hand. What are the best practices for structuring Redux store, or should we migrate to Zustand/Jotai?",
    author: `DevNinja${i}`,
    time: `${i + 1}h ago`,
    replies: Math.floor(Math.random() * 50) + 1,
    upvotes: Math.floor(Math.random() * 200) + 10,
    tags: ["React", "State Management", "Architecture"],
    isFeatured: i === 0 || i === 3,
  }));

  return (
    <div className="flex flex-col flex-1 bg-background">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2 flex items-center gap-2">
              <MessageSquare className="h-7 w-7 text-primary" />
              {t(language, "Community Discussions", "社区讨论")}
            </h1>
            <p className="text-muted-foreground text-sm max-w-2xl">
              {t(language, "Share knowledge, ask questions, and collaborate with developers globally.", "分享知识、提出问题，与全球开发者交流协作。")}
            </p>
          </div>
          
          <button className="h-10 px-5 rounded-md bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            <PlusCircle className="h-4 w-4" />
            {t(language, "New Discussion", "发起讨论")}
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-border/40 pb-4">
          <div className="flex bg-muted/30 p-1 rounded-lg border border-border/50">
            {[
              { id: "recent", icon: MessageSquare, en: "Recent", zh: "最新" },
              { id: "hot", icon: Flame, en: "Hot", zh: "热门" },
              { id: "featured", icon: Star, en: "Featured", zh: "精选" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={clsx(
                  "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all",
                  activeTab === tab.id 
                    ? "bg-card text-foreground shadow-sm border border-border/50" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <tab.icon className={clsx("h-4 w-4", activeTab === tab.id ? "text-primary" : "")} />
                {t(language, tab.en, tab.zh)}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={t(language, "Search discussions...", "搜索讨论...")}
              className="h-9 w-full rounded-md border border-border/50 bg-card pl-9 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/50"
            />
          </div>
        </div>

        <div className="space-y-4">
          {DISCUSSIONS.map((post) => (
            <div key={post.id} className="p-5 rounded-xl border border-border/40 bg-card hover:border-primary/40 transition-all hover:shadow-md flex gap-4">
              <div className="hidden sm:flex flex-col items-center gap-2 pt-1 shrink-0">
                <button className="h-8 w-8 rounded bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-colors">
                  <TrendingUp className="h-4 w-4" />
                </button>
                <span className="text-sm font-bold text-foreground">{post.upvotes}</span>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {post.isFeatured && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-warning/10 text-warning border border-warning/20 flex items-center gap-1 uppercase tracking-wider">
                      <Star className="h-3 w-3 fill-current" /> {t(language, "Featured", "精选")}
                    </span>
                  )}
                  <Link to={`/discussions/${post.id}`} className="text-lg font-semibold text-foreground hover:text-primary transition-colors truncate">
                    {post.title}
                  </Link>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {post.preview}
                </p>
                
                <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-[8px] text-white font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">{post.author}</span>
                    </div>
                    <span className="text-xs text-border/40">•</span>
                    <span className="text-xs text-muted-foreground">{post.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 rounded-sm bg-muted text-muted-foreground text-[10px] font-medium border border-border/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                      <MessageCircle className="h-4 w-4" />
                      {post.replies}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
           <button className="h-10 px-6 rounded-md border border-border bg-card text-foreground text-sm font-medium hover:bg-muted transition-colors">
             {t(language, "Load More", "加载更多")}
           </button>
        </div>
      </div>
    </div>
  );
}