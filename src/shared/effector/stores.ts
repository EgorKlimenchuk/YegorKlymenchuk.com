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
      "This has been my full-time gig since December of 2021 and it's been exciting and interesting, to say the least, diving head first into the Fin-tech industry having no prior knowledge of it. During the period of work, I managed to participate in 4 internal projects of the company, go through all the stages of development and put the products into release. My experience at Compatibl was centered around leading the development and maintenance of an advanced monorepo design. This project was unique as it aimed to cater to a diverse range of customers through a unified user interface. Let's walk through that...",
    shortDescription:
      "This has been my full-time gig since December of 2021 and it's been exciting and interesting, to say the least, diving head first into the Fin-tech industry having no prior knowledge of it. During the period of work, I managed to participate in 4 internal projects of the company, go through all the stages of development and put the products into release...",
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
      'In my role I implemented a versioning system for features based on the major.minor.patch approach, ensuring clear and structured updates. Regular communication with different teams and customers was integral to align project objectives and understand user needs. For the base UI version, it was essential to store main features while ensuring maintainability and scalability. Modularity was a key design principle, enabling us not to be constrained by any specific framework or customer project, thus maintaining flexibility in our development approach. Also interviews and mentoring junior developers was a priority, focusing on skill development and fostering a collaborative team environment as the team was constantly growing.',
    screenShots: [CompatibLScreenshort2, CompatibLScreenshort3],
    myNotableContributions:
      "Development of Modular UI Library: Created a versatile UI component library enhancing development efficiency across multiple projects.\n\n Implementation of Versioning Strategy: Adopted the major.minor.patch approach for feature versioning, ensuring organized and traceable updates.\n\n Cross-Team Collaboration: Facilitated effective communication across various teams and with clients, aligning project goals with user requirements based on documentation.\n\n Framework-Neutral Design: Ensured the base UI's modularity, allowing it to remain independent of specific frameworks or client projects, thus enhancing its adaptability and reusability.",
    problemsAndLessonsLearned:
      'During my tenure, I encountered a frequent conflict between business objectives and development perspectives, particularly around the notion of perfectionism. However, this challenge led to a valuable realization: the fundamental principles of modularity, reusability, and maintainability are crucial for harmonizing business and development goals. Emphasizing these principles not only streamlined the development process but also facilitated smoother business operations, striking a balance between idealism in development and pragmatism in business execution.',
  },
  {
    nameOfCompany: 'KBI Biopharma',
    key: 'KBIBiopharma',
    description:
      'Since June 2019, I have been working on an internal project of a company engaged in the creation of medicines and vaccines. The project was intended for medical and scientific staff in various fields to facilitate their work with statistical data and research results. The platform contained already structured tables and graphs so that medical professionals could immediately begin further study using ready-made and processed data.',
    shortDescription:
      'Since June 2019, I have been working on an internal project of a company engaged in the creation of medicines and vaccines. The project was intended for medical and scientific staff in various fields to facilitate their work with statistical data and research results...',
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
    myNotableContributions:
      'On this project, I implemented new functionality depending on the business requirements, taking into account modifications, extensibility and other best practices of modern programming. Built a RESTful APIs using Express, and also did lazy loading to dynamically import any imported file.\n\nAt the time of my arrival, there was a noticeable technical debt on the project, which I managed to reduce by 40% in the first month of work.\n\nI also initiated testing, for which there is usually not enough time, as a result of which we managed to cover 60% with tests. Of course, this is not 99% as Robin Martin wrote in his books, but as they say, there is something to strive for.',
    problemsAndLessonsLearned: '',
  },
  {
    nameOfProject: 'Rashomon',
    key: 'Rashomon',
    description:
      'One of the projects at the beginning of my journey, in early 2019, was the American startup Rashomon.  The idea was to make a completely free version of presentation application, based on already implemented paid ones, where only parts of the application functions are available in the operation.  Rashomon was created by us on the Google platform using Google API.  We have done quite a lot of work, but, unfortunately, the project was closed due to the pandemic.',
    shortDescription:
      'One of the projects at the beginning of my journey, in early 2019, was the American startup Rashomon.  The idea was to make a completely free version of presentation application, based on already implemented paid ones, where only parts of the application functions are available in the operation...',
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
