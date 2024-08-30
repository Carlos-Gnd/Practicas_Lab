//Creamos un objeto date para obtener la fecha actual
let fechaActual = new Date();

//Obteneos el dia de la semana
let diaSemana = fechaActual.getDay();

//Creamos un arreglo para mapear los números de los dias a los nombres de los dias
let nombreDias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

//Obtenemos el nombre del dia correspondiente al número obtenido
let nombreDia = nombreDias[diaSemana];

console.log(`Hoy es: ${nombreDia}`);
