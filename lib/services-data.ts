import { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "business-email",
    title: "Business Email",
    shortDescription:
      "Professional business email using your own domain, with setup, migration and administration support.",
    description:
      "Business email services that help your company communicate professionally with a domain-based address, proper authentication and manageable administration.",
    icon: "Mail",
    seoTitle: "Business Email Services",
    seoDescription:
      "Professional business email setup, migration and administration using your own domain. SPF, DKIM and DMARC configuration from Infinity Techiez.",
    overview:
      "Business email is email that uses your company's domain name instead of a generic personal email service. It gives customers, partners and suppliers a clear, professional way to reach you, and it puts your business in control of accounts, addresses and security settings. We help businesses set up, migrate, configure and manage business email in a way that fits their operations.",
    includedServices: [
      "Business email setup",
      "Domain-based email addresses",
      "Mailbox configuration",
      "Email migration planning",
      "DNS and MX record configuration",
      "SPF, DKIM and DMARC configuration",
      "Account administration",
      "Email security settings",
      "Mail client and device configuration",
    ],
    benefits: [
      "Professional business identity in every message",
      "Centralized control over employee email accounts",
      "Improved email authentication and deliverability",
      "Easier onboarding and offboarding of staff",
      "Consistent configuration across devices",
    ],
    scenarios: [
      {
        title: "Starting a new business",
        description:
          "A new company needs professional email addresses that match its domain before launch.",
      },
      {
        title: "Moving from personal email",
        description:
          "A growing business is still using personal email accounts and wants addresses that look professional.",
      },
      {
        title: "Changing email providers",
        description:
          "A business needs to move mailboxes to a different provider without losing messages or disrupting operations.",
      },
      {
        title: "Improving email authentication",
        description:
          "Messages are going to spam or authentication records need to be corrected with SPF, DKIM and DMARC.",
      },
      {
        title: "Employee onboarding and offboarding",
        description:
          "A company needs a repeatable way to create, configure and remove employee mailboxes.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discuss",
        description: "We learn how your business uses email and what needs to change.",
      },
      {
        step: "02",
        title: "Review",
        description: "We assess your current domain, DNS and mailbox setup.",
      },
      {
        step: "03",
        title: "Plan",
        description: "We identify the right email configuration and migration approach.",
      },
      {
        step: "04",
        title: "Implement",
        description: "We configure mailboxes, DNS records and security settings.",
      },
      {
        step: "05",
        title: "Review",
        description: "We confirm deliverability, client setup and next steps.",
      },
    ],
    securityConsiderations: [
      "Strong authentication settings help protect accounts",
      "Email security records reduce spoofing and phishing risk",
      "Access controls support employee onboarding and offboarding",
      "Backup and recovery planning protect business correspondence",
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
    ],
    relatedServices: ["domains-dns", "cybersecurity", "cloud-services", "it-management"],
  },
  {
    slug: "domains-dns",
    title: "Domains & DNS",
    shortDescription:
      "Domain registration support, DNS management and record configuration for business services.",
    description:
      "Domain and DNS services that help businesses own, manage and configure their domain names so websites, email and applications work reliably.",
    icon: "Globe",
    seoTitle: "Domains & DNS Services",
    seoDescription:
      "Business domain management and DNS configuration services from Infinity Techiez. Support for records, transfers, email routing and troubleshooting.",
    overview:
      "A domain name is your business address on the internet. DNS is the system that tells the internet where to send traffic for that domain. If DNS is wrong, your website, email and business applications can stop working. We help businesses register, manage, transfer and troubleshoot domains and DNS so their services stay connected.",
    includedServices: [
      "Domain registration support",
      "Domain management and renewal tracking",
      "DNS configuration",
      "A, CNAME, TXT and MX record setup",
      "SPF, DKIM and DMARC records",
      "Domain transfer assistance",
      "Subdomain configuration",
      "DNS troubleshooting",
      "Domain ownership and access review",
    ],
    benefits: [
      "Centralized management of business domain names",
      "Reliable DNS configuration for websites and email",
      "Easier troubleshooting when services are not reachable",
      "Better control over authentication records",
      "Reduced risk of accidental domain expiration",
    ],
    scenarios: [
      {
        title: "Registering a new domain",
        description:
          "A new business needs a domain name that matches its brand and is configured for email and web services.",
      },
      {
        title: "Fixing email delivery problems",
        description:
          "A company's email is failing because MX, SPF or DKIM records are incorrect or missing.",
      },
      {
        title: "Moving to a new DNS provider",
        description:
          "A business wants better DNS management or needs to move records to a different provider.",
      },
      {
        title: "Adding subdomains",
        description:
          "A business needs subdomains for separate services, applications or marketing pages.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discuss",
        description: "We clarify what you need the domain and DNS to support.",
      },
      {
        step: "02",
        title: "Review",
        description: "We examine current domain registration, DNS records and access.",
      },
      {
        step: "03",
        title: "Plan",
        description: "We identify the correct records, providers and timing.",
      },
      {
        step: "04",
        title: "Implement",
        description: "We configure or update records and verify propagation.",
      },
      {
        step: "05",
        title: "Review",
        description: "We confirm services are reachable and document the setup.",
      },
    ],
    securityConsiderations: [
      "Domain ownership and registrar access should be properly controlled",
      "Authentication records help protect email and services",
      "DNS changes should be planned to avoid service interruption",
      "Domain renewals should be monitored to prevent expiration",
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
    overview:
      "Web hosting is the infrastructure that makes your website or web application available on the internet. For a business site to work, the domain, DNS and hosting must be connected correctly. We help businesses choose, configure, deploy and administer hosting that fits their website and operational needs.",
    includedServices: [
      "Business website hosting setup",
      "Hosting environment configuration",
      "Domain and DNS connection",
      "SSL/TLS certificate configuration",
      "Website deployment assistance",
      "Hosting migrations",
      "Hosting administration",
      "Performance and backup considerations",
      "Basic troubleshooting",
    ],
    benefits: [
      "A hosting setup aligned with your business website needs",
      "Proper domain, DNS and SSL coordination",
      "Easier administration and updates",
      "Support for migrations and changes",
      "Clear documentation of the hosting environment",
    ],
    scenarios: [
      {
        title: "Launching a new business website",
        description:
          "A company needs a hosting environment connected to its domain so the site is publicly accessible.",
      },
      {
        title: "Moving an existing website",
        description:
          "A business wants to move its website to a new host without long downtime or broken services.",
      },
      {
        title: "Securing the site with SSL",
        description:
          "A website needs HTTPS configured so browsers do not show security warnings.",
      },
      {
        title: "Connecting a domain to hosting",
        description:
          "The domain and hosting were purchased separately and need to be linked through DNS.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discuss",
        description: "We review your website, traffic and hosting requirements.",
      },
      {
        step: "02",
        title: "Review",
        description: "We assess your current domain, DNS and any existing hosting.",
      },
      {
        step: "03",
        title: "Plan",
        description: "We identify the hosting option and migration approach.",
      },
      {
        step: "04",
        title: "Implement",
        description: "We set up hosting, connect DNS and configure SSL.",
      },
      {
        step: "05",
        title: "Review",
        description: "We test the site, verify HTTPS and document the setup.",
      },
    ],
    securityConsiderations: [
      "SSL/TLS should be configured so traffic is encrypted",
      "Hosting access should be controlled and documented",
      "Backups should be part of the hosting plan",
      "Software updates and patching need regular attention",
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
    ],
    relatedServices: ["domains-dns", "backup-recovery", "cybersecurity"],
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    shortDescription:
      "Cloud consulting, migration and ongoing management for business applications and infrastructure.",
    description:
      "Cloud services that help businesses use cloud-based applications, storage and infrastructure in a way that supports their operations and budget.",
    icon: "Cloud",
    seoTitle: "Business Cloud Services",
    seoDescription:
      "Cloud consulting, migration and management for business applications and infrastructure. Practical cloud guidance from Infinity Techiez.",
    overview:
      "Cloud services cover a wide range of business technology, from online productivity applications and file storage to cloud infrastructure. For many businesses, the cloud removes the need to own and maintain physical servers, but it also requires careful configuration, access control and cost management. We help businesses evaluate, plan, migrate and manage cloud services that fit their workflows.",
    includedServices: [
      "Cloud service evaluation",
      "Cloud migration planning",
      "Cloud application configuration",
      "User and account administration",
      "Cloud storage setup",
      "Access management",
      "Security and sharing settings",
      "Cloud-to-cloud coordination",
      "Ongoing cloud administration",
    ],
    benefits: [
      "Cloud services matched to business workflows",
      "Reduced reliance on on-site hardware",
      "Centralized user and access management",
      "Easier collaboration and file access",
      "Scalable options as the business grows",
    ],
    scenarios: [
      {
        title: "Moving files to cloud storage",
        description:
          "A business wants team files accessible from anywhere without maintaining an on-site server.",
      },
      {
        title: "Adopting cloud business applications",
        description:
          "A company is moving email, documents or collaboration tools to cloud-based productivity services.",
      },
      {
        title: "Managing cloud accounts",
        description:
          "A business needs help creating, configuring and administering user accounts across cloud services.",
      },
      {
        title: "Planning a cloud migration",
        description:
          "An organization is considering moving workloads to the cloud and needs a practical plan.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discuss",
        description: "We understand your business processes and cloud goals.",
      },
      {
        step: "02",
        title: "Review",
        description: "We assess current systems, data and user needs.",
      },
      {
        step: "03",
        title: "Plan",
        description: "We identify suitable cloud services and a migration timeline.",
      },
      {
        step: "04",
        title: "Implement",
        description: "We configure accounts, migrate data and set access controls.",
      },
      {
        step: "05",
        title: "Review",
        description: "We confirm functionality, train users and document the setup.",
      },
    ],
    securityConsiderations: [
      "Access controls should be reviewed regularly",
      "Sharing and permissions should match business policies",
      "Multi-factor authentication should be used where available",
      "Data should be backed up according to business requirements",
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
    ],
    relatedServices: ["it-infrastructure", "backup-recovery", "it-management"],
  },
  {
    slug: "it-infrastructure",
    title: "IT Infrastructure",
    shortDescription:
      "Business infrastructure services covering servers, networks, devices and connectivity.",
    description:
      "IT infrastructure services that design, deploy and support the servers, networks and systems businesses rely on every day.",
    icon: "Network",
    seoTitle: "Business IT Infrastructure Services",
    seoDescription:
      "IT infrastructure planning, deployment and administration for businesses. Servers, networks, devices and connectivity from Infinity Techiez.",
    overview:
      "IT infrastructure is the combination of servers, networks, devices and connectivity that keeps a business running. Good infrastructure supports applications, communication, data access and security. We help businesses plan, deploy and manage infrastructure that fits their size, workflows and budget without treating technology as a one-size-fits-all solution.",
    includedServices: [
      "Infrastructure planning and assessment",
      "Server configuration and administration",
      "Network design and troubleshooting",
      "Business device setup and management",
      "Connectivity review and coordination",
      "Remote and hybrid infrastructure support",
      "System integration",
      "Infrastructure documentation",
      "Routine maintenance and updates",
    ],
    benefits: [
      "Infrastructure designed around business workflows",
      "Clear documentation of systems and access",
      "Support for remote and distributed teams",
      "Easier troubleshooting and maintenance",
      "Scalable foundation as the business grows",
    ],
    scenarios: [
      {
        title: "Setting up a new office",
        description:
          "A business needs network, servers and devices configured before employees can work productively.",
      },
      {
        title: "Supporting remote workers",
        description:
          "A company needs secure access to business systems for employees working outside the office.",
      },
      {
        title: "Replacing aging servers",
        description:
          "An organization needs to update its infrastructure without unnecessary disruption.",
      },
      {
        title: "Improving network reliability",
        description:
          "A business experiences connectivity problems and needs a structured review and fix.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discuss",
        description: "We learn how your business operates and what infrastructure supports it.",
      },
      {
        step: "02",
        title: "Review",
        description: "We assess existing servers, networks, devices and connectivity.",
      },
      {
        step: "03",
        title: "Plan",
        description: "We design an infrastructure approach that fits your needs and budget.",
      },
      {
        step: "04",
        title: "Implement",
        description: "We configure, deploy and integrate the agreed infrastructure.",
      },
      {
        step: "05",
        title: "Review",
        description: "We test performance, confirm access and document the environment.",
      },
    ],
    securityConsiderations: [
      "Network segmentation and access controls reduce exposure",
      "Device management helps enforce consistent security settings",
      "Patching and updates should be planned regularly",
      "Infrastructure changes should be tested before production use",
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
          "Yes. We design and support infrastructure that lets remote teams access business systems securely and reliably.",
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
    overview:
      "Cybersecurity for business is about reducing the chance that sensitive data, accounts and systems are compromised. It is not a single product or a guarantee. We help businesses take practical steps such as controlling access, strengthening authentication, securing email and building habits that reduce common risks.",
    includedServices: [
      "Security review and risk assessment",
      "Access control configuration",
      "Multi-factor authentication setup",
      "Email security configuration",
      "Domain security review",
      "Endpoint security considerations",
      "Security policy guidance",
      "Security awareness support",
      "Backup and recovery coordination",
    ],
    benefits: [
      "Reduced exposure to common cyber threats",
      "Better control over who can access business systems",
      "Stronger authentication for critical accounts",
      "Improved email and domain security posture",
      "Clearer security practices for employees",
    ],
    scenarios: [
      {
        title: "Strengthening account security",
        description:
          "A business wants to add multi-factor authentication and review access to critical accounts.",
      },
      {
        title: "Securing business email",
        description:
          "A company is concerned about phishing and wants email security and authentication records configured.",
      },
      {
        title: "Reviewing domain security",
        description:
          "A business wants to protect its domain registration and DNS from unauthorized changes.",
      },
      {
        title: "Employee security awareness",
        description:
          "A company needs practical guidance to help staff recognize phishing and handle sensitive information.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discuss",
        description: "We learn what data, systems and accounts are most important to your business.",
      },
      {
        step: "02",
        title: "Review",
        description: "We assess current access controls, authentication and security settings.",
      },
      {
        step: "03",
        title: "Plan",
        description: "We prioritize practical controls that match your risk and budget.",
      },
      {
        step: "04",
        title: "Implement",
        description: "We configure security settings, access controls and authentication.",
      },
      {
        step: "05",
        title: "Review",
        description: "We confirm controls are working and discuss ongoing security habits.",
      },
    ],
    securityConsiderations: [
      "No security measure can guarantee complete protection",
      "Multi-factor authentication significantly reduces account takeover risk",
      "Regular access reviews help remove unnecessary permissions",
      "Backups are a critical part of recovery from security incidents",
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
    overview:
      "A backup is a copy of your business data that can be used to restore systems after data loss, hardware failure or a security incident. Recovery is the process of actually returning that data to a usable state. We help businesses design backup strategies, test recovery procedures and protect data so that recovery is possible when it matters.",
    includedServices: [
      "Backup strategy and planning",
      "Backup system configuration",
      "Recovery procedure documentation",
      "Recovery testing",
      "Data protection review",
      "Cloud and off-site backup options",
      "Backup monitoring",
      "Business continuity considerations",
      "Restore assistance",
    ],
    benefits: [
      "A backup plan tailored to business needs",
      "Confidence that recovery steps are documented",
      "Protection against data loss from multiple causes",
      "Reduced downtime when recovery is needed",
      "Clear roles and responsibilities for restores",
    ],
    scenarios: [
      {
        title: "Building a backup plan from scratch",
        description:
          "A business has no formal backup process and needs to protect critical files, email and systems.",
      },
      {
        title: "Testing recovery procedures",
        description:
          "A company has backups but has never verified that they can actually be restored.",
      },
      {
        title: "Moving backups off-site",
        description:
          "A business wants copies stored separately from the main office to protect against local disasters.",
      },
      {
        title: "Recovering from an incident",
        description:
          "A business needs help restoring data and getting systems back online after a failure or security event.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discuss",
        description: "We identify the data and systems that are critical to your business.",
      },
      {
        step: "02",
        title: "Review",
        description: "We assess current backup tools, schedules and recovery capabilities.",
      },
      {
        step: "03",
        title: "Plan",
        description: "We design a backup and recovery approach that fits your risk tolerance.",
      },
      {
        step: "04",
        title: "Implement",
        description: "We configure backup jobs, storage locations and access controls.",
      },
      {
        step: "05",
        title: "Review",
        description: "We test recovery, document procedures and schedule ongoing checks.",
      },
    ],
    securityConsiderations: [
      "Backups should be stored separately from production systems",
      "Backup access should be restricted to authorized users",
      "Recovery testing should be performed regularly",
      "Encryption should be considered for sensitive backup data",
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
    overview:
      "IT management is the ongoing work of keeping business technology organized, secure and aligned with operations. It includes administering accounts, domains, email and infrastructure, coordinating with vendors, planning changes and documenting systems. We act as a practical technology partner for businesses that need reliable oversight without building a large internal IT department.",
    includedServices: [
      "Technology administration and oversight",
      "Domain, DNS and registrar management",
      "Email account administration",
      "User and access management",
      "Infrastructure administration",
      "Vendor coordination",
      "Technology planning and budgeting support",
      "Routine maintenance scheduling",
      "System documentation",
    ],
    benefits: [
      "A single point of contact for technology administration",
      "Consistent management of accounts and access",
      "Proactive planning instead of reactive fixes",
      "Better vendor and service coordination",
      "Clear documentation for audits and transitions",
    ],
    scenarios: [
      {
        title: "No internal IT department",
        description:
          "A small business needs reliable technology administration without hiring full-time IT staff.",
      },
      {
        title: "Managing multiple technology vendors",
        description:
          "A company uses several providers for domain, email, hosting and cloud and wants coordination.",
      },
      {
        title: "Planning technology changes",
        description:
          "A business is growing and needs help deciding what technology to add, replace or scale.",
      },
      {
        title: "Employee onboarding and offboarding",
        description:
          "A company needs a repeatable process for creating and removing access across systems.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discuss",
        description: "We learn about your environment, providers and administration needs.",
      },
      {
        step: "02",
        title: "Review",
        description: "We assess accounts, access, infrastructure and documentation.",
      },
      {
        step: "03",
        title: "Plan",
        description: "We define an administration plan and technology roadmap.",
      },
      {
        step: "04",
        title: "Implement",
        description: "We take on agreed administration tasks and coordinate changes.",
      },
      {
        step: "05",
        title: "Review",
        description: "We report on work completed, review risks and plan next steps.",
      },
    ],
    securityConsiderations: [
      "Access reviews should be performed regularly",
      "Critical accounts should be protected with strong authentication",
      "Changes should be documented for accountability",
      "Vendor access should be tracked and limited",
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
    ],
    relatedServices: ["cloud-services", "cybersecurity", "it-infrastructure", "business-email"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
