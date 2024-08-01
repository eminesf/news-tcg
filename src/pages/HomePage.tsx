import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/construcao");
  }, [navigate]);

  return (
    <div>
      <h1>HOME PAGE</h1>
      <Button onClick={() => navigate("/post")}>Botão home</Button>
    </div>
  );
}
