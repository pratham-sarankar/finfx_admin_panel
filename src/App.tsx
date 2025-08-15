import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/sonner";
import DashboardPage from "./pages/dashboard";
// import LoginPage from "./pages/login";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <DashboardPage />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
