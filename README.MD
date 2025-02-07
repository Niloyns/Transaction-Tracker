# 💰 Transaction Tracker

A **simple and interactive finance tracking application** built with **Node.js, Express, MongoDB, and EJS** that allows users to **add, view, and delete transactions** in real-time with a **dynamic total balance updates**.

---

## 🚀 Features

✅ **Add Income and Expenses** with real-time updates ✅ **Categorized Styling** (Green for Income, Red for Expenses) ✅ **Total Balance Calculation Without Page Refresh** ✅ **Database Integration** using MongoDB ✅ **Fully Responsive and Animated UI** ✅ **REST API for Transactions**

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** EJS, JavaScript, CSS
- **Hosting:** Render (Backend), Vercel (Frontend)
- **Database:** MongoDB Atlas

---

## 🔧 Installation & Setup

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/your-username/transaction-tracker.git
cd transaction-tracker
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Configure Environment Variables**

Create a `.env` file in the root directory and add your MongoDB URI:

```sh
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### **4️⃣ Run the Server**

```sh
npm start
```

Or if you want live reload:

```sh
npm run dev
```

The application will be available at: [http://localhost:5000](http://localhost:5000)

---

## 📂 Project Structure

```
/transaction-tracker
│── /public
│   │── /css
│   │   ├── style.css
│   │── /js
│   │   ├── script.js
│── /views
│   │── index.ejs
│── /models
│   │── transaction.js
│   │── total.js
│── /routes
│   │── transactions.js
│── /config
│   │── mongoose.js
│── .env
│── server.js
│── package.json
│── README.md
```

---

## 📌 API Endpoints

### **Get All Transactions**

```http
GET /
```

### **Add a Transaction**

```http
POST /add-transaction
```

#### **Body Parameters:**

```json
{
  "name": "Salary",
  "amount": 1000,
  "type": "income"
}
```

### **Delete a Transaction**

```http
DELETE /delete-transaction/:id
```

---

## 📜 License

This project is open-source and available under the MIT License.

---

## 📝 Author

👤 **Your Name**\
📧 Contact: [niloysarkar1998@gmail.com](niloysarkar1998@gmail.com)\
🔗 GitHub: [Your GitHub](https://github.com/niloyns)
