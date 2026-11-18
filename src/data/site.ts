// Everything written about you lives here. The page, llms.txt and the
// search-engine data are all generated from this file, so edit it once.

export const site = {
  name: 'Abhijit Rakas',
  url: 'https://abhijitrakas.com',
  jobTitle: 'Software Engineer',
  company: { name: 'rtCamp', url: 'https://rtcamp.com' },

  // Shown under your name, and used for search results and link previews.
  bio: 'Software engineer at rtCamp. I build for the web with WordPress, PHP and JavaScript, and enjoy making small tools that make developers’ lives easier.',

  // Topics search engines and AI agents should associate with you.
  skills: ['WordPress', 'PHP', 'JavaScript', 'Web development'],

  // The “Beyond work” section.
  about: [
    {
      label: 'Community',
      text: 'I was one of the organizers of WordCamp Nagpur 2017. As Volunteer Wrangler, I managed the entire volunteer team.',
    },
    {
      label: 'Cricket',
      text: 'I love watching cricket and play whenever I get the time. Rohit Sharma is my favourite player, and India’s series-winning victory at the Gabba in the 2020–21 Border-Gavaskar Trophy is the greatest match I’ve watched.',
    },
    {
      label: 'Next up',
      text: 'A bike tour, anywhere in India. It’s the next thing on my bucket list.',
    },
  ],

  // Phrases that become links wherever they appear in the bio or the about text.
  autolinks: {
    rtCamp: 'https://rtcamp.com',
    'WordCamp Nagpur 2017': 'https://nagpur.wordcamp.org/2017/organizers/',
  } as Record<string, string>,

  links: [
    { label: 'GitHub', handle: 'abhijitrakas', href: 'https://github.com/abhijitrakas' },
    { label: 'LinkedIn', handle: 'abhijit-rakas', href: 'https://www.linkedin.com/in/abhijit-rakas/' },
    { label: 'WordPress', handle: 'abhijitrakas', href: 'https://profiles.wordpress.org/abhijitrakas/' },
    { label: 'Email', handle: 'abhijitrakas@gmail.com', href: 'mailto:abhijitrakas@gmail.com' },
  ],
};

export const pageTitle = `${site.name} · ${site.jobTitle} at ${site.company.name}`;
