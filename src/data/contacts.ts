export interface ContactLink {
  label: string;
  href: string;
  type?: 'website' | 'email' | 'phone' | 'social';
}

export interface ContactEntry {
  id: string;
  name: string;
  description: string;
  logoSrc?: string;
  links: ContactLink[];
  bullets?: string[];
}

export interface ContactSection {
  id: string;
  title: string;
  entries: ContactEntry[];
}

export const contactSections: ContactSection[] = [
  {
    id: 'law-enforcement',
    title: 'Law Enforcement Agencies',
    entries: [
      {
        id: 'cicc',
        name: 'Cybercrime Investigation and Coordinating Center (CICC)',
        description:
          'The Cybercrime Investigation and Coordinating Center (CICC) is the central coordinating body for cybercrime complaints and referrals under the Department of Information and Communications Technology (DICT). It helps receive, coordinate, and forward cybercrime reports to the proper agencies for investigation and action.',
        logoSrc: 'logos/CICC.jpg',
        links: [
          { label: 'CICC Official Website', href: 'https://cicc.gov.ph/', type: 'website' },
          {
            label: 'CICC Cybercrime Reporting Page',
            href: 'https://www.cicc.gov.ph/',
            type: 'website',
          },
          { label: 'Hotline: 1326', href: 'tel:1326', type: 'phone' },
        ],
      },
      {
        id: 'pnp-acg',
        name: 'Philippine National Police Anti-Cybercrime Group (PNP-ACG)',
        description:
          'The Philippine National Police Anti-Cybercrime Group (PNP ACG) is the unit responsible for investigating cyber-related crimes such as hacking, phishing, online scams, cyber libel, identity theft, online harassment, and other similar offenses. It works to track down offenders, gather digital evidence, and support the prosecution of cybercrime cases.',
        logoSrc: 'logos/PNP ACG.png',
        links: [
          {
            label: 'PNP Anti-Cybercrime Group',
            href: 'https://pnpacg.ph/',
            type: 'website',
          },
          {
            label: 'PNP Anti-Cybercrime Group Facebook page',
            href: 'https://www.facebook.com/PNPACG',
            type: 'social',
          },
          {
            label: 'PNP-ACG Contact Page',
            href: 'https://pnpacg.ph/contact-us/',
            type: 'website',
          },
        ],
        bullets: [
          'Locate the Regional Anti-Cybercrime Unit (RACU) for your region, then report the incident using their hotline or email.',
          'Each RACU also has response teams for different areas within the region, so report to the appropriate team for a faster, more local response.',
        ],
      },
      {
        id: 'nbi-ccd',
        name: 'National Bureau of Investigation Cybercrime Division (NBI-CCD)',
        description:
          'The National Bureau of Investigation Cybercrime Division (NBI-CCD) handles complex and high-profile cybercrime cases. It conducts in-depth investigations and digital forensics to help identify offenders, gather strong evidence, and support the prosecution of serious cybercrime incidents.',
        logoSrc: 'logos/NBI.jpg',
        links: [
          { label: 'NBI Official Website', href: 'https://nbi.gov.ph/', type: 'website' },
          {
            label: 'NBI Cybercrime Division Complaint',
            href: 'https://nbi.gov.ph/',
            type: 'website',
          },
          { label: 'ccd@nbi.gov.ph', href: 'mailto:ccd@nbi.gov.ph', type: 'email' },
        ],
      },
      {
        id: 'doj-ooc',
        name: 'Department of Justice Office of Cybercrime (DOJ-OOC)',
        description:
          'The Department of Justice – Office of Cybercrime (DOJ-OOC) is responsible for handling the prosecution and legal coordination of cybercrime cases in the Philippines. Created under Republic Act No. 10175 or the Cybercrime Prevention Act of 2012, it works with law enforcement agencies to ensure proper case processing, build legal action, and support the successful prosecution of cybercrime offenders.',
        logoSrc: 'logos/DOJ OOC.jpg',
        links: [
          {
            label: 'DOJ Office of Cybercrime',
            href: 'https://www.doj.gov.ph/',
            type: 'website',
          },
          {
            label: 'Office of Cybercrime',
            href: 'https://www.facebook.com/DOJOfficeofCybercrime',
            type: 'social',
          },
          { label: '+63 2 8524 8216', href: 'tel:+63285248216', type: 'phone' },
          { label: 'cybercrime@doj.gov.ph', href: 'mailto:cybercrime@doj.gov.ph', type: 'email' },
        ],
      },
      {
        id: 'npc',
        name: 'National Privacy Commission (NPC)',
        description:
          'The National Privacy Commission (NPC) is the agency that protects your personal data and privacy in the Philippines. It handles cases like data breaches, identity misuse, and the unauthorized sharing or exposure of personal information. The NPC helps make sure that your private information is handled safely and properly by companies, organizations, and individuals.',
        logoSrc: 'logos/NPC.jpg',
        links: [
          {
            label: 'National Privacy Commission',
            href: 'https://privacy.gov.ph/',
            type: 'website',
          },
          {
            label: 'complaints@privacy.gov.ph',
            href: 'mailto:complaints@privacy.gov.ph',
            type: 'email',
          },
          {
            label: '(+63) 2 5322 1322 Local 114 or 115',
            href: 'tel:+63253221322',
            type: 'phone',
          },
          { label: '+63 970 818 0555 (Smart)', href: 'tel:+639708180555', type: 'phone' },
          { label: '+63 905 506 1478 (Globe)', href: 'tel:+639055061478', type: 'phone' },
          {
            label: 'National Privacy Commission',
            href: 'https://www.facebook.com/npcgovph',
            type: 'social',
          },
        ],
      },
    ],
  },
  {
    id: 'financial',
    title: 'Financial Agencies',
    entries: [
      {
        id: 'bsp',
        name: 'Bangko Sentral ng Pilipinas (BSP)',
        description:
          'The Bangko Sentral ng Pilipinas (BSP) is the central bank of the Philippines. It handles complaints and reports involving financial fraud in banks, e-wallets, online banking, InstaPay, and PesoNet. The BSP helps make sure that financial institutions follow rules and that users are protected from scams and unauthorized transactions.',
        logoSrc: 'logos/BSP.jpg',
        links: [
          {
            label: 'Bangko Sentral ng Pilipinas',
            href: 'https://www.bsp.gov.ph/',
            type: 'website',
          },
          { label: 'bspmail@bsp.gov.ph', href: 'mailto:bspmail@bsp.gov.ph', type: 'email' },
          {
            label: 'Bangko Sentral ng Pilipinas Facebook Page',
            href: 'https://www.facebook.com/BangkoSentralngPilipinas',
            type: 'social',
          },
        ],
      },
      {
        id: 'sec',
        name: 'Securities and Exchange Commission (SEC)',
        description:
          'The Securities and Exchange Commission (SEC) is the agency that regulates investments and companies in the Philippines. It handles reports about online investment scams, illegal lending apps, and fake or fraudulent investment schemes. The SEC helps protect people from scams that involve investing or borrowing money online.',
        logoSrc: 'logos/SCC.png',
        links: [
          {
            label: 'Securities and Exchange Commission Philippines',
            href: 'https://www.sec.gov.ph/',
            type: 'website',
          },
          {
            label: 'Securities and Exchange Commission Philippines',
            href: 'https://www.facebook.com/SECPhilippines',
            type: 'social',
          },
        ],
      },
    ],
  },
  {
    id: 'mental-health',
    title: 'Mental Health Support Organizations',
    entries: [
      {
        id: 'ncmh',
        name: 'National Center for Mental Health (NCMH) Crisis Hotline',
        description:
          'Provides 24/7 free, compassionate, and confidential support for individuals in emotional distress or crisis.',
        logoSrc: 'logos/NCMH.jpg',
        links: [
          { label: '1553 (nationwide toll-free)', href: 'tel:1553', type: 'phone' },
          { label: '0917 899 8726 (Globe/TM)', href: 'tel:+639178998726', type: 'phone' },
          { label: '0908 639 2672 (Smart/SUN/TNT)', href: 'tel:+639086392672', type: 'phone' },
          {
            label: 'NCMH Crisis Hotline',
            href: 'https://www.facebook.com/ncmhcrisis',
            type: 'social',
          },
        ],
      },
      {
        id: 'in-touch',
        name: 'In Touch Community Services Crisis Line',
        description:
          'Provides confidential, 24/7 counseling and crisis support through trained volunteers.',
        logoSrc: 'logos/InTouch.png',
        links: [
          { label: '+632 8893 7603', href: 'tel:+63288937603', type: 'phone' },
          { label: '+63 919 056 0709', href: 'tel:+639190560709', type: 'phone' },
          { label: '+63 917 800 1123', href: 'tel:+639178001123', type: 'phone' },
          { label: '+63 922 893 8944', href: 'tel:+639228938944', type: 'phone' },
          {
            label: 'ITCS Appointment Booking Form',
            href: 'https://www.in-touch.org/',
            type: 'website',
          },
          {
            label: 'In Touch Community Services',
            href: 'https://www.in-touch.org/',
            type: 'website',
          },
          {
            label: 'In Touch Community Services',
            href: 'https://www.facebook.com/InTouchCS',
            type: 'social',
          },
        ],
      },
      {
        id: 'hopeline',
        name: 'HOPELINE Philippines',
        description:
          'Offers 24/7 crisis intervention and emotional support for depression, suicide, and mental health concerns.',
        logoSrc: 'logos/HOPEline.jpg',
        links: [
          { label: '0917 558 4673', href: 'tel:+639175584673', type: 'phone' },
          { label: 'Hopeline PH', href: 'https://www.facebook.com/hopelineph', type: 'social' },
        ],
      },
      {
        id: 'pgh',
        name: 'Philippine General Hospital (PGH) – Psychiatry Department',
        description:
          'Provides psychiatric consultations and behavioral medicine services.',
        logoSrc: 'logos/PGH.jpg',
        links: [
          {
            label: 'Psychiatry and Behavioral Medicine | Philippine General Hospital',
            href: 'https://pgh.gov.ph/',
            type: 'website',
          },
          {
            label: 'UP-PGH Department of Psychiatry & Behavioral Medicine',
            href: 'https://www.facebook.com/UPPGHPsychiatry',
            type: 'social',
          },
        ],
      },
    ],
  },
  {
    id: 'pwd-allies',
    title: 'PWD Allies, Advocacy Groups, and Support Organizations',
    entries: [
      {
        id: 'pending',
        name: 'Coming Soon',
        description:
          'Content for PWD allies, advocacy groups, and support organizations is pending and will be added when verified details are available.',
        links: [],
      },
    ],
  },
];
