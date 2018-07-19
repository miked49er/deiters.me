import { Project } from '../interfaces/project';

export const IMG: string = "assets/img/";

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "GGC Maps",
    state: 'show',
    link: "ggc_maps",
    location: IMG + "ggcmaps/",
    featureImage: "ggcmaps.png",
    images: [
      "ggcmaps.png",
      "ggcmaps.png",
      "ggcmaps.png",
      "ggcmaps.png"
    ],
    primary: true,
    asciiName: `
   ██████╗  ██████╗  ██████╗    ███╗   ███╗ █████╗ ██████╗ ███████╗
  ██╔════╝ ██╔════╝ ██╔════╝    ████╗ ████║██╔══██╗██╔══██╗██╔════╝
  ██║  ███╗██║  ███╗██║         ██╔████╔██║███████║██████╔╝███████╗
  ██║   ██║██║   ██║██║         ██║╚██╔╝██║██╔══██║██╔═══╝ ╚════██║
  ╚██████╔╝╚██████╔╝╚██████╗    ██║ ╚═╝ ██║██║  ██║██║     ███████║
   ╚═════╝  ╚═════╝  ╚═════╝    ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝     ╚══════╝
    `,
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In voluptate totam facere provident reprehenderit odio consequatur quasi. Ad reprehenderit natus numquam, perspiciatis commodi maiores molestias sint quos facere asperiores autem.'
  },
  {
    id: 2,
    name: "Chem Reality",
    state: 'hide',
    link: "chem_reality",
    location: IMG + "chem_reality/",
    featureImage: "chemreality.png",
    images: [
      "chemreality.png",
      "chemreality.png",
      "chemreality.png",
      "chemreality.png"
    ],
    primary: true,
    asciiName: `
   ██████╗██╗  ██╗███████╗███╗   ███╗
  ██╔════╝██║  ██║██╔════╝████╗ ████║
  ██║     ███████║█████╗  ██╔████╔██║
  ██║     ██╔══██║██╔══╝  ██║╚██╔╝██║
  ╚██████╗██║  ██║███████╗██║ ╚═╝ ██║
   ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝
  ██████╗ ███████╗ █████╗ ██╗     ██╗████████╗██╗   ██╗
  ██╔══██╗██╔════╝██╔══██╗██║     ██║╚══██╔══╝╚██╗ ██╔╝
  ██████╔╝█████╗  ███████║██║     ██║   ██║    ╚████╔╝
  ██╔══██╗██╔══╝  ██╔══██║██║     ██║   ██║     ╚██╔╝
  ██║  ██║███████╗██║  ██║███████╗██║   ██║      ██║
  ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚═╝   ╚═╝      ╚═╝
    `,
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In voluptate totam facere provident reprehenderit odio consequatur quasi. Ad reprehenderit natus numquam, perspiciatis commodi maiores molestias sint quos facere asperiores autem.'
  },
  {
    id: 3,
    name: "Motorris",
    state: 'hide',
    link: "motorris",
    location: IMG + "motorris/",
    featureImage: "motorris.jpg",
    images: [
      "motorris.jpg",
      "motorris.jpg",
      "motorris.jpg",
      "motorris.jpg"
    ],
    primary: true,
    asciiName: `
  ███╗   ███╗ ██████╗ ████████╗ ██████╗ ██████╗ ██████╗ ██╗███████╗
  ████╗ ████║██╔═══██╗╚══██╔══╝██╔═══██╗██╔══██╗██╔══██╗██║██╔════╝
  ██╔████╔██║██║   ██║   ██║   ██║   ██║██████╔╝██████╔╝██║███████╗
  ██║╚██╔╝██║██║   ██║   ██║   ██║   ██║██╔══██╗██╔══██╗██║╚════██║
  ██║ ╚═╝ ██║╚██████╔╝   ██║   ╚██████╔╝██║  ██║██║  ██║██║███████║
  ╚═╝     ╚═╝ ╚═════╝    ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝
    `,
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In voluptate totam facere provident reprehenderit odio consequatur quasi. Ad reprehenderit natus numquam, perspiciatis commodi maiores molestias sint quos facere asperiores autem.'
  },
  {
    id: 4,
    name: "Is It Expired",
    state: 'hide',
    link: "is_it_expired",
    location: IMG + "isitexpired/",
    featureImage: "isitexpired.png",
    images: [
      "isitexpired.png",
      "isitexpired.png",
      "isitexpired.png",
      "isitexpired.png"
    ],
    primary: false,
    asciiName: `
  ██╗███████╗    ██╗████████╗
  ██║██╔════╝    ██║╚══██╔══╝
  ██║███████╗    ██║   ██║
  ██║╚════██║    ██║   ██║
  ██║███████║    ██║   ██║
  ╚═╝╚══════╝    ╚═╝   ╚═╝
  ███████╗██╗  ██╗██████╗ ██╗██████╗ ███████╗██████╗
  ██╔════╝╚██╗██╔╝██╔══██╗██║██╔══██╗██╔════╝██╔══██╗
  █████╗   ╚███╔╝ ██████╔╝██║██████╔╝█████╗  ██║  ██║
  ██╔══╝   ██╔██╗ ██╔═══╝ ██║██╔══██╗██╔══╝  ██║  ██║
  ███████╗██╔╝ ██╗██║     ██║██║  ██║███████╗██████╔╝
  ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚═════╝
    `,
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In voluptate totam facere provident reprehenderit odio consequatur quasi. Ad reprehenderit natus numquam, perspiciatis commodi maiores molestias sint quos facere asperiores autem.'
  },
  {
    id: 5,
    name: "Blackwing Sy_ths",
    state: 'hide',
    link: "blackwing_syths",
    location: IMG + "blackwing_syths/",
    featureImage: "syths.jpg",
    images: [
      "syths.jpg",
      "syths.jpg",
      "syths.jpg",
      "syths.jpg"
    ],
    primary: false,
    asciiName: `
  ██████╗ ██╗      █████╗  ██████╗██╗  ██╗██╗    ██╗██╗███╗   ██╗ ██████╗
  ██╔══██╗██║     ██╔══██╗██╔════╝██║ ██╔╝██║    ██║██║████╗  ██║██╔════╝
  ██████╔╝██║     ███████║██║     █████╔╝ ██║ █╗ ██║██║██╔██╗ ██║██║  ███╗
  ██╔══██╗██║     ██╔══██║██║     ██╔═██╗ ██║███╗██║██║██║╚██╗██║██║   ██║
  ██████╔╝███████╗██║  ██║╚██████╗██║  ██╗╚███╔███╔╝██║██║ ╚████║╚██████╔╝
  ╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝ ╚═════╝
  ███████╗██╗   ██╗  ████████╗██╗  ██╗███████╗
  ██╔════╝╚██╗ ██╔╝  ╚══██╔══╝██║  ██║██╔════╝
  ███████╗ ╚████╔╝      ██║   ███████║███████╗
  ╚════██║  ╚██╔╝       ██║   ██╔══██║╚════██║
  ███████║   ██║███████╗██║   ██║  ██║███████║
  ╚══════╝   ╚═╝╚══════╝╚═╝   ╚═╝  ╚═╝╚══════╝
    `,
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In voluptate totam facere provident reprehenderit odio consequatur quasi. Ad reprehenderit natus numquam, perspiciatis commodi maiores molestias sint quos facere asperiores autem.'
  }
];

