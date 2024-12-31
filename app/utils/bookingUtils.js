export const validateBooking = (formData) => {
  const errors = {};

  if (!formData.date) errors.date = 'Date is required';
  if (!formData.time) errors.time = 'Time is required';
  if (!formData.name) errors.name = 'Name is required';
  if (!formData.email) errors.email = 'Email is required';
  if (!formData.phone) errors.phone = 'Phone is required';

  return errors;
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const getAvailableTimeSlots = async (date) => {
  // Mock API call to get available time slots
  const slots = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'];
  return slots;
};