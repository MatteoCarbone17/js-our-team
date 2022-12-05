/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe 
*/



const listTeam = [
   {
        name :  'Wayne Barnett <br>',
        role :'Founder & CEO <br>',
        picture : 'wayne-barnett-founder-ceo.jpg <br>',
    },
    {
        name : 'Walter Gordon   <br>',
        role : 'Office Manager <br>',
        picture :'walter-gordon-office-manager.jpg <br>', 
    },
    {
        name : 'Angela Caroll <br>',
        role : 'Chief Editor <br>',
        picture : 'angela-caroll-chief-editor.jpg <br>',
    },
    {
        name : 'Angela Lopez <br>',
        role :'Social Media <br>',
        picture : 'Manager  angela-lopez-social-media-manager.jpg <br>',
    },
    {
        name : 'Scott Estrada  <br> ',
        role :'Developer  <br>',
        picture : 'scott-estrada-developer.jpg <br>',
    },
    {
        name : 'Barbara Ramos  <br> ',
        role :'Graphic Designer <br>',
        picture : 'barbara-ramos-graphic-designer.jpg <br>',
    },
];
 


const nameElement = document.getElementById('name');
const roleElement = document.getElementById('role');
const pictureElement = document.getElementById('picture');

 



 for (const key in listTeam) {

    nameElement.innerHTML += listTeam[key].name

    roleElement.innerHTML += listTeam[key].role

    pictureElement.innerHTML += listTeam[key].picture
    


 }



        
     
         
        
    