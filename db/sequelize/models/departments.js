const {
  DataTypes, Op 
} = require('sequelize'); 
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const  convertObjectToEnum  = require('../../../utils/convertObjectToEnum');
function makeModel (sequelize){
  const Departments = sequelize.define('departments',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    name:{
      type:DataTypes.STRING,
      unique:true,
      lowercase:false,
      allowNull:false,
      primaryKey:false
    },
    code:{
      type:DataTypes.STRING,
      unique:true,
      lowercase:false,
      allowNull:false,
      primaryKey:false
    },
    enterprises:{ type:DataTypes.INTEGER },
    email:{
      type:DataTypes.STRING,
      unique:true,
      lowercase:false,
      primaryKey:false,
      allowNull:true
    },
    phone:{ type:DataTypes.STRING },
    website:{ type:DataTypes.STRING },
    address:{ type:DataTypes.STRING },
    isActive:{
      type:DataTypes.BOOLEAN,
      defaultValue:true
    },
    createdAt:{
      type:DataTypes.DATE,
      defaultValue:'on create currentTime'
    },
    updatedAt:{
      type:DataTypes.DATE,
      defaultValue:'on update currentTime'
    },
    addedBy:{ type:DataTypes.INTEGER },
    updatedBy:{ type:DataTypes.INTEGER },
    isDeleted:{
      type:DataTypes.BOOLEAN,
      defaultValue:false
    }
  }
  ,{
    hooks:{
      beforeCreate: [
        async function (departments,options){
          departments.isActive = true;
          departments.isDeleted = false;

        },
      ],
      beforeBulkCreate: [
        async function (departments,options){
          if (departments !== undefined && departments.length) { 
            for (let index = 0; index < departments.length; index++) { 
        
              const element = departments[index]; 
              element.isActive = true; 
              element.isDeleted = false; 
  
            } 
          }
        },
      ],
    } 
  }
  );
  Departments.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
    
    return values;
  };
  sequelizeTransforms(Departments);
  sequelizePaginate.paginate(Departments);
  return Departments;
}
module.exports = makeModel;