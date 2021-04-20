import {db} from './java.js';
// import {lessons} from './lessonPlanner.js';
// console.log("Lessons are:               / / / //  = =>>>> ",lessons) 
// let lessonsArray = [
//     {
//         'level': 1,
//         'lessonNumber': 1,
//         'lessonTitle': '1Sustantivo1s',
//         'public': true,
//         'activitiesArray': []
//     }
// ]
let lessonsArray = [
    //LEVEL 1
        //LESSON 1.1
    {
        'level': 1,
        'lessonNumber': 1,
        'lessonTitle': 'Nous',
        'activitiesArray': [
            {
                'activityModuleType': 'renderLessonTitle',
                'activityOrder': 1,
                'title': "Masculino o femenino",
                'lessonTopImageSrc': './img/lesson1.1/malefemale.png'
            },
            
            {
                'activityModuleType': 'missingWordsParagraph',
                'activityOrder': 2,
                'moduleHeaderText' : 'casdas sdaf sdfs con el/la',
                'moduleHeaderIcon': 'link',
                'moduleBasicText': '',
                'paragraphText': '¿Tienes la suerte de tener un <span class="guessWord">amigo</span> fiel que permanece a tu lado pase lo que pase? Ese amigo que realmente es un <span class="guessWord">tesoro</span>, que está a las duras y a las maduras, que sabe cuándo estás bien o cuándo estás mal, que sabe cómo animarte sin que tengas que decirle u ofrecerle nada a cambio. <span class="guessWord">Probablemente</span>, pocos podáis decir que tenéis a alguien que os muestre ese amor tan <span class="guessWord">incondicional</span>, pero los que lo tenéis, probablemente ese amigo tendrá forma de perro, gato o canario. A lo mejor deberíamos de cambiar el dicho por ”quien tiene una mascota, tiene un tesoro”, porque solo aquellos que cuentan con una saben del tipo de <span class="guessWord">amor</span> que estamos hablando.', 
                'activityHeaderText': 'Completa los huecos con "el" si es masculino o "la" si es femenino. (El chico/La chica)',
                'helptags': true,
                'autoShowHelptags': false,
                'sideImgLocation': 'img/lesson1.1/kitty.jpg'
            },
            {
                'activityModuleType': 'exampleCards',
                'activityOrder': 3,
                'moduleHeaderText': "3 Let's have  a look at some examples...",
                'moduleHeaderIcon': 'create',
                'moduleBasicText': 'Try to remember these words',
                'autoShowTranslate': false,
                'examplesArray': [
                    {
                        'imgSrc': "./img/lesson1.1/book.jpg",
                        'text': `El niñ<span class='heavy-text'>o</span> sdfasdf asds  sd fsd ds d`,
                        'translatedText': 'The boy sdf sd',
                        'audioSrc': ''
                    }
                    ,
                    {
                        'imgSrc': './img/lesson1.1/boy.jpg',
                        'text': `La niñ<span class='heavy-text'>a</span>`,
                        'translatedText': 'The girl',
                        'audioSrc': './audio/lesson1.1/2.mp3'
                    },

                    {
                        'imgSrc': './img/lesson1.1/door.jpg',
                        'text': `La niñ<span class='heavy-text'>a</span>`,
                        'translatedText': 'The girl',
                        'audioSrc': './audio/lesson1.1/2.mp3'
                    }
                ] 
            },
          

                        
            {
                'activityModuleType': 'exampleCards',
                'activityOrder': 4,
                'moduleHeaderText': "1 Let's have  a look at some examples...",
                'moduleHeaderIcon': 'create',
                'moduleBasicText': 'Try to remember these words',
                'autoShowTranslate': false,
                'examplesArray': [
                    {
                        'imgSrc': './img/lesson1.1/boy-icon.png',
                        'text': `El niñ<span class='heavy-text'>o</span> sdfasdf asds  sd fsd ds d`,
                        'translatedText': 'The boy sdf sd',
                        'audioSrc': './audio/lesson1.1/1.mp3'
                    }
                ] 
            },

            {
                'activityModuleType': 'wordsTable',
                'activityOrder': 5,
                'section': false,
                'moduleHeaderText' : '',
                'moduleHeaderIcon': 'reorder',
                'moduleBasicText': '',
                'wordsArray': 
                [
                    {
                        'text': 'La chica es muy graciosa.',
                        'translatedText': 'The girl is very funny',
                        'audioSrc': './audio/lesson1.1/2.mp3'
                    },
                    {
                        'text': 'La casa es muy pequena  df  sd fsfsdf sdf sdf sd fd s.',
                        'translatedText': 'The house is very small sdf sdfdssdf dsss d dsd s',
                        'audioSrc': './audio/lesson1.1/1.mp3'
                    },
                    {
                        'text': 'La cara es grande.',
                        'translatedText': 'The face is big',
                        'audioSrc': './audio/lesson1.1/2.mp3'
                    },
                 
                    
                ]
                
            },
            {
                'activityModuleType': 'blankSentences',
                'activityOrder': 6,
                'moduleHeaderText' : '3 Blank el siguiente ejercicio con el/la',
                'moduleHeaderIcon': 'airplay',
                'moduleBasicText': '',
                'showTranslation': true,
                'exerciseSentences': 
                [
                    {
                        'text': "El gato de mi madre es muy bonito.",
                        'hiddenWord': "es",
                        'labelText': "verbo ser",
                        'helperText': "My mother's cat is very beautiful."
                    },
                    {
                        'text': "El padre come muchas galletas.",
                        'hiddenWord': "come",
                        'labelText': "verbo comer",
                        'helperText': "The father eats many cookies."
                    },
                    {
                        'text': "El profesor canta muy bien.",
                        'hiddenWord': "canta",
                        'labelText': "verbo cantar",
                        'helperText': "The teacher sings very well."
                    },
                    {
                        'text': "El perro corre muy rapido.",
                        'hiddenWord': "corre",
                        'labelText': "verbo correr",
                        'helperText': "The dog runs very fast."
                    }
                ]
                
            }, 
            {
                'activityModuleType': 'videoActivity',
                'activityOrder': 7,
                'moduleHeaderText' : '5 Actividad de video',
                'moduleHeaderIcon': 'ondemand_video',
                'onlyAddVideo': true,
                'section': false,
                'margin': true,
                'moduleBasicText': '',
                'youtubeIframe': "<iframe width='560' height='315' src='https://www.youtube-nocookie.com/embed/8kbXfAuvdxA' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
            }, 

            {
                'activityModuleType': 'multipleChoicePlusAnswers',
                'activityOrder': 8,
                'moduleHeaderText' : '',
                'moduleHeaderIcon': 'dashboard',
                'moduleBasicText': '',
                'section': true,
                'questions': 
                [
                    {
                        'type': 'multiple',
                        'question': 'What is the girls name?',
                        'answersArray': [
                            'Correct1',
                            '1wrong pesassssssssssssssasa sds dds3 3 3 cacay',
                            '1genios sin coco cac',
                            '1me digas que no',
                        ]
                    },
                    {
                        'type': 'multiple',
                        'question': 'What is the girls name?',
                        'answersArray': [
                            'Correct1',
                            '1wrong pesassssssssssssssasa sds dds3 3 3 cacay',
                            '1genios sin coco cac',
                            '1me digas que no',
                        ]
                    },
                    {
                        'type': 'openQuestion',
                        'question': 'What is the man  name?',
                        'answer': 'Jhonny'
                    },
                    {
                        'type': 'multiple',
                        'question': 'What is the girls name?',
                        'answersArray': [
                            'Correct1',
                            '1wrong pesassssssssssssssasa sds dds3 3 3 cacay',
                            '1genios sin coco cac',
                            '1me digas que no',
                        ]
                    },
                    {
                        'type': 'openQuestion',
                        'question': 'What is the man  name?',
                        'answer': 'Michael'
                    }
                ]
                
            }, 

            {
                'activityModuleType': 'generateBasicText',
                'activityOrder': 9,
                'title': "Masculino o femenino",
                'moduleHeaderText':  '1.1 Male and female nouns. El vs. La',
                'moduleHeaderIcon': 'widgets',
                'moduleBasicText': ''
            },
            {
                'activityModuleType': 'missingWordsParagraph',
                'activityOrder': 10,
                'moduleHeaderText' : 'casdas sdaf sdfs con el/la',
                'moduleHeaderIcon': 'link',
                'moduleBasicText': '',
                'paragraphText': '¿Tienesada a cambio. <span class="guessWord">P</span>robablemente, pocos podáissstre ese amor tan <span class="guessWord">incondicional</span>, pershablando.', 
                'activityHeaderText': 'Completa los huecos con "el" si es masculino o "la" si es femenino. (El chico/La chica)',
                'helptags': true,
                'autoShowHelptags': false,
                'sideImgLocation': 'img/lesson1.1/kitty.jpg'
            },
            
            {
                'activityModuleType': 'multipleChoicePlusAnswers',
                'activityOrder': 11,
                'moduleHeaderText' : 'Multiple choice',
                'moduleHeaderIcon': 'dashboard',
                'moduleBasicText': '',
                'questions': 
                [
                    {
                        'type': 'multiple',
                        'question': 'What is the girls name?',
                        'answersArray': [
                            'Correct1',
                            '1wrong pesassssssssssssssasa sds dds3 3 3 cacay',
                            '1genios sin coco cac',
                            '1me digas que no',
                        ]
                    },
                    {
                        'type': 'openQuestion',
                        'question': 'What is the man  name?',
                        'answer': 'Michael'
                    },
                    {
                        'type': 'openQuestion',
                        'question': 'What is the man  name?',
                        'answer': 'Jhonny'
                    }
                ]
                
            }
            
        ]
    },
            //LESSON 1.2
    {
        'level': 1,
        'lessonNumber': 2,
        'lessonTitle': '2Sustantivos',
        'activitiesArray': [
            {
                'activityModuleType': 'renderLessonTitle',
                'activityOrder': 1,
                'title': "2Masculino o femenino"
            },
            {
                'activityModuleType': 'introConcept',
                'activitx`yOrder': 2,
                'cardTitle': '2This is cardtitle',
                'cardContent': "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
            },
            
            
            {
                'activityModuleType': 'blankSentences',
                'activityOrder': 3,
                'moduleHeaderText' : 'Completa el siguiente ejercicio con el/la',
                'moduleHeaderIcon': 'menu',
                'moduleBasicText': '',
                'showTranslation': true,
                'exerciseSentences': 
                [
                    {
                        'text': "El gato de mi madre es muy bonito.",
                        'hiddenWord': "es",
                        'labelText': "verbo ser",
                        'helperText': "My mother's cat is very beautiful."
                    },
                    {
                        'text': "El padre come muchas galletas.",
                        'hiddenWord': "come",
                        'labelText': "verbo comer",
                        'helperText': "The father eats many cookies."
                    },
                    {
                        'text': "El profesor canta muy bien.",
                        'hiddenWord': "canta",
                        'labelText': "verbo cantar",
                        'helperText': "The teacher sings very well."
                    },
                    {
                        'text': "El perro corre muy rapido.",
                        'hiddenWord': "corre",
                        'labelText': "verbo correr",
                        'helperText': "The dog runs very fast."
                    }
                ]
                
            },
        ]
    },
    {
        'level': 1,
        'lessonNumber': 3,
        'lessonTitle': '3Sustantivos',
        'activitiesArray': [
            {
                'activityModuleType': 'renderLessonTitle',
                'activityOrder': 1,
                'title': "3Masculino o femenino"
            },
            {
                'activityModuleType': 'introConcept',
                'activitx`yOrder': 2,
                'cardTitle': '2This is cardtitle',
                'cardContent': "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
            }
        ]
    },
    {
        'level': 1,
        'lessonNumber': 4,
        'lessonTitle': '4Sustantivos',
        'activitiesArray': [
            {
                'activityModuleType': 'renderLessonTitle',
                'activityOrder': 1,
                'title': "2Masculino o femenino"
            },

            {
                'activityModuleType': 'slider',
                'activityOrder': 2,
                'moduleHeaderText' : "Let's have a look at some examples",
                'moduleHeaderIcon': '',
                'moduleBasicText': '',
                'slidesArray': [
                    {
                        'imgSrc': './img/lesson1.1/book.jpg',
                        'slideTxt': 'Slide 1',
                        'audioSrc': ''
                    },
                    {
                        'imgSrc': './img/lesson1.1/door.jpg',
                        'slideTxt': 'Slide 2',
                        'audioSrc': ''
                    },
                    {
                        'imgSrc': './img/lesson1.1/boy.jpg',
                        'slideTxt': 'Slide 3',
                        'audioSrc': ''
                    }
                ]
            }
        ]
    },
    //LEVEL 2
    {
        'level': 2,
        'lessonNumber': 1,
        'lessonTitle': 'Adjetivo2s',
        'activitiesArray': [
            {
                'activityModuleType': 'renderLessonTitle',
                'activityOrder': 1,
                'title': "Adjetivos2Title"
            },
            {
                'activityModuleType': 'conversationMultipleChoice',
                'activityOrder': 2,
                'moduleHeaderText' : '',
                'moduleHeaderIcon': '',
                'section': false,
                'margin': false,
                'moduleBasicText': '',
                'speaker1image': `./lessons/3.1/img/man.jpg`,
                'speaker2image': `./lessons/3.1/img/woman.jpg`,
                'speaker1Name': 'Pepe',
                'speaker2Name': 'Michael',
                'conversation':                                    
                `                   
– Buenos días. ¿Tienen habitaciones libres?
2– ¿Para cuándo? ¿Para esta noche?   
– No, es para la noche del 28. 
2 – ¿Cuántas noches se van a quedar?
– Tres noches.%Cuatro coches.%Dos pelotas.
2– ¿Cuántas personas son? 
2¿Qué habitaciones quieren?
– Mire, somos una pareja con un niño.
2– ¿Cuántos años tiene el niño?
– Diez.%Veinte.%Joder.%nueve.
-
`

                

            },
          

            {
                'activityModuleType': 'introConcept',
                'activityOrder': 3,
                'cardTitle': 'This is cardtitle',
                'cardContent': "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
            },
            
            {

                'activityModuleType': 'timedWritingActivity',
                'activityOrder': 4,
                'moduleHeaderText' : '',
                'moduleHeaderIcon': '',
                'moduleBasicText': '',
                'activityId': '21timedWritingActivity',
                'activityHeaderText': '',
                'timeOptions': []
            },

            ///////////////////////


        ]
    },
    {
        'level': 3,
        'lessonNumber': 1,
        'lessonTitle': 'Presente de subjuntivo',
        
        'activitiesArray': [
            {
                'activityModuleType': 'renderLessonTitle',
                'activityOrder': 1,
                'title': "Presente de subjuntivo",
                'lessonTopImageSrc': './lessons/3.1/img/014-railway.png'
            },
            {
                'activityModuleType': 'generateBasicText',
                'activityOrder': 2,
                'moduleHeaderText':  '',
                'moduleHeaderIcon': '',
                'dividerOnEnd': true,
                'paragraphs': 
            [
                'Spanish verbs can be a pain in the ass sometimes until you start figuring it out and go ahhhh... Believe me, it all will make sense when you understand the main points! Listen to the song "Esperaré" by Celia Cruz and pay attention to the verb forms used in it.',
                '<div class="center"><a target="_blank"  href="https://www.youtube.com/watch?v=nrUL1m2aDmM"><button class="btn-large">Escucha la canción aquí.</button></a></div>',
                `<span class="heavy-text underline biggerText center">Esperaré</span>

                A que <span class="heavy-text underline">sientas</span> lo mismo que yo
                A que la luna la <span class="heavy-text underline">mires</span> del mismo color
                Esperaré
                
                Que <span class="heavy-text  underline">adivines</span> mis versos de amor
                A que en mis brazos <span class="heavy-text underline">encuentres</span> calor
                Esperaré
                A que <span class="heavy-text underline">vayas</span> por donde yo voy
                A que tu alma me <span class="heavy-text underline">des</span> como yo te la doy
                Esperaré
                A que <span class="heavy-text underline">aprendas</span> de noche a soñar
                A que de pronto me <span class="heavy-text underline">quieras</span> besar
                
                Esperaré
                Que la manos me <span class="heavy-text underline">quieras</span> tomar
                Que en tu recuerdo
                Me <span class="heavy-text underline">quieras</span> por siempre llevar
                Que mi presencia sea
                El mundo que <span class="heavy-text underline">quieras</span> sentir
                Que un día no <span class="heavy-text underline">puedas</span> sin mi amor vivir
                
                Esperaré a que <span class="heavy-text underline">sientas</span> nostalgia por mi
                A que me <span class="heavy-text underline">pidas</span> que no me separe de ti
                Tal vez jamás <span class="heavy-text underline">seas</span> tú de mi
                Más yo mi amor te esperaré
                
                Que mi presencia <span class="heavy-text underline">sea</span>
                El mundo que <span class="heavy-text underline">quieras</span> sentir
                Que un día no <span class="heavy-text underline">puedas</span> sin mi amor vivir
                
                Esperaré a que <span class="heavy-text underline">sientas</span> nostalgia por mi
                A que me <span class="heavy-text underline">pidas</span> que no me <span class="heavy-text underline">separe</span> de ti
                Tal vez jamás <span class="heavy-text underline">seas</span> tú de mi
                Más yo mi amor te esperaré
                
                Más yo mi amor esperaré
                Esperaré
                `,
                'As you may have noticed, these verbs are not formed as in the present tense. You have probably come across them not knowing it is called <span class="heavy-text">subjuntivo</span>... You will learn now how to form the <span class="heavy-text text-accent">presente de subjuntivo</span> and even more important... when to use it!'
            ],
        'highlightedParagraphs': [false,false,true,false],
        'images': ['','','',''],
        'imagesPosition': ['','','','']
            },
            {
                'activityModuleType': 'generateBasicText',
                'activityOrder': 3,
                'moduleHeaderText':  '¿Cómo hacemos el subjuntivo?',
                'moduleHeaderIcon': 'gesture',
                'paragraphs': [
                    'In order to form the <span class="heavy-text text-accent">presente de subjuntivo</span> you need to know two things: <span class="heavy-text">(1)</span> The present form of the verb, which you already know by now and <span class="heavy-text">(2)</span> the right verb ending. <br><br><i class="material-icons">chevron_right</i>For <span class="heavy-text text-accent">-ar verbs</span>, the endings are:<br><span class="heavy-text">-e, -es, -e, -emos, -éis, -en</span> <br><br><i class="material-icons tiny">chevron_right</i>For both <span class="heavy-text text-accent">-er and -ir verbs</span>, the endings are:<br><span class="heavy-text">-a, -as, -a, -amos, -áis, -an</span>',
                    'In the following chart you can see how it all works out.'
                ],
                'highlightedParagraphs': [false,false],
                'images': ['',''],
                'imagesPosition': ['','']
                    },
            
            {
                'activityModuleType': 'verbChart',
                'activityOrder': 4,
                'moduleHeaderText' : '',
                'moduleHeaderIcon': '', 
                'moduleBasicText': '',
                'showPersonas': true,
                'openOnInit': true,    
                'tableTriggerText': 'Verbos regulares', 
                'collapsibleHeaderColor': '',
                'collapsibleHeaderColorChange': 'lighten-2',
                'tableTriggerIcon': 'add',   
                'verbos': {
                    '-ar': ['estudi<span class="heavy-text">e</span>','estudi<span class="heavy-text">es</span>','estudi<span class="heavy-text">e</span>', 'estudi<span class="heavy-text">emos</span>','estudi<span class="heavy-text">éis</span>', 'estudi<span class="heavy-text">en</span>'],
                    '-er/-ir': ['com<span class="heavy-text">a</span>','com<span class="heavy-text">as</span>','com<span class="heavy-text">a</span>', 'com<span class="heavy-text">amos</span>','com<span class="heavy-text">áis</span>', 'co<span class="heavy-text">man</span>'],
                    
               }
            },
            
            {
                'activityModuleType': 'verbChart',
                'activityOrder': 6,
                'moduleHeaderText' : '',
                'moduleHeaderIcon': '', 
                'moduleBasicText': '',
                'showPersonas': true,
                'openOnInit': true,    
                'tableTriggerText': 'Algunas formas irregulares...', 
                'collapsibleHeaderColor': '',
                'collapsibleHeaderColorChange': 'lighten-2',
                'tableTriggerIcon': 'add',   
                'verbos': {
                    'poner': ['pong<span class="heavy-text">a</span>','pong<span class="heavy-text">as</span>','pong<span class="heavy-text">a</span>', 'pong<span class="heavy-text">amos</span>','pong<span class="heavy-text">áis</span>', 'pong<span class="heavy-text">an</span>'],
                    'conocer': ['conozc<span class="heavy-text">a</span>','conozc<span class="heavy-text">as</span>','conozc<span class="heavy-text">a</span>', 'conozc<span class="heavy-text">amos</span>','conozc<span class="heavy-text">áis</span>', 'conozc<span class="heavy-text">an</span>'],
               }
            },

            // 'For example: <div class="container valign-wrapper"><span class="italics">"Yo <span class="heavy-text">cant</span>o"</span><i class="material-icons">fast_forward</i><span class="italics">"Yo <span class="heavy-text">cant</span>e"</span> </div>',
            {
                'activityModuleType': 'tutorWritingActivity',
                'activityOrder': 7,
                'activityId': 'anIdToRecognizeInTheDbas',
                'activityHeaderText': 'Ahora que sabes como funciona las. Acuerdate de usar las expresiones aprendidas.',
                'promptsArray': [
                    {
                        'word': 'gato',
                        'imgSrc': ''
                    },
                    {
                        'word': 'perro',
                        'imgSrc': ''
                    },
                    
                    {
                        'word': 'guitarra',
                        'imgSrc': './img/lesson1.1/guitar.jpg'
                    },
                    
                    {
                        'word': 'piano',
                        'imgSrc': './img/lesson1.1/piano.jpg'
                    }
                ]
            },
            
            

            {
                'activityModuleType': 'wildCard',
                'activityOrder': 4,
                'moduleHeaderText' : '',
                'moduleHeaderIcon': '', 
                'moduleBasicText': '', 
                'html': `For example: <div class="container valign-wrapper"><span class="italics">"Yo <span class="heavy-text">cant</span>o"</span><i class="material-icons">fast_forward</i><span class="italics">"Yo <span class="heavy-text">cant</span>e"</span> </div>`
            },




            {
                'activityModuleType': 'introConcept',
                'activityOrder': 5,
                'cardTitle': 'This is cardtitle',
                'cardContent': "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
            }
            
                        // {
            //     'activityModuleType': 'wildCard',
            //     'activityOrder': 3,
            //     'moduleHeaderText' : 'Wikipedia: Celia Cruz',
            //     'moduleHeaderIcon': 'directions', 
            //     'moduleBasicText': '',
            //     'html': `<div class="center"><a href="https://es.wikipedia.org/wiki/Celia_Cruz"><button class="btn-large">Celia Cruz en Wikipedia</button></a></div>`
            // },

            // {
            //     'activityModuleType': 'multipleChoicePlusAnswers',
            //     'activityOrder': 4,
            //     'moduleHeaderText' : '',
            //     'moduleHeaderIcon': 'dashboard',
            //     'moduleBasicText': '',
            //     'section': true,
            //     'questions': 
            //     [
            //         {
            //             'type': 'multiple',
            //             'question': '¿Dónde murió Celia Cruz?',
            //             'answersArray': [
            //                 'En los Estados Unidos.',
            //                 'En Cuba.',
            //                 'En México.',
            //                 'En Puerto Rico.',
            //             ]
            //         },
            //         {
            //             'type': 'multiple',
            //             'question': '¿Qué estilo musical caracterizaba a Celia Cruz?',
            //             'answersArray': [
            //                 'La Salsa',
            //                 'El Rock',
            //                 'La ópera',
            //                 'El azúcar',
            //             ]
            //         },
            //         {
            //             'type': 'openQuestion',
            //             'question': '¿En qué país empezó la carrera de Celia Cruz?',
            //             'answer': 'En Cuba.'
            //         },
            //         {
            //             'type': 'multiple',
            //             'question': 'Celia Cruz hizo popular la expresión ¡azúcar!. Celia la usaba para...',
            //             'answersArray': [
            //                 'animar a la gente e invitar a la diversión.',
            //                 'preparar su voz para cantar mejor.',
            //                 'dar la entrada a los demás músicos de la banda.',
            //                 'recordar su canción más famosa.',
            //             ]
            //         },
            //         {
            //             'type': 'multiple',
            //             'question': '¿Cuánto duró la carrera profesional de Celia Cruz?',
            //             'answersArray': [
            //                 'Practicamente toda su vida',
            //                 'Hasta los 40 años.',
            //                 'Hasta los 25 años',
            //                 'Desde niña hasta el momento en que se marchó de Cuba',
            //             ]
            //         },
            //     ]
                
            // }, 
        ]
    },
    
]
// Update database from array of activities 
export default function lessonActivitiesDb() {


//First delete all documents
    db.collection('lessons').get()
                            .then(res => {
        res.forEach(element => {
          element.ref.delete();
        // console.log(element.ref)
        });
      })
      //After deleting, add all the elements again
      .then(function(){
       
        
    lessonsArray.forEach((lesson)=>{
        // console.log(lesson)

const DBLessonsRef = db.collection('lessons').doc()
DBLessonsRef.set(lesson
, { merge: true })
.then(function() {
    console.log("Lessons added to db.");
})
.catch(function(error) {
    console.error("Error adding lesson to db: ", error);
});
})



      });
    }
