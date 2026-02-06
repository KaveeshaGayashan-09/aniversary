// src/App.js
import React, { useEffect, useRef, useState } from 'react';
import './App.css';

import SurpriseButton from './SurpriseButton';

import memories from './memories';
import hmg1 from './assets/hero/h1.jpg'
import hmg2 from './assets/hero/h2.JPG'
import hmg3 from './assets/hero/h3.JPG'



  // --- Define Hero Section Images here (or import them) ---
  const heroSnapshots = [
  { id: 'h1', src: hmg1, caption: 'The smile that melts me' },
  { id: 'h2', src: hmg2, caption: 'My safe place' },
  { id: 'h3', src: hmg3, caption: 'My dream come true'},
];

const MemoryCard = ({ data, index }) => {



  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    const currentElement = domRef.current;
    observer.observe(currentElement);
    return () => observer.unobserve(currentElement);
  }, []);

  return (
    <div 
      className={`memory-card ${isVisible ? 'is-visible' : ''} ${index % 2 === 0 ? 'left' : 'right'}`} 
      ref={domRef}
    >
      <div className="memory-img-container">
        <img src={data.image} alt={data.title} className="memory-img" />
      </div>
      <div className="memory-text">
        <span className="date-badge">{data.date}</span>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="heart" style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 2}s`
          }}>❤️</div>
        ))}
      </div>
      <div className="floating-pandas">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="panda-emoji" style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 5 + 5}s`, // Slower for pandas
            animationDelay: `${Math.random() * 5}s`
          }}>🐼</div>
        ))}
      </div>

      <header className="hero-section">
       <SurpriseButton/>
        <div className="hero-text-content">
            <h1 className="main-title">Happy 2nd Anniversary</h1>
            <h1 className="main-title">My Love</h1>
            <p className="subtitle">Two years of love, laughter, and debugging life together.</p>
        </div>

        
        <div className="hero-snapshots-container">
            {heroSnapshots.map((snap, index) => (
                <div key={snap.id} className="snapshot-card" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="snapshot-img-wrapper">
                        <img src={snap.src} alt={snap.caption} />
                    </div>
                    <span className="snapshot-caption">{snap.caption}</span>
                </div>
            ))}
        </div>
       

        <div className="scroll-indicator">↓</div>
      </header>

      <div className="timeline-container">
        {memories.map((memory, index) => (
          <MemoryCard key={memory.id} data={memory} index={index} />
        ))}
      </div>

      <footer className="footer">
        <p>Made with ❤️ for you</p>
      </footer>
    </div>
  );
}

export default App;