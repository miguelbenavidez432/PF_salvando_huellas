const {
  Donations,
  Articles,
  Users,
  Opinions,
  Stock,
  Dogs,
  Posts,
  References,
} = require("../db");

const saveReferences = async () => {
  const references = [
    {
      textR: "referenciasreferenciasreferenciasreferencias",
      dogsReferences: 1,
    },
    {
      textR: "referenciareferenciareferenciareferencia",
      dogsReferences: 2,
    },
  ];
  await References.bulkCreate(references);
};

const saveDogs = async () => {
  const dogs = [
    {
      nameD: "Dog 1",
      sexD: "male",
      ageD: "puppy",
      sizeD: "small",
      historyD: "New Dog",
      photoD:
        "https://i.pinimg.com/736x/2c/31/97/2c3197c9add1109018fd89beda4cbe4b.jpg",
    },
    {
      nameD: "Dog 2",
      sexD: "male",
      ageD: "adult",
      sizeD: "large",
      historyD: "Old Dog",
      photoD:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtnd2zxCezN-AR47pOjggSSeFrrWaLjZhvlA&usqp=CAU",
    },
    {
      nameD: "Dog 3",
      sexD: "female",
      ageD: "adult",
      sizeD: "medium",
      historyD: "Puppy",
      photoD:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUEdlACgU32acz7QAIzSJN5-ZqExmwmcznogVwU_vqT4Qnfa8EpFVYR0SWqFBAzo3canw&usqp=CAU",
    },
    {
      nameD: "Dog 4",
      sexD: "male",
      ageD: "adult",
      sizeD: "small",
      historyD: "Puppy 2",
      photoD:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRipb_gvLUoqKw0f5jBpYpmqd1H_uY44eP6kQ&usqp=CAU",
    },
  ];

  await Dogs.bulkCreate(dogs);
};

const saveUsers = async () => {
  const users = [
    {
      nameU: "juan",
      lastNameU: "perez",
      passwordU: "123",
      idNumbU: 32323232,
      emailU: "juanperez@gmail.com",
      phoneU: "0303456",
      addressU: "AV principal 458",
      reasonU: "Reason",
      isAdminU: false,
    },
    {
      nameU: "lucas",
      lastNameU: "diaz",
      passwordU: "1234",
      idNumbU: 32321232,
      emailU: "LucasDiaz@gmail.com",
      phoneU: "0303456545",
      addressU: "AV principal s/n",
      reasonU: "Reason",
      isAdminU: true,
    },
    {
      nameU: "daniel",
      lastNameU: "gonzalez",
      passwordU: "123456",
      idNumbU: 22354552,
      emailU: "Dgonzalez@gmail.com",
      phoneU: "03034564678",
      addressU: "AV principal 8",
      reasonU: "Reason",
      isAdminU: false,
    },
    {
      nameU: "rodrigo",
      lastNameU: "perez",
      passwordU: "777",
      idNumbU: 3237192,
      emailU: "rodri@gmail.com",
      phoneU: "037982356",
      addressU: "AV principal 1558",
      reasonU: "Reason",
      isAdminU: false,
    },
  ];

  await Users.bulkCreate(users);
};

const savePost = async () => {
  const posts = [
    {
      titleP: "titulo 1",
      commentP: "Muy buenos productos!!",
      category: "store",
    },
    {
      titleP: "titulo 2",
      commentP:
        "Pude adoptar a un perrito y ahora estamos feliz por el nuevo integrante",
      category: "donation",
    },
    {
      titleP: "titulo 3",
      commentP: "La mejor pagina para encontrar productos de calidad",
      category: "store",
    },
    {
      titleP: "titulo 4",
      commentP: "Que lindo poder adoptar a una mascota de manera tan fácil!!",
      category: "event",
    },
    {
      titleP: "titulo 5",
      commentP: "A mi perrito le encanta el alimento de esta página!!",
      category: "donation",
    },
  ];
  await Posts.bulkCreate(posts);
};