//////////



// IMPORTANT
// LESSONS ARRAY BACKUP BEFORE LESSON PLANNER
// 

// let lessonsArray = [
//     //LEVEL 1
//         //LESSON 1.1
//     {
//         'level': 1,
//         'lessonNumber': 1,
//         'lessonTitle': '1Sustantivo1s',
//         'activitiesArray': [
//             {
//                 'activityModuleType': 'renderLessonTitle',
//                 'activityOrder': 1,
//                 'title': "Masculino o femenino",
//                 'lessonTopImageSrc': './img/lesson1.1/malefemale.png'
//             },
//             {
//                 'activityModuleType': 'wordsTable',
//                 'activityOrder': 2,
//                 'section': false,
//                 'moduleHeaderText' : '',
//                 'moduleHeaderIcon': 'reorder',
//                 'moduleBasicText': '',
//                 'wordsArray': 
//                 [
//                     {
//                         'text': 'La chica es muy graciosa.',
//                         'translatedText': 'The girl is very funny',
//                         'audioSrc': './audio/lesson1.1/2.mp3'
//                     },
//                     {
//                         'text': 'La casa es muy pequena  df  sd fsfsdf sdf sdf sd fd s.',
//                         'translatedText': 'The house is very small sdf sdfdssdf dsss d dsd s',
//                         'audioSrc': './audio/lesson1.1/1.mp3'
//                     },
//                     {
//                         'text': 'La cara es grande.',
//                         'translatedText': 'The face is big',
//                         'audioSrc': './audio/lesson1.1/2.mp3'
//                     },
                 
                    
//                 ]
                
