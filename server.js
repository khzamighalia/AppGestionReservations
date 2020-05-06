const express = require('express');
const app = express();
var bodyParser=require('body-parser');
var routeReservation=require('./Routes/Reservation')
var routeAjouterReservation=require('./Routes/AjouterReservation')
var routeSupprimerReservation=require('./Routes/SupprimerReservation')
var routeModifierReservation=require('./Routes/ModifierReservation')
// Setting up the public directory
// Configuration

app.use(bodyParser.urlencoded({    //obligatoire 
    extended: true
 }));                 
 
app.use(bodyParser.json());

app.use(express.static('public'))

// API'S

app.use(routeReservation);
app.use(routeAjouterReservation);
app.use(routeSupprimerReservation);
app.use(routeModifierReservation);
app.listen(3000, () => {console.log("listening on port 3000");
});