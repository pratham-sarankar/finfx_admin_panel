import { ThemeProvider } from "./components/theme-provider";
import LoginPage from "./pages/login";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
