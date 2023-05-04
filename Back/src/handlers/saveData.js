const { createUserHandler } = require("./usersHandler");
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
    { dogIdDog: 5, referenceIdReference: 2 },
    { dogIdDog: 6, referenceIdReference: 3 },
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
      nameU: "Juan",
      lastNameU: "Perez",
      passwordU: "123",
      idNumbU: 32323232,
      emailU: "juanperez@gmail.com",
      phoneU: "0303456",
      addressU: "AV principal 458",
      reasonU: "Reason",
      isAdminU: false,
    },
    {
      nameU: "Lucas",
      lastNameU: "Diaz",
      passwordU: "1234",
      idNumbU: 32321232,
      emailU: "LucasDiaz@gmail.com",
      phoneU: "0303456545",
      addressU: "AV principal s/n",
      reasonU: "Reason",
      isAdminU: true,
    },
    {
      nameU: "Daniel",
      lastNameU: "Gonzalez",
      passwordU: "123456",
      idNumbU: 22354552,
      emailU: "Dgonzalez@gmail.com",
      phoneU: "03034564678",
      addressU: "AV principal 8",
      reasonU: "Reason",
      isAdminU: false,
    },
    {
      nameU: "Rodrigo",
      lastNameU: "Perez",
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
  await createUserHandler(
    {
      // Creamos usuario admin
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
      },
    },
    {
      status: () => {
        return { json: () => {}, send: () => {} };
      },
    }
  );
};

const savePost = async () => {
  const posts = [
    {
      titleP: "Ayuda a cambiar vidas: Haz una donación hoy.",
      commentP: "¡Únete a nosotros en nuestra misión de hacer una diferencia en la vida de los animales necesitados! Haz una donación hoy y ayuda a proporcionar recursos y apoyo a aquellos que más lo necesitan. Tu contribución puede cambiar vidas y marcar la diferencia en la comunidad. ¡Haz tu donación hoy mismo y sé parte del cambio!",
      category: "Donación",
    },
    {
      titleP: "Adoptamos a Bianca.",
      commentP:
        "Pude adoptar a un perrito y ahora estamos feliz por el nuevo integrante",
      category: "Adopción",
      photoP: "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/salvandohuellas%2FPerroconfamilia.jpg?alt=media&token=7bce0f61-d61f-4f33-9b37-360c99f584d8"
    },
    {
      titleP: "",
      commentP: "La mejor pagina para encontrar productos de calidad",
      category: "Tienda",
    },
    {
      titleP: "Chow",
      commentP:
        "Hace 5 meses adoptamos a Chow y se adaptó bastante rápido a nuestro hogar y familia, nos trajo felicidad. Estamos muy agradecidos a Salvando Huellas por haberla rescatado y por darnos la oportunidad de brindarle un hogar y mucho amor.",
      category: "Adopción",
      photoP: "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/salvandohuellas%2Fperrito12.png?alt=media&token=1697ac29-24b3-49b6-b83c-2e5fbf297b64"
    },
    {
      titleP: "",
      commentP: "A mi perrito le encanta el alimento de esta página!!",
      category: "Store",
    },
  ];
  await Posts.bulkCreate(posts);
};

