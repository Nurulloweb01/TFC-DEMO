"use strict";

/* =========================================================
   TFC DEMO — CUSTOMER SCRIPT
   TG / RU
   Demo version — Nurullo Coding
========================================================= */


/* =========================================================
   STORAGE
========================================================= */

const STORAGE_KEYS = {
    products: "tfcProducts",
    cart: "tfcCart",
    orders: "tfcOrders",
    branches: "tfcBranches",
    selectedBranch: "tfcSelectedBranch",
    language: "tfcLanguage"
};

const DELIVERY_PRICE = 10;


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    tg: {
        navHome: "Асосӣ",
        navMenu: "Меню",
        navPromotions: "Аксияҳо",
        navAbout: "Дар бораи мо",
        navBranches: "Филиалҳо",
        navContact: "Тамос",

        search: "Ҷустуҷӯ",
        openCart: "Кушодани сабад",
        openMenu: "Кушодани меню",
        closeSearch: "Пӯшидани ҷустуҷӯ",
        closeCart: "Пӯшидани сабад",
        close: "Пӯшидан",
        scrollTop: "Ба боло",

        cart: "Сабад",

        searchFood: "Ҷустуҷӯи хӯрок",
        searchPlaceholder: "Масалан: мурғ, моҳӣ, бургер...",

        heroTitle: "Таоми болаззат,",
        heroTitleAccent: "ки боз мехоҳед!",

        heroDescription:
            "Мурғи болаззат, моҳии хуштаъм ва хӯрокҳои дӯстдоштаи шумо — бо фармоиши осон ва зуд.",

        viewMenu: "Менюро дидан",
        orderNow: "Фармоиш додан",

        easyOrder: "Фармоиши осон",
        fewSteps: "Дар чанд қадам",

        forPhone: "Барои телефон",

        twoBranches: "2 филиал",
        chooseNearest: "Филиали наздикро интихоб кунед",

        deliciousFood: "Таоми болаззат",
        everyDay: "Ҳар рӯз",

        onlineOrder: "Фармоиши онлайн",
        fastEasy: "Зуд ва осон",

        nearBranches: "Филиалҳои наздик",
        qualityFood: "Хӯроки босифат",

        chooseBranch: "Филиали худро интихоб кунед",

        chooseBranchDescription:
            "Барои фармоиш филиали ба шумо мувофиқро интихоб намоед.",

        tfcMenu: "Менюи TFC",

        chooseFood:
            "Хӯроки дӯстдоштаатонро интихоб кунед",

        demoMenuNotice:
            "Менюи Demo — нархҳо ва маҳсулот барои намоиш мебошанд.",

        categoryAll: "Ҳама",
        categoryChicken: "Мурғ",
        categoryFish: "Моҳӣ",
        categoryBurger: "Бургер",
        categoryCombo: "Комбо",
        categoryDrink: "Нӯшокиҳо",
        categoryOther: "Дигар",

        productNotFound: "Маҳсулот ёфт нашуд",
        searchAnother: "Номи дигарро ҷустуҷӯ кунед.",

        specialOffer: "Пешниҳоди махсус",
        tfcCombos: "Комбоҳои TFC",

        promotionDescription:
            "Хӯрокҳои дӯстдоштаатонро якҷоя фармоиш диҳед. Ин қисми Demo мебошад ва аксияҳо баъдтар аз Admin Panel идора карда мешаванд.",

        aboutTfc: "Дар бораи TFC",

        deliciousEveryDay:
            "Таоми болаззат барои ҳар рӯз",

        aboutDescription:
            "Ин вебсайт ҳамчун Demo-и системаи фармоиши онлайн барои TFC сохта шудааст. Муштарӣ метавонад менюро бинад, маҳсулотро ба сабад илова кунад, филиалро интихоб намояд ва фармоиш диҳад.",

        onlineMenu: "Менюи онлайн",
        productsCategories: "Маҳсулот ва категорияҳо",

        orderCart: "Сабади фармоиш",
        automaticCalculation: "Ҳисоби автоматии маблағ",

        branchSelection: "Интихоби филиал",
        orderSelectedBranch: "Фармоиш ба филиали интихобшуда",

        orderManagement: "Идоракунии фармоишҳо",

        myOrder: "Фармоиши ман",
        trackOrderTitle: "Ҳолати фармоишро бинед",
        enterOrderNumber: "Рақами фармоишро ворид кунед.",
        trackingPlaceholder: "Масалан: TFC-2026-0001",
        check: "Санҷидан",

        alwaysForYou: "Мо ҳамеша дар хизмати шумо",

        contactDescription:
            "Барои маълумоти филиал аз рӯйхати филиалҳо истифода баред.",

        selectNearestBranch:
            "Филиали наздикро интихоб кунед.",

        viewBranches: "Дидани филиалҳо",

        workingHours: "Соатҳои корӣ",

        workingHoursDescription:
            "Соатҳои корӣ барои ҳар филиал алоҳида нишон дода мешаванд.",

        orderSteps:
            "Меню → Сабад → Филиал → Фармоиш.",

        footerDescription:
            "Demo-и системаи фармоиши онлайн барои ресторан ва филиалҳои TFC.",

        services: "Хизматрасонӣ",

        demoFooterNotice:
            "Маълумоти маҳсулот ва нархҳо барои намоиш мебошанд.",

        yourOrder: "Фармоиши шумо",

        emptyCart: "Сабад холӣ аст",

        chooseFoodFromMenu:
            "Аз меню хӯрок интихоб кунед.",

        products: "Маҳсулот",
        delivery: "Расонидан",
        total: "Ҳамагӣ",

        checkout:
            "Ба расмият даровардани фармоиш",

        checkoutTitle:
            "Расмиятдарории фармоиш",

        yourName: "Номи шумо",
        namePlaceholder: "Ном",

        phoneNumber: "Рақами телефон",

        branch: "Филиал",
        selectBranch: "Филиалро интихоб кунед",

        address: "Суроға",
        addressPlaceholder: "Маҳалла, кӯча, хона...",

        comment: "Шарҳ",
        commentPlaceholder: "Масалан: бе пиёз...",

        paymentMethod: "Тарзи пардохт",

        cash: "Нақдӣ",
        card: "Корт",
        cardOnDelivery: "Корт ҳангоми қабул",
        onDelivery: "Ҳангоми қабул",

        demoPaymentNotice:
            "Ин Demo мебошад. Пардохти воқеии онлайн дар ин версия фаъол нест.",

        placeOrder: "Фармоиш додан",

        trackThisOrder: "Пайгирии фармоиш",

        orderAccepted:
            "Фармоиши шумо қабул шуд!",

        thankYouOrder:
            "Ташаккур барои фармоиш.",

        orderNumber: "Рақами фармоиш",
        amount: "Маблағ",
        status: "Ҳолат",

        statusNew: "Нав",
        statusPreparing: "Тайёр мешавад",
        statusReady: "Тайёр",
        statusDelivered: "Расонида шуд",
        statusCancelled: "Бекор шуд",

        understood: "Фаҳмо",

        addToCart: "Ба сабад",
        details: "Муфассал",

        selected: "Интихоб шудааст",
        select: "Интихоб кардан",

        city: "Шаҳр",
        phone: "Телефон",

        somoni: "сомонӣ",

        addedToCart:
            "Маҳсулот ба сабад илова шуд.",

        removedFromCart:
            "Маҳсулот аз сабад хориҷ шуд.",

        branchSelected:
            "Филиал интихоб шуд.",

        fillName:
            "Номи худро ворид кунед.",

        invalidPhone:
            "Рақами телефонро дуруст ворид кунед.",

        chooseBranchError:
            "Филиалро интихоб кунед.",

        fillAddress:
            "Суроғаи худро ворид кунед.",

        emptyCartError:
            "Сабади шумо холӣ аст.",

        orderSaved:
            "Фармоиш бомуваффақият қабул шуд.",

        orderNotFound:
            "Фармоиш ёфт нашуд.",

        enterTracking:
            "Рақами фармоишро ворид кунед.",

        noSearchResults:
            "Ягон маҳсулот ёфт нашуд.",

        quantity: "Миқдор",

        orderDate: "Санаи фармоиш",

        payment: "Пардохт",

        branchAddress: "Суроға",

        remove: "Нест кардан",

        weight: "Вазн",
        volume: "Ҳаҷм",
        gram: "г",
        liter: "л"
    },


    ru: {
        navHome: "Главная",
        navMenu: "Меню",
        navPromotions: "Акции",
        navAbout: "О нас",
        navBranches: "Филиалы",
        navContact: "Контакты",

        search: "Поиск",
        openCart: "Открыть корзину",
        openMenu: "Открыть меню",
        closeSearch: "Закрыть поиск",
        closeCart: "Закрыть корзину",
        close: "Закрыть",
        scrollTop: "Наверх",

        cart: "Корзина",

        searchFood: "Поиск блюд",
        searchPlaceholder:
            "Например: курица, рыба, бургер...",

        heroTitle: "Вкус,",
        heroTitleAccent: "который хочется снова!",

        heroDescription:
            "Вкусная курица, аппетитная рыба и ваши любимые блюда — с простым и быстрым заказом.",

        viewMenu: "Посмотреть меню",
        orderNow: "Заказать",

        easyOrder: "Простой заказ",
        fewSteps: "Всего несколько шагов",

        forPhone: "Для телефона",

        twoBranches: "2 филиала",
        chooseNearest: "Выберите ближайший филиал",

        deliciousFood: "Вкусная еда",
        everyDay: "Каждый день",

        onlineOrder: "Онлайн-заказ",
        fastEasy: "Быстро и просто",

        nearBranches: "Ближайшие филиалы",
        qualityFood: "Качественная еда",

        chooseBranch: "Выберите филиал",

        chooseBranchDescription:
            "Выберите удобный для вас филиал для оформления заказа.",

        tfcMenu: "Меню TFC",

        chooseFood:
            "Выберите любимое блюдо",

        demoMenuNotice:
            "Demo-меню — товары и цены указаны для демонстрации.",

        categoryAll: "Все",
        categoryChicken: "Курица",
        categoryFish: "Рыба",
        categoryBurger: "Бургеры",
        categoryCombo: "Комбо",
        categoryDrink: "Напитки",
        categoryOther: "Другое",

        productNotFound: "Товар не найден",
        searchAnother: "Попробуйте другой запрос.",

        specialOffer: "Специальное предложение",
        tfcCombos: "Комбо TFC",

        promotionDescription:
            "Заказывайте любимые блюда вместе. Это Demo-раздел, акции в полной версии могут управляться через Admin Panel.",

        aboutTfc: "О TFC",

        deliciousEveryDay:
            "Вкусная еда каждый день",

        aboutDescription:
            "Этот сайт создан как Demo системы онлайн-заказов для TFC. Клиент может посмотреть меню, добавить товары в корзину, выбрать филиал и оформить заказ.",

        onlineMenu: "Онлайн-меню",
        productsCategories: "Товары и категории",

        orderCart: "Корзина заказа",
        automaticCalculation: "Автоматический расчёт суммы",

        branchSelection: "Выбор филиала",
        orderSelectedBranch: "Заказ в выбранный филиал",

        orderManagement: "Управление заказами",

        myOrder: "Мой заказ",
        trackOrderTitle: "Отследите свой заказ",
        enterOrderNumber: "Введите номер заказа.",
        trackingPlaceholder: "Например: TFC-2026-0001",
        check: "Проверить",

        alwaysForYou: "Мы всегда к вашим услугам",

        contactDescription:
            "Информацию о филиалах можно посмотреть в списке филиалов.",

        selectNearestBranch:
            "Выберите ближайший филиал.",

        viewBranches: "Посмотреть филиалы",

        workingHours: "Часы работы",

        workingHoursDescription:
            "Часы работы отображаются отдельно для каждого филиала.",

        orderSteps:
            "Меню → Корзина → Филиал → Заказ.",

        footerDescription:
            "Demo системы онлайн-заказов для ресторана и филиалов TFC.",

        services: "Услуги",

        demoFooterNotice:
            "Информация о товарах и ценах представлена для демонстрации.",

        yourOrder: "Ваш заказ",

        emptyCart: "Корзина пуста",

        chooseFoodFromMenu:
            "Выберите блюда из меню.",

        products: "Товары",
        delivery: "Доставка",
        total: "Итого",

        checkout: "Оформить заказ",

        checkoutTitle: "Оформление заказа",

        yourName: "Ваше имя",
        namePlaceholder: "Имя",

        phoneNumber: "Номер телефона",

        branch: "Филиал",
        selectBranch: "Выберите филиал",

        address: "Адрес",
        addressPlaceholder: "Район, улица, дом...",

        comment: "Комментарий",
        commentPlaceholder: "Например: без лука...",

        paymentMethod: "Способ оплаты",

        cash: "Наличными",
        card: "Картой",
        cardOnDelivery: "Картой при получении",
        onDelivery: "При получении",

        demoPaymentNotice:
            "Это Demo. Реальная онлайн-оплата в этой версии не подключена.",

        placeOrder: "Оформить заказ",

        trackThisOrder: "Отследить заказ",

        orderAccepted:
            "Ваш заказ принят!",

        thankYouOrder:
            "Спасибо за заказ.",

        orderNumber: "Номер заказа",
        amount: "Сумма",
        status: "Статус",

        statusNew: "Новый",
        statusPreparing: "Готовится",
        statusReady: "Готов",
        statusDelivered: "Доставлен",
        statusCancelled: "Отменён",

        understood: "Понятно",

        addToCart: "В корзину",
        details: "Подробнее",

        selected: "Выбрано",
        select: "Выбрать",

        city: "Город",
        phone: "Телефон",

        somoni: "сомони",

        addedToCart:
            "Товар добавлен в корзину.",

        removedFromCart:
            "Товар удалён из корзины.",

        branchSelected:
            "Филиал выбран.",

        fillName:
            "Введите ваше имя.",

        invalidPhone:
            "Введите правильный номер телефона.",

        chooseBranchError:
            "Выберите филиал.",

        fillAddress:
            "Введите адрес доставки.",

        emptyCartError:
            "Ваша корзина пуста.",

        orderSaved:
            "Заказ успешно принят.",

        orderNotFound:
            "Заказ не найден.",

        enterTracking:
            "Введите номер заказа.",

        noSearchResults:
            "Товары не найдены.",

        quantity: "Количество",

        orderDate: "Дата заказа",

        payment: "Оплата",

        branchAddress: "Адрес",

        remove: "Удалить",

        weight: "Вес",
        volume: "Объём",
        gram: "г",
        liter: "л"
    }
};


