module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE
    } = app.Sequelize;

    const Forxy = app.model.define('Forxy', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        from: STRING,
        status: STRING,
        latitude: STRING,
        longitude: STRING,
        address: STRING,
        created_at: DATE,
        updated_at: DATE
    });
    return Forxy;
};