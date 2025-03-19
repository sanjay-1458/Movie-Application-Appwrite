# Overview
This is a movie application where user can find the latest movies. 
The API for fetching movie is refernced from "themoviedb"
### Fetch API
```
const url = 'https://api.themoviedb.org/3
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer <token>'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
```
## Trending Feature
This feature is implemented using appwrite, the logic is based on how frequently a movie is searched by users.

## Website
![Screenshot 2025-03-19 224859](https://github.com/user-attachments/assets/97ce7d79-fd75-4d1f-8d60-084350b0a67f)

## Deployed link
https://movie-application-appwrite-gwv01yvro-sanjay-1458s-projects.vercel.app/

## Environment Variables
The key for the movie api and key for appwrite are stored in .env file
```
VITE_TMDB_API_KEY=123
VITE_APPWRITE_PROJECT_ID=123
VITE_APPWRITE_DATABASE_ID=123
VITE_APPWRITE_COLLECTION_ID=123
```
## Using
Clone the repo
```
git clone https://github.com/sanjay-1458/Movie-Application-Appwrite.git
```
Move inside the repo
```
cd repository
```
Install all dependencies
```
npm install
```
Run project using
```
npm run dev
```
