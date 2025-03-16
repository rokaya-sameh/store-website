import { useState } from "react";

export default function ChangeContent() {
  const [text, setText] = useState("Click the button to change this text.");
  const toggleText = () => {
    setText((prevText) =>
      prevText === "Click the button to change this text."
        ? "Content changed!"
        : "Click the button to change this text."
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <p className="text-lg font-semibold mb-4">{text}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        onClick={toggleText}
      >
        Click Me
      </button>
    </div>
  );
}
