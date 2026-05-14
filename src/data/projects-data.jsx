export const techIconMap = {
  "Ant Design": "devicon:antdesign",
  API: "mdi:api",
  Appwrite: "simple-icons:appwrite",
  bcryptjs: "mdi:shield-key",
  Docker: "devicon:docker",
  Firebase: "devicon:firebase",
  Flutter: "devicon:flutter",
  Git: "devicon:git",
  GitHub: "mdi:github",
  GitLab: "logos:gitlab",
  JavaScript: "devicon:javascript",
  JWT: "simple-icons:jsonwebtokens",
  jsPDF: "mdi:file-pdf-box",
  "Microsoft Translator": "arcticons:microsoft-translator",
  MongoDB: "devicon:mongodb",
  MySQL: "devicon:mysql",
  Netlify: "logos:netlify",
  NextAuth: "simple-icons:nextdotjs",
  "NextAuth.js": "simple-icons:nextdotjs",
  "Next.js": "simple-icons:nextdotjs",
  "Node.js": "devicon:nodejs",
  NLP: "carbon:machine-learning-model",
  "OAuth2": "simple-icons:auth0",
  OCR: "mdi:text-recognition",
  "OCR text extraction": "mdi:text-recognition",
  OpenAI: "simple-icons:openai",
  Postman: "devicon:postman",
  React: "devicon:react",
  "React.js": "devicon:react",
  Sass: "devicon:sass",
  Swagger: "devicon:swagger",
  "Tailwind CSS": "devicon:tailwindcss",
  TypeScript: "devicon:typescript",
  Vercel: "devicon:vercel",
  Vue: "devicon:vuejs",
  "Vue.js": "devicon:vuejs",
};

export const projectsData = [
  {
    id: 1,
    name: "Charity Bridge",
    image: "/charity-preview.png",
    repoLink: "https://github.com/LisaMandarin/Charity-Bridge",
    siteLink: "https://charitybridge.netlify.app/",
    overviewEn:
      "Charity Bridge is a platform built with React.js and Appwrite, enabling users to post, browse, and manage donation items with ease. It features secure OAuth 2.0 login, responsive design, image uploads, and an internal messaging system. Tailwind CSS and Ant Design ensure a clean, user-friendly interface for seamless interactions.",
    overviewCh:
      "Charity Bridge是一個使用ReactJS和Appwrite構建的網路平台，讓使用者能輕鬆發布、瀏覽和管理捐贈物品。該平台提供安全的OAuth 2.0登錄、響應式設計、圖片上傳以及內部傳訊息功能。使用Tailwind CSS和Ant Design來優化平台介面，打造簡潔、友善使用者的介面，確保流暢的互動體驗。",
    techStack: [
      "React",
      "Tailwind CSS",
      "Ant Design",
      "Appwrite",
      "Netlify",
      "OAuth2",
      "API",
      "GitHub"
    ],
  },
  {
    id: 2,
    name: "NoteEnglish",
    image: "/noteenglish-preview.webp",
    repoLink: "https://github.com/LisaMandarin/NoteEnglish",
    siteLink: "https://note-english.vercel.app/",
    overviewEn:
      "NoteEnglish is a bilingual learning tool for English learners. You can paste a passage, get sentence-by-sentence translation, look up selected words, and generate a printable summary sheet.",
    overviewCh:
      "NoteEnglish 句句通是給英語學習者的雙語學習工具。可貼上一段英文，取得逐句翻譯、針對選取單字查詢細節，最後輸出可列印的彙整頁。",
    techStack: [
      "React",
      "Tailwind",
      "Ant Design",
      "Python(FastAPI)",
      "Google AI",
      "Pydamic",
      "NLP",
    ],
  },
  {
    id: 3,
    name: "Handcrafted Haven",
    image: "/handcrafted-preview.webp",
    repoLink: "https://github.com/LisaMandarin/handcrafted-haven",
    siteLink: "https://handcrafted-haven-coral.vercel.app/",
    overviewEn:
      "Handcrafted Haven is a full-stack commercial web application built with Next.js. It allows users to browse products, manage their profiles, and create and manage posts and purchase records. The platform integrates secure authentication, dynamic API routes, and a responsive user interface to deliver a seamless shopping and content-sharing experience.",
    overviewCh:
      "Handcrafted Haven 是一個以 Next.js 打造的全端商業型網頁應用程式。使用者可以瀏覽商品、管理個人資料，並發布與管理貼文及購買紀錄。此平台整合了安全的使用者驗證、動態 API 路由及響應式的使用者介面，提供流暢的購物互動體驗。",
    techStack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Ant Design",
      "NextAuth.js",
      "JWT",
      "Vercel",
      "bcryptjs",
      "API"
    ],
  },
  {
    id: 4,
    name: "PointPal",
    image: "/pointpal3-preview.webp",
    repoLink: "https://github.com/LisaMandarin/PointPal",
    siteLink: "",
    overviewEn:
      "A family/classroom points management system where owners award points and members redeem rewards.",
    overviewCh:
      "一個家庭／班級點數管理系統，讓管理者可以發放點數，成員則可以用點數兌換獎勵。",
    techStack: [
      "NEXT.js",
      "Tailwind CSS",
      "Ant Design",
      "TypeScript",
      "Supabase",
    ],
  },
];

export const projectsDdata = projectsData;
