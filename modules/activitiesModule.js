import displayHeader from './displayHeader.js';
import exampleCards from './exampleCards.js';
import generateBlockquote from './generateBlockquote.js';
import generateFooter from './generateFooter.js';
import generateSidenav from './generateSidenav.js';
import introConcept from './introConcept.js';
import renderLessonTitle from './renderLessonTitle.js';
import missingWordsParagraph from './missingWordsParagraph.js';
import tutorWritingActivity from './tutorWritingActivity.js';
import generateBasicText from './generateBasicText.js';
import slider from './slider.js';
import wordsTable from './wordsTable.js';
import blankSentences from './blankSentences.js';
import multipleChoicePlusAnswers from './multipleChoicePlusAnswers.js';
import videoActivity from './videoActivity.js';
import verbChart from './verbChart.js';
import wildCard from './wildCard.js';
import conversationMultipleChoice from './conversationMultipleChoice.js';
import timedWritingActivity from './timedWritingActivity.js';





const activitiesModule = (() => {

    return {
      displayHeader,
      exampleCards,
      generateBlockquote,
      generateFooter,
      generateSidenav,
      introConcept,
      renderLessonTitle,
      missingWordsParagraph,
      blankSentences,
      tutorWritingActivity,
      generateBasicText,
      slider,
      wordsTable,
      multipleChoicePlusAnswers,
      videoActivity,
      verbChart,
      wildCard,
      conversationMultipleChoice,
      timedWritingActivity
    };
  })();


export default activitiesModule