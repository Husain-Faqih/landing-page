function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-subtitle">Welcome To My Website</p>

        <h1>
          Build Your <span>Digital Future.</span>
        </h1>

        <p className="hero-description">
          Create modern, creative, and meaningful digital experiences with
          technology and design.
        </p>

        <div className="hero-buttons">
          <a href="#features" className="btn primary">
            Get Started
          </a>

          <a href="#about" className="btn secondary">
            Learn More
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/hero.png" alt="Digitalillustration" />
      </div>
    </section>
  );
}

export default Hero;
