import { Project } from '../interfaces/project';

export const IMG: string = "assets/img/";

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Rooms To Go",
    state: 'show',
    link: "rtg",
    site: "https://link.roomstogo.app/webInstall",
    location: IMG + "rtg/",
    featureImage: "rtg.avif",
    images: [
      "rtg1.png",
      "rtg2.png",
      "rtg3.png",
      "rtg4.png",
    ],
    primary: true,
    asciiName: `
  ____   ___   ___  __  __ ____    _____ ___     ____  ___
 |  _ \\ / _ \\ / _ \\|  \\/  / ___|  |_   _/ _ \\   / ___|/ _ \\
 | |_) | | | | | | | |\\/| \\___ \\    | || | | | | |  _| | | |
 |  _ <| |_| | |_| | |  | |___) |   | || |_| | | |_| | |_| |
 |_| \\_\\\\___/ \\___/|_|  |_|____/    |_| \\___/   \\____|\\___/
    `,
    details: `Rooms To Go’s mobile app is built to make browsing and buying furniture easier from a phone, with a focus on helping users
      discover products and move through the shopping experience more naturally. I contributed to features that improved how product data
      was stored and content were delivered in the app, including GraphQL APIs that centralized backend data for client consumption and
      Strapi CMS extensions that gave the team more flexibility in managing application content. I also built the UI for an image-based
      search feature that allows users to upload a photo and find visually similar furniture in the catalog, expanding discovery beyond
      traditional text-based browsing.`
  },
  {
    id: 2,
    name: "GGC Maps",
    state: 'show',
    link: "ggc_maps",
    site: "http://ggcmaps.com",
    location: IMG + "ggcmaps/",
    featureImage: "ggcmaps.jpg",
    images: [
      "ggcmaps1.png",
      "ggcmaps2.png",
      "ggcmaps3.png",
      "ggcmaps4.png"
    ],
    primary: true,
    asciiName: `
   ____  ____  ____   __  __    _    ____  ____
  / ___|/ ___|/ ___| |  \\/  |  / \\  |  _ \\/ ___|
 | |  _| |  _| |     | |\\/| | / _ \\ | |_) \\___ \\
 | |_| | |_| | |___  | |  | |/ ___ \\|  __/ ___) |
  \\____|\\____|\\____| |_|  |_/_/   \\_\\_|   |____/
    `,
    details: `For students and faculty at GGC, finding a specific room in some campus buildings—especially the A building—was unnecessarily
      difficult. GGC Maps lets anyone search for a room and immediately see its location highlighted on a cleaned‑up floor map, instead of
      having to digging through static PDFs. While building the maps, we fixed issues in the school‑provided layouts such as poor design,
      unclear labeling, and duplicate room numbers, improving the overall quality and usability of the maps for everyday use.`
  },
  {
    id: 3,
    name: "Chem Reality",
    state: 'hide',
    link: "chem_reality",
    site: "",
    location: IMG + "chem_reality/",
    featureImage: "chemreality.jpg",
    images: [
      "chemreality1.png",
      "chemreality2.png",
      "chemreality3.png",
      "chemreality4.png"
    ],
    primary: true,
    asciiName: `
   ____ _   _ _____ __  __
  / ___| | | | ____|  \\/  |
 | |   | |_| |  _| | |\\/| |
 | |___|  _  | |___| |  | |
  \\____|_| |_|_____|_|  |_|
  ____  _____    _    _     ___ _______   __
 |  _ \\| ____|  / \\  | |   |_ _|_   _\\ \\ / /
 | |_) |  _|   / _ \\ | |    | |  | |  \\ V /
 |  _ <| |___ / ___ \\| |___ | |  | |   | |
 |_| \\_\\_____/_/   \\_\\_____|___| |_|   |_|
    `,
    details: `Chem Reality is an augmented reality app that overlays interactive 3D molecules onto printed images using a phone or tablet
      camera. By combining AR and image recognition, the app lets students view a molecule in three‑dimensional space, rotate it, and 
      inspect it from any angle as if it were physically present. The goal is to make abstract chemistry concepts more tangible and 
      engaging for learners using devices they already carry.`
  },
  {
    id: 4,
    name: "Motorris",
    state: 'hide',
    link: "motorris",
    site: "",
    location: IMG + "motorris/",
    featureImage: "motorris.jpg",
    images: [
      "motorris1.png",
      "motorris2.png",
      "motorris3.png",
      "motorris4.png"
    ],
    primary: true,
    asciiName: `
  __  __  ___ _____ ___  ____  ____  ___ ____
 |  \\/  |/ _ \\_   _/ _ \\|  _ \\|  _ \\|_ _/ ___|
 | |\\/| | | | || || | | | |_) | |_) || |\\___ \\
 | |  | | |_| || || |_| |  _ <|  _ < | | ___) |
 |_|  |_|\\___/ |_| \\___/|_| \\_\\_| \\_\\___|____/
    `,
    details: `Motorris is a marketplace for motocross bikes, originally run as a simple listing site. I rebuilt the site from the ground up
      with the MEAN stack and redesigned the layout so it is easier to browse and post bikes. A key requirement from users was to post,
      update, and delete bikes without creating an account, so I used a salted hash of each listing to generate a private editing URL. This
      kept the workflow lightweight for users while still giving them a way to manage their own listings.`
  },
  {
    id: 5,
    name: "Oh Counter, My Counter",
    state: 'hide',
    link: "oh_counter",
    site: "https://miked49er.github.io/ohcounter-mycounter/",
    location: IMG + "ohcounter/",
    featureImage: "ohcounter.jpg",
    images: [
      "ohcounter1.png",
      "ohcounter2.png",
      "ohcounter3.png",
      "ohcounter4.jpg"
    ],
    primary: false,
    asciiName: `
   ___  _   _
  / _ \\| | | |
 | | | | |_| |
 | |_| |  _  |
  \\___/|_| |_|
   ____ ___  _   _ _   _ _____ _____ ____
  / ___/ _ \\| | | | \\ | |_   _| ____|  _ \\
 | |  | | | | | | |  \\| | | | |  _| | |_) |
 | |__| |_| | |_| | |\\  | | | | |___|  _ <
  \\____\\___/ \\___/|_| \\_| |_| |_____|_| \\_\\
    `,
    details: `Many trading card games and board games require players to track multiple counters, but most counter apps are either tied to
      a specific game or too rigid. Oh Counter, My Counter is a modular counter app designed to work with any game by driving the interface
      from a JSON game template. It includes a random player selector that can choose from all or a subset of players to help decide who
      goes first. To respect limited storage and offline play, I built it as a progressive web app (PWA) so it can run in the browser, be
      installed for offline use, and consume significantly less space than a native app.`
  },
  {
    id: 6,
    name: "Blackwing Sy_ths",
    state: 'hide',
    link: "blackwing_syths",
    site: "",
    location: IMG + "blackwing_syths/",
    featureImage: "syths.jpg",
    images: [
      "syths1.png",
      "syths2.png"
    ],
    primary: false,
    asciiName: `
  ____  _        _    ____ _  ____        _____ _   _  ____
 | __ )| |      / \\  / ___| |/ /\\ \\      / /_ _| \\ | |/ ___|
 |  _ \\| |     / _ \\| |   | ' /  \\ \\ /\\ / / | ||  \\| | |  _
 | |_) | |___ / ___ \\ |___| . \\   \\ V  V /  | || |\\  | |_| |
 |____/|_____/_/   \\_\\____|_|\\_\\   \\_/\\_/  |___|_| \\_|\\____|
  ______   _______ _   _ ____
 / ___\\ \\ / /_   _| | | / ___|
 \\___ \\\\ V /  | | | |_| \\___ \\
  ___) || |   | | |  _  |___) |
 |____/ |_|___|_| |_| |_|____/
         |_____|
    `,
    details: `Blackwing Sy_ths is a browser‑based tool for creating music without needing a dedicated MIDI controller. We built the app so
      aspiring producers can experiment using their laptop keyboard as a makeshift MIDI board, with an optional anti‑ghosting mode for
      keyboards that struggle with multiple simultaneous key presses. While this version is not meant for live performance, it gives
      musicians an easy way to explore ideas anywhere without carrying extra hardware.`
  },
  {
    id: 7,
    name: "Is It Expired",
    state: 'hide',
    link: "is_it_expired",
    site: "https://isitexpired.p404.xyz",
    location: IMG + "isitexpired/",
    featureImage: "isitexpired.jpg",
    images: [
      "isitexpired1.png",
      "isitexpired2.png"
    ],
    primary: false,
    asciiName: `
  ___ ____    ___ _____
 |_ _/ ___|  |_ _|_   _|
  | |\\___ \\   | |  | |
  | | ___) |  | |  | |
 |___|____/  |___| |_|
  _______  ______ ___ ____  _____ ____
 | ____\\ \\/ /  _ \\_ _|  _ \\| ____|  _ \\
 |  _|  \\  /| |_) | || |_) |  _| | | | |
 | |___ /  \\|  __/| ||  _ <| |___| |_| |
 |_____/_/\\_\\_|  |___|_| \\_\\_____|____/
    `,
    details: `Retailers that sell tobacco products often struggle to keep expired items off their shelves because manufacturers use cryptic
      batch codes instead of human‑readable dates. Is It Expired is a small web app that decodes those codes into clear expiration dates so
      employees can quickly see which products are expired or about to expire. This helps stores reduce compliance risk and makes routine
      shelf checks significantly faster and less error‑prone.`
  }
];

