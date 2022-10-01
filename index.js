function imprimirAlerta(mensaje) {
  //Crear el div
  const divMensaje = document.createElement("div");
  divMensaje.classList.add("text-center", "alert");


  //Mensaje de error o exito
  divMensaje.textContent = mensaje;

  //Insertar en el HTML
  document.querySelector(".info").insertBefore(divMensaje, formulario);

  //Quitar del HTML
  setTimeout(() => {
    divMensaje.remove();
  }, 3000);
}




function result(){
 let students ={
   14852051:{
    fullName: "Carla Martins",
    math:"95",
    physics:"90",
    literature:"85"
   },

   13700001:{
    fullName: "Jose Perez",
    math:"95",
    physics:"60",
    literature:"100"
   },

   20987654:{
    fullName: "Juan Smith",
    math:"70",
    physics:"75",
    literature:"85"
   },

   17000000:{
    fullName: "Nicolas Pereira",
    math:"80",
    physics:"80",
    literature:"100"
   },
 }

 let studentId = document.getElementById('student_id').value;

let definition = students[studentId]

output=""
if(definition===undefined){
  output=`<p class="message">There is no information about this student</p>`
  document.querySelector(".info").innerHTML = output;
  setTimeout(() => {
    document.querySelector(".info").innerHTML =" "
  }, 3000);
} else{
  output=`
    <div class="data">
     <li>
      <p>Full Name: ${definition.fullName}</p></i>
    </li>
     <li>
      <p> Math: ${definition.math}</p></i>     
    </li>
    <li>
      <p> Physics: ${definition.physics}</p></i>     
    </li>
    <li>
      <p>Literature: ${definition.literature}</p></i>   
    </li>
    </div>`
  document.querySelector(".info").innerHTML = output;  
}

}