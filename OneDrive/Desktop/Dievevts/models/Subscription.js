// models/Subscription.js
// Modelo para a entidade Inscrição

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const User = require('./User');
const Event = require('./Event');

const Subscription = sequelize.define('Subscription', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    event_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Event,
            key: 'id'
        }
    },
    subscription_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'subscriptions',
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['user_id', 'event_id']
        }
    ]
});

// Definindo relacionamentos
Subscription.belongsTo(User, { foreignKey: 'user_id' });
Subscription.belongsTo(Event, { foreignKey: 'event_id' });

// Adicionando relacionamentos inversos
User.hasMany(Subscription, { foreignKey: 'user_id' });
Event.hasMany(Subscription, { foreignKey: 'event_id' });

module.exports = Subscription;

