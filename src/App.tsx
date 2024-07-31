import "./App.css";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Button variant="destructive">Click me</Button>
      <Header />
    </div>
  );
}

export default App;