const saveArticles = async () => {
  const articles = [
    {
      nameA: "article a",

      priceA: 546.0,
      descriptionA: "color blue",
      photoA:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_uRkWh3G_5orgl61GZ6M_s5rgQk8hrI6XBCJAs-NXXZcShgk6b-CbvAkvFK36uMY-ydI&usqp=CAU",
      stockA: 20,
      activeA: true,
    },
    {
      nameA: "article b",

      priceA: 12.0,
      descriptionA: "color red",
      photoA:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoa1CvBTJdm5im80ExuTXDLu9aXN4d07M74w&usqp=CAU",
      stockA: 30,
      activeA: true,
    },
    {
      nameA: "article c",

      priceA: 12.0,
      descriptionA: "color green",
      photoA:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0BmVSfCfOCEAN2sJ719GrAlw7NgRUc_i84w&usqp=CAUU",
      stockA: 10,
      activeA: true,
    },
    {
      nameA: "article d",
      priceA: 1452.0,
      descriptionA: "color yellow",
      photoA:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zDreRNYH_tl8koWDVb_IDfmUPrZQ2Zpkiw&usqp=CAU",
      stockA: 4,
      activeA: true,
    },
    {
      nameA: "article d",
      priceA: 1452.0,
      descriptionA: "color yellow",
      photoA:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zDreRNYH_tl8koWDVb_IDfmUPrZQ2Zpkiw&usqp=CAU",
      stockA: 4,
      activeA: true,
    },
    {
      nameA: "article d",
      priceA: 1452.0,
      descriptionA: "color yellow",
      photoA:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zDreRNYH_tl8koWDVb_IDfmUPrZQ2Zpkiw&usqp=CAU",
      stockA: 4,
      activeA: true,
    },
    {
      nameA: "article d",
      priceA: 1452.0,
      descriptionA: "color yellow",
      photoA:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zDreRNYH_tl8koWDVb_IDfmUPrZQ2Zpkiw&usqp=CAU",
      stockA: 4,
      activeA: true,
    },
    {
      nameA: "article d",
      priceA: 1452.0,
      descriptionA: "color yellow",
      photoA:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zDreRNYH_tl8koWDVb_IDfmUPrZQ2Zpkiw&usqp=CAU",
      stockA: 4,
      activeA: true,
    },
    {
      nameA: "article d",
      priceA: 1452.0,
      descriptionA: "color yellow",
      photoA:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zDreRNYH_tl8koWDVb_IDfmUPrZQ2Zpkiw&usqp=CAU",
      stockA: 4,
      activeA: true,
    },
    {
      nameA: "article d",
      priceA: 1452.0,
      descriptionA: "color yellow",
      photoA:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zDreRNYH_tl8koWDVb_IDfmUPrZQ2Zpkiw&usqp=CAU",
      stockA: 4,
      activeA: true,
    },
    {
      nameA: "article d",
      priceA: 1452.0,
      descriptionA: "color yellow",
      photoA:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zDreRNYH_tl8koWDVb_IDfmUPrZQ2Zpkiw&usqp=CAU",
      stockA: 4,
      activeA: true,
    },
    {
      nameA: "article d",
      priceA: 1452.0,
      descriptionA: "color yellow",
      photoA:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zDreRNYH_tl8koWDVb_IDfmUPrZQ2Zpkiw&usqp=CAU",
      stockA: 4,
      activeA: true,
    },
  ];
  await Articles.bulkCreate(articles);
};

const saveOpinions = async () => {
  const opinions = [
    {
      id_Opinion: 1,
      commentO: "Este artículo es increíble",
      qualificationO: 5,
      articleId: 2,
      userIdUser: 1,
    },
    {
      id_Opinion: 2,
      commentO: "Estoy muy satisfecho con este artículo",
      qualificationO: 4,
      articleId: 1,
      userIdUser: 2,
    },
    {
      id_Opinion: 3,
      commentO: "¡Excelente servicio al cliente!",
      qualificationO: 3,
      articleId: 3,
      userIdUser: 3,
    },
    {
      id_Opinion: 4,
      commentO: "¡Excelente servicio al cliente!",
      qualificationO: 5,
      articleId: 4,
      userIdUser: 4,
    },
  ];
  await Opinions.bulkCreate(opinions);
};

module.exports = {
  saveDogs,
  saveUsers,
  savePost,
  saveArticles,
  saveReferences,
  saveOpinions,
};
