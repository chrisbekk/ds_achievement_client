import { useState } from 'react';

export default function AchievementCard() {
  const [isDone, setIsDone] = useState<boolean>(false);

  const handleClick = () => {
    setIsDone(prev => !prev);
  };
  return (
    <div className="h-32 border flex justify-between items-center p-4">
      <div className="flex items-center gap-4 ">
        <img src="https://steamuserimages-a.akamaihd.net/ugc/1839154312796622367/B3E4CA8626661BF2A67B7C207DAE62088927BBA7/" />
        <div>
          <h1 className="font-semibold">Achievement Name</h1>
          <p className="font-light text-sm">Light Bonfire flame.</p>
        </div>
      </div>
      <button
        onClick={handleClick}
        className={`${isDone ? 'bg-green-600' : 'bg-blue-600'} h-12 px-4 rounded-md`}
      >
        Done
      </button>
    </div>
  );
}
