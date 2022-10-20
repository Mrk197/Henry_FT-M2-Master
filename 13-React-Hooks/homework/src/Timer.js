import React from 'react';
import './Timer.css';
import { useState } from 'react'; //hook para manejo de estados 
import { useEffect } from 'react'; //hook para efectos secundarios en componentes funcionales (simula life cicle de componentes de clase)
import { useRef } from 'react'; //hook para untilizar una referencia para acceder al DOM

const Timer = () => {
  const [segundos, setSegundos] = useState(0); //estado para los segundos inicializado en 0
  const [activo, setActivo] = useState(false); //estado para el inicio/pausa del timer
  const [tipo, setTipo] = useState('Contador'); //estado para cambiar de Contador a Cuenta Regresiva y vv
  const myRef = useRef(null);

  // useEffect(cb, [dependencias])  
  useEffect(() => {
    let intervalo = null;
    if (activo && tipo === 'Contador') {
      intervalo = setInterval(() => {  //setInterval: permite ejecutar una determinada función o bloque de código cada cierto intervalo de tiempo definido en milisegundos
        setSegundos(segundos => segundos + 1);
      }, 1000);
    }
    if (!activo && segundos !== 0 && tipo === 'Contador') {
      clearInterval(intervalo);  //finaliza ejecución de setInterval()
    }
    if (activo && tipo === 'Cuenta Regresiva') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos - 1);
      }, 1000);
    }
    if (segundos === 0 && tipo === 'Cuenta Regresiva') {
      reset();
      clearInterval(intervalo); //finaliza ejecución de setInterval()
    }
    //SE EJECUTA CUANDO EL COMPONENTE DEJA DE EXISTIR
    return () => clearInterval(intervalo); //finaliza ejecución de setInterval()
  }, [activo, segundos, tipo]);  // cada que haya un cambio en state se ehecutará useEffect

  function agregaSegundos() { //cambiar segundos al cambiar el calor del input
    // `current` apunta al elemento de entrada de texto montado
    let ref = myRef.current.value
    setSegundos(ref)
  }

  function changeTipo(){
    tipo === "Contador" ? setTipo("Cuenta Regresiva") : setTipo("Contador")
  }

  function reset(){
    setSegundos(0);
  }

  return (
    <div className="app">
      <div className="time">
        {segundos}s 
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`} onClick={() => setActivo(!activo)} >
          {activo ? 'Pausa' : 'Inicio'}
        </button>
        <button className="button button-secondary" onClick={reset}>
          Reset
        </button>
      </div>
      <button className="button" onClick={changeTipo}>
          {tipo}
      </button>
      {tipo === 'Cuenta Regresiva' && <input type="number" ref={myRef} onChange={agregaSegundos} placeholder="Ingresa Segundos" autoComplete="off"/>}
    </div>
  );
};

export default Timer;
