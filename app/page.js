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
      bestFor:
        'Nationwide customers who want remote support, device records, parts guidance, and repair-or-replace advice.',
      features: [
        'Up to 10 registered devices',
        '2 remote diagnostic cases per month',
        'Virtual activation setup',
        'Digital Device Vault',
        'Parts sourcing guidance',
        'Repair-or-replace recommendations',
        '10% off eligible parts purchased through ArmorTech',
        'Onsite dispatch quoted separately',
      ],
    },
    {
      name: 'Protect Home',
      price: '$49.99/mo',
      tag: 'Most Popular',
      bestFor:
        'Homeowners who want Device Vault records, remote-first support, managed dispatch, and repair discounts.',
      features: [
        'Up to 20 registered devices',
        '4 remote diagnostic cases per month',
        'Initial activation visit or video setup',
        'Discounted managed dispatch',
        '30% off eligible ArmorTech-managed labor',
        '30% off eligible ArmorTech-managed service call fees',
        '20% off eligible parts purchased through ArmorTech',
        'Final quote before parts are ordered',
      ],
    },
    {
      name: 'Protect Plus',
      price: '$89.99/mo',
      tag: 'Advanced',
      bestFor:
        'High-device homes with appliances, TVs, computers, WiFi, cameras, consoles, smart devices, and electronics.',
      features: [
        'Up to 40 registered devices',
        '8 remote diagnostic cases per month',
        'Priority activation setup',
        'Higher-priority service coordination',
        'Everything in Protect Home',
        'Advanced repair-or-replace review',
        'Parts compatibility review',
        'Replacement sourcing assistance',
      ],
    },
    {
      name: 'Protect Property',
      price: 'From $199/mo',
      tag: 'Property',
      bestFor:
        'Rental properties, Airbnb units, landlords, property managers, small commercial accounts, and managed locations.',
      features: [
        'Up to 3 properties',
        'Up to 60 registered devices',
        '12 remote diagnostic cases per month',
        'Device Vault organized by property',
        'Tenant/property issue intake support',
        'Priority service coordination',
        'Repair reports, photos, invoices, and service notes',
        'Custom dispatch pricing available',
      ],
    },
  ];

  const vaultItems = [
    'Device 1',
    'Device 2',
    'Device 3',
    'Device 4',
    'Device 5',
    'Device 6',
    'Device 7',
    'Device 8',
    'Device 9',
    'Device 10',
  ];

  const accountItems = [
    'Payment History',
    'Service History',
    'Pending Orders',
    'Mail-In Orders',
    'Active Protect Memberships',
    'Inactive / Past Memberships',
    'Device Vault',
    'Diagnostic History',
    'Shop Orders',
    'Quotes & Invoices',
  ];

  const supportedDevices = [
    'Refrigerators',
    'Freezers',
    'Washers',
    'Dryers',
    'Dishwashers',
    'Ovens',
    'Ranges',
    'Microwaves',
    'Ice Makers',
    'TVs',
    'Computers',
    'Laptops',
    'Game Consoles',
    'Printers',
    'WiFi & Networking',
    'Security Cameras',
    'Smart Devices',
    'Audio / Video',
    'Control Boards',
    'Small Office Tech',
  ];

  const processSteps = [
    {
      title: '1. Activate Your Membership',
      text:
        'ArmorTech verifies your account, service location, plan type, device count, and initial Device Vault setup path.',
    },
    {
      title: '2. Register Devices',
      text:
        'Your Device Vault stores device names, categories, brands, model numbers, serial numbers, locations, status, and service notes.',
    },
    {
      title: '3. Report An Issue',
      text:
        'When something fails, submit the device, symptoms, photos, model information, and what happened before the failure.',
    },
    {
      title: '4. Remote Support First',
      text:
        'ArmorTech attempts to solve or narrow the issue remotely within your plan limits before dispatching service.',
    },
    {
      title: '5. Dispatch If Needed',
      text:
        'If onsite service is needed, ArmorTech coordinates direct service, subcontracted service, or approved third-party support when available.',
    },
    {
      title: '6. Quote Before Parts',
      text:
        'If parts or additional labor are required, ArmorTech sends a final quote before parts are ordered or repair continues.',
    },
  ];

  const decisionCards = [
    {
      title: 'When Repair Makes Sense',
      text:
        'ArmorTech helps identify the likely failure path, correct part, service cost, and best repair route before money is wasted.',
    },
    {
      title: 'When Repair Does Not Make Sense',
      text:
        'ArmorTech helps with replacement sourcing, upgrade guidance, part availability review, and practical next-step recommendations.',
    },
    {
      title: 'When More Information Is Needed',
      text:
        'ArmorTech may request photos, model tags, error codes, videos, remote access, or onsite evaluation before giving repair direction.',
    },
  ];

  return (
    <>
      <header className="siteHeader">
        <nav className="siteNav">
          <a href="/" className="brandLink">
            ARMORTECH PROTECT
          </a>

          <div className="navLinks">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <a href="https://armortechrepair.com/login" className="navButton">
            My Account
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">
            Device Vault • Remote Support • Managed Repair • Service History
          </p>

          <h1>
            A Smarter Membership For The Technology Your Home Depends On.
          </h1>

          <p>
            ArmorTech Protect organizes your devices, supports remote-first
            troubleshooting, coordinates repair when needed, stores service history,
            applies member discounts, and helps you make smarter repair-or-replace
            decisions.
          </p>

          <div className="heroButtons">
            <a href="#plans">View Plans</a>
            <a href="https://armortechrepair.com/login">Open My Account</a>
            <a href="https://armortechrepair.com/contact">Request Info</a>
          </div>

          <div className="heroNotice">
            <strong>Important:</strong> ArmorTech Protect is not insurance, not a home warranty,
            and not a guarantee of repair, replacement, reimbursement, or payment
            for failed devices. It is a support, Device Vault, remote diagnosis,
            managed repair, parts sourcing, service coordination, and repair discount membership.
          </div>
        </section>

        <section className="section">
          <h2>Your Home Has Records For Everything Important. Why Not Device Records?</h2>
          <p>
            Your vehicle has service records. Your home has insurance records.
            Your medical care has records. ArmorTech Protect brings that same
            logic to the appliances, electronics, computers, cameras, WiFi,
            smart devices, and systems inside your home.
          </p>

          <div className="grid">
            <div className="card">
              <h3>Device Vault</h3>
              <p>
                Each registered device can store brand, model, serial number,
                location, status, photos, notes, repair history, and recommendations.
              </p>
            </div>

            <div className="card">
              <h3>Remote-First Support</h3>
              <p>
                ArmorTech starts by narrowing the issue remotely before sending a
                technician, ordering parts, or recommending replacement.
              </p>
            </div>

            <div className="card">
              <h3>Managed Repair</h3>
              <p>
                ArmorTech helps coordinate service, parts, quotes, dispatch, and
                next steps so customers are not starting from zero every time.
              </p>
            </div>
          </div>
        </section>

        <section className="section darkBand" id="plans">
          <h2>Protect Membership Plans</h2>
          <p>
            Plans are built around registered device count, monthly remote
            diagnostic limits, dispatch coordination, repair guidance, and
            member discounts.
          </p>

          <div className="pricingGrid">
            {plans.map((plan) => (
              <div className="priceCard" key={plan.name}>
                <span className="tag">{plan.tag}</span>
                <h3>{plan.name}</h3>
                <h4>{plan.price}</h4>
                <p>{plan.bestFor}</p>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="heroButtons">
            <a href="https://armortechrepair.com/contact">Request Membership Info</a>
            <a href="https://armortechrepair.com/login">Open My Account</a>
          </div>
        </section>

        <section className="section" id="vault">
          <h2>Device Vault</h2>
          <p>
            Device Vault records should be customer-visible but admin-controlled.
            Customers can view their registered devices and service information,
            but ArmorTech controls edits so repair data stays accurate.
          </p>

          <div className="deviceGrid">
            {vaultItems.map((item, index) => (
              <div className="deviceSlot" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item}</h3>
                <p>Customer-visible record managed by ArmorTech admin.</p>
              </div>
            ))}
          </div>

          <div className="accountNotice">
            Customers should see only their own Device Vault records. Device
            edits, repair notes, status changes, service history entries, and
            administrative updates should remain admin-controlled.
          </div>
        </section>

        <section className="section darkBand">
          <h2>What My Account Should Show</h2>
          <p>
            Every ArmorTech domain should point customers to the same account
            portal at armortechrepair.com.
          </p>

          <div className="pills">
            {accountItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="heroButtons">
            <a href="https://armortechrepair.com/login">Open My Account</a>
            <a href="https://armortechrepair.com/portal">Customer Portal</a>
          </div>
        </section>

        <section className="section" id="process">
          <h2>How Member Service Requests Work</h2>
          <p>
            ArmorTech Protect is designed to reduce confusion, organize repair
            records, and make each future service request easier.
          </p>

          <div className="grid">
            {processSteps.map((step) => (
              <div className="card" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section darkBand">
          <h2>Supported Device Types</h2>
          <p>
            Devices can be registered, tracked, reviewed, supported, serviced,
            or coordinated through ArmorTech depending on device type, location,
            provider availability, safety, and repair practicality.
          </p>

          <div className="pills">
            {supportedDevices.map((device) => (
              <span key={device}>{device}</span>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Repair-Or-Replace Guidance</h2>
          <p>
            One wrong part can cost more than months of membership. ArmorTech
            Protect helps customers make better decisions before throwing money
            at the wrong repair.
          </p>

          <div className="grid">
            {decisionCards.map((card) => (
              <div className="card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="notice">
          <h2>Important Membership Notice</h2>
          <p>
            ArmorTech Protect is a support, Device Vault, remote diagnosis,
            managed dispatch, parts sourcing, service coordination, and repair
            discount membership. It is not insurance, not a home warranty, and
            not a service contract guaranteeing repair, replacement, reimbursement,
            or payment for failed devices.
          </p>
          <p>
            Parts, labor, dispatch fees, travel, outsourced service, third-party
            provider charges, shipping, replacement products, emergency work,
            specialty services, and non-standard repairs remain billable unless
            specifically discounted under active membership benefits.
          </p>
          <p>
            Final repair quotes are provided before parts are ordered or repair
            continues when additional parts or labor are required.
          </p>
        </section>

        <section className="cta">
          <p className="eyebrow">One Account Across ArmorTech</p>
          <h2>Build Your Device Vault Before Something Breaks.</h2>
          <p>
            Start your ArmorTech account, track devices, view memberships,
            review service history, check pending orders, and connect future
            shop, mail-in, and diagnostic activity.
          </p>

          <div className="contactBox">
            <a href="https://armortechrepair.com/login">Open My Account</a>
            <a href="https://armortechrepair.com/register">Create Account</a>
            <a href="https://armortechrepair.com/contact">Ask ArmorTech</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <h3>ArmorTech Protect</h3>
        <p>
          Memberships, Device Vault records, remote-first support, managed repair,
          quote approval, service history, payment history, pending orders, and
          account-connected technology support.
        </p>

        <div className="footerLinks">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="https://iq.armortechrepair.com">Repair Diagnosis</a>
        </div>

        <p className="finePrint">
          © 2026 ArmorTech Protect. All rights reserved.
        </p>
      </footer>
    </>
  );
}