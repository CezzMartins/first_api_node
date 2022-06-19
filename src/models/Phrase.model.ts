import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../instances/mysql';

interface IPhrase extends Model{
    id: number;
    author: string;
    text: string;

}

export const Phrases = sequelize.define<IPhrase>('Phrases', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    author: {
        type: DataTypes.STRING
    },
    text: {
        type: DataTypes.STRING,
    }
},{
    tableName: 'phrases',
    timestamps: false
}
)