import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0)

  function handClick() {
    setCount(count + 1)
  }

  return (
    <>
      <button onClick={handClick()}>Você clicou {count} vezes</button>
    </>
  )
}