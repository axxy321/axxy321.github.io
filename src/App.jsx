const features = [
  {
    title: "Contact Map",
    copy: "Group public contact routes by sales, support, careers, operations, and general outreach."
  },
  {
    title: "Scan While Browsing",
    copy: "Run LeadHunter directly on the website you're already researching without switching tabs or dashboards."
  },
  {
    title: "Ready-to-Export Leads",
    copy: "Save contacts, package the best routes, and export clean CSVs named after each company."
  }
];

const stats = [
  { value: "1 click", label: "to scan any public site" },
  { value: "5x faster", label: "than manual contact hunting" },
  { value: "0 dashboards", label: "needed for discovery" }
];

const workflow = [
  {
    step: "01",
    title: "Open any website",
    copy: "LeadHunter lives in the browser, so your research starts exactly where your prospect already is."
  },
  {
    step: "02",
    title: "Scan and organize",
    copy: "The widget clusters available contact paths into a clean, outreach-friendly view."
  },
  {
    step: "03",
    title: "Export and act",
    copy: "Turn that scan into a named export, lead history entry, or saved workspace for follow-up."
  }
];

function App() {
  return (
    <div className="page-shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />

      <header className="topbar reveal reveal-1">
        <div className="brand">
          <span className="brand-mark">LH</span>
          <span className="brand-text">LeadHunter</span>
        </div>

        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#workflow">Workflow</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <a className="nav-cta" href="#pricing">
          Get Early Access
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy reveal reveal-2">
            <span className="eyebrow">Website Contact Intelligence</span>
            <h1>Turn any company website into a live contact map.</h1>
            <p>
              LeadHunter helps founders, recruiters, agencies, and sales teams discover public
              business emails, contact routes, and outreach-ready lead exports without leaving the
              page.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#pricing">
                Start Free
              </a>
              <a className="secondary-btn" href="#demo">
                Watch Product Flow
              </a>
            </div>
            <div className="stat-row">
              {stats.map((stat, index) => (
                <div key={stat.label} className={`stat-card reveal reveal-${index + 3}`}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual reveal reveal-4 tilt-card">
            <div className="window-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="window-content">
              <div className="window-header">
                <div>
                  <p className="window-label">Scanned company</p>
                  <h3>Hume Freight</h3>
                </div>
                <div className="window-score">
                  <span>Reachability</span>
                  <strong>8.7</strong>
                </div>
              </div>

              <div className="window-grid">
                <div className="panel panel-accent">
                  <span>Best route</span>
                  <strong>sales@humefreight.com.au</strong>
                  <p>Recommended for quotes and commercial outreach</p>
                </div>

                <div className="panel">
                  <span>Contact Map</span>
                  <ul>
                    <li>Sales</li>
                    <li>General</li>
                    <li>Support</li>
                    <li>Operations</li>
                  </ul>
                </div>

                <div className="panel">
                  <span>Channels</span>
                  <ul>
                    <li>2 public emails</li>
                    <li>1 contact form</li>
                    <li>1 phone number</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="logo-strip reveal reveal-2">
          <span>Built for outreach-heavy teams</span>
          <div>
            <p>Agencies</p>
            <p>Recruiters</p>
            <p>Founders</p>
            <p>Sales Teams</p>
            <p>Operators</p>
          </div>
        </section>

        <section className="feature-section" id="features">
          <div className="section-heading reveal reveal-1">
            <span className="eyebrow">Why it feels different</span>
            <h2>Designed like a browser superpower, not another lead dashboard.</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <article key={feature.title} className={`feature-card reveal reveal-${index + 2}`}>
                <span className="feature-index">0{index + 1}</span>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="workflow-section" id="workflow">
          <div className="section-heading reveal reveal-1">
            <span className="eyebrow">Workflow</span>
            <h2>From curiosity to clean lead export in under a minute.</h2>
          </div>

          <div className="workflow-grid">
            {workflow.map((item, index) => (
              <article key={item.step} className={`workflow-card reveal reveal-${index + 2}`}>
                <span className="workflow-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="demo-section" id="demo">
          <div className="demo-card reveal reveal-2">
            <div className="demo-copy">
              <span className="eyebrow">Product moment</span>
              <h2>See who to contact before your competitor even finds the contact page.</h2>
              <p>
                LeadHunter scans public website structures, surfaces business contact paths, and
                packages them into a workflow that feels instant.
              </p>
            </div>

            <div className="demo-pulse">
              <div className="demo-core">Scan</div>
            </div>
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="section-heading reveal reveal-1">
            <span className="eyebrow">Pricing</span>
            <h2>Start free. Upgrade when your workflow starts compounding.</h2>
          </div>

          <div className="pricing-grid">
            <article className="pricing-card reveal reveal-2">
              <p className="plan-name">Free</p>
              <h3>Browser-first prospecting</h3>
              <strong>$0</strong>
              <ul>
                <li>Daily website scans</li>
                <li>Current-site lead discovery</li>
                <li>JSON export</li>
              </ul>
              <a href="mailto:hello@leadhunter.local?subject=LeadHunter%20Free%20Access">
                Join Free Access
              </a>
            </article>

            <article className="pricing-card pricing-card-featured reveal reveal-3">
              <p className="plan-name">Pro</p>
              <h3>For teams turning scans into pipeline</h3>
              <strong>
                $19<span>/month</span>
              </strong>
              <ul>
                <li>Unlimited scans</li>
                <li>CSV export and workspaces</li>
                <li>Compare mode and bulk scans</li>
              </ul>
              <a href="mailto:hello@leadhunter.local?subject=LeadHunter%20Pro%20Waitlist">
                Request Pro Invite
              </a>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
