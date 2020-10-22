const Sequelize = require('sequelize');

module.exports =((sequelize,DataTypes)=>{
    const domain = sequelize.define('jwpark.domain_master',{
        domain_cd:{
            type:Sequelize.STRING(12),
            allowNull: true,
            unique: true,
            primaryKey:true
        },
        domain_module:{
            type:Sequelize.STRING(100),
            allowNull: false,
        },
        domain_main_cate:{
            type:Sequelize.STRING(60),
            allowNull: true,
        },
        domain_name:{
            type:Sequelize.STRING(60),
            allowNull: false,
        },
        domain_data_type:{
            type:Sequelize.STRING(20),
            allowNull: false,
        },
        domain_data_length:{
            type:Sequelize.INTEGER,
            allowNull: false,
        },
        admin_flag:{
            type:Sequelize.STRING(2),
            allowNull: false,
        },
        del_flag:{
            type:Sequelize.STRING(2),
            allowNull: false,
        }
    },{
        timestamps:false,
        paranoid:true,
        tableName:'domain_master',
        freezeTableName:true
       
    });
       
    return domain;
})