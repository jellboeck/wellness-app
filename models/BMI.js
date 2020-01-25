// define dataBMI to keep track of BMI entries
module.exports = function(sequelize, DataTypes){
    var dataBMI = sequelize.define('dataBMI', {
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
        storedCalc: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        freezeTableName: true
    });
    
    // an event  belongs to a user
    dataBMI.associate = function(models){
        dataBMI.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return dataBMI;
};