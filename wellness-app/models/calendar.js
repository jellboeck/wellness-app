console.log('calendar');

// define calendar to keep track of journal entries
// all entries except for event are take from pull down menus
module.exports = function(sequelize, DataTypes){
    var calendar = sequelize.define('calendar', {
        month: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 2],
                    message: 'Month not selected.'
                }
            }
            
        },
        day: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 2],
                    message: 'Day not selected.'
                }
            }
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: {
                    args: [2, 4],
                    message: 'Year not selected.'
                }
            }
        },
        hour: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 2],
                    message: 'Hour not selected.'
                }
            }
        },
        min: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 2],
                    message: 'Minute not selected.'
                }
            }
        },
        ampm: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: {
                    args: [1,2],
                    message: 'AM/PM not selected.'
                }
            }
        },
        event: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 255],
                    message: 'Event must be between 1 and 255 characters in length.'
                }
            }
        }
    },{
        freezeTableName: true
    });
    
    // an event  belongs to a user
    calendar.associate = function(models){
        calendar.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return calendar;
};
