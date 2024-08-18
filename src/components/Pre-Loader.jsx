import { useEffect, useState } from "react";

export function PreLoader() {
  const [loading, setLoading] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Cooking up some digital wizardry...",
    "Summoning the data gnomes...",
    "Pretending to load...",
    "Calculating time left to procrastinate...",
    "Almost there, just kidding...",
    "The magic potion is almost ready!",
    "Hang tight, we're polishing the code...",
    "Loading... because why not?",
    "Making sure everything's perfect... or not.",
    "Your request is in the queue... at the front!",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Set your desired loading time here

    const messageTimer = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearInterval(messageTimer);
    };
  });

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 text-white">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-teal-500 mb-8"></div>
      <p className="text-lg animate-pulse">{messages[messageIndex]}</p>
    </div>
  );
}