const saveArticles = async () => {
  const articles = [
    {
      nameA: "HOP! Perro adulto, raza mediana y grande 21 KG",
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

      priceA: 7500,
      descriptionA:
        "La Cucha Durapets, está pensada para darle a tu mascota un espacio cómodo y sobre todo seguro. Está hecha en un material totalmente inyectado, desarrollado con plástico 100% reciclado, que ofrece mayor resistencia, calidad y durabilidad.",
      photoA:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/Art%C3%ADculos%2F229279.webp?alt=media&token=66279f5d-42a1-42d1-882a-1a5ae50596ca",
      stockA: 10,
      activeA: true,
    },
    {
      nameA: "Soga para tirar",
      priceA: 1200,
      descriptionA: "Especial para que tus cachorros se diviertan",
      photoA:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/Art%C3%ADculos%2F32fb6fd6-9eaa-46aa-8cff-e9d1551a15ee1-53d6611da17463e7c516665306538254-480-0.jpeg?alt=media&token=16071e8b-0780-4993-8cd2-9191c7e52612",
      stockA: 4,
      activeA: true,
    },
    {
      nameA: "Combo cama & comedero - perros chicos",
      priceA: 30000,
      descriptionA: "Combo ideal para la comodidad de tu mascota asegurándole un buen descanso y correcta postura al comer y beber.",
      photoA:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/Art%C3%ADculos%2F86afe43f-02f0-4eda-a2e9-1220e7d5d28b1-2f40959c5d6a14dbf316424275175882-640-0.jpeg?alt=media&token=f30e708a-df70-4449-8600-95d2e3bb5b9b",
      stockA: 8,
      activeA: true,
    },
    {
      nameA: "COMEDERO ECO TRIPLE - PERROS CHICOS",
      priceA: 27500,
      descriptionA: "Resistente al agua y al sol, APTO EXTERIOR Platos de acero inoxidable y paredes antivuelco, dos de 750cm + uno de 2 litros.",
      photoA:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/Art%C3%ADculos%2Fa03b3947-216d-4d99-b9fd-4b5c0e2b4a971-49e490639dd5cbada816606920303967-640-0.jpeg?alt=media&token=5c1ab107-cf7f-4451-a32c-711b8d79aa63",
      stockA: 2,
      activeA: true,
    },
    {
      nameA: "Pretal perros pequeños",
      priceA: 4000,
      descriptionA: "Ideal para salir de paseo.",
      photoA:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/Art%C3%ADculos%2Fa955f178-e55c-4ec8-bac8-a4883f74ff33_nube-dd68d8cfcad09984d816104659563241-640-0.jpg?alt=media&token=da7110ba-67f2-498f-b0fe-4a37a4e58439",
      stockA: 10,
      activeA: true,
    },
    {
      nameA: "PELOTA DE GOMA - LIMPIA DIENTES PERRO",
      priceA: 1800,
      descriptionA: "Limpia los dientes mientras tu mascota juega.",
      photoA:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/Art%C3%ADculos%2Ff9ed67c0-f35a-49bb-87fc-bfc730614b121-b6900a0634a2c93a7f16330357339865-640-0.jpeg?alt=media&token=d6766b22-5f89-41fc-bb59-d967bd0d826b",
      stockA: 30,
      activeA: true,
    },
    {
      nameA: "Hueso mediano dosificador - Perros medianos y grandes",
      priceA: 2250,
      descriptionA: "Hueso con diferentes texturas. Con espacio para rellenar con snacks Medida: 17,5cm",
      photoA:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/Art%C3%ADculos%2Ffb2ca751-4274-4f20-bf6d-38f569dce0b41-2f9492cc7e4e4dfea216285606550306-480-0.jpeg?alt=media&token=bfb3fb23-f90e-4819-a3a6-fff04144247d",
      stockA: 15,
      activeA: true,
    },
    {
      nameA: "Eukanuba cachorro Raza Pequeña x 1Kg",
      priceA: 1630,
      descriptionA: "Eukanuba Puppy Raza Pequeña es recomendado para cachorros entre 1 y 12 meses de edad.",
      photoA:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/Art%C3%ADculos%2Fe34c9b16459e52759aec60646e199525ae7be94e.jpg.webp?alt=media&token=7f62f00e-8623-4cdc-b6eb-02a78b6a6cb6",
      stockA: 20,
      activeA: true,
    },
    {
      nameA: "Purina Proplan Active Mind Razas Pequeñas x 3Kg",
      priceA: 6500,
      descriptionA: "Purina Proplan Active Mind Razas Pequeñas provee una nutrición de avanzada para proteger a los perros mayores de 7 años manteniéndolos sanos y activos.",
      photoA:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/Art%C3%ADculos%2F5388e46360ffee30fb951966067ae9fb09c2b6e2.jpg.webp?alt=media&token=e6162e8d-2e8c-4f72-9a30-5e5be2d912df",
      stockA: 25,
      activeA: true,
    },
    {
      nameA: "Pedigree Vital Protection x20Kg",
      priceA: 15800,
      descriptionA: "Pedigree Vital Protection x20Kg de 1 a 7 años. Lo mejor para tu mascota.",
      photoA:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/Art%C3%ADculos%2Fpngwing.com.png?alt=media&token=76e6d538-ceb6-4fc7-8cc8-31096079cc0d",
      stockA: 10,
      activeA: true,
    },
    {
      nameA: "Royal Canin Medium Weight Care x3Kg",
      priceA: 6280,
      descriptionA: "Royal Canin Medium Weight Care es un alimento exclusivo para perros de talla mediana con tendencia al aumento de peso. A partir de los 12 meses hasta los 7 años de edad.",
      photoA:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/Art%C3%ADculos%2F688e3c440527f91458f6b254de616193ddd99afe.jpg.webp?alt=media&token=f3e0462b-9567-4925-b4c7-c529c24de4de",
      stockA: 8,
      activeA: true,
    },
    {
      nameA: "HUESO DE GOMA RASCALS - PERROS CHICOS",
      priceA: 1450,
      descriptionA: "Hueso Dispensador de comida - ideal perros pequeños. Desarrolla la inteligencia. Horas de diversión. Material: goma. Medida: 12*5cm. Color azul.",
      photoA:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/Art%C3%ADculos%2F95c9e7d8-5aeb-40a3-9d1f-5d161476e7481-e674cbf0da3637b23e16422585979971-640-0.jpeg?alt=media&token=2bf5907b-1f8b-496e-b332-10b1af118a25",
      stockA: 15,
      activeA: true,
    },
    {
      nameA: "Pedigree - Postre gelatina sabor a pollo",
      priceA: 1300,
      descriptionA: "Pedigree - Postre gelatina sabor a pollo x 100g",
      photoA:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/Art%C3%ADculos%2Fpngwing.com.png?alt=media&token=6e5536ca-0eb8-4634-8ba2-e07b5373067c",
      stockA: 40,
      activeA: true,
    },
    {
      nameA: "Royal Canin Cardiac Canine",
      priceA: 4400,
      descriptionA: "Royal Canin Cardiac Canine es un alimento corrector dietario para perros adultos, destinado a ayudar a la función cardíaca deteriorada. Contiene un bajo nivel de sodio.",
      photoA:
        "https://firebasestorage.googleapis.com/v0/b/salvandohuellas.appspot.com/o/Art%C3%ADculos%2F688e3c440527f91458f6b254de616193ddd99afe.jpg.webp?alt=media&token=f3e0462b-9567-4925-b4c7-c529c24de4de",
      stockA: 12,
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
