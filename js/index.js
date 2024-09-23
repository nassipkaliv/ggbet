// id task 2122

document.addEventListener("DOMContentLoaded", () => {
  const html = document.querySelector("html"),
    currLangDom = document.querySelector(".curr_lang"),
    langSwitcher = document.querySelector(".lang_switcher_outer"),
    langListItem = [...document.querySelectorAll(".lang_list_item")],
    userLangBrowser = navigator.language || navigator.userLanguage,
    languageParts = userLangBrowser.split("-"),
    userLang = languageParts[0],
    bonusCur = [...document.querySelectorAll(".bonus-cur")],
    bonusValue = [...document.querySelectorAll(".bonus-value")],
    country = html.getAttribute("data-country");

  const listOfLang = [
    "en",
    "ru",
    "de",
    "fi",
    "pl",
    "pt",
    "es",
    "ro",
    "hu",
    "fr",
    "ph",
    "vn",
    "th",
    "cz",
    "jp",
    "no",
    "gr",
    "lt",
    "lv",
    "se",
    "ee",
    "sk",
    // "ua",
  ];

  const countryToLang = {
    en: "en",
    by: "en",
    az: "en",
    ge: "en",
    md: "en",
    mn: "en",
    tm: "en",
    kg: "en",
    tj: "en",
    ru: "ru",
    kz: "ru",
    de: "de",
    fi: "fi",
    pl: "pl",
    pt: "pt",
    br: "pt",
    es: "es",
    cl: "es",
    pe: "es",
    co: "es",
    mx: "es",
    ar: "es",
    ro: "ro",
    hu: "hu",
    ca: "en",
    ja: "jp",
    fr: "fr",
    ph: "ph",
    vi: "vn",
    th: "th",
    cs: "cz",
    nb: "no",
    nn: "no",
    no: "no",
    el: "gr",
    et: "ee",
    sv: "se",
    lt: "lt",
    lv: "lv",
    sk: "sk",
    // uk: "ua",
    fil: "ph",
    default: "en",
  };

  const data = {
    en: { countWB: "€4500" },
    vn: { countWB: "110 000 000 VND" },
    th: { countWB: "140 000 THB" },
    ro: { countWB: "18.000 RON" },
    ph: { countWB: "230 000 PHP" },
    pe: { countWB: "18000 PEN" },
    jp: { countWB: "¥450000" },
    hu: { countWB: "1 800 000 HUF" },
    br: { countWB: "23 000 BRL" },
    // ua: { countWB: "45 000 UAH" },
    co: { countWB: "18 000 000 COP" },
    mx: { countWB: "110 000 MXN" },
    pl: { countWB: "18 000 ZŁ" },
    cl: { countWB: "3 000 000 CLP" },
    no: { countWB: "45 000 NOK" },
    sj: { countWB: "45 000 NOK" },
    ca: { countWB: "6000 CAD" },
    pm: { countWB: "6000 CAD" },
    in: { countWB: "230 000 INR" },
    bt: { countWB: "230 000 INR" },
    np: { countWB: "230 000 INR" },
    fr: { countWB: "€4500" },
    ru: { countWB: "1 800 000 KZT" },
    kz: { countWB: "1 800 000 KZT" },
    se: { countWB: "45 000 SEK" },
    au: { countWB: "6000 AUD" },
    aq: { countWB: "6000 AUD" },
    cx: { countWB: "6000 AUD" },
    cc: { countWB: "6000 AUD" },
    hm: { countWB: "6000 AUD" },
    nf: { countWB: "6000 AUD" },
    ki: { countWB: "6000 AUD" },
    nr: { countWB: "6000 AUD" },
    tv: { countWB: "6000 AUD" },
    nz: { countWB: "7000 NZD" },
    ck: { countWB: "7000 NZD" },
    nu: { countWB: "7000 NZD" },
    pn: { countWB: "7000 NZD" },
    tk: { countWB: "7000 NZD" },
    by: { countWB: "$4500" },
    az: { countWB: "$4500" },
    am: { countWB: "$4500" },
    ge: { countWB: "$4500" },
    md: { countWB: "$4500" },
    mn: { countWB: "$4500" },
    tm: { countWB: "$4500" },
    kg: { countWB: "$4500" },
    tj: { countWB: "$4500" },
    default: { countWB: "€4500" },
  };

  let lang = countryToLang[userLang] || countryToLang.default;

  if (country) {
    Object.keys(data).forEach((item) => {
      item === country && html.classList.add(`curr_${country}`);
    });
  }

  listOfLang.forEach((item) => {
    html.classList.remove(item);
    html.classList.add(lang);
  });

  const changeLanguage = (item) => {
    const lang = item.getAttribute("data-lang");

    listOfLang.forEach((item) => {
      html.classList.contains(item) && html.classList.remove(item);
    });

    html.classList.add(lang);

    langListItem.forEach((item) => {
      item.classList.remove("curr");
    });
    item.classList.add("curr");

    currLangDom.innerHTML = item.innerHTML;
  };

  langListItem.forEach((item) => {
    item.classList.remove("curr");
    item.addEventListener("click", () => {
      changeLanguage(item);
    });
  });

  const currLangItem = langListItem.find(
    (item) => item.getAttribute("data-lang") === lang
  );

  if (currLangItem) {
    currLangItem.classList.add("curr");
    currLangDom.innerHTML = currLangItem.innerHTML;
  } else {
    currLangDom.innerHTML = `<span>${countryToLang.default}</span>`;
  }

  document.addEventListener("click", (e) => {
    !e.target.closest(".lang_switcher_outer") &&
      langSwitcher.classList.remove("act");
  });

  langSwitcher.addEventListener("click", () => {
    langSwitcher.classList.toggle("act");
  });

  bonusCur.forEach((item) => {
    item.textContent = data[country]
      ? data[country].countWB
      : data.default.countWB;
  });

  bonusValue.forEach((item) => {
    const countWBValue = data[country]
      ? data[country].countWB
      : data.default.countWB;

    item.textContent = countWBValue;
    item.setAttribute("data-text", countWBValue);
  });

  const currentYear = document.querySelector("#current-year"),
    loader = document.querySelector(".loader"),
    bonus = document.querySelector(".bonus"),
    canvas = document.querySelector("#canvas");

  setTimeout(() => {
    loader.style.display = "none";
    canvas.classList.add("show-canvas");
    bonus.classList.add("show-canvas");
  }, 2500);

  currentYear.innerHTML = new Date().getFullYear();
});
