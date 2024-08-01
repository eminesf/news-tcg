import { useRoutes } from "react-router-dom";

import routes from "@/routes/public.routes";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function App() {
  const routing = useRoutes(routes);
  return (
    <div className="h-screen">
      <Header />
      {routing}
      <Footer />
    </div>
  );
}

export default App;
