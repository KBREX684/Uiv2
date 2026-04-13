// Mock server to intercept /api/v1/* calls and return mock data.
// This allows the frontend to use real fetch() calls to a backend that doesn't exist locally.

const MOCK_PROJECTS = Array.from({ length: 12 }).map((_, i) => ({
  id: `proj-${i}`,
  title: `Project Zero ${i}`,
  desc: "An advanced modular agent framework for enterprise AI operations. Supports plugins and MCP integrations out of the box.",
  tags: ["AI", "Typescript", "MCP"],
  author: `Author ${i}`,
  stars: Math.floor(Math.random() * 5000),
  forks: Math.floor(Math.random() * 500),
  status: ["Active", "Beta", "Archived"][Math.floor(Math.random() * 3)],
  img: `https://images.unsplash.com/photo-1775994121020-86426451f8bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&random=${i}`
}));

const MOCK_DISCUSSIONS = Array.from({ length: 8 }).map((_, i) => ({
  id: `post-${i}`,
  title: `How to scale PostgreSQL for multi-tenant AI applications? (Part ${i})`,
  excerpt: "We are currently building an AI native agent platform, and struggling with vector search performance when data...",
  replies: 12 + i,
  tags: ["Database", "Architecture"],
  time: `${i + 1} hours ago`,
  author: `DB_Expert_${i}`
}));

const MOCK_TEAMS = Array.from({ length: 6 }).map((_, i) => ({
  id: `team-${i}`,
  name: `Nexus Core Team ${i}`,
  hiring: ["Rust Devs", "UI Designers"],
  status: "Hiring",
  members: 4 + i
}));

export function setupMockServer() {
  const originalFetch = window.fetch;

  window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === "string" ? input : input.toString();

    // Only intercept /api/v1/
    if (url.startsWith("/api/v1/")) {
      console.log(`[Mock Server] Intercepted ${init?.method || 'GET'} request to ${url}`);
      
      return new Promise((resolve) => {
        setTimeout(() => {
          let responseData = null;
          let status = 200;

          if (url.includes("/api/v1/projects/featured")) {
            responseData = MOCK_PROJECTS.slice(0, 3);
          } else if (url.includes("/api/v1/projects")) {
            // Check if it's a specific project
            const match = url.match(/\/api\/v1\/projects\/(proj-\d+)/);
            if (match) {
              responseData = MOCK_PROJECTS.find(p => p.id === match[1]) || MOCK_PROJECTS[0];
            } else {
              responseData = MOCK_PROJECTS;
            }
          } else if (url.includes("/api/v1/discussions")) {
            responseData = MOCK_DISCUSSIONS;
          } else if (url.includes("/api/v1/teams")) {
            responseData = MOCK_TEAMS;
          } else if (url.includes("/api/v1/stats")) {
            responseData = [
              { label: { en: "Active Builders", zh: "活跃开发者" }, value: "140K+" },
              { label: { en: "Projects Launched", zh: "发布项目" }, value: "12K+" },
              { label: { en: "Open Collaborations", zh: "开放协作" }, value: "8,400" },
              { label: { en: "MCP Integrations", zh: "MCP 接口接入" }, value: "3,200" },
            ];
          } else if (url.includes("/api/v1/auth/me")) {
            responseData = {
              id: "user-1",
              name: "Current User",
              email: "user@example.com",
              avatar: ""
            };
          } else {
            status = 404;
            responseData = { error: "Not found" };
          }

          resolve(
            new Response(JSON.stringify(responseData), {
              status,
              headers: { "Content-Type": "application/json" }
            })
          );
        }, 500); // Simulate network delay
      });
    }

    // Pass through to original fetch
    return originalFetch(input, init);
  };
}