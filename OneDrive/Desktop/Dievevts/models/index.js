// models/index.js
// Arquivo para exportar todos os modelos e suas associações

const User = require('./User');
const Event = require('./Event');
const Subscription = require('./Subscription');

// Definindo associações entre modelos
User.hasMany(Event, { foreignKey: 'organizer_id', as: 'organizedEvents' });
Event.belongsTo(User, { foreignKey: 'organizer_id', as: 'organizer' });

User.belongsToMany(Event, { through: Subscription, foreignKey: 'user_id' });
Event.belongsToMany(User, { through: Subscription, foreignKey: 'event_id' });

module.exports = {
    User,
    Event,
    Subscription
};

