var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  
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
  var matchFunction;
  if (selectorType === "id") { 
   matchFunction = (HTMLelement) =>{
    return (HTMLelement.id === selector.substring(1));
   };
  } else if (selectorType === "class") {
    matchFunction = (HTMLelement) =>{
      console.log("className",HTMLelement.className);
      //array de clases que contiene el elemento 
      let classes =  HTMLelement.className.split(" ");
      return classes.includes(selector.substring(1));
    };
  } else if (selectorType === "tag.class") {
    matchFunction = (HTMLelement) =>{
      let selectores = selector.split(".");
      let classes =  HTMLelement.className.split(" ");
      //si coincide el tag y la clase
      return (HTMLelement.tagName.toLowerCase() === selectores[0]) && (classes.includes(selectores[1]));
    };
  } else if (selectorType === "tag") {
    matchFunction = function (HTMLelement) {
      return HTMLelement.tagName && (HTMLelement.tagName.toLowerCase() === selector.toLowerCase());
    };
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
