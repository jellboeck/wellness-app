// define calendar to keep track of journal entries
// all entries except for event are take from pull down menus
module.exports = function(sequelize, DataTypes){
    var weight = sequelize.define('weight', {
        userEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 255],
                    message: 'Event must be between 1 and 255 characters in length.'
                }
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        freezeTableName: true
    });
    
    // an event  belongs to a user
    weight.associate = function(models){
        weight.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return weight;
};
