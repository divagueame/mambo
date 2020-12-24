import {db} from './java.js';
    
let lessonsArray = [
    //LEVEL 1
        //LESSON 1.1
    {
        'level': 1,
        'lessonNumber': 1,
        'lessonTitle': '1Sustantivo1s',
        'activitiesArray': [
            {
                'activityModuleType': 'renderLessonTitle',
                'activityOrder': 1,
                'title': "Masculino o femenino",
                'lessonTopImageSrc': './img/lesson1.1/malefemale.png'
            },
            
            
            {
                'activityModuleType': 'multipleChoicePlusAnswers',
                'activityOrder': 2,
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
                        'type': 'multiple',
                        'question': 'What is the baby name?',
                        'answersArray': [
                            'Correct2',
                            'chingon2',
                            'pepe2',
                            'paco2',
                        ]
                    }
                    
                ]
                
            }, 
           
            
            {
                'activityModuleType': 'blankSentences',
                'activityOrder': 3,
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
                'activityModuleType': 'exampleCards',
                'activityOrder': 4,
                'moduleHeaderText': "3 Let's have  a look at some examples...",
                'moduleHeaderIcon': 'create',
                'moduleBasicText': 'Try to remember these words',
                'autoShowTranslate': false,
                'examplesArray': [
                    {
                        'imgSrc': './img/lesson1.1/book.jpg',
                        'text': 'El niñ<span class="heavy-text">o</span> sdfasdf asds  sd fsd ds d',
                        'translatedText': 'The boy sdf sd',
                        'audioSrc': ''
                    }
                    ,
                    {
                        'imgSrc': './img/lesson1.1/boy.jpg',
                        'text': 'La niñ<span class="heavy-text">a</span>',
                        'translatedText': 'The girl',
                        'audioSrc': './audio/lesson1.1/2.mp3'
                    },

                    {
                        'imgSrc': './img/lesson1.1/door.jpg',
                        'text': 'La niñ<span class="heavy-text">a</span>',
                        'translatedText': 'The girl',
                        'audioSrc': './audio/lesson1.1/2.mp3'
                    }
                ] 
            },
            {
                'activityModuleType': 'exampleCards',
                'activityOrder': 5,
                'moduleHeaderText': "4 Let's have  a look at some examples...",
                'moduleHeaderIcon': 'create',
                'moduleBasicText': 'Try to remember these words',
                'autoShowTranslate': false,
                'examplesArray': [
                    {
                        'imgSrc': './img/lesson1.1/chair.jpg',
                        'text': 'El niñ<span class="heavy-text">o</span> sdfasdf asds  sd fsd ds d',
                        'translatedText': 'The boy sdf sd',
                        'audioSrc': './audio/lesson1.1/1.mp3'
                    }
                    ,
                    {
                        'imgSrc': './img/lesson1.1/kitty.jpg',
                        'text': 'La niñ<span class="heavy-text">a</span>',
                        'translatedText': 'The girl',
                        'audioSrc': './audio/lesson1.1/2.mp3'
                    },

                    {
                        'imgSrc': './img/lesson1.1/head.jpg',
                        'text': 'La niñ<span class="heavy-text">a</span>',
                        'translatedText': 'The girl',
                        'audioSrc': './audio/lesson1.1/2.mp3'
                    },
                    
                    {
                        'imgSrc': './img/lesson1.1/door.jpg',
                        'text': 'La niñ<span class="heavy-text">a</span>',
                        'translatedText': 'The girl',
                        'audioSrc': './audio/lesson1.1/2.mp3'
                    }
                ] 
            },
            {
                'activityModuleType': 'exampleCards',
                'activityOrder': 6,
                'moduleHeaderText': "2 Let's have  a look at some examples...",
                'moduleHeaderIcon': 'create',
                'moduleBasicText': 'Try to remember these words',
                'autoShowTranslate': false,
                'examplesArray': [
                    {
                        'imgSrc': './img/lesson1.1/boy-icon.png',
                        'text': 'El niñ<span class="heavy-text">o</span> sdfasdf asds  sd fsd ds d',
                        'translatedText': 'The boy sdf sd',
                        'audioSrc': './audio/lesson1.1/1.mp3'
                    }
                    ,
                    {
                        'imgSrc': './img/lesson1.1/girl-icon.png',
                        'text': 'La niñ<span class="heavy-text">a</span>',
                        'translatedText': 'The girl',
                        'audioSrc': './audio/lesson1.1/2.mp3'
                    }
                ] 
            },
            {
                'activityModuleType': 'exampleCards',
                'activityOrder': 7,
                'moduleHeaderText': "1 Let's have  a look at some examples...",
                'moduleHeaderIcon': 'create',
                'moduleBasicText': 'Try to remember these words',
                'autoShowTranslate': false,
                'examplesArray': [
                    {
                        'imgSrc': './img/lesson1.1/boy-icon.png',
                        'text': 'El niñ<span class="heavy-text">o</span> sdfasdf asds  sd fsd ds d',
                        'translatedText': 'The boy sdf sd',
                        'audioSrc': './audio/lesson1.1/1.mp3'
                    }
                ] 
            },

            {
                'activityModuleType': 'generateBasicText',
                'activityOrder': 8,
                'title': "Masculino o femenino",
                'moduleHeaderText':  '1.1 Male and female nouns. El vs. La',
                'moduleHeaderIcon': 'widgets',
                'moduleBasicText': ''
            },
            {
                'activityModuleType': 'missingWordsParagraph',
                'activityOrder': 9,
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
                'activityModuleType': 'wordsTable',
                'activityOrder': 10,
                'moduleHeaderText' : 'Words table',
                'moduleHeaderIcon': 'reorder',
                'moduleBasicText': '',
                'wordsArray': 
                [
                    {
                        'text': 'La chica es muy graciosa.',
                        'translatedText': 'The girl is very funny',
                        'audioSrc': ''
                    },
                    {
                        'text': 'La casa es muy pequena  df  sd fsfsdf sdf sdf sd fd s.',
                        'translatedText': 'The house is very small sdf sdfdssdf dsss d dsd s',
                        'audioSrc': ''
                    },
                    {
                        'text': 'La cara es grande.',
                        'translatedText': 'The face is big',
                        'audioSrc': ''
                    },
                 
                    
                ]
                
            }, 
            
        ]
    },
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
                'activityModuleType': 'missingWordsParagraph',
                'activityOrder': 4,
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
                'activityModuleType': 'introConcept',
                'activityOrder': 2,
                'cardTitle': 'This is cardtitle',
                'cardContent': "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
            },
            {
                'activityModuleType': 'introConcept',
                'activityOrder': 3,
                'cardTitle': 'This is cardtitle',
                'cardContent': "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
            },
            ///////////////////////

            {
                'activityModuleType': 'tutorWritingActivity',
                'activityOrder': 4,
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

