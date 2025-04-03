
# 🎬 Movie Application 🎥

🚀 This is a movie application where users can find the latest movies! It fetches real-time movie data using "The Movie Database (TMDb)" API and implements a trending feature with Appwrite.

---

## 🌟 Features

✅ **Real-time Movie Data** – Fetches the latest movies from the TMDb API.  
✅ **Trending Movies** – Dynamically tracks how often a movie is searched.  
✅ **Responsive UI** – Mobile-friendly interface for seamless browsing.  
✅ **Search Functionality** – Allows users to look up movies by title.  
✅ **Secure API Integration** – API keys are securely stored using environment variables.  

---

## 🔗 API Integration (TMDb)

```js
const url = 'https://api.themoviedb.org/3';
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

💡 **How It Works:** This fetches real-time movie data from TMDb using an API key. Ensure you replace `<token>` with your actual TMDb API token.

---

## 📈 Trending Feature Implementation

🔥 **How It Works:** The trending feature is powered by **Appwrite**. It records search frequency for each movie and sorts them accordingly. The more a movie is searched, the higher it ranks!

---

## 🌍 Website Preview

![Screenshot 2025-03-19 224859](https://github.com/user-attachments/assets/97ce7d79-fd75-4d1f-8d60-084350b0a67f)

🔗 **Deployed Link:** [Live Demo](https://movie-application-appwrite-gwv01yvro-sanjay-1458s-projects.vercel.app/) 🚀

---

## 🛠 Environment Variables

🔐 API keys and secrets are stored securely in the `.env` file:

```
VITE_TMDB_API_KEY=your_api_key
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
```

💡 **Why use .env?** Storing API keys in `.env` prevents them from being exposed in public repositories!

---

## 🏗 How to Set Up and Run the Project

### 📥 Clone the repository
```bash
git clone https://github.com/sanjay-1458/Movie-Application-Appwrite.git
```

### 📂 Navigate into the project directory
```bash
cd Movie-Application-Appwrite
```

### 📦 Install dependencies
```bash
npm install
```

### 🚀 Run the project
```bash
npm run dev
```

🌟 **Now, open your browser and enjoy discovering movies in real-time!** 🎬

---

## 🤝 Contributing

💡 Want to improve the project? Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch.
3. Make your improvements.
4. Open a pull request.

🚀 Happy Coding! 🎉

