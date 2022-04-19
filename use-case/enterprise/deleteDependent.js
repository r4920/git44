const response = require('../../utils/response');

const getDependencyCount = ({
  enterpriseDb,noteDb,departmentsDb
})=> async (filter) =>{
  let enterprise = await enterpriseDb.findAll(filter);
  if (enterprise.length){
    let enterpriseIds = enterprise.map((obj) => obj.id);

    const noteFilter = { '$or': [{ encounterId : { '$in' : enterpriseIds } }] };
    const noteCnt =  await noteDb.count(noteFilter);

    const departmentsFilter = { '$or': [{ enterprises : { '$in' : enterpriseIds } }] };
    const departmentsCnt =  await departmentsDb.count(departmentsFilter);
    let result = {
      note :noteCnt ,
      departments :departmentsCnt ,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  enterprise : 0 }
    });
  }
};

const deleteWithDependency = ({
  enterpriseDb,noteDb,departmentsDb
})=> async (filter) =>{
  let enterprise = await enterpriseDb.findAll(filter);
  if (enterprise.length){
    let enterpriseIds = enterprise.map((obj) => obj.id);

    const noteFilter = { '$or': [{ encounterId : { '$in' : enterpriseIds } }] };
    const noteCnt =  (await noteDb.destroy(noteFilter)).length;

    const departmentsFilter = { '$or': [{ enterprises : { '$in' : enterpriseIds } }] };
    const departmentsCnt =  (await departmentsDb.destroy(departmentsFilter)).length;
    let deleted = (await enterpriseDb.destroy(filter)).length;
    let result = {
      note :noteCnt ,
      departments :departmentsCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  enterprise : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  enterpriseDb,noteDb,departmentsDb
}) => async (filter,updateBody) =>{
  let enterprise = await enterpriseDb.findAll(filter);
  if (enterprise.length){
    let enterpriseIds = enterprise.map((obj) => obj.id);

    const noteFilter = { '$or': [{ encounterId : { '$in' : enterpriseIds } }] };
    const noteCnt =  (await noteDb.update(noteFilter,updateBody)).length;

    const departmentsFilter = { '$or': [{ enterprises : { '$in' : enterpriseIds } }] };
    const departmentsCnt =  (await departmentsDb.update(departmentsFilter,updateBody)).length;
    let updated = (await enterpriseDb.update(filter,updateBody)).length;
    let result = {
      note :noteCnt ,
      departments :departmentsCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  enterprise : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
