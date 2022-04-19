const { Op } = require('sequelize');

/**
 * checkUniqueFieldsInDatabase: check unique fields in database for insert or update operation.
 * @param {Array} fieldsToCheck : array of fields to check in database.
 * @param {Object} data : data to insert or update.
 * @param {String} operation : operation identification.
 * @param {Object} filter : filter for query.
 * @return {Object} : information about duplicate fields.
 */
const checkUniqueFieldsInDatabase = (db) => async (fieldsToCheck, data, operation, filter = {}) => {
  switch (operation) {
  case 'INSERT':
    for (const field of fieldsToCheck) {
      // Add unique field and it's value in filter.
      const query = {
        ...filter,
        [field]: data[field],
      };
      const found = await db.findOne(query);
      if (found) {
        return {
          isDuplicate: true,
          field,
          value: data[field],
        };
      }
    }
    break;
  case 'BULK_INSERT':
    for (const dataToCheck of data) {
      for (const field of fieldsToCheck) {
        // Add unique field and it's value in filter.
        const query = {
          ...filter,
          [field]: dataToCheck[field],
        };
        const found = await db.findOne(query);
        if (found) {
          return {
            isDuplicate: true,
            field,
            value: dataToCheck[field],
          };
        }
      }
    }
    break;
  case 'UPDATE':
  case 'BULK_UPDATE':
    const existData = await db.findAll(filter, { select: ['id'] });
    for (const field of fieldsToCheck) {
      if (Object.keys(data).includes(field)) {
        if (existData && existData.length > 1) {
          return {
            isDuplicate: true,
            field,
            value: data[field],
          };
        } if (existData && existData.length === 1) {
          const found = await db.findOne({ [field]: data[field] });
          if (found && (existData[0].id !== found.id)) {
            return {
              isDuplicate: true,
              field,
              value: data[field],
            };
          }
        }
      }
    }
    break;
  case 'REGISTER':
    for (const field of fieldsToCheck) {
      //Add unique field and it's value in filter.
      let query = {
        ...filter,
        [field] : data[field] 
      };
      let found = await db.findOne(query);
      if (found) {
        return {
          isDuplicate : true,
          field: field,
          value:  data[field]
        };
      }
    }
    //cross field validation required when login with multiple fields are present, to prevent wrong user logged in. 

    let loginFieldFilter = { [Op.or]:[] };
    if (data && data['username']){
      loginFieldFilter[Op.or].push(
        { 'username':data['username'] },
        { 'email':data['username'] },
      );
      loginFieldFilter.isActive = true;
      loginFieldFilter.isDeleted = false;
      let found = await db.findOne(loginFieldFilter);
      if (found){
        return {
          isDuplicate : true,
          field: 'username and email',
          value:  data['username']
        };
      }
    }
    if (data && data['email']){
      loginFieldFilter[Op.or].push(
        { 'username':data['email'] },
        { 'email':data['email'] },
      );
      loginFieldFilter.isActive = true;
      loginFieldFilter.isDeleted = false;
      let found = await db.findOne(loginFieldFilter);
      if (found){
        return {
          isDuplicate : true,
          field: 'username and email',
          value:  data['email']
        };
      }
    }
    break;
  default:
    return { isDuplicate: false };
    break;
  }
  return { isDuplicate: false };
};

module.exports = checkUniqueFieldsInDatabase;
