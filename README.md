<div align="center">
    <img src="https://iili.io/3QBgaKx.png"
    style="width:200px;
    height:200px"> </img>
</div>

# KITI-KARD Dashboard

A personal dashboard for clients to manage their NFC business cards and profile. Built with **Next.js**, **TailwindCSS**, and **ShadCN UI**, this dashboard offers a smooth and intuitive experience to view, edit, and manage personalized digital cards.

## 🚀 Tech Stack

- **Next.js** – Framework for building performant and scalable React apps  
- **TailwindCSS** – Utility-first CSS for responsive and maintainable UI  
- **ShadCN UI** – Accessible component library built on top of Radix  
- **React Context API** – Global state management  
- **NextAuth.js** – Secure client authentication    

## ✨ Features

- 👤 Client profile management (edit name, email, etc.)  
- 🪪 NFC card management (preview, update, customize)  
- 🖼️ Profile picture and card image upload  
- 🧩 Modular, reusable components  
- 🌓 Dark mode with full theme support  
- 🔐 Protected routes with session auth  
- 📱 Fully responsive design  

## 📂 Project Structure

.
├── app/ # App routing and pages  
├── components/ # UI components  
│ └── ui/ # ShadCN components  
├── context/ # Global state (auth, theme, etc.)  
├── lib/ # Utilities and helpers  
├── public/ # Static assets  
└── README.md

## 🧠 How It Works

- After authentication, users access a secure dashboard  
- Users can view and update their personal profile and NFC card  
- Data is fetched and saved via API routes
- All updates are validated and persisted securely  

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/TsioryJonathan/KITI-KARD--DASHBOARD.git
cd KITI-KARD--DASHBOARD
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

---

> Built with ❤️ using Next.js, TailwindCSS, and ShadCN UI.
