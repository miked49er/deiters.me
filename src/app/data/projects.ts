import { Project } from '../interfaces/project';

export const IMG: string = "assets/img/";

export const PROJECTS: Project[] = [
  {
    id: 1,
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
    details: `For students and faculty trying to find a room in some buildings on campus it is a major pain, in particular looking for a
      room in the A building. Though our application, anyone is able to search for the room he or she is trying to find and immediately see
      the location of the room highlighted on one of our maps. Before this application, the school had provided pdf's of each of the
      buildings to the community. Some of these pdf's were poorly designed and difficult to find rooms on. In addition to that a number of
      them had multiple rooms that were labeled with the same room number. As we created out maps we fixed these issues to help improve the
      overall quality and experience of searching for rooms.`
  },
  {
    id: 2,
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
    details: `Augmented reality provides an extra layer of information over the user’s view, typically through the use of a camera lens and
      a screen. Using augmented reality and image recognition together, I have created an application for smartphones and tablets which
      allows the user to use the device’s camera and a picture of a molecule to view that molecule in three-dimensional space, which they
      may interact with and view from any angle as if it actually exists in the real world.`
  },
  {
    id: 3,
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
    details: `Motorris is like a craigslist for motorcross bikes. I rebuilt the site from the ground up with the MEAN Stack. Redesigned
      Motorris to give it a better overall layout, and now users have the ability to post bikes to the site themselves, without needing to
      create an account. The users of Motorris were adimate on the fact that they did not want to have to create an account, but at the
      same time be able to update and delete their bikes on the site. With this in mind I used a salted hash of the bike to create the
      bike's editing url. So yes anyone with the link to the bike would be able to edit it, but someone is not going to just stumble apon a
      bike's personal editing url unless the owner of the url didn't keep it safe.`
  },
  {
    id: 4,
    name: "Oh Counter, My Counter",
    state: 'hide',
    link: "oh_counter",
    site: "http://ohcounter.com",
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
    details: `Magic the Gathering, other trading card games, and some board games all require one to track some counters. Oh Counter, My
      Counter was built using a modular design to allow the app to be used for any game. Using JSON I create a game template that the app
      will build into the counter interface. With multiple players, a common issue to resolve is who goes first. In the menu there is a
      random player selector option. This feature allow one to select all players or any number of them to be included in the random
      selection. Knowing that phone storage is at a premium for some users and internet access is not always available, I designed the app
      to be a progressive web app, PWA which allows one to use it offline. PWA\'s require significately less space than native apps, by
      being available in the browser and the user has the option to install the PWA for offline use.`
  },
  {
    id: 5,
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
    details: `Music production is a creative art that many people have a knack for, but getting started is difficult. We decided to build
      an application that would allow budding musicians interested in creating music with a MIDI board to create music with their own
      keyboard. For those musicians working off laptops or any keyboard with ghosting, we built in an option for the user to have the
      functionality of an anti-ghosting keyboard by just tapping the key instead of holding. While what we built would not be used in its
      current form factor for live shows, it will allow musicians to experiment where ever they are without needed to either bring their
      MIDI board with them or even needing to own one.`
  },
  {
    id: 6,
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
    details: `Retail establishments that sell tobacco products have a difficult time ensuring that all the product on their shelves are not
      expired. Tobacco companies use cryptic codes to define when their product expires. I built this website to decrypt the expiration
      dates so that employees can easily determine which products are expired and which are about to expire.`
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
