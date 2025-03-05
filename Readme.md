# Video streaming platform
A video streaming platform built using **Express**, **Node.js**, **MongoDB**, and **Cloudinary**.

## Tech stack
- Backend Framework: **Express.js**
- Runtime Environment: **Node.js**
- Database: **MongoDB** (NoSQL)
- Cloud Storage: **Cloudinary** (for media uploads)

# To setup development environment
Clone the Repository
```
git clone https://github.com/SehrishHussain/backend-project.git
cd your-repo
```
## Install dependencies
`npm install`

## Set Up Environment Variables
```
PORT=8000
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Start Development Server
`npm run dev`

The backend server will be running at:

 http://localhost:8000

 ## Project Structure
 ```
 /src
│── /controllers         # Business logic (User, Video, etc.)
│── /models              # Mongoose models
│── /routes              # API endpoints
│── /middlewares         # Middleware functions (Auth, Multer, etc.)
│── /utils               # Utility functions (Cloudinary, Helpers, etc.)
│── server.js            # Main server entry point
│── .env                 # Environment variables (ignored in Git)
│── package.json         # Project dependencies

 
```

## File Upload Handling (Cloudinary + Multer)
- Multer temporarily stores uploaded files in `./public/temp.`
- Files are then uploaded to **Cloudinary** using the `uploadOnCloudinary()` function.
- Once uploaded, the local file is **deleted** to save space.

## API Endpoints

| Method | Route          | Description          |
|--------|--------------|----------------------|
| POST   | `/api/register` | Register a new user |
| POST   | `/api/login`   | User login          |
| GET    | `/api/videos`  | Fetch all videos    |
| POST   | `/api/upload`  | Upload a video file |


## Contributing

Feel free to submit a pull request if you’d like to contribute! 🚀  

### Steps to Contribute:  

1. **Fork** the repository  
2. **Create** a new branch:  
   ```bash
   git checkout -b feature-branch
   
## 🚧 Work in Progress  

This project is still under development, and new features are being added continuously. Stay tuned for updates!  

If you have any suggestions or feedback, feel free to open an issue or contribute. 🚀  
