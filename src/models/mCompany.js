import * as DataTypes from 'sequelize';
import models from './models';

const mCompany = models.define(
    'company',
    {
        id: { type: DataTypes.INTEGER, allowNull: false, comment: '회사 ID', primaryKey: true },
    },
    {
        timestamps: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        tableName: 'company',
  }
)

export default mCompany;