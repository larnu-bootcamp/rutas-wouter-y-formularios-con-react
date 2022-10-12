import React, { useState } from 'react';
import { Link } from 'wouter';

export default function Form(){

  const [errors, setErrors] = useState({})
  const[input, setInput] = useState({ name: "", image: "", height: "" })

  function validate(input){
    let errors = {};

    if(!input.name || !/^[a-z]+[A-Za-z0-9\s]+$/g.test(input.name)){
        errors.name = 'Al menos dos caracteres el primero, letra minúscula.';
    }
    if(!input.height || !/^[1-9]\d*(\.\d+)?$/.test(input.height)){
        errors.height = 'El número tiene que ser positivo.';
    }
    if (!input.image || !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(input.image) ){
        errors.image = 'Debe ser una URL';
    }
    return errors
  }


  function handleChange(e){
    e.preventDefault ();
    setInput({
      ...input,
      [e.target.name] : e.target.value,
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }
  
  function handleSubmit(e){
    e.preventDefault()
    // console.log(input)
    if(input.name.length >1
      && !errors.hasOwnProperty("name")
      && !errors.hasOwnProperty("image") //devuelve un buleano si el objeto tiene la propiedad especificada 
      && input.height.length > 0
    )
    {
      alert ("Pokemon creado con exito")
      setInput({
        name: "",
        image: "",
        height: "", 
      })
    } else{
        alert ("Debe compeltar correctamente todos los campo con asteriscos (*)")     
      }
  }
     
  return(
        
    <form   onSubmit = {(e)=>handleSubmit(e)} >
      <div>
        <input
          placeholder="Nombre: (*)"
          autoComplete="off"
          type = "text"
          value = {input.name}
          name = "name"
          onChange ={(e)=>handleChange(e)} 
        /> 
        {errors.name && (<p>{errors.name}</p>)}<br/> 
                          
        <input  
          autoComplete="off"  
          type="number" 
          value={input.height} 
          name='height' 
          placeholder="Altura. (*)"  
          onChange={(e)=>handleChange(e)} 
        /> 
        {errors.height && (<p>{errors.height}</p>)}<br/>


        <input 
          type="text" 
          value={input.image} 
          name='image' 
          placeholder="Imagen. (*)" 
          onChange={(e)=>handleChange(e)} 
        />
        {errors.image && (<p>{errors.image}</p>)} 
      </div> 
      <button  type='submit'>Crear</button>
      <Link to= "/"><button>Volver</button></Link>
    </form>

  )
}