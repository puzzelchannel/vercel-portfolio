function switchLang(lang) {
    const link = document.getElementById("theme-style");

    if (lang === "fa") {
        link.href = "/assets/css/style-fa.css";
        document.documentElement.lang = "fa";
    } else {
        link.href = "/assets/css/style-en.css";
        document.documentElement.lang = "en";
    }

    localStorage.setItem("lang", lang);
}

const savedLang = localStorage.getItem("lang") || "en";
switchLang(savedLang);

window.switchLang = switchLang;

// import en from "./locales/en.json";
// import fa from "./locales/fa.json";

// const langs = { en, fa };

// function translatePage(lang) {
//   document.documentElement.lang = lang;
//   document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";

//   const dict = langs[lang];
//   document.querySelectorAll("[data-i18n]").forEach(el => {
//     const key = el.getAttribute("data-i18n");
//     if (dict[key]) el.innerText = dict[key];
//   });

//   document.getElementById("theme-style").href =
//     lang === "fa" ? "/assets/css/style-fa.css" : "/assets/css/style-en.css";

//   localStorage.setItem("lang", lang);
// }

// window.switchLang = translatePage;
// translatePage(localStorage.getItem("lang") || "en");
