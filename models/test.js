const Sequelize = require('sequelize');

module.exports = ((sequelize,DataTypes)=>{
    const nch= sequelize.define('jwpark.nch',{
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey:true
        },
        latitude:{
            type: Sequelize.INTEGER,
            allowNull: true,
            
        },
        longitude:{
            type: Sequelize.INTEGER,
            allowNull: true,
            
        },
        loc_flag:{
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        use_flag:{
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        data_time:{
            type:Sequelize.DATE,
            allowNull: true,
        },
        reg_date:{
            type:Sequelize.DATE,
            allowNull: true,
        },
        location:{
            type:Sequelize.STRING(100),
            allowNull: true,
        },
        address:{
            type:Sequelize.STRING(200),
            allowNull: true,
        },
        time:{
            type:Sequelize.STRING(40),
            allowNull: true,
        },
        pm1:{
            type:Sequelize.STRING(40),
            allowNull: true,
        },
        pm25:{
            type:Sequelize.STRING(40),
            allowNull: true,
        },
        pm10:{
            type:Sequelize.STRING(40),
            allowNull: true,
        },
        o3:{
            type:Sequelize.STRING(40),
            allowNull: true,
        },
        no2:{
            type:Sequelize.STRING(40),
            allowNull: true,
        },
        co:{
            type:Sequelize.STRING(40),
            allowNull: true,
        },
        co2:{
            type:Sequelize.STRING(40),
            allowNull: true,
        },
        so2:{
            type:Sequelize.STRING(40),
            allowNull: true,
        },
        hcho:{
            type:Sequelize.STRING(40),
            allowNull: true,
        },
        tvoc:{
            type:Sequelize.STRING(40),
            allowNull: true,
        },
        tc:{
            type:Sequelize.STRING(40),
            allowNull: true,
        },
        h:{
            type:Sequelize.STRING(40),
            allowNull: true,
        },
        sid:{
            type:Sequelize.STRING(200),
            allowNull: true,
        },
        sname:{
            type:Sequelize.STRING(40),
            allowNull: true,
        },
        code:{
            type:Sequelize.STRING(40),
            allowNull: true,
        },
        wd:{
            type:Sequelize.STRING(40),
            allowNull: true,
        },
        ws:{
            type:Sequelize.STRING(40),
            allowNull: true,
        },
        monitoring:{
            type:Sequelize.STRING(100),
            allowNull: true,
        }

    },{
        timestamps:false,
        paranoid : true, // 삭제일 (복구용)
        tableName:'nch',
        freezeTableName:true
    });
    
    return nch;
})