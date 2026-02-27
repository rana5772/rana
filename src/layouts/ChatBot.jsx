import { BotMessageSquare } from "lucide-react";
import React from "react";

const ChatBot = () => {
  return (
    <button className="fixed flex justify-center items-center text-primary bg-white bottom-5 right-5 aspect-square w-20 border border-black/50 z-[100000000] rounded-md">
      <BotMessageSquare size={48} />
    </button>
  );
};

export default ChatBot;
