import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../instances/mysql';

interface IPhrase extends Model{
    id: number;
    author: string;
    text: string;

}

export const Phrase = sequelize.define<IPhrase>('Phrase', {
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
    tableName: 'phrase',
    timestamps: false
}
)