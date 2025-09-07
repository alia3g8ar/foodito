"use client";
import { useEffect, useRef, useState } from "react";
import classes from "./background-music.module.css";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
      audio.loop = true;

      // شروع خودکار پخش
      const playAudio = () => {
        audio.play().catch(console.error);
      };

      // تلاش برای پخش فوری
      playAudio();

      // اگر فوری نشد، منتظر اولین کلیک کاربر باش
      const handleFirstInteraction = () => {
        playAudio();
        document.removeEventListener("click", handleFirstInteraction);
        document.removeEventListener("keydown", handleFirstInteraction);
      };

      document.addEventListener("click", handleFirstInteraction);
      document.addEventListener("keydown", handleFirstInteraction);

      return () => {
        document.removeEventListener("click", handleFirstInteraction);
        document.removeEventListener("keydown", handleFirstInteraction);
      };
    }
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={classes.musicPlayer}>
      <audio
        ref={audioRef}
        src="https://www.bensound.com/bensound-music/bensound-ukulele.mp3"
        // src="https://www.bensound.com/bensound-music/bensound-relaxing.mp3"
        preload="auto"
      />

      <button
        className={classes.muteButton}
        onClick={toggleMute}
        title={isMuted ? "روشن کردن موزیک" : "قطع موزیک"}
      >
        {isMuted ? "🔇" : "🎵"}
      </button>
    </div>
  );
}
