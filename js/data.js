/**
 * Portfolio content
 * -----------------
 * Everything shown in the project carousels and detail views lives here.
 * Null values render as clearly labelled placeholders — replace them with your
 * own copy, links and images when you're ready.
 */

export const projects = [
  {
    id: 'global-village',
    title: 'Global Village',
    category: 'Educational Platform / Software Development',
    description:
      'An interactive multicultural learning platform featuring games, activities and multilingual content.',
    overview:
      'An interactive multilingual educational platform designed to help children explore different cultures, countries, languages and traditions through engaging activities.',
    featured: true,
    tech: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    features: [
      'Interactive map',
      'Guess the Flag',
      'Country Scramble',
      'Food Explorer',
      'Multilingual support',
      'Accessibility-focused design'
    ],
    problem:
      'Many educational websites rely heavily on text and offer limited interaction, making learning less engaging. Global Village was created to provide a fun, interactive and accessible way for people of all ages to explore different cultures, languages and countries, helping make information more memorable.',
    role:
      'Sole developer and project lead, independently managing the project and taking responsibility for its planning and development.',
    learned:
      'Developed skills in managing a software project independently, from planning through to development, while strengthening problem-solving and project management skills.',
    links: {
      repo: 'https://github.com/MxGrant/COMP3000GlobalVillage',
      demo: null
    },
    poster: {
      glyph: 'GV',
      words: ['GLOBAL', 'VILLAGE'],
      c1: '#0f5f6b',
      c2: '#04161c',
      accent: '#7fe3d4',
      motif: 'globe'
    }
  },
  {
    id: 'sisterly-sweets',
    title: 'Sisterly Sweets',
    category: 'Web Design / Front-End Development',
    description:
      'A website created for a sweets business, focusing on attractive visual design, branding and user experience.',
    overview:
      'A website created for a sweets business, focusing on attractive visual design, branding and user experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Food and dish displays',
      'Dish ordering',
      'Food descriptions',
      'Business contact information',
      'Instagram links',
      'About Us page'
    ],
    problem:
      'A family member needed a landing page for their catering business, along with a vast menu that led customers to their Instagram page and allowed them to place orders and learn about the history of the business.',
    role:
      'Solo developer, independently handling all aspects of the project.',
    learned:
      'I used Figma as a tool for publishing and designing this website',
    links: {
      repo: null,
      demo: 'https://pond-human-68211509.figma.site/'
    },
    poster: {
      glyph: 'SS',
      words: ['SISTERLY', 'SWEETS'],
      c1: '#8a3350',
      c2: '#2a0b17',
      accent: '#ffc2d4',
      motif: 'bloom'
    }
  },
  {
    id: 'mythlings',
    title: 'Mythlings',
    category: 'Game Development',
    description:
      'A 2D game project featuring creative gameplay, character design and an engaging game world.',
    overview:
      'A 2D game project featuring creative gameplay, character design and an engaging game world.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    features: [
      'Creature catching and collection',
      'Creature raising',
      'Creature battles',
      '2D game world'
    ],
    problem:
      'I wanted to create a 2D game inspired by Pokemon, as part of my practice and building some useful developer skills',
    role:
      'Solo developer, independently handling all aspects of the project, including game development and implementation.',
    learned: null,
    links: {
      repo: 'https://github.com/MxGrant/MythlingsGame',
      demo: null
    },
    poster: {
      glyph: 'MY',
      words: ['MYTH', 'LINGS'],
      c1: '#45307a',
      c2: '#110b22',
      accent: '#c3a6ff',
      motif: 'rune'
    }
  },
  {
    id: 'to-do-list',
    title: 'To-Do List',
    category: 'Web Development',
    description:
      'A task management application designed to help users organise tasks, track progress and manage their daily activities.',
    overview:
      'A task management application designed to help users organise tasks, track progress and manage their daily activities.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Add tasks',
      'Edit tasks',
      'Delete tasks',
      'Mark tasks as complete'
    ],
    problem:
      'I wanted to practice my coding skills in first year of University, so I created this to-do list that can allow people to keep track of their daily activities easily.',
    role:
      'Solo developer, independently building the application as a summer holiday coding project.',
    learned:
      'I learnt how to use CSS for styling and creating a seamless user experience',
    links: {
      repo: 'https://github.com/MxGrant/todolist',
      demo: null
    },
    poster: {
      glyph: 'TD',
      words: ['TO-DO', 'LIST'],
      c1: '#144b52',
      c2: '#06161a',
      accent: '#8fd6df',
      motif: 'grid'
    }
  }
];