/* =========================================================
   LANGUAGE
========================================================= */

function readLanguage() {

    try {

        const raw =
            localStorage.getItem(
                STORAGE_KEYS.language
            );

        if (!raw) {
            return "tg";
        }

        let value = raw;

        if (
            raw.startsWith('"') ||
            raw.startsWith("{") ||
            raw.startsWith("[")
        ) {

            try {
                value = JSON.parse(raw);
            } catch (error) {
                value = raw;
            }
        }

        return value === "ru" ? "ru" : "tg";

    } catch (error) {

        return "tg";
    }
}


let currentLanguage = readLanguage();


function t(key) {
    return (
        translations[currentLanguage]?.[key] ||
        translations.tg[key] ||
        key
    );
}


const LEGACY_RU = {
    "Мурғи бирён": "Жареная курица",
    "Мурғи Crispy": "Хрустящая курица Crispy",
    "Мурғи crispy": "Хрустящая курица Crispy",
    "Болҳои мурғ": "Куриные крылышки",
    "Моҳии бирён": "Жареная рыба",
    "Моҳии махсус": "Фирменная рыба",
    "Бургери TFC": "Бургер TFC",
    "Бургер TFC": "Бургер TFC",
    "Комбо TFC": "Комбо TFC",
    "Комбо Family": "Семейное комбо",
    "TFC — Бозори Сомонӣ": "TFC — Рынок Сомони",
    "TFC — Хонаи Адолат": "TFC — Дом Адолат",
    "Кӯлоб": "Куляб",
    "Бозори Сомонӣ": "Рынок Сомони",
    "Хонаи Адолат": "Дом Адолат"
};


function getLocalizedValue(value, fallback = "") {

    if (
        value &&
        typeof value === "object" &&
        !Array.isArray(value)
    ) {

        const current =
            value[currentLanguage];

        if (current) {
            return current;
        }

        if (
            currentLanguage === "ru" &&
            value.tg &&
            LEGACY_RU[value.tg]
        ) {
            return LEGACY_RU[value.tg];
        }

        return (
            value.tg ||
            value.ru ||
            fallback
        );
    }

    if (typeof value === "string") {

        if (
            currentLanguage === "ru" &&
            LEGACY_RU[value]
        ) {
            return LEGACY_RU[value];
        }

        return value || fallback;
    }

    return fallback;
}


function bilingualField(value) {

    if (!value) {
        return "";
    }

    if (
        typeof value === "object" &&
        !Array.isArray(value)
    ) {
        return `${value.tg || ""} ${value.ru || ""}`;
    }

    const text = String(value);

    return `${text} ${LEGACY_RU[text] || ""}`;
}


function productMatchesQuery(product, query) {

    if (!query) {
        return true;
    }

    const text = `
        ${bilingualField(product?.name)}
        ${bilingualField(product?.description)}
        ${product?.category || ""}
        ${getCategoryLabel(product?.category)}
    `.toLowerCase();

    return text.includes(query);
}


/* =========================================================
   DEFAULT PRODUCTS
========================================================= */

