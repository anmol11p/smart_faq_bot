# 🚀 Smart FAQ Bot – Frontend

![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.13-blue?logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.1.2-pink?logo=vite&logoColor=white)

A **Smart FAQ Chatbot UI** built in **React**, connecting to a backend API that performs **vector search in MongoDB Atlas** to fetch the most relevant FAQ answers. Even without AI polishing, the system provides fast and accurate responses.

---

## ⚙️ Core Workflow

1.  **💬 User Input**

    - Users type questions in the search bar.
    - Managed using React's `useState`.

2.  **🔗 API Call**

    - On form submission, the frontend sends the query to `/search` via **Axios**.
    - Backend performs a **vector search in MongoDB Atlas** and returns top matching FAQs.

3.  **📄 Display Results**

    - Returned FAQs (`question` + `answer`) are shown in a **chat-style interface**.
    - A **loading spinner** is displayed while waiting for the API response.
    - If AI polishing (Gemini/OpenAI) is unavailable due to limits, raw vector search results are shown.

4.  **🎨 UI/UX Features**

    - Fully **responsive** for mobile, tablet, and desktop.
    - Styled with **TailwindCSS**: gradients, shadows, and hover animations.
    - Scrollable FAQ container with **custom minimal scrollbars**.
    - Clear icons for questions and answers for better readability.

5.  **🔮 Future Improvements**
    - Integrate AI answer polishing when API limits allow.
    - Highlight search terms in answers.
    - Add **multi-turn conversation memory**.
    - Implement a feedback loop for better ranking.
    - Deploy as an **embeddable React widget** for live demos.

---

## 🚀 Scripts

```bash
# Run frontend in development mode
npm run dev

# Preview the production build locally
npm run preview

# Build frontend for production
npm run build

# Lint code for errors/warnings
npm run lint
```

🖼️ Demo Preview

```bash
User types question → API returns top vector-matched FAQ → Displayed in chatbot-style UI
```

## 📌 Notes

The frontend is React-based, fully responsive, and visually polished.

Even without AI polishing, the system delivers fast, relevant FAQ answers using MongoDB Atlas vector embeddings.

Powered by Vite, TailwindCSS, React Icons, and Axios.

## ✅ Key Takeaways

React state management for user input and results.

Async API calls with Axios and loading states.

Clean, modern, and responsive UI using TailwindCSS.

Ready for integration with AI polishing and backend improvements.
