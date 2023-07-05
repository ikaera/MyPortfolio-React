import img1 from '../assets/Booze-Hound.jpg';
import img2 from '../assets/P2P Vinyl & CD Resale/discexchange favorited items.png';
import FantasticBeasts from '../assets/img-project/FantasticBeasts.png';
import techBlog from '../assets/img-project/Tech-Blog-IE-14.png';
import codeQuiz from '../assets/img-project/codeQ.png';
import weatherDashboard from '../assets/img-project/weatherDashboard.png';
import noteTaker from '../assets/img-project/NoteTaker.png';
import textEditor from '../assets/img-project/Text-Editor.png';
import passwordGen from '../assets/img-project/passwordG.png';
import MyPortfolioReact from '../assets/img-project/MyPortfolioReact.png';

const projects = [
  {
    title: 'Fantastic Beasts and How to Buy Them',
    image: FantasticBeasts,
    gitHub: 'https://github.com/ikaera/Dream-Project',
    diployedApp: 'https://fantastic-beasts.herokuapp.com/',
    description:
      'React, MongoDB, Mongoose, Node.js, Express.js, GraphQL, MongoDB Atlas, IndexedDB, PWA, JWT, Material UI, EmailJS, Stripe, Heroku',
  },
  {
    title: 'Booze-Hound',
    image: img1,
    gitHub: 'https://github.com/Jsrra/Booze-Hound',
    diployedApp: 'https://jsrra.github.io/Booze-Hound/',
    description: 'API, ',
  },
  {
    title: 'P2P Vinyl & CD Resale',
    image: img2,
    gitHub: 'https://github.com/ikaera/Project-2',
    diployedApp: 'https://serene-forest-09402.herokuapp.com/',
    description: '',
  },
  // {
  //   title: 'Tech-Blog',
  //   image: techBlog,
  //   gitHub: 'https://github.com/ikaera/Tech-Blog-IE-14',
  //   diployedApp: 'https://secure-tor-51469.herokuapp.com/',
  //   description: ' ',
  // },
  {
    title: 'Code-Quiz',
    image: codeQuiz,
    gitHub: 'https://github.com/ikaera/Code-Quiz-WebDiv-IE',
    diployedApp: 'https://ikaera.github.io/Code-Quiz-WebDiv-IE/',
    description: 'JS, DOM, CSS, HTML ',
  },
  {
    title: 'Weather Dashboard',
    image: weatherDashboard,
    gitHub:
      'https://github.com/ikaera/Mod6-Server-Side-APIs-Challenge-WeatherDashboard',
    diployedApp:
      'https://ikaera.github.io/Mod6-Server-Side-APIs-Challenge-WeatherDashboard/',
    description: 'API, ',
  },
  // {
  //   title: 'My-Note-Taker',
  //   image: noteTaker,
  //   gitHub: 'https://github.com/ikaera/My-Note-Taker',
  //   diployedApp: 'https://fierce-thicket-04291.herokuapp.com/',
  //   description: 'Express.js, Node.js, JavaScript, Path module, UUID module, ',
  // },
  {
    title: 'My Portfolio in React',
    image: MyPortfolioReact,
    gitHub: 'https://github.com/ikaera/MyPortfolio-React',
    diployedApp: 'https://ikaera.github.io/MyPortfolio-React/',
    description: 'Node.js, React',
  },
  {
    title: 'Password Generator',
    image: passwordGen,
    gitHub: 'https://github.com/ikaera/Password-Generator-IE',
    diployedApp: 'https://ikaera.github.io/Password-Generator-IE/',
    description: 'JS, DOM',
  },
];

export default projects;
