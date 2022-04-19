const EventDb = require('../../../../data-access/EventDb');
const EventSchema = require('../../../../validation/schema/Event');
const createValidation = require('../../../../validation')(EventSchema.createSchema);
const updateValidation = require('../../../../validation')(EventSchema.updateSchema);
const filterValidation = require('../../../../validation')(EventSchema.filterValidationSchema);
const EventController = require('./Event');

// use-cases imports with dependency injection
const addEventUsecase = require('../../../../use-case/Event/addEvent')({
  EventDb,
  createValidation 
});
const findAllEventUsecase = require('../../../../use-case/Event/findAllEvent')({
  EventDb,
  filterValidation
});
const getEventCountUsecase = require('../../../../use-case/Event/getEventCount')({
  EventDb,
  filterValidation
});
const softDeleteManyEventUsecase = require('../../../../use-case/Event/softDeleteManyEvent')({ EventDb });
const bulkInsertEventUsecase = require('../../../../use-case/Event/bulkInsertEvent')({ EventDb });
const bulkUpdateEventUsecase = require('../../../../use-case/Event/bulkUpdateEvent')({ EventDb });
const deleteManyEventUsecase = require('../../../../use-case/Event/deleteManyEvent')({ EventDb });
const softDeleteEventUsecase = require('../../../../use-case/Event/softDeleteEvent')({ EventDb });
const partialUpdateEventUsecase = require('../../../../use-case/Event/partialUpdateEvent')({
  EventDb,
  updateValidation
});
const updateEventUsecase = require('../../../../use-case/Event/updateEvent')({
  EventDb,
  updateValidation 
});
const getEventUsecase = require('../../../../use-case/Event/getEvent')({
  EventDb,
  filterValidation
});
const deleteEventUsecase = require('../../../../use-case/Event/deleteEvent')({ EventDb });

// controller methods mapping
const addEvent = EventController.addEvent(addEventUsecase);
const findAllEvent = EventController.findAllEvent(findAllEventUsecase);
const getEventCount = EventController.getEventCount(getEventCountUsecase);
const softDeleteManyEvent = EventController.softDeleteManyEvent(softDeleteManyEventUsecase);
const bulkInsertEvent = EventController.bulkInsertEvent(bulkInsertEventUsecase);
const bulkUpdateEvent = EventController.bulkUpdateEvent(bulkUpdateEventUsecase);
const deleteManyEvent = EventController.deleteManyEvent(deleteManyEventUsecase);
const softDeleteEvent = EventController.softDeleteEvent(softDeleteEventUsecase);
const partialUpdateEvent = EventController.partialUpdateEvent(partialUpdateEventUsecase);
const updateEvent = EventController.updateEvent(updateEventUsecase);
const getEventById = EventController.getEvent(getEventUsecase);
const deleteEvent = EventController.deleteEvent(deleteEventUsecase);

module.exports = {
  addEvent,
  findAllEvent,
  getEventCount,
  softDeleteManyEvent,
  bulkInsertEvent,
  bulkUpdateEvent,
  deleteManyEvent,
  softDeleteEvent,
  partialUpdateEvent,
  updateEvent,
  getEventById,
  deleteEvent,
};