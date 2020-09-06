const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('clase4','root','',{
    host: 'localhost',
    dialect: 'mariadb'
})

sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.')
  }).catch(error => {
    console.error('Unable to connect to the database:', error);
  });


//aqui armamos el modelo a armar

class Pelicula extends Sequelize.Model {}
Pelicula.init({
   nombre: Sequelize.STRING,
   director: Sequelize.STRING,
   anio:Sequelize.INTEGER
}, { sequelize, modelName: 'pelicula' });


//aqui instanciamos

Pelicula.sync().then(() =>
    Pelicula.create({
        nombre: "Tiburon",
        director:"Steven Spilberg",
        anio: 1975
    })
)

Pelicula.sync().then(() =>
    Pelicula.create({
        nombre: "ET",
        director:"Steven Spilberg",
        anio: 1985
    })
)

Pelicula.sync().then(() =>
    Pelicula.create({
        nombre: "Lista de schindler",
        director:"Steven Spilberg",
        anio: 1993
    })
)

Pelicula.sync().then(() =>
    Pelicula.create({
        nombre: "Avengers",
        director:"Jhon Favrau",
        anio: 2015
    })
)

Pelicula.destroy({
    where:{
        director:"Jhon Favrau"
    }
})