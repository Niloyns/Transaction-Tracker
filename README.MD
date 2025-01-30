# 📞 Contact Manager - Node.js, Express, MongoDB, Render & Vercel Deployment

A **simple Collect Money management system** built with **Node.js, Express, MongoDB, and EJS** that allows users to **add, view, delete Ammount**, and dynamically track the total sum. The project is **fully responsive** and **animated**.

---

## 🚀 Features

✅ Add, View, and Delete Ammount  
✅ **Fully Responsive & Animated UI**  
✅ **MongoDB Integration** using Mongoose  
✅ **Hosted on Render (Backend) & (Frontend)**

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** EJS, JavaScript (Fetch API), CSS (Animations)
- **Hosting:** Render (API), Vercel (Frontend)
- **Database:** MongoDB Atlas

---

## 🔧 Installation & Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/your-username/contact-manager.git
cd contact-manager
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in the root directory:

```ini
MONGO_URI=your-mongodb-connection-string
PORT=5000
```

Replace `your-mongodb-connection-string` with your **MongoDB Atlas connection URI**.

### 4️⃣ Run Locally

```sh
node server.js
```

The app will be available at **http://localhost:5000**.

---

## 🌍 Deployment

### 1️⃣ Deploy Backend to Render

1. Go to [Render](https://render.com/).
2. Click **New Web Service** → Select your GitHub repository.
3. Set the **Build Command** to:
   ```sh
   npm install
   ```
4. Set **Start Command** to:
   ```sh
   node api/index.js
   ```
5. Add an **environment variable** `MONGO_URI` with your MongoDB connection string.
6. Click **Deploy**.

✅ Once deployed, your backend API will be available at:

```
https://your-app.onrender.com
```

---

## ⚡ API Endpoints

| Method | Endpoint              | Description       |
| ------ | --------------------- | ----------------- |
| GET    | `/`                   | Home Page         |
| POST   | `/create-contact`     | Add a new contact |
| DELETE | `/delete-contact/:id` | Delete a contact  |

---

## ❌ Troubleshooting

### ❗ MongoDB Connection Timeout (Render)

If you see:

```
MongooseError: Operation `Ammount.find()` buffering timed out
```

✅ **Fix:**

- Ensure **MongoDB Atlas allows external connections** (`0.0.0.0/0` in Network Access).
- Set **`serverSelectionTimeoutMS: 5000`** in `api/index.js`:

  ```js
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  });
  ```

### ❗ Render Fails to Detect Open Ports

If you see:

```
No open HTTP ports detected on 0.0.0.0
```

✅ **Fix:** Modify `api/index.js` to use `process.env.PORT`:

```js
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
```

### ❗ `.env` Not Working on Vercel/Render

✅ **Fix:**

- **Vercel:** Add environment variables in **Vercel Dashboard** → **Settings** → **Environment Variables**.
- **Render:** Add environment variables under **Environment Settings**.

---

## 📜 License

This project is **MIT Licensed**.

---

## 📞 Contact

For any issues or improvements, feel free to **create an issue** or **submit a pull request**.

✅ **Happy Coding! 🚀**