//             },
           
           
            
//             {
//                 'activityModuleType': 'blankSentences',
//                 'activityOrder': 3,
//                 'moduleHeaderText' : '3 Blank el siguiente ejercicio con el/la',
//                 'moduleHeaderIcon': 'airplay',
//                 'moduleBasicText': '',
//                 'showTranslation': true,
//                 'exerciseSentences': 
//                 [
//                     {
//                         'text': "El gato de mi madre es muy bonito.",
//                         'hiddenWord': "es",
//                         'labelText': "verbo ser",
//                         'helperText': "My mother's cat is very beautiful."
//                     },
//                     {
//                         'text': "El padre come muchas galletas.",
//                         'hiddenWord': "come",
//                         'labelText': "verbo comer",
//                         'helperText': "The father eats many cookies."
//                     },
//                     {
//                         'text': "El profesor canta muy bien.",
//                         'hiddenWord': "canta",
//                         'labelText': "verbo cantar",
//                         'helperText': "The teacher sings very well."
//                     },
//                     {
//                         'text': "El perro corre muy rapido.",
//                         'hiddenWord': "corre",
//                         'labelText': "verbo correr",
//                         'helperText': "The dog runs very fast."
//                     }
//                 ]
                
//             }, 
        
//             {
//                 'activityModuleType': 'exampleCards',
//                 'activityOrder': 4,
//                 'moduleHeaderText': "3 Let's have  a look at some examples...",
//                 'moduleHeaderIcon': 'create',
//                 'moduleBasicText': 'Try to remember these words',
//                 'autoShowTranslate': false,
//                 'examplesArray': [
//                     {
//                         'imgSrc': './img/lesson1.1/book.jpg',
//                         'text': 'El niñ<span class="heavy-text">o</span> sdfasdf asds  sd fsd ds d',
//                         'translatedText': 'The boy sdf sd',
//                         'audioSrc': ''
//                     }
//                     ,
//                     {
//                         'imgSrc': './img/lesson1.1/boy.jpg',
//                         'text': 'La niñ<span class="heavy-text">a</span>',
//                         'translatedText': 'The girl',
//                         'audioSrc': './audio/lesson1.1/2.mp3'
//                     },

