const response = require('../../utils/response');

const getDependencyCount = ({
  Chat_groupDb,Chat_messageDb
})=> async (filter) =>{
  let Chat_group = await Chat_groupDb.findAll(filter);
  if (Chat_group.length){
    let Chat_groupIds = Chat_group.map((obj) => obj.id);

    const Chat_messageFilter = { '$or': [{ groupId : { '$in' : Chat_groupIds } }] };
    const Chat_messageCnt =  await Chat_messageDb.count(Chat_messageFilter);
    let result = { Chat_message :Chat_messageCnt , };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  Chat_group : 0 }
    });
  }
};

const deleteWithDependency = ({
  Chat_groupDb,Chat_messageDb
})=> async (filter) =>{
  let Chat_group = await Chat_groupDb.findAll(filter);
  if (Chat_group.length){
    let Chat_groupIds = Chat_group.map((obj) => obj.id);

    const Chat_messageFilter = { '$or': [{ groupId : { '$in' : Chat_groupIds } }] };
    const Chat_messageCnt =  (await Chat_messageDb.destroy(Chat_messageFilter)).length;
    let deleted = (await Chat_groupDb.destroy(filter)).length;
    let result = { Chat_message :Chat_messageCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  Chat_group : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  Chat_groupDb,Chat_messageDb
}) => async (filter,updateBody) =>{
  let Chat_group = await Chat_groupDb.findAll(filter);
  if (Chat_group.length){
    let Chat_groupIds = Chat_group.map((obj) => obj.id);

    const Chat_messageFilter = { '$or': [{ groupId : { '$in' : Chat_groupIds } }] };
    const Chat_messageCnt =  (await Chat_messageDb.update(Chat_messageFilter,updateBody)).length;
    let updated = (await Chat_groupDb.update(filter,updateBody)).length;
    let result = { Chat_message :Chat_messageCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  Chat_group : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
