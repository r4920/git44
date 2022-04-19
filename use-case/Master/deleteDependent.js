const response = require('../../utils/response');

const getDependencyCount = ({ MasterDb })=> async (filter) =>{
  let Master = await MasterDb.findAll(filter);
  if (Master.length){
    let MasterIds = Master.map((obj) => obj.id);

    const MasterFilter = { '$or': [{ parentId : { '$in' : MasterIds } }] };
    const MasterCnt =  await MasterDb.count(MasterFilter);
    let result = { Master :MasterCnt + 1, };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  Master : 0 }
    });
  }
};

const deleteWithDependency = ({ MasterDb })=> async (filter) =>{
  let Master = await MasterDb.findAll(filter);
  if (Master.length){
    let MasterIds = Master.map((obj) => obj.id);

    const MasterFilter = { '$or': [{ parentId : { '$in' : MasterIds } }] };
    const MasterCnt =  (await MasterDb.destroy(MasterFilter)).length;
    let deleted = (await MasterDb.destroy(filter)).length;
    let result = { Master :MasterCnt + deleted, };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  Master : 0 }
    });
  }
};

const softDeleteWithDependency = ({ MasterDb }) => async (filter,updateBody) =>{
  let Master = await MasterDb.findAll(filter);
  if (Master.length){
    let MasterIds = Master.map((obj) => obj.id);

    const MasterFilter = { '$or': [{ parentId : { '$in' : MasterIds } }] };
    const MasterCnt =  (await MasterDb.update(MasterFilter,updateBody)).length;
    let updated = (await MasterDb.update(filter,updateBody)).length;
    let result = { Master :MasterCnt + updated, };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  Master : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