//                     {
//                         'imgSrc': './img/lesson1.1/door.jpg',
//                         'text': 'La niñ<span class="heavy-text">a</span>',
//                         'translatedText': 'The girl',
//                         'audioSrc': './audio/lesson1.1/2.mp3'
//                     }
//                 ] 
//             },
            
//             {
//                 'activityModuleType': 'videoActivity',
//                 'activityOrder': 5,
//                 'moduleHeaderText' : '5 Actividad de video',
//                 'moduleHeaderIcon': 'ondemand_video',
//                 'onlyAddVideo': true,
//                 'section': false,
//                 'margin': true,
//                 'moduleBasicText': '',
//                 'youtubeIframe': `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8kbXfAuvdxA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
//             }, 

//             {
//                 'activityModuleType': 'multipleChoicePlusAnswers',
//                 'activityOrder': 6,
//                 'moduleHeaderText' : '',
//                 'moduleHeaderIcon': 'dashboard',
//                 'moduleBasicText': '',
//                 'questions': 
//                 [
//                     {
//                         'type': 'multiple',
//                         'question': 'What is the girls name?',
//                         'answersArray': [
//                             'Correct1',
//                             '1wrong pesassssssssssssssasa sds dds3 3 3 cacay',
//                             '1genios sin coco cac',
//                             '1me digas que no',
//                         ]
//                     },
//                     {
//                         'type': 'openQuestion',
//                         'question': 'What is the man  name?',
//                         'answer': 'Michael'
//                     },
//                     {
//                         'type': 'openQuestion',
//                         'question': 'What is the man  name?',
//                         'answer': 'Jhonny'
//                     }
//                 ]
                
