import axios from 'axios';

export function increment() {
  return {
    type: 'INCREMENT',
  }
};
export function decrement() {
    return {
      type: 'DECREMENT',
  };
};
export function reset() {
  return {
    type: 'RESET',
  }
}

export function getPost() {
  return {
    type: 'GET_POST',
  }
}

export function receivePost(post) {
  return {
    type: 'RECEIVE_POST',
    post  //objeto con el data obtenido del request
  }
}

export function fetchPost(valor) {
  return function (dispatch) {
    dispatch(getPost()); //antes de hacer la petición cambia el loading a true
    axios.get(`https://jsonplaceholder.typicode.com/todos/${valor}`)
      .then(r => r.data)
      .then(d => dispatch(receivePost(d)))  //una vez recibida la data se ejecuta accion de recibida 
      .catch(e => console.log(e));
  }
}