const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

  // BONUS 2:
  // organizzare i singoli membri in card/schede
let teamMembers;
for (let i = 0; i < team.length; i++) {
    teamMembers = team[i];

    const namesArray = teamMembers.name;
    const rolesArray = teamMembers.role;
    const imagesArray = teamMembers.image;

    const cards = document.getElementById('cards')

    const card = document.createElement('div');
    card.classList.add('card');
    cards.append(card);

    
    // document.getElementById('card')

    let cardPic = document.createElement('img');
    cardPic.src = `img/${imagesArray}`;
    card.append(cardPic);

    let cardTitle;
    newElementAppended(cardTitle, 'h1', card, namesArray);

    let cardSubtitle;
    newElementAppended(cardSubtitle, 'h2', card, rolesArray);
}

/**
 * Description // Crea un elemento nuovo e lo appende
 * @param {var} newElement // Il nome della variabile da creare e appendere
 * @param {var} element // Il tipo del tag da creare es. 'div'
 * @param {var} whereAppend // Elemento al quale viene appeso l'elemento appena creato
*/
 function newElementAppended(newElement, element, whereAppend, array) {
  newElement = document.createElement(element);
  newElement.innerHTML = `${array}`;
  whereAppend.append(newElement);
}