// JavaScript to update the trip info and total cost based on the selected destination
const destinationSelect = document.getElementById('destination');
const tripInfo = document.getElementById('trip-info');
const numTravelersInput = document.getElementById('num-travelers');
const totalCostInput = document.getElementById('total-cost');
const trips = {
  canada: [
    { name: 'Rocky Mountains Adventure', cost: 1800 },
    { name: 'Urban Exploration Tour', cost: 1500 },
    { name: 'Niagara Falls & Quebec Experience', cost: 1200 },
  ],
  dubai: [
    { name: 'Desert Adventure & City Life', cost: 1250 },
    { name: 'Luxury & Leisure Getaway', cost: 2100 },
    { name: 'Cultural Discovery Tour', cost: 980 },
  ],
  europe: [
    { name: 'European Grand Tour', cost: 2500 },
    { name: 'Paris & Rome Explorer', cost: 2200 },
    { name: 'Scenic Alpine Adventures', cost: 1800 },
  ],
  russia: [
    { name: 'Moscow & St. Petersburg Experience', cost: 2000 },
    { name: 'Trans-Siberian Railway Journey', cost: 3000 },
    { name: 'Russian Cultural Immersion', cost: 1600 },
  ],
};

destinationSelect.addEventListener('change', function () {
  const selectedDestination = destinationSelect.value;
  let tripOptions = '';
  x;
  let defaultCost = 0;

  // Generate trip options and set the default cost
  trips[selectedDestination].forEach((trip, index) => {
    tripOptions += `
              <div class="mb-4">
                  <input type="radio" id="trip-${index}" name="trip" value="${trip.name}" class="mr-2" required>
                  <label for="trip-${index}" class="text-lg">${trip.name} - $${trip.cost}</label>
              </div>
          `;
    if (index === 0) defaultCost = trip.cost; // Default to first trip's cost
  });

  // Display trip options and default cost
  tripInfo.innerHTML = `
          <h3 class="text-xl font-bold mb-4">Available Trips</h3>
          ${tripOptions}
      `;
  totalCostInput.value = `$${defaultCost}`;
});

// Event listener to update the total cost based on the selected trip and number of travelers
document.getElementById('bookingForm').addEventListener('change', function () {
  const selectedTrip = document.querySelector('input[name="trip"]:checked');
  if (selectedTrip) {
    const selectedTripCost = trips[destinationSelect.value].find(
      (trip) => trip.name === selectedTrip.value,
    );
    const numTravelers = parseInt(numTravelersInput.value, 10);

    // Calculate total cost
    const totalCost = numTravelers * selectedTripCost.cost;
    totalCostInput.value = `$${totalCost}`;
  }
});

// Initialize the form with default data for Canada
window.onload = () => {
  destinationSelect.value = 'canada'; // Default to Canada
  destinationSelect.dispatchEvent(new Event('change')); // Trigger change to load Canada trip options
  numTravelersInput.dispatchEvent(new Event('input')); // Initialize number of travelers
};
