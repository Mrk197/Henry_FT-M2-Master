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
    [e.target.name]: e.target.value,
  }));
 }

  return (
      <div>
        <form>
          <div>
            <label htmlFor='username'>Username:</label>
            {/*Conectado el estado con el input*/}
            <input type="text" name="username" value={input.username} onChange={handleInputChange} className={errors.username && 'danger'}/>
            {/*Render Condicionado */}
            {errors.username && (
              <p className="danger">{errors.username}</p>
            )}
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input type="password" name="password" value={input.password} onChange={handleInputChange} className={errors.password && 'danger'}/>
            {errors.password && (
              <p className="danger">{errors.password}</p>
            )}
          </div>

          <input type="submit" disabled={Object.keys(errors).length !== 0 || (!input.password && !input.username)} />
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
  //en la segunda mitad de esta funció chequeamos dos cosas: si el campo de password está vacío
  //se le dirá al usuario que la contraseña es requerida.
  if(!input.password){
    errors.password = 'Password is required';
  }
  //por otra parte, cuando el user comience a escribir la contraseña se le pedirá que al menos
  //contenga un número.
  else if(!/(?=.*[0-9])/.test(input.password)){
    errors.password = 'Password is invalid';
  }

  return errors; //retorna obj de errores 
};
