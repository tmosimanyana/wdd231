// data for featured businesses on the home page
const featuredBusinesses = [
    {
        "name": "BAMB Headquarters",
        "description": "The leading supplier of agricultural products and services in Kweneng.",
        "image": "images/bamb.webp"
    },
    {
        "name": "AgriFeed GICP",
        "description": "Supplying high-quality animal feed for farmers.",
        "image": "images/agrifeed.webp"
    },
    {
        "name": "Greenhouse Technologies",
        "description": "Innovative greenhouse solutions for modern farmers.",
        "image": "images/greenhouse.webp"
    },
    {
        "name": "AFGRI Equipment",
        "description": "Your reliable partner for agricultural equipment.",
        "image": "images/afgri.webp"
    }
];

// Function to create the featured businesses section
function createFeaturedBusinesses() {
    const featuredSection = document.getElementById('featured-businesses');
    featuredSection.innerHTML = ''; // Clear the section

    featuredBusinesses.forEach(business => {
        // Create a container div for the featured business
        const businessCard = document.createElement('div');
        businessCard.className = 'business-card';

        // Create the image element with lazy loading
        const businessImage = document.createElement('img');
        businessImage.src = business.image;
        businessImage.alt = business.name;
        businessImage.loading = 'lazy';  // Lazy load the image

        // Create a heading for the business name
        const businessName = document.createElement('h3');
        businessName.textContent = business.name;

        // Create a paragraph for the business description
        const businessDescription = document.createElement('p');
        businessDescription.textContent = business.description;

        // Append the image, name, and description to the business card
        businessCard.appendChild(businessImage);
        businessCard.appendChild(businessName);
        businessCard.appendChild(businessDescription);

        // Append the business card to the featured businesses section
        featuredSection.appendChild(businessCard);
    });
}

// Call the function to populate the featured businesses when the page loads
window.onload = createFeaturedBusinesses;
