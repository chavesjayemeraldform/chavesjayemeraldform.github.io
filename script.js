const insert = () => {

    let type = document.querySelector("#type").value;
    let label = document.querySelector("#label").value;
    let placeholder = document.querySelector("#placeholder").value;
  
    switch (type) {
      case "text":
        appendText(label, placeholder);
        break;
      case "radio":
        appendRadio(label, placeholder);
        break;
      case "button":
        appendButton(label);
        break;
    }

  };
  
  const appendText = (label = "Default", placeholder = "Default") => {
    let Elem = document.createElement("div");
    Elem.setAttribute("class", "input-group mb-1");

    let inputElem = document.createElement("input");
    inputElem.setAttribute("type", "text");
    inputElem.setAttribute("class", "form-control");
    inputElem.setAttribute("placeholder", placeholder);
    inputElem.setAttribute("aria-label", label);
    inputElem.setAttribute("draggable", "true");
    inputElem.setAttribute("ondragstart", "drag(event)");
    inputElem.setAttribute("id", "textDrag");
  
    let inputGroupContainer = document.createElement("div");
    inputGroupContainer.setAttribute("class", "input-group mb-1");
    inputGroupContainer.appendChild(inputElem);
    document.querySelector("#elements1").append(inputGroupContainer);
  };
  
  const appendRadio = (label = "Default") => {
    let container = document.createElement("div");
    container.setAttribute("class", "form-check d-flex align-items-center form-control");
    container.setAttribute("draggable", "true");
    container.setAttribute("ondragstart", "drag(event)");
    container.setAttribute("id", "radioDrag");
  
    let Elem = document.createElement("input");
    Elem.setAttribute("type", "radio");
    Elem.setAttribute("name", "radio-group");
  
    let labelElem = document.createElement("label");
    labelElem.innerHTML = label;
  
    container.appendChild(Elem);
    container.appendChild(labelElem);
  
    document.querySelector("#elements1").appendChild(container);
  };
  
  
  const appendButton = (label = "No label") => {
    let buttonElem = document.createElement("button");
    buttonElem.setAttribute("type", "button");
    buttonElem.setAttribute("class", "btn; px-4; form-control");
    buttonElem.setAttribute("style", "background-color: rgb(163, 0, 0); height:40px; color: rgb(255, 255, 255);");
    buttonElem.setAttribute("draggable", "true");
    buttonElem.setAttribute("ondragstart", "drag(event)");
    buttonElem.setAttribute("id", "buttonDrag");
    buttonElem.innerHTML = label;
  
    let buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class", "input-group-append");
  
    let divElem = document.createElement("div");
    divElem.setAttribute("class", "input-group mb-1");
    divElem.appendChild(buttonElem);
    divElem.appendChild(buttonContainer);
  
    document.querySelector("#elements1").append(divElem);
  };


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("type", ev.target.id);
}
function drop(ev) {

  ev.preventDefault();
  var data = ev.dataTransfer.getData("type");
  ev.target.appendChild(document.getElementById(data));
}

resetButton.addEventListener('click', () => {
  elemchild.innerHTML = '';
});


function mouseIn(titleW) {
  titleW.setAttribute("style", "font-size:360%; color: rgb(255, 255, 255); text-shadow: 0.1em 0.1em 0.2em white");
  titleW.setAttribute()
}

function mouseOut(titleW) {
  titleW.setAttribute("style", "font-size:360%; color: rgb(124, 0, 0);");
}
