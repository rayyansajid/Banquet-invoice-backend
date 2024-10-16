const {sequelize} = require('../../config/pgSqlConfig')

sequelize.options.logging = console.log;

async function syncModels() {
    try{
        // console.log("\t\t\n\nI am in Sync models\n\n")
        await sequelize.sync({
            alter:true,
            force: false
        });
        console.log("all models synchronized successfully");
    }catch(err){
        console.error(err);
    }
}

module.exports={
    syncModels
}