function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-subtitle">Welcome To My Website</p>

        <h1>
          build Your <span>Digital Future.</span>
        </h1>

        <p className="hero-description">
          Create modern, creative, and meaningful digital experiences with
          technoligy an desingn.
        </p>

        <div className="hero-buttons">
          <a href="#feature" className="btn primary">
            Get Started
          </a>

          <a href="#about" className="btn secondary">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
