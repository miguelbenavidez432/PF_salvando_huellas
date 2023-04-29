const {createUserHandler} = require('./usersHandler')
const {
  Donations,
  Articles,
  Users,
  Opinions,
  Stock,
  Dogs,
  Posts,
  References,
  dogsReferences,
} = require("../db");

const saveReferences = async () => {
  const references = [
    {
      textR: "Amigable con los gatos", //id 1
    },
    {
      textR: "Recien rescatado", // id 2
    },
    {
      textR: "Vacunado", // id 3
    },
  ];
  await References.bulkCreate(references);
  await dogsReferences.bulkCreate([
    { dogIdDog: 1, referenceIdReference: 2 },
    { dogIdDog: 2, referenceIdReference: 1 },
    { dogIdDog: 3, referenceIdReference: 1 },
    { dogIdDog: 4, referenceIdReference: 1 },
    { dogIdDog: 4, referenceIdReference: 2 },
    { dogIdDog: 4, referenceIdReference: 3 },
  ]);
};

const saveDogs = async () => {
  const dogs = [
    {
      nameD: "Luna",
      sexD: "female",
      ageD: "puppy",
      sizeD: "medium",
      historyD:
        "Luna era una perra de raza mixta que había sido abandonada en las calles de la ciudad. Cuando la encontramos notamos que estaba muy asustada y necesitaba atención médica.",
      photoD:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/salvandohuellas%2Fperro5.png?alt=media&token=31c27739-5d1b-4ddf-affa-02acc804e10f",
    },
    {
      nameD: "Max",
      sexD: "male",
      ageD: "adult",
      sizeD: "large",
      historyD: "Old Dog",
      photoD:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/salvandohuellas%2Fperro6.png?alt=media&token=149c9e49-25a3-472e-950b-f32e791a292f",
    },
    {
      nameD: "Bella",
      sexD: "female",
      ageD: "adult",
      sizeD: "medium",
      historyD: "Puppy",
      photoD:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/salvandohuellas%2Fperro4.png?alt=media&token=b50d14b7-a201-4f41-8c10-c6e87618172b",
    },
    {
      nameD: "Rocky",
      sexD: "male",
      ageD: "adult",
      sizeD: "small",
      historyD: "Puppy 2",
      photoD:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/salvandohuellas%2Fperro7.png?alt=media&token=93945383-a427-47de-898a-6c8c4a05f9ed",
    },
    {
      nameD: "Zeus",
      sexD: "male",
      ageD: "adult",
      sizeD: "medium",
      historyD: "Puppy 2",
      photoD:
        "https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      nameD: "Lola",
      sexD: "female",
      ageD: "adult",
      sizeD: "small",
      historyD: "Puppy 2",
      photoD:
        "https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      nameD: "Daisy",
      sexD: "female",
      ageD: "adult",
      sizeD: "small",
      historyD: "Puppy 2",
      photoD:
        "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      nameD: "Chiqui",
      sexD: "female",
      ageD: "adult",
      sizeD: "large",
      historyD: "Puppy 2",
      photoD:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/salvandohuellas%2FChiquiPerra.webp?alt=media&token=614061bf-b8a2-4ded-ba8a-a4314e724015",
    },
    {
      nameD: "Thor",
      sexD: "male",
      ageD: "puppy",
      sizeD: "small",
      historyD: "Puppy 2",
      photoD:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/salvandohuellas%2FPerro2.jpg?alt=media&token=5bddddc2-7bbe-4c21-be7d-e614e28f88fe",
    },
    {
      nameD: "Coco",
      sexD: "female",
      ageD: "puppy",
      sizeD: "small",
      historyD: "Puppy 2",
      photoD:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/salvandohuellas%2FPerro3.png?alt=media&token=cb9ea207-0901-4e5d-8425-63f3f9db07a1",
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
  await createUserHandler({ // Creamos usuario admin
    body: {
      nameU: "usuario",
      lastNameU: "administrador",
      passwordU: "admin",
      idNumbU: 123456789,
      emailU: "admin@mail.com",
      phoneU: "123456789",
      addressU: "AV principal 1558",
      reasonU: "Reason",
      isAdminU: true,
    }
},{status: ()=>{return {json: ()=>{}, send: ()=>{}}} })
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
      nameA: "HOP! PERRO ADULTO RAZA MEDIANA Y GRANDE 21 KG",
      priceA: 7780,
      descriptionA:
        "ALIMENTOS CANINOS VITAL CAN HOP! ADULTOS - HOP! PERRO ADULTO RAZA MEDIANA Y GRANDE 21 KG",
      photoA:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/Art%C3%ADculos%2Fhop-perro-11-26d31b40b84122399916226432090152-1024-1024.webp?alt=media&token=005ae83e-381d-472c-8b4c-2c8b8505e6ed",
      stockA: 20,
      activeA: true,
    },
    {
      nameA: "Comedero Bebedero Lovely x500ML Union Pet - 14310",
      priceA: 3120,
      descriptionA:
        "Comedero/Bebedero doble Varios colores (NO INCLUYE LA BOTELLA)",
      photoA:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/Art%C3%ADculos%2F143101-b01e67ce494ac9836716802773619781-1024-1024.webp?alt=media&token=b9f2d995-3eed-4a40-85cf-bac071578a55",
      stockA: 30,
      activeA: true,
    },
    {
      nameA: "Cucha Durapets Roja",

      priceA: 12.0,
      descriptionA:
        "La Cucha Durapets, está pensada para darle a tu mascota un espacio cómodo y sobre todo seguro. Está hecha en un material totalmente inyectado, desarrollado con plástico 100% reciclado, que ofrece mayor resistencia, calidad y durabilidad.",
      photoA:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/Art%C3%ADculos%2F229279.webp?alt=media&token=66279f5d-42a1-42d1-882a-1a5ae50596ca",
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
      commentO: "Este artículo es increíble",
      qualificationO: 5,
      articleId: 2,
      userIdUser: 1,
    },
    {
      commentO: "Estoy muy satisfecho con este artículo",
      qualificationO: 4,
      articleId: 1,
      userIdUser: 2,
    },
    {
      commentO: "¡Excelente servicio al cliente!",
      qualificationO: 3,
      articleId: 3,
      userIdUser: 3,
    },
    {
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
