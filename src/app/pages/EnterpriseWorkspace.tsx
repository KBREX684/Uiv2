import { useLanguage, t } from "../context/LanguageContext";
import { Building2, Radar, Users, Briefcase, Activity, AlertTriangle, Key, Network } from "lucide-react";
import { motion } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function EnterpriseWorkspace() {
  const { language } = useLanguage();

  const mockData = [
    { name: "Mon", interactions: 400 },
    { name: "Tue", interactions: 300 },
    { name: "Wed", interactions: 550 },
    { name: "Thu", interactions: 200 },
    { name: "Fri", interactions: 278 },
    { name: "Sat", interactions: 189 },
    { name: "Sun", interactions: 239 },
  ];

  return (
    <div className="flex flex-col flex-1 bg-background">
      <div className="border-b border-border/40 bg-muted/10 pt-10 pb-8">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 border border-border shadow-inner flex items-center justify-center text-2xl font-black text-white">
              V
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground flex items-center gap-3">
                {t(language, "VibeHub Enterprise", "VibeHub 企业工作台")}
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-primary/20 text-primary border border-primary/30">
                  Premium
                </span>
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                {t(language, "Manage organization resources, API keys, and talent radar.", "管理组织资源、API Keys 及人才雷达。")}
              </p>
            </div>
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
            <button className="h-10 px-5 rounded-md border border-border/50 bg-card text-foreground font-medium flex items-center justify-center gap-2 hover:bg-muted transition-colors flex-1 md:flex-auto shadow-sm">
              <Key className="h-4 w-4" /> API Keys
            </button>
            <button className="h-10 px-5 rounded-md bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors flex-1 md:flex-auto shadow-md shadow-primary/20">
              <Network className="h-4 w-4" /> MCP Settings
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Metric Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { title: t(language, "Active Projects", "活跃项目"), value: "14", change: "+2 this month", icon: Briefcase, color: "text-blue-500" },
             { title: t(language, "API Calls", "API 调用量"), value: "1.2M", change: "+15% from last week", icon: Activity, color: "text-green-500" },
             { title: t(language, "Talent Pipeline", "人才储备池"), value: "48", change: "12 pending requests", icon: Users, color: "text-purple-500" },
             { title: t(language, "System Status", "系统状态"), value: "Healthy", change: "100% uptime", icon: Radar, color: "text-emerald-500" },
           ].map((stat, i) => (
             <div key={i} className="p-6 rounded-xl border border-border/40 bg-card hover:border-primary/30 transition-colors shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 -mr-4 -mt-4 w-16 h-16 bg-muted/20 rounded-full blur-xl group-hover:bg-primary/10 transition-colors" />
               <div className="flex justify-between items-start mb-4">
                 <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.title}</div>
                 <stat.icon className={`h-5 w-5 ${stat.color} opacity-80`} />
               </div>
               <div className="text-3xl font-extrabold text-foreground mb-1">{stat.value}</div>
               <div className="text-xs text-muted-foreground font-medium">{stat.change}</div>
             </div>
           ))}
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Chart */}
          <div className="lg:col-span-2 p-6 rounded-xl border border-border/40 bg-card shadow-sm">
             <div className="flex justify-between items-center mb-6">
               <h3 className="font-bold text-foreground text-lg flex items-center gap-2">
                 <Activity className="h-5 w-5 text-primary" />
                 {t(language, "Developer Interaction Funnel", "开发者互动漏斗")}
               </h3>
               <select className="h-8 rounded-md bg-muted/50 border border-border text-xs text-foreground outline-none px-2 font-medium">
                 <option>Last 7 Days</option>
                 <option>Last 30 Days</option>
               </select>
             </div>
             
             <div className="h-72 w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={mockData}>
                   <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                   <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                   <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                   <Tooltip 
                     cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                     contentStyle={{ backgroundColor: '#1A1F2B', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#E2E8F0' }}
                   />
                   <Bar dataKey="interactions" fill="#3B82F6" radius={[4, 4, 0, 0]} maxBarSize={40} />
                 </BarChart>
               </ResponsiveContainer>
             </div>
          </div>
          
          {/* Side Panel */}
          <div className="space-y-8">
            <div className="p-6 rounded-xl border border-border/40 bg-card shadow-sm flex flex-col h-full">
              <h3 className="font-bold text-foreground text-lg flex items-center gap-2 mb-6">
                <AlertTriangle className="h-5 w-5 text-warning" />
                {t(language, "Pending Approvals", "待处理申请")}
              </h3>
              
              <div className="space-y-4 flex-1">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 border border-border/40 hover:bg-muted/30 transition-colors cursor-pointer">
                     <div className="flex items-center gap-3">
                       <div className="h-8 w-8 rounded bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-border flex items-center justify-center font-bold text-foreground text-xs shadow-inner">
                         D
                       </div>
                       <div>
                         <p className="text-sm font-medium text-foreground leading-none mb-1">Developer_{item}</p>
                         <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Join Request</p>
                       </div>
                     </div>
                     <button className="text-xs font-bold text-primary hover:underline">
                       {t(language, "Review", "审核")}
                     </button>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 h-9 rounded bg-muted/50 text-foreground text-sm font-medium hover:bg-muted border border-border/50 transition-colors">
                {t(language, "View All Queue", "查看所有队列")}
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}