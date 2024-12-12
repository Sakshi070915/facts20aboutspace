const moonData = {
    "moon_facts": [
      {
        "id": 1,
        "fact": "The Moon is Earth's only natural satellite",
        "category": "general"
      },
      {
        "id": 2,
        "fact": "The Moon is approximately 238,855 miles away from Earth",
        "category": "distance"
      },
      {
        "id": 3,
        "fact": "The Moon's diameter is about 2,159 miles",
        "category": "size"
      },
      {
        "id": 4,
        "fact": "The Moon has no atmosphere",
        "category": "composition"
      },
      {
        "id": 5,
        "fact": "The Moon's gravity is about 1/6th of Earth's gravity",
        "category": "physics"
      },
      {
        "id": 6,
        "fact": "The first human to walk on the Moon was Neil Armstrong in 1969",
        "category": "history"
      },
      {
        "id": 7,
        "fact": "The Moon takes 27.3 days to orbit Earth",
        "category": "motion"
      },
      {
        "id": 8,
        "fact": "The Moon's surface temperature can range from -280°F to 260°F",
        "category": "environment"
      },
      {
        "id": 9,
        "fact": "The Moon is gradually moving away from Earth at about 1.5 inches per year",
        "category": "motion"
      },
      {
        "id": 10,
        "fact": "The Moon is not a perfect sphere but slightly egg-shaped",
        "category": "shape"
      },
      {
        "id": 11,
        "fact": "The Moon has earthquakes called 'moonquakes'",
        "category": "geology"
      },
      {
        "id": 12,
        "fact": "The Moon was likely formed when a Mars-sized object collided with Earth",
        "category": "origin"
      },
      {
        "id": 13,
        "fact": "There are over 500,000 craters on the Moon visible from Earth",
        "category": "surface"
      },
      {
        "id": 14,
        "fact": "The Moon's dark spots are called 'maria' or lunar seas",
        "category": "surface"
      },
      {
        "id": 15,
        "fact": "Only 12 humans have ever walked on the Moon",
        "category": "history"
      },
      {
        "id": 16,
        "fact": "The Moon has traces of water ice in its polar regions",
        "category": "composition"
      },
      {
        "id": 17,
        "fact": "A day on the Moon lasts about 29.5 Earth days",
        "category": "time"
      },
      {
        "id": 18,
        "fact": "The Moon's mass is about 1.2% of Earth's mass",
        "category": "physics"
      },
      {
        "id": 19,
        "fact": "The Moon's core is relatively small, only about 1-2% of its mass",
        "category": "structure"
      },
      {
        "id": 20,
        "fact": "The Moon's presence helps stabilize Earth's axial tilt",
        "category": "influence"
      }
    ]
  }
  

document.addEventListener('DOMContentLoaded', function() {
    const factsContainer = document.getElementById('facts-container');
    const categoryFilter = document.getElementById('category-filter');
    
    // Populate categories
    const categories = [...new Set(moonData.moon_facts.map(fact => fact.category))];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryFilter.appendChild(option);
    });

    // Display facts function
    function displayFacts(filter = 'all') {
        factsContainer.innerHTML = '';
        
        moonData.moon_facts.forEach(fact => {
            if (filter === 'all' || fact.category === filter) {
                const factCard = document.createElement('div');
                factCard.className = 'fact-card';
                factCard.innerHTML = `
                    <span class="category-badge">${fact.category}</span>
                    <p>${fact.fact}</p>
                `;
                factsContainer.appendChild(factCard);
            }
        });
    }

    // Initial display
    displayFacts();

    // Filter change event
    categoryFilter.addEventListener('change', (e) => {
        displayFacts(e.target.value);
    });
});
