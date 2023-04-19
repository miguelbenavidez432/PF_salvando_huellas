const {  Donations, Articles, Users, Opinions, Stock, Dogs, Posts, References } = require('../db')

const saveReferences = async () => {
    const references = [
        {
            textR: "referenciasreferenciasreferenciasreferencias",
        },
        {
            textR: "referenciareferenciareferenciareferencia",
        },
    ];
    await References.bulkCreate(references)
}

const saveDogs = async () => {
    const dogs = [
        {
            nameD: "Dog 1",
            sexD: "Female",
            ageD: "Adult",
            sizeD: "Small",
            historyD: "New Dog",
            photoD: "https://i.pinimg.com/736x/2c/31/97/2c3197c9add1109018fd89beda4cbe4b.jpg",
        },
        {
            nameD: "Dog 2",
            sexD: "Male",
            ageD: "Adult",
            sizeD: "Large",
            historyD: "Old Dog",
            photoD: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtnd2zxCezN-AR47pOjggSSeFrrWaLjZhvlA&usqp=CAU",
        },
        {
            nameD: "Dog 3",
            sexD: "Female",
            ageD: "Adult",
            sizeD: "Medium",
            historyD: "Puppy",
            photoD: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUEdlACgU32acz7QAIzSJN5-ZqExmwmcznogVwU_vqT4Qnfa8EpFVYR0SWqFBAzo3canw&usqp=CAU",
        },
        {
            nameD: "Dog 4",
            sexD: "Male",
            ageD: "Adult",
            sizeD: "Small",
            historyD: "Puppy 2",
            photoD: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRipb_gvLUoqKw0f5jBpYpmqd1H_uY44eP6kQ&usqp=CAU",
        },
    ];
    
    await Dogs.bulkCreate(dogs)

    
}

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
            isAdminU: false
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
            isAdminU: true
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
            isAdminU: false
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
            isAdminU: false
        },
    ]

    
    await Users.bulkCreate(users)
}

const savePost = async() => {
    const posts = [
        {
            titleP: "Titulo 1",
            commentP: "First comment en this post",
            category: "Adoption"
        },
        {
            titleP: "Titulo 2",
            commentP: "First comment en this post",
            category: "Donation"
        },
        {
            titleP: "Titulo 3",
            commentP: "First comment en this post",
            category: "Event"
        },
        {
            titleP: "Titulo 4",
            commentP: "First comment en this post",
            category: "Event"
        },
        {
            titleP: "Titulo 5",
            commentP: "First comment en this post",
            category: "Donation"
        },
    ]
        await Posts.bulkCreate(posts)
}

const saveArticles = async() => {
    const articles = [
        {
            nameA: "Article A",
            priceA: 546.0,
            descriptionA: "Color blue",
            photoA: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_uRkWh3G_5orgl61GZ6M_s5rgQk8hrI6XBCJAs-NXXZcShgk6b-CbvAkvFK36uMY-ydI&usqp=CAU",
            stockA: 20
        },
        {
            nameA: "Article B",
            priceA: 12.0,
            descriptionA: "Color red",
            photoA: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoa1CvBTJdm5im80ExuTXDLu9aXN4d07M74w&usqp=CAU",
            stockA: 30
        },
        {
            nameA: "Article C",
            priceA: 12.0,
            descriptionA: "Color green",
            photoA: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0BmVSfCfOCEAN2sJ719GrAlw7NgRUc_i84w&usqp=CAUU",
            stockA: 10
        },
        {
            nameA: "Article D",
            priceA: 1452.0,
            descriptionA: "Color yellow",
            photoA: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zDreRNYH_tl8koWDVb_IDfmUPrZQ2Zpkiw&usqp=CAU",
            stockA: 4
        },
    ]
        await Articles.bulkCreate(articles)
}

module.exports = {
    saveDogs,
    saveUsers,
    savePost,
    saveArticles,
}