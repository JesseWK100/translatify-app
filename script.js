// Supported languages
const languages = {
  af: "Afrikaans",
  am: "Amharic",
  ar: "Arabic",
  az: "Azerbaijani",
  be: "Belarusian",
  bg: "Bulgarian",
  bn: "Bengali",
  bs: "Bosnian",
  ca: "Catalan",
  ceb: "Cebuano",
  co: "Corsican",
  cs: "Czech",
  cy: "Welsh",
  da: "Danish",
  de: "German",
  el: "Greek",
  en: "English",
  eo: "Esperanto",
  es: "Spanish",
  et: "Estonian",
  eu: "Basque",
  fa: "Persian",
  fi: "Finnish",
  fr: "French",
  fy: "Frisian",
  ga: "Irish",
  gd: "Scots Gaelic",
  gl: "Galician",
  gu: "Gujarati",
  ha: "Hausa",
  haw: "Hawaiian",
  he: "Hebrew",
  hi: "Hindi",
  hmn: "Hmong",
  hr: "Croatian",
  ht: "Haitian Creole",
  hu: "Hungarian",
  hy: "Armenian",
  id: "Indonesian",
  ig: "Igbo",
  is: "Icelandic",
  it: "Italian",
  iw: "Hebrew",
  ja: "Japanese",
  jw: "Javanese",
  ka: "Georgian",
  kk: "Kazakh",
  km: "Khmer",
  kn: "Kannada",
  ko: "Korean",
  ku: "Kurdish (Kurmanji)",
  ky: "Kyrgyz",
  la: "Latin",
  lb: "Luxembourgish",
  lo: "Lao",
  lt: "Lithuanian",
  lv: "Latvian",
  mg: "Malagasy",
  mi: "Maori",
  mk: "Macedonian",
  ml: "Malayalam",
  mn: "Mongolian",
  mr: "Marathi",
  ms: "Malay",
  mt: "Maltese",
  my: "Myanmar (Burmese)",
  ne: "Nepali",
  nl: "Dutch",
  no: "Norwegian",
  ny: "Chichewa",
  or: "Odia (Oriya)",
  pa: "Punjabi",
  pl: "Polish",
  ps: "Pashto",
  pt: "Portuguese",
  ro: "Romanian",
  ru: "Russian",
  rw: "Kinyarwanda",
  sd: "Sindhi",
  si: "Sinhala",
  sk: "Slovak",
  sl: "Slovenian",
  sm: "Samoan",
  sn: "Shona",
  so: "Somali",
  sq: "Albanian",
  sr: "Serbian",
  st: "Sesotho",
  su: "Sundanese",
  sv: "Swedish",
  sw: "Swahili",
  ta: "Tamil",
  te: "Telugu",
  tg: "Tajik",
  th: "Thai",
  tk: "Turkmen",
  tl: "Filipino",
  tr: "Turkish",
  tt: "Tatar",
  ug: "Uyghur",
  uk: "Ukrainian",
  ur: "Urdu",
  uz: "Uzbek",
  vi: "Vietnamese",
  xh: "Xhosa",
  yi: "Yiddish",
  yo: "Yoruba",
  zh: "Chinese (Simplified)",
  zu: "Zulu",
};

// DOM elements
const sourceLanguageSelect = document.getElementById("sourceLanguage");
const targetLanguageSelect = document.getElementById("targetLanguage");
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const swapButton = document.getElementById("swapLanguages");

// Sort languages alphabetically
const languageKeys = Object.keys(languages).sort((a, b) =>
  languages[a].localeCompare(languages[b])
);

// Populate dropdowns
languageKeys.forEach((code) => {
  const option = document.createElement("option");
  option.value = code;
  option.textContent = languages[code];
  sourceLanguageSelect.appendChild(option.cloneNode(true));
  targetLanguageSelect.appendChild(option);
});

// Set defaults
sourceLanguageSelect.value = "en"; // English
targetLanguageSelect.value = "es"; // Spanish

// Debounce function
function debounce(func, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, arguments), delay);
  };
}

// Translate function
async function translate() {
  const sourceLang = sourceLanguageSelect.value;
  const targetLang = targetLanguageSelect.value;
  const text = inputText.value.trim();

  if (text === "") {
    outputText.innerText = "";
    return;
  }

  if (sourceLang === targetLang) {
    outputText.innerText = text;
    return;
  }

  outputText.innerHTML = '<div class="loading">Translating...</div>';

  try {
    const encodedParams = new URLSearchParams();
    encodedParams.set("source_language", sourceLang);
    encodedParams.set("target_language", targetLang);
    encodedParams.set("text", text);

    const options = {
      method: "POST",
      url: "https://text-translator2.p.rapidapi.com/translate",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "3b218d227amshe128b71c1d88294p1c6e23jsnb12495e0180a",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com/translate",
      },
      data: encodedParams,
    };

    const response = await axios.request(options);
    outputText.innerText = response.data.data.translatedText;
  } catch (error) {
    console.error(error);
    outputText.innerText = "Translation failed. Please try again.";
  }
}

// Event listeners
inputText.addEventListener("input", debounce(translate, 500));
sourceLanguageSelect.addEventListener("change", translate);
targetLanguageSelect.addEventListener("change", translate);
swapButton.addEventListener("click", () => {
  const temp = sourceLanguageSelect.value;
  sourceLanguageSelect.value = targetLanguageSelect.value;
  targetLanguageSelect.value = temp;
  translate();
});
