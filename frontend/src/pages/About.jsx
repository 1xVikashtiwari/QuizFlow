import React from 'react';
import "./About.css";
import { Link } from "react-router-dom";
import { MdQuiz, MdGroup, MdInsights, MdAutoAwesome, MdArrowRight } from "react-icons/md";


const features = [
  {
    icon: MdQuiz,
    title: "Interactive Quizes",
    description:
      "Engaging Quizzes across multiple categories.",
  },
  {
    icon: MdGroup,
    title: "Knowledge Base",
    description:
      "Education and knowledge-based questions.",
  },
  {
    icon: MdInsights,
    title: "Instant Results",
    description:
      "Get immediate results and feedback.",
  },
  {
    icon: MdAutoAwesome,
    title: "Track Progress",
    description:
      "Analyze your performance and improve.",
  },
  {
  icon: MdAutoAwesome,
    title: "Challenge YourSelf",
    description:
      "Compete with yourself and climb the leaderboard.",
  },
  {
    icon: MdAutoAwesome,
    title: "User Friendly",
    description:
      "Simple, clean and responsive experience.",
  },
];


function About() {
  return (
    <section className="about-container">
        <div className="about-header">
            <div className="header-left">
            <button className='header-left-btn1'>About Us</button>
            <h1>About QuizFlow</h1>
            <div className='header-left-botom'>Learn. Challenge. Improve.</div>
            <p>Welcome to QuizeFlow, an interactive quiz platform designed to make learning more engasing, enjoyable, and effective</p>
            <button className='header-left-btn2'>Start Quizzing</button>
            </div>
            <div className="header-right">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkuu6XNRRLvQrDDXGqqxhUqJijdp9LbnfRbcLqvc8V_Q&s=10" alt="about page png" />
            </div>
        </div>
        <div className="mission-container">
            <div className="mission-left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdx-n6SFEuPJwvSjlqeiCskCpv3vaBTIbOuER7Pw7e7g&s=10" alt="aim image png" />
            </div>
            <div className="mission-right">
                <h2>Our Mission</h2>
                <h4>
                    <span>Our mission is simple -</span>  Make learning fun and accessible for everyone.
                </h4>
                <p>
                    Whether you're not student preparing for exam ,A knowledge enthusiast, or someone who simply enjoy challenging yourself, QuizFlow provides and easy and engaging way to learn through quizzes.
                </p>
            </div>
        </div>
        <div className="offer-header">
            <h2>What We Offer</h2>

        </div>
        <div className="home-cards-grid">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div className="home-card" key={feature.title}>
                <div className="home-card-icon">
                  <Icon />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      <div className="logic-container">
        <div className="logic-left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRHQWZSHWu5WmknbQgv2u6LtY5qnz1K1byPShuoGlihg&s=10" alt="logic-Img-png" />
        </div>
        <div className="logic-right">
          <h2>Why QuizFlow?</h2>
          <p>We believe learning doesn't have to be boring. By combining knowledge with interactive quizzes, QuizFlow helps users stay engaged, identify areas for improvement, and build confidence in what they know. </p>
        </div>
    </div>
    <div className="vision-container">
      <div className="vision-left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcgTJdWTt4J4PrEFu6VSMru8ItFY79irLQMKnQiOvAwA&s=10" alt="vision-Img-png" />
      </div>
      <div className="vision-right">
        <h2>Our Vision</h2>
        <p>Our vision is to create a plateform where learning, curiocity, and competition come together - helping people learn something new every day.</p>
      </div>
    </div>
    <footer>
      <div className="footer-left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWk8PaPk_jFaN4_hDptO5YiI6-sF0E2tuTzUnBar1ow&s=10" alt="star-image" />
      </div>
      <div className="footer-mid">
        <h3>Start Your Quiz Journey</h3>
        <p>Challenge yourself. Test your knowledge. Keep learning with QuizFlow</p>
      </div>
      <div className="footer-right">
        <button>Explore Quizzes </button>
      </div>
    </footer>
    </section>
    
  )
}

export default About;