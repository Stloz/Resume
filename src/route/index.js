// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
        firstname: 'Serhii',
        lastname: 'Vashchuk',
    },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Kharkiv, Ukraine ✌',
}

var footer = {
    social: {
        email: {
            text: 'stloz.serg@gmail.com',
            href: 'mailto:stloz.serg@gmail.com',
        },
        phone: {
            text: '+380930191313',
            href: 'tel:+38093191313',
        },
        linkedin: {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/serhii-vashchuk-63b37b178',
        },
    },
}



// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
        title: 'Resume | Summary',
    },

    header,

    main: {
        summary: {
            title: 'Summary',
            text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
        },

        experience: {
            title: 'Other experience',
            text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
        },
    },

    footer,
  })
})

// ================================================================

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
        title: 'Resume | Skills',
    },

    header,

    main: {
        skills: [
            {
                name: 'HTML',
                point: 10,
                isTop: true,
            },
            {
                name: 'Handlebars',
                point: 9,
                isTop: true,
            },
            {
                name: 'VSCode & NPM',
                point: 8,
                isTop: false,
            },
            {
                name: 'Git & Terminal',
                point: 7,
            },
            {
                name: 'React.JS',
                point: 0,
            },
            {
                name: 'PHP',
                point: null ,
            },
        ],
        hobbies: [
            {
                name: 'IT',
                isMain: true,
            },
            {
                name: 'Fishing',
                isMain: true,
            },
            {
                name: 'Cleaning',
                isMain: false,
            },
        ],
    },

    footer,
  })
})

// ================================================================

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
        title: 'Resume | Education',
    },

    header,

    main: {
        educations: [
            {
                name: 'Street',
                isEnd: true,
            },
            {
                name: 'Detskiy Sad',
                isEnd: true,
            },
            {
                name: 'School',
                isEnd: true,
            },
            {
                name: 'Univers',
                isEnd: true,
            },
            {
                name: 'Work',
                isEnd: false,
            },
            {
                name: 'IT Brains',
                isEnd: false,
            },
        ],
        certificates: [
            {
                name: 'great dad',
                id: 1,
            },
            {
                name: 'bad husband',
                id: 2,
            },
            {
                name: 'amazing friend',
                id: 3,
            },
        ],
    },

    footer,
  })
})

// ================================================================

router.get('/work', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('work', {
      // ↙ сюди вводимо JSON дані

        layout: 'big',
    
        page: {
            title: 'Resume | Work',
        },
  
        header,
  
        main: {
            works: [
                {
                    position: 'Junior Fullstack Developer',
                    company: {
                        name: 'IT Brains',
                        url: null,
                    },
                    duration: {
                        from: '20.03.2023',
                        to: null,
                    },
                    projectAmount: 3,

                    projects: [
                        {
                            name: 'Resume',
                            url: 'http://localhost:3000/',
                            about: 'Airbnb competitor. High-load application for searching apartments',
                            stacks: [
                                {
                                    name: 'React.js',
                                },
                                {
                                    name: 'HTML / CSS',
                                },
                                {
                                    name: 'Node.js',
                                },
                            ],
                            stackAmount: 3,
                            awards: [
                                {
                                    name: 'Background verification - is a feature that provides users to prove that they are real persons',
                                },{
                                    name: 'Preparing SEO optimized pages. The automated process of getting data for the app from documents',
                                },
                            ],
                            awardAmount: 2,
                        },
                    ],
                },
            ],
        },
  
      footer,
    })
  })
  

// Підключаємо роутер до бек-енду
module.exports = router
