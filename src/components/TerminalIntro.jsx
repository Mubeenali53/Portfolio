import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINES = [
  { prompt: "$ whoami", output: "Syed Mubeen Ali" },
  // { prompt: "$ cat role.txt", output: "DevOps Engineer :: Cloud & Automation" },
  { prompt: "$ systemctl status portfolio", output: "active (running)" },
];

const TYPE_SPEED = 28; // ms per character

export default function TerminalIntro({ onDone }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState("prompt"); // "prompt" | "output" | "done"
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (phase === "done") {
      onDone?.();
      return;
    }

    const current = LINES[lineIndex];
    const target = phase === "prompt" ? current.prompt : current.output;

    if (charIndex < target.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), TYPE_SPEED);
      return () => clearTimeout(t);
    }

    // finished typing this segment
    const t = setTimeout(() => {
      if (phase === "prompt") {
        setPhase("output");
        setCharIndex(0);
      } else {
        setHistory((h) => [...h, current]);
        if (lineIndex + 1 < LINES.length) {
          setLineIndex((l) => l + 1);
          setCharIndex(0);
          setPhase("prompt");
        } else {
          setPhase("done");
        }
      }
    }, phase === "prompt" ? 200 : 400);

    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, phase, lineIndex]);

  const current = LINES[lineIndex];
  const isPromptPhase = phase === "prompt";
  const visibleText = phase === "done" ? "" : (isPromptPhase ? current.prompt : current.output).slice(0, charIndex);

  return (
    <div className="font-mono text-sm md:text-base bg-panel border border-panel-line px-5 py-4 max-w-md">
      {history.map((h, i) => (
        <div key={i} className="mb-1">
          <span className="text-signal">{h.prompt}</span>
          <br />
          <span className="text-muted">{h.output}</span>
        </div>
      ))}
      {phase !== "done" && (
        <div>
          <span className={isPromptPhase ? "text-signal" : "text-signal opacity-0"}>
            {isPromptPhase ? visibleText : current.prompt}
          </span>
          {isPromptPhase && <Cursor />}
          {!isPromptPhase && (
            <>
              <br />
              <span className="text-muted">{visibleText}</span>
              <Cursor />
            </>
          )}
        </div>
      )}
    </div>
  );
}

function Cursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
      className="inline-block w-2 h-4 bg-signal align-middle ml-0.5"
    />
  );
}
