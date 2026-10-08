import { LandingPage } from "@/types";
import { businessInfo } from "@/lib/config";

const baseBreadcrumbs = (title: string, slug: string) => [
  { label: "Home", href: "/" },
  { label: "IT Services", href: "/it-services" },
  { label: title, href: `/it-services/${slug}` },
];

export const landingPages: LandingPage[] = [
  {
    slug: "business-email-setup",
    image: {
      src: "/images/email-work.jpg",
      alt: "Professional configuring business email accounts on a laptop",
    },
    title: "Business Email Setup & Configuration",
    eyebrow: "Business Email Services",
    shortDescription:
      "Professional business email setup and configuration using your own domain, with mailbox creation, DNS records and email client setup.",
    intro: [
      "Business email is often the first technology a new company needs and one of the last ones to be set up correctly. A professional address such as name@yourcompany.com reinforces your brand every time you send a message, but the setup behind it involves more than creating an inbox. It requires the right platform, correct DNS records, authentication settings and a clear account structure that will scale as your team grows.",
      "Infinity Techiez provides independent business technology services that help organizations establish, configure and administer business email environments. We are not an email provider, a domain registrar or a reseller of consumer email accounts. Our role is to assess your needs, connect the technical pieces and document the setup so your team can use it reliably.",
    ],
    serviceCategory: "Business Email",
    searchIntent: "business email setup, configure business email, domain email setup",
    whatWeHelpWith: [
      {
        title: "Domain-based email addresses",
        description: "Create professional addresses that match your business domain, including user mailboxes, aliases and distribution groups.",
      },
      {
        title: "Mailbox and account setup",
        description: "Configure mailbox sizes, signatures, retention and client settings based on how your team works.",
      },
      {
        title: "DNS and MX record configuration",
        description: "Connect your domain to the correct email servers so incoming and outgoing messages route reliably.",
      },
      {
        title: "Email authentication",
        description: "Configure SPF, DKIM and DMARC records to improve deliverability and reduce spoofing risk.",
      },
      {
        title: "Email client configuration",
        description: "Set up desktops, laptops, phones and tablets with consistent settings for webmail, Outlook or mobile apps.",
      },
      {
        title: "Migration planning",
        description: "Plan the move from an existing provider to a new email environment with minimal disruption.",
      },
    ],
    benefits: [
      "Professional business identity in every message",
      "Centralized control over accounts and aliases",
      "Proper authentication to improve deliverability",
      "Consistent configuration across devices",
      "Clear separation between business and personal email",
      "Documented setup that simplifies future changes",
    ],
    scenarios: [
      {
        title: "Starting a new business",
        description: "A new company needs professional email addresses that match its domain before it begins communicating with customers and suppliers.",
      },
      {
        title: "Moving from personal email",
        description: "A growing business is still using personal addresses and wants a more professional appearance with centralized control.",
      },
      {
        title: "Setting up email for a new team",
        description: "An organization needs multiple mailboxes, aliases and access controls configured correctly from the start.",
      },
    ],
    detailedSections: [
      {
        title: "Choosing the right email platform",
        paragraphs: [
          "The right email platform depends on your business size, the applications you already use, your security requirements and your budget. Options range from hosted productivity suites to domain-based email through your hosting provider or a dedicated business email service.",
          "We help you evaluate options based on practical factors such as mailbox limits, mobile access, admin controls, integration with your existing tools and migration complexity. We do not claim official partnership with any email provider unless verified.",
        ],
      },
      {
        title: "The role of DNS in email setup",
        paragraphs: [
          "DNS records are the invisible instructions that tell the internet where to deliver your email. MX records control mail delivery, while TXT records handle verification and authentication. Getting these records right is essential before users can send or receive mail.",
          "We plan DNS changes carefully, checking TTL values and scheduling updates to minimize the window where messages might be delayed or rejected.",
        ],
      },
    ],
    process: [
      { step: "01", title: "Audit", description: "Review existing domains, DNS records and current email setup to identify gaps and requirements." },
      { step: "02", title: "Design", description: "Plan the mailbox structure, aliases, groups, security settings and migration approach if needed." },
      { step: "03", title: "Provision", description: "Create accounts, configure DNS records and prepare the email environment before users switch over." },
      { step: "04", title: "Configure clients", description: "Set up desktops, phones and tablets with consistent settings and test send/receive functionality." },
      { step: "05", title: "Authenticate", description: "Configure and test SPF, DKIM and DMARC records so legitimate messages are trusted." },
      { step: "06", title: "Hand over", description: "Document the setup, train administrators if needed and establish a clear process for account changes." },
    ],
    technicalConsiderations: [
      { title: "DNS TTL values", description: "Lower TTL values before making MX changes to reduce propagation time and enable faster rollback if needed." },
      { title: "Authentication records", description: "SPF, DKIM and DMARC should be configured before or during migration to avoid deliverability issues." },
      { title: "Mailbox size limits", description: "Different providers enforce different limits; review your data volume before choosing a platform." },
      { title: "Device access", description: "Ensure users understand how to access email on web, desktop and mobile after the change." },
    ],
    securityConsiderations: [
      { title: "Multi-factor authentication", description: "Enable MFA for administrator and user accounts where available to reduce account takeover risk." },
      { title: "Access reviews", description: "Review who has access to mailboxes, aliases and admin consoles regularly, especially when staff change roles." },
      { title: "Phishing awareness", description: "Technical controls help, but user awareness remains a key part of reducing successful phishing attacks." },
    ],
    whoItIsFor: [
      "Small businesses establishing their first professional email environment",
      "Growing companies moving away from personal email addresses",
      "Organizations changing email providers or consolidating platforms",
      "Businesses experiencing deliverability or spam issues",
      "Companies that need centralized control over employee accounts",
    ],
    relatedServices: ["business-email", "domains-dns", "cybersecurity"],
    faqs: [
      {
        question: "What is business email setup?",
        answer:
          "Business email setup is the process of configuring a professional email environment that uses your company's domain name. It includes mailbox creation, DNS configuration, authentication records and client setup so your team can send and receive email reliably.",
      },
      {
        question: "Can I use my own domain for business email?",
        answer:
          "Yes. If you already own a domain, we can configure business email to use it. If you do not have a domain, we can help with domain selection and registration as part of the setup process.",
      },
      {
        question: "What are MX records and why do they matter?",
        answer:
          "MX records tell the internet where to deliver email sent to your domain. If they are incorrect, your business email may not work. We configure MX records as part of connecting your domain to the email platform.",
      },
      {
        question: "What are SPF, DKIM and DMARC?",
        answer:
          "SPF, DKIM and DMARC are DNS records that help email providers verify that messages from your domain are legitimate. They improve deliverability and reduce the chance that attackers can send messages that appear to come from your business.",
      },
      {
        question: "How long does business email setup take?",
        answer:
          "Setup time depends on the number of mailboxes, the complexity of DNS changes and whether migration is required. A straightforward setup for a small team can often be completed in a few days once planning is done.",
      },
      {
        question: "Can you migrate existing mailboxes?",
        answer:
          "Yes. We can plan and carry out email migrations, moving messages, calendars and contacts from an existing provider while minimizing disruption.",
      },
    ],
    ctaTitle: "Need business email set up correctly?",
    ctaDescription:
      "Tell us about your current setup and we can recommend a practical email configuration plan for your business.",
    seoTitle: "Business Email Setup & Configuration",
    seoDescription:
      "Professional business email setup using your own domain. Mailbox creation, DNS configuration, authentication records and client setup from Infinity Techiez.",
    canonical: `${businessInfo.siteUrl}/it-services/business-email-setup`,
    breadcrumbs: baseBreadcrumbs("Business Email Setup", "business-email-setup"),
  },
  {
    slug: "business-email-migration",
    image: {
      src: "/images/handshake.jpg",
      alt: "Consultants agreeing on a business email migration plan",
    },
    title: "Business Email Migration Services",
    eyebrow: "Email Migration",
    shortDescription:
      "Planned business email migration between providers, including mailbox inventory, DNS planning and post-migration verification.",
    intro: [
      "Email migration is one of the most sensitive technology changes a business can make. Messages, calendars, contacts and years of correspondence need to move from one platform to another without being lost or corrupted. At the same time, users need to keep working and external senders need to keep reaching you.",
      "Infinity Techiez provides independent business email migration services for organizations moving between providers or consolidating email platforms. We do not promise zero downtime or guaranteed outcomes; instead, we plan the work carefully, communicate timing clearly and verify the result before final handover.",
    ],
    serviceCategory: "Business Email",
    searchIntent: "business email migration, move email to new provider, email platform migration",
    whatWeHelpWith: [
      {
        title: "Migration planning",
        description: "Define scope, timeline, user impact and rollback options before any changes are made.",
      },
      {
        title: "Mailbox inventory",
        description: "List existing mailboxes, aliases, groups and data volumes so nothing is missed.",
      },
      {
        title: "DNS and domain planning",
        description: "Prepare MX, SPF, DKIM and DMARC changes needed for the new platform.",
      },
      {
        title: "Account preparation",
        description: "Create destination accounts, configure licenses and set up access before the move.",
      },
      {
        title: "Post-migration checks",
        description: "Verify that mailboxes, folders, calendars and contacts arrived correctly and users can access them.",
      },
      {
        title: "Authentication verification",
        description: "Confirm that SPF, DKIM and DMARC records are working on the new platform.",
      },
    ],
    benefits: [
      "Planned migration with less disruption to daily work",
      "Reduced risk of lost messages or missing data",
      "Proper authentication and deliverability after the move",
      "Clear documentation of the new environment",
      "Support for staff during and after the transition",
      "Rollback options considered before changes are made",
    ],
    scenarios: [
      {
        title: "Moving to a new email provider",
        description: "A business wants to move from an existing provider to a different platform for cost, features or manageability.",
      },
      {
        title: "Consolidating multiple email systems",
        description: "An organization has multiple email accounts or providers and wants to consolidate into one manageable environment.",
      },
      {
        title: "Merging after an acquisition",
        description: "Two businesses need to combine email environments while preserving messages and minimizing confusion.",
      },
    ],
    detailedSections: [
      {
        title: "Planning before migration",
        paragraphs: [
          "A successful migration starts with a clear inventory of what exists today: mailboxes, aliases, distribution lists, shared mailboxes, calendars, contacts and data volumes. Knowing what you have prevents surprises during the move.",
          "We also map dependencies such as forwarding rules, third-party integrations, mobile device profiles and client settings that may need to be recreated on the new platform.",
        ],
      },
      {
        title: "DNS timing and cutover",
        paragraphs: [
          "DNS changes control when email starts arriving at the new system. We plan MX record updates carefully, lowering TTL values in advance where possible and scheduling cutover during low-traffic periods.",
          "After cutover, we monitor delivery and verify that senders can reach the new mailboxes without excessive delay or rejection.",
        ],
      },
      {
        title: "What migration cannot do",
        paragraphs: [
          "No migration can guarantee that every message from every sender arrives instantly or that third-party systems will recognize the change immediately. Propagation and external caching are outside our control.",
          "We aim to reduce risk through planning, testing and communication rather than making guarantees that depend on factors outside anyone's control.",
        ],
      },
    ],
    process: [
      { step: "01", title: "Scope", description: "Define which mailboxes, data and services need to move and what stays behind." },
      { step: "02", title: "Inventory", description: "List existing accounts, aliases, groups, data volumes and special configurations." },
      { step: "03", title: "Design", description: "Plan the destination structure, user mapping, DNS changes and authentication approach." },
      { step: "04", title: "Prepare", description: "Create destination accounts, configure licenses and set up security settings." },
      { step: "05", title: "Migrate", description: "Move messages, calendars and contacts in planned phases with communication to users." },
      { step: "06", title: "Validate", description: "Verify mail flow, client access, authentication and data completeness before closing the project." },
    ],
    technicalConsiderations: [
      { title: "Data volume", description: "Large mailboxes and archives can extend migration time; plan bandwidth and timing accordingly." },
      { title: "Third-party integrations", description: "Email connected to CRM, marketing or backup tools may need reconfiguration after migration." },
      { title: "Authentication timing", description: "SPF, DKIM and DMARC should be ready on the new platform before or immediately after cutover." },
      { title: "Rollback planning", description: "Know how to revert MX and other DNS changes if the migration encounters unexpected issues." },
    ],
    securityConsiderations: [
      { title: "Access during transition", description: "Limit admin access during migration and ensure MFA is enabled on both old and new systems." },
      { title: "Phishing windows", description: "Migration periods can create confusion that attackers exploit; brief users on what to expect." },
      { title: "Data retention", description: "Decide what happens to old mailboxes and archives after the move is complete." },
    ],
    whoItIsFor: [
      "Businesses changing email providers",
      "Organizations consolidating multiple email systems",
      "Companies merging or acquiring other businesses",
      "Businesses with large or complex mailbox environments",
      "Teams that want a documented, planned migration rather than an ad-hoc move",
    ],
    relatedServices: ["business-email", "business-email-setup", "domains-dns"],
    faqs: [
      {
        question: "Can you guarantee zero downtime during migration?",
        answer:
          "No. Email delivery depends on DNS propagation and external senders, which are outside anyone's complete control. We plan migrations to minimize disruption and monitor delivery after cutover, but we do not guarantee zero downtime.",
      },
      {
        question: "How long does email migration take?",
        answer:
          "Timing depends on mailbox count, data volume, the platforms involved and your business schedule. A small migration may take days; larger environments can take weeks.",
      },
      {
        question: "Will I lose email during migration?",
        answer:
          "With proper planning, the risk of lost email is low. We verify data after migration and maintain rollback options where possible. However, no provider can guarantee that no message will ever be delayed or lost.",
      },
      {
        question: "Can you migrate calendars and contacts too?",
        answer:
          "Yes. Depending on the platforms involved, we can migrate calendars, contacts and other mailbox data where the destination system supports it.",
      },
      {
        question: "What happens to old email after migration?",
        answer:
          "Old mailboxes can typically be kept as read-only archives or exported for retention. We help you decide what to keep, where to store it and how to access it if needed.",
      },
    ],
    ctaTitle: "Planning a business email migration?",
    ctaDescription:
      "Tell us about your current environment and where you want to move. We can outline a practical migration plan.",
    seoTitle: "Business Email Migration Services",
    seoDescription:
      "Planned business email migration between providers. Mailbox inventory, DNS planning, authentication and post-migration verification from Infinity Techiez.",
    canonical: `${businessInfo.siteUrl}/it-services/business-email-migration`,
    breadcrumbs: baseBreadcrumbs("Business Email Migration", "business-email-migration"),
  },
  {
    slug: "business-email-administration",
    image: {
      src: "/images/tech-services.jpg",
      alt: "Technician administering business email systems",
    },
    title: "Business Email Administration Services",
    eyebrow: "Email Management",
    shortDescription:
      "Ongoing business email administration for mailboxes, users, aliases, DNS records and authentication settings.",
    intro: [
      "Once business email is set up, it still needs ongoing administration. Users join and leave, aliases need updates, DNS records change, authentication needs review and security settings must keep pace with evolving threats. Without a clear owner, these tasks can accumulate until something breaks or is compromised.",
      "Infinity Techiez provides independent business email administration for organizations that need reliable ongoing management without building a large internal IT department. We handle the routine work, document changes and help you stay in control of your email environment.",
    ],
    serviceCategory: "Business Email",
    searchIntent: "business email administration, manage business email, email account management",
    whatWeHelpWith: [
      {
        title: "Mailbox administration",
        description: "Create, modify and remove mailboxes, aliases, groups and distribution lists as your team changes.",
      },
      {
        title: "User and access management",
        description: "Manage permissions, shared mailboxes, forwarding and access levels across your email platform.",
      },
      {
        title: "DNS and authentication maintenance",
        description: "Review and update MX, SPF, DKIM and DMARC records as providers or services change.",
      },
      {
        title: "Email client configuration",
        description: "Set up and troubleshoot desktop, web and mobile email access for users.",
      },
      {
        title: "Security settings review",
        description: "Check MFA, password policies, external sharing and admin access to reduce risk.",
      },
      {
        title: "Ongoing monitoring",
        description: "Watch for deliverability issues, bounce patterns and authentication failures that need attention.",
      },
    ],
    benefits: [
      "Consistent administration without hiring a full-time specialist",
      "Faster onboarding and offboarding for employees",
      "Reduced risk of misconfigured DNS or stale authentication records",
      "Better control over who can access mailboxes and admin settings",
      "Documented processes for common changes",
      "Proactive review instead of reactive troubleshooting",
    ],
    scenarios: [
      {
        title: "No dedicated email admin",
        description: "A small business needs someone to manage email accounts, aliases and settings without hiring full-time staff.",
      },
      {
        title: "Frequent team changes",
        description: "A company with regular hiring or turnover needs a reliable process for creating and removing mailboxes.",
      },
      {
        title: "Improving email security",
        description: "An organization wants to review admin access, enable MFA and update authentication records.",
      },
    ],
    detailedSections: [
      {
        title: "What email administration includes",
        paragraphs: [
          "Email administration covers the ongoing work of keeping your email environment organized, secure and functional. It includes mailbox lifecycle management, user permissions, DNS record maintenance, client configuration and periodic security reviews.",
          "We can take over routine tasks, coordinate with providers and document your setup so changes are made consistently and safely.",
        ],
      },
      {
        title: "Why ongoing management matters",
        paragraphs: [
          "Email systems drift over time. DNS records become stale, authentication settings are left unchanged after a migration, old accounts remain active and admin access is not reviewed. These small gaps can cause deliverability issues, security risks or operational confusion.",
          "Regular administration helps catch these issues early and keeps your email environment aligned with how your business actually works.",
        ],
      },
    ],
    process: [
      { step: "01", title: "Audit", description: "Review current mailboxes, accounts, DNS records, authentication and admin access." },
      { step: "02", title: "Document", description: "Record the existing structure, providers, contacts and configuration for reference." },
      { step: "03", title: "Plan", description: "Define the administration scope, standard processes and review schedule." },
      { step: "04", title: "Standardize", description: "Set up consistent practices for onboarding, offboarding, changes and security checks." },
      { step: "05", title: "Operate", description: "Carry out routine administration, respond to requests and monitor for issues." },
      { step: "06", title: "Report", description: "Review completed work, risks and upcoming priorities so decisions stay informed." },
    ],
    technicalConsiderations: [
      { title: "Admin access control", description: "Limit admin privileges to only those who need them and enable MFA on admin accounts." },
      { title: "Alias and group hygiene", description: "Review aliases and distribution groups regularly so messages reach the right people." },
      { title: "Authentication drift", description: "SPF, DKIM and DMARC records can become outdated when services change; review them periodically." },
      { title: "Client consistency", description: "Standardize how users access email on different devices to reduce confusion and support requests." },
    ],
    securityConsiderations: [
      { title: "Account offboarding", description: "Disable or convert mailboxes promptly when employees leave and preserve necessary records." },
      { title: "Forwarding rules", description: "Review automatic forwarding to prevent unauthorized data access or external exposure." },
      { title: "Sharing permissions", description: "Control who can share mailboxes or send on behalf of others to reduce misuse." },
    ],
    whoItIsFor: [
      "Small businesses without a dedicated email administrator",
      "Companies with frequent staff changes",
      "Organizations that want better control over email security",
      "Businesses using multiple providers that need coordination",
      "Teams that want documented email administration processes",
    ],
    relatedServices: ["business-email", "it-management", "cybersecurity"],
    faqs: [
      {
        question: "What does business email administration include?",
        answer:
          "It includes mailbox creation and removal, user and alias management, DNS record maintenance, authentication review, client configuration and ongoing security checks for your email environment.",
      },
      {
        question: "Can you manage existing email accounts?",
        answer:
          "Yes. We can take over administration of existing mailboxes, domains and DNS records, review current settings and document the environment.",
      },
      {
        question: "How often should email settings be reviewed?",
        answer:
          "We recommend reviewing admin access, authentication records and account settings at least quarterly, and whenever staff or providers change.",
      },
      {
        question: "Can you help with employee onboarding and offboarding?",
        answer:
          "Yes. We can create and remove mailboxes, transfer data where needed and ensure access is properly managed when people join or leave.",
      },
      {
        question: "Do you work with all email platforms?",
        answer:
          "We work with common business email platforms including Microsoft 365, Google Workspace and domain-based email systems. We do not claim official partnership with specific providers unless verified.",
      },
    ],
    ctaTitle: "Need help managing business email?",
    ctaDescription:
      "Tell us about your current setup and we can recommend an administration plan that fits your team.",
    seoTitle: "Business Email Administration Services",
    seoDescription:
      "Ongoing business email administration for mailboxes, users, aliases, DNS and authentication. Independent management from Infinity Techiez.",
    canonical: `${businessInfo.siteUrl}/it-services/business-email-administration`,
    breadcrumbs: baseBreadcrumbs("Business Email Administration", "business-email-administration"),
  },
  {
    slug: "business-email-dns",
    image: {
      src: "/images/abstract-tech.jpg",
      alt: "Abstract circuit board representing DNS and email routing",
    },
    title: "Business Email DNS Configuration",
    eyebrow: "Email DNS",
    shortDescription:
      "MX, SPF, DKIM, DMARC and other DNS record setup for business email so messages deliver reliably and authenticate correctly.",
    intro: [
      "Email does not work without the right DNS records. MX records tell the world where to deliver your mail. SPF, DKIM and DMARC records tell receiving servers that your messages are legitimate. TXT records handle verification for third-party services. When these records are missing or wrong, email fails silently or lands in spam.",
      "Infinity Techiez provides independent DNS configuration services for business email. We are not a DNS provider or domain registrar; we help you understand and configure the records needed for reliable email delivery and authentication.",
    ],
    serviceCategory: "Business Email",
    searchIntent: "business email DNS, MX record setup, SPF DKIM DMARC configuration",
    whatWeHelpWith: [
      {
        title: "MX record setup",
        description: "Configure MX records to direct incoming email to the correct servers for your platform.",
      },
      {
        title: "SPF, DKIM and DMARC records",
        description: "Set up authentication records so your messages are trusted and spoofing is harder.",
      },
      {
        title: "TXT and verification records",
        description: "Add TXT records needed for domain verification, third-party services and email security tools.",
      },
      {
        title: "A and CNAME records",
        description: "Configure records for webmail portals, autodiscover and other email-related services.",
      },
      {
        title: "DNS troubleshooting",
        description: "Diagnose why email is not delivering, bouncing or failing authentication checks.",
      },
      {
        title: "Propagation planning",
        description: "Plan record changes with appropriate TTL values to minimize delay and enable rollback if needed.",
      },
    ],
    benefits: [
      "Reliable email delivery to and from your domain",
      "Improved deliverability through proper authentication",
      "Reduced risk of domain spoofing and phishing",
      "Clear documentation of DNS configuration",
      "Faster troubleshooting when email problems occur",
      "Coordinated DNS changes that avoid service interruption",
    ],
    scenarios: [
      {
        title: "Email not delivering",
        description: "Messages are bouncing, delayed or landing in spam because DNS records are missing or incorrect.",
      },
      {
        title: "Moving to a new email platform",
        description: "A business is changing providers and needs DNS records updated to point to the new service.",
      },
      {
        title: "Adding authentication",
        description: "A company wants to add SPF, DKIM and DMARC to improve deliverability and reduce spoofing risk.",
      },
    ],
    detailedSections: [
      {
        title: "Core DNS records for email",
        paragraphs: [
          "MX records control where email is delivered. SPF records specify which servers can send mail for your domain. DKIM adds a cryptographic signature to outgoing messages. DMARC tells receiving servers how to handle messages that fail SPF or DKIM checks.",
          "TXT records are also used for domain verification with email providers, security tools and other services. A and CNAME records may be needed for webmail portals, autodiscover endpoints and mobile device management.",
        ],
      },
      {
        title: "DNS propagation and timing",
        paragraphs: [
          "DNS changes do not take effect instantly. TTL (time to live) values determine how long other servers cache old records. Lowering TTL before making changes can reduce the window where old and new records coexist.",
          "We plan DNS updates with timing in mind, scheduling changes during low-traffic periods and verifying propagation from multiple locations before declaring the work complete.",
        ],
      },
    ],
    process: [
      { step: "01", title: "Discover", description: "Identify your DNS provider, domain registrar and current email records." },
      { step: "02", title: "Inspect", description: "Review existing MX, TXT, SPF, DKIM and DMARC records for accuracy." },
      { step: "03", title: "Plan", description: "Map the required records, TTL values and update sequence for your email platform." },
      { step: "04", title: "Update", description: "Make DNS changes with careful timing and document what was changed." },
      { step: "05", title: "Validate", description: "Test email delivery, authentication and external lookups to confirm the setup works." },
      { step: "06", title: "Document", description: "Record the final configuration, provider contacts and renewal dates for future reference." },
    ],
    technicalConsiderations: [
      { title: "TTL management", description: "Lower TTL values before making changes so old records expire faster and rollback is easier." },
      { title: "Multiple senders", description: "If you use multiple email services or third-party tools, SPF records must include all authorized senders." },
      { title: "DMARC policy", description: "Start with a monitoring policy before enforcing rejection to avoid blocking legitimate email." },
      { title: "Subdomain separation", description: "Consider using subdomains for different services or environments to simplify DNS management." },
    ],
    securityConsiderations: [
      { title: "Domain access control", description: "Restrict who can modify DNS records at your registrar or DNS provider and enable MFA." },
      { title: "SPF and DKIM coverage", description: "Ensure all legitimate senders are covered and unauthorized senders are excluded." },
      { title: "DMARC reporting", description: "Configure DMARC reports so you can see how your domain is being used and by whom." },
    ],
    whoItIsFor: [
      "Businesses setting up email for the first time",
      "Companies moving to a new email provider",
      "Organizations experiencing deliverability problems",
      "Businesses that want to add SPF, DKIM and DMARC",
      "Companies that need DNS records documented and managed",
    ],
    relatedServices: ["domains-dns", "business-email-setup", "business-email-migration"],
    faqs: [
      {
        question: "What DNS records do I need for business email?",
        answer:
          "At minimum, you need MX records to direct incoming mail. Most businesses also benefit from SPF, DKIM and DMARC records for authentication and deliverability. Additional TXT or CNAME records may be needed for webmail, autodiscover or third-party services.",
      },
      {
        question: "How long do DNS changes take to work?",
        answer:
          "DNS changes can take minutes to hours depending on TTL settings and provider caching. We do not guarantee specific propagation times, but we plan changes to minimize disruption.",
      },
      {
        question: "Can you fix email deliverability problems?",
        answer:
          "Often, yes. Many deliverability issues are caused by missing or incorrect SPF, DKIM or DMARC records. We can review your DNS setup and correct what is wrong.",
      },
      {
        question: "What is the difference between SPF, DKIM and DMARC?",
        answer:
          "SPF lists which servers can send email for your domain. DKIM adds a digital signature to messages. DMARC tells receiving servers what to do when SPF or DKIM checks fail and can provide reports on email activity.",
      },
      {
        question: "Can you help if email is going to spam?",
        answer:
          "We can review your DNS records, authentication settings and sending practices to identify common causes of spam filtering. We cannot guarantee placement, but we can improve the factors within your control.",
      },
    ],
    ctaTitle: "Need email DNS configured correctly?",
    ctaDescription:
      "Tell us about your current setup and we can review or configure the DNS records needed for reliable business email.",
    seoTitle: "Business Email DNS Configuration",
    seoDescription:
      "MX, SPF, DKIM and DMARC record setup for business email. DNS configuration, troubleshooting and authentication from Infinity Techiez.",
    canonical: `${businessInfo.siteUrl}/it-services/business-email-dns`,
    breadcrumbs: baseBreadcrumbs("Business Email DNS", "business-email-dns"),
  },
  {
    slug: "email-security-authentication",
    image: {
      src: "/images/cybersecurity.jpg",
      alt: "Cybersecurity concept for protecting business email accounts",
    },
    title: "Email Security & Authentication",
    eyebrow: "Email Security",
    shortDescription:
      "SPF, DKIM, DMARC, domain authentication and access controls to reduce spoofing, phishing and email account risk.",
    intro: [
      "Email is the most common way attackers target businesses. Spoofed messages, phishing links and compromised accounts can lead to data loss, financial harm and damaged reputation. Technical controls such as SPF, DKIM and DMARC help, but they are only part of a broader security approach.",
      "Infinity Techiez provides independent email security and authentication services for businesses that want practical protection without fear-based selling. We do not claim that these controls eliminate all phishing or email threats; instead, we help you implement sensible measures that reduce common risks.",
    ],
    serviceCategory: "Business Email Security",
    searchIntent: "email security, SPF DKIM DMARC, email authentication, phishing protection",
    whatWeHelpWith: [
      {
        title: "SPF, DKIM and DMARC configuration",
        description: "Set up authentication records that verify your messages and reduce the risk of domain spoofing.",
      },
      {
        title: "Domain authentication review",
        description: "Check that your domain and DNS records are configured to resist unauthorized use.",
      },
      {
        title: "Access control setup",
        description: "Review who can access mailboxes, admin consoles and account recovery options.",
      },
      {
        title: "Multi-factor authentication",
        description: "Enable MFA on email accounts and admin roles where the platform supports it.",
      },
      {
        title: "Phishing risk reduction",
        description: "Configure filtering, reporting and user practices that make phishing less effective.",
      },
      {
        title: "Security configuration review",
        description: "Assess forwarding rules, external sharing, mailbox permissions and other risky settings.",
      },
    ],
    benefits: [
      "Reduced risk of domain spoofing and impersonation",
      "Better control over who can access business email",
      "Improved deliverability for legitimate messages",
      "Clearer visibility into how your domain is being used",
      "Practical security measures without overpromising",
      "Documentation of security settings and access controls",
    ],
    scenarios: [
      {
        title: "Concerned about phishing",
        description: "A business wants to reduce the risk of employees or customers falling for fake messages that appear to come from its domain.",
      },
      {
        title: "Email going to spam",
        description: "A company's legitimate messages are being flagged as spam or rejected because authentication is missing or incorrect.",
      },
      {
        title: "Account compromise",
        description: "A business has had email accounts accessed by unauthorized users and wants to strengthen security.",
      },
    ],
    detailedSections: [
      {
        title: "How email authentication works",
        paragraphs: [
          "SPF lists the servers allowed to send email for your domain. DKIM adds a cryptographic signature to outgoing messages so receiving servers can verify they were not altered. DMARC ties the two together and tells receivers how to handle messages that fail checks.",
          "These records are configured in DNS. They do not stop phishing entirely, but they make it much harder for attackers to send messages that appear to come from your domain.",
        ],
      },
      {
        title: "The limits of technical controls",
        paragraphs: [
          "No authentication setup can guarantee that no phishing message will ever be delivered or opened. Attackers can use lookalike domains, compromised accounts or social engineering that technical records cannot prevent.",
          "A practical approach combines authentication, access controls, filtering, monitoring and user awareness. We help you implement the parts that fit your environment and risk tolerance.",
        ],
      },
      {
        title: "Ongoing email security",
        paragraphs: [
          "Security is not a one-time configuration. DNS records change when providers change. New sending services need to be added to SPF. Admin access needs review. DMARC policies may need adjustment as your email usage evolves.",
          "We recommend periodic reviews of authentication records, admin access and forwarding rules so your security posture does not silently degrade.",
        ],
      },
    ],
    process: [
      { step: "01", title: "Assess", description: "Review current DNS records, email accounts, admin access and security settings." },
      { step: "02", title: "Identify gaps", description: "Find missing authentication, weak access controls or risky configurations." },
      { step: "03", title: "Plan", description: "Decide which controls to implement first based on risk and business impact." },
      { step: "04", title: "Configure", description: "Set up SPF, DKIM, DMARC, MFA and access policies as agreed." },
      { step: "05", title: "Validate", description: "Test that authentication works and messages still deliver correctly." },
      { step: "06", title: "Monitor", description: "Review DMARC reports and security settings periodically to catch drift." },
    ],
    technicalConsiderations: [
      { title: "SPF record limits", description: "SPF has a DNS lookup limit; too many includes can cause failures. Keep records concise." },
      { title: "DKIM key management", description: "DKIM keys should be rotated periodically and stored securely at your provider." },
      { title: "DMARC policy progression", description: "Start with p=none for monitoring, then move to quarantine or reject as confidence grows." },
      { title: "Third-party senders", description: "Marketing tools, CRMs and other services that send on your behalf must be included in SPF and DKIM." },
    ],
    securityConsiderations: [
      { title: "Admin account protection", description: "Email admin accounts are high-value targets; enforce MFA and limit access." },
      { title: "Forwarding and delegation", description: "Review who can forward mail or access others' mailboxes to prevent data exposure." },
      { title: "User awareness", description: "Technical controls help, but user training remains important for recognizing phishing attempts." },
    ],
    whoItIsFor: [
      "Businesses concerned about phishing and spoofing",
      "Companies whose email is going to spam or being rejected",
      "Organizations that have experienced email account compromise",
      "Businesses that want to add SPF, DKIM and DMARC",
      "Companies that need a practical email security review",
    ],
    relatedServices: ["cybersecurity", "business-email", "domains-dns"],
    faqs: [
      {
        question: "Can SPF, DKIM and DMARC stop all phishing?",
        answer:
          "No. These records make it harder to spoof your domain, but they cannot stop phishing from lookalike domains, compromised accounts or social engineering. They are one part of a broader security approach.",
      },
      {
        question: "Will adding DMARC break my email?",
        answer:
          "If configured incorrectly, DMARC can cause legitimate email to be rejected. We recommend starting with a monitoring policy and tightening it gradually once you understand how your domain is being used.",
      },
      {
        question: "How do I know if my email is being spoofed?",
        answer:
          "DMARC reports can show you who is sending email claiming to be from your domain. We can help configure reporting and interpret the results.",
      },
      {
        question: "What is the difference between SPF and DKIM?",
        answer:
          "SPF specifies which servers are allowed to send email for your domain. DKIM adds a cryptographic signature to each message so receivers can verify it was not altered in transit.",
      },
      {
        question: "Can you review our email security settings?",
        answer:
          "Yes. We can review your DNS records, admin access, forwarding rules, MFA status and other security-related configurations to identify gaps and recommend improvements.",
      },
    ],
    ctaTitle: "Ready to strengthen email security?",
    ctaDescription:
      "Tell us about your current setup and we can review authentication, access and configuration to reduce common risks.",
    seoTitle: "Email Security & Authentication Services",
    seoDescription:
      "SPF, DKIM, DMARC, domain authentication and access controls for business email. Practical email security from Infinity Techiez.",
    canonical: `${businessInfo.siteUrl}/it-services/email-security-authentication`,
    breadcrumbs: baseBreadcrumbs("Email Security & Authentication", "email-security-authentication"),
  },
  {
    slug: "comcast-business-email",
    image: {
      src: "/images/server-room.jpg",
      alt: "Server room infrastructure supporting ISP email services",
    },
    title: "Comcast Business Email Services",
    eyebrow: "Provider-Specific Email Services",
    shortDescription:
      "Independent assistance with Comcast Business email configuration, account administration, DNS settings and email connectivity.",
    intro: [
      "Many businesses receive email services bundled with their Comcast Business internet or voice packages. These email accounts work like other business email, but the configuration details, DNS settings and account management options can be unfamiliar to teams that did not set them up originally.",
      "Infinity Techiez provides independent technology services for businesses that need help with Comcast Business email. We are not Comcast, we are not affiliated with Comcast, and we are not an official Comcast service channel. Our role is to help you configure, administer and troubleshoot the email environment you already have so it works reliably for your business.",
    ],
    providerName: "Comcast",
    independentDisclosure:
      "Infinity Techiez is an independent technology services provider and is not affiliated with, sponsored by, or endorsed by Comcast.",
    serviceCategory: "Business Email",
    searchIntent: "comcast business email, comcast email setup, comcast business email help",
    whatWeHelpWith: [
      {
        title: "Account configuration",
        description: "Help with Comcast Business email account settings, mailbox access and user-level configuration.",
      },
      {
        title: "Email client setup",
        description: "Configure desktops, laptops, phones and tablets to access Comcast Business email using standard protocols.",
      },
      {
        title: "SMTP and sending configuration",
        description: "Review outgoing mail settings so devices and applications can send through your account correctly.",
      },
      {
        title: "Domain and DNS considerations",
        description: "Coordinate domain records, MX settings and authentication when using custom domains with Comcast email.",
      },
      {
        title: "Migration planning",
        description: "Plan moves from Comcast email to another platform or from another provider to Comcast email.",
      },
      {
        title: "Ongoing administration",
        description: "Provide routine mailbox, alias and access management as your team changes.",
      },
    ],
    benefits: [
      "Independent help without relying on provider wait times",
      "Practical configuration guidance for business email",
      "Proper DNS and authentication where your domain is used",
      "Consistent setup across user devices",
      "Migration planning when changing platforms",
      "Documented settings for future reference",
    ],
    scenarios: [
      {
        title: "New Comcast Business email setup",
        description: "A business has Comcast services and wants business email configured correctly with the right settings and devices.",
      },
      {
        title: "Email not syncing or sending",
        description: "Users are having trouble sending, receiving or syncing Comcast email on their devices.",
      },
      {
        title: "Moving to or from Comcast email",
        description: "A business wants to migrate mailboxes to another platform or move existing mailboxes into Comcast email.",
      },
    ],
    detailedSections: [
      {
        title: "Working with Comcast Business email",
        paragraphs: [
          "Comcast Business email is often bundled with internet or voice services. It can be configured on standard email clients and devices using IMAP, POP or SMTP settings, though the exact configuration depends on the account type and any custom domain setup.",
          "We help you gather the correct settings, configure devices, set up aliases or shared access where supported, and review authentication or DNS records that affect deliverability.",
        ],
      },
      {
        title: "When to consider a different platform",
        paragraphs: [
          "Bundled ISP email is convenient for basic use, but some businesses outgrow it. If you need more advanced collaboration tools, larger mailboxes, better admin controls or easier integration with business applications, a dedicated business email platform may be a better fit.",
          "We can help you evaluate whether staying with Comcast email or moving to another platform makes sense for your requirements, and we can plan the migration if you decide to move.",
        ],
      },
    ],
    process: [
      { step: "01", title: "Review", description: "Understand your current Comcast email setup, account types and business requirements." },
      { step: "02", title: "Plan", description: "Decide whether to configure, migrate or consolidate your email environment." },
      { step: "03", title: "Configure", description: "Set up accounts, devices, DNS records and authentication as needed." },
      { step: "04", title: "Test", description: "Verify send, receive, sync and authentication across devices and locations." },
      { step: "05", title: "Document", description: "Record settings, provider contacts and administration procedures." },
      { step: "06", title: "Manage", description: "Provide ongoing administration and review as your team or needs change." },
    ],
    technicalConsiderations: [
      { title: "Account type differences", description: "Comcast offers different account types with different features; confirm what your plan includes before planning changes." },
      { title: "Custom domain use", description: "If you use a custom domain with Comcast email, DNS records must be configured correctly for delivery and authentication." },
      { title: "Client compatibility", description: "Some older email clients may need updated settings or app passwords depending on Comcast's current requirements." },
      { title: "Data export options", description: "If migrating away, confirm what mailbox data can be exported and in what format before starting." },
    ],
    securityConsiderations: [
      { title: "Account access", description: "Review who has access to Comcast email admin settings and enable MFA where available." },
      { title: "Forwarding and aliases", description: "Check automatic forwarding and alias settings so messages are not unintentionally exposed." },
      { title: "Authentication records", description: "If using a custom domain, ensure SPF, DKIM and DMARC records reflect your actual sending sources." },
    ],
    whoItIsFor: [
      "Businesses using Comcast Business email",
      "Companies setting up Comcast email for the first time",
      "Organizations moving to or from Comcast email",
      "Businesses experiencing Comcast email configuration issues",
      "Teams that need help managing email accounts and devices",
    ],
    relatedServices: ["business-email", "business-email-setup", "business-email-migration"],
    faqs: [
      {
        question: "Are you Comcast or official Comcast service?",
        answer:
          "No. Infinity Techiez is an independent technology services provider and is not affiliated with, sponsored by, or endorsed by Comcast. We provide configuration and administration help for the Comcast Business email environment you already use.",
      },
      {
        question: "Can you set up Comcast Business email on my devices?",
        answer:
          "Yes. We can help configure desktops, laptops, phones and tablets to access Comcast Business email using standard protocols and current settings.",
      },
      {
        question: "Can you help migrate away from Comcast email?",
        answer:
          "Yes. We can plan and carry out migrations from Comcast email to another platform, including moving messages and updating DNS records where needed.",
      },
      {
        question: "Do you work with custom domains on Comcast email?",
        answer:
          "Yes. We can help coordinate domain records, MX settings and authentication for businesses using custom domains with Comcast email services.",
      },
      {
        question: "Can you fix Comcast email sending or receiving problems?",
        answer:
          "We can review account settings, client configuration, DNS records and authentication to identify common causes of email delivery or sync issues.",
      },
    ],
    ctaTitle: "Need help with Comcast Business email?",
    ctaDescription:
      "Tell us about your Comcast email environment — accounts, domains and devices — and we can recommend a practical configuration or administration plan.",
    seoTitle: "Comcast Business Email Services",
    seoDescription:
      "Independent help with Comcast Business email configuration, account administration, DNS and connectivity. Not affiliated with Comcast.",
    canonical: `${businessInfo.siteUrl}/it-services/comcast-business-email`,
    noIndex: true,
    breadcrumbs: baseBreadcrumbs("Comcast Business Email", "comcast-business-email"),
  },
  {
    slug: "att-business-email",
    image: {
      src: "/images/workspace.jpg",
      alt: "Professional workspace with business email client open",
    },
    title: "AT&T Business Email Services",
    eyebrow: "Provider-Specific Email Services",
    shortDescription:
      "Independent assistance with AT&T business email configuration, mailbox setup, DNS/domain considerations and account administration.",
    intro: [
      "AT&T offers business email services through various plans and bundles. For businesses that rely on these accounts, proper configuration and administration are important for reliable communication and deliverability.",
      "Infinity Techiez provides independent technology services for businesses that need help with AT&T business email. We are not AT&T, we are not affiliated with AT&T, and we are not an official AT&T service channel. Our role is to help you configure, administer and troubleshoot your email environment so it works reliably for your business.",
    ],
    providerName: "AT&T",
    independentDisclosure:
      "Infinity Techiez is an independent technology services provider and is not affiliated with, sponsored by, or endorsed by AT&T.",
    serviceCategory: "Business Email",
    searchIntent: "att business email, att email setup, at&t business email help",
    whatWeHelpWith: [
      {
        title: "Business email configuration",
        description: "Set up AT&T business email accounts with correct settings for sending, receiving and client access.",
      },
      {
        title: "Mailbox setup",
        description: "Create mailboxes, aliases and distribution groups that match your business structure.",
      },
      {
        title: "Email client configuration",
        description: "Configure desktops, laptops, phones and tablets to access AT&T business email.",
      },
      {
        title: "DNS and domain considerations",
        description: "Coordinate MX records, authentication and domain settings for reliable delivery.",
      },
      {
        title: "Account administration",
        description: "Manage users, access levels, forwarding and mailbox settings as your team changes.",
      },
      {
        title: "Migration planning",
        description: "Plan moves to or from AT&T email with minimal disruption to daily operations.",
      },
    ],
    benefits: [
      "Independent help without relying on provider wait times",
      "Proper configuration for reliable sending and receiving",
      "Domain and DNS alignment for deliverability",
      "Consistent setup across user devices",
      "Clear documentation of account and settings",
      "Migration planning when changing platforms",
    ],
    scenarios: [
      {
        title: "Setting up AT&T email",
        description: "A business has AT&T services and wants business email configured correctly with the right devices and settings.",
      },
      {
        title: "Troubleshooting delivery issues",
        description: "Email is not arriving, bouncing or being flagged as spam because of configuration or authentication problems.",
      },
      {
        title: "Managing multiple mailboxes",
        description: "A company needs help creating, organizing and administering multiple AT&T business email accounts.",
      },
    ],
    detailedSections: [
      {
        title: "AT&T business email in a business context",
        paragraphs: [
          "AT&T business email can be accessed through webmail or configured on standard email clients. Depending on the plan, it may support custom domains, aliases, forwarding and basic administration.",
          "We help you understand what your specific plan supports, configure accounts and devices correctly, and coordinate DNS records when a custom domain is involved.",
        ],
      },
      {
        title: "Authentication and deliverability",
        paragraphs: [
          "For business email to reach recipients reliably, your domain needs proper authentication records such as SPF, DKIM and DMARC. These records are configured in DNS and depend on which servers are authorized to send for your domain.",
          "We review your DNS setup and configure the records needed for AT&T email so your messages are less likely to be flagged as spam or rejected.",
        ],
      },
    ],
    process: [
      { step: "01", title: "Review", description: "Understand your current AT&T email setup, account types and business requirements." },
      { step: "02", title: "Plan", description: "Decide whether to configure, migrate or consolidate your email environment." },
      { step: "03", title: "Configure", description: "Set up accounts, devices, DNS records and authentication as needed." },
      { step: "04", title: "Test", description: "Verify send, receive, sync and authentication across devices and locations." },
      { step: "05", title: "Document", description: "Record settings, provider contacts and administration procedures." },
      { step: "06", title: "Manage", description: "Provide ongoing administration and review as your team or needs change." },
    ],
    technicalConsiderations: [
      { title: "Plan limitations", description: "AT&T email features vary by plan; confirm what your service includes before planning changes." },
      { title: "Custom domain requirements", description: "Using a custom domain requires correct MX, SPF and other DNS records to deliver mail reliably." },
      { title: "Client access methods", description: "Depending on the service, users may access email via webmail, IMAP, POP or SMTP; confirm which methods are enabled." },
      { title: "Data export considerations", description: "If migrating away, understand what mailbox data can be exported and how before starting." },
    ],
    securityConsiderations: [
      { title: "Account access", description: "Review who has access to AT&T email admin settings and enable MFA where available." },
      { title: "Forwarding rules", description: "Check automatic forwarding so messages are not unintentionally exposed." },
      { title: "Authentication alignment", description: "Ensure SPF, DKIM and DMARC records match your actual sending sources, including any third-party tools." },
    ],
    whoItIsFor: [
      "Businesses using AT&T business email",
      "Companies setting up AT&T email for the first time",
      "Organizations moving to or from AT&T email",
      "Businesses experiencing AT&T email configuration issues",
      "Teams that need help managing email accounts and devices",
    ],
    relatedServices: ["business-email", "business-email-setup", "business-email-migration"],
    faqs: [
      {
        question: "Are you AT&T or official AT&T service?",
        answer:
          "No. Infinity Techiez is an independent technology services provider and is not affiliated with, sponsored by, or endorsed by AT&T. We provide configuration and administration help for the AT&T business email environment you already use.",
      },
      {
        question: "Can you set up AT&T business email on my devices?",
        answer:
          "Yes. We can help configure desktops, laptops, phones and tablets to access AT&T business email using standard protocols and current settings.",
      },
      {
        question: "Can you help migrate away from AT&T email?",
        answer:
          "Yes. We can plan and carry out migrations from AT&T email to another platform, including moving messages and updating DNS records where needed.",
      },
      {
        question: "Do you work with custom domains on AT&T email?",
        answer:
          "Yes. We can help coordinate domain records, MX settings and authentication for businesses using custom domains with AT&T email services.",
      },
      {
        question: "Can you fix AT&T email sending or receiving problems?",
        answer:
          "We can review account settings, client configuration, DNS records and authentication to identify common causes of email delivery or sync issues.",
      },
    ],
    ctaTitle: "Need help with AT&T business email?",
    ctaDescription:
      "Share a few details about your AT&T email accounts and we can suggest a practical approach to configuration or ongoing administration.",
    seoTitle: "AT&T Business Email Services",
    seoDescription:
      "Independent help with AT&T business email configuration, mailbox setup, DNS and account administration. Not affiliated with AT&T.",
    canonical: `${businessInfo.siteUrl}/it-services/att-business-email`,
    noIndex: true,
    breadcrumbs: baseBreadcrumbs("AT&T Business Email", "att-business-email"),
  },
  {
    slug: "outlook-business-email",
    image: {
      src: "/images/cloud.jpg",
      alt: "Cloud services supporting Microsoft email environments",
    },
    title: "Outlook Business Email Configuration",
    eyebrow: "Provider-Specific Email Services",
    shortDescription:
      "Independent help with Outlook business email configuration, Microsoft 365 mailboxes, synchronization and account administration.",
    intro: [
      "Outlook is one of the most widely used business email clients, and Microsoft 365 is a common platform for business email. Whether you are setting up Outlook for the first time, connecting it to a domain, or troubleshooting synchronization problems, the underlying configuration matters.",
      "Infinity Techiez provides independent technology services for businesses that need help with Outlook business email. We are not Microsoft, we are not affiliated with Microsoft, and we are not an official Microsoft service channel. Our role is to help you configure, administer and troubleshoot the email environment you already have.",
    ],
    providerName: "Microsoft",
    independentDisclosure:
      "Infinity Techiez is an independent technology services provider and is not affiliated with, sponsored by, or endorsed by Microsoft.",
    serviceCategory: "Business Email",
    searchIntent: "outlook business email, outlook email setup, microsoft 365 email configuration",
    whatWeHelpWith: [
      {
        title: "Outlook account configuration",
        description: "Set up Outlook desktop and mobile with business email accounts, profiles and signatures.",
      },
      {
        title: "Mailbox setup",
        description: "Configure Microsoft 365 or other domain-based mailboxes for use in Outlook.",
      },
      {
        title: "Email synchronization",
        description: "Diagnose and resolve sync issues between Outlook, webmail and mobile devices.",
      },
      {
        title: "Account administration",
        description: "Manage users, aliases, groups and permissions in Microsoft 365 or similar platforms.",
      },
      {
        title: "DNS and authentication",
        description: "Configure MX, SPF, DKIM and DMARC records needed for Outlook-based email.",
      },
      {
        title: "Migration planning",
        description: "Plan moves to or from Microsoft 365 or other Outlook-compatible email platforms.",
      },
    ],
    benefits: [
      "Reliable Outlook setup for business users",
      "Consistent configuration across desktops and mobile devices",
      "Proper authentication to improve deliverability",
      "Reduced sync and connectivity issues",
      "Clear documentation of email settings",
      "Migration planning when changing platforms",
    ],
    scenarios: [
      {
        title: "Setting up Outlook for business",
        description: "A company needs Outlook configured correctly for multiple users and devices.",
      },
      {
        title: "Sync or connectivity problems",
        description: "Outlook is not syncing properly, is slow, or shows authentication errors on user devices.",
      },
      {
        title: "Moving to Microsoft 365",
        description: "A business wants to migrate email to Microsoft 365 and configure Outlook for all users.",
      },
    ],
    detailedSections: [
      {
        title: "Outlook and Microsoft 365",
        paragraphs: [
          "Outlook is the email client; Microsoft 365 is the platform that provides business mailboxes, calendars, contacts and collaboration tools. Outlook can also connect to other email services using IMAP, POP or Exchange ActiveSync.",
          "We help you choose the right connection method, configure accounts and devices, and ensure the underlying DNS and authentication records are set up correctly for reliable delivery.",
        ],
      },
      {
        title: "Common Outlook issues for businesses",
        paragraphs: [
          "Businesses commonly encounter problems such as profiles not syncing, authentication prompts, missing folders, large mailbox performance issues or mobile devices that fail to connect.",
          "We diagnose these issues methodically, checking account settings, DNS records, device compatibility, network connectivity and platform status to isolate the cause.",
        ],
      },
    ],
    process: [
      { step: "01", title: "Assess", description: "Review your current Outlook setup, account types, devices and issues." },
      { step: "02", title: "Plan", description: "Decide on configuration approach, migration timing or troubleshooting priorities." },
      { step: "03", title: "Configure", description: "Set up accounts, profiles, devices, DNS records and authentication." },
      { step: "04", title: "Test", description: "Verify send, receive, sync and authentication across devices and users." },
      { step: "05", title: "Document", description: "Record settings, admin contacts and procedures for future reference." },
      { step: "06", title: "Manage", description: "Provide ongoing administration and review as your environment changes." },
    ],
    technicalConsiderations: [
      { title: "Connection method", description: "Choose the right protocol (Exchange, IMAP, POP, ActiveSync) based on your platform and device requirements." },
      { title: "Profile management", description: "Large mailboxes and multiple profiles can affect Outlook performance; plan accordingly." },
      { title: "Mobile access", description: "Mobile Outlook setup requires correct server settings and may need app-specific configuration." },
      { title: "Authentication requirements", description: "Modern authentication methods may require specific settings or app passwords on older clients." },
    ],
    securityConsiderations: [
      { title: "MFA for admin accounts", description: "Enable multi-factor authentication on Microsoft 365 admin and user accounts where supported." },
      { title: "Access reviews", description: "Review who has access to mailboxes, admin roles and sharing settings regularly." },
      { title: "Client security", description: "Ensure Outlook clients are updated and devices meet basic security requirements." },
    ],
    whoItIsFor: [
      "Businesses using Outlook for email",
      "Companies setting up Microsoft 365 email",
      "Organizations experiencing Outlook sync or connectivity issues",
      "Businesses migrating to or from Microsoft 365",
      "Teams that need help administering Outlook and email accounts",
    ],
    relatedServices: ["business-email", "business-email-setup", "cloud-services"],
    faqs: [
      {
        question: "Are you Microsoft or official Microsoft service?",
        answer:
          "No. Infinity Techiez is an independent technology services provider and is not affiliated with, sponsored by, or endorsed by Microsoft. We provide configuration and administration help for the Outlook and Microsoft 365 email environment you already use.",
      },
      {
        question: "Can you set up Outlook for my business?",
        answer:
          "Yes. We can help configure Outlook on desktops, laptops, phones and tablets with the correct account settings and synchronization options.",
      },
      {
        question: "Can you help migrate to Microsoft 365?",
        answer:
          "Yes. We can plan and carry out migrations to Microsoft 365, including moving mailboxes, updating DNS records and configuring Outlook for users.",
      },
      {
        question: "Why is Outlook not syncing properly?",
        answer:
          "Outlook sync issues can be caused by account settings, DNS problems, authentication failures, large mailboxes or device compatibility. We diagnose the cause and correct what we can.",
      },
      {
        question: "Do you work with custom domains in Outlook?",
        answer:
          "Yes. We can help configure DNS records and email accounts for custom domains used with Microsoft 365 or other Outlook-compatible platforms.",
      },
    ],
    ctaTitle: "Need help with Outlook business email?",
    ctaDescription:
      "Describe your Outlook or Microsoft 365 setup and we can outline a configuration plan that fits your environment.",
    seoTitle: "Outlook Business Email Configuration",
    seoDescription:
      "Independent help with Outlook business email configuration, Microsoft 365 mailboxes, synchronization and administration. Not affiliated with Microsoft.",
    canonical: `${businessInfo.siteUrl}/it-services/outlook-business-email`,
    noIndex: true,
    breadcrumbs: baseBreadcrumbs("Outlook Business Email", "outlook-business-email"),
  },
  {
    slug: "gmail-business-email",
    image: {
      src: "/images/contact.jpg",
      alt: "Laptop used for email communication and account management",
    },
    title: "Gmail & Business Email Configuration",
    eyebrow: "Provider-Specific Email Services",
    shortDescription:
      "Independent help with Gmail and Google Workspace business email configuration, DNS, authentication and migration.",
    intro: [
      "Gmail is familiar to many users, but there is an important distinction between consumer Gmail accounts and Google Workspace business email. For business use, a domain-based address with admin controls, security settings and centralized management is usually more appropriate.",
      "Infinity Techiez provides independent technology services for businesses that need help with Gmail or Google Workspace email. We are not Google, we are not affiliated with Google, and we are not an official Google service channel. Our role is to help you configure, administer and troubleshoot the email environment you already have or are considering.",
    ],
    providerName: "Google",
    independentDisclosure:
      "Infinity Techiez is an independent technology services provider and is not affiliated with, sponsored by, or endorsed by Google.",
    serviceCategory: "Business Email",
    searchIntent: "gmail business email, google workspace email setup, gmail for business",
    whatWeHelpWith: [
      {
        title: "Account configuration",
        description: "Set up Gmail or Google Workspace business email accounts with correct settings for your domain.",
      },
      {
        title: "Domain email setup",
        description: "Configure business email using your own domain rather than a generic Gmail address.",
      },
      {
        title: "DNS and MX records",
        description: "Configure DNS records so your domain routes email to Google Workspace or another platform correctly.",
      },
      {
        title: "Authentication",
        description: "Set up SPF, DKIM and DMARC records for better deliverability and reduced spoofing risk.",
      },
      {
        title: "Migration planning",
        description: "Plan moves from other email systems to Google Workspace or from Google Workspace to another platform.",
      },
      {
        title: "Ongoing administration",
        description: "Manage users, aliases, groups and security settings in Google Workspace as your team changes.",
      },
    ],
    benefits: [
      "Professional domain-based email with familiar Gmail interface",
      "Centralized administration for users, aliases and groups",
      "Proper authentication to improve deliverability",
      "Consistent access across web, desktop and mobile",
      "Migration planning when changing platforms",
      "Documented setup and admin procedures",
    ],
    scenarios: [
      {
        title: "Using consumer Gmail for business",
        description: "A business is using personal Gmail accounts and wants a more professional domain-based email setup.",
      },
      {
        title: "Moving to Google Workspace",
        description: "A company wants to migrate existing email to Google Workspace and configure it correctly.",
      },
      {
        title: "Managing multiple users",
        description: "A business needs centralized control over multiple Gmail or Google Workspace accounts.",
      },
    ],
    detailedSections: [
      {
        title: "Gmail vs Google Workspace for business",
        paragraphs: [
          "Consumer Gmail accounts are free and easy to use, but they lack the admin controls, domain-based addresses and centralized management that most businesses need. Google Workspace provides business email with your own domain, shared calendars, drive storage and administrative tools.",
          "We help you understand the difference, choose the right approach and configure the environment so your business email is professional, secure and manageable.",
        ],
      },
      {
        title: "DNS and authentication for Google Workspace",
        paragraphs: [
          "To use Google Workspace with your domain, you need to configure MX records to point to Google's servers and add SPF, DKIM and DMARC records for authentication. These DNS changes are essential for deliverability and security.",
          "We plan these changes carefully, verifying that records are correct before and after cutover so email continues to work reliably.",
        ],
      },
    ],
    process: [
      { step: "01", title: "Review", description: "Understand your current Gmail or Google Workspace setup and business requirements." },
      { step: "02", title: "Plan", description: "Decide whether to configure, migrate or consolidate your email environment." },
      { step: "03", title: "Configure", description: "Set up accounts, devices, DNS records and authentication as needed." },
      { step: "04", title: "Test", description: "Verify send, receive, sync and authentication across devices and users." },
      { step: "05", title: "Document", description: "Record settings, admin contacts and procedures for future reference." },
      { step: "06", title: "Manage", description: "Provide ongoing administration and review as your team or needs change." },
    ],
    technicalConsiderations: [
      { title: "Domain verification", description: "Google Workspace requires domain verification through DNS records before email can be used." },
      { title: "MX record timing", description: "MX changes should be planned to avoid mail delivery interruption during migration." },
      { title: "User licensing", description: "Each Google Workspace user requires a license; plan mailbox structure accordingly." },
      { title: "Third-party app access", description: "If other tools send email on your behalf, they must be included in SPF and DKIM configuration." },
    ],
    securityConsiderations: [
      { title: "Admin account security", description: "Protect Google Workspace admin accounts with MFA and limit access to authorized users." },
      { title: "Forwarding and delegation", description: "Review who can forward mail or access others' mailboxes to prevent data exposure." },
      { title: "Sharing settings", description: "Control external sharing and file access in Google Workspace to match your business policies." },
    ],
    whoItIsFor: [
      "Businesses using consumer Gmail for work",
      "Companies moving to Google Workspace",
      "Organizations managing multiple Gmail or Workspace accounts",
      "Businesses experiencing Gmail or Workspace configuration issues",
      "Teams that need help administering Google email",
    ],
    relatedServices: ["business-email", "business-email-setup", "cloud-services"],
    faqs: [
      {
        question: "Are you Google or official Google service?",
        answer:
          "No. Infinity Techiez is an independent technology services provider and is not affiliated with, sponsored by, or endorsed by Google. We provide configuration and administration help for the Gmail or Google Workspace email environment you already use.",
      },
      {
        question: "What is the difference between Gmail and Google Workspace?",
        answer:
          "Gmail is a consumer email service. Google Workspace is a business platform that provides domain-based email, admin controls, shared calendars and other collaboration tools.",
      },
      {
        question: "Can you help migrate to Google Workspace?",
        answer:
          "Yes. We can plan and carry out migrations to Google Workspace, including moving mailboxes, updating DNS records and configuring accounts for users.",
      },
      {
        question: "Can you use Gmail with a custom domain?",
        answer:
          "Yes. Google Workspace allows you to use Gmail with your own domain. We can help configure the domain, DNS records and accounts needed.",
      },
      {
        question: "Can you fix Gmail sync or delivery problems?",
        answer:
          "We can review account settings, client configuration, DNS records and authentication to identify common causes of email delivery or sync issues.",
      },
    ],
    ctaTitle: "Need help with Gmail or Google Workspace email?",
    ctaDescription:
      "Tell us about your Gmail or Google Workspace setup and we can recommend a practical approach to configuration, authentication or migration.",
    seoTitle: "Gmail & Business Email Configuration",
    seoDescription:
      "Independent help with Gmail and Google Workspace business email configuration, DNS, authentication and migration. Not affiliated with Google.",
    canonical: `${businessInfo.siteUrl}/it-services/gmail-business-email`,
    noIndex: true,
    breadcrumbs: baseBreadcrumbs("Gmail Business Email", "gmail-business-email"),
  },
  {
    slug: "yahoo-business-email",
    image: {
      src: "/images/team.jpg",
      alt: "Support team collaborating on email configuration",
    },
    title: "Yahoo Business Email Services",
    eyebrow: "Provider-Specific Email Services",
    shortDescription:
      "Independent help with Yahoo business email configuration, account administration and connectivity for legitimate business scenarios.",
    intro: [
      "Yahoo Mail is primarily known as a consumer email service, but some businesses use it for specific purposes or have legacy accounts that need to be managed. Yahoo also offers business email options through certain plans or partnerships. When a business relies on Yahoo email, proper configuration and access control are important.",
      "Infinity Techiez provides independent technology services for businesses that need help with Yahoo email in legitimate business contexts. We are not Yahoo, we are not affiliated with Yahoo, and we are not an official Yahoo service channel. Our role is to help you configure, administer and troubleshoot the email environment you already have.",
    ],
    providerName: "Yahoo",
    independentDisclosure:
      "Infinity Techiez is an independent technology services provider and is not affiliated with, sponsored by, or endorsed by Yahoo.",
    serviceCategory: "Business Email",
    searchIntent: "yahoo business email, yahoo email setup, yahoo mail for business",
    whatWeHelpWith: [
      {
        title: "Account configuration",
        description: "Set up Yahoo business email accounts with correct settings for sending, receiving and client access.",
      },
      {
        title: "Email client setup",
        description: "Configure desktops, laptops, phones and tablets to access Yahoo email using standard protocols.",
      },
      {
        title: "Domain and DNS considerations",
        description: "Coordinate domain records and authentication where Yahoo email is used with a custom domain.",
      },
      {
        title: "Account administration",
        description: "Manage users, aliases, forwarding and mailbox settings as your team changes.",
      },
      {
        title: "Migration planning",
        description: "Plan moves to or from Yahoo email with minimal disruption to daily operations.",
      },
      {
        title: "Connectivity troubleshooting",
        description: "Diagnose why email is not sending, receiving or syncing correctly on user devices.",
      },
    ],
    benefits: [
      "Independent help without relying on provider wait times",
      "Practical configuration for legitimate business use",
      "Proper DNS and authentication where a custom domain is involved",
      "Consistent setup across user devices",
      "Migration planning when changing platforms",
      "Documented settings for future reference",
    ],
    scenarios: [
      {
        title: "Using Yahoo email for business",
        description: "A business has legacy Yahoo email accounts or uses Yahoo email for specific purposes and needs proper configuration.",
      },
      {
        title: "Moving to or from Yahoo email",
        description: "A company wants to migrate mailboxes to another platform or move existing mailboxes into Yahoo email.",
      },
      {
        title: "Connectivity or access issues",
        description: "Users are having trouble accessing Yahoo email on their devices or email clients.",
      },
    ],
    detailedSections: [
      {
        title: "Yahoo email in a business context",
        paragraphs: [
          "Yahoo Mail is primarily a consumer service, but some businesses use it for specific workflows or have legacy accounts that need administration. Yahoo also offers business email options through certain plans, though these are less common than dedicated business platforms.",
          "We help you configure Yahoo email correctly for legitimate business use, including client setup, access controls and migration planning when a more suitable platform is needed.",
        ],
      },
      {
        title: "Limitations and considerations",
        paragraphs: [
          "Consumer-grade Yahoo email may lack the admin controls, security features and centralized management that larger businesses require. If your needs exceed what Yahoo email provides, we can help you evaluate alternatives and plan a migration.",
          "We do not make unsupported claims about Yahoo's systems or capabilities. Our focus is on helping you use the service you have reliably, or moving to a platform that better fits your business requirements.",
        ],
      },
    ],
    process: [
      { step: "01", title: "Review", description: "Understand your current Yahoo email setup, account types and business requirements." },
      { step: "02", title: "Plan", description: "Decide whether to configure, migrate or consolidate your email environment." },
      { step: "03", title: "Configure", description: "Set up accounts, devices, DNS records and authentication as needed." },
      { step: "04", title: "Test", description: "Verify send, receive, sync and authentication across devices and locations." },
      { step: "05", title: "Document", description: "Record settings, provider contacts and administration procedures." },
      { step: "06", title: "Manage", description: "Provide ongoing administration and review as your team or needs change." },
    ],
    technicalConsiderations: [
      { title: "Service limitations", description: "Yahoo email features and admin options vary by plan; confirm what your specific setup supports before planning changes." },
      { title: "Custom domain use", description: "If using a custom domain with Yahoo email, DNS records must be configured correctly for delivery and authentication." },
      { title: "Client compatibility", description: "Some older email clients may need updated settings or app passwords depending on Yahoo's current requirements." },
      { title: "Data export options", description: "If migrating away, confirm what mailbox data can be exported and in what format before starting." },
    ],
    securityConsiderations: [
      { title: "Account access", description: "Review who has access to Yahoo email settings and enable MFA where available." },
      { title: "Forwarding and aliases", description: "Check automatic forwarding and alias settings so messages are not unintentionally exposed." },
      { title: "Authentication records", description: "If using a custom domain, ensure SPF, DKIM and DMARC records reflect your actual sending sources." },
    ],
    whoItIsFor: [
      "Businesses using Yahoo email for legitimate purposes",
      "Companies setting up Yahoo email for the first time",
      "Organizations moving to or from Yahoo email",
      "Businesses experiencing Yahoo email configuration issues",
      "Teams that need help managing email accounts and devices",
    ],
    relatedServices: ["business-email", "business-email-setup", "business-email-migration"],
    faqs: [
      {
        question: "Are you Yahoo or official Yahoo service?",
        answer:
          "No. Infinity Techiez is an independent technology services provider and is not affiliated with, sponsored by, or endorsed by Yahoo. We provide configuration and administration help for the Yahoo email environment you already use.",
      },
      {
        question: "Can you set up Yahoo email on my devices?",
        answer:
          "Yes. We can help configure desktops, laptops, phones and tablets to access Yahoo email using standard protocols and current settings.",
      },
      {
        question: "Can you help migrate away from Yahoo email?",
        answer:
          "Yes. We can plan and carry out migrations from Yahoo email to another platform, including moving messages and updating DNS records where needed.",
      },
      {
        question: "Do you work with custom domains on Yahoo email?",
        answer:
          "Yes. We can help coordinate domain records, MX settings and authentication for businesses using custom domains with Yahoo email services.",
      },
      {
        question: "Can you fix Yahoo email sending or receiving problems?",
        answer:
          "We can review account settings, client configuration, DNS records and authentication to identify common causes of email delivery or sync issues.",
      },
    ],
    ctaTitle: "Need help with Yahoo business email?",
    ctaDescription:
      "Share the details of your Yahoo email setup and we can suggest a sensible way to configure or administer it.",
    seoTitle: "Yahoo Business Email Services",
    seoDescription:
      "Independent help with Yahoo business email configuration, account administration and connectivity. Not affiliated with Yahoo.",
    canonical: `${businessInfo.siteUrl}/it-services/yahoo-business-email`,
    noIndex: true,
    breadcrumbs: baseBreadcrumbs("Yahoo Business Email", "yahoo-business-email"),
  },
  {
    slug: "aol-business-email",
    image: {
      src: "/images/meeting.jpg",
      alt: "Business consultation about email services",
    },
    title: "AOL Business Email Services",
    eyebrow: "Provider-Specific Email Services",
    shortDescription:
      "Independent help with AOL email configuration, account administration and connectivity for legitimate business scenarios.",
    intro: [
      "AOL Mail is primarily a consumer email service, but some businesses maintain legacy AOL accounts or use AOL email for specific purposes. When a business relies on AOL email, correct configuration and access control help ensure reliable communication.",
      "Infinity Techiez provides independent technology services for businesses that need help with AOL email in legitimate business contexts. We are not AOL, we are not affiliated with AOL, and we are not an official AOL service channel. Our role is to help you configure, administer and troubleshoot the email environment you already have.",
    ],
    providerName: "AOL",
    independentDisclosure:
      "Infinity Techiez is an independent technology services provider and is not affiliated with, sponsored by, or endorsed by AOL.",
    serviceCategory: "Business Email",
    searchIntent: "aol business email, aol email setup, aol mail for business",
    whatWeHelpWith: [
      {
        title: "Account configuration",
        description: "Set up AOL email accounts with correct settings for sending, receiving and client access.",
      },
      {
        title: "Email client setup",
        description: "Configure desktops, laptops, phones and tablets to access AOL email using standard protocols.",
      },
      {
        title: "Account administration",
        description: "Manage user access, passwords, forwarding and mailbox settings as your team changes.",
      },
      {
        title: "Connectivity troubleshooting",
        description: "Diagnose why email is not sending, receiving or syncing correctly on user devices.",
      },
      {
        title: "Migration planning",
        description: "Plan moves to or from AOL email with minimal disruption to daily operations.",
      },
      {
        title: "Security review",
        description: "Check account security settings, recovery options and access controls for business email.",
      },
    ],
    benefits: [
      "Independent help without relying on provider wait times",
      "Practical configuration for legitimate business use",
      "Consistent setup across user devices",
      "Migration planning when changing platforms",
      "Documented settings for future reference",
      "Improved account security and access control",
    ],
    scenarios: [
      {
        title: "Legacy AOL email accounts",
        description: "A business has older AOL email accounts that need to be configured, secured or migrated to a more suitable platform.",
      },
      {
        title: "AOL email for specific business use",
        description: "A company uses AOL email for a particular workflow and needs help with setup or access issues.",
      },
      {
        title: "Moving to a dedicated business email platform",
        description: "An organization wants to migrate from AOL email to a domain-based business email service.",
      },
    ],
    detailedSections: [
      {
        title: "AOL email in a business context",
        paragraphs: [
          "AOL Mail is primarily a consumer service, but some businesses maintain legacy accounts or use it for specific purposes. It can be accessed via webmail or configured on standard email clients using IMAP, POP or SMTP.",
          "We help you configure AOL email correctly for legitimate business use, review security settings, and plan migrations when a more suitable business email platform is needed.",
        ],
      },
      {
        title: "When to consider a different platform",
        paragraphs: [
          "Consumer AOL email may lack the admin controls, security features and centralized management that most businesses need. If your business is growing or requires domain-based email, a dedicated business email platform is usually a better fit.",
          "We can help you evaluate whether staying with AOL email or moving to a business-focused platform makes sense for your requirements, and we can plan the migration if you decide to move.",
        ],
      },
    ],
    process: [
      { step: "01", title: "Review", description: "Understand your current AOL email setup, account types and business requirements." },
      { step: "02", title: "Plan", description: "Decide whether to configure, migrate or consolidate your email environment." },
      { step: "03", title: "Configure", description: "Set up accounts, devices and security settings as needed." },
      { step: "04", title: "Test", description: "Verify send, receive, sync and access across devices and locations." },
      { step: "05", title: "Document", description: "Record settings, provider contacts and administration procedures." },
      { step: "06", title: "Manage", description: "Provide ongoing administration and review as your team or needs change." },
    ],
    technicalConsiderations: [
      { title: "Service limitations", description: "AOL email features and admin options are limited compared to business platforms; confirm what your setup supports." },
      { title: "Client compatibility", description: "Some older email clients may need updated settings or app passwords depending on AOL's current requirements." },
      { title: "Data export options", description: "If migrating away, confirm what mailbox data can be exported and in what format before starting." },
      { title: "Security features", description: "Consumer AOL email may lack advanced security options; enable what is available and consider a different platform for higher security needs." },
    ],
    securityConsiderations: [
      { title: "Account access", description: "Review who has access to AOL email settings and enable MFA where available." },
      { title: "Password and recovery", description: "Use strong, unique passwords and ensure recovery options are controlled by authorized people." },
      { title: "Forwarding rules", description: "Check automatic forwarding so messages are not unintentionally exposed." },
    ],
    whoItIsFor: [
      "Businesses with legacy AOL email accounts",
      "Companies using AOL email for legitimate purposes",
      "Organizations moving to or from AOL email",
      "Businesses experiencing AOL email configuration issues",
      "Teams that need help managing email accounts and devices",
    ],
    relatedServices: ["business-email", "business-email-setup", "business-email-migration"],
    faqs: [
      {
        question: "Are you AOL or official AOL service?",
        answer:
          "No. Infinity Techiez is an independent technology services provider and is not affiliated with, sponsored by, or endorsed by AOL. We provide configuration and administration help for the AOL email environment you already use.",
      },
      {
        question: "Can you set up AOL email on my devices?",
        answer:
          "Yes. We can help configure desktops, laptops, phones and tablets to access AOL email using standard protocols and current settings.",
      },
      {
        question: "Can you help migrate away from AOL email?",
        answer:
          "Yes. We can plan and carry out migrations from AOL email to another platform, including moving messages and updating settings where needed.",
      },
      {
        question: "Is AOL email suitable for business use?",
        answer:
          "AOL email can work for basic business communication, but it lacks the admin controls, security features and centralized management that most businesses need. We can help you evaluate whether it fits your requirements or recommend alternatives.",
      },
      {
        question: "Can you fix AOL email sending or receiving problems?",
        answer:
          "We can review account settings, client configuration and access options to identify common causes of email delivery or sync issues.",
      },
    ],
    ctaTitle: "Need help with AOL business email?",
    ctaDescription:
      "Tell us about your AOL email accounts and we can recommend a practical approach to configuration and ongoing administration.",
    seoTitle: "AOL Business Email Services",
    seoDescription:
      "Independent help with AOL email configuration, account administration and connectivity. Not affiliated with AOL.",
    canonical: `${businessInfo.siteUrl}/it-services/aol-business-email`,
    noIndex: true,
    breadcrumbs: baseBreadcrumbs("AOL Business Email", "aol-business-email"),
  },
  {
    slug: "business-domain-dns",
    image: {
      src: "/images/hero.jpg",
      alt: "Global network representing domains and DNS infrastructure",
    },
    title: "Business Domain & DNS Management",
    eyebrow: "Domain & DNS Services",
    shortDescription:
      "Business domain and DNS management covering record configuration, email dependencies, websites, subdomains, transfers and business continuity.",
    intro: [
      "Your domain name and DNS configuration sit underneath almost every digital service your business uses. Email delivery, website availability, hosted applications and verification records all depend on DNS being correct. When DNS is misconfigured, the symptoms surface elsewhere — undelivered email, unreachable websites or broken services — which makes the root cause easy to miss.",
      "Infinity Techiez provides business domain and DNS management as an independent technology services provider. We help organizations register, configure, transfer and maintain their domains, and we manage the DNS records that connect those domains to email, websites and other services. Our role is to keep this layer accurate, documented and under your control.",
    ],
    serviceCategory: "Domain & DNS",
    searchIntent: "business dns management, domain dns management, business dns configuration, domain transfer help",
    whatWeHelpWith: [
      {
        title: "DNS record configuration",
        description: "Create and maintain A, AAAA, CNAME, MX, TXT and other record types that connect your domain to the services it uses.",
      },
      {
        title: "Nameserver management",
        description: "Point domains at the correct DNS provider and coordinate nameserver changes without breaking dependent services.",
      },
      {
        title: "Email dependencies",
        description: "Align MX, SPF, DKIM and DMARC records so business email delivers reliably and passes authentication checks.",
      },
      {
        title: "Website and hosting records",
        description: "Connect domains and subdomains to websites, hosting platforms and applications with the right records.",
      },
      {
        title: "Subdomain setup",
        description: "Configure subdomains for portals, applications, staging environments or regional services as your needs grow.",
      },
      {
        title: "Domain transfers",
        description: "Plan and execute registrar or DNS provider transfers while protecting uptime for email and websites.",
      },
      {
        title: "Domain portfolio administration",
        description: "Track renewals, registrant details and access across multiple domains so nothing lapses unexpectedly.",
      },
      {
        title: "DNS troubleshooting",
        description: "Diagnose resolution failures, propagation delays and conflicting records that disrupt email or site access.",
      },
    ],
    benefits: [
      "Single point of accountability for domain and DNS changes",
      "Fewer email and website outages caused by record errors",
      "Documented DNS inventory that survives staff changes",
      "Safer transfers with dependent services mapped in advance",
      "Faster diagnosis when resolution problems occur",
      "Renewal and access control that protects ownership",
    ],
    scenarios: [
      {
        title: "New domain setup",
        description: "A business registers a new domain and needs it connected to email, a website and supporting services correctly from the start.",
      },
      {
        title: "Email depending on DNS",
        description: "Email delivery fails or messages are flagged as spam because MX, SPF or DKIM records are missing, stale or inconsistent.",
      },
      {
        title: "Website or hosting change",
        description: "A company moves its website to a new host and needs A and CNAME records updated without breaking email on the same domain.",
      },
      {
        title: "Domain transfer",
        description: "An organization wants to move a domain to a different registrar or consolidate DNS management under one provider.",
      },
      {
        title: "Adding subdomains",
        description: "A growing business needs subdomains for a client portal, application or marketing site alongside its primary domain.",
      },
      {
        title: "Continuity planning",
        description: "A business realizes nobody knows where domains are registered, who controls the registrar account or when renewals are due.",
      },
    ],
    detailedSections: [
      {
        title: "Why DNS sits under everything",
        paragraphs: [
          "DNS translates your domain names into the addresses that services actually use. A single business domain typically carries records for the website, inbound email routing, outbound email authentication, verification tokens for third-party platforms and subdomains for applications. Each record is small, but together they form the map that keeps your services reachable.",
          "Because DNS is shared infrastructure, a change intended for one service can break another. Replacing a zone file during a website migration can silently remove MX and TXT records, stopping email entirely. Managing DNS as a coordinated system — rather than a collection of one-off edits — is what prevents those outages.",
        ],
      },
      {
        title: "Records we configure and maintain",
        paragraphs: [
          "A and AAAA records point hostnames at IPv4 and IPv6 addresses, typically for websites and servers. CNAME records alias one hostname to another, which is common for hosted platforms and content delivery services. MX records direct inbound email to the correct mail servers, and TXT records carry SPF policies, DKIM keys, DMARC policies and domain verification tokens.",
          "Each record type has rules and dependencies. CNAMEs cannot coexist with other records on the same name, MX records must reference hostnames rather than raw addresses in most configurations, and SPF has a lookup limit that can silently fail when too many sending services are included. We manage these details so the records work together.",
        ],
      },
      {
        title: "Transfers, TTL and propagation",
        paragraphs: [
          "Domain transfers involve two layers: the registrar that owns the registration and the DNS provider that hosts the zone. Moving either layer requires planning. Lowering TTL values before a change shortens the time resolvers cache old answers, and pre-creating the full record set at the destination prevents gaps during cutover.",
          "Propagation is not instantaneous because resolvers worldwide cache DNS answers for the duration of each record's TTL. We plan changes around these mechanics, verify resolution from multiple vantage points after cutover, and keep the old configuration available until the new one is confirmed stable.",
        ],
      },
      {
        title: "DNS as part of business continuity",
        paragraphs: [
          "An expired domain or locked registrar account can take email and websites offline for days. Business continuity for domains means knowing where each domain is registered, who controls the account, which email address receives renewal notices and how DNS is backed up or replicated.",
          "We document registrar access, renewal dates, nameserver assignments and the full record inventory so the organization retains control even when staff or vendors change. Where appropriate, we also help enable registrar locks, DNSSEC and multi-factor authentication on the accounts that control this layer.",
        ],
      },
    ],
    process: [
      { step: "01", title: "Audit", description: "Inventory domains, registrars, nameservers and existing DNS records across the organization." },
      { step: "02", title: "Map", description: "Document which services depend on each record — email, websites, applications and verifications." },
      { step: "03", title: "Plan", description: "Sequence changes, transfers or consolidations with TTL adjustments and rollback options." },
      { step: "04", title: "Implement", description: "Apply record changes, nameserver updates and transfer steps in the planned order." },
      { step: "05", title: "Verify", description: "Confirm resolution, email delivery and site availability from multiple locations." },
      { step: "06", title: "Maintain", description: "Track renewals, review records periodically and update documentation as services change." },
    ],
    technicalConsiderations: [
      { title: "A and AAAA records", description: "Map hostnames to IPv4 and IPv6 addresses for websites and servers; keep them aligned when infrastructure changes." },
      { title: "CNAME constraints", description: "CNAMEs cannot share a name with other records and cannot be used at the zone apex in standard DNS; plan alternatives like ALIAS where supported." },
      { title: "MX and email routing", description: "MX records direct inbound mail; priority values and hostname targets must match the email provider's requirements exactly." },
      { title: "TXT record purposes", description: "TXT records carry SPF, DKIM, DMARC and verification tokens; the SPF ten-lookup limit is a common failure point." },
      { title: "Nameserver delegation", description: "Changing nameservers transfers zone control; the full record set must exist at the new provider before delegation changes." },
      { title: "TTL and propagation", description: "TTL controls how long resolvers cache answers; lowering it ahead of planned changes reduces cutover risk." },
    ],
    securityConsiderations: [
      { title: "Registrar account control", description: "Restrict who can access registrar and DNS accounts, and enable multi-factor authentication on both." },
      { title: "Domain locking", description: "Use registrar locks to block unauthorized transfers, and review lock status as part of periodic audits." },
      { title: "Unauthorized record changes", description: "Monitor DNS for unexpected modifications, especially to MX records that could redirect email." },
      { title: "DNSSEC where supported", description: "Consider DNSSEC signing to protect resolvers from forged answers, where your DNS provider supports it." },
    ],
    whoItIsFor: [
      "Businesses that need domains connected to email and websites correctly",
      "Organizations with multiple domains or unmanaged DNS records",
      "Companies planning domain or DNS provider transfers",
      "Teams experiencing email or website problems caused by DNS",
      "Businesses that want documented, controlled DNS administration",
    ],
    relatedServices: ["domains-dns", "business-email-dns", "business-email", "web-hosting"],
    faqs: [
      {
        question: "Do you register domains or just manage DNS?",
        answer:
          "We can help with both: advising on registration choices, handling renewals and registrant details, and managing the DNS records that connect the domain to your services. The domain remains registered in your name.",
      },
      {
        question: "Can you move our DNS to a different provider?",
        answer:
          "Yes. We inventory your existing records, recreate them at the destination provider, then coordinate the nameserver change. The record set is verified at the new provider before delegation moves.",
      },
      {
        question: "Our email stopped working after a website change. Can you help?",
        answer:
          "This is a common pattern — replacing DNS during a website migration can remove MX or authentication records. We can audit the current zone, restore the missing records and verify delivery.",
      },
      {
        question: "Can you transfer our domain to another registrar?",
        answer:
          "Yes. We handle the preparation — unlocking, authorization codes, contact verification — and coordinate timing so email and websites keep working throughout the transfer.",
      },
      {
        question: "How do we make sure we never lose our domain?",
        answer:
          "We document registrar access, set renewal reminders, enable auto-renewal and registry locks where appropriate, and ensure renewal notices go to monitored business addresses rather than a single inbox.",
      },
      {
        question: "Can you manage DNS for subdomains and applications?",
        answer:
          "Yes. We configure subdomains for portals, applications and environments, including the records needed for third-party platforms that ask you to verify or delegate a subdomain.",
      },
    ],
    ctaTitle: "Need help with domain or DNS management?",
    ctaDescription:
      "Tell us about your domains and the services that depend on them, and we can recommend a practical approach to configuration or cleanup.",
    seoTitle: "Business Domain & DNS Management",
    seoDescription:
      "Business domain and DNS management: record configuration, email dependencies, subdomains, transfers and continuity planning by Infinity Techiez.",
    canonical: `${businessInfo.siteUrl}/it-services/business-domain-dns`,
    breadcrumbs: baseBreadcrumbs("Business Domain & DNS Management", "business-domain-dns"),
  },
  {
    slug: "business-email-configuration",
    image: {
      src: "/images/email-work.jpg",
      alt: "Workspace where business email clients are configured",
    },
    title: "Business Email Configuration Services",
    eyebrow: "Business Email Services",
    shortDescription:
      "Business email configuration covering mailboxes, DNS, MX, SMTP, SPF, DKIM, DMARC and email client setup on desktop and mobile devices.",
    intro: [
      "Business email works only when several independent systems agree with each other. The mailbox platform, the domain's DNS records, the sending and receiving protocols, and every email client your team uses all have to be configured consistently. A single incorrect value — an MX priority, an SPF mechanism, an SMTP port — can stop delivery or send messages to spam.",
      "Infinity Techiez provides business email configuration as an independent technology services provider. We configure the full chain: mailboxes and accounts, DNS records, authentication policies and the desktop and mobile clients your staff actually use. We work with the email platform you have chosen rather than reselling a specific provider.",
    ],
    serviceCategory: "Business Email",
    searchIntent: "business email configuration, configure business email, email smtp settings, business email setup services",
    whatWeHelpWith: [
      {
        title: "Mailbox configuration",
        description: "Set up mailboxes, aliases, shared mailboxes and forwarding rules that match how your team communicates.",
      },
      {
        title: "DNS and MX records",
        description: "Configure the DNS zone so inbound email routes to the correct mail servers with the right priorities.",
      },
      {
        title: "SMTP sending configuration",
        description: "Configure outbound sending settings for clients, devices and line-of-business applications that send mail.",
      },
      {
        title: "SPF, DKIM and DMARC",
        description: "Publish and align authentication records so legitimate mail passes checks and spoofed mail is easier to reject.",
      },
      {
        title: "Email client setup",
        description: "Configure Outlook, Apple Mail, Thunderbird and webmail access with consistent settings across users.",
      },
      {
        title: "Mobile device configuration",
        description: "Set up phones and tablets with the correct account settings, sync scope and security options.",
      },
      {
        title: "Account administration",
        description: "Manage users, passwords, quotas, retention and access as staff join, change roles or leave.",
      },
      {
        title: "Delivery troubleshooting",
        description: "Diagnose messages stuck in queues, rejected by recipients or routed to spam because of configuration issues.",
      },
    ],
    benefits: [
      "Email that delivers reliably to customers and partners",
      "Authentication records aligned to reduce spoofing risk",
      "Consistent client configuration across every device",
      "Clear account structure that scales with the team",
      "Documented settings for troubleshooting and audits",
      "Fewer support calls caused by misconfigured devices",
    ],
    scenarios: [
      {
        title: "New business",
        description: "A company sets up professional email on its domain for the first time and needs mailboxes, DNS and client devices configured correctly from day one.",
      },
      {
        title: "Existing email environment",
        description: "A business has email running but suspects the configuration is incomplete — authentication records missing, devices set up inconsistently or admin access unclear.",
      },
      {
        title: "Migration to a new platform",
        description: "An organization is moving to a different email provider and needs DNS, mailboxes and clients reconfigured without losing access mid-transition.",
      },
      {
        title: "Growing team",
        description: "New staff need accounts, devices and shared mailbox access configured to the same standard as the rest of the company.",
      },
      {
        title: "Domain change",
        description: "A rebrand or acquisition means new addresses on a new domain, with DNS, authentication and client settings updated across the environment.",
      },
      {
        title: "Delivery problems",
        description: "Outbound mail lands in spam or is rejected outright, and the business needs SPF, DKIM and DMARC reviewed and corrected.",
      },
    ],
    detailedSections: [
      {
        title: "The layers of a working email configuration",
        paragraphs: [
          "A business email environment has four layers that must be configured together. The mailbox layer holds accounts, aliases and quotas on the chosen platform. The DNS layer tells the world where your mail goes and who may send it. The protocol layer — IMAP, POP, SMTP and Exchange ActiveSync or MAPI — governs how clients connect. The client layer is what your staff sees on each device.",
          "Most email problems are boundary problems between these layers. A mailbox can be perfectly configured while SPF is missing, causing recipients to reject its messages. Or DNS can be correct while a single phone uses legacy SMTP settings and fails to send. We configure the environment as a system, not as isolated settings.",
        ],
      },
      {
        title: "DNS records that control email",
        paragraphs: [
          "MX records direct inbound mail to your provider's servers; their hostnames and priorities must match the provider's published values exactly. SPF is a TXT record listing which servers may send mail for your domain, and it fails silently when it exceeds ten DNS lookups or ends in the wrong qualifier.",
          "DKIM adds a cryptographic signature to outbound messages using a public key published in DNS, letting receivers verify the message was not altered. DMARC ties SPF and DKIM together with a policy — monitor, quarantine or reject — and optionally sends reports showing who is sending mail claiming to be your domain. We configure all three and verify alignment before enforcement.",
        ],
      },
      {
        title: "Client and device configuration",
        paragraphs: [
          "Modern email clients connect using IMAP or provider-specific protocols for incoming mail and authenticated SMTP for sending. Correct configuration covers server names, ports, encryption methods and authentication type — details that differ between providers and change when providers deprecate legacy options.",
          "Consistency matters at scale. When every desktop, laptop and phone is configured to the same documented standard, onboarding new staff is quick and troubleshooting is straightforward. We configure devices to a defined baseline and record the settings so the baseline survives staff and device turnover.",
        ],
      },
      {
        title: "Ongoing administration",
        paragraphs: [
          "Configuration is not a one-time event. Accounts are added and removed, providers change their requirements, authentication policies tighten and new devices appear. Without ongoing attention, configurations drift until something breaks.",
          "We provide administration that keeps the environment aligned: user lifecycle management, periodic review of DNS and authentication records, updating client settings when provider requirements change, and maintaining documentation so the setup remains understandable.",
        ],
      },
    ],
    process: [
      { step: "01", title: "Review", description: "Assess the current platform, domain, DNS records, client devices and account structure." },
      { step: "02", title: "Plan", description: "Define the target configuration: mailbox layout, DNS changes, authentication policy and device standard." },
      { step: "03", title: "Configure", description: "Apply mailbox settings, DNS records and authentication in the correct order." },
      { step: "04", title: "Connect", description: "Set up desktop and mobile clients to the documented baseline for each user." },
      { step: "05", title: "Verify", description: "Test inbound and outbound delivery, authentication results and sync across all devices." },
      { step: "06", title: "Maintain", description: "Administer accounts, review records periodically and update settings as requirements change." },
    ],
    technicalConsiderations: [
      { title: "MX record accuracy", description: "MX hostnames and priorities must match the provider's specification exactly; an extra record or wrong priority can break inbound mail." },
      { title: "SMTP authentication", description: "Outbound mail should use authenticated SMTP on the correct port with encryption; providers increasingly reject legacy basic auth." },
      { title: "SPF lookup limit", description: "SPF permits a maximum of ten DNS lookups; including too many sending services causes silent authentication failures." },
      { title: "DKIM alignment", description: "The DKIM signing domain should align with the From address domain for DMARC to pass consistently." },
      { title: "DMARC policy staging", description: "Start with a monitoring policy, review reports, then move to quarantine or reject to avoid blocking legitimate mail." },
      { title: "IMAP versus POP", description: "IMAP keeps mail synchronized across devices and is the default choice; POP downloads locally and suits few business scenarios." },
    ],
    securityConsiderations: [
      { title: "Account access control", description: "Use unique credentials, multi-factor authentication and role-appropriate permissions for every mailbox and admin account." },
      { title: "Authentication enforcement", description: "SPF, DKIM and DMARC reduce spoofing risk but do not eliminate phishing; they are one layer of a wider security approach." },
      { title: "Forwarding and delegation", description: "Audit automatic forwarding rules and delegated access so mail is not silently copied outside the organization." },
      { title: "Offboarding", description: "Disable access promptly when staff leave, preserving mailbox data according to your retention requirements." },
    ],
    whoItIsFor: [
      "Businesses configuring domain-based email for the first time",
      "Organizations with incomplete or inconsistent email settings",
      "Companies moving to a new email platform",
      "Teams adding users who need standardized configuration",
      "Businesses whose mail is being rejected or marked as spam",
    ],
    relatedServices: ["business-email", "business-email-setup", "business-email-dns", "email-security-authentication"],
    faqs: [
      {
        question: "Which email platforms can you configure?",
        answer:
          "We configure business email on the platform you have chosen — including major hosted business email services and provider-hosted mailboxes. We work with your existing provider rather than reselling a specific one.",
      },
      {
        question: "What is the difference between setup and configuration?",
        answer:
          "Setup usually means creating a new environment from scratch. Configuration covers that plus tuning an existing environment — correcting DNS, aligning authentication, standardizing clients and fixing delivery issues.",
      },
      {
        question: "Why is our email going to spam?",
        answer:
          "Common causes are missing or misconfigured SPF, DKIM or DMARC records, a domain reputation problem, or sending through servers not authorized in your SPF record. We audit the full chain and correct the configuration issues we find.",
      },
      {
        question: "Can you configure email on phones and laptops?",
        answer:
          "Yes. We set up email clients on desktops, laptops, phones and tablets using the correct server settings, ports and authentication methods for your provider, to a consistent documented standard.",
      },
      {
        question: "Do SPF, DKIM and DMARC stop all phishing?",
        answer:
          "No. These records reduce spoofing of your domain and improve deliverability, but they do not eliminate phishing or all email threats. They are an important layer alongside account security and user awareness.",
      },
      {
        question: "Can you manage email accounts on an ongoing basis?",
        answer:
          "Yes. We provide ongoing administration covering user adds and removals, password resets, alias and shared mailbox changes, and periodic review of DNS and authentication records.",
      },
    ],
    ctaTitle: "Need business email configured correctly?",
    ctaDescription:
      "Tell us about your platform, domain and devices, and we can recommend a practical configuration approach for your environment.",
    seoTitle: "Business Email Configuration Services",
    seoDescription:
      "Business email configuration covering mailboxes, DNS, MX, SMTP, SPF, DKIM, DMARC and client setup on desktop and mobile by Infinity Techiez.",
    canonical: `${businessInfo.siteUrl}/it-services/business-email-configuration`,
    breadcrumbs: baseBreadcrumbs("Business Email Configuration", "business-email-configuration"),
  },
];

export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return landingPages.find((page) => page.slug === slug);
}