const DEFAULT_PRODUCTS = [

    {
        id: "TFC-P001",

        name: {
            tg: "Мурғи бирён",
            ru: "Жареная курица"
        },

        category: "chicken",

        price: 45,

        description: {
            tg: "Мурғи болаззат бо қабати қирмизу хуштаъм.",
            ru: "Вкусная жареная курица с аппетитной хрустящей корочкой."
        },

        image: "./images/chicken-1.jpg",

        weightGrams: 500,

        active: true
    },


    {
        id: "TFC-P002",

        name: {
            tg: "Мурғи Crispy",
            ru: "Хрустящая курица Crispy"
        },

        category: "chicken",

        price: 49,

        description: {
            tg: "Мурғи махсуси crispy бо қабати хрустӣ.",
            ru: "Фирменная хрустящая курица Crispy."
        },

        image: "./images/chicken-2.jpg",

        weightGrams: 400,

        active: true
    },


    {
        id: "TFC-P003",

        name: {
            tg: "Болҳои мурғ",
            ru: "Куриные крылышки"
        },

        category: "chicken",

        price: 39,

        description: {
            tg: "Болҳои мурғи болаззат бо соуси махсус.",
            ru: "Аппетитные куриные крылышки с фирменным соусом."
        },

        image: "./images/chicken-3.jpg",

        weightGrams: 350,

        active: true
    },


    {
        id: "TFC-P004",

        name: {
            tg: "Моҳии бирён",
            ru: "Жареная рыба"
        },

        category: "fish",

        price: 55,

        description: {
            tg: "Моҳии тару тоза бо лимӯ ва ҳанут.",
            ru: "Свежая жареная рыба с лимоном и специями."
        },

        image: "./images/fish-1.jpg",

        weightGrams: 500,

        active: true
    },


    {
        id: "TFC-P005",

        name: {
            tg: "Моҳии махсус",
            ru: "Фирменная рыба"
        },

        category: "fish",

        price: 65,

        description: {
            tg: "Моҳии махсус бо таъми хоси TFC.",
            ru: "Фирменная рыба с особым вкусом TFC."
        },

        image: "./images/fish-2.jpg",

        weightGrams: 450,

        active: true
    },


    {
        id: "TFC-P006",

        name: {
            tg: "Бургери TFC",
            ru: "Бургер TFC"
        },

        category: "burger",

        price: 35,

        description: {
            tg: "Бургер бо мурғи crispy, панир ва сабзавот.",
            ru: "Бургер с хрустящей курицей, сыром и овощами."
        },

        image: "./images/burger-1.jpg",

        weightGrams: 300,

        active: true
    },


    {
        id: "TFC-P007",

        name: {
            tg: "Комбо TFC",
            ru: "Комбо TFC"
        },

        category: "combo",

        price: 79,

        description: {
            tg: "Мурғ, картошка, соус ва нӯшокӣ.",
            ru: "Курица, картофель, соус и напиток."
        },

        image: "./images/combo-1.jpg",

        weightGrams: 700,

        active: true
    },


    {
        id: "TFC-P008",

        name: {
            tg: "Комбо Family",
            ru: "Семейное комбо"
        },

        category: "combo",

        price: 129,

        description: {
            tg: "Комбои калон барои оила ва дӯстон.",
            ru: "Большое комбо для семьи и друзей."
        },

        image: "./images/combo-family.jpg",

        weightGrams: 1400,

        active: true
    },


    {
        id: "TFC-P009",

        name: {
            tg: "Coca-Cola",
            ru: "Coca-Cola"
        },

        category: "drink",

        price: 10,

        description: {
            tg: "Нӯшокии хунук.",
            ru: "Холодный напиток."
        },

        image: "./images/coca-cola.jpg",

        volumeLiters: 0.5,

        active: true
    },


    {
        id: "TFC-P010",

        name: {
            tg: "Fanta",
            ru: "Fanta"
        },

        category: "drink",

        price: 10,

        description: {
            tg: "Нӯшокии хунуки афлесунӣ.",
            ru: "Холодный апельсиновый напиток."
        },

        image: "./images/fanta.jpg",

        volumeLiters: 0.5,

        active: true
    }

];


/* =========================================================
   DEFAULT BRANCHES
========================================================= */

const DEFAULT_BRANCHES = [

    {
        id: "TFC-B001",

        name: {
            tg: "TFC — Бозори Сомонӣ",
            ru: "TFC — Рынок Сомони"
        },

        city: {
            tg: "Кӯлоб",
            ru: "Куляб"
        },

        address: {
            tg: "Бозори Сомонӣ",
            ru: "Рынок Сомони"
        },

        phone: "944975050",

        workingHours: "08:00 – 01:00",

        active: true
    },


    {
        id: "TFC-B002",

        name: {
            tg: "TFC — Хонаи Адолат",
            ru: "TFC — Дом Адолат"
        },

        city: {
            tg: "Кӯлоб",
            ru: "Куляб"
        },

        address: {
            tg: "Хонаи Адолат",
            ru: "Дом Адолат"
        },

        phone: "754169090",

        workingHours: "10:00 – 23:00",

        active: true
    }

];


/* =========================================================
   STATE
========================================================= */

let products = [];
let branches = [];
let cart = [];
let orders = [];

let selectedCategory = "all";
let searchTerm = "";
let selectedBranchId = "";


/* =========================================================
   DOM
========================================================= */

function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return Array.from(
        document.querySelectorAll(selector)
    );
}


/* =========================================================
   STORAGE
========================================================= */

function getStorage(key, fallback = null) {

    try {

        const value =
            localStorage.getItem(key);

        if (value === null) {
            return fallback;
        }

        return JSON.parse(value);

    } catch (error) {

        console.error(
            "Storage read error:",
            key,
            error
        );

        return fallback;
    }
}


function setStorage(key, value) {

    try {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

        return true;

    } catch (error) {

        console.error(
            "Storage save error:",
            key,
            error
        );

        return false;
    }
}


/* =========================================================
   HELPERS
========================================================= */

