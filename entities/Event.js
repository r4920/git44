module.exports = (Event) => {

  let newEvent = { 
    id: Event.id,
    name: Event.name,
    description: Event.description,
    address_line1: Event.address_line1,
    address_line2: Event.address_line2,
    address_city: Event.address_city,
    address_country: Event.address_country,
    address_state: Event.address_state,
    address_pincode: Event.address_pincode,
    address_lat: Event.address_lat,
    address_lng: Event.address_lng,
    startDateTime: Event.startDateTime,
    endDateTime: Event.endDateTime,
    speakers_name: Event.speakers_name,
    speakers_image: Event.speakers_image,
    speakers_email: Event.speakers_email,
    organizer_name: Event.organizer_name,
    organizer_image: Event.organizer_image,
    organizer_email: Event.organizer_email,
    organizer_url: Event.organizer_url,
    image: Event.image,
    attachments: Event.attachments,
    isActive: Event.isActive,
    createdAt: Event.createdAt,
    updatedAt: Event.updatedAt,
    updatedBy: Event.updatedBy,
    addedBy: Event.addedBy,
    isDeleted: Event.isDeleted,
  };

  // remove undefined values
  if (newEvent.id){
    Object.keys(newEvent).forEach(key =>{
      if (newEvent[key] === undefined) return newEvent[key] = null;
    });
  } else {
    Object.keys(newEvent).forEach(key => newEvent[key] === undefined && delete newEvent[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newEvent) => {
   *   if (!newEvent.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newEvent) 
   */
  return Object.freeze(newEvent);
};
