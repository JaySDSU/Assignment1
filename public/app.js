const element = React.createElement("div", {
  title: "Outer div"
}, React.createElement("h2", null, "Jay Patel"), React.createElement("img", {
  src: "./Jay.jpg",
  alt: "Head Shot"
}), React.createElement("p", null, "I am Jay Patel. I am a Graduate student at San Diego State University with major in Computer Science. My hobbies are playing cricket, football and badminton."), React.createElement("br", null), React.createElement("button", null, " ", React.createElement("a", {
  href: "https://github.com/JaySDSU/Assignment1",
  target: "_blank"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(element, document.getElementById('contents'));