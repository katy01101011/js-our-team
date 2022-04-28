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

console.log(team.role);

// BONUS 3:
// Utilizzare gli input presenti nella pagina per permettere all'utente
// di aggiungere nuovi membri del team: cliccando sul pulsante "add"
// viene creato un nuovo oggetto, il quale viene inserito nell'array
// iniziale e viene stampata una nuova card con tutte le informazioni
// inserite dall'utente.

const teamContainer = document.querySelector('.team-container');

let teamMembers;
for (let i = 0; i < team.length; i++) {
    teamMembers = team[i];

    const namesArray = teamMembers.name;
    const rolesArray = teamMembers.role;
    const imagesArray = teamMembers.image;

    let teamCard = document.createElement('div');
    teamCard.classList.add('team-card');
    teamContainer.append(teamCard);

    let cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    teamCard.append(cardImage);

    let img = document.createElement('img');
    img.src = `img/${imagesArray}`;
    img.alt = `${namesArray}`;
    cardImage.append(img);

    let cardText = document.createElement('div');
    cardText.classList.add('card-text');
    teamCard.append(cardText);

    let cardTitle= document.createElement('h3');
    cardTitle.innerHTML = namesArray;
    cardText.append(cardTitle);

    let cardParagraph= document.createElement('p');
    cardParagraph.innerHTML = rolesArray;
    cardText.append(cardParagraph);
}

let formName = document.getElementById('name').value;
let formRole = document.getElementById('role').value;
let formImage = document.getElementById('image').value;

const newTeamMember = {
  name: formName,
  role: formRole,
  image: formImage // Come metto l'URL?
}

const button = document.getElementById('addMemberButton');
button.addEventListener('click', function() {
  team.push(newTeamMember);
})