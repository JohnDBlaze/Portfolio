function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Made by Yago Estévez (Twitter: @yagoestevez.com)


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "Abhilash ", /*#__PURE__*/

    React.createElement("strong", null, "Francis")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "I am a"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "Front End Developer"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, "&"), " Web Designer.")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#projects" }, "my portfolio"), /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "get in touch")))));






};


/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Who's this guy?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "My name is Abhilash Francis."), /*#__PURE__*/
    React.createElement("p", null, "I am a web developer and UI/UX designer located in the picturesque city of Kochi, Kerala."), /*#__PURE__*/



    React.createElement("p", null, "I really enjoy solving problems as well as making things pretty and easy to use. I can't stop learning new things; the more, the better. I also love football, reading and listening music")), /*#__PURE__*/






    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "What does he do?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "I'm a programmer."), /*#__PURE__*/
    React.createElement("p", null, "For the front-end I usually work with Javascript, either standalone or including popular frameworks like ReactJS. I also make the web pretty by using CSS and, whenever needed, any of their friends: Bootstrap, Tailwind css, Material UI etc."), /*#__PURE__*/




    React.createElement("p", null, "For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). But, of course, whenever the project requires new languages, I do that as well, Like I am maintaining and do changes in webapps and websites (Asp.net , Laravel, etc).")), /*#__PURE__*/




    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Also a designer."), /*#__PURE__*/
    React.createElement("p", null, "I feel comfortable working with many Adobe Photoshop and Figma are some kind of industry standards and I love working with them."),
    )))));








};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    html: 'fab fa-html5',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), /*#__PURE__*/

    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "View source ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));


};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "My Works"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/
    
    React.createElement(Project, {
      title: "Movie store.",
      img: 'img/Movie.png',
      tech: "js html css",
      link: "https://movie-store-af.vercel.app",
      repo: "https://github.com/JohnDBlaze/Movie-store" }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML5, JS and CSS."), /*#__PURE__*/
    React.createElement("p", null, "A Movie store which lets the users select the movie to watch or save to watchlist made for front-end projects.")),

    React.createElement(Project, {
      title: "Tourism website.",
      img: 'img/tourism.jpg',
      tech: "js html css",
      link: "https://tourism-website-two-blush.vercel.app",
      repo: "https://github.com/JohnDBlaze/Tourism-website" }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML5, JS and CSS."), /*#__PURE__*/
    React.createElement("p", null, "A Tourism website lets the users see great tourist destiantions made for front-end projects.")),

    React.createElement(Project, {
      title: "Chess.",
      img: 'img/chess-game.png',
      tech: "js html css",
      link: "https://chess-game-by-abhilash.vercel.app",
      repo: "https://github.com/JohnDBlaze/Chess" }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML5, JS and CSS."), /*#__PURE__*/
    React.createElement("p", null, "A Chess game with a basic AI algorithm made for front-end projects.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Virtual Guitar.",
      img: 'img/Guitar.png',
      tech: "js html css",
      link: "https://virtual-guitar.vercel.app",
      repo: "https://github.com/JohnDBlaze/Virtual-Guitar" }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML5, JS and CSS."), /*#__PURE__*/
    React.createElement("p", null, "A project on which I built a virtual guitar with its usual features.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Calculator.",
      img: 'img/Calculator.jpg',
      tech: "js react css",
      link: "https://calculator-for-portfolio.vercel.app",
      repo: "https://github.com/JohnDBlaze/Calculator" }, /*#__PURE__*/

    React.createElement("small", null, "Built using React and CSS."), /*#__PURE__*/
    React.createElement("p", null, "A project on which I built a virtual calculator with its usual features.")), /*#__PURE__*/


    React.createElement(Project, {
      title: "Travelo 3D parallax animation.",
      img: 'img/3D.png',
      tech: "js html css",
      link: "https://travelo-ten.vercel.app",
      repo: "https://github.com/JohnDBlaze/Travelo" }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML5, JS and CSS."), /*#__PURE__*/
    React.createElement("p", null, "A project on which I built a 3D Parallax Animation for front-end projects.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Digital Neon Clock.",
      img: 'img/digital-neon-clock.png',
      tech: "js html css",
      link: "https://digital-neon-clock.vercel.app",
      repo: "https://github.com/JohnDBlaze/Digital-Neon-Clock" }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML5, JS and CSS."), /*#__PURE__*/
    React.createElement("p", null, "A Digital neon clock made for front-end projects.")),

    React.createElement(Project, {
      title: "TicTacToe Game.",
      img: 'img/TicTacToe.png',
      tech: "js react css",
      link: "https://tic-tac-toe-newgame.vercel.app",
      repo: "https://github.com/JohnDBlaze/Tic-Tac-Toe" }, /*#__PURE__*/

    React.createElement("small", null, "Built using React, CSS and SVG."), /*#__PURE__*/
    React.createElement("p", null, "A TicTacToe game with a basic AI algorithm made for front-end projects.")), /*#__PURE__*/


    React.createElement(Project, {
      title: "Snake Game.",
      img: 'img/Snake.png',
      tech: "js html css",
      link: "https://snake-newgame.vercel.app",
      repo: "https://github.com/JohnDBlaze/Snake-Game" }, /*#__PURE__*/

    React.createElement("small", null, "Built using JS, HTML5 and CSS."), /*#__PURE__*/
    React.createElement("p", null, "A Snake game with a basic logic made for front-end projects.")), /*#__PURE__*/


    React.createElement(Project, {
      title: "Minesweeper.",
      img: 'img/Minesweeper.png',
      tech: "js html css",
      link: "https://minesweeper-newgame.vercel.app",
      repo: "https://github.com/JohnDBlaze/Minesweeper" }, /*#__PURE__*/

    React.createElement("small", null, "Built using JS, HTML5 and CSS."), /*#__PURE__*/
    React.createElement("p", null, "A Minesweeper game with a basic logic for front-end projects.")), /*#__PURE__*/



    React.createElement(Project, {
      title: "Quiz Game.",
      img: 'img/quiz.png',
      tech: "js react css",
      link: "https://world-of-quiz.vercel.app",
      repo: "https://github.com/JohnDBlaze/Quiz" }, /*#__PURE__*/

    React.createElement("small", null, "Built using React and CSS."), /*#__PURE__*/
    React.createElement("p", null, "A Quiz game with a basic logic made for front-end projects.")), /*#__PURE__*/


)))

};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "Want to ", /*#__PURE__*/
    React.createElement("br", null), "contact me?"), /*#__PURE__*/


    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to ",
    '', /*#__PURE__*/
    React.createElement("span", { className: "mail" }, "abhilashfrancis88", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-at at" }), "gmail", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-circle dot" }), "com"), ":")), /*#__PURE__*/





    React.createElement(SocialLinks, null)), /*#__PURE__*/

    React.createElement("form", { id: "contact-form", action: "#" }, /*#__PURE__*/
    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), /*#__PURE__*/
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), /*#__PURE__*/
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }), /*#__PURE__*/
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));




};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Abhilash Francis."), /*#__PURE__*/
    React.createElement(SocialLinks, null))));



};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://twitter.com",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Twitter profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-twitter" })), /*#__PURE__*/

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/JohnDBlaze",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's GitHub Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-github" })), /*#__PURE__*/

    // React.createElement("a", {
    //   href: "https://codepen.io/yagoestevez",
    //   target: "_blank",
    //   rel: "noopener noreferrer",
    //   title: "Link to author's Codepen Profile" },

    // ' ', /*#__PURE__*/
    // React.createElement("i", { className: "fab fa-codepen" }))));


    ))
};



/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