export const MORE_PROJECTS: Project = {
  id: 6,
  name: "More Projects",
  state: 'hide',
  link: "",
  site: "",
  location: IMG,
  featureImage: "projects-bg.jpg",
  images: [],
  primary: true,
  asciiName: `
  __  __  ___  ____  _____
 |  \\/  |/ _ \\|  _ \\| ____|
 | |\\/| | | | | |_) |  _|
 | |  | | |_| |  _ <| |___
 |_|  |_|\\___/|_| \\_\\_____|
  ____  ____   ___      _ _____ ____ _____ ____
 |  _ \\|  _ \\ / _ \\    | | ____/ ___|_   _/ ___|
 | |_) | |_) | | | |_  | |  _|| |     | | \\___ \\
 |  __/|  _ <| |_| | |_| | |__| |___  | |  ___) |
 |_|   |_| \\_\\\\___/ \\___/|_____\\____| |_| |____/
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
  ____  ____   ___      _ _____ ____ _____ ____
 |  _ \\|  _ \\ / _ \\    | | ____/ ___|_   _/ ___|
 | |_) | |_) | | | |_  | |  _|| |     | | \\___ \\
 |  __/|  _ <| |_| | |_| | |__| |___  | |  ___) |
 |_|   |_| \\_\\\\___/ \\___/|_____\\____| |_| |____/
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
