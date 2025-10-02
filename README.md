🌍 Wanderlust – Airbnb Clone

A full-stack travel listing web application inspired by Airbnb.
Users can create, view, and review listings with interactive maps, secure authentication, and image uploads.

## 🚀 Live Demo  

🔗 [Wanderlust on Render](https://wanderlust-fawl.onrender.com/listings)


✨ Features

🔑 Authentication & Authorization – Secure login & user sessions with Passport.js
🏡 Property Listings – Create, edit, and delete travel listings
🖼️ Image Uploads – Store and serve images using Cloudinary + Multer
🗺️ Interactive Maps – Explore locations with Mapbox integration
💬 Review System – Add, view, and delete reviews & ratings
📱 Responsive UI – Mobile & desktop-friendly (Bootstrap + EJS)

🛠 Tech Stack

Frontend: EJS, Bootstrap, JavaScript
Backend: Node.js, Express.js
Database: MongoDB Atlas + Mongoose
Authentication: Passport.js
Image Hosting: Cloudinary
Maps & Geolocation: Mapbox
Other Tools: Joi, Connect-Flash, Express-Session, Dotenv

⚙️ Installation & Setup (Local)

# Clone the repo

git clone https://github.com/Kaustubh1644/wanderLust.git
cd wanderLust

# Install dependencies

npm install


Create a .env file in the root with:

CLOUD_NAME=your_cloudinary_name  
CLOUD_API_KEY=your_cloudinary_key  
CLOUD_API_SECRET=your_cloudinary_secret  
MAP_TOKEN=your_mapbox_token  
ATLASDB_URL=your_mongodb_url  
SECRET=your_session_secret  


Run the app:

node app.js

📌 Note

✨ Wanderlust is a learning project, built to practice full-stack development skills inspired by Airbnb.