//             }, 

            
//             {
//                 'activityModuleType': 'multipleChoicePlusAnswers',
//                 'activityOrder': 10,
//                 'moduleHeaderText' : 'Multiple choice',
//                 'moduleHeaderIcon': 'dashboard',
//                 'moduleBasicText': '',
//                 'questions': 
//                 [
//                     {
//                         'type': 'multiple',
//                         'question': 'What is the girls name?',
//                         'answersArray': [
//                             'Correct1',
//                             '1wrong pesassssssssssssssasa sds dds3 3 3 cacay',
//                             '1genios sin coco cac',
//                             '1me digas que no',
//                         ]
//                     },
//                     {
//                         'type': 'openQuestion',
//                         'question': 'What is the man  name?',
//                         'answer': 'Michael'
//                     },
//                     {
//                         'type': 'openQuestion',
//                         'question': 'What is the man  name?',
//                         'answer': 'Jhonny'
//                     }
//                 ]
                
//             },

          
            
//             {
//                 'activityModuleType': 'exampleCards',
//                 'activityOrder': 7,
//                 'moduleHeaderText': "1 Let's have  a look at some examples...",
//                 'moduleHeaderIcon': 'create',
//                 'moduleBasicText': 'Try to remember these words',
//                 'autoShowTranslate': false,
//                 'examplesArray': [
//                     {
//                         'imgSrc': './img/lesson1.1/boy-icon.png',
//                         'text': 'El niñ<span class="heavy-text">o</span> sdfasdf asds  sd fsd ds d',
//                         'translatedText': 'The boy sdf sd',
//                         'audioSrc': './audio/lesson1.1/1.mp3'
//                     }
//                 ] 
//             },

