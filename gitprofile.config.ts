// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'kennywam', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        // projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      // header: 'My Projects',
      // // To hide the `External Projects` section, keep it empty.
      // projects: [
      //   {
      //     title: 'Project Name',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      //     imageUrl:
      //       'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      //     link: 'https://example.com',
      //   },
      //   {
      //     title: 'Project Name',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      //     imageUrl:
      //       'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      //     link: 'https://example.com',
      //   },
      // ],
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'kennywambua',
    twitter: 'kennedy_kenbit',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'kennywambu254',
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
      'https://drive.google.com/file/d/1RhV5URLCcOVVCcEEiFFgch4o3VWPCnfr/view?usp=sharing'
    },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'React Native',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Tailwind',
  ],
   experiences: [
    {
      company: 'Alternate ltd',
      position: 'Software developer',
      from: 'February 2024',
      to: 'Present',
      companyLink: 'https:/www.altn8.co.ke',
    },
    {
      company: 'Airtel Kenya',
      position: 'Software developer intern',
      from: 'November 2022',
      to: 'December 2022',
      companyLink: 'https://www.airtelkenya.com',
    },
    {
      company: 'Airtel Kenya',
      position: 'Software developer',
      from: 'January 2023',
      to: 'February 2024',
      companyLink: 'https://www.airtelkenya.com',
    },
    {
      company: 'Alternate ltd',
      position: 'Software developer intern',
      from: 'April 2022',
      to: 'May 2023',
      companyLink: 'https://altn8.co.ke',
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
  // Display articles from your medium or dev account. (Optional)
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
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
