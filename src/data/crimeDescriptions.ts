import type { CrimeType } from './questionnaire';

export interface CrimeDescription {
  id: CrimeType;
  title: string;
  paragraphs: string[];
}

export const crimeDescriptions: Record<CrimeType, CrimeDescription> = {
  'online-shopping-scams': {
    id: 'online-shopping-scams',
    title: 'Online Shopping Scams',
    paragraphs: [
      'Online shopping is now very popular because it is fast and convenient. However, online scams have also become more common. Scammers often trick buyers by posting products with very low prices that seem too good to be true. After payment, victims may discover that the product is fake, poor quality, or does not exist at all. Sometimes, the seller suddenly disappears and can no longer be contacted.',
      'If this happens to you, it is best to report fake or suspicious listings right away. Below are simple instructions on how to report them depending on the platform where you saw them.',
      'If you already paid for the item, some e-commerce platforms may still give refunds if the product is proven to be fraudulent. This is why reporting and collecting proof are very important. Take clear photos or videos of the item, especially while opening the package, to use as evidence.',
      'If you bought the item through unofficial online sellers, such as social media posts or fake accounts asking for bank or e-wallet transfers, immediately report the incident to your bank or e-wallet provider for possible money recovery. Keep in mind that different banks and e-wallet services may have different ways of reporting suspicious transactions, so make sure to check their official support or reporting channels.',
      'If you selected that the incident happened through an e-wallet service, instructions on how to report it will be provided below.',
      'It is also very important to report the incident to the Cybercrime Investigation and Coordinating Center (CICC) or the Philippine National Police Anti-Cybercrime Group (PNP ACG). Visit the contacts page for instructions on how to file a report, along with your screenshots and other relevant documents as evidence.',
    ],
  },
  'investment-scams': {
    id: 'investment-scams',
    title: 'Investment Scams',
    paragraphs: [
      'Earning money is not easy, and scammers take advantage of people who want a better and more comfortable life. They may promise very high profits and say that your money will double in just a few months. Some scammers even give small earnings at first to make the investment look real and encourage you to invest more money. Then, once they have gained your trust, they suddenly disappear without a trace.',
      'If you think you are dealing with this kind of situation, it is best to spot the warning signs early. Ask for official documents such as government-issued IDs, NBI clearance, or barangay clearance. Real investments are also usually connected to actual businesses, insurance, or other assets, so ask for documents like business permits or insurance papers.',
      'If the person or “agent” cannot provide proper documents, do not continue dealing with them. It is most likely a scam. If they do provide documents, check them carefully for signs of being fake. For visually impaired individuals, it may help to ask trusted sighted supporters to examine the documents. You may also use AI tools such as ChatGPT to help check for possible inconsistencies or suspicious details.',
      'If you notice anything suspicious, report the person or account on the platform where they contacted you. Make sure you have properly documented the incident by saving screenshots, messages, receipts, and other evidence, based on the documenting tips found on the home page.',
      'However, if money has already been sent, report the transaction immediately to your bank or e-wallet provider. Different banks and e-wallet services may have different ways of reporting fraudulent transactions, so make sure to use their official support channels. If you selected that the incident happened through an e-wallet service, reporting instructions will be provided below.',
      'It is also very important to report the incident to the Bangko Sentral ng Pilipinas (BSP), Cybercrime Investigation and Coordinating Center (CICC) or the Philippine National Police Anti-Cybercrime Group (PNP ACG). Visit the contacts page for instructions on how to file a report, along with your screenshots and other relevant documents as evidence.',
      'Lastly, losing a large amount of hard-earned money can be emotionally stressful. If you are struggling emotionally after the incident, you may also visit the contacts page for mental health and emotional support resources.',
    ],
  },
  'online-lending-scams': {
    id: 'online-lending-scams',
    title: 'Online Lending Scams',
    paragraphs: [
      'We understand that applying for a loan through banks can be difficult. Many banks require a lot of documents, and some even ask for collateral before approving a loan. Because of this, many people turn to unofficial lenders or online loan agents, especially during emergencies when money is urgently needed.',
      'Scammers take advantage of these situations by offering loans with little to no requirements, very low interest rates, and fast approval. However, they often ask for an “initial processing fee” first, or even request your ATM card and PIN as collateral. Once they receive your money or information, they suddenly disappear.',
      'If you spot these online lending scams, document everything and report them right away on the platform where they contacted you. Do not fall for pressure tactics such as “This offer is only available today” or “You will get the money immediately.” Scammers use these statements to rush people into making decisions without thinking carefully.',
      'Before borrowing money, always ask for proper documents and agreements. Even small lenders usually provide written agreements to protect both the lender and the borrower. Read the terms carefully and make sure you fully understand them before signing anything.',
      'If you already sent money and the lender disappeared, report the incident immediately to your bank or e-wallet provider. Save screenshots of conversations, payment receipts, timestamps, account names, and any other important details that may help serve as evidence for possible money recovery.',
      'If you selected that the incident happened through an e-wallet service, reporting instructions will be provided below.',
      'It is also very important to report the incident to the Bangko Sentral ng Pilipinas (BSP), Cybercrime Investigation and Coordinating Center (CICC) or the Philippine National Police Anti-Cybercrime Group (PNP ACG). Visit the contacts page for instructions on how to file a report, along with your screenshots and other relevant documents as evidence.',
      'Lastly, dealing with emergencies and financial problems is already stressful, and becoming a victim of a lending scam can make the situation even more emotionally difficult. You may visit the contacts page for resources and support on how to cope with stress and emotional distress caused by these experiences.',
    ],
  },
  'lottery-prize-scams': {
    id: 'lottery-prize-scams',
    title: 'Lottery and Prize Scams',
    paragraphs: [
      'Here in the Philippines, many people dream of winning the lottery and finally living a more comfortable life. We all want to help our families, buy our dream house or car, and feel financially secure.',
      'Sadly, scammers take advantage of these dreams. They may send messages saying that you won a huge cash prize or jackpot. But before you can “claim” it, they ask for a small fee first. They make it sound convincing: “Why worry about ₱10,000 if you’re about to become a millionaire?” But once you send the money, the scammers disappear, and the prize was never real in the first place.',
      'Always remember: if someone asks you to pay money to claim a prize, it is most likely a scam. Legitimate lottery companies usually deduct fees from the prize itself, so there is no need to send money upfront.',
      'Also, never share personal or sensitive information online, such as your OTP, bank details, passwords, or credit card information. Real companies will never ask for these through text messages, chats, or calls.',
      'If this happens to you, report the message or account right away on the platform where you received it. It is also very important to report the incident to the Cybercrime Investigation and Coordinating Center (CICC) or the Philippine National Police Anti-Cybercrime Group (PNP ACG). Visit the contacts page for instructions on how to file a report, along with your screenshots and other relevant documents as evidence.',
    ],
  },
  'job-employment-scams': {
    id: 'job-employment-scams',
    title: 'Job and Employment Scams',
    paragraphs: [
      'Looking for a job is not easy nowadays. Competition is tough, bills keep piling up, and finding work becomes a major priority. So when someone finally offers you a job opportunity, it is normal to feel excited and hopeful, especially for many people in the PWD community who still experience unemployment and discrimination.',
      'Sadly, scammers take advantage of this situation. They may offer you a “job,” then suddenly ask for money for processing fees, training, IDs, or HR documents. Some may even ask you to do work first, but disappear once the job is finished without paying you. These scams are very common on unregulated job boards and social media pages where almost anyone can post fake job listings.',
      'Be careful of offers that seem too good to be true. For example, if a “simple copy-paste job” promises Php 500 per hour with little effort, that is a major red flag and is most likely a scam.',
      'Legitimate companies usually have official websites, branding, and verified job pages. Before applying, research the company first. Check if they have a real website and official contact details. Also, pay attention to the recruiter’s email address. If they claim to represent a company but only use a personal email like “gmail.com,” that can be a warning sign.',
      'Most importantly, never send money just to get a job. You are applying for work to earn money, not to lose it. Legitimate employers do not ask applicants to pay fees before getting hired.',
      'If you encounter these scams, report them immediately on the platform where you found the listing. Instructions for reporting scams on common online job boards are provided below.',
      'It is also very important to report the incident to the Cybercrime Investigation and Coordinating Center (CICC) or the Philippine National Police Anti-Cybercrime Group (PNP ACG). Visit the contacts page for instructions on how to file a report, along with your screenshots and other relevant documents as evidence.',
    ],
  },
  'romance-scams': {
    id: 'romance-scams',
    title: 'Romance, Love, and Dating Scams',
    paragraphs: [
      'One swipe, one message, one late-night conversation. And suddenly, you feel like you’ve found someone special. With dating apps and social media becoming more popular, meeting people online is easier than ever. You can even connect with someone from across the world without ever leaving your home.',
      'But sadly, not everyone online is looking for real love. Some scammers are very good at pretending to care. Through chats, voice calls, and video calls, they slowly build your trust and make you feel emotionally connected to them. Once they know you care, they start asking for money. They may say they have a medical emergency, family problem, or financial struggle. Some even talk about “building a future together” and convince victims to invest money for their supposed future as a couple.',
      'These scams usually happen over a long period of time. Scammers take their time gaining your trust before taking advantage of your feelings. They may repeatedly ask for money until you have nothing left to give. Then suddenly disappear, ghost or even block you completely.',
      'In some cases, things can become even more serious. Because of the trust in the relationship, victims may share private or intimate photos and videos. Scammers can use these to threaten, blackmail, or embarrass victims by demanding more money or threatening to post the content online.',
      'What makes these scams even harder is that many scammers use fake names, stolen photos, and fake profiles. This makes them very difficult to track down. That is why it is important to report the incident to the National Bureau of Investigation (NBI) for possible digital forensic investigation. You should also report the incident to the Philippine National Police Anti-Cybercrime Group (PNP ACG), or the Cybercrime Investigation and Coordinating Center (CICC). If your private photos, videos, or personal information were shared without your consent, report the incident to the National Privacy Commission as well.',
      'Make sure to save screenshots, chat messages, call recordings, transaction receipts, timelines, and other important evidence. Visit the contacts page for instructions on how to report through their official channels.',
    ],
  },
  'impersonation-identity-theft': {
    id: 'impersonation-identity-theft',
    title: 'Impersonation and Identity Theft',
    paragraphs: [
      '“Anak, paki GCash nga sa number na ‘to.” “Your bank account is compromised.” “You are involved in a crime and must respond immediately.” Messages like these can feel scary and real, especially when they seem to come from someone you know or trust. But sometimes, they are actually scams.',
      'Impersonation scams happen when scammers pretend to be another person online. They may act like your relative, friend, teacher, boss, bank employee, delivery rider, police officer, or even a government worker. Their goal is to scare you, pressure you, or gain your trust so they can get your money or personal information.',
      'Scammers today also use AI to make impersonation and identity theft scams more believable. One example is voice cloning, where AI copies a person’s voice using old recordings and creates fake audio of them saying things they never actually said.',
      'Another dangerous tool is deepfakes. These are AI-generated videos that can make it look like someone said or did something they never really did. Scammers use these fake videos and audio clips to gain trust, spread false information, or trick victims into sending money or personal information.',
      'Sometimes, scammers also steal someone’s identity. This is called identity theft. They may use your name, photos, or social media account to pretend to be you and scam other people. In some cases, they may even try to access your bank account or use your information for fraud.',
      'Scammers usually try to make you panic so you will act quickly without thinking. They may say there is an emergency, that your account will be closed, or that you are in trouble with the law. If this happens, stop first and verify the message through another trusted contact method before responding.',
      'Never share your OTP, passwords, PINs, or other personal information online, even if the person claims to be from a bank or government office. Legitimate institutions will never ask for these through messages or calls.',
      'If this happens to you, report the fake account, message, or caller right away on the platform where you received it. Save screenshots, conversations, account links, receipts, and other evidence.',
      'You should also report the incident to the Philippine National Police, National Bureau of Investigation, or Cybercrime Investigation and Coordinating Center, especially if your identity or personal information was stolen. With your documents and evidence, visit the contacts page for instructions on how to report.',
    ],
  },
  hacking: {
    id: 'hacking',
    title: 'Hacking',
    paragraphs: [
      'One wrong click. One fake website. One message pretending to be from your bank. That is sometimes all it takes for hackers to get into your account.',
      'Hacking happens when someone tries to access your account, device, or personal information without your permission. Today, hackers do not always “break into” systems like in movies. Many of them simply trick people into giving away their information.',
      'One common method is called social engineering. This is when scammers pretend to be someone you trust, like a bank employee, delivery rider, customer support agent, or even a friend or relative. They may send scary messages like “Your account will be locked!” or “Someone is using your account!” to make you panic and quickly give your password, OTP, or PIN.',
      'Another common trick is fake links, websites, and apps. Scammers now create websites and apps that look almost exactly like the real ones. A fake banking website may have the same logo, colors, and design as the real bank. Sometimes, the only difference is one tiny letter in the website address. That is why these scams can be very difficult to spot.',
      'Their goal is simple: steal your usernames, passwords, OTPs, and PINs. Once they get these, they can access your accounts, steal your money, scam other people using your account, or lock you out completely.',
      'A good rule to remember: never click links right away. Always verify first. Check if the website uses the official domain name, and carefully inspect the link character by character before clicking it. Even one wrong letter can lead you to a fake website.',
      'If you notice suspicious logins or unauthorized transactions in your bank account or e-wallet, act immediately. Time is very important. Change your passwords right away and contact your bank or e-wallet provider to secure or freeze your account before more damage is done.',
      'You should also report fraudulent transactions to the Bangko Sentral ng Pilipinas to help track where the money went.',
      'All hacking incidents should also be reported to the Philippine National Police Anti-Cybercrime Group, Cybercrime Investigation and Coordinating Center, and National Bureau of Investigation. Visit the contacts page for instructions on how to report through their official channels.',
    ],
  },
  'cyberbullying-harassment': {
    id: 'cyberbullying-harassment',
    title: 'Cyberbullying and Harassment',
    paragraphs: [
      '“Why are they saying these things about me?” “Why won’t they leave me alone?” “What if people believe them?” Being attacked online can feel scary, stressful, and lonely. Maybe someone is spreading rumors about you, sending hateful messages, sharing your private information, mocking you online, or even pretending to be you. Some people are even stalked online and later in real life. These experiences are serious, and they are not something you should just ignore.',
      'These are forms of cyberbullying and online harassment.',
      'Under Republic Act No. 10627, bullying refers to severe or repeated actions that cause physical, emotional, or mental harm to another person. When this happens through phones, social media, online games, group chats, emails, or other digital platforms, it becomes cyberbullying.',
      'Cyberbullying can include hurtful or threatening messages, posting embarrassing or false information, spreading rumors online, sharing private photos or information without permission, excluding someone from important online groups, or pretending to be someone else online to damage their reputation.',
      'Online harassment can also include stalking, intimidation, repeated unwanted messages, threats, or behavior that makes someone feel unsafe or afraid.',
      'If this is happening to you, remember: you do not have to face it alone. Asking for help is important, especially before the situation becomes worse. Save screenshots, chats, posts, usernames, links, and other evidence. Even if it feels embarrassing or scary, reporting the incident can help protect both you and others.',
      'Start by reporting the issue where it happened. If it happened in school or at work, specific guides and resources are provided below.',
      'If the situation becomes more serious, you may also report it to the Cybercrime Investigation and Coordinating Center, Philippine National Police, or National Privacy Commission. Visit the contacts page for instructions on how to report through their official channels.',
      'Lastly, the emotional impact of cyberbullying and online harassment can be very painful, whether it feels small or overwhelming. Feelings like fear, stress, anxiety, embarrassment, anger, or sadness are all valid, and what you are experiencing should never be ignored. You do not have to go through this alone. Support and help are available. Visit the contacts page for mental health organizations and resources that can support you during difficult times.',
    ],
  },
  'online-sexual-exploitation': {
    id: 'online-sexual-exploitation',
    title: 'Online Sexual Exploitation',
    paragraphs: [
      'Not all online dangers are scams about money. Some of the most serious cybercrimes involve manipulation, abuse, and exploitation. And sadly, children are often the main targets.',
      'Online sexual exploitation happens when someone uses the internet, social media, messaging apps, or online games to manipulate, pressure, threaten, or abuse another person for sexual purposes. This is a very serious crime, especially when children are involved.',
      'Many offenders start by looking for vulnerable people or families going through financial problems. They may message children or parents online and pretend to be kind, caring, or helpful. Some act like friends, romantic partners, or even sponsors offering financial support.',
      'At first, the conversations may seem harmless. But over time, offenders slowly gain the victim’s trust. Then they begin asking for private photos, videos, or inappropriate video calls. Some offer money or gifts, while others use threats, fear, or blackmail to force victims into doing things they do not want to do.',
      'In many cases, the abuse does not stop after one incident. Offenders may save the photos or videos, share them with others, sell them online, or threaten victims into sending even more content. Because many of these criminals use fake names, fake accounts, and hidden identities, they can be difficult to track down.',
      'If you or someone you know may be experiencing this kind of exploitation, do not stay silent. Report it immediately. Save screenshots, usernames, messages, payment receipts, links, and other evidence that may help investigators.',
      'You may report these incidents to the Philippine National Police Anti-Cybercrime Group and the Cybercrime Investigation and Coordinating Center. Visit the contacts page for instructions on how to report through their official channels.',
      'Lastly, experiencing sexual abuse or exploitation online can be emotionally painful and traumatic. If you need emotional support or mental health assistance, you may also visit the contacts page for organizations that can help.',
    ],
  },
};
