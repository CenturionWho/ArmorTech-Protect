export default function Home() {
  const navLinks = [
    { label: 'Repair', href: 'https://armortechrepair.com' },
    { label: 'Solutions', href: 'https://armortech-solutions.com' },
    { label: 'Labs', href: 'https://armortechlabs.com' },
    { label: 'Protect', href: 'https://armortechprotect.com' },
    { label: 'Shop', href: 'https://armortechrepair.shop' },
    { label: 'My Account', href: 'https://armortechrepair.com/login' },
  ];

  const plans = [
    {
      name: 'Protect Remote',
      price: '$24.99/mo',
      tag: 'Remote',
      text: 'Remote troubleshooting, device records, parts guidance, and repair-or-replace recommendations for customers nationwide.',
      features: ['Up to 10 registered devices', '2 remote diagnostic cases per month', 'Digital Device Vault', 'Parts sourcing guidance', '10% off eligible ArmorTech parts'],
    },
    {
      name: 'Protect Home',
      price: '$49.99/mo',
      tag: 'Most Popular',
      text: 'Managed repair support for homes with appliances, televisions, computers, networking, cameras, and other technology.',
      features: ['Up to 20 registered devices', '4 remote diagnostic cases per month', 'Managed dispatch coordination', '30% off eligible managed labor', '20% off eligible ArmorTech parts'],
    },
    {
      name: 'Protect Plus',
      price: '$89.99/mo',
      tag: 'Advanced',
      text: 'Priority coordination and expanded support for high-device homes with more complex repair and technology needs.',
      features: ['Up to 40 registered devices', '8 remote diagnostic cases per month', 'Priority support coordination', 'Advanced repair-or-replace review', 'Parts compatibility assistance'],
    },
    {
      name: 'Protect Property',
      price: 'From $199/mo',
      tag: 'Property',
      text: 'Organized device and service support for rentals, Airbnb units, landlords, property managers, and small commercial accounts.',
      features: ['Up to 3 properties', 'Up to 60 registered devices', '12 remote diagnostic cases per month', 'Property-organized Device Vault', 'Service reports and coordination'],
    },
  ];

  const benefits = [
    ['Device Vault', 'Keep model numbers, serial numbers, locations, status, service history, and repair notes organized in one place.'],
    ['Remote-First Support', 'Narrow the failure before paying for unnecessary dispatch, parts, or replacement.'],
    ['Managed Repair', 'ArmorTech helps coordinate diagnostics, quotes, parts, scheduling, and service follow-up.'],
    ['Repair Discounts', 'Eligible members receive the stated plan discounts on qualifying ArmorTech-managed labor, service calls, and parts.'],
    ['Repair-or-Replace Guidance', 'Use device age, repair cost, part availability, and failure risk to make a practical decision.'],
    ['Multi-Property Records', 'Property plans organize devices, service records, and repair activity by location.'],
  ];

  return (
    <>
      <header className="siteHeader">
        <nav className="siteNav" aria-label="ArmorTech navigation">
          <a href="/" className="brandLink">ARMORTECH PROTECT</a>
          <div className="navLinks">
            {navLinks.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
          </div>
          <a href="https://armortechrepair.com/contact" className="navButton">Request Information</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">Device Records • Remote Support • Managed Repair • Member Discounts</p>
          <h1>Organize your technology before the next failure becomes an emergency.</h1>
          <p>
            ArmorTech Protect combines a Device Vault, remote troubleshooting,
            managed repair coordination, service history, and member discounts to
            make future repair decisions faster and more informed.
          </p>
          <div className="heroButtons">
            <a href="#plans">Compare Plans</a>
            <a href="https://armortechrepair.com/contact">Request Membership Info</a>
            <a href="https://armortechrepair.com/login">My Account</a>
          </div>
          <div className="heroNotice">
            ArmorTech Protect is a support and repair-discount membership. It is not
            insurance, a home warranty, or a guarantee that failed equipment will be
            repaired, replaced, reimbursed, or covered at no additional charge.
          </div>
        </section>

        <section className="section">
          <h2>What Protect Adds</h2>
          <p>One organized support path for the appliances, electronics, computers, networks, cameras, and connected systems you rely on.</p>
          <div className="grid">
            {benefits.map(([title, text]) => (
              <article className="card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section darkBand" id="plans">
          <h2>ArmorTech Protect Plans</h2>
          <p>Choose a plan based on device count, support frequency, service coordination, and property complexity.</p>
          <div className="pricingGrid">
            {plans.map((plan) => (
              <article className="priceCard" key={plan.name}>
                <span className="tag">{plan.tag}</span>
                <h3>{plan.name}</h3>
                <h4>{plan.price}</h4>
                <p>{plan.text}</p>
                <ul>
                  {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="heroButtons">
            <a href="https://armortechrepair.com/contact">Request Membership Info</a>
            <a href="https://armortechrepair.com/login">Open My Account</a>
          </div>
        </section>

        <section className="section">
          <h2>How Member Support Works</h2>
          <div className="grid">
            <article className="card"><h3>1. Activate</h3><p>Confirm the plan, service location, device count, and initial Device Vault setup.</p></article>
            <article className="card"><h3>2. Register Devices</h3><p>Add the identifying information needed for future diagnostics, parts sourcing, and service records.</p></article>
            <article className="card"><h3>3. Report a Problem</h3><p>Submit the affected device, symptoms, photos, model information, and what happened before the failure.</p></article>
            <article className="card"><h3>4. Troubleshoot Remotely</h3><p>ArmorTech attempts to solve or narrow the issue before recommending onsite service or parts.</p></article>
            <article className="card"><h3>5. Coordinate Service</h3><p>When onsite work is needed, ArmorTech coordinates the available direct or approved service path.</p></article>
            <article className="card"><h3>6. Approve the Quote</h3><p>Additional parts, labor, travel, shipping, or third-party charges are quoted before proceeding.</p></article>
          </div>
        </section>

        <section className="notice">
          <h2>Membership Terms at a Glance</h2>
          <p>
            Parts, labor, dispatch, travel, outsourced service, third-party provider
            charges, shipping, replacement products, emergency work, specialty service,
            and non-standard repairs remain billable unless a specific active-plan discount applies.
          </p>
          <p>
            Benefits are subject to serviceability, provider availability, safe access,
            device condition, plan limits, and the eligibility terms in effect at the time of service.
          </p>
        </section>

        <section className="cta">
          <p className="eyebrow">Build the Record Before the Failure</p>
          <h2>Ready to organize your devices and future repair support?</h2>
          <div className="contactBox">
            <a href="https://armortechrepair.com/contact">Request Information</a>
            <a href="tel:2282155595">Call 228-215-5595</a>
            <a href="https://armortechrepair.com/login">My Account</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <h3>ArmorTech Protect</h3>
        <p>Device records, remote troubleshooting, managed repair coordination, service history, and member discounts.</p>
        <div className="footerLinks">
          {navLinks.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
          <a href="https://iq.armortechrepair.com">Repair Diagnosis</a>
        </div>
        <p className="finePrint">© 2026 ArmorTech Protect. All rights reserved.</p>
      </footer>
    </>
  );
}
