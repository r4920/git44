const {
  DataTypes, Op 
} = require('sequelize'); 
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const  convertObjectToEnum  = require('../../../utils/convertObjectToEnum');
function makeModel (sequelize){
  const ToDo = sequelize.define('ToDo',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    name:{ type:DataTypes.STRING },
    description:{ type:DataTypes.STRING },
    date:{ type:DataTypes.DATE },
    dueDate:{ type:DataTypes.DATE },
    isCompleted:{ type:DataTypes.BOOLEAN },
    isActive:{ type:DataTypes.BOOLEAN },
    createdAt:{ type:DataTypes.DATE },
    updatedAt:{ type:DataTypes.DATE },
    addedBy:{ type:DataTypes.INTEGER },
    updatedBy:{ type:DataTypes.INTEGER },
    isDeleted:{ type:DataTypes.BOOLEAN }
  }
  ,{
    hooks:{
      beforeCreate: [
        async function (ToDo,options){
          ToDo.isActive = true;
          ToDo.isDeleted = false;

        },
      ],
      beforeBulkCreate: [
        async function (ToDo,options){
          if (ToDo !== undefined && ToDo.length) { 
            for (let index = 0; index < ToDo.length; index++) { 
        
              const element = ToDo[index]; 
              element.isActive = true; 
              element.isDeleted = false; 
  
            } 
          }
        },
      ],
    } 
    ,indexes:  [{
      'using':'BTREE',
      'fields':[{
        'attribute':'date',
        'order':'DESC',
        'operator':'',
        'value':''
      }],
      'name':'index_date_index_215286'
    },{
      'using':'BTREE',
      'fields':[{
        'attribute':'dueDate',
        'order':'DESC',
        'operator':'',
        'value':''
      }],
      'name':'index_dueDate_index_165537'
    }]
  }
  );
  ToDo.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
    
    return values;
  };
  sequelizeTransforms(ToDo);
  sequelizePaginate.paginate(ToDo);
  return ToDo;
}
module.exports = makeModel;