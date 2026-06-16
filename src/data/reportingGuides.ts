import type { ReportingCategory } from './questionnaire';

export interface ReportingGuide {
  id: string;
  title: string;
  intro?: string;
  steps?: string[];
  notes?: string[];
  hotline?: string;
  videoLabel?: string;
  videoSrc?: string;
  transcript?: string;
}

export interface ReportingSection {
  id: ReportingCategory;
  title: string;
  intro: string;
  guides: ReportingGuide[];
}

const documentationNote =
  'Before drafting your report, make sure to save and document everything related to the incident — screenshots, messages, account details, timelines, and any video or audio recordings if possible. Don\'t delete anything, even small details can help during the investigation. Need help on what to collect? Visit the Home Page for a quick guide.';

export const reportingSections: Record<ReportingCategory, ReportingSection> = {
  ewallet: {
    id: 'ewallet',
    title: 'E-wallet Services',
    intro: documentationNote,
    guides: [
      {
        id: 'gcash',
        title: 'GCash',
        steps: [
          'Open the GCash app.',
          'At the bottom bar, tap the Transactions button. Screen reader: Tap the lower left button labeled "Home", then swipe right to the "Transactions" button.',
          'From the transaction list, tap on the item you did not authorize.',
          'Scroll or swipe right all the way down to the "Get Help" button.',
          'From the choices, scroll or swipe right and tap "Report a Scam".',
          'Fill out the form with the necessary details. Your GCash reference number should already be pre-populated from the transaction you chose. Note that your report should be as detailed as possible, with all necessary timestamps, screenshots, and information if needed.',
          'Tap the Submit button once done.',
        ],
        notes: [
          'Here is the demo with screen reader audio. Note that due to privacy reasons, the transaction details section, including the "Get Help" button and options, are trimmed from the video.',
        ],
        videoLabel: 'GCash screen reader video demo',
      },
      {
        id: 'maya',
        title: 'Maya',
        intro:
          'For any unauthorized transactions on Maya, report them immediately by calling their support team:',
        hotline: '+632 8845 7788',
        notes: [
          'Domestic Toll-free (PLDT): 1800 1084 57788',
          'Be ready to provide transaction details such as: recipient\'s name, transaction date and time, amount, and any other relevant information.',
          'Important to know: Since you authorized the transaction, Maya will be unable to issue a refund. However, the investigation team will review your report and may block the scammer\'s account in Maya depending on the results of the investigation.',
          'Report any fraudulent or suspicious transactions as soon as possible to help ensure the fastest resolution.',
        ],
      },
    ],
  },
  shopping: {
    id: 'shopping',
    title: 'Online Shopping App or Website',
    intro: documentationNote,
    guides: [
      {
        id: 'shopee',
        title: 'Shopee',
        steps: [
          'Open the Shopee app and go to the product listing you want to report.',
          'In the top right corner, tap on the three dots (⋯ labeled "More").',
          'Scroll or swipe and tap "Report Product".',
          'Choose and tap the option that best describes your report. Choices include: Fraudulent or fake product, Order brushing, or Prohibited items.',
          'Type specific details in your report, then scroll or swipe then tap the Report button.',
        ],
        notes: [
          'Disclaimer: The product presented in the demo is for sample purposes only and is not an actual fraudulent product.',
        ],
        videoLabel: 'Shopee screen reader video demo',
      },
      {
        id: 'lazada',
        title: 'Lazada',
        steps: [
          'Open the Lazada app and go to the product listing you want to report.',
          'In the top right corner, tap on the three dots (⋯ labeled "More").',
          'Scroll or swipe all the way down and tap "Report".',
          'Choose and tap the option that best describes your report. Choices include: Suspicious Store or product, Prohibited Goods, or Suspicious Payment.',
          'Type specific details in your report, then swipe and tap the Submit button.',
        ],
        videoLabel: 'Lazada screen reader video demo',
      },
      {
        id: 'facebook-marketplace',
        title: 'Facebook Marketplace',
        steps: [
          'Open your Facebook app, go to the Marketplace tab, and tap the product listing you wish to report.',
          'In the top right corner, tap the three dots (⋯ labeled "More Actions").',
          'Scroll or swipe all the way down, and tap "Report listing".',
          'Read through the description and tap the Continue button at the bottom.',
          'Choose the reason why you are reporting the product.',
          'Depending on your choice, you will either be done with the report or need to provide further information in text.',
          'Additionally, you could block the seller or hide their product listings.',
        ],
        videoLabel: 'Facebook Marketplace screen reader video demo',
      },
    ],
  },
  'social-email': {
    id: 'social-email',
    title: 'Social Media and Email Service',
    intro: documentationNote,
    guides: [
      {
        id: 'facebook-post',
        title: 'Facebook — Report a Post',
        steps: [
          'Open the Facebook app and tap the specific post you want to report.',
          'In the top-right corner of the post, tap the three dots (⋯ labeled Navigation Menu).',
          'Tap, or swipe right and tap the "Report Post" button.',
          'Choose the appropriate reason for reporting the post. Options may include: Bullying, Harassment or Abuse; Violent, hateful or disturbing content; or Scam, Fraudulent or False Information.',
          'Choose the option that best describes the problem. The choices may differ based on your previous answer.',
          'Review your selections, then tap Submit.',
          'Additionally, you may choose to block the person or page or hide posts from that specific page or profile.',
        ],
        videoLabel: 'Facebook post screen reader video demo',
      },
      {
        id: 'facebook-page',
        title: 'Facebook — Report a Page or Profile',
        steps: [
          'Open the Facebook app and go to the profile or page.',
          'In the top right corner of the cover photo, tap the three dots (⋯ labeled "Profile tools").',
          'Tap, or swipe right and tap the "Report Page/Profile" button.',
          'Fill out the report, similar to reporting a post.',
          'Review your selections, then submit.',
          'Additionally, you may block the page or profile.',
        ],
        videoLabel: 'Facebook page screen reader video demo',
      },
      {
        id: 'gmail',
        title: 'Gmail',
        steps: [
          'Open your Gmail app, then tap on the email you want to report.',
          'Tap the three dots in the top right corner (⋯ labeled "More actions").',
          'Scroll or swipe right to the "Report spam" button.',
          'Either report the email as spam or unsubscribe.',
        ],
        videoLabel: 'Gmail screen reader video demo',
      },
    ],
  },
  messaging: {
    id: 'messaging',
    title: 'Messaging Apps',
    intro: documentationNote,
    guides: [
      {
        id: 'messenger',
        title: 'Messenger',
        steps: [
          'Open your Messenger app and open the conversation with the person you want to report.',
          'At the top of the page, tap on their name.',
          'Scroll or swipe all the way down and tap the "Report" button.',
          'From the choices, select a problem to report. Choices include: Harassment, Pretending to be someone else, or Scam or fraud. Note that your recent conversation will be forwarded to Meta for review.',
          'Tap "Submit report", then tap the Submit button again to confirm.',
          'Additionally, you could block the person and get support for difficult moments.',
        ],
        videoLabel: 'Messenger screen reader video demo',
      },
      {
        id: 'viber',
        title: 'Viber',
        steps: [
          'Open your Viber app and open the conversation of the person you want to report.',
          'At the top of the screen, tap on the person\'s name (with the label "Tap here for more options").',
          'Scroll or swipe down to the "Chat info and settings" button.',
          'Scroll or swipe all the way down to the "Report this contact" button. Note that the five recent messages will be forwarded to Viber for review.',
          'Tap either the "Report" or "Report and block" button.',
        ],
        videoLabel: 'Viber screen reader video demo',
      },
    ],
  },
  'job-board': {
    id: 'job-board',
    title: 'Job Boards and Employment Marketplaces',
    intro: documentationNote,
    guides: [
      {
        id: 'linkedin',
        title: 'LinkedIn',
        steps: [
          'Open the LinkedIn app and open the job posting you wish to report.',
          'In the top right corner, tap on the three dots (⋯ labeled "More options").',
          'Scroll down or swipe and tap the "Report this job" button.',
          'Choose from the options why you are reporting the job. Choices include whether it is a scam, discriminatory, or something is broken.',
          'Choose from the options to provide more details about the listing. The choices will differ based on your previous selection.',
          'Tap on Submit at the bottom.',
        ],
        videoLabel: 'LinkedIn screen reader video demo',
      },
      {
        id: 'jobstreet',
        title: 'Jobstreet',
        steps: [
          'Open the JobStreet app, and tap on the job posting you want to report.',
          'Scroll or swipe all the way down after the job description and qualifications, then tap the "Report this job ad" button.',
          'For "Reason for reporting job", choose either Fraudulent, Discrimination, or Misleading.',
          'Add additional details in the additional details field that will help in their investigation.',
          'Tap on the "Report job" button.',
        ],
        notes: [
          'Note: The email field should be auto-populated. However, for privacy reasons, the email in the video demo has been removed.',
        ],
        videoLabel: 'Jobstreet screen reader video demo',
      },
      {
        id: 'upwork',
        title: 'Upwork',
        steps: [
          'Open your Upwork app, then tap on the job posting you wish to report.',
          'Scroll or swipe all the way down to the action buttons below the job summary, then tap the "Flag as Inappropriate" button.',
          'Choose from the options that best describe the job post. Choices include: Job looks like a scam or contains a suspicious link; Job post is illegal or unethical; or Client is misrepresenting their identity.',
          'Share additional details in the next field.',
          'Tap Submit at the bottom.',
        ],
        videoLabel: 'Upwork screen reader video demo',
      },
    ],
  },
  workplace: {
    id: 'workplace',
    title: 'Workplace-Related',
    intro:
      'Cybercrime in the workplace can happen to anyone, and it is important to act fast when it does. If you notice something suspicious, like a hacked account, strange emails, cyberbullying, or online harassment, do not ignore it.',
    guides: [
      {
        id: 'workplace-steps',
        title: 'How to Report Cyber Incidents in the Workplace',
        steps: [
          'Document everything. As soon as something happens, start documenting everything. Take screenshots of emails, chats, posts, or messages, and save important details like usernames, dates, and times. Write down what happened and how you discovered it. Even small details can help during an investigation. Avoid deleting anything connected to the incident because it may be used as evidence later on. Visit the home page for tips on how to properly document incidents.',
          'Securely create backups. It is also smart to protect your important files before problems happen. Back up your important personal documents, photos, and work files to your secure personal vault or trusted backup storage. This way, if a cyberattack damages or locks your files, you still have safe copies ready to recover.',
          'Immediately report. Report the incident right away to your supervisor, HR, or IT team using official channels, such as the company\'s reporting system or via email. Reporting quickly helps stop the problem before it gets worse. Sending a report through email is also helpful because it keeps a written record that can be used later if needed for an investigation, legal or disciplinary action.',
        ],
        notes: [
          'Also, cyberbullying and online harassment can make the workplace stressful and unsafe, and they should never be ignored. This may include hate speech, false rumors about your job performance, discrimination, being excluded from important group chats or activities, or retaliation after filing a complaint.',
          'Remember, you are not alone. Speaking up and reporting these incidents can help stop the behavior, protect others, and create a safer and more respectful workplace for everyone.',
          'If you need someone to talk to or need support, visit the Contacts page for mental health assistance.',
        ],
      },
    ],
  },
  school: {
    id: 'school',
    title: 'School-Related',
    intro:
      'Experiencing cybercrime, cyberbullying, or online harassment in school can feel scary, stressful, and overwhelming. You may receive hurtful messages, become the target of fake rumors, get excluded from important class group chats, or even have your account hacked. If this is happening to you, remember that you do not have to face it alone.',
    guides: [
      {
        id: 'school-steps',
        title: 'How to Report School-Related Incidents',
        steps: [
          'Before reporting the incident, document everything first. Take screenshots of messages, emails, posts, or chats, and save important details like usernames, dates, and times. Avoid deleting the evidence, since it may help during the investigation. For more tips on proper documentation, visit the Home page.',
          'Once you have saved the evidence, reach out to people you trust and report what happened. You can talk to parents or guardians to support and guide you through the situation.',
          'You can also talk to trusted teachers or professors to help report the incident and keep you safe in school.',
          'Guidance counselors can provide advice and emotional support.',
          'School administrators can investigate the incident and take action.',
        ],
        notes: [
          'Speaking up can help stop the behavior and protect other students from going through the same experience.',
          'If you need emotional support, visit the Contacts page for mental health assistance.',
        ],
      },
    ],
  },
};
