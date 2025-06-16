// Select elements
const form = document.getElementById('guest-form');
const input = document.getElementById('guest-name');
const guestList = document.getElementById('guests-list');

// Listen for form submission
form.addEventListener('submit', function(event) {

  const guestName = input.value.trim();
  if (guestName === '') return; 

  // Create new list item
  const li = document.createElement('li');
  li.textContent = guestName;

  // Add to guest list

  // Clear input
});