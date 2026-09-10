import { Palette, Smartphone, MousePointer } from "lucide-react";

function Features() {
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
        <div className="feature-card">
          <div className="feature-icon">
            <Palette />
          </div>

          <span className="feature-number">01</span>
          <h3>Modern Design</h3>
          <p>
            Clean and modern interface designed to create a great user
            experience.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <Smartphone />
          </div>

          <span className="feature-number">02</span>
          <h3>Responsive</h3>
          <p>
            A flexible layout that looks great on desktop, tablet, and mobile
            devices.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <MousePointer />
          </div>

          <span className="feature-number">03</span>
          <h3>Easy to Use</h3>
          <p>
            Simple and intuitive design that makes every interaction feel
            natural.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;