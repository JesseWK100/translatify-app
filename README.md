# Translatify | Language Translator

## 📌 Project Overview
Translatify is a web-based language translator application that allows users to translate text between multiple languages. It provides a user-friendly interface to input text, select source and target languages, and get instant translations using an external API.

---

## 🎯 Features
- 🔄 **Supports Multiple Languages** – Offers a vast selection of languages for translation.
- 📖 **Instant Translation** – Automatically translates text as you type.
- 🔄 **Language Swap** – Easily swap the source and target languages.
- 📱 **Responsive Design** – Works seamlessly across devices.
- 🚀 **Asynchronous API Requests** – Uses Axios for efficient API calls.
- 🎨 **Stylish UI** – Simple and clean design with smooth user interactions.

---

## 🏗️ Project Structure
```
Translatify/
│── index.html          # Main HTML file
│── style.css           # Stylesheet for UI design
│── script.js           # JavaScript file for functionality
│── README.md           # Project documentation
```

---

## 📥 Installation and Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/JesseWK100/translatify-app.git
cd translatify
```

### 2️⃣ Open the Project in a Browser
Since this is a simple front-end project, you can open `index.html` directly in your browser.

### 3️⃣ API Configuration
The application uses the **RapidAPI Text Translator** API. You need an API key to make translation requests. Follow these steps:
1. Sign up on [RapidAPI](https://rapidapi.com/).
2. Search for "Text Translator API".
3. Subscribe and get your **API Key**.
4. Replace the placeholder API key in `script.js`:
   ```js
   headers: {
      "X-RapidAPI-Key": "3b218d227amshe128b71c1d88294p1c6e23jsnb12495e0180a",
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
   }
   ```

---

## 🖥️ How It Works
### **1️⃣ Select Languages**
- Choose a source language from the dropdown.
- Select a target language for translation.
- You can swap them using the **swap button** (🔄).

### **2️⃣ Enter Text**
- Type your text in the input box.
- The translation will be generated automatically.

### **3️⃣ View Translated Text**
- The translated text appears instantly in the output section.
- If the translation fails, an error message will be displayed.

---

## 🔨 Code Breakdown
### **📌 HTML (`index.html`)**
- Defines the structure of the webpage.
- Includes **dropdowns** for language selection.
- Uses a **textarea** for input and a **div** for output.
- Loads **Axios** for API requests.

### **🎨 CSS (`style.css`)**
- Implements a **clean and responsive UI**.
- Uses **grid and flexbox** for alignment.
- Defines color themes and font styles.

### **🚀 JavaScript (`script.js`)**
- Populates the **language dropdowns** dynamically.
- Uses **debouncing** to optimize API calls.
- Sends translation requests via **Axios**.
- Updates the UI with translated text.

---

## 📷 Screenshots
Home Page  
![Image](https://github.com/user-attachments/assets/a38beaaa-9d73-4923-b44d-75597fce0847)

---

## **video link
http://127.0.0.1:3000/index.html

---

## 🛠️ Technologies Used
- **HTML5** – Structure of the webpage.
- **CSS3** – Styling and responsive design.
- **JavaScript (ES6)** – Logic and API interaction.
- **Axios** – For making HTTP requests.
- **RapidAPI** – For translation services.

---

## ⚡ Future Enhancements
- 🌐 **Voice Input Support** – Allow users to speak instead of typing.
- 📜 **History Feature** – Save previous translations.
- 🎤 **Text-to-Speech** – Read translations aloud.
- 📲 **Mobile App Integration** – Convert it into a mobile app.

---

## 🙌 Contributing
We welcome contributions! Follow these steps:
1. **Fork the repository** 📌
2. **Create a feature branch** (`git checkout -b new-feature`)
3. **Commit your changes** (`git commit -m "Added new feature"`)
4. **Push to GitHub** (`git push origin new-feature`)
5. **Open a pull request** 🛠️

---

## 📞 Contact
For any questions or suggestions, feel free to reach out:
- 📧 Email: `j.walusansa@alustudent.com`

---

🔹 **Enjoy Translating with Translatify!** 🌍✨
