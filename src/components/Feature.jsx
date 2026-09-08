function Features() {
  const features = [
    {
      number: "01",
      title: "Modern Design",
      description:
        "Clean and modern interface designed to create a great user experience.",
    },
    {
      number: "02",
      title: "Responsive",
      description:
        "A flexible layout that looks great on desktop, tablet, and mobile devices.",
    },
    {
      number: "03",
      title: "Easy to Use",
      description:
        "Simple and intuitive design that makes every interaction feel natural.",
    },
  ];

  return (
    <section className="features" id="features">
      <div className="section-heading">
        <p className="section-subtitle">FEATURES</p>

        <h2>
          Everything You <span>Need.</span>
        </h2>

        <p>Built with simplicity, creativity, and modern technology.</p>
      </div>

      <div className="feature-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.number}>
            <span className="feature-number">{feature.number}</span>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
