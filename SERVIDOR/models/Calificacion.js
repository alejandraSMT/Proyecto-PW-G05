import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Calificacion = sequelize.define(
    "Calificacion", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        puntaje: {
            type: DataTypes.FLOAT
        },
        comentario: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true
    }
)