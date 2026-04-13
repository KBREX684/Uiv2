import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return (
    <div className="dark bg-background text-foreground min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}