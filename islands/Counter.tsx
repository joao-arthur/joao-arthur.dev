import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

type propsType = {
  readonly start: number;
};

export default function Counter(props: propsType) {
  const [count, setCount] = useState(props.start);

  return (
    <div class="flex gap-2 w-full">
      <p class="flex-grow-1 font-bold text-xl">{count}</p>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  );
}
