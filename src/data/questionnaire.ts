export type MoneyOption =
  | 'buy-something'
  | 'no-delivery'
  | 'invest'
  | 'loan-fee'
  | 'prize-fee'
  | 'job-fee'
  | 'romance-money'
  | 'impersonation-money';

export type NoMoneyOption =
  | 'click-link'
  | 'personal-info'
  | 'authority'
  | 'romance-explicit'
  | 'force-post'
  | 'rude-messages'
  | 'excluded-groups'
  | 'pressure-sexual'
  | 'blackmail-sexual';

export type PlatformOption =
  | 'e-wallet'
  | 'shopping'
  | 'social-email'
  | 'messaging'
  | 'job-board'
  | 'work'
  | 'school';

export type CrimeType =
  | 'online-shopping-scams'
  | 'investment-scams'
  | 'online-lending-scams'
  | 'lottery-prize-scams'
  | 'job-employment-scams'
  | 'romance-scams'
  | 'impersonation-identity-theft'
  | 'hacking'
  | 'cyberbullying-harassment'
  | 'online-sexual-exploitation';

export type ReportingCategory =
  | 'ewallet'
  | 'shopping'
  | 'social-email'
  | 'messaging'
  | 'job-board'
  | 'workplace'
  | 'school';

export interface QuestionnaireAnswers {
  involvesMoney: 'money' | 'no-money' | null;
  situation: MoneyOption | NoMoneyOption | null;
  platform: PlatformOption | null;
}

export const questionOneOptions = [
  {
    value: 'money' as const,
    label: 'This situation involves money or someone asking me to pay.',
  },
  {
    value: 'no-money' as const,
    label:
      'This situation does not involve money, but someone is bothering or hurting me online.',
  },
];

export const moneySituationOptions: { value: MoneyOption; label: string }[] = [
  {
    value: 'buy-something',
    label: 'They are trying to convince me to buy something online.',
  },
  {
    value: 'no-delivery',
    label:
      'I already bought something online, but they did not deliver the product or disappeared after I made the payment.',
  },
  {
    value: 'invest',
    label: 'They are asking me to invest money or promising I will earn a lot.',
  },
  {
    value: 'loan-fee',
    label: 'They are asking me to pay a fee so I can borrow money.',
  },
  {
    value: 'prize-fee',
    label: 'They are asking me to pay first before I can get a prize or reward.',
  },
  {
    value: 'job-fee',
    label: 'They are asking me to pay a fee to get a job.',
  },
  {
    value: 'romance-money',
    label:
      'A new romantic partner I met online is asking me for money for investment, health, or other concerns.',
  },
  {
    value: 'impersonation-money',
    label:
      'Someone I know or someone famous is asking me to send money due to immediate concerns.',
  },
];

export const noMoneySituationOptions: { value: NoMoneyOption; label: string }[] = [
  {
    value: 'click-link',
    label:
      'They are asking me to click a link or download an app due to immediate concerns (my account is compromised or hacked, I need to reset my password, etc.).',
  },
  {
    value: 'personal-info',
    label:
      'They are asking for my personal information (like username, passwords, OTP, bank details, photos, or videos).',
  },
  {
    value: 'authority',
    label:
      'Someone pretending to be an authority (like a boss, teacher, or a government official) is asking for my details.',
  },
  {
    value: 'romance-explicit',
    label:
      'A new romantic partner is asking me to send private or explicit photos or videos.',
  },
  {
    value: 'force-post',
    label: 'They are forcing or pressuring me to post or comment online.',
  },
  {
    value: 'rude-messages',
    label: 'They are sending me rude, hurtful, or threatening messages.',
  },
  {
    value: 'excluded-groups',
    label: 'They are leaving me out or targeting me in group chats or online groups.',
  },
  {
    value: 'pressure-sexual',
    label:
      'Someone is trying to pressure or blackmail me into sending sexual or intimate photos or videos.',
  },
  {
    value: 'blackmail-sexual',
    label:
      'Someone is threatening to expose sexual or intimate content I previously shared if I don’t send more or do what they want.',
  },
];

export const platformOptions: { value: PlatformOption; label: string }[] = [
  {
    value: 'e-wallet',
    label: 'On an e-wallet service (like GCash or Maya)',
  },
  {
    value: 'shopping',
    label:
      'On an online shopping app or website (like Shopee, Lazada, or Facebook Marketplace)',
  },
  {
    value: 'social-email',
    label: 'On social media or email service (like Facebook or Gmail)',
  },
  {
    value: 'messaging',
    label: 'On a messaging app (like Messenger or Viber)',
  },
  {
    value: 'job-board',
    label:
      'On a job board or employment marketplace (like LinkedIn, Jobstreet, or Upwork)',
  },
  {
    value: 'work',
    label: 'On a work platform (like email or office chat)',
  },
  {
    value: 'school',
    label: 'On a school platform or class group chat',
  },
];

const situationToCrimeMap: Record<MoneyOption | NoMoneyOption, CrimeType> = {
  'buy-something': 'online-shopping-scams',
  'no-delivery': 'online-shopping-scams',
  invest: 'investment-scams',
  'loan-fee': 'online-lending-scams',
  'prize-fee': 'lottery-prize-scams',
  'job-fee': 'job-employment-scams',
  'romance-money': 'romance-scams',
  'impersonation-money': 'impersonation-identity-theft',
  'click-link': 'hacking',
  'personal-info': 'hacking',
  authority: 'impersonation-identity-theft',
  'romance-explicit': 'online-sexual-exploitation',
  'force-post': 'cyberbullying-harassment',
  'rude-messages': 'cyberbullying-harassment',
  'excluded-groups': 'cyberbullying-harassment',
  'pressure-sexual': 'online-sexual-exploitation',
  'blackmail-sexual': 'online-sexual-exploitation',
};

const platformToReportingMap: Record<PlatformOption, ReportingCategory> = {
  'e-wallet': 'ewallet',
  shopping: 'shopping',
  'social-email': 'social-email',
  messaging: 'messaging',
  'job-board': 'job-board',
  work: 'workplace',
  school: 'school',
};

export function getCrimeType(
  situation: MoneyOption | NoMoneyOption | null,
): CrimeType | null {
  if (!situation) return null;
  return situationToCrimeMap[situation];
}

export function getReportingCategory(
  platform: PlatformOption | null,
): ReportingCategory | null {
  if (!platform) return null;
  return platformToReportingMap[platform];
}

export function isQuestionnaireComplete(answers: QuestionnaireAnswers): boolean {
  return Boolean(
    answers.involvesMoney && answers.situation && answers.platform,
  );
}