function escapeHTML(value = "") {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


function formatMoney(value) {

    const amount =
        Number(value) || 0;

    const locale =
        currentLanguage === "ru"
            ? "ru-RU"
            : "tg-TJ";

    return `${amount.toLocaleString(locale)} ${t("somoni")}`;
}


function formatDateTime(value) {

    if (!value) {
        return "-";
    }

    const date =
        new Date(value);

    if (Number.isNaN(date.getTime())) {
        return "-";
    }

    return date.toLocaleString(
        currentLanguage === "ru"
            ? "ru-RU"
            : "tg-TJ",
        {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        }
    );
}


function handleImageError(image) {

    if (!image) {
        return;
    }

    image.onerror = null;
    image.src = "./images/placeholder.jpg";
}


const EXISTING_IMAGES = new Set([
    "hero.jpg",
    "chicken-1.jpg",
    "chicken-2.jpg",
    "chicken-3.jpg",
    "fish-1.jpg",
    "fish-2.jpg",
    "burger-1.jpg",
    "combo-1.jpg",
    "combo-family.jpg",
    "drink-1.jpg",
    "coca-cola.jpg",
    "fanta.jpg",
    "placeholder.jpg"
]);


const STANDARD_PRODUCT_MEASURES = {
    "TFC-P001": { weightGrams: 500 },
    "TFC-P002": { weightGrams: 400 },
    "TFC-P003": { weightGrams: 350 },
    "TFC-P004": { weightGrams: 500 },
    "TFC-P005": { weightGrams: 450 },
    "TFC-P006": { weightGrams: 300 },
    "TFC-P007": { weightGrams: 700 },
    "TFC-P008": { weightGrams: 1400 },
    "TFC-P009": { volumeLiters: 0.5 },
    "TFC-P010": { volumeLiters: 0.5 }
};


const STANDARD_PRODUCT_IMAGES = {
    "TFC-P001": "./images/chicken-1.jpg",
    "TFC-P002": "./images/chicken-2.jpg",
    "TFC-P003": "./images/chicken-3.jpg",
    "TFC-P004": "./images/fish-1.jpg",
    "TFC-P005": "./images/fish-2.jpg",
    "TFC-P006": "./images/burger-1.jpg",
    "TFC-P007": "./images/combo-1.jpg",
    "TFC-P008": "./images/combo-family.jpg",
    "TFC-P009": "./images/coca-cola.jpg",
    "TFC-P010": "./images/fanta.jpg"
};


function applyStandardProductImages(list) {

    let changed = false;

    const next = list.map(product => {

        const standardImage =
            STANDARD_PRODUCT_IMAGES[
                String(product.id || "")
            ];

        if (
            !standardImage ||
            product.image === standardImage
        ) {
            return product;
        }

        changed = true;

        return {
            ...product,
            image: standardImage
        };
    });

    return {
        products: next,
        changed
    };
}


function readPositiveNumber(value) {

    const number =
        Number(value);

    if (
        !Number.isFinite(number) ||
        number <= 0
    ) {
        return null;
    }

    return number;
}


function applyStandardProductMeasures(list) {

    let changed = false;

    const next = list.map(product => {

        const standard =
            STANDARD_PRODUCT_MEASURES[
                String(product?.id || "")
            ];

        if (!standard) {
            return product;
        }

        const patch = {};

        if (
            standard.weightGrams &&
            !Object.prototype.hasOwnProperty.call(
                product,
                "weightGrams"
            )
        ) {
            patch.weightGrams =
                standard.weightGrams;
        }

        if (
            standard.volumeLiters &&
            !Object.prototype.hasOwnProperty.call(
                product,
                "volumeLiters"
            )
        ) {
            patch.volumeLiters =
                standard.volumeLiters;
        }

        if (!Object.keys(patch).length) {
            return product;
        }

        changed = true;

        return {
            ...product,
            ...patch
        };
    });

    return {
        products: next,
        changed
    };
}


function resolveImage(src) {

    const value =
        String(src || "").trim();

    if (!value) {
        return "./images/placeholder.jpg";
    }

    if (
        /^https?:/i.test(value) ||
        value.startsWith("data:")
    ) {
        return value;
    }

    const file =
        value.split("/").pop().split("?")[0];

    if (EXISTING_IMAGES.has(file)) {
        return value;
    }

    if (
        value.includes("images/") &&
        /\.(jpe?g|png|webp|gif)$/i.test(file)
    ) {
        return "./images/placeholder.jpg";
    }

    return value || "./images/placeholder.jpg";
}


/* =========================================================
   NORMALIZE PRODUCT
========================================================= */

function normalizeProduct(product = {}) {

    return {
        id:
            product.id ||
            `TFC-P-${Date.now()}`,

        name:
            product.name || {
                tg: "Маҳсулот",
                ru: "Товар"
            },

        category:
            product.category || "chicken",

        price:
            Number(product.price) || 0,

        description:
            product.description || {
                tg: "",
                ru: ""
            },

        image:
            product.image ||
            "./images/placeholder.jpg",

        weightGrams:
            readPositiveNumber(
                product.weightGrams
            ),

        volumeLiters:
            readPositiveNumber(
                product.volumeLiters
            ),

        active:
            product.active !== false
    };
}


/* =========================================================
   NORMALIZE BRANCH
========================================================= */

function normalizeBranch(branch = {}) {

    return {
        id:
            branch.id ||
            `TFC-B-${Date.now()}`,

        name:
            branch.name || "TFC",

        city:
            branch.city || "",

        address:
            branch.address || "",

        phone:
            branch.phone || "",

        workingHours:
            branch.workingHours ||
            branch.hours ||
            "",

        hours:
            branch.hours ||
            branch.workingHours ||
            "",

        active:
            branch.active !== false
    };
}


/* =========================================================
   INITIAL DATA
========================================================= */

function initializeData() {

    const savedProducts =
        getStorage(
            STORAGE_KEYS.products,
            null
        );

    if (
        !Array.isArray(savedProducts) ||
        savedProducts.length === 0
    ) {

        products =
            DEFAULT_PRODUCTS.map(
                normalizeProduct
            );

        setStorage(
            STORAGE_KEYS.products,
            products
        );

    } else {

        const measuredProducts =
            applyStandardProductMeasures(
                savedProducts
            );

        products =
            measuredProducts.products.map(
                normalizeProduct
            );

        const migratedProducts =
            applyStandardProductImages(
                products
            );

        products =
            migratedProducts.products;

        if (
            measuredProducts.changed ||
            migratedProducts.changed
        ) {
            setStorage(
                STORAGE_KEYS.products,
                products
            );
        }
    }


    const savedBranches =
        getStorage(
            STORAGE_KEYS.branches,
            null
        );

    if (
        !Array.isArray(savedBranches) ||
        savedBranches.length === 0
    ) {

        branches =
            DEFAULT_BRANCHES.map(
                normalizeBranch
            );

        setStorage(
            STORAGE_KEYS.branches,
            branches
        );

    } else {

        branches =
            savedBranches.map(
                normalizeBranch
            );
    }


    const savedCart =
        getStorage(
            STORAGE_KEYS.cart,
            []
        );

    cart =
        Array.isArray(savedCart)
            ? savedCart
            : [];


    const savedOrders =
        getStorage(
            STORAGE_KEYS.orders,
            []
        );

    orders =
        Array.isArray(savedOrders)
            ? savedOrders
            : [];


    selectedBranchId =
        getStorage(
            STORAGE_KEYS.selectedBranch,
            ""
        ) || "";
}


/* =========================================================
   PRODUCT / BRANCH GETTERS
========================================================= */

function getProductById(id) {

    return products.find(
        product =>
            String(product.id) === String(id)
    );
}


function getBranchById(id) {

    return branches.find(
        branch =>
            String(branch.id) === String(id)
    );
}


/* =========================================================
   CATEGORY
========================================================= */

function getCategoryLabel(category) {

    const map = {
        chicken: "categoryChicken",
        fish: "categoryFish",
        burger: "categoryBurger",
        combo: "categoryCombo",
        drink: "categoryDrink"
    };

    return t(
        map[category] || "categoryOther"
    );
}


/* =========================================================
   PRODUCT LOCALIZATION
========================================================= */

function getProductName(product) {

    return getLocalizedValue(
        product?.name,
        currentLanguage === "ru"
            ? "Товар"
            : "Маҳсулот"
    );
}


function getProductDescription(product) {

    return getLocalizedValue(
        product?.description,
        ""
    );
}


function getBranchName(branch) {

    return getLocalizedValue(
        branch?.name,
        "TFC"
    );
}


function getBranchCity(branch) {

    return getLocalizedValue(
        branch?.city,
        ""
    );
}


function getBranchAddress(branch) {

    return getLocalizedValue(
        branch?.address,
        ""
    );
}


/* =========================================================
   LANGUAGE UI
========================================================= */

function applyStaticTranslations() {

    document.documentElement.lang =
        currentLanguage;


    $$("[data-i18n]").forEach(
        element => {

            const key =
                element.dataset.i18n;

            if (translations[currentLanguage][key]) {
                element.textContent = t(key);
            }
        }
    );


    $$("[data-i18n-placeholder]").forEach(
        element => {

            const key =
                element.dataset.i18nPlaceholder;

            element.placeholder =
                t(key);
        }
    );


    $$("[data-i18n-aria]").forEach(
        element => {

            const key =
                element.dataset.i18nAria;

            element.setAttribute(
                "aria-label",
                t(key)
            );
        }
    );


    $$(".language-btn").forEach(
        button => {

            button.classList.toggle(
                "active",
                button.dataset.lang ===
                    currentLanguage
            );
        }
    );
}


function setLanguage(language) {

    if (!["tg", "ru"].includes(language)) {
        return;
    }

    currentLanguage = language;

    localStorage.setItem(
        STORAGE_KEYS.language,
        language
    );

    applyStaticTranslations();

    renderProducts();

    renderBranches();

    updateCheckoutBranches();

    updateCartUI();

    const globalInput =
        $("#globalSearchInput");

    if (
        globalInput &&
        globalInput.value.trim()
    ) {
        renderGlobalSearch(
            globalInput.value
        );
    }

    const trackingInput =
        $("#trackingInput");

    if (
        trackingInput &&
        trackingInput.value.trim()
    ) {
        trackOrder();
    }

    const detailsButton =
        document.querySelector(
            "#productModal.active [data-modal-add-cart]"
        );

    if (detailsButton) {

        const qty =
            document.querySelector(
                "#productModal .modal-qty-value"
            )?.textContent;

        openProductDetails(
            detailsButton.getAttribute(
                "data-modal-add-cart"
            )
        );

        const qtyValue =
            document.querySelector(
                "#productModal .modal-qty-value"
            );

        if (qtyValue && qty) {
            qtyValue.textContent = qty;
        }
    }
}


/* =========================================================
   PRODUCTS
========================================================= */

function renderProducts() {

    const container =
        $("#productsGrid");

    const empty =
        $("#emptyProducts");

    if (!container) {
        return;
    }


    const query =
        searchTerm
            .trim()
            .toLowerCase();


    const filtered =
        products.filter(
            product => {

                if (product.active === false) {
                    return false;
                }

                const categoryMatch =
                    selectedCategory === "all" ||
                    product.category ===
                        selectedCategory;


                const searchMatch =
                    productMatchesQuery(
                        product,
                        query
                    );


                return (
                    categoryMatch &&
                    searchMatch
                );
            }
        );


    if (!filtered.length) {

        container.innerHTML = "";

        if (empty) {
            empty.hidden = false;
        }

        return;
    }


    if (empty) {
        empty.hidden = true;
    }


    container.innerHTML =
        filtered.map(
            product => {

                const name =
                    escapeHTML(
                        getProductName(product)
                    );

                const description =
                    escapeHTML(
                        getProductDescription(product)
                    );

                return `
                    <article class="product-card">

                        <div class="product-image-wrap">

                            <img
                                src="${escapeHTML(resolveImage(product.image))}"
                                alt="${name}"
                                class="product-image"
                                loading="lazy"
                                onerror="if(this.dataset.fallback){this.classList.add('is-missing');return;}this.dataset.fallback='1';this.src='./images/placeholder.jpg';"
                            >

                            <span class="product-category">
                                ${escapeHTML(
                                    getCategoryLabel(
                                        product.category
                                    )
                                )}
                            </span>

                        </div>


                        <div class="product-content">

                            <h3>
                                ${name}
                            </h3>

                            ${getProductMeasureMarkup(
                                product,
                                true
                            )}

                            <p>
                                ${description}
                            </p>


                            <div class="product-bottom">

                                <strong class="product-price">
                                    ${formatMoney(product.price)}
                                </strong>

                                <div class="product-actions">

                                    <button
                                        type="button"
                                        class="product-details-btn"
                                        data-product-details="${escapeHTML(product.id)}"
                                    >
                                        ${t("details")}
                                    </button>

                                    <button
                                        type="button"
                                        class="product-add-btn"
                                        data-add-cart="${escapeHTML(product.id)}"
                                    >
                                        🛒
                                        ${t("addToCart")}
                                    </button>

                                </div>

                            </div>

                        </div>

                    </article>
                `;
            }
        ).join("");
}


/* =========================================================
   CATEGORY FILTER
========================================================= */

function setCategory(category) {

    selectedCategory =
        category || "all";

    $$(".category-btn").forEach(
        button => {

            button.classList.toggle(
                "active",
                button.dataset.category ===
                    selectedCategory
            );
        }
    );

    renderProducts();
}


/* =========================================================
   BRANCHES
========================================================= */

function renderBranches() {

    const container =
        $("#branchGrid");

    if (!container) {
        return;
    }


    const activeBranches =
        branches.filter(
            branch =>
                branch.active !== false
        );


    container.innerHTML =
        activeBranches.map(
            branch => {

                const selected =
                    String(branch.id) ===
                    String(selectedBranchId);

                return `
                    <article
                        class="branch-card ${selected ? "selected" : ""}"
                    >

                        <div class="branch-card-top">

                            <div class="branch-icon">
                                📍
                            </div>

                            ${
                                selected
                                    ? `
                                        <span class="branch-selected-badge">
                                            ✓ ${t("selected")}
                                        </span>
                                    `
                                    : ""
                            }

                        </div>


                        <h3>
                            ${escapeHTML(
                                getBranchName(branch)
                            )}
                        </h3>


                        <div class="branch-info">

                            <p>
                                <span>🏙️</span>
                                ${escapeHTML(
                                    getBranchCity(branch)
                                )}
                            </p>

                            <p>
                                <span>📍</span>
                                ${escapeHTML(
                                    getBranchAddress(branch)
                                )}
                            </p>

                            <p>
                                <span>☎</span>
                                ${escapeHTML(branch.phone)}
                            </p>

                            <p>
                                <span>🕐</span>
                                ${escapeHTML(
                                    branch.workingHours
                                )}
                            </p>

                        </div>


                        <button
                            type="button"
                            class="branch-select-btn ${selected ? "selected" : ""}"
                            data-select-branch="${escapeHTML(branch.id)}"
                        >
                            ${
                                selected
                                    ? `✓ ${t("selected")}`
                                    : t("select")
                            }
                        </button>

                    </article>
                `;
            }
        ).join("");
}


/* =========================================================
   SELECT BRANCH
========================================================= */

function selectBranch(branchId) {

    const branch =
        getBranchById(branchId);

    if (!branch) {
        return;
    }


    selectedBranchId =
        branch.id;


    setStorage(
        STORAGE_KEYS.selectedBranch,
        selectedBranchId
    );


    renderBranches();

    updateCheckoutBranches();


    showToast(
        `${t("branchSelected")} ${getBranchName(branch)}`,
        "success"
    );
}


/* =========================================================
   CHECKOUT BRANCH OPTIONS
========================================================= */

function updateCheckoutBranches() {

    const select =
        $("#checkoutBranch");

    if (!select) {
        return;
    }


    const activeBranches =
        branches.filter(
            branch =>
                branch.active !== false
        );


    select.innerHTML = `
        <option value="">
            ${t("selectBranch")}
        </option>

        ${activeBranches.map(
            branch => `
                <option
                    value="${escapeHTML(branch.id)}"
                    ${
                        String(branch.id) ===
                        String(selectedBranchId)
                            ? "selected"
                            : ""
                    }
                >
                    ${escapeHTML(
                        getBranchName(branch)
                    )}
                </option>
            `
        ).join("")}
    `;
}


/* =========================================================
   CART
========================================================= */

function addToCart(productId, amount) {

    const product =
        getProductById(productId);

    const addQty =
        Math.max(
            1,
            Number(amount) || 1
        );

    if (
        !product ||
        product.active === false
    ) {
        return;
    }


    const item =
        cart.find(
            cartItem =>
                String(cartItem.productId) ===
                String(productId)
        );


    if (item) {

        item.quantity =
            (Number(item.quantity) || 0) +
            addQty;

    } else {

        cart.push({
            productId: product.id,
            quantity: addQty
        });
    }


    saveCart();

    updateCartUI();


    showToast(
        `${getProductName(product)} — ${t("addedToCart")}`,
        "success"
    );
}


function changeCartQuantity(
    productId,
    change
) {

    const item =
        cart.find(
            cartItem =>
                String(cartItem.productId) ===
                String(productId)
        );

    if (!item) {
        return;
    }


    const nextQuantity =
        (Number(item.quantity) || 1) +
        Number(change);


    if (nextQuantity < 1) {
        return;
    }


    item.quantity = nextQuantity;


    saveCart();

    updateCartUI();
}


function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                String(item.productId) !==
                String(productId)
        );


    saveCart();

    updateCartUI();


    showToast(
        t("removedFromCart"),
        "info"
    );
}


