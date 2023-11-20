// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);

const section2Element = document.getElementById("section2");
section2Element.addEventListener("click", toggle);

const section3Element = document.getElementById("section3");
section3Element.addEventListener("click", toggle);

const infoList = document.querySelector(".accordion");


loginfo();

async function loginfo() {
  
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await response.json();
  


  data.forEach((object) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<h2 class="title${object.id}">${object.title}</h2>   <p class="description"> ${object.body}</p>`;

    newDiv.addEventListener("click",toggle);
    
    infoList.appendChild(newDiv);

  });
}


