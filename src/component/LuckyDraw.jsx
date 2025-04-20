import React, { useState, useEffect } from 'react';
import './LuckyDraw.css';

const LuckyDraw = () => {
  const [message, setMessage] = useState('');

  const showMessage = (text) => {
    setMessage(text);
  };

  // 하트 떠다니는 이펙트
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = 4 + Math.random() * 4 + 's';
      document.body.appendChild(heart);
      setTimeout(() => {
        heart.remove();
      }, 8000);
    };

    const interval = setInterval(createHeart, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="envelopes">
        <div className="envelope" onClick={() => showMessage('당첨입니다! 🎉')}></div>
        <div className="envelope" onClick={() => showMessage('꽝입니다 😢')}></div>
      </div>
      <div className="message">{message}</div>
    </div>
  );
};

export default LuckyDraw;
