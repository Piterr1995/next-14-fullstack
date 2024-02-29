// Ponizsza wersja nie zadziala, jesli bedzie wyswietlona
// w Server Side Componencie
// nalezy uzyc 'use strict' na gorze
// lub w komponencie, w ktorym Example jest uzyty

import { useReducer } from "react";

export function Example() {
  const [counter, increment] = useReducer((state) => state + 1, 0);
  return (
    <div>
      Hello world, count: {counter},{" "}
      <button onClick={increment}>increment</button>
    </div>
  );
}
