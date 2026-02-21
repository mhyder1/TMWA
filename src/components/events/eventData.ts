export interface EventData {
  date: string;
  title: string;
  event: string;
  subEvent?: string;
  url?: string;
  email?: string;
}

export const events: EventData[] = [
  {
    date: "Feb 06",
    title: "Whole & Rooted: A Year of Holistic Wellness for Muslims",
    event:
      "Virtual sessions for TMWA members only. Open quarterly meet-ups to follow.",
  },
  {
    date: "Feb 14",
    title: "Black History Month Community Brunch",
    event:
      "Join us for delicious food & lecture on Black American Muslim contribution to society.",
  },
  {
    date: "Feb 27",
    title: "Sponsor Iftar for NCAT MSA",
    event: "TMWA will sponsor an iftar for NCAT-MSA students.",
  },
  {
    date: "Mar 04",
    title: "Sisters at the Range",
    event:
      "Learn the techniques of using a firearm. Will meet bi-monthly for the year.",
  },
  {
    date: "Apr 11",
    title: "Family Day by Every Baby Guilford",
    event: "TMWA members community service activity.",
  },
  {
    date: "Apr 25",
    title: "The Invisible Hijab: Living Your Inner Faith Outwardly, Pt 2",
    event:
      "A short, interactive seminar series diving into important topics that are often left unspoken in our communities.",
  },
  {
    date: "Jun 27",
    title: "Mindful Moments: Tea & Color",
    event: "Calm vibes, cozy & positive energy. Total reset.",
  },
  {
    date: "Jul 11",
    title: "That's So Tas-Tea: Sip the Vibe!",
    event:
      "A safe space for teens to gather and connect.",
    subEvent: "Ages 13–25.",
  },
  {
    date: "Jul 17–18",
    title: "UMB Youth Empowerment Summit",
    event:
      "Mentoring program guided by faith, leadership & sisterhood.",
    subEvent: "Ages 11–17.",
  },
  {
    date: "Sept 19",
    title: "Professional Muslimah Speed-Networking Mixer",
    event:
      "Develop confidence, cultivate purpose & build lasting networks of support.",
  },
  {
    date: "Oct 10",
    title: "Faith on the Go: Navigating Life as a Young Muslim",
    event:
      "Come learn & discuss ways of maintaining your Muslim identity in various spaces of life.",
    subEvent: "For college-aged students.",
  },
  {
    date: "Dec 29",
    title: "TMWA Two-Year Anniversary",
    event: "Celebration TBD.",
  },
];