const CrudService = require("./crud-service");
const { AirportRepository } = require("../repository/index");


class AirportService extends CrudService {
    constructor(){
        //super (new AirportRepository());
        const airportRepository = new AirportRepository();
        super(airportRepository);
    }
}


module.exports = AirportService;














































// class AirportService {
//     constructor() {
//         this.airportRepository = new AirportRepository();
//     }

//     async createAirport(data) {
//         try {
//             const airport = await this.airportRepository.createAirport(data);  
//             return airport;
//         } catch (error) {
//             console.log("Something went wrong in the service layer");
//             throw { error };
//         }
//     }

//     async deleteAirport(airportId) {
//         try {
//             const response = await this.airportRepository.deleteAirport(airportId);
//             return response;
//         } catch (error) {
//             console.log("Something went wrong in the service layer");
//             throw { error };
//         }
//     }

//     async updateAirport(airportId, data) {
//         try {
//             const airport = await this.airportRepository.updateAirport(airportId, data);
//             return airport;
//         } catch (error) {
//             console.log("Something went wrong in the service layer");
//             throw { error };
//         }
//     }

//     async getAirport(airportId) {
//         try {
//             const airport = await this.airportRepository.getAirport(airportId);
//             return airport;
//         } catch (error) {
//             console.log("Something went wrong in the service layer");
//             throw { error };
//         }
//     }

//     async getAllAirports() {
//         try {
//             const airports = await this.airportRepository.getAllAirports();
//             return airports;
//         } catch (error) {
//             console.log("Something went wrong in the service layer");
//             throw { error };
//         }
//     }
// }
