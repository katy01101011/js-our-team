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

  // MILESTONE 2:
  // stampare le stesse informazioni su DOM sottoforma di stringhe
let teamMembers;
for (let i = 0; i < team.length; i++) {
    teamMembers = team[i];

    const namesArray = teamMembers.name;
    document.getElementById('names').innerHTML += `${namesArray}<br>`;

    const rolesArray = teamMembers.role;
    document.getElementById('roles').innerHTML += `${rolesArray}<br>`;

    const imagesArray = teamMembers.image;
    document.getElementById('images').innerHTML += `${imagesArray}<br>`;
}