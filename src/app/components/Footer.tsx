import { useLanguage, t } from "../context/LanguageContext";

export function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="border-t border-border/40 bg-muted/20 mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white text-xs font-black">V</span>
              </div>
              VibeHub
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              {t(
                language,
                "A community platform for developers, AI Builders, open-source creators, and collaborative teams.",
                "面向开发者、AI Builder、开源创作者和协作团队的社区平台。"
              )}
            </p>
            <div className="flex gap-x-6 text-muted-foreground">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6 hover:text-foreground cursor-pointer" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">{t(language, "Product", "产品")}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">{t(language, "Discover", "发现")}</a></li>
                  <li><a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">{t(language, "Discussions", "讨论")}</a></li>
                  <li><a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">{t(language, "Teams", "团队")}</a></li>
                  <li><a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">{t(language, "Leaderboards", "排行榜")}</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">{t(language, "Platform", "平台")}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">{t(language, "Enterprise", "企业版")}</a></li>
                  <li><a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">{t(language, "API Keys", "API Keys")}</a></li>
                  <li><a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">{t(language, "OpenAPI", "OpenAPI")}</a></li>
                  <li><a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">{t(language, "MCP Integration", "MCP 接口")}</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">{t(language, "Company", "公司")}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">{t(language, "About", "关于")}</a></li>
                  <li><a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">{t(language, "Blog", "博客")}</a></li>
                  <li><a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">{t(language, "Careers", "招聘")}</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">{t(language, "Legal", "法律")}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">{t(language, "Privacy", "隐私政策")}</a></li>
                  <li><a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">{t(language, "Terms", "服务条款")}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border/20 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-muted-foreground">&copy; 2026 VibeHub Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}