function saveCart() {

    setStorage(
        STORAGE_KEYS.cart,
        cart
    );
}


/* =========================================================
   CART TOTALS
========================================================= */

function getCartSubtotal() {

    return cart.reduce(
        (total, item) => {

            const product =
                getProductById(
                    item.productId
                );

            if (!product) {
                return total;
            }

            return (
                total +
                product.price *
                (Number(item.quantity) || 1)
            );
        },
        0
    );
}


function getCartQuantity() {

    return cart.reduce(
        (total, item) =>
            total +
            (Number(item.quantity) || 0),
        0
    );
}


/* =========================================================
   UPDATE CART
========================================================= */

function updateCartUI() {

    const cartItems =
        $("#cartItems");

    const emptyCart =
        $("#emptyCart");

    const cartSummary =
        $("#cartSummary");


    const count =
        getCartQuantity();


    if ($("#cartCount")) {
        $("#cartCount").textContent =
            count;
    }


    if ($("#mobileCartCount")) {
        $("#mobileCartCount").textContent =
            count;
    }


    if (!cartItems) {
        return;
    }


    const validItems =
        cart
            .map(
                item => ({
                    ...item,
                    product:
                        getProductById(
                            item.productId
                        )
                })
            )
            .filter(
                item => item.product
            );


    if (!validItems.length) {

        cartItems.innerHTML = "";

        if (emptyCart) {
            emptyCart.hidden = false;
        }

        if (cartSummary) {
            cartSummary.hidden = true;
        }

    } else {

        if (emptyCart) {
            emptyCart.hidden = true;
        }

        if (cartSummary) {
            cartSummary.hidden = false;
        }


        cartItems.innerHTML =
            validItems.map(
                item => {

                    const product =
                        item.product;

                    return `
                        <div class="cart-item">

                            <img
                                src="${escapeHTML(resolveImage(product.image))}"
                                alt="${escapeHTML(
                                    getProductName(product)
                                )}"
                                onerror="if(this.dataset.fallback){this.classList.add('is-missing');return;}this.dataset.fallback='1';this.src='./images/placeholder.jpg';"
                            >


                            <div class="cart-item-content">

                                <div class="cart-item-top">

                                    <h4 class="cart-item-name">
                                        ${escapeHTML(
                                            getProductName(product)
                                        )}
                                    </h4>

                                    <button
                                        type="button"
                                        class="cart-remove"
                                        data-cart-remove="${escapeHTML(product.id)}"
                                        aria-label="${t("remove")}"
                                    >
                                        ×
                                    </button>

                                </div>


                                <p class="cart-item-unit">
                                    ${formatMoney(product.price)}
                                </p>


                                <div class="quantity-control">

                                    <button
                                        type="button"
                                        data-cart-minus="${escapeHTML(product.id)}"
                                        aria-label="−"
                                    >
                                        −
                                    </button>

                                    <strong>
                                        ${Number(item.quantity) || 1}
                                    </strong>

                                    <button
                                        type="button"
                                        data-cart-plus="${escapeHTML(product.id)}"
                                        aria-label="+"
                                    >
                                        +
                                    </button>

                                </div>


                                <strong class="cart-item-line-total">
                                    ${formatMoney(
                                        product.price *
                                        (Number(item.quantity) || 1)
                                    )}
                                </strong>

                            </div>

                        </div>
                    `;
                }
            ).join("");
    }


    const subtotal =
        getCartSubtotal();

    const total =
        subtotal +
        (subtotal > 0
            ? DELIVERY_PRICE
            : 0);


    if ($("#cartSubtotal")) {

        $("#cartSubtotal").textContent =
            formatMoney(subtotal);
    }


    if ($("#deliveryPrice")) {

        $("#deliveryPrice").textContent =
            formatMoney(
                subtotal > 0
                    ? DELIVERY_PRICE
                    : 0
            );
    }


    if ($("#cartTotal")) {

        $("#cartTotal").textContent =
            formatMoney(total);
    }


    if ($("#checkoutSubtotal")) {

        $("#checkoutSubtotal").textContent =
            formatMoney(subtotal);
    }


    if ($("#checkoutTotal")) {

        $("#checkoutTotal").textContent =
            formatMoney(total);
    }


    if ($("#checkoutDelivery")) {

        $("#checkoutDelivery").textContent =
            formatMoney(DELIVERY_PRICE);
    }
}


/* =========================================================
   CART DRAWER
========================================================= */

function openCart() {

    $("#cartDrawer")
        ?.classList.add("active");

    $("#cartOverlay")
        ?.classList.add("active");

    document.body.classList.add(
        "no-scroll"
    );
}


function closeCart() {

    $("#cartDrawer")
        ?.classList.remove("active");

    $("#cartOverlay")
        ?.classList.remove("active");

    if (
        !document.querySelector(
            ".modal.active, .search-overlay.active"
        )
    ) {
        document.body.classList.remove(
            "no-scroll"
        );
    }
}


/* =========================================================
   MODALS
========================================================= */

function openModal(id) {

    const modal =
        document.getElementById(id);

    if (!modal) {
        return;
    }

    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "no-scroll"
    );
}


