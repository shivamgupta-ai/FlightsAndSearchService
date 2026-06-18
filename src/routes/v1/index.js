const express = require('express');
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');

const router = express.Router();

router.post('/cities', CityController.create);
router.delete('/cities/:id', CityController.destroy);
router.get('/cities/:id', CityController.get);
router.get('/cities', CityController.getAll);
router.patch('/cities/:id', CityController.update);

router.post('/flights', FlightController.create);
router.get('/flights', FlightController.getAll);

router.post('/airports', AirportController.create);
router.delete('/airports/:id', AirportController.destroy);
router.get('/airports/:id', AirportController.get);
router.get('/airports', AirportController.getAll);
router.patch('/airports/:id', AirportController.update);

module.exports = router;