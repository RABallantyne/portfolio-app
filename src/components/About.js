import React from 'react';

export default function About() {
  return (
    <div className='subcontainer'>
      <h1 className='large text-primary'>About Me</h1>
      <div className='about'>
        <p className='lead'>
          I am a full stack web developer based in Denver, CO. I am currently
          seeking my next opportunity, ideally in a front end web development
          role. Outside of coding, my passions include music, film, wine, the
          great outdoors, and hanging out with me wife and our two dogs.
        </p>

        <div className='about-section'>
          <div className='image-left'>
            <img
              className='image-fit'
              src='https://i.imgur.com/MNjQBXE.jpg?1'
              alt='bass shredding'
            ></img>
            <p>Rippin the bass and the theramin. </p>
          </div>
          <div className='about-right'>
            I was born in Texas, but have spent most of my life in Colorado. I
            attended the University of Colorado at Boulder, earning a Bachelors
            Degree in Business Management with an emphasis in Entrepreneurial
            Studies. Throughout college I found as much time as I could to
            climb, snowboard, cycle, and play music outside of managing a local
            pizza shop. After school I moved down to Denver and spent my
            twenties playing bass in the bands Tjutjuna and Pacific Pride. I was
            lucky enough to tour the country multiple times, even playing a few
            shows in Canada. Eventually I decided the touring life was not for
            me and chose to pursue a career in the food and beverage industry.
          </div>
        </div>
        <div className='about-section'>
          <div className='about-left'>
            I began bartending as a way to pay the bills while off from tour but
            once touring slowed down I gravitated towards management. I took a
            lot of pleasure in understanding and refining chaotic systems, and
            transisitioned into upper management very quickly. It was during
            this time that I developed a passion for systems and process. I
            created a variety of systematic reports and spreadsheets to this end
            and became interested in coding to find ways to make my systems more
            user friendly.
          </div>
          <div className='image-right'>
            <img
              className='image-fit'
              src='https://i.imgur.com/w7gCrZy.jpg?1'
              alt='bartendin'
            ></img>
            <p>Bartending at Ash'Kara.</p>
          </div>
        </div>
        <div className='about-section'>
          <div className='image-left'>
            <img
              className='image-fit'
              src='https://i.imgur.com/Jmb34ri.jpg?1'
              alt='me and Laina'
            ></img>
            <p>Me and my awesome wife, Laina.</p>
          </div>
          <div className='about-right'>
            After spending some time learning the basics, I decided to attend
            the Flatiron School Denver in the summer and fall of 2019. It was an
            intense program, but it was worth every stressful moment. It opened
            my eyes to the awesome world of prorgramming, and I will never look
            back. I have developed a passion for solving problems and love the
            satisfaction that comes with discovering solutions. I have spent my
            time since graduation refining my skills, working on various
            projects, and enjoying life with my family in Denver.
          </div>
        </div>
        <div className='about-section'>
          <div className='image-center'>
            <img
              className='image-fit'
              src='https://i.imgur.com/SJLCpiX.jpg?1'
              alt='Our two pups, Lola and Uma.'
            ></img>
            <p>Our two pups, Lola and Uma.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
