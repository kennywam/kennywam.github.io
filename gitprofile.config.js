// gitprofile.config.js

const config = {
  github: {
    username: 'kennywam', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'Kennedy-wambua-4623841ba',
    twitter: 'kennedy_kenbit',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'kenbit',
    stackoverflow: '13954216/kennedy-wambua', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://kennywam.github.io',
    phone: '0746634420',
    email: 'kennywambu254@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1pcHc-Y0Vj3qSO4smD9TJrRDHt0GCivHo/view?usp=drive_link',
  },
  skills: [
    'C#',
    'ASP.NET',
    'JavaScript',
    'React.js',
    'ReactNative.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Mongo',
    'Cypress',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Airtel Kenya',
      position: 'Junior Software developer',
      from: 'May 2023',
      to: 'Present',
      companyLink: 'https://www.airtelkenya.com',
    },
    {
      company: 'Alternate ltd',
      position: 'Software developer intern',
      from: 'April 2022',
      to: 'October 2022',
      companyLink: 'https://example.com',
    },
  ],
  education: [
    {
      institution: 'Maseno University',
      degree: "Barchelor's degree(Computer Science)",
      from: '2019',
      to: '2023',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Airtel Knowledgebase',
      description:
        'A system for storing and retrieving airtel products.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'kenbit', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/kennywam"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
