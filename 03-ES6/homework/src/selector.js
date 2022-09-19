var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  console.log("startEl", startEl);
  //si el selector esta en el elemento 
  if (matchFunc(startEl)) resultSet.push(startEl); //se guarda el elemento  
  
  if (startEl.children) { //hay más elementos hijos?
    //recorrer cada nodo hijo
    //console.log("startEl.children", startEl.children);
    for (let elem of startEl.children) {
      let result = traverseDomAndCollectElements(matchFunc, elem); //verificar selector
      console.log("result", result); 
      resultSet = [...resultSet, ...result];
    }
  }
  console.log("resultSet", resultSet);
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector.startsWith("#")){
    return "id";
  }
  else if(selector.startsWith(".")){
    return "class";
  }
  else if(selector.includes(".")){
    return "tag.class";
  }
  else if (selector.includes(">")) { //child combinator 
    return "childs";
  }
  else if (selector.includes(" ")) {
    return "descendents";
  }
  else{
    return "tag";
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  console.log("selectorType", selectorType);
  var matchFunction;
  if (selectorType === "id") { 
   matchFunction = (HTMLelement) =>{
    //return (HTMLelement.id === selector.substring(1));
    return ("#" + HTMLelement.id === selector);
   };
  } else if (selectorType === "class") {
    matchFunction = (HTMLelement) =>{
      //console.log("className",HTMLelement.className);
      //array de clases que contiene el elemento 
      let classes =  HTMLelement.className.split(" ");
      return classes.includes(selector.substring(1));
    };
  } else if (selectorType === "tag") {
    matchFunction = function (HTMLelement) {
      return HTMLelement.tagName && (HTMLelement.tagName.toLowerCase() === selector.toLowerCase());
    }; 
  } else if (selectorType === "tag.class") {
      matchFunction = (HTMLelement) =>{
        let [selectorTag, selectorClass]= selector.split(".");
        //si coincide el tag y la clase  // recursión da como resultado una función que se ejecuta y da true o false
        return (matchFunctionMaker(selectorTag)(HTMLelement) && matchFunctionMaker("." + selectorClass)(HTMLelement));
    };
  }
  else if (selectorType === "childs") {
    matchFunction = function (HTMLelement) {
      //console.log("split-selector ", selector.split(" ")[0]);
      //console.log("parent ",HTMLelement.parentElement.tagName.toLowerCase());
      const selectores = selector.split(" ");
      return (HTMLelement.parentElement.tagName.toLowerCase() === selectores[0] && HTMLelement.tagName.toLowerCase() === selectores[2]);
    }
  }
  else if (selectorType === "descendents") {
    matchFunction = function (HTMLelement) {
      const selectores = selector.split(" ");
      //console.log("selectores ",selectores);
      let padre = HTMLelement.parentElement;
      if(padre.parentElement){
        var padrePadre = padre.parentElement.tagName.toLowerCase();
        //console.log("padrePadre ",padrePadre);
      } 
      return ((padre.tagName.toLowerCase() === selectores[0] || padrePadre === selectores[0]) && HTMLelement.tagName.toLowerCase() === selectores[1]);
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  //selectorMatchFunc ->> contiene la función a la que se le va ir pasando el elemento y si coonicide retorna tue 
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
