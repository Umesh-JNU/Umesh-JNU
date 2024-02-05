import { useEffect, useState } from "react";

const Phase = {
  TYPING: 'typing',
  PAUSING: 'pausing',
  DELETING: 'deleting'
};

export const useTypeText = (textArray, typingInterval = 150, pauseTime = 1000, deleteInterval = 50) => {

  const [text, setText] = useState(textArray[0]);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState(Phase.PAUSING);

  useEffect(() => {
    switch (phase) {
      case Phase.TYPING: {
        const nextText = textArray[index].slice(0, text.length + 1);

        if (nextText === text) {
          setPhase(Phase.PAUSING);
          return;
        }
        const timeout = setTimeout(() => { setText(nextText); }, typingInterval);

        return () => clearTimeout(timeout);
      }

      case Phase.DELETING: {
        if (!text) {
          const nextIdx = index + 1;
          setIndex(textArray[nextIdx] ? nextIdx : 0);
          setPhase(Phase.TYPING);
          return;
        }

        const nextRemText = textArray[index].slice(0, text.length - 1);
        const timeout = setTimeout(() => { setText(nextRemText); }, deleteInterval);

        return () => clearTimeout(timeout);
      }

      case Phase.PAUSING:
      default:
        const timeout = setTimeout(() => setPhase(Phase.DELETING), pauseTime);
        return () => clearTimeout(timeout);
    }
  }, [textArray, text, index, phase]);

  return { text, currentText: textArray[index], phase };
};