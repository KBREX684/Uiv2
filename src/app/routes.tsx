import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layout";
import { Home } from "./pages/Home";
import { Discover } from "./pages/Discover";
import { Discussions } from "./pages/Discussions";
import { Teams } from "./pages/Teams";
import { Leaderboards } from "./pages/Leaderboards";
import { ProjectDetail } from "./pages/ProjectDetail";
import { EnterpriseWorkspace } from "./pages/EnterpriseWorkspace";
import { AdminDashboard } from "./pages/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "discover", Component: Discover },
      { path: "discussions", Component: Discussions },
      { path: "teams", Component: Teams },
      { path: "leaderboards", Component: Leaderboards },
      { path: "projects/:slug", Component: ProjectDetail },
      { path: "workspace/enterprise", Component: EnterpriseWorkspace },
      { path: "admin", Component: AdminDashboard },
      { path: "*", Component: () => <div className="p-8 text-center text-muted-foreground text-xl">404 - Page Not Found</div> },
    ],
  },
]);