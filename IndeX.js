//* Nav Bar *//
const NavBar = [
    {title: "Home", link: "http://127.0.0.1:5500/index.html"},
    {title: "Blog", link: "http://127.0.0.1:5500/Blog.html"},
    {title: "Design", link: "http://127.0.0.1:5500/design.html"},
    {title: "Essay", link: "http://127.0.0.1:5500/essay.html"},
    {title: "Profile & Portfolio", link: "http://127.0.0.1:5500/profile&portfolio.html"},
];

const navigation = document.getElementsByClassName("navigation");

for (var i = 0; i < navigation.length; i++) {
    let list = document.createElement("ul");

    for (var j = 0; j < NavBar.length; i++) {
        let listItemLink = document.createElement("a");
        listItemLink.innerText = NavBar[j].title;
        listItemLink.setAttribute("href", NavBar[j].link);
        let listItem = document.createElement("li");
        listItem.appendChild(listItemLink);
        list.appendChild(listItem);
    }
    navigation[i].appendChild(list);
}

window.onscroll = function() {myFunction()};

var nav = document.getElementById("nav");
var sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}

