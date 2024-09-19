import { useState } from "react";
export default function useInput() {
  const [input, setInput] = useState("");
  const HandlerInput = (e:any) => {
    setInput(e.target.value);
  };

  return [input, HandlerInput];
}
