import { useState } from "react";

export default function PlacarFutebol() {
  const [golsCasa, setGolsCasa] = useState(0);
  const [golsVisitante, setGolsVisitante] = useState(0);

  function adicionarGolCasa() {
    setGolsCasa((gols) => gols + 1);
  }

  function adicionarGolVisitante() {
    setGolsVisitante((gols) => gols + 1);
  }

  function anularGols(time) {
    if (time === "casa" && golsCasa > 0) {
      setGolsCasa((gols) => gols - 1);
    } else if (time === "visitante" && golsVisitante > 0) {
      setGolsVisitante((gols) => gols - 1);
    }
  }

  return (
    <>
      <h1>Placar de Futebol</h1>

      <div>
        Casa {golsCasa} x {golsVisitante} Visitantes
      </div>

      <button onClick={adicionarGolCasa}>Gol do time da casa!</button>

      <button onClick={() => anularGols("casa")}>Anular gols do time da casa</button>

      <button onClick={adicionarGolVisitante}>
        Gol do time Visitante!
      </button>

      <button onClick={() => anularGols("visitante")}>
        Anular gols do time visitante
      </button>
    </>
  );
}
