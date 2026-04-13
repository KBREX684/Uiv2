import { RouterProvider } from 'react-router';
import { router } from './routes';
import { setupMockServer } from './lib/mock-server';

// Initialize mock API server to handle /api/v1/* requests
setupMockServer();

export default function App() {
  return (
    <div className="dark bg-background text-foreground min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}