// Featured Films structure

class Film {
  constructor(title, description, synopsis, image) {
    this.title = title;
    this.description = description;
    this.synopsis = synopsis;
    this.image = image;
  }
}

// Entries
const film1 = new Film(
  'Laguna Ave',
  'David Buchanan (Dir), 80 minutes, USA, WNY Premiere',
  'In this charmingly campy, lo-fi sci-fi comedy, a disaffected former musician is drawn into the mysterious and sinister world of his downstairs neighbor',
  '../assets/laguna-ave.jpeg',
);

const film2 = new Film(
  'Leda',
  'Samuel Tessler IV, (Dir) 75 minutes, USA, WNY Premiere',
  "A young woman's isolation and terror lead to madness in this retelling of the Greek myth",
  '../assets/leda.jpeg',
);

const film3 = new Film(
  'Catch the Fair One',
  'Josef Kubota Wladyka (Dir), 85 minutes, USA, WNY Premiere',
  'A boxer retraces the steps of her kid sister in this Western New York lensed revenge thriller. This enthralling exploration of personal justice is simultaneously a meditation on the plight of Missing and Murdered Indigenous Women (MMIW) across North America.',
  '../assets/catch.jpeg',
);
const film4 = new Film(
  'Now Return Us To Normal',
  'Leslie Koren (Dir), 90 minutes, USA, WNY Premiere',
  'Buffalo native Koren and fellow classmates from a Utah-based behavior modification boarding school confront the personal cost of the trauma inflicted by the school’s cruel practices in this personal study of PTSD.',
  '../assets/now-return.jpeg',
);
const film5 = new Film(
  'Landlocked',
  'Timothy Hall (Dir), 81 minutes, USA, NY Premiere',
  "Nick (Dustin Gooch) reunites with his estranged, transgender father Briana (the debut of transgender actress Delia Kropp) as they journey to scatter his late mother's ashes off the Georgia coast.",
  '../assets/landlocked.jpeg',
);
const film6 = new Film(
  'Dynamite Soul Bambi',
  'Takuya Matsumoto (Dir), 105 minutes, Japan, WNY Premiere',
  'A young, indie filmmaker is given the chance of a lifetime to make his feature film debut in this hilarious, reflexive comedy.',
  '../assets/dynamite.jpeg',
);

const lineup2021 = [film1, film2, film3, film4, film5, film6];

// Helper functions
const createNode = (type, nodeClass) => {
  const node = document.createElement(type);
  if (nodeClass) node.className = nodeClass;
  return node;
};
// Show lineup

function showLineup(referenceNode) {
  const lineup = createNode('section', 'lineup d-flex');
  lineup.id = 'lineup';
  referenceNode.parentNode.insertBefore(lineup, referenceNode);
  const filmDiv = createNode('div', 'film row p-3 p-md-5');
  lineup.appendChild(filmDiv);
  const lineupHeader = filmDiv.appendChild(createNode('h2', 'd-flex py-4 flex-column align-items-center'));
  lineupHeader.innerHTML = '2021 Lineup';
  lineupHeader.appendChild(createNode('hr', 'divider'));
  lineup2021.forEach((film) => {
    const filmLeft = filmDiv.appendChild(createNode('div', 'col-6 col-lg-3 p-2'));
    const filmFrame = filmLeft.appendChild(createNode('img', 'image-frame'));
    filmFrame.src = '../assets/chess_board.svg';
    const filmImg = filmLeft.appendChild(createNode('img', 'film-image'));
    filmImg.src = film.image;
    const filmRight = filmDiv.appendChild(createNode('div', 'col-6 col-lg-3 col-lg-3 d-flex flex-column'));
    const filmTitle = filmRight.appendChild(createNode('h3', 'film-title'));
    const filmDescription = filmRight.appendChild(createNode('h4', 'film-subtitle mb-0'));
    filmRight.appendChild(createNode('hr', 'film-divider'));
    const filmSynopsis = filmRight.appendChild(createNode('p', 'film-synopsis'));
    filmTitle.innerHTML = film.title;
    filmDescription.innerHTML = film.description;
    filmSynopsis.innerHTML = film.synopsis;
  });
}

const partnerNode = document.getElementById('partner');
showLineup(partnerNode);
