import React, { useState } from 'react';
import './SurpriseButton.css';

const SurpriseButton = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  // Replace this with the path to your audio file (e.g., "/music/our-song.mp3")
  const audioUrl = "https://www.soundjay.com/misc/sounds/magic-chime-01.mp3";

  const handleSurprise = () => {
    // 1. Play Audio
    const audio = new Audio(audioUrl);
    audio.volume = 0.5; // Set volume (0.0 to 1.0)
    audio.play().catch(error => console.log("Audio play failed:", error));

    // 2. Trigger Animation
    setIsRevealed(true);
  };

  return (
    <div className="surprise-wrapper">
      {!isRevealed ? (
        <button className="magic-button" onClick={handleSurprise}>
          🎁  Lets Celebrate
        </button>
      ) : (
        <div className="hidden-content reveal-animation">
          <div className="card-header">
            <h3>💌 A Special Message</h3>
            <button className="close-btn" onClick={() => setIsRevealed(false)}>×</button>
          </div>
          <p>
            "I love you not only for who you are, but for who I am when I am with you."
            <br />
            <br />
            <strong>- Forever Yours</strong>
          </p>
          <div className="decor-emoji">💖</div>
        </div>
      )}
    </div>
  );
};

export default SurpriseButton;