import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/sonner";
import LoginPage from "./pages/login";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <LoginPage />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