//             {
//                 'activityModuleType': 'generateBasicText',
//                 'activityOrder': 8,
//                 'title': "Masculino o femenino",
//                 'moduleHeaderText':  '1.1 Male and female nouns. El vs. La',
//                 'moduleHeaderIcon': 'widgets',
//                 'moduleBasicText': ''
//             },
//             {
//                 'activityModuleType': 'missingWordsParagraph',
//                 'activityOrder': 9,
//                 'moduleHeaderText' : 'casdas sdaf sdfs con el/la',
//                 'moduleHeaderIcon': 'link',
//                 'moduleBasicText': '',
//                 'paragraphText': '¿Tienesada a cambio. <span class="guessWord">P</span>robablemente, pocos podáissstre ese amor tan <span class="guessWord">incondicional</span>, pershablando.', 
//                 'activityHeaderText': 'Completa los huecos con "el" si es masculino o "la" si es femenino. (El chico/La chica)',
//                 'helptags': true,
//                 'autoShowHelptags': false,
//                 'sideImgLocation': 'img/lesson1.1/kitty.jpg'
//             },
            
            
//         ]
//     },
//     {
//         'level': 1,
//         'lessonNumber': 2,
//         'lessonTitle': '2Sustantivos',
//         'activitiesArray': [
//             {
//                 'activityModuleType': 'renderLessonTitle',
//                 'activityOrder': 1,
//                 'title': "2Masculino o femenino"
//             },
//             {
//                 'activityModuleType': 'introConcept',
//                 'activitx`yOrder': 2,
//                 'cardTitle': '2This is cardtitle',
//                 'cardContent': "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
//             },
            
