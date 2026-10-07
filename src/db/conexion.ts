import { DataSource } from "typeorm";
import { Estudiante } from "../models/estudianteModel";
import { Profesor } from "../models/profesoresModel";
import { Curso } from "../models/cursoModel";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "mi-base-datos-mi-base-datos.i.aivencloud.com",
    port: 11605,
    username: "avnadmin",
    //password:"AVNS_EyoyNNHT3A4TnM8ZcuF",
    database: "defaultdb",
    synchronize: false,
    logging: true,
    entities: [Estudiante, Profesor, Curso],
});