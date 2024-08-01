import img from "@/assets/pikachu-running.gif";

export function Construcao() {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <img src={img} alt="pikachu running" />
      <h1 className="text-4xl">Em construção</h1>
    </div>
  );
}