function closeModal(id) {

    const modal =
        document.getElementById(id);

    if (!modal) {
        return;
    }

    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    if (
        !$("#cartDrawer")?.classList.contains("active") &&
        !$("#searchOverlay")?.classList.contains("active")
    ) {
        document.body.classList.remove(
            "no-scroll"
        );
    }
}


/* =========================================================
   PRODUCT DETAILS
========================================================= */

function formatMeasure(value) {

    const number =
        Number(value);

    if (!Number.isFinite(number)) {
        return "";
    }

    return String(
        Math.round(number * 1000) / 1000
    );
}


function getProductMeasureText(
    product,
    compact = false
) {

    const weight =
        Number(product?.weightGrams) || null;

    const volume =
        Number(product?.volumeLiters) || null;

    if (product?.category === "drink") {

        if (!volume) {
            return "";
        }

        return compact
            ? `🥤 ${formatMeasure(volume)} ${t("liter")}`
            : `🥤 ${t("volume")}: ${formatMeasure(volume)} ${t("liter")}`;
    }

    if (!weight) {
        return "";
    }

    return compact
        ? `⚖ ${formatMeasure(weight)} ${t("gram")}`
        : `⚖ ${t("weight")}: ${formatMeasure(weight)} ${t("gram")}`;
}


function getProductMeasureMarkup(
    product,
    compact = false
) {

    const text =
        getProductMeasureText(
            product,
            compact
        );

    if (!text) {
        return "";
    }

    return `
        <span class="${
            compact
                ? "product-measure"
                : "product-meta-info"
        }">
            ${escapeHTML(text)}
        </span>
    `;
}


function openProductDetails(productId) {

    const product =
        getProductById(productId);

    const container =
        $("#productModalContent");

    if (
        !product ||
        !container
    ) {
        return;
    }


    container.innerHTML = `

        <div class="product-modal-grid">

            <div class="product-modal-image">

                <img
                    src="${escapeHTML(resolveImage(product.image))}"
                    alt="${escapeHTML(
                        getProductName(product)
                    )}"
                    onerror="if(this.dataset.fallback){this.classList.add('is-missing');return;}this.dataset.fallback='1';this.src='./images/placeholder.jpg';"
                >

            </div>


            <div class="product-modal-info">

                <span class="product-modal-category">
                    ${escapeHTML(
                        getCategoryLabel(
                            product.category
                        )
                    )}
                </span>


                <h2>
                    ${escapeHTML(
                        getProductName(product)
                    )}
                </h2>


                <p>
                    ${escapeHTML(
                        getProductDescription(product)
                    )}
                </p>


                ${getProductMeasureMarkup(product)}


                <strong class="product-modal-price">
                    ${formatMoney(product.price)}
                </strong>


                <div class="product-modal-actions">

                    <div class="modal-qty">

                        <button
                            type="button"
                            data-modal-qty="minus"
                            aria-label="−"
                        >
                            −
                        </button>

                        <strong class="modal-qty-value">
                            1
                        </strong>

                        <button
                            type="button"
                            data-modal-qty="plus"
                            aria-label="+"
                        >
                            +
                        </button>

                    </div>


                    <button
                        type="button"
                        class="btn btn-primary product-modal-add"
                        data-modal-add-cart="${escapeHTML(product.id)}"
                    >
                        🛒 ${t("addToCart")}
                    </button>

                </div>

            </div>

        </div>
    `;


    openModal(
        "productModal"
    );
}


/* =========================================================
   CHECKOUT
========================================================= */

function openCheckout() {

    if (!cart.length) {

        showToast(
            t("emptyCartError"),
            "error"
        );

        return;
    }


    closeCart();

    updateCheckoutBranches();

    updateCartUI();

    openModal(
        "checkoutModal"
    );
}


/* =========================================================
   PHONE VALIDATION
========================================================= */

function normalizePhone(phone) {

    return String(phone || "")
        .replace(/[^\d+]/g, "");
}


function isValidPhone(phone) {

    const compact =
        String(phone || "")
            .replace(/[\s\-()]/g, "");

    return (
        /^\+992\d{9}$/.test(compact) ||
        /^992\d{9}$/.test(compact) ||
        /^\d{9}$/.test(compact)
    );
}


/* =========================================================
   FIELD ERROR
========================================================= */

function setFieldError(
    field,
    message = ""
) {

    if (!field) {
        return;
    }


    const group =
        field.closest(".form-group");

    const error =
        group?.querySelector(
            ".field-error"
        );


    field.classList.toggle(
        "error",
        Boolean(message)
    );


    if (error) {
        error.textContent =
            message;
    }
}


function clearFormErrors() {

    $$("#checkoutForm .field-error")
        .forEach(
            error => {
                error.textContent = "";
            }
        );


    $$("#checkoutForm .error")
        .forEach(
            field => {
                field.classList.remove(
                    "error"
                );
            }
        );
}


/* =========================================================
   ORDER ID
========================================================= */

function createOrderId() {

    const year =
        new Date().getFullYear();


    let maxNumber = 0;


    orders.forEach(
        order => {

            const match =
                String(
                    order.id ||
                    order.orderId ||
                    ""
                ).match(
                    /TFC-\d{4}-(\d+)/
                );


            if (match) {

                maxNumber =
                    Math.max(
                        maxNumber,
                        Number(match[1]) || 0
                    );
            }
        }
    );


    const next =
        String(maxNumber + 1)
            .padStart(4, "0");


    return `TFC-${year}-${next}`;
}


/* =========================================================
   PAYMENT LABEL
========================================================= */

function getPaymentLabel(value) {

    const normalized =
        String(value || "")
            .toLowerCase();


    if (
        normalized === "cash" ||
        normalized.includes("нақд") ||
        normalized.includes("налич")
    ) {
        return t("cash");
    }


    if (
        normalized === "card_on_delivery" ||
        normalized.includes("корт") ||
        normalized.includes("карт")
    ) {
        return t("cardOnDelivery");
    }


    return value || t("cash");
}


/* =========================================================
   STATUS
========================================================= */

function normalizeStatus(status) {

    const value =
        String(status || "")
            .trim()
            .toLowerCase();


    if (
        value === "new" ||
        value === "нав" ||
        value === "новый"
    ) {
        return "new";
    }


    if (
        value === "preparing" ||
        value === "тайёр мешавад" ||
        value === "готовится"
    ) {
        return "preparing";
    }


    if (
        value === "ready" ||
        value === "тайёр" ||
        value === "готов"
    ) {
        return "ready";
    }


    if (
        value === "delivered" ||
        value === "расонида шуд" ||
        value === "доставлен"
    ) {
        return "delivered";
    }


    if (
        value === "cancelled" ||
        value === "canceled" ||
        value === "бекор шуд" ||
        value === "отменён" ||
        value === "отменен"
    ) {
        return "cancelled";
    }


    return "new";
}


function getStatusLabel(status) {

    const normalized =
        normalizeStatus(status);


    const keys = {
        new: "statusNew",
        preparing: "statusPreparing",
        ready: "statusReady",
        delivered: "statusDelivered",
        cancelled: "statusCancelled"
    };


    return t(
        keys[normalized] ||
        "statusNew"
    );
}


function getStatusClass(status) {

    return `status-${normalizeStatus(status)}`;
}


/* =========================================================
   SUBMIT ORDER
========================================================= */

function submitOrder(event) {

    event.preventDefault();

    clearFormErrors();


    if (!cart.length) {

        showToast(
            t("emptyCartError"),
            "error"
        );

        return;
    }


    const nameField =
        $("#customerName");

    const phoneField =
        $("#customerPhone");

    const branchField =
        $("#checkoutBranch");

    const addressField =
        $("#customerAddress");

    const commentField =
        $("#customerComment");


    const name =
        nameField?.value.trim() || "";

    const phone =
        phoneField?.value.trim() || "";

    const branchId =
        branchField?.value || "";

    const address =
        addressField?.value.trim() || "";

    const comment =
        commentField?.value.trim() || "";


    let valid = true;


    if (name.length < 2) {

        setFieldError(
            nameField,
            t("fillName")
        );

        valid = false;
    }


    if (!isValidPhone(phone)) {

        setFieldError(
            phoneField,
            t("invalidPhone")
        );

        valid = false;
    }


    if (!branchId) {

        setFieldError(
            branchField,
            t("chooseBranchError")
        );

        valid = false;
    }


    if (address.length < 3) {

        setFieldError(
            addressField,
            t("fillAddress")
        );

        valid = false;
    }


    if (!valid) {
        return;
    }


    const branch =
        getBranchById(branchId);


    if (!branch) {

        showToast(
            t("chooseBranchError"),
            "error"
        );

        return;
    }


    const payment =
        document.querySelector(
            'input[name="payment"]:checked'
        )?.value || "cash";


    const orderItems =
        cart.map(
            item => {

                const product =
                    getProductById(
                        item.productId
                    );

                return {
                    id:
                        product?.id ||
                        item.productId,

                    productId:
                        product?.id ||
                        item.productId,

                    name:
                        product?.name ||
                        "",

                    price:
                        Number(
                            product?.price
                        ) || 0,

                    quantity:
                        Number(
                            item.quantity
                        ) || 1,

                    image:
                        product?.image ||
                        "./images/placeholder.jpg"
                };
            }
        );


    const subtotal =
        getCartSubtotal();

    const total =
        subtotal +
        DELIVERY_PRICE;


    const order = {

        id:
            createOrderId(),

        customerName:
            name,

        phone:
            normalizePhone(phone),

        customerPhone:
            normalizePhone(phone),

        address,

        branchId:
            branch.id,

        branchName:
            branch.name,

        branch: {
            id:
                branch.id,

            name:
                branch.name
        },

        payment,

        paymentMethod:
            payment,

        comment,

        note:
            comment,

        items:
            orderItems,

        subtotal,

        deliveryFee:
            DELIVERY_PRICE,

        delivery:
            DELIVERY_PRICE,

        total,

        status:
            "Нав",

        statusKey:
            "new",

        createdAt:
            new Date().toISOString()
    };


    orders.push(order);


    setStorage(
        STORAGE_KEYS.orders,
        orders
    );


    selectedBranchId =
        branch.id;


    setStorage(
        STORAGE_KEYS.selectedBranch,
        selectedBranchId
    );


    cart = [];


    saveCart();

    updateCartUI();

    renderBranches();


    if ($("#successOrderId")) {

        $("#successOrderId").textContent =
            order.id;
    }


    if ($("#successBranch")) {

        $("#successBranch").textContent =
            getBranchName(branch);
    }


    if ($("#successTotal")) {

        $("#successTotal").textContent =
            formatMoney(total);
    }


    const successStatus =
        $("#successOrderStatus");


    if (successStatus) {

        successStatus.textContent =
            getStatusLabel(order.status);

        successStatus.className =
            getStatusClass(order.status);
    }


    closeModal(
        "checkoutModal"
    );


    openModal(
        "successModal"
    );


    $("#checkoutForm")?.reset();


    updateCheckoutBranches();


    showToast(
        t("orderSaved"),
        "success"
    );
}


