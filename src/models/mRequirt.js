import * as DataTypes from 'sequelize';
import models from './models';
import mCompainy from './mCompany';

const ENUM_POSITION = DataTypes.ENUM('BACKEND','FRONTEND','DESIGNER','PLANNER');
const ENUM_SKILL = DataTypes.ENUM('PYTHON','NODE');

const mRequirt = models.define(
    'requirt',
    {
        id: { type: DataTypes.INTEGER, allowNull: false, comment: '지원 ID', primaryKey: true },
        company_id: { type: DataTypes.INTEGER, allowNull: false, comment: '회사 ID', primaryKey: false },
        position: { type: ENUM_POSITION, allowNull: false, comment: '지원포지션', primaryKey: false },
        compensation: {type: DataTypes.INTEGER, allowNull: false, comment: '채용보상금', primaryKey: false},
        content: {type: DataTypes.TEXT, allowNull: false, comment: '채용내용', primaryKey: false},
        skill: { type: ENUM_SKILL, allowNull: false, comment: '사용기술', primaryKey: false }
    },
    {
        timestamps: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        tableName: 'requirt',
  }
)

mRequirt.associate = () => {
  mRequirt.belongsTo(mCompainy, { foreignKey: 'company_id' });
}

export default mRequirt;