import displayHeader from './displayHeader.js';
import examplesCard from './examplesCard.js';
import generateBlockquote from './generateBlockquote.js';
import generateFooter from './generateFooter.js';
import generateSidenav from './generateSidenav.js';
import introConcept from './introConcept.js';
import renderLessonTitle from './renderLessonTitle.js';
import missingWordsParagraph from './missingWordsParagraph.js';
import missingWordSentencesExercise from './missingWordSentencesExercise.js';
import tutorWritingActivity from './tutorWritingActivity.js';
import generateBasicText from './generateBasicText.js';


const activitiesModule = (() => {

    return {
      displayHeader,
      examplesCard,
      generateBlockquote,
      generateFooter,
      generateSidenav,
      introConcept,
      renderLessonTitle,
      missingWordsParagraph,
      missingWordSentencesExercise,
      tutorWritingActivity,
      generateBasicText
    };
  })();


export default activitiesModule