/* =========================================================
   TRACK ORDER
========================================================= */

function trackOrder() {

    const input =
        $("#trackingInput");

    const result =
        $("#trackingResult");


    if (
        !input ||
        !result
    ) {
        return;
    }


    const orderId =
        input.value
            .trim()
            .toUpperCase();


    if (!orderId) {

        result.innerHTML = `
            <div class="tracking-message error">
                ${t("enterTracking")}
            </div>
        `;

        return;
    }


    const order =
        orders.find(
            item =>
                String(
                    item.id ||
                    item.orderId ||
                    ""
                ).toUpperCase() ===
                orderId
        );


    if (!order) {

        result.innerHTML = `
            <div class="tracking-message error">
                ❌ ${t("orderNotFound")}
            </div>
        `;

        return;
    }


    const branch =
        getBranchById(
            order.branchId ||
            order.branch?.id
        );


    const branchName =
        branch
            ? getBranchName(branch)
            : getLocalizedValue(
                order.branchName ||
                order.branch?.name,
                "-"
            );


    result.innerHTML = `

        <div class="tracking-order-card">

            <div class="tracking-order-head">

                <div>

                    <span>
                        ${t("orderNumber")}
                    </span>

                    <strong>
                        ${escapeHTML(
                            order.id ||
                            order.orderId
                        )}
                    </strong>

                </div>


                <span
                    class="order-status ${getStatusClass(order.status)}"
                >
                    ${getStatusLabel(order.status)}
                </span>

            </div>


            <div class="tracking-order-grid">

                <div>
                    <span>
                        ${t("branch")}
                    </span>

                    <strong>
                        ${escapeHTML(branchName)}
                    </strong>
                </div>


                <div>
                    <span>
                        ${t("total")}
                    </span>

                    <strong>
                        ${formatMoney(order.total)}
                    </strong>
                </div>


                <div>
                    <span>
                        ${t("orderDate")}
                    </span>

                    <strong>
                        ${formatDateTime(order.createdAt)}
                    </strong>
                </div>


                <div>
                    <span>
                        ${t("payment")}
                    </span>

                    <strong>
                        ${escapeHTML(
                            getPaymentLabel(
                                order.payment ||
                                order.paymentMethod
                            )
                        )}
                    </strong>
                </div>

            </div>

        </div>
    `;
}


/* =========================================================
   GLOBAL SEARCH
========================================================= */

function openSearch() {

    const overlay =
        $("#searchOverlay");

    if (!overlay) {
        return;
    }


    overlay.classList.add(
        "active"
    );


    document.body.classList.add(
        "no-scroll"
    );


    setTimeout(
        () => {

            $("#globalSearchInput")
                ?.focus();
        },
        100
    );


    renderGlobalSearch(
        $("#globalSearchInput")?.value || ""
    );
}


function closeSearch() {

    $("#searchOverlay")
        ?.classList.remove(
            "active"
        );


    if (
        !$("#cartDrawer")?.classList.contains("active") &&
        !document.querySelector(".modal.active")
    ) {

        document.body.classList.remove(
            "no-scroll"
        );
    }
}


function renderGlobalSearch(value = "") {

    const container =
        $("#globalSearchResults");

    if (!container) {
        return;
    }


    const query =
        value
            .trim()
            .toLowerCase();


    if (!query) {

        container.innerHTML = "";

        return;
    }


    const results =
        products
            .filter(
                product => {

                    if (product.active === false) {
                        return false;
                    }


                    return productMatchesQuery(
                        product,
                        query
                    );
                }
            )
            .slice(0, 8);


    if (!results.length) {

        container.innerHTML = `
            <div class="search-empty">
                🔎 ${t("noSearchResults")}
            </div>
        `;

        return;
    }


    container.innerHTML =
        results.map(
            product => `
                <button
                    type="button"
                    class="search-result-item"
                    data-search-product="${escapeHTML(product.id)}"
                >

                    <img
                        src="${escapeHTML(resolveImage(product.image))}"
                        alt="${escapeHTML(
                            getProductName(product)
                        )}"
                        onerror="if(this.dataset.fallback){this.classList.add('is-missing');return;}this.dataset.fallback='1';this.src='./images/placeholder.jpg';"
                    >

                    <span>

                        <strong>
                            ${escapeHTML(
                                getProductName(product)
                            )}
                        </strong>

                        <small>
                            ${formatMoney(product.price)}
                        </small>

                    </span>

                </button>
            `
        ).join("");
}


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMobileMenu() {

    const menu =
        $("#mobileMenu");

    const button =
        $("#mobileMenuBtn");

    if (!menu) {
        return;
    }


    const active =
        menu.classList.toggle(
            "active"
        );


    button?.setAttribute(
        "aria-expanded",
        String(active)
    );
}


function closeMobileMenu() {

    $("#mobileMenu")
        ?.classList.remove(
            "active"
        );


    $("#mobileMenuBtn")
        ?.setAttribute(
            "aria-expanded",
            "false"
        );
}


/* =========================================================
   HEADER SCROLL
========================================================= */

function handleScroll() {

    const header =
        $("#siteHeader");

    const scrollTop =
        $("#scrollTopBtn");


    header?.classList.toggle(
        "scrolled",
        window.scrollY > 20
    );


    scrollTop?.classList.toggle(
        "visible",
        window.scrollY > 500
    );
}


/* =========================================================
   ACTIVE NAV
========================================================= */

function updateActiveNavigation() {

    const sections =
        [
            "home",
            "menu",
            "promotions",
            "about",
            "branches",
            "contact"
        ];


    let current =
        "home";


    sections.forEach(
        id => {

            const section =
                document.getElementById(id);

            if (!section) {
                return;
            }


            const rect =
                section.getBoundingClientRect();


            if (rect.top <= 160) {
                current = id;
            }
        }
    );


    $$(".desktop-nav .nav-link")
        .forEach(
            link => {

                link.classList.toggle(
                    "active",
                    link.getAttribute("href") ===
                        `#${current}`
                );
            }
        );


    $$(".mobile-bottom-item")
        .forEach(
            link => {

                link.classList.toggle(
                    "active",
                    link.getAttribute("href") ===
                        `#${current}`
                );
            }
        );
}


/* =========================================================
   TOAST
========================================================= */

function showToast(
    message,
    type = "info"
) {

    const container =
        $("#toastContainer");

    if (!container) {
        return;
    }


    const toast =
        document.createElement("div");


    toast.className =
        `toast ${type}`;


    const iconMap = {
        success: "✓",
        error: "!",
        warning: "⚠",
        info: "i"
    };


    toast.innerHTML = `
        <span class="toast-icon">
            ${iconMap[type] || "i"}
        </span>

        <span class="toast-message">
            ${escapeHTML(message)}
        </span>
    `;


    container.appendChild(
        toast
    );


    requestAnimationFrame(
        () => {
            toast.classList.add(
                "show"
            );
        }
    );


    setTimeout(
        () => {

            toast.classList.remove(
                "show"
            );


            setTimeout(
                () => {
                    toast.remove();
                },
                300
            );

        },
        3000
    );
}


/* =========================================================
   DOCUMENT CLICK
========================================================= */