export const MORE_PROJECTS: Project = {
  id: 6,
  name: "More Projects",
  state: 'hide',
  link: "",
  location: IMG,
  featureImage: "projects-bg.jpg",
  images: [],
  primary: true,
  asciiName: `
  ███╗   ███╗ ██████╗ ██████╗ ███████╗
  ████╗ ████║██╔═══██╗██╔══██╗██╔════╝
  ██╔████╔██║██║   ██║██████╔╝█████╗
  ██║╚██╔╝██║██║   ██║██╔══██╗██╔══╝
  ██║ ╚═╝ ██║╚██████╔╝██║  ██║███████╗
  ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝
  ██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗
  ██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
  ██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗
  ██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║
  ██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
  ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝
  `,
  details: ''
};

export const MORE_INFO: string = `
  ███╗   ███╗ ██████╗ ██████╗ ███████╗    ██╗███╗   ██╗███████╗ ██████╗
  ████╗ ████║██╔═══██╗██╔══██╗██╔════╝    ██║████╗  ██║██╔════╝██╔═══██╗
  ██╔████╔██║██║   ██║██████╔╝█████╗      ██║██╔██╗ ██║█████╗  ██║   ██║
  ██║╚██╔╝██║██║   ██║██╔══██╗██╔══╝      ██║██║╚██╗██║██╔══╝  ██║   ██║
  ██║ ╚═╝ ██║╚██████╔╝██║  ██║███████╗    ██║██║ ╚████║██║     ╚██████╔╝
  ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝    ╚═╝╚═╝  ╚═══╝╚═╝      ╚═════╝
`;

export const PROJECTS_TITLE: string = `
  ██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗
  ██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
  ██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗
  ██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║
  ██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
  ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝
`;

export const NAME_ASCII: string = `
  __  __ _ _          ____       _ _
 |  \\/  (_) | _____  |  _ \\  ___(_) |_ ___ _ __ ___
 | |\\/| | | |/ / _ \\ | | | |/ _ \\ | __/ _ \\ '__/ __|
 | |  | | |   <  __/ | |_| |  __/ | ||  __/ |  \\__ \\
 |_|  |_|_|_|\\_\\___| |____/ \\___|_|\\__\\___|_|  |___/
`;

export const JOB_ASCII: string = `
  ____         __ _
 / ___|  ___  / _| |___      ____ _ _ __ ___
 \\___ \\ / _ \\| |_| __\\ \\ /\\ / / _\` | '__/ _ \\
  ___) | (_) |  _| |_ \\ V  V / (_| | | |  __/
 |____/ \\___/|_|  \\__| \\_/\\_/ \\__,_|_| _\\___|
                 |  _ \\  _____   _____| | ___  _ __   ___ _ __
                 | | | |/ _ \\ \\ / / _ \\ |/ _ \\| '_ \\ / _ \\ '__|
                 | |_| |  __/\\ V /  __/ | (_) | |_) |  __/ |
                 |____/ \\___| \\_/ \\___|_|\\___/| .__/ \\___|_|
                                              |_|
`;
