export const fetchTestimonials = async () => {
  // Mock testimonial data
  return [
    {
      id: 1,
      name: 'John Smith',
      company: 'Tech Innovators',
      text: 'Heart Lab AI transformed our customer service with their voice technology.',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'Digital Solutions',
      text: 'The automation capabilities have significantly improved our efficiency.',
      rating: 5
    },
    {
      id: 3,
      name: 'Michael Brown',
      company: 'Global Systems',
      text: 'Excellent support and cutting-edge AI solutions.',
      rating: 4
    }
  ];
};

export const submitTestimonial = async (testimonial) => {
  // Mock submission
  console.log('Testimonial submitted:', testimonial);
  return { success: true };
};