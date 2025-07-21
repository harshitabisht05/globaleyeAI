# 🛰️ Project 2 Name: GlobalEye AI
- To view in detail about project: [GlobalEye AI](https://docs.google.com/document/d/1UglJyG9V09jie_h0iWUJ_bEBBlll-SbO5UYc5bqDakg/edit?usp=sharing)
- Tech Stack: Next.js + Tailwind CSS
- Goal: Build a sleek, modern frontend for a fictional AI company, **GlobalEye AI**, focusing on visual intelligence, cloud analytics, and smart surveillance solutions.

## 🌐 GlobalEye AI
GlobalEye AI is a cutting-edge platform that provides AI-powered video analytics, predictive intelligence, and scalable cloud-based surveillance. The frontend is built using Next.js and Tailwind CSS, designed to be clean, minimal, and professional.

## 🚀 Features
- 🔍 Real-Time Video Analytics – Process surveillance and visual data in real time.
- 📈 Predictive Intelligence – Forecast incidents and take proactive decisions.
- ☁️ Scalable Cloud AI – Easily deployable across multiple locations.
- 🌍 Case Studies & Testimonials – Showcasing customer success stories.
- 📱 Fully Responsive – Optimized for all screen sizes.
---
## 🧑‍💻 Running the Project

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/globaleye-ai.git
   cd globaleye-ai
    ```
2. **Install dependencies**
    ```bash
    npm install
    ```
3. **Run the development server**
    ```bash
    npm run dev
    ```
4. **Open in browser**
- Navigate to http://localhost:3000
---

# Work Distribution:
| **Member**   | **Pages**                      | **Components**                                                                                                                                      | **Responsibilities**                                                                                                |
| ------------ | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Harshita** | `/` (Home)                     | - `Navbar.jsx`<br> - `HeroSection.jsx`<br> - `FeaturesSection.jsx`<br> - `IndustriesSection.jsx`<br>- `Footer.jsx`<br> - `TeamSection.jsx` | - Build the entire homepage<br> - Create shared layout components<br> - Ensure full responsiveness                  |
| **Ojaswee**  | `/solutions`<br> `/technology` | - `SolutionsSection.jsx`<br> - `TechnologySection.jsx`<br> - `UseCaseCard.jsx`                                                                      | - Design use case and tech pages<br> - Build solution/tech visuals<br> - Add placeholder navigation links           |
| **Paridhi**  | `/about`<br> `/contact`        | - `MissionSection.jsx`<br> - `ContactForm.jsx`  <br> - `Darkmode.jsx`                                                                            | - Create About and Contact pages<br> - Implement basic form (HTML validation)<br> - Ensure page styling consistency<br> - Use `TeamSection.jsx` in About Page|

>You can use the Element/functions use in project 1 if they are similary for faster completion.
## 📁 Folder Structure

```bash
/globaleye-ai
│
├── /app
│ ├── layout.js # Root layout
│ ├── page.jsx # Homepage
│ ├── globals.css # Global styles and font variables
| |
| ├── /about
| |    └──page.jsx
| ├── /contact
| |    └──page.jsx
| ├── /solutions
| |    └──page.jsx
| ├── /technology
| |    └──page.jsx
| └── /components
|     ├── HeroSection.jsx
|     ├── FeaturesSection.jsx
|     ├── IndustriesSection.jsx
|     └── Footer.jsx
|     └── Navbar.jsx
|     └── TechnologySection.jsx
|     └── SolutionsSection  .jsx
|     └── UseCaseCard.jsx
|     └── MissionSection.jsx
|     └── ContactForm.jsx
|     └── TeamSection.jsx

│
├── /public
│ └── logo.png # Images
│
├── tailwind.config.js # Tailwind config
├── README.md # Project documentation
└── package.json # Project metadata
```

---
## ✅ Guidelines
- Write clean, reusable, and accessible code.
- Use the same fonts as mentioned.
- Color Theme will be Black/white and Shades of Blue. 
## Fonts:
We use only **two fonts** across the entire website to maintain design consistency:

### ✅ For Headings:

```jsx
<h1
  className="font-heading text-5xl md:text-6xl mb-6 text-gray-800"
  style={{ fontFamily: 'var(--font-heading)' }}
>
  AI-powered vision solutions for smarter decisions.
</h1>
```
- Font: Intel One Mono
- Variable: --font-heading

### ✅ For Body Text:

```jsx
<p style={{ fontFamily: 'var(--font-body)' }}>
  Real-time video analytics to help you act faster.
</p>
```
- Font: Raleway
- Variable: --font-body

#### Defined in globals.css:

```css
:root {
  --font-heading: 'Intel One Mono', monospace;
  --font-body: 'Raleway', sans-serif;
}
```

## 🙌 Contribution
Each intern will be assigned a specific folder. Submit your progress via Pull Requests to the main branch.

## 📄 License
All rights reserved by Sentienta QualityAI.
This project is part of an internal research initiative. Do not redistribute without permission.

## Next Projects
- UniNow (Completed)
- GlobalEye AI (OnGoing)
- GlobalEye Drones
  (Need to complete all 3 projects by 27/07)



