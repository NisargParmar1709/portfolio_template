import { useState, useEffect } from "react";
import { X, Minus, Square } from "lucide-react";

interface CommandResponse {
  command: string;
  response: React.ReactNode;
}

export function Terminal() {
  const [commands, setCommands] = useState<CommandResponse[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  const fakeUsername = "nisarg_1709";
  const fakeOS = "Linux 5.15.0";
  const fakePath = `~/portfolio`;
  const startTime = new Date();

  const handleCommand = (cmd: string) => {
    if (!cmd.trim()) return;
    const newCommand: CommandResponse = { command: cmd, response: "" };

  switch (cmd.toLowerCase()) {
    case "help":
      newCommand.response = (
        <div className="space-y-1">
          <p>Available commands:</p>
          <p className="text-blue-400">whoami</p>
          <p className="text-blue-400">about</p>
          <p className="text-blue-400">skills</p>
          <p className="text-blue-400">experience</p>
          <p className="text-blue-400">projects</p>
          <p className="text-blue-400">uptime</p>
          <p className="text-blue-400">contact</p>
          <p className="text-blue-400">socials</p>
          <p className="text-blue-400">ascii</p>
          <p className="text-blue-400">neofetch</p>
          <p className="text-blue-400">banner</p>
          <p className="text-blue-400">clear</p>
        </div>
      );
      break;
    case "whoami":
      newCommand.response = (
        <p className="text-green-400">
          {fakeUsername} — Full-Stack and Security Enthusiast.
        </p>
      );
      break;
    case "about":
      newCommand.response = (
        <p className="text-gray-300">
          Passionate developer building scalable, secure applications with a focus on user experience.
        </p>
      );
      break;
    case "skills":
      newCommand.response = (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-blue-400">Frontend:</p>
            <ul className="list-disc list-inside">
              <li>HTML5, CSS3, JavaScript</li>
              <li>Bootstrap, React, TailWind CSS</li>
            </ul>
          </div>
          <div>
            <p className="text-blue-400">Backend:</p>
            <ul className="list-disc list-inside">
              <li>Node.js, Express</li>
              <li>Python, FastAPI</li>
              <li>PostgreSQL, Redis</li>
            </ul>
          </div>
        </div>
      );
      break;
    case "experience":
      newCommand.response = (
        <div className="space-y-2">
          <p className="text-blue-400">Intern @ Binary Bits</p>
          <p className="text-gray-300">Building high-performance backend systems and APIs.</p>
        </div>
      );
      break;
    case "projects":
      newCommand.response = (
        <ul className="list-disc list-inside">
          <li>
            <span className="text-blue-400">PRINTsnap (UI)</span> — Campus-Focused Printing Solution
          </li>
          <li>
            <span className="text-blue-400">LinkNest</span> — Advanced URL Shortener
          </li>
          <li>
            <span className="text-blue-400">RateShield</span> — API Rate Limiting Library
          </li>
        </ul>
      );
      break;
    case "uptime":
      const uptime = ((new Date().getTime() - startTime.getTime()) / 1000).toFixed(0);
      newCommand.response = <p className="text-gray-300">System Uptime: {uptime} seconds</p>;
      break;
    case "contact":
      newCommand.response = (
        <div>
          <p>Email: <a href="mailto:nisargmparmar1709@gmail.com">nisargmparmar1709@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/NisargParmar1709/">https://github.com/NisargParmar1709/</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/nisarg-parmar-0a714b27a/">https://www.linkedin.com/in/nisarg-parmar-0a714b27a/</a></p>
        </div>
      );
      break;
    case "socials":
      newCommand.response = (
        <div>
          <p>📧 Email: <a href="mailto:nisargmparmar1709@gmail.com">nisargmparmar1709@gmail.com</a></p>
          <p>🐱 GitHub: <a href="https://github.com/NisargParmar1709/">https://github.com/NisargParmar1709/</a></p>
          <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/nisarg-parmar-0a714b27a/">https://www.linkedin.com/in/nisarg-parmar-0a714b27a/</a></p>
          {/* <p>🐦 Twitter: twitter.com/johndoe</p> */}
        </div>
      );
      break;
    case "ascii":
      newCommand.response = (
        <pre className="text-green-400">
          {`
           _____
          |  _  |  Welcome
          | |_| |  to my
          |_____|  terminal!
          `}
        </pre>
      );
      break;
    case "neofetch":
      newCommand.response = (
        <pre className="text-gray-300">
          {`
          OS: Portfolio Terminal UI
          Uptime: ${((new Date().getTime() - startTime.getTime()) / 1000).toFixed(0)}s
          Shell: React-Terminal
          Resolution: 1920x1080
          `}
        </pre>
      );
      break;
    case "banner":
      newCommand.response = (
        <pre className="text-yellow-400">
          {`
           ██████╗ ██╗███╗   ██╗████████╗███████╗
          ██╔═══██╗██║████╗  ██║╚══██╔══╝██╔════╝
          ██║   ██║██║██╔██╗ ██║   ██║   █████╗  
          ██║   ██║██║██║╚██╗██║   ██║   ██╔══╝  
          ╚██████╔╝██║██║ ╚████║   ██║   ███████╗
           ╚═════╝ ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝
          `}
        </pre>
      );
      break;
    case "clear":
      setCommands([]);
      return;
    default:
      newCommand.response = (
        <p className="text-red-400">Command not found. Type 'help' for available commands.</p>
      );
  }

    setCommands([...commands, newCommand]);
    setHistory([cmd, ...history]);
    setHistoryIndex(null);
    setInput("");
  };

  useEffect(() => {
    setCommands([
      {
        command: "",
        response: (
          <p className="text-green-400">
            Welcome to the interactive terminal!
            <br />
            Logged in as <span className="text-blue-400">{fakeUsername}</span> on{" "}
            <span className="text-blue-400">{fakeOS}</span>.
            <br />
            Type '<span className="text-blue-400">help</span>' to get started.
          </p>
        ),
      },
    ]);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#1c1c1c] rounded-lg overflow-hidden shadow-xl">
      <div className="bg-[#2c2c2c] p-2 flex items-center gap-2">
        <div className="flex gap-2">
          <button className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600">
            <X className="w-3 h-3 opacity-0 hover:opacity-100" />
          </button>
          <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600">
            <Minus className="w-3 h-3 opacity-0 hover:opacity-100" />
          </button>
          <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600">
            <Square className="w-3 h-3 opacity-0 hover:opacity-100" />
          </button>
        </div>
        <p className="text-sm text-center flex-1 text-gray-400">{fakePath}</p>
      </div>
      <div className="p-4 h-[400px] overflow-y-auto font-mono">
        {commands.map((cmd, i) => (
          <div key={i} className="mb-4">
            {cmd.command && (
              <p className="text-blue-400">
                <span className="text-green-400">{fakeUsername}@portfolio</span>:~$ {cmd.command}
              </p>
            )}
            <div className="mt-2 text-gray-300">{cmd.response}</div>
          </div>
        ))}
        <div className="flex items-center">
          <span className="text-green-400">{fakeUsername}@portfolio</span>:~$
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleCommand(input);
              if (e.key === "ArrowUp" && history.length > 0)
                setHistoryIndex((prev) => (prev === null ? 0 : Math.min(prev + 1, history.length - 1)));
              if (e.key === "ArrowDown" && historyIndex !== null)
              setHistoryIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : 0));
            }}
            className="ml-2 flex-1 bg-transparent outline-none text-gray-300"
          />
          <span className="animate-blink text-gray-400">|</span>
        </div>
      </div>
    </div>
  );
}