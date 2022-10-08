import React from 'react';

export default function  Form() {
  //estados para el comportamiento de nuestro componente
  //const [username, setUsername] = React.useState('');
  //const [password, setPassword] = React.useState('');
  //creando un estado con un objeto, cada propiedad es un estado de cada input que se tenga (se vuelve escalable)
  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });
  //estado para el manejo de errores
  const [errors, setErrors] = React.useState({});

 const handleInputChange = function(e) {
  setInput({
    ...input, //se hace spreading para no perder propiedades que ya se tenían 
              //Ej: input = {user:'user2'} -->>  input = {...input, pwd:'dgshg'} queda -->> {user: 'user2', pwd: 'dgshg'}
    [e.target.name]: e.target.value,
  });
  setErrors(validate({
    ...input,
    [e.target.name]: e.target.value
  }));
 }

  return (
      <div>
        <form>
          <div>
            <label>Username:</label>
            {/*Conectado el estado con el input*/}
            <input type="text" name="username" value={input.username} onChange={handleInputChange} className={errors.username && 'danger'}/>
            {errors.username && (
              <p className="danger">{errors.username}</p>
            )}
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={input.password} onChange={handleInputChange} className={errors.password && 'danger'}/>
            {errors.password && (
              <p className="danger">{errors.password}</p>
            )}
          </div>
        </form>
      </div>
  )
}

export function validate(input) { //se recibe obj input
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  else if(!input.password){
    errors.password = 'Password is required';
  }
  else if(!/(?=.*[0-9])/.test(input.password)){
    errors.password = 'Password is invalid';
  }

  return errors; //retorna obj de errores 
};
