import React from "react";
import "./Description.css";
import { useNavigate } from 'react-router-dom';

const Description = () => {

  const navigate = useNavigate();


  return (
    <div className="descriptions">
      <div className="app-desc">
        <h3>App Description</h3>
        <p>
          Rediscover your emotional well-being with Mojo, your AI-powered mood
          companion. Log your emotions, track patterns, and gain insights that
          help you thrive — one day at a time.
        </p>
      </div>
      <div className="key-feature">
        <h3>Key Features of MoJo</h3>
      </div>
      <div className="features">
        <div className="feature1">
            <h4>Daily Mood Tracking</h4>
            <p> Quickly log your mood with emojis, tags, and journal entries.</p>
        </div>
        <div className="feature2">
            <h4>AI-Powered Insights</h4>
            <p> Discover patterns in your emotions and activities.</p>
        </div>
        <div className="feature3">
            <h4>Visual Trends</h4>
            <p> View your mood journey with easy-to-read charts and graphs.</p>
        </div>
        <div className="feature4">
            <h4>Personalized Suggestions</h4>
            <p> Get actionable tips for better mental well-being.</p>
        </div>
        <div className="feature5">
            <h4>Secure and Private</h4>
            <p> Your data is encrypted and completely under your control.</p>
        </div>
        <div className="feature6">
            <h4>AI-Powered Insights</h4>
            <p> Discover patterns in your emotions and activities.</p>
        </div>
      </div>
      <button onClick={()=>navigate('/home')}>Explore More</button>
    </div>
  );
};

export default Description;