function handleDocumentClick(event) {

    const languageButton =
        event.target.closest(
            "[data-lang]"
        );


    if (languageButton) {

        setLanguage(
            languageButton.dataset.lang
        );

        return;
    }


    const addButton =
        event.target.closest(
            "[data-add-cart]"
        );


    if (addButton) {

        addToCart(
            addButton.dataset.addCart
        );

        return;
    }


    const detailsButton =
        event.target.closest(
            "[data-product-details]"
        );


    if (detailsButton) {

        openProductDetails(
            detailsButton.dataset.productDetails
        );

        return;
    }


    const modalQty =
        event.target.closest(
            "[data-modal-qty]"
        );


    if (modalQty) {

        const value =
            document.querySelector(
                "#productModal .modal-qty-value"
            );

        if (!value) {
            return;
        }

        let next =
            Number(value.textContent) || 1;

        next +=
            modalQty.dataset.modalQty === "plus"
                ? 1
                : -1;

        if (next < 1) {
            next = 1;
        }

        value.textContent =
            String(next);

        return;
    }


    const modalAdd =
        event.target.closest(
            "[data-modal-add-cart]"
        );


    if (modalAdd) {

        const modalQtyValue =
            Number(
                document.querySelector(
                    "#productModal .modal-qty-value"
                )?.textContent
            ) || 1;

        addToCart(
            modalAdd.dataset.modalAddCart,
            modalQtyValue
        );


        closeModal(
            "productModal"
        );

        return;
    }


    const plus =
        event.target.closest(
            "[data-cart-plus]"
        );


    if (plus) {

        changeCartQuantity(
            plus.dataset.cartPlus,
            1
        );

        return;
    }


    const minus =
        event.target.closest(
            "[data-cart-minus]"
        );


    if (minus) {

        changeCartQuantity(
            minus.dataset.cartMinus,
            -1
        );

        return;
    }


    const remove =
        event.target.closest(
            "[data-cart-remove]"
        );


    if (remove) {

        removeFromCart(
            remove.dataset.cartRemove
        );

        return;
    }


    const branchButton =
        event.target.closest(
            "[data-select-branch]"
        );


    if (branchButton) {

        selectBranch(
            branchButton.dataset.selectBranch
        );

        return;
    }


    const closeButton =
        event.target.closest(
            "[data-close-modal]"
        );


    if (closeButton) {

        closeModal(
            closeButton.dataset.closeModal
        );

        return;
    }


    const searchProduct =
        event.target.closest(
            "[data-search-product]"
        );


    if (searchProduct) {

        const id =
            searchProduct.dataset.searchProduct;


        closeSearch();


        openProductDetails(id);
    }
}


/* =========================================================
   STORAGE SYNC
========================================================= */

function handleStorageChange(event) {

    if (
        event.key ===
        STORAGE_KEYS.products
    ) {

        const data =
            getStorage(
                STORAGE_KEYS.products,
                []
            );


        if (Array.isArray(data)) {

            products =
                data.map(
                    normalizeProduct
                );

            renderProducts();

            updateCartUI();
        }
    }


    if (
        event.key ===
        STORAGE_KEYS.branches
    ) {

        const data =
            getStorage(
                STORAGE_KEYS.branches,
                []
            );


        if (Array.isArray(data)) {

            branches =
                data.map(
                    normalizeBranch
                );

            renderBranches();

            updateCheckoutBranches();
        }
    }


    if (
        event.key ===
        STORAGE_KEYS.orders
    ) {

        const data =
            getStorage(
                STORAGE_KEYS.orders,
                []
            );


        if (Array.isArray(data)) {

            orders = data;


            if (
                $("#trackingInput")
                    ?.value
                    .trim()
            ) {
                trackOrder();
            }
        }
    }


    if (
        event.key ===
        STORAGE_KEYS.cart
    ) {

        const data =
            getStorage(
                STORAGE_KEYS.cart,
                []
            );


        if (Array.isArray(data)) {

            cart = data;

            updateCartUI();
        }
    }


    if (
        event.key ===
        STORAGE_KEYS.language
    ) {

        const language =
            localStorage.getItem(
                STORAGE_KEYS.language
            );


        if (
            ["tg", "ru"].includes(language)
        ) {

            currentLanguage =
                language;

            applyStaticTranslations();

            renderProducts();

            renderBranches();

            updateCheckoutBranches();

            updateCartUI();
        }
    }
}


/* =========================================================
   CLEAN CART
========================================================= */

function cleanCart() {

    const validIds =
        new Set(
            products.map(
                product =>
                    String(product.id)
            )
        );


    cart =
        cart
            .filter(
                item =>
                    validIds.has(
                        String(item.productId)
                    )
            )
            .map(
                item => ({
                    productId:
                        item.productId,

                    quantity:
                        Math.max(
                            1,
                            Number(
                                item.quantity
                            ) || 1
                        )
                })
            );


    saveCart();
}


/* =========================================================
   EVENTS
========================================================= */

function bindEvents() {

    document.addEventListener(
        "click",
        handleDocumentClick
    );


    $$(".category-btn")
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        setCategory(
                            button.dataset.category
                        );
                    }
                );
            }
        );


    $("#menuSearch")
        ?.addEventListener(
            "input",
            event => {

                searchTerm =
                    event.target.value;

                renderProducts();
            }
        );


    $("#openCartBtn")
        ?.addEventListener(
            "click",
            openCart
        );


    $("#mobileCartBtn")
        ?.addEventListener(
            "click",
            openCart
        );


    $("#closeCartBtn")
        ?.addEventListener(
            "click",
            closeCart
        );


    $("#cartOverlay")
        ?.addEventListener(
            "click",
            closeCart
        );


    $("#checkoutBtn")
        ?.addEventListener(
            "click",
            openCheckout
        );


    $("#heroOrderBtn")
        ?.addEventListener(
            "click",
            () => {

                document
                    .getElementById("menu")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });
            }
        );


    $("#emptyCartMenuBtn")
        ?.addEventListener(
            "click",
            () => {

                closeCart();

                document
                    .getElementById("menu")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });
            }
        );


    $("#checkoutForm")
        ?.addEventListener(
            "submit",
            submitOrder
        );


    $("#checkoutBranch")
        ?.addEventListener(
            "change",
            event => {

                const value =
                    event.target.value;


                if (!value) {
                    return;
                }


                selectedBranchId =
                    value;


                setStorage(
                    STORAGE_KEYS.selectedBranch,
                    selectedBranchId
                );


                renderBranches();
            }
        );


    $("#successCloseBtn")
        ?.addEventListener(
            "click",
            () => {

                closeModal(
                    "successModal"
                );
            }
        );


    $("#successTrackBtn")
        ?.addEventListener(
            "click",
            () => {

                const orderId =
                    $("#successOrderId")
                        ?.textContent
                        .trim() || "";

                closeModal(
                    "successModal"
                );

                const input =
                    $("#trackingInput");

                if (
                    input &&
                    orderId &&
                    orderId !== "-"
                ) {
                    input.value = orderId;
                }

                document
                    .getElementById("tracking")
                    ?.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                if (
                    orderId &&
                    orderId !== "-"
                ) {
                    trackOrder();
                }
            }
        );


    $("#trackOrderBtn")
        ?.addEventListener(
            "click",
            trackOrder
        );


    $("#trackingInput")
        ?.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter"
                ) {

                    event.preventDefault();

                    trackOrder();
                }
            }
        );


    $("#openSearchBtn")
        ?.addEventListener(
            "click",
            openSearch
        );


    $("#closeSearchBtn")
        ?.addEventListener(
            "click",
            closeSearch
        );


    $("#globalSearchInput")
        ?.addEventListener(
            "input",
            event => {

                renderGlobalSearch(
                    event.target.value
                );
            }
        );


    $("#mobileMenuBtn")
        ?.addEventListener(
            "click",
            toggleMobileMenu
        );


    $$("#mobileMenu a")
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    closeMobileMenu
                );
            }
        );


    $("#scrollTopBtn")
        ?.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        );


    window.addEventListener(
        "scroll",
        () => {

            handleScroll();

            updateActiveNavigation();
        },
        {
            passive: true
        }
    );


    window.addEventListener(
        "storage",
        handleStorageChange
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key !== "Escape"
            ) {
                return;
            }


            closeCart();

            closeSearch();


            $$(".modal.active")
                .forEach(
                    modal => {

                        closeModal(
                            modal.id
                        );
                    }
                );


            closeMobileMenu();
        }
    );
}


/* =========================================================
   YEAR
========================================================= */

function setCurrentYear() {

    const element =
        $("#currentYear");

    if (element) {

        element.textContent =
            new Date().getFullYear();
    }
}


/* =========================================================
   LOADER
========================================================= */

function hideLoader() {

    const loader =
        $("#pageLoader");

    if (!loader) {
        return;
    }


    setTimeout(
        () => {

            loader.classList.add(
                "hidden"
            );


            setTimeout(
                () => {
                    loader.remove();
                },
                500
            );

        },
        350
    );
}


/* =========================================================
   INITIAL RENDER
========================================================= */

function initialRender() {

    cleanCart();

    applyStaticTranslations();

    renderProducts();

    renderBranches();

    updateCheckoutBranches();

    updateCartUI();

    setCurrentYear();

    handleScroll();

    updateActiveNavigation();
}


/* =========================================================
   INIT
========================================================= */

function init() {

    initializeData();

    initialRender();

    bindEvents();

    hideLoader();


    console.log(
        "%cTFC Demo TG / RU",
        "font-size:20px;font-weight:bold;color:#e50914;"
    );


    console.log(
        "Demo version — Nurullo Coding"
    );
}


/* =========================================================
   START
========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        init
    );

} else {

    init();
}