import { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "business-email",
    title: "Business Email",
    shortDescription:
      "Professional business email using your own domain, with setup, migration and administration.",
    description:
      "Business email services that help your company communicate professionally with a domain-based address, proper authentication and manageable administration.",
    icon: "Mail",
    seoTitle: "Business Email Services",
    seoDescription:
      "Professional business email setup, migration and administration using your own domain. SPF, DKIM and DMARC configuration from Infinity Techiez.",
    overview: [
      "Business email is email that uses your company's domain name rather than a generic personal address. An address such as name@yourcompany.com reinforces your brand every time you send a message and gives customers, partners and suppliers a clear, professional way to reach you.",
      "For most businesses, email is also a critical operational system. It stores conversations, invoices, contracts and customer records. If email stops working, is compromised or is misconfigured, the impact can extend well beyond inconvenience. A properly set up business email environment gives you control over accounts, addresses, security settings and how users connect from different devices.",
      "We help businesses set up, migrate, configure and manage business email in a way that fits their operations. That includes choosing the right email platform, connecting it to your domain, configuring DNS records correctly, migrating mailboxes when needed and putting in place authentication and access controls that reduce common risks.",
    ],
    includedServices: [
      { title: "Business email setup", description: "Configure a professional email environment tied to your domain, including platform selection and account structure." },
      { title: "Domain-based email addresses", description: "Create addresses that match your business domain, with distribution groups and aliases as needed." },
      { title: "Mailbox configuration", description: "Set up mailbox sizes, retention, signatures and client settings to match business needs." },
      { title: "Email migration planning", description: "Plan and carry out migrations from existing providers while minimizing disruption and data loss." },
      { title: "DNS and MX record configuration", description: "Connect your domain to the correct email servers so messages are delivered reliably." },
      { title: "SPF, DKIM and DMARC configuration", description: "Add authentication records that improve deliverability and reduce spoofing and phishing risk." },
      { title: "Account administration", description: "Manage user accounts, aliases, groups and permissions as your team changes." },
      { title: "Email security settings", description: "Apply access controls, authentication requirements and sharing policies appropriate for your business." },
      { title: "Mail client and device configuration", description: "Configure desktops, phones and tablets to access business email securely and consistently." },
    ],
    benefits: [
      "Professional business identity in every message you send",
      "Centralized control over employee email accounts and aliases",
      "Improved email authentication that helps messages reach their destination",
      "Easier onboarding and offboarding when staff join or leave",
      "Consistent configuration across computers, phones and tablets",
      "Clearer separation between business and personal communication",
    ],
    scenarios: [
      {
        title: "Starting a new business",
        description:
          "A new company needs professional email addresses that match its domain before it begins communicating with customers, partners and suppliers.",
      },
      {
        title: "Moving from personal email",
        description:
          "A growing business is still using personal addresses such as gmail.com or yahoo.com and wants a more professional appearance and centralized control.",
      },
      {
        title: "Changing email providers",
        description:
          "A business needs to move mailboxes, calendars and contacts to a different provider without losing messages or disrupting day-to-day operations.",
      },
      {
        title: "Improving email authentication",
        description:
          "Messages are being flagged as spam or the business wants to reduce the risk of attackers sending messages that appear to come from its domain.",
      },
      {
        title: "Employee onboarding and offboarding",
        description:
          "A company needs a repeatable process to create mailboxes for new hires, transfer data from departing employees and manage shared addresses.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        description: "Review existing email accounts, domains, DNS records and authentication to identify gaps, migration needs and deliverability issues.",
      },
      {
        step: "02",
        title: "Design",
        description: "Plan the mailbox structure, aliases, distribution groups, security settings and migration approach that fit your team.",
      },
      {
        step: "03",
        title: "Provision",
        description: "Create accounts, configure DNS records and prepare the new email environment before users switch over.",
      },
      {
        step: "04",
        title: "Migrate",
        description: "Move messages, calendars and contacts from the previous provider with timing that minimizes disruption.",
      },
      {
        step: "05",
        title: "Authenticate",
        description: "Configure and test SPF, DKIM and DMARC records so legitimate messages are trusted and spoofing is harder.",
      },
      {
        step: "06",
        title: "Hand over",
        description: "Document the setup, train administrators if needed and establish a clear process for account changes.",
      },
    ],
    considerations: [
      { title: "Authentication records", description: "SPF, DKIM and DMARC records should be configured correctly to improve deliverability and reduce spoofing risk." },
      { title: "Account security", description: "Strong passwords and multi-factor authentication significantly reduce the chance of account compromise." },
      { title: "Access management", description: "User accounts, shared mailboxes and distribution lists should be reviewed when employees join, change roles or leave." },
      { title: "Backup and recovery", description: "Business email should be backed up or retention policies should be understood so important correspondence can be recovered." },
    ],
    whoFor: [
      "Small businesses establishing their first professional email environment",
      "Growing companies moving away from personal email addresses",
      "Organizations changing email providers or consolidating platforms",
      "Businesses experiencing deliverability or spam issues",
      "Companies that need centralized control over employee accounts",
    ],
    faqs: [
      {
        question: "What is business email?",
        answer:
          "Business email is an email address that uses your company's domain name, such as name@yourcompany.com. It looks more professional than a personal email address and gives your business more control over accounts, security and branding.",
      },
      {
        question: "Can I use my own domain?",
        answer:
          "Yes. If you already own a domain, we can configure business email to use it. If you do not have a domain, we can help with domain selection and registration as part of the process.",
      },
      {
        question: "Can you migrate existing mailboxes?",
        answer:
          "Yes. We can plan and carry out email migrations, moving messages and settings from an existing provider while minimizing disruption.",
      },
      {
        question: "What are SPF, DKIM and DMARC?",
        answer:
          "SPF, DKIM and DMARC are DNS records that help email providers verify that messages from your domain are legitimate. They improve deliverability and reduce the chance that attackers can send messages that appear to come from your business.",
      },
      {
        question: "Can business email work on phones and computers?",
        answer:
          "Yes. Business email can be configured on desktops, laptops, phones and tablets using standard mail clients and webmail.",
      },
      {
        question: "How does email migration work?",
        answer:
          "We plan the migration around your schedule, configure the new environment, move messages and settings where possible, update DNS records and test the result before cutover.",
      },
      {
        question: "What happens when an employee leaves?",
        answer:
          "We help you disable or convert the mailbox, forward messages to the appropriate person and preserve any records that need to be kept according to your policies.",
      },
      {
        question: "Will business email stop spam?",
        answer:
          "No email system can stop all spam, but proper authentication, security settings and user awareness can significantly reduce unwanted and malicious messages.",
      },
    ],
    relatedServices: ["domains-dns", "cybersecurity", "cloud-services", "it-management"],
  },
  {
    slug: "domains-dns",
    title: "Domains & DNS",
    shortDescription:
      "Domain registration services, DNS management and record configuration for business services.",
    description:
      "Domain and DNS services that help businesses own, manage and configure their domain names so websites, email and applications work reliably.",
    icon: "Globe",
    seoTitle: "Domains & DNS Services",
    seoDescription:
      "Business domain management and DNS configuration services from Infinity Techiez. Services for records, transfers, email routing and diagnostics.",
    overview: [
      "A domain name is your business address on the internet. It is what customers type to reach your website and what appears after the @ symbol in your business email. DNS, the Domain Name System, is the invisible infrastructure that tells the internet where to send traffic for that domain, whether it is a website visitor, an email message or an application request.",
      "When DNS is configured correctly, services work smoothly. When it is wrong, websites become unreachable, email stops delivering and business applications can break. Despite how small individual DNS records look, they have an outsized impact on daily operations.",
      "We help businesses register, manage, transfer and correct domains and DNS. We do not operate as a domain registry, but we act as an administrator and advisor for your domain assets, making sure records are correct, ownership is properly controlled and changes are planned to avoid unnecessary downtime.",
    ],
    includedServices: [
      { title: "Domain registration services", description: "Assist with selecting, registering and renewing domain names through reputable registrars." },
      { title: "Domain management and renewal tracking", description: "Keep track of registration dates, renewal windows and ownership settings so domains do not expire unexpectedly." },
      { title: "DNS configuration", description: "Set up and manage DNS records that direct traffic to the right services." },
      { title: "A, AAAA, CNAME, TXT and MX record setup", description: "Configure the core record types that control websites, subdomains, verification and email routing." },
      { title: "SPF, DKIM and DMARC records", description: "Add email authentication records that protect your domain and improve deliverability." },
      { title: "Domain transfer assistance", description: "Guide transfers between registrars with proper preparation, codes and verification." },
      { title: "Subdomain configuration", description: "Create subdomains for separate services, applications, teams or marketing pages." },
      { title: "DNS diagnostics", description: "Diagnose why services are not reachable and correct record or propagation issues." },
      { title: "Domain ownership and access review", description: "Review who controls the domain, registrar access and account access settings." },
    ],
    benefits: [
      "Centralized management of business domain names and DNS records",
      "Reliable configuration that keeps websites, email and applications connected",
      "Easier diagnosis when services are not reachable",
      "Better control over email authentication and service verification records",
      "Reduced risk of accidental expiration or loss of domain control",
      "Clear documentation of record changes and provider relationships",
    ],
    scenarios: [
      {
        title: "Registering a new domain",
        description:
          "A new business needs a domain name that matches its brand and is configured correctly for email and web services from the start.",
      },
      {
        title: "Fixing email delivery problems",
        description:
          "A company's email is failing because MX, SPF, DKIM or DMARC records are incorrect, missing or pointing to the wrong destination.",
      },
      {
        title: "Moving to a new DNS provider",
        description:
          "A business wants better DNS management, faster propagation or redundancy and needs records moved carefully to a different provider.",
      },
      {
        title: "Adding subdomains",
        description:
          "A business needs subdomains for separate services, applications, marketing pages or geographic versions of its site.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        description: "Identify every domain, registrar, DNS provider and service that depends on the domain configuration.",
      },
      {
        step: "02",
        title: "Inspect",
        description: "Review current DNS records, ownership details, expiration dates and administrative access.",
      },
      {
        step: "03",
        title: "Architect",
        description: "Design the DNS structure needed to serve websites, email, subdomains and third-party services.",
      },
      {
        step: "04",
        title: "Update",
        description: "Make record changes with careful timing that respects propagation windows and minimizes service interruption.",
      },
      {
        step: "05",
        title: "Validate",
        description: "Confirm that websites, email and applications resolve correctly from multiple locations and devices.",
      },
      {
        step: "06",
        title: "Document",
        description: "Record the final configuration, provider relationships and renewal schedule for future reference.",
      },
    ],
    considerations: [
      { title: "Domain ownership", description: "Registrar accounts and access options should be controlled by authorized people in your organization." },
      { title: "Authentication records", description: "SPF, DKIM and DMARC records should be kept accurate as email services and providers change." },
      { title: "Change planning", description: "DNS changes should be scheduled to avoid service interruption, with time-to-live values considered in advance." },
      { title: "Renewal management", description: "Domains should be monitored and renewed before expiration to prevent loss or service disruption." },
    ],
    whoFor: [
      "New businesses choosing their first domain name",
      "Companies experiencing email or website connectivity issues",
      "Businesses moving between registrars or DNS providers",
      "Organizations adding subdomains or new services",
      "Companies that want better control and documentation of their domain assets",
    ],
    faqs: [
      {
        question: "What is DNS?",
        answer:
          "DNS, the Domain Name System, translates human-readable domain names into the addresses computers use to find services. It controls where email, websites and applications are directed.",
      },
      {
        question: "What is an MX record?",
        answer:
          "An MX record tells email servers where to deliver messages for your domain. If it is wrong, your business email may not work.",
      },
      {
        question: "How do DNS changes work?",
        answer:
          "DNS changes are made through your domain registrar or DNS provider and then propagate across the internet as cached records expire. We plan changes to minimize disruption.",
      },
      {
        question: "Can you help with domain transfers?",
        answer:
          "Yes. We can guide you through transferring a domain between registrars, including preparing the domain, obtaining transfer codes and verifying completion.",
      },
      {
        question: "How long do DNS changes take?",
        answer:
          "DNS changes can take minutes to hours depending on record time-to-live settings and provider caching. We do not guarantee specific propagation times.",
      },
      {
        question: "Are you a domain registrar?",
        answer:
          "No. We do not register domains directly. We help you choose and work with reputable registrars and manage the configuration that makes your domain useful.",
      },
      {
        question: "What records do I need for business email?",
        answer:
          "Business email typically requires MX records to direct mail, plus SPF, DKIM and DMARC records for authentication and deliverability.",
      },
    ],
    relatedServices: ["business-email", "web-hosting", "cybersecurity"],
  },
  {
    slug: "web-hosting",
    title: "Web Hosting",
    shortDescription:
      "Managed hosting for business websites and applications with configuration, migration and administration.",
    description:
      "Business web hosting services that connect your domain to a reliable hosting environment and keep your website or application accessible.",
    icon: "Server",
    seoTitle: "Business Web Hosting Services",
    seoDescription:
      "Business web hosting setup, domain connection, SSL configuration and migration services from Infinity Techiez.",
    overview: [
      "Web hosting is the infrastructure that stores your website files, applications and databases and makes them available to visitors on the internet. For a business website to work reliably, the domain, DNS and hosting environment must be connected and configured correctly.",
      "Choosing the right hosting depends on what your site does. A simple marketing site has very different requirements from an e-commerce store, a customer portal or a business application. Factors such as traffic, storage, security, backups, update frequency and compliance all influence which hosting approach makes sense.",
      "We help businesses choose, configure, deploy and administer hosting that fits their website and operational needs. We do not claim to own data centers or infrastructure. Instead, we act as a configuration and administration partner, making sure your domain, DNS, SSL and hosting work together and that the environment is documented and maintainable.",
    ],
    includedServices: [
      { title: "Business website hosting setup", description: "Select and configure a hosting environment appropriate for your website and traffic." },
      { title: "Hosting environment configuration", description: "Set up server settings, databases, caching and security headers as needed." },
      { title: "Domain and DNS connection", description: "Link your domain to the hosting environment so visitors can reach your site." },
      { title: "SSL/TLS certificate configuration", description: "Configure HTTPS so browsers do not show security warnings and traffic is encrypted." },
      { title: "Website deployment assistance", description: "Help deploy or publish your site, application or content management system." },
      { title: "Hosting migrations", description: "Plan and carry out moves between hosting providers with minimal downtime." },
      { title: "Hosting administration", description: "Provide ongoing oversight of hosting settings, updates and environment changes." },
      { title: "Performance and backup considerations", description: "Review caching, speed and backup practices that affect site reliability." },
      { title: "Basic issue resolution", description: "Diagnose and resolve common connectivity, DNS and configuration issues." },
    ],
    benefits: [
      "A hosting setup aligned with your website and business requirements",
      "Proper coordination between domain, DNS and SSL",
      "Clearer administration and easier future updates",
      "Help with migrations, changes and growth",
      "Documentation of the hosting environment and access details",
      "Reduced risk of misconfiguration causing downtime",
    ],
    scenarios: [
      {
        title: "Launching a new business website",
        description:
          "A company needs a hosting environment connected to its domain so the site is publicly accessible, secure and maintainable.",
      },
      {
        title: "Moving an existing website",
        description:
          "A business wants to move its site to a new host without long downtime, broken services or lost data.",
      },
      {
        title: "Securing the site with SSL",
        description:
          "A website is showing browser security warnings and needs HTTPS configured properly.",
      },
      {
        title: "Connecting a domain to hosting",
        description:
          "The domain and hosting were purchased separately and need to be linked correctly through DNS.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Scope",
        description: "Clarify what the website does, expected traffic, compliance needs and any technical constraints.",
      },
      {
        step: "02",
        title: "Audit platform",
        description: "Review the current hosting, domain, DNS and content management setup for compatibility and risks.",
      },
      {
        step: "03",
        title: "Select stack",
        description: "Choose the hosting environment, database, caching, SSL approach and backup method that fit the site.",
      },
      {
        step: "04",
        title: "Configure",
        description: "Set up the hosting environment, connect the domain, configure SSL and prepare the deployment pipeline.",
      },
      {
        step: "05",
        title: "Deploy",
        description: "Publish the site or migrate from the existing host, then verify pages, forms, functions and performance.",
      },
      {
        step: "06",
        title: "Maintain",
        description: "Schedule updates, monitor backups and keep documentation current so the site remains secure and reliable.",
      },
    ],
    considerations: [
      { title: "SSL/TLS", description: "HTTPS should be configured and enforced so visitor data is encrypted and browsers do not warn users." },
      { title: "Access control", description: "Hosting accounts, control panels and deployment credentials should be controlled and stored securely." },
      { title: "Backups", description: "Website files and databases should be backed up regularly with a tested recovery process." },
      { title: "Updates and patching", description: "Content management systems, plugins and server software need regular updates to reduce security risk." },
    ],
    whoFor: [
      "Businesses launching a new website or web application",
      "Companies moving from one hosting provider to another",
      "Organizations that need help connecting a domain to hosting",
      "Businesses that want HTTPS configured correctly",
      "Companies without internal staff to manage hosting administration",
    ],
    faqs: [
      {
        question: "What is business web hosting?",
        answer:
          "Business web hosting is the service that stores your website files and makes them accessible on the internet. It can range from simple static sites to more complex business applications.",
      },
      {
        question: "Can you help move an existing website?",
        answer:
          "Yes. We can plan and carry out hosting migrations, including moving files and databases, updating DNS and testing the new environment.",
      },
      {
        question: "Can you connect my domain?",
        answer:
          "Yes. We can connect your domain to your hosting environment by configuring the appropriate DNS records.",
      },
      {
        question: "Is SSL included?",
        answer:
          "SSL certificates are commonly available through hosting providers and can be configured as part of the hosting setup. We help coordinate this.",
      },
      {
        question: "Can you help with hosting configuration?",
        answer:
          "Yes. We help with server settings, domain connection, SSL, email routing and other configuration tasks that keep your site running.",
      },
      {
        question: "Do you guarantee uptime?",
        answer:
          "We do not guarantee uptime. Uptime depends on the hosting provider, site architecture and ongoing maintenance. We help you choose reliable hosting and configure it well.",
      },
    ],
    relatedServices: ["domains-dns", "backup-recovery", "cybersecurity"],
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    shortDescription:
      "Cloud consulting, migration and ongoing management for business applications and infrastructure.",
    description:
      "Cloud services that help businesses use cloud-based applications, storage and infrastructure in a way that serves their operations and budget.",
    icon: "Cloud",
    seoTitle: "Business Cloud Services",
    seoDescription:
      "Cloud consulting, migration and management for business applications and infrastructure. Practical cloud guidance from Infinity Techiez.",
    overview: [
      "Cloud services cover a wide range of business technology, from online productivity applications and file storage to cloud infrastructure and databases. For many businesses, the cloud reduces the need to own and maintain physical servers, but it also introduces new responsibilities around configuration, access control, cost management and data protection.",
      "Moving to the cloud is not automatically better than keeping systems on-site. The right choice depends on how your business works, what applications you use, how sensitive your data is, what internet connectivity you have and how much control you need. A poorly planned cloud migration can create access problems, unexpected costs and security gaps.",
      "We help businesses evaluate, plan, migrate and manage cloud services that fit their workflows. We do not claim to be an official partner of any specific cloud provider. Our role is to advise, configure, administer and coordinate cloud services so they work reliably alongside your existing technology.",
    ],
    includedServices: [
      { title: "Cloud service evaluation", description: "Review existing systems and identify cloud options that match your business requirements and budget." },
      { title: "Cloud migration planning", description: "Plan the move of data, applications or infrastructure to cloud services with minimal disruption." },
      { title: "Cloud application configuration", description: "Set up productivity, collaboration, storage or line-of-business cloud applications." },
      { title: "User and account administration", description: "Create, configure and manage user accounts, licenses and organizational settings." },
      { title: "Cloud storage setup", description: "Configure file storage, sharing and sync services that fit team workflows." },
      { title: "Access management", description: "Set up permissions, groups and policies so users can reach what they need without unnecessary exposure." },
      { title: "Security and sharing settings", description: "Apply sharing controls, external access limits and security settings appropriate for your data." },
      { title: "Cloud-to-cloud coordination", description: "Integrate multiple cloud services so they work together consistently." },
      { title: "Ongoing cloud administration", description: "Provide regular oversight of accounts, usage, costs and configuration changes." },
    ],
    benefits: [
      "Cloud services matched to actual business workflows",
      "Reduced reliance on on-site hardware where appropriate",
      "Centralized user and access management across services",
      "Easier collaboration and file access for distributed teams",
      "Scalable options as the business changes",
      "Clearer visibility into cloud configuration and responsibilities",
    ],
    scenarios: [
      {
        title: "Moving files to cloud storage",
        description:
          "A business wants team files accessible from anywhere without maintaining an on-site server or relying on personal file-sharing accounts.",
      },
      {
        title: "Adopting cloud business applications",
        description:
          "A company is moving email, documents, collaboration tools or business applications to cloud-based productivity services.",
      },
      {
        title: "Managing cloud accounts",
        description:
          "A business needs help creating, configuring and administering user accounts, licenses and groups across cloud services.",
      },
      {
        title: "Planning a cloud migration",
        description:
          "An organization is considering moving workloads to the cloud and needs a practical plan that covers data, access and training.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Inventory",
        description: "Catalog existing systems, data, users and workflows to understand what can move to the cloud and what should stay.",
      },
      {
        step: "02",
        title: "Evaluate",
        description: "Compare cloud platforms and services against business needs, budget, security requirements and integration constraints.",
      },
      {
        step: "03",
        title: "Architect",
        description: "Design the organizational structure, accounts, permissions, storage layout and integration points for the chosen services.",
      },
      {
        step: "04",
        title: "Onboard",
        description: "Configure the cloud environment, create users, apply security settings and prepare data for migration.",
      },
      {
        step: "05",
        title: "Migrate",
        description: "Move data, mailboxes and applications in planned phases, validating functionality at each stage.",
      },
      {
        step: "06",
        title: "Govern",
        description: "Establish ongoing reviews of access, usage, costs and security so the cloud environment stays aligned with the business.",
      },
    ],
    considerations: [
      { title: "Access controls", description: "User roles and permissions should be reviewed regularly as staff and responsibilities change." },
      { title: "Sharing policies", description: "External sharing, link expiration and default permissions should match your business data policies." },
      { title: "Multi-factor authentication", description: "MFA should be enabled for administrator accounts and ideally for all users where available." },
      { title: "Backup and retention", description: "Cloud data should still be backed up or retention policies understood; cloud providers are not always responsible for restoring deleted data." },
    ],
    whoFor: [
      "Businesses considering moving systems or data to the cloud",
      "Companies using cloud applications that need better administration",
      "Organizations with distributed or remote teams needing file access",
      "Businesses wanting to reduce on-site hardware",
      "Companies that need help coordinating multiple cloud services",
    ],
    faqs: [
      {
        question: "What are cloud services?",
        answer:
          "Cloud services are technology services delivered over the internet. They can include email, file storage, productivity applications, databases and infrastructure.",
      },
      {
        question: "Can you help move business services to the cloud?",
        answer:
          "Yes. We can evaluate your current setup, recommend suitable cloud services and plan a migration that minimizes disruption.",
      },
      {
        question: "How does cloud access work?",
        answer:
          "Users access cloud services through the internet with an account. We help configure those accounts, permissions and security settings.",
      },
      {
        question: "How do businesses manage cloud accounts?",
        answer:
          "Cloud accounts can be managed through administrative consoles. We help set up user lifecycles, access policies and security settings.",
      },
      {
        question: "What should businesses consider before migrating?",
        answer:
          "Consider which data and applications need to move, internet and bandwidth requirements, security and compliance needs, user training and ongoing costs.",
      },
      {
        question: "Are you a Microsoft, Google or AWS partner?",
        answer:
          "We do not claim official partnerships with specific cloud providers unless verified. We provide configuration and administration services across common cloud platforms.",
      },
    ],
    relatedServices: ["it-infrastructure", "backup-recovery", "it-management"],
  },
  {
    slug: "it-infrastructure",
    title: "IT Infrastructure",
    shortDescription:
      "Business infrastructure services covering servers, networks, devices and connectivity.",
    description:
      "IT infrastructure services that design, deploy and manage the servers, networks and systems businesses rely on every day.",
    icon: "Network",
    seoTitle: "Business IT Infrastructure Services",
    seoDescription:
      "IT infrastructure planning, deployment and administration for businesses. Servers, networks, devices and connectivity from Infinity Techiez.",
    overview: [
      "IT infrastructure is the combination of servers, networks, devices and connectivity that keeps a business running. It powers applications, communication, data access and security. When infrastructure is well planned, employees can work productively, customers can reach your services and data moves reliably between systems.",
      "Infrastructure needs vary widely between businesses. A small professional services firm may need little more than reliable internet, business email, cloud storage and secure laptops. A growing organization may need multiple locations, virtual servers, VPN access, structured network equipment and integration between on-site and cloud systems. There is no universal correct answer.",
      "We help businesses plan, deploy and manage infrastructure that fits their size, workflows and budget. We do not sell hardware or internet service. Our role is to assess requirements, design an approach, configure and document systems and coordinate with vendors so the environment remains manageable.",
    ],
    includedServices: [
      { title: "Infrastructure planning and assessment", description: "Review current systems and business requirements to identify what infrastructure is needed." },
      { title: "Server configuration and administration", description: "Set up, configure and maintain physical or virtual servers appropriate for your workloads." },
      { title: "Network design and diagnostics", description: "Plan and diagnose wired and wireless networks, including routers, switches and access points." },
      { title: "Business device setup and management", description: "Configure computers, laptops and other devices with consistent settings and security controls." },
      { title: "Connectivity review and coordination", description: "Evaluate internet, VPN and remote access needs and coordinate with connectivity providers." },
      { title: "Remote and hybrid infrastructure planning", description: "Design secure access to business systems for employees working outside the office." },
      { title: "System integration", description: "Connect on-site systems, cloud services and applications so they work together." },
      { title: "Infrastructure documentation", description: "Create clear records of systems, access, vendors and configuration for future reference." },
      { title: "Routine maintenance and updates", description: "Schedule and coordinate updates, patches and lifecycle refresh activities." },
    ],
    benefits: [
      "Infrastructure designed around actual business workflows",
      "Clear documentation of systems, access and vendors",
      "Options for remote, hybrid and distributed teams",
      "Easier diagnosis and faster problem isolation",
      "A scalable foundation that can grow with the business",
      "Better coordination between internal systems and cloud services",
    ],
    scenarios: [
      {
        title: "Setting up a new office",
        description:
          "A business needs network equipment, internet connectivity, servers and devices configured before employees can work productively.",
      },
      {
        title: "Enabling remote workers",
        description:
          "A company needs secure access to business systems for employees working from home or on the road.",
      },
      {
        title: "Replacing aging servers",
        description:
          "An organization needs to update its infrastructure without unnecessary disruption to daily operations.",
      },
      {
        title: "Improving network reliability",
        description:
          "A business experiences connectivity problems and needs a structured review of its network and internet setup.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Survey",
        description: "Understand where employees work, what applications they use and how data moves through the business.",
      },
      {
        step: "02",
        title: "Assess",
        description: "Review servers, network equipment, devices, internet connectivity, remote access and existing documentation.",
      },
      {
        step: "03",
        title: "Design",
        description: "Plan an infrastructure approach that balances performance, reliability, security and budget.",
      },
      {
        step: "04",
        title: "Build",
        description: "Configure servers, network equipment, devices and remote access according to the agreed design.",
      },
      {
        step: "05",
        title: "Integrate",
        description: "Connect on-site systems with cloud services, applications and any third-party providers.",
      },
      {
        step: "06",
        title: "Maintain",
        description: "Schedule updates, monitor performance, plan lifecycle refreshes and keep infrastructure documentation current.",
      },
    ],
    considerations: [
      { title: "Network segmentation", description: "Separating networks and limiting access helps reduce exposure if one system is compromised." },
      { title: "Device management", description: "Consistent settings, patching and encryption on devices reduce security gaps." },
      { title: "Patching and updates", description: "Servers, network equipment and devices need regular updates to address vulnerabilities." },
      { title: "Change testing", description: "Infrastructure changes should be tested or planned with rollback options to avoid unexpected downtime." },
    ],
    whoFor: [
      "Businesses setting up a new office or location",
      "Companies with aging infrastructure that needs modernization",
      "Organizations with remote or hybrid employees",
      "Businesses experiencing network or connectivity issues",
      "Companies that need structured infrastructure documentation and management",
    ],
    faqs: [
      {
        question: "What is IT infrastructure?",
        answer:
          "IT infrastructure includes the hardware, software, networks and services that enable a business to operate. It covers servers, devices, connectivity and the systems that connect them.",
      },
      {
        question: "What does an IT infrastructure assessment include?",
        answer:
          "We review existing servers, network equipment, devices, connectivity, security settings and documentation to identify gaps and opportunities for improvement.",
      },
      {
        question: "Do businesses still need servers?",
        answer:
          "Some businesses benefit from on-site or virtual servers, while others can use cloud services. We help determine what makes sense for your operations and budget.",
      },
      {
        question: "What infrastructure does a small business need?",
        answer:
          "Small businesses typically need reliable internet, secure devices, email, file access, backups and appropriate security controls. The exact setup depends on the business.",
      },
      {
        question: "Can you help with remote business environments?",
        answer:
          "Yes. We design and manage infrastructure that lets remote teams access business systems securely and reliably.",
      },
      {
        question: "Do you sell hardware or internet service?",
        answer:
          "No. We do not sell hardware or act as an internet service provider. We assess requirements, design solutions, configure systems and coordinate with vendors.",
      },
    ],
    relatedServices: ["cloud-services", "cybersecurity", "backup-recovery", "it-management"],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    shortDescription:
      "Business security services including access control, email security, endpoint protection and security configuration.",
    description:
      "Business cybersecurity services that reduce risk through practical access controls, authentication, email security and security awareness.",
    icon: "Shield",
    seoTitle: "Business Cybersecurity Services",
    seoDescription:
      "Practical cybersecurity services for small and growing businesses. Access control, email security, endpoint protection and security planning from Infinity Techiez.",
    overview: [
      "Cybersecurity for business is about reducing the chance that sensitive data, accounts and systems are compromised. It is not a single product, a one-time fix or a guarantee of safety. Effective security comes from a combination of configuration, access controls, authentication, monitoring and user habits.",
      "Many security incidents affecting small and medium businesses are not sophisticated. They happen because passwords are reused, multi-factor authentication is not enabled, access is not removed when employees leave, email authentication records are missing or software is not kept up to date. Addressing these basics can significantly reduce risk.",
      "We help businesses take practical steps such as controlling access, strengthening authentication, securing email and domains, reviewing endpoints and building habits that reduce common risks. Our focus is on sensible, proportionate security rather than fear-based selling.",
    ],
    includedServices: [
      { title: "Security review and risk assessment", description: "Review current security settings, access and risks to identify practical improvements." },
      { title: "Access control configuration", description: "Set up permissions, groups and policies so users have only the access they need." },
      { title: "Multi-factor authentication setup", description: "Enable and enforce MFA on critical business accounts and systems." },
      { title: "Email security configuration", description: "Configure authentication records, filtering and policies that reduce phishing and spoofing risk." },
      { title: "Domain security review", description: "Review domain registration, DNS and authentication records for unauthorized change risk." },
      { title: "Endpoint security considerations", description: "Assess device settings, encryption, patching and policies that protect laptops, phones and desktops." },
      { title: "Security policy guidance", description: "Help document simple, usable security policies for passwords, access and acceptable use." },
      { title: "Security awareness guidance", description: "Provide guidance and materials that help employees recognize phishing and handle data safely." },
      { title: "Backup and recovery coordination", description: "Ensure backups are in place so the business can recover from ransomware, deletion or failure." },
    ],
    benefits: [
      "Reduced exposure to common cyber threats through practical controls",
      "Better control over who can access business systems and data",
      "Stronger authentication that makes account takeover much harder",
      "Improved email and domain security posture",
      "Clearer security practices that employees can follow",
      "Coordination between security, backup and recovery plans",
    ],
    scenarios: [
      {
        title: "Strengthening account security",
        description:
          "A business wants to add multi-factor authentication and review who has access to critical accounts and systems.",
      },
      {
        title: "Securing business email",
        description:
          "A company is concerned about phishing and spoofing and wants email authentication and filtering configured correctly.",
      },
      {
        title: "Reviewing domain security",
        description:
          "A business wants to protect its domain registration, DNS and email authentication records from unauthorized changes.",
      },
      {
        title: "Employee security awareness",
        description:
          "A company needs practical guidance to help staff recognize phishing, report suspicious messages and handle sensitive information.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Identify assets",
        description: "Determine which systems, accounts, data and third-party services are most important to the business.",
      },
      {
        step: "02",
        title: "Assess exposure",
        description: "Review access controls, authentication, email security, domain settings and device posture for weak points.",
      },
      {
        step: "03",
        title: "Prioritize",
        description: "Focus first on the controls that reduce the most risk for the specific environment and budget.",
      },
      {
        step: "04",
        title: "Harden",
        description: "Implement multi-factor authentication, access limits, email protections, device settings and other agreed controls.",
      },
      {
        step: "05",
        title: "Validate",
        description: "Test that controls work as intended, review access lists and confirm configurations cannot be easily bypassed.",
      },
      {
        step: "06",
        title: "Sustain",
        description: "Schedule regular reviews, updates and awareness activities so security does not degrade over time.",
      },
    ],
    considerations: [
      { title: "No absolute protection", description: "No security measure can guarantee complete protection. Security is about reducing risk, not eliminating it." },
      { title: "Multi-factor authentication", description: "MFA is one of the most effective controls because it makes stolen passwords far less useful." },
      { title: "Access reviews", description: "Regular access reviews help remove unnecessary permissions and old accounts that could be exploited." },
      { title: "Backups and recovery", description: "Backups are a critical part of recovering from ransomware, deletion and other security incidents." },
    ],
    whoFor: [
      "Small and growing businesses without a dedicated security team",
      "Companies concerned about phishing, account compromise or data loss",
      "Businesses that need help enabling multi-factor authentication",
      "Organizations wanting to improve email and domain security",
      "Companies that want practical, proportionate security guidance",
    ],
    faqs: [
      {
        question: "Why does a small business need cybersecurity?",
        answer:
          "Small businesses are often targeted because they may have fewer protections in place. A practical security approach reduces the risk of disruption, data loss and financial harm.",
      },
      {
        question: "What is MFA?",
        answer:
          "Multi-factor authentication, or MFA, requires a second form of verification in addition to a password. It makes it much harder for attackers to access accounts even if a password is stolen.",
      },
      {
        question: "How can businesses protect email accounts?",
        answer:
          "Businesses can protect email with strong passwords, multi-factor authentication, email security records such as SPF, DKIM and DMARC, and user awareness of phishing.",
      },
      {
        question: "What is endpoint security?",
        answer:
          "Endpoint security focuses on protecting the devices that connect to your network, such as laptops, phones and desktops. It includes settings, software and policies that reduce device risk.",
      },
      {
        question: "Why are backups part of security?",
        answer:
          "Backups help a business recover if systems are compromised, encrypted by ransomware or damaged. A backup is only useful if it can be restored successfully.",
      },
      {
        question: "How should businesses manage employee access?",
        answer:
          "Employees should receive only the access they need, permissions should be reviewed when roles change, and accounts should be disabled promptly when staff leave.",
      },
      {
        question: "Can you guarantee our business will not be hacked?",
        answer:
          "No. No provider can guarantee that. We help you implement practical controls that reduce the likelihood and impact of common incidents.",
      },
    ],
    relatedServices: ["business-email", "backup-recovery", "it-management", "domains-dns"],
  },
  {
    slug: "backup-recovery",
    title: "Backup & Recovery",
    shortDescription:
      "Backup strategies, recovery planning and data protection for business continuity.",
    description:
      "Business backup and recovery services that help protect critical data and prepare the business to restore systems when needed.",
    icon: "Database",
    seoTitle: "Business Backup & Recovery Services",
    seoDescription:
      "Backup planning, recovery testing and data protection services from Infinity Techiez. Build a resilient business continuity strategy.",
    overview: [
      "A backup is a copy of your business data that can be used to restore systems after data loss, hardware failure or a security incident. Recovery is the process of actually returning that data to a usable state. The two are related, but they are not the same thing. Having backups does not automatically mean you can recover quickly or completely.",
      "Many businesses discover this distinction too late. They assume their cloud provider or IT person is handling backups, only to find that restoration is slow, incomplete or impossible when something goes wrong. Common problems include backups that were never tested, data that was not included in the backup scope, storage that is also affected by the incident or recovery procedures that no one has documented.",
      "We help businesses design backup strategies, test recovery procedures and protect data so that recovery is possible when it matters. Our focus is on building a practical, documented approach that matches your business priorities rather than selling backup software or promising outcomes that cannot be guaranteed.",
    ],
    includedServices: [
      { title: "Backup strategy and planning", description: "Identify what data and systems need protection, how often they should be backed up and where copies should be stored." },
      { title: "Backup system configuration", description: "Set up backup jobs, schedules, retention policies and storage locations that match the strategy." },
      { title: "Recovery procedure documentation", description: "Write clear steps for how to restore data, who is responsible and what order systems should be recovered." },
      { title: "Recovery testing", description: "Periodically verify that backups can be restored and that restored data is usable and complete." },
      { title: "Data protection review", description: "Review what data exists, where it is stored and what risks it faces from deletion, malware or hardware failure." },
      { title: "Cloud and off-site backup options", description: "Design backup copies stored separately from primary systems to protect against local incidents." },
      { title: "Backup monitoring", description: "Set up alerts and regular checks so backup failures are noticed and addressed quickly." },
      { title: "Business continuity considerations", description: "Connect backup and recovery plans to broader business continuity priorities." },
      { title: "Restore assistance", description: "Provide help when data needs to be recovered, following documented procedures." },
    ],
    benefits: [
      "A backup plan tailored to actual business priorities and risk tolerance",
      "Confidence that recovery steps are documented and understood",
      "Protection against data loss from multiple causes including malware and human error",
      "Reduced uncertainty about what can be recovered and how long it takes",
      "Clear roles and responsibilities when restores are needed",
      "Better coordination between backup, security and infrastructure planning",
    ],
    scenarios: [
      {
        title: "Building a backup plan from scratch",
        description:
          "A business has no formal backup process and needs to protect critical files, email and systems before an incident occurs.",
      },
      {
        title: "Testing recovery procedures",
        description:
          "A company has backups but has never verified that they can actually be restored within an acceptable timeframe.",
      },
      {
        title: "Moving backups off-site",
        description:
          "A business wants copies stored separately from the main office or primary cloud environment to protect against local disasters or ransomware.",
      },
      {
        title: "Recovering from an incident",
        description:
          "A business needs help restoring data and getting systems back online after a failure, deletion or security event.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Map critical data",
        description: "Identify the applications, files, databases and systems the business cannot operate without.",
      },
      {
        step: "02",
        title: "Evaluate coverage",
        description: "Review existing backup tools, schedules, retention periods, storage locations and any recovery history.",
      },
      {
        step: "03",
        title: "Design policy",
        description: "Define backup frequency, retention rules, storage locations, access controls and recovery priorities.",
      },
      {
        step: "04",
        title: "Configure jobs",
        description: "Set up backup jobs, alerting, encryption and access restrictions according to the agreed policy.",
      },
      {
        step: "05",
        title: "Test restore",
        description: "Periodically perform recovery tests to confirm that backups are complete, usable and restorable within acceptable timeframes.",
      },
      {
        step: "06",
        title: "Document runbook",
        description: "Write clear recovery steps, contact lists and responsibilities so the business knows what to do when recovery is needed.",
      },
    ],
    considerations: [
      { title: "Backup is not recovery", description: "Having backups is only useful if you can restore them. Recovery testing is essential." },
      { title: "Off-site and isolated copies", description: "Backups should be stored separately from production systems to protect against ransomware and local disasters." },
      { title: "Access control", description: "Backup access should be restricted to authorized users so backups cannot be deleted or encrypted by attackers." },
      { title: "Retention and compliance", description: "Retention policies should match business and legal requirements without keeping data longer than necessary." },
    ],
    whoFor: [
      "Businesses without a formal backup strategy",
      "Companies that have never tested their ability to restore data",
      "Organizations wanting to protect against ransomware and deletion",
      "Businesses that need off-site or cloud backup options",
      "Companies that need documented recovery procedures",
    ],
    faqs: [
      {
        question: "Why do businesses need backups?",
        answer:
          "Backups protect businesses from data loss caused by hardware failure, accidental deletion, malware and other incidents. They are a basic part of business resilience.",
      },
      {
        question: "How often should businesses back up?",
        answer:
          "Backup frequency depends on how often data changes and how much the business can afford to lose. We help determine a schedule that matches your operations.",
      },
      {
        question: "What is disaster recovery?",
        answer:
          "Disaster recovery is the process of restoring systems and data after a significant disruption. It includes backup restoration, system rebuilds and continuity planning.",
      },
      {
        question: "What is a recovery test?",
        answer:
          "A recovery test verifies that backups can be restored successfully. Without testing, a business cannot be confident that its backup strategy will work.",
      },
      {
        question: "Should backups be stored separately from production systems?",
        answer:
          "Yes. Storing backups separately helps protect them from the same events that affect production systems, such as ransomware or local hardware failures.",
      },
      {
        question: "Can you guarantee 100% data recovery?",
        answer:
          "No. Recovery depends on what was backed up, how recently, whether backups are intact and the nature of the incident. We help you improve your chances through planning and testing.",
      },
    ],
    relatedServices: ["cybersecurity", "it-infrastructure", "cloud-services"],
  },
  {
    slug: "it-management",
    title: "IT Management",
    shortDescription:
      "Ongoing technology administration and oversight for business systems, accounts and vendors.",
    description:
      "Business IT management services that provide ongoing administration, planning and coordination for your technology environment.",
    icon: "Settings",
    seoTitle: "Business IT Management Services",
    seoDescription:
      "Ongoing IT management and technology administration for businesses. Account, domain, email and infrastructure management from Infinity Techiez.",
    overview: [
      "IT management is the ongoing work of keeping business technology organized, secure and aligned with operations. It covers the administration of accounts, domains, email, cloud services and infrastructure, as well as the coordination of vendors, the planning of changes and the documentation of systems.",
      "For many small and medium businesses, this work accumulates over time without a clear owner. A founder or office manager ends up managing passwords, tracking domain renewals, troubleshooting email and chasing vendors. As the business grows, this informal approach becomes risky and inefficient. Mistakes such as missed renewals, stale accounts, unpatched systems or undocumented settings can lead to real disruption.",
      "We act as a practical technology partner for businesses that need reliable oversight without building a large internal IT department. We can take on agreed administration tasks, coordinate with providers, document systems and help plan technology changes so your business can focus on its work rather than wrestling with configuration menus.",
    ],
    includedServices: [
      { title: "Technology administration and oversight", description: "Provide ongoing management of business technology systems, settings and user requests." },
      { title: "Domain, DNS and registrar management", description: "Track renewals, manage records and coordinate domain-related changes." },
      { title: "Email account administration", description: "Create, modify and remove mailboxes, aliases, groups and distribution lists." },
      { title: "User and access management", description: "Manage accounts, permissions and access lifecycles across business services." },
      { title: "Infrastructure administration", description: "Oversee servers, networks, devices and connectivity settings on an ongoing basis." },
      { title: "Vendor coordination", description: "Act as a point of contact with technology vendors and service providers." },
      { title: "Technology planning and budgeting assistance", description: "Help plan upgrades, migrations and technology spending based on business priorities." },
      { title: "Routine maintenance scheduling", description: "Coordinate updates, patches, renewals and other recurring technology tasks." },
      { title: "System documentation", description: "Maintain clear records of systems, access, vendors and configurations." },
    ],
    benefits: [
      "A single point of contact for technology administration and questions",
      "Consistent management of accounts, access and vendors",
      "Proactive planning instead of only reactive problem-solving",
      "Better coordination between multiple technology providers",
      "Clear documentation that helps during audits, transitions or emergencies",
      "A practical alternative to building a full internal IT department",
    ],
    scenarios: [
      {
        title: "No internal IT department",
        description:
          "A small business needs reliable technology administration but cannot justify hiring full-time IT staff.",
      },
      {
        title: "Managing multiple technology vendors",
        description:
          "A company uses several providers for domain, email, hosting, cloud and devices and wants a single coordination point.",
      },
      {
        title: "Planning technology changes",
        description:
          "A business is growing and needs help deciding what technology to add, replace or scale without making expensive mistakes.",
      },
      {
        title: "Employee onboarding and offboarding",
        description:
          "A company needs a repeatable, documented process for creating and removing access across business systems.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Orient",
        description: "Learn the environment, providers, users and the administration work that needs consistent ownership.",
      },
      {
        step: "02",
        title: "Audit",
        description: "Review accounts, access, infrastructure, documentation and any outstanding risks or gaps.",
      },
      {
        step: "03",
        title: "Plan",
        description: "Define the administration scope, standard processes and a technology roadmap aligned with business priorities.",
      },
      {
        step: "04",
        title: "Standardize",
        description: "Set up consistent practices for onboarding, offboarding, change requests, security and vendor communication.",
      },
      {
        step: "05",
        title: "Operate",
        description: "Carry out routine administration, respond to requests and monitor upcoming renewals or maintenance needs.",
      },
      {
        step: "06",
        title: "Report",
        description: "Review completed work, emerging risks and upcoming priorities so business decisions stay informed.",
      },
    ],
    considerations: [
      { title: "Access reviews", description: "User permissions and accounts should be reviewed regularly, especially when employees change roles or leave." },
      { title: "Critical account protection", description: "Administrator and owner accounts should be protected with strong authentication and limited access." },
      { title: "Change documentation", description: "Important changes should be documented so their impact and history are clear." },
      { title: "Vendor access", description: "Third-party and vendor access should be tracked, limited and removed when no longer needed." },
    ],
    whoFor: [
      "Small and medium businesses without a dedicated IT team",
      "Companies using multiple technology vendors that need coordination",
      "Businesses planning growth or technology changes",
      "Organizations needing consistent user and access management",
      "Companies that want technology oversight without hiring full-time staff",
    ],
    faqs: [
      {
        question: "What is IT management?",
        answer:
          "IT management is the ongoing administration, planning and coordination of a company's technology systems, accounts and vendors.",
      },
      {
        question: "What can an IT service provider manage?",
        answer:
          "Depending on the agreement, an IT service provider can manage domains, DNS, email, user accounts, cloud services, infrastructure, vendors and routine maintenance.",
      },
      {
        question: "Is IT management suitable for small businesses?",
        answer:
          "Yes. Many small businesses use managed IT services to get reliable technology administration without the cost of a full-time employee.",
      },
      {
        question: "Can you manage existing technology?",
        answer:
          "Yes. We can take over administration of existing systems, review configurations and improve documentation.",
      },
      {
        question: "Can you work alongside an internal IT team?",
        answer:
          "Yes. We can complement an internal team by handling specific systems, overflow work or specialized tasks.",
      },
      {
        question: "Is this a call center for computer problems?",
        answer:
          "No. This is ongoing business technology administration and coordination, not a consumer help desk or one-off repair service.",
      },
    ],
    relatedServices: ["cloud-services", "cybersecurity", "it-infrastructure", "business-email"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
