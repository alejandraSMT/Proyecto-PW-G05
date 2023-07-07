import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Rol = sequelize.define(
    "Rol", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        esProfesor: {
            type: DataTypes.BOOLEAN
        },
        esEstudiante: {
            type: DataTypes.BOOLEAN
        }
    }, {
        freezeTableName: true
    }
)