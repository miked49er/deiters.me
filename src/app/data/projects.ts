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
    details: `For students and faculty trying to find a room in some buildings on campus it is a major pain, in particular looking for a room in the A building. Though our application, anyone is able to search for the room he or she is trying to find and immediately see the location of the room highlighted on one of our maps. Before this application, the school had provided pdf's of each of the buildings to the community. Some of these pdf's were poorly designed and difficult to find rooms on. In addition to that a number of them had multiple rooms that were labeled with the same room number. As we created out maps we fixed these issues to help improve the overall quality and experience of searching for rooms.`
  },
  {
    id: 2,
    name: "Chem Reality",
    state: 'hide',
    link: "chem_reality",
    site: "http://wiki.ggc.edu/wiki/ChemReality",
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
    details: `Augmented reality provides an extra layer of information over the user’s view, typically through the use of a camera lens and a screen. Using augmented reality and image recognition together, I have created an application for smartphones and tablets which allows the user to use the device’s camera and a picture of a molecule to view that molecule in three-dimensional space, which they may interact with and view from any angle as if it actually exists in the real world.`
  },
  {
    id: 3,
    name: "Motorris",
    state: 'hide',
    link: "motorris",
    site: "http://motorris.com",
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
    details: `Motorris is like a craigslist for motorcross bikes. I rebuilt the site from the ground up with the MEAN Stack. Redesigned Motorris to give it a better overall layout, and now users have the ability to post bikes to the site themselves, without needing to create an account. The users of Motorris were adimate on the fact that they did not want to have to create an account, but at the same time be able to update and delete their bikes on the site. With this in mind I used a salted hash of the bike to create the bike's editing url. So yes anyone with the link to the bike would be able to edit it, but someone is not going to just stumble apon a bike's personal editing url unless the owner of the url didn't keep it safe.`
  },
  {
    id: 4,
    name: "Oh Counter, My Counter",
    state: 'hide',
    link: "oh_counter",
    site: "https://ohcounter.com",
    location: IMG + "ohcounter/",
    featureImage: "ohcounter.png",
    images: [
      "ohcounter.png",
      "ohcounter.png",
      "ohcounter.png",
      "ohcounter.png"
    ],
    primary: false,
    asciiName: `
     ██████╗ ██╗  ██╗
    ██╔═══██╗██║  ██║
    ██║   ██║███████║
    ██║   ██║██╔══██║
    ╚██████╔╝██║  ██║
     ╚═════╝ ╚═╝  ╚═╝                                            
     ██████╗ ██████╗ ██╗   ██╗███╗   ██╗████████╗███████╗██████╗
    ██╔════╝██╔═══██╗██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔══██╗
    ██║     ██║   ██║██║   ██║██╔██╗ ██║   ██║   █████╗  ██████╔╝
    ██║     ██║   ██║██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██╔══██╗
    ╚██████╗╚██████╔╝╚██████╔╝██║ ╚████║   ██║   ███████╗██║  ██║
     ╚═════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
    `,
    details: 'Magic the Gathering, other trading card games, and some board games all require one to track some counters. Oh Counter, My Counter was built using a modular design to allow the app to be used for any game. Using JSON I create a game template that the app will build into the counter interface. With multiple players, a common issue to resolve is who goes first. In the menu there is a random player selector option. This feature allow one to select all players or any number of them to be included in the random selection. Knowing that phone storage is at a premium for some users and internet access is not always available, I designed the app to be a progressive web app, PWA which allows one to use it offline. PWA\'s require significately less space than native apps, by being available in the browser and the user has the option to install the PWA for offline use.'
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
    details: `Music production is a creative art that many people have a knack for, but getting started is difficult. We decided to build an application that would allow budding musicians interested in creating music with a MIDI board to create music with their own keyboard. For those musicians working off laptops or any keyboard with ghosting, we built in an option for the user to have the functionality of an anti-ghosting keyboard by just tapping the key instead of holding. While what we built would not be used in its current form factor for live shows, it will allow musicians to experiment where ever they are without needed to either bring their MIDI board with them or even needing to own one.`
  },
  {
    id: 6,
    name: "Is It Expired",
    state: 'hide',
    link: "is_it_expired",
    site: "https://isitexpired.p404.xyz",
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
    details: 'Retail establishments that sell tobacco products have a difficult time ensuring that all the product on their shelves are not expired. Tobacco companies use cryptic codes to define when their product expires. I built this website to decrypt the expiration dates so that employees can easily determine which products are expired and which are about to expire.'
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
