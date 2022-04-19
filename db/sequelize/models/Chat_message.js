const {
  DataTypes, Op 
} = require('sequelize'); 
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const  convertObjectToEnum  = require('../../../utils/convertObjectToEnum');
function makeModel (sequelize){
  const Chat_message = sequelize.define('Chat_message',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    message:{
      type:DataTypes.STRING,
      allowNull:false
    },
    sender:{
      type:DataTypes.STRING,
      allowNull:false
    },
    recipient:{
      type:DataTypes.STRING,
      allowNull:false
    },
    groupId:{ type:DataTypes.INTEGER },
    isActive:{ type:DataTypes.BOOLEAN },
    createdAt:{ type:DataTypes.DATE },
    updatedAt:{ type:DataTypes.DATE },
    updatedBy:{ type:DataTypes.INTEGER },
    addedBy:{ type:DataTypes.INTEGER },
    isDeleted:{ type:DataTypes.BOOLEAN }
  }
  ,{
    hooks:{
      beforeCreate: [
        async function (Chat_message,options){
          Chat_message.isActive = true;
          Chat_message.isDeleted = false;

        },
      ],
      beforeBulkCreate: [
        async function (Chat_message,options){
          if (Chat_message !== undefined && Chat_message.length) { 
            for (let index = 0; index < Chat_message.length; index++) { 
        
              const element = Chat_message[index]; 
              element.isActive = true; 
              element.isDeleted = false; 
  
            } 
          }
        },
      ],
    } 
  }
  );
  Chat_message.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
    
    return values;
  };
  sequelizeTransforms(Chat_message);
  sequelizePaginate.paginate(Chat_message);
  return Chat_message;
}
module.exports = makeModel;