export const skills = [
  {
    title: 'UI/UX Design',
    icon: 'pen',
    blurb:
      'Research, wireframes, prototypes and the small interface details that make a product feel obvious.',
    tags: ['Figma', 'Wireframing', 'Prototyping', 'User-centred design']
  },
  {
    title: 'Web Development',
    icon: 'code',
    blurb:
      'Responsive, accessible front-ends built with semantic HTML, modern CSS and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript', 'REST APIs']
  },
  {
    title: 'Software Development',
    icon: 'cube',
    blurb:
      'Structured, object-oriented code across several languages, with an emphasis on readable design.',
    tags: ['Python', 'Java', 'C#', 'C++', 'Dart']
  },
  {
    title: 'Game Development',
    icon: 'gamepad',
    blurb:
      'Gameplay systems, character design and building worlds that are enjoyable to move through.',
    tags: ['Gameplay', '2D design', 'Character design']
  },
  {
    title: 'Database Design',
    icon: 'database',
    blurb:
      'Modelling data, writing SQL and keeping information consistent, relational and queryable.',
    tags: ['SQL', 'Data modelling', 'Queries']
  },
  {
    title: 'Project Management',
    icon: 'kanban',
    blurb:
      'Planning work, running Agile and Scrum ceremonies and keeping a team moving in one direction.',
    tags: ['Agile', 'Scrum', 'Planning', 'Teamwork']
  }
];

export const approach = [
  {
    title: 'Problem-solving',
    icon: 'target',
    blurb:
      'Start with the actual problem, not the first idea. Break it down, test assumptions, then build the smallest version that proves the approach.'
  },
  {
    title: 'User-centred design',
    icon: 'compass',
    blurb:
      'Design for the person on the other side of the screen. Map their journey, remove friction and check the result against real tasks, not opinions.'
  },
  {
    title: 'Creative thinking',
    icon: 'bulb',
    blurb:
      'Look for the angle nobody else tried. Borrow from other disciplines and let the concept lead the interface, rather than the other way round.'
  },
  {
    title: 'Team collaboration',
    icon: 'users',
    blurb:
      'Share context early, document decisions and review each other’s work. Good collaboration shows up in the finished product.'
  },
  {
    title: 'Agile development',
    icon: 'cycle',
    blurb:
      'Short cycles, honest retrospectives and working software over perfect plans. Ship something, learn from it, make it better.'
  }
];

export const toolkit = [
  {
    title: 'Programming languages',
    icon: 'code',
    items: ['Python', 'Java', 'C#', 'C++', 'JavaScript', 'SQL', 'Dart']
  },
  {
    title: 'Web & development',
    icon: 'cube',
    items: ['HTML', 'CSS', 'Flutter', 'REST APIs']
  },
  {
    title: 'Design',
    icon: 'pen',
    items: ['Figma', 'Wireframing', 'Prototyping', 'User-centred design']
  },
  {
    title: 'Other',
    icon: 'kanban',
    items: ['Agile', 'Scrum', 'Project planning', 'Teamwork', 'Problem-solving']
  }
];

/**
 * Contact links.
 * Replace the nulls with your real details — nulls render as labelled
 * placeholders so nothing on the page pretends to work when it doesn't.
 */
export const contact = {
  email: 'iraqimohammad25@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mo-iraqi/',
  github: 'https://github.com/MxGrant',
  cv: null
};