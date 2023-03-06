import { createStore } from 'effector';

import CompatibLScreenshort1 from 'assets/screenshots/CompatibL1.png';
import CompatibLScreenshort2 from 'assets/screenshots/CompatibL2.png';
import CompatibLScreenshort3 from 'assets/screenshots/CompatibL3.png';
import KBIBiopharmaScreenshort1 from 'assets/screenshots/KBIBiopharma1.png';
import KBIBiopharmaScreenshort2 from 'assets/screenshots/KBIBiopharma2.png';
import KBIBiopharmaScreenshort3 from 'assets/screenshots/KBIBiopharma3.png';
import RashomonScreenshot1 from 'assets/screenshots/Rashomon1.png';
import RashomonScreenshot2 from 'assets/screenshots/Rashomon2.png';

import { ProjectType, TypesWorkEnum } from './types';

export const $allWorkExperience = createStore<ProjectType[]>([
  {
    nameOfCompany: 'CompatibL',
    key: 'CompatibL',
    description:
      "This has been my full-time gig since December of 2021 and it's been exciting and interesting, to say the least, diving head first into the Fin-tech industry having no prior knowledge of it. During the period of work, I managed to participate in 2 internal projects of the company, go through all the stages of development and put the products into release. One of my most proud accomplishments since working at em, was introducing the idea (and implementation) of an internal UI component framework for expedited UI development and reusability. Let's walk through that...",
    shortDescription:
      "This has been my full-time gig since December of 2021 and it's been exciting and interesting, to say the least, diving head first into the Fin-tech industry having no prior knowledge of it. During the period of work, I managed to participate in 2 internal projects of the company, go through all the stages of development and put the products into release...",
    img: CompatibLScreenshort1,
    type: TypesWorkEnum.FULL_TIME,
    allTech: [
      'React',
      'Typescript',
      'node.js',
      'express',
      'Redux/Toolkit',
      'Effector',
      'Webpack',
      'Scss',
      'Reactstrap',
      'Styled-components',
      'JWT',
      'Plotly',
      'Docker',
      'Jest',
    ],
    link: 'https://www.compatibl.com/',
    details:
      'The design agency was completely create site design, style guide, and 2 color themes. The style guide gave us a framework to know what each state of each component needed to look like. To style the UI components, we chose the scss preprocessor and the Reactstrap library. Initially, the choice fell on Reactstrap because it had an API for tables. The tables were very important to us because the business requirements were built on them. But a month later we realized that the API for tables does not cope with the functionality that we need to implement. And we decided to add the react-table library and we began to breathe deeply. To implement business requirements, we used Redux/Toolkit, because most developers had experience with it. In general, Redux has a large community and good documentation, but my vote was for Effector. On the first internal project, we used Effector as a state manager. This is an amazing tool that supports multi-store well and separates all business logic from UI components, which makes the code much cleaner. It also has a very convenient subscription to events, much less code when compared with Redux and also good documentation.',
    screenShots: [CompatibLScreenshort2, CompatibLScreenshort3],
    myNotableContributions:
      "Along with the internal components created using Scss and Reactstrap, I expanded the application by adding additional, reused HOC components and custom hooks. Implemented the logic of reused components for tables with formatting of different data types. Possibility of nested tables along their path with breadcrumbs. I also implemented the possibility of user interaction with UI when there is heavy asynchronous data loading in the process. I used a parallel thread using Web Workers. I was also takes to implement user authorization. These are just a few things I've worked on since joining the team.",
    problemsAndLessonsLearned:
      'The unidirectional modular architecture of the project gave me a clear understanding of how to properly create a supported and extensible large web application.',
  },
  {
    nameOfCompany: 'KBI Biopharma',
    key: 'KBIBiopharma',
    description:
      'Since June 2020, I have been working on an internal project of a company engaged in the creation of medicines and vaccines. The project was intended for medical and scientific staff in various fields to facilitate their work with statistical data and research results. The platform contained already structured tables and graphs so that medical professionals could immediately begin further study using ready-made and processed data.',
    shortDescription:
      'Since June 2020, I have been working on an internal project of a company engaged in the creation of medicines and vaccines. The project was intended for medical and scientific staff in various fields to facilitate their work with statistical data and research results...',
    img: KBIBiopharmaScreenshort1,
    type: TypesWorkEnum.FULL_TIME,
    allTech: [
      'React',
      'Typescript',
      'Redux',
      'MaterialUI',
      'Node.js',
      'Express',
      'Dynamodb',
      'Redshift',
      'Jest',
    ],
    link: 'https://www.kbibiopharma.com/',
    details:
      'Structuring took place in three stages. The first was the direct input of all the initial data of the object of study, then followed the stage of study with the recording of the result in the database. And the final stage was unit operations, details of the development of medicines. React, Typescript were used as a technical stack, Node.js. Two databases were also used: Dynamodb and Redshift. And for users to subscribe to receive new information, updates about the drug or study they are interested in, the email service SES was used. My area of responsibility in this project was to create a flexible, reusable architecture with a user-friendly and responsive interface, drawing graphs, tables and optimizing the client side of the application.',
    screenShots: [KBIBiopharmaScreenshort2, KBIBiopharmaScreenshort3],
    myNotableContributions: '',
    problemsAndLessonsLearned: '',
  },
  {
    nameOfProject: 'Rashomon',
    key: 'Rashomon',
    description:
      'One of the projects at the beginning of my journey, in early 2020, was the American startup Rashomon.  The idea was to make a completely free version of presentation application, based on already implemented paid ones, where only parts of the application functions are available in the operation.  Rashomon was created by us on the Google platform using Google API.  We have done quite a lot of work, but, unfortunately, the project was closed due to the pandemic.',
    shortDescription:
      'One of the projects at the beginning of my journey, in early 2020, was the American startup Rashomon.  The idea was to make a completely free version of presentation application, based on already implemented paid ones, where only parts of the application functions are available in the operation...',
    img: RashomonScreenshot1,
    type: TypesWorkEnum.CONTRACT,
    allTech: [
      'Javascript',
      'React',
      'GoogleAPI',
      'MobX',
      'MatetialUI',
      'Webpack',
    ],
    details:
      'We chose Modx as a technical stack because we were tired of the verbosity of Redux, and Redux/Toolkit has not been used so widely yet. We also wanted to avoid using additional wrappers for asynchronous actions as in the case of Redux-thunk MoX, in turn, gave us the opportunity to write code faster. For UI components, we chose MaterialUI to make the application look like Google.',
    screenShots: [RashomonScreenshot2],
    problemsAndLessonsLearned:
      'The biggest problem we faced during the development process was the close connection with the Google API. As a result, it was difficult to test and fix the application, the project deployed for a very long time and sometimes we were limited in actions. Now I assume that in order to optimize this problem, it was necessary to create a layer between the Google API and the frontend to extend our functionality.',
  },
  {
    type: TypesWorkEnum.OWN_PROJECTS,
    nameOfCompany: 'Coming Soon',
    shortDescription: "Details on the the family brand App I'm building.",
  },
]);
