const Sequelize = require('sequelize');

module.exports =((sequelize,DataTypes)=>{
    const domainDetail = sequelize.define('jwpark.domain_detail',{
        domain_cd:{
            type:Sequelize.STRING(20),
            allowNull: true,
            unique: true,
            primaryKey:true
        },
        
        domain_column_name:{
            type:Sequelize.STRING(160),
            allowNull: false,
        },
        domain_column_desc:{
            type:Sequelize.STRING(1000),
            allowNull: false,
        },
        domain_serve_cd:{
            type:Sequelize.STRING(20),
            allowNull: false,
        },
       
    },{
        timestamps:false,
        paranoid:true,
        tableName:'domain_detail',
        freezeTableName:true
    });
    
    return domainDetail;
})