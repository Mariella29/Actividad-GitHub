


var perro = {
    nombre: "Max",
    edad: 3,
    raza: "Labrador",
    informacion: function() {
    console.log("Nombre: " + this.nombre);
    console.log("Edad: " + this.edad + " años");
    console.log("Raza: " + this.raza);
    }
};

var gato = {
    nombre: "Miau",
    edad: 2,
    raza: "Siames",
    informacion: function() {
    console.log("Nombre: " + this.nombre);
    console.log("Edad: " + this.edad + " años");
    console.log("Raza: " + this.raza);
    }
};

var loro = {
    nombre: "Pepe",
    edad: 5,
    especie: "Loro gris",
    informacion: function() {
    console.log("Nombre: " + this.nombre);
    console.log("Edad: " + this.edad + " años");
    console.log("Especie: " + this.especie);
    }
};

  // Acceder al método 'informacion' de cada objeto
perro.informacion();
gato.informacion();
loro.informacion();