'use strict';
const co = require('co');
module.exports = {
    up: co.wrap(function*(db, Sequelize) {
        const {
            STRING,
            INTEGER,
            DATE
        } = Sequelize;

        yield db.createTable('Forxies', {
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            from: {
                type: STRING,
                allowNull: true
            },
            status: {
                type: STRING,
                allowNull: true
            },
            latitude: {
                type: STRING,
                allowNull: true
            },
            longitude: {
                type: STRING,
                allowNull: true
            },
            address: {
                type: STRING,
                allowNull: true
            },
            created_at: DATE,
            updated_at: DATE
        });
    }),

    down: co.wrap(function*(db, Sequelize) {
        yield db.dropTable('Forxies');
    }),
};