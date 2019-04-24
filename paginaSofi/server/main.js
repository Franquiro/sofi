import { Meteor } from 'meteor/meteor';
  GRAFICOS = new Mongo.Collection("datosGraficos");
Meteor.startup(() => {
  if(GRAFICOS.find().count()==0){
    GRAFICOS.insert({
      proyecto:"Donde está tu vaca",
      completado:10,
      enProceso:20,
      pendiente:70,
      creacion:new Date(),
      finalizacion: new Date(2019,10,21)
    });
    console.log(`Start up script says: ${GRAFICOS.find().count()} proyectos agregados`);
  }
  // code to run on server at startup
});