//             {
//                 'activityModuleType': 'missingWordsParagraph',
//                 'activityOrder': 4,
//                 'moduleHeaderText' : 'casdas sdaf sdfs con el/la',
//                 'moduleHeaderIcon': 'link',
//                 'moduleBasicText': '',
//                 'paragraphText': '¿Tienes la suerte de tener un <span class="guessWord">amigo</span> fiel que permanece a tu lado pase lo que pase? Ese amigo que realmente es un <span class="guessWord">tesoro</span>, que está a las duras y a las maduras, que sabe cuándo estás bien o cuándo estás mal, que sabe cómo animarte sin que tengas que decirle u ofrecerle nada a cambio. <span class="guessWord">Probablemente</span>, pocos podáis decir que tenéis a alguien que os muestre ese amor tan <span class="guessWord">incondicional</span>, pero los que lo tenéis, probablemente ese amigo tendrá forma de perro, gato o canario. A lo mejor deberíamos de cambiar el dicho por ”quien tiene una mascota, tiene un tesoro”, porque solo aquellos que cuentan con una saben del tipo de <span class="guessWord">amor</span> que estamos hablando.', 
//                 'activityHeaderText': 'Completa los huecos con "el" si es masculino o "la" si es femenino. (El chico/La chica)',
//                 'helptags': true,
//                 'autoShowHelptags': false,
//                 'sideImgLocation': 'img/lesson1.1/kitty.jpg'
//             },
            
//             {
//                 'activityModuleType': 'blankSentences',
//                 'activityOrder': 3,
//                 'moduleHeaderText' : 'Completa el siguiente ejercicio con el/la',
//                 'moduleHeaderIcon': 'menu',
//                 'moduleBasicText': '',
//                 'showTranslation': true,
//                 'exerciseSentences': 
//                 [
//                     {
//                         'text': "El gato de mi madre es muy bonito.",
//                         'hiddenWord': "es",
//                         'labelText': "verbo ser",
//                         'helperText': "My mother's cat is very beautiful."
//                     },
//                     {
//                         'text': "El padre come muchas galletas.",
//                         'hiddenWord': "come",
//                         'labelText': "verbo comer",
//                         'helperText': "The father eats many cookies."
//                     },
//                     {
//                         'text': "El profesor canta muy bien.",
//                         'hiddenWord': "canta",
//                         'labelText': "verbo cantar",
//                         'helperText': "The teacher sings very well."
//                     },
//                     {
//                         'text': "El perro corre muy rapido.",
//                         'hiddenWord': "corre",
//                         'labelText': "verbo correr",
//                         'helperText': "The dog runs very fast."
//                     }
//                 ]
                
//             },
//         ]
//     },
//     {
//         'level': 1,
//         'lessonNumber': 3,
//         'lessonTitle': '3Sustantivos',
//         'activitiesArray': [
//             {
//                 'activityModuleType': 'renderLessonTitle',
//                 'activityOrder': 1,
//                 'title': "3Masculino o femenino"
//             },
//             {
//                 'activityModuleType': 'introConcept',
//                 'activitx`yOrder': 2,
//                 'cardTitle': '2This is cardtitle',
//                 'cardContent': "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
//             }
//         ]
//     },
//     {
//         'level': 1,
//         'lessonNumber': 4,
//         'lessonTitle': '4Sustantivos',
//         'activitiesArray': [
//             {
//                 'activityModuleType': 'renderLessonTitle',
//                 'activityOrder': 1,
//                 'title': "2Masculino o femenino"
//             },

//             {
//                 'activityModuleType': 'slider',
//                 'activityOrder': 2,
//                 'moduleHeaderText' : "Let's have a look at some examples",
//                 'moduleHeaderIcon': '',
//                 'moduleBasicText': '',
//                 'slidesArray': [
//                     {
//                         'imgSrc': './img/lesson1.1/book.jpg',
//                         'slideTxt': 'Slide 1',
//                         'audioSrc': ''
//                     },
//                     {
//                         'imgSrc': './img/lesson1.1/door.jpg',
//                         'slideTxt': 'Slide 2',
//                         'audioSrc': ''
//                     },
//                     {
//                         'imgSrc': './img/lesson1.1/boy.jpg',
//                         'slideTxt': 'Slide 3',
//                         'audioSrc': ''
//                     }
//                 ]
//             }
//         ]
//     },
//     //LEVEL 2
//     {
//         'level': 2,
//         'lessonNumber': 1,
//         'lessonTitle': 'Adjetivo2s',
//         'activitiesArray': [
//             {
//                 'activityModuleType': 'renderLessonTitle',
//                 'activityOrder': 1,
//                 'title': "Adjetivos2Title"
//             },
//             {
//                 'activityModuleType': 'introConcept',
//                 'activityOrder': 2,
//                 'cardTitle': 'This is cardtitle',
//                 'cardContent': "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
//             },
//             {
//                 'activityModuleType': 'introConcept',
//                 'activityOrder': 3,
//                 'cardTitle': 'This is cardtitle',
//                 'cardContent': "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
//             },
//             ///////////////////////

//             {
//                 'activityModuleType': 'tutorWritingActivity',
//                 'activityOrder': 4,
//                 'activityId': 'anIdToRecognizeInTheDbas',
//                 'activityHeaderText': 'Ahora que sabes como funciona las. Acuerdate de usar las expresiones aprendidas.',
//                 'promptsArray': [
//                     {
//                         'word': 'gato',
//                         'imgSrc': ''
//                     },
//                     {
//                         'word': 'perro',
//                         'imgSrc': ''
//                     },
                    
//                     {
//                         'word': 'guitarra',
//                         'imgSrc': './img/lesson1.1/guitar.jpg'
//                     },
                    
//                     {
//                         'word': 'piano',
//                         'imgSrc': './img/lesson1.1/piano.jpg'
//                     }
//                 ]
//             },
//         ]
//     },
    
// ]