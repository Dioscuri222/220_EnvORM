module.exports=(sequelize,DataTypes)=>{
    const Komik=sequelize.define('Komik',{
        id:{
            type : DataTypes.INTEGER,
            autoincrement:true,
            primaryKey: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull:false,
        },
    })
}