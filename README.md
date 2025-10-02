🌍 Wanderlust – Airbnb Clone

Wanderlust is a full-stack web application inspired by Airbnb.
It allows users to sign up, list properties, browse unique stays, add reviews, and explore properties on interactive maps.

This project was built as part of my web development journey with Apna College – Delta Batch.

✨ Features

🔐 Authentication – User registration, login, and session management with Passport.js
🏡 Property Listings – Create, update, and delete property details
📸 Image Uploads – Upload property photos (Cloudinary + Multer)
⭐ Review System – Add and delete reviews on listings
🗺 Interactive Maps – Property locations displayed using Mapbox
⚡ Full CRUD Support – Seamless data management for users, listings, and reviews
📱 Responsive Design – Mobile and desktop friendly UI

🛠 Tech Stack
Frontend: EJS, HTML, CSS, Bootstrap, JavaScript
Backend: Node.js, Express.js
Database: MongoDB (Atlas) + Mongoose
Authentication: Passport.js, Passport-Local
Image Handling: Multer, Cloudinary
Other Tools: Joi (validation), Connect-Flash, Express-Session, Dotenv


⚡ Installation & Setup

1 Clone the repository

git clone https://github.com/Kaustubh1644/wanderLust.git
cd wanderLust

2 Install dependencies

npm install

3 Set up environment variables
Create a .env file in the root directory and add:

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
MAPBOX_TOKEN=your_mapbox_token
DB_URL=your_mongodb_url
SECRET=your_session_secret

4 Run the project

node app.js

✨ Wanderlust is a learning project, built to practice full-stack development skills inspired by Airbnb.
