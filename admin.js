"use strict";

/* =========================================================
   TFC ADMIN PANEL
   TG / RU
   Demo version — Nurullo Coding
========================================================= */


/* =========================================================
   STORAGE KEYS
========================================================= */

const STORAGE_KEYS = {
    products: "tfcProducts",
    cart: "tfcCart",
    orders: "tfcOrders",
    branches: "tfcBranches",
    selectedBranch: "tfcSelectedBranch",
    language: "tfcLanguage"
};


/* =========================================================
   CONFIG
========================================================= */

const DELIVERY_PRICE = 10;

const ORDER_STATUSES = [
    "new",
    "preparing",
    "ready",
    "delivered",
    "cancelled"
];


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    tg: {

        administrator: "Администратор",

        dashboard: "Асосӣ",
        orders: "Фармоишҳо",
        newOrders: "Фармоишҳои нав",
        menu: "Меню",
        branches: "Филиалҳо",
        reports: "Ҳисобот",

        openWebsite: "Кушодани сайт",
        openMenu: "Кушодани меню",
        closeMenu: "Пӯшидани меню",
        close: "Пӯшидан",

        search: "Ҷустуҷӯ...",
        refresh: "Нав кардани маълумот",
        notifications: "Огоҳиномаҳо",

        welcomeDashboard:
            "Хуш омадед ба панели идоракунии TFC",

        ordersSubtitle:
            "Идоракунии ҳамаи фармоишҳои муштариён",

        newOrdersSubtitle:
            "Фармоишҳои нави муштариён",

        productsSubtitle:
            "Идоракунии меню ва маҳсулот",

        branchesSubtitle:
            "Идоракунии филиалҳои TFC",

        reportsSubtitle:
            "Омор ва ҳисоботи TFC",

        totalOrders: "Ҳамаи фармоишҳо",
        revenue: "Даромад",
        products: "Маҳсулот",

        recentOrders: "Фармоишҳои охирин",

        recentOrdersDescription:
            "Фармоишҳои охирини муштариён",

        viewAll: "Ҳамаашро дидан",

        orderNumber: "№ Фармоиш",
        customer: "Муштарӣ",
        branch: "Филиал",
        amount: "Маблағ",
        status: "Ҳолат",
        date: "Сана",
        phone: "Телефон",
        actions: "Амал",

        noOrders: "Фармоиш нест",

        newOrdersWillAppear:
            "Фармоишҳои нав дар ин ҷо пайдо мешаванд.",

        orderStatuses: "Ҳолати фармоишҳо",
        statusStatistics: "Омори фармоишҳо",

        statusNew: "Нав",
        statusPreparing: "Тайёр мешавад",
        statusReady: "Тайёр",
        statusDelivered: "Расонида шуд",
        statusCancelled: "Бекор шуд",

        branchStatistics: "Омори филиалҳо",

        branchStatisticsDescription:
            "Фармоиш ва даромад аз рӯйи филиал",

        allOrders: "Ҳамаи фармоишҳо",

        manageOrders:
            "Фармоишҳои муштариёнро идора кунед",

        exportCsv: "CSV",

        orderSearchPlaceholder:
            "Рақами фармоиш, ном ё телефон...",

        allStatuses: "Ҳамаи ҳолатҳо",
        allBranches: "Ҳамаи филиалҳо",

        clear: "Тоза кардан",

        ordersNotFound: "Фармоиш ёфт нашуд",

        changeFilters:
            "Филтр ё ҷустуҷӯро тағйир диҳед.",

        newOrdersDescription:
            "Фармоишҳое, ки ҳанӯз қабул нашудаанд",

        total: "Ҳамагӣ:",

        noNewOrders: "Фармоиши нав нест",

        newOrdersAppearHere:
            "Вақте муштарӣ фармоиш медиҳад, он дар ин ҷо пайдо мешавад.",

        menuManagement: "Идоракунии меню",

        menuManagementDescription:
            "Маҳсулотро илова, таҳрир ё ғайрифаъол кунед",

        addProduct: "Иловаи маҳсулот",

        productSearch:
            "Ҷустуҷӯи маҳсулот...",

        allCategories: "Ҳамаи категорияҳо",

        categoryChicken: "Мурғ",
        categoryFish: "Моҳӣ",
        categoryBurger: "Бургер",
        categoryCombo: "Комбо",
        categoryDrink: "Нӯшокиҳо",
        categoryOther: "Дигар",

        active: "Фаъол",
        inactive: "Ғайрифаъол",

        productsNotFound:
            "Маҳсулот ёфт нашуд",

        changeSearch:
            "Ҷустуҷӯ ё филтрро тағйир диҳед.",

        branchManagement:
            "Идоракунии филиалҳо",

        branchManagementDescription:
            "Маълумоти филиалҳои TFC",

        addBranch: "Иловаи филиал",
        noBranches: "Филиал нест",

        reportsDescription:
            "Омори фармоиш ва даромади TFC",

        print: "Чоп",

        allTime: "Ҳама",
        today: "Имрӯз",
        week: "Ҳафта",
        month: "Моҳ",

        averageOrder: "Миёнаи фармоиш",
        deliveredOrders: "Расонида шуд",

        salesSevenDays:
            "Фурӯш — 7 рӯзи охир",

        deliveredRevenue:
            "Даромад аз фармоишҳои расонидашуда",

        branchResults:
            "Натиҷаи ҳар филиал",

        topProducts:
            "Маҳсулоти серхаридор",

        topProductsDescription:
            "Маҳсулот аз рӯйи миқдори фурӯш",

        product: "Маҳсулот",
        quantity: "Миқдор",

        price: "Нарх",
        category: "Категория",
        imagePath: "Роҳи расм",
        imageExample: "Мисол: ./images/chicken-1.jpg",
        phonePlaceholder: "+992 XX XXX XX XX",
        weightGrams: "Вазн (грамм)",
        volumeLiters: "Ҳаҷм (литр)",
        weight: "Вазн",
        volume: "Ҳаҷм",
        gram: "г",
        liter: "л",

        productActive:
            "Маҳсулот фаъол бошад",

        branchActive:
            "Филиал фаъол бошад",

        workingHours: "Соатҳои корӣ",

        cancel: "Бекор кардан",
        save: "Сабт кардан",
        delete: "Нест кардан",
        edit: "Таҳрир",
        view: "Дидан",

        deleteConfirmation:
            "Нест кардан?",

        areYouSure:
            "Оё мутмаин ҳастед?",

        addProductTitle:
            "Иловаи маҳсулот",

        editProductTitle:
            "Таҳрири маҳсулот",

        addBranchTitle:
            "Иловаи филиал",

        editBranchTitle:
            "Таҳрири филиал",

        order: "Фармоиш",

        orderDetails:
            "Маълумоти фармоиш",

        customerInfo:
            "Маълумоти муштарӣ",

        orderItems:
            "Маҳсулоти фармоиш",

        address: "Суроға",
        comment: "Шарҳ",
        payment: "Пардохт",

        cash: "Нақдӣ",

        cardOnDelivery:
            "Корт ҳангоми қабул",

        subtotal:
            "Маблағи маҳсулот",

        delivery:
            "Расонидан",

        changeStatus:
            "Тағйири ҳолат",

        acceptOrder:
            "Қабул кардан",

        orderAccepted:
            "Фармоиш қабул шуд.",

        statusUpdated:
            "Ҳолати фармоиш нав шуд.",

        productSaved:
            "Маҳсулот сабт шуд.",

        productDeleted:
            "Маҳсулот нест карда шуд.",

        productStatusUpdated:
            "Ҳолати маҳсулот нав шуд.",

        branchSaved:
            "Филиал сабт шуд.",

        branchDeleted:
            "Филиал нест карда шуд.",

        branchStatusUpdated:
            "Ҳолати филиал нав шуд.",

        dataRefreshed:
            "Маълумот нав карда шуд.",

        csvExported:
            "CSV омода шуд.",

        requiredFields:
            "Майдонҳои ҳатмиро пур кунед.",

        invalidPrice:
            "Нархро дуруст ворид кунед.",

        weightRequired:
            "Вазни маҳсулотро ворид кунед.",

        volumeRequired:
            "Ҳаҷми нӯшокиро ворид кунед.",

        productDeleteQuestion:
            "Ин маҳсулот нест карда шавад?",

        branchDeleteQuestion:
            "Ин филиал нест карда шавад?",

        unknownCustomer:
            "Муштарӣ",

        noAddress:
            "Суроға нишон дода нашудааст",

        noComment:
            "Шарҳ нест",

        unknownBranch:
            "Филиал муайян нест",

        ordersCount: "Фармоиш",
        deliveredCount: "Расонида",

        somoni: "сомонӣ",

        noData: "Маълумот нест",

        report: "Ҳисобот",

        generated:
            "Санаи таҳияи ҳисобот",

        demoNotice:
            "Demo version — Nurullo Coding",

        languageChanged:
            "Забон иваз шуд.",

        productNameTgRequired:
            "Номи маҳсулот ба тоҷикӣ ҳатмист.",

        productNameRuRequired:
            "Номи маҳсулот ба русӣ ҳатмист.",

        branchNameRequired:
            "Номи филиалро ворид кунед.",

        searchNoResult:
            "Натиҷа ёфт нашуд.",

        notificationOrders:
            "фармоиши нав",

        item: "дона"
    },


    ru: {

        administrator: "Администратор",

        dashboard: "Главная",
        orders: "Заказы",
        newOrders: "Новые заказы",
        menu: "Меню",
        branches: "Филиалы",
        reports: "Отчёты",

        openWebsite: "Открыть сайт",
        openMenu: "Открыть меню",
        closeMenu: "Закрыть меню",
        close: "Закрыть",

        search: "Поиск...",
        refresh: "Обновить данные",
        notifications: "Уведомления",

        welcomeDashboard:
            "Добро пожаловать в панель управления TFC",

        ordersSubtitle:
            "Управление всеми заказами клиентов",

        newOrdersSubtitle:
            "Новые заказы клиентов",

        productsSubtitle:
            "Управление меню и товарами",

        branchesSubtitle:
            "Управление филиалами TFC",

        reportsSubtitle:
            "Статистика и отчёты TFC",

        totalOrders: "Все заказы",
        revenue: "Выручка",
        products: "Товары",

        recentOrders: "Последние заказы",

        recentOrdersDescription:
            "Последние заказы клиентов",

        viewAll: "Посмотреть все",

        orderNumber: "№ Заказа",
        customer: "Клиент",
        branch: "Филиал",
        amount: "Сумма",
        status: "Статус",
        date: "Дата",
        phone: "Телефон",
        actions: "Действия",

        noOrders: "Заказов нет",

        newOrdersWillAppear:
            "Новые заказы появятся здесь.",

        orderStatuses:
            "Статусы заказов",

        statusStatistics:
            "Статистика заказов",

        statusNew: "Новый",
        statusPreparing: "Готовится",
        statusReady: "Готов",
        statusDelivered: "Доставлен",
        statusCancelled: "Отменён",

        branchStatistics:
            "Статистика филиалов",

        branchStatisticsDescription:
            "Заказы и выручка по филиалам",

        allOrders: "Все заказы",

        manageOrders:
            "Управляйте заказами клиентов",

        exportCsv: "CSV",

        orderSearchPlaceholder:
            "Номер заказа, имя или телефон...",

        allStatuses: "Все статусы",
        allBranches: "Все филиалы",

        clear: "Очистить",

        ordersNotFound:
            "Заказы не найдены",

        changeFilters:
            "Измените фильтр или поисковый запрос.",

        newOrdersDescription:
            "Заказы, которые ещё не приняты",

        total: "Всего:",

        noNewOrders:
            "Новых заказов нет",

        newOrdersAppearHere:
            "Когда клиент оформит заказ, он появится здесь.",

        menuManagement:
            "Управление меню",

        menuManagementDescription:
            "Добавляйте, редактируйте или отключайте товары",

        addProduct:
            "Добавить товар",

        productSearch:
            "Поиск товара...",

        allCategories:
            "Все категории",

        categoryChicken: "Курица",
        categoryFish: "Рыба",
        categoryBurger: "Бургеры",
        categoryCombo: "Комбо",
        categoryDrink: "Напитки",
        categoryOther: "Другое",

        active: "Активен",
        inactive: "Неактивен",

        productsNotFound:
            "Товары не найдены",

        changeSearch:
            "Измените поиск или фильтр.",

        branchManagement:
            "Управление филиалами",

        branchManagementDescription:
            "Информация о филиалах TFC",

        addBranch:
            "Добавить филиал",

        noBranches:
            "Филиалов нет",

        reportsDescription:
            "Статистика заказов и выручки TFC",

        print: "Печать",

        allTime: "Все",
        today: "Сегодня",
        week: "Неделя",
        month: "Месяц",

        averageOrder:
            "Средний заказ",

        deliveredOrders:
            "Доставлено",

        salesSevenDays:
            "Продажи — последние 7 дней",

        deliveredRevenue:
            "Выручка от доставленных заказов",

        branchResults:
            "Результат каждого филиала",

        topProducts:
            "Популярные товары",

        topProductsDescription:
            "Товары по количеству продаж",

        product: "Товар",
        quantity: "Количество",

        price: "Цена",
        category: "Категория",
        imagePath: "Путь к изображению",
        imageExample: "Например: ./images/chicken-1.jpg",
        phonePlaceholder: "+992 XX XXX XX XX",
        weightGrams: "Вес (грамм)",
        volumeLiters: "Объём (литр)",
        weight: "Вес",
        volume: "Объём",
        gram: "г",
        liter: "л",

        productActive:
            "Товар активен",

        branchActive:
            "Филиал активен",

        workingHours:
            "Часы работы",

        cancel: "Отмена",
        save: "Сохранить",
        delete: "Удалить",
        edit: "Редактировать",
        view: "Просмотр",

        deleteConfirmation:
            "Удалить?",

        areYouSure:
            "Вы уверены?",

        addProductTitle:
            "Добавить товар",

        editProductTitle:
            "Редактировать товар",

        addBranchTitle:
            "Добавить филиал",

        editBranchTitle:
            "Редактировать филиал",

        order: "Заказ",

        orderDetails:
            "Информация о заказе",

        customerInfo:
            "Информация о клиенте",

        orderItems:
            "Товары заказа",

        address: "Адрес",
        comment: "Комментарий",
        payment: "Оплата",

        cash: "Наличными",

        cardOnDelivery:
            "Картой при получении",

        subtotal:
            "Стоимость товаров",

        delivery:
            "Доставка",

        changeStatus:
            "Изменить статус",

        acceptOrder:
            "Принять заказ",

        orderAccepted:
            "Заказ принят.",

        statusUpdated:
            "Статус заказа обновлён.",

        productSaved:
            "Товар сохранён.",

        productDeleted:
            "Товар удалён.",

        productStatusUpdated:
            "Статус товара обновлён.",

        branchSaved:
            "Филиал сохранён.",

        branchDeleted:
            "Филиал удалён.",

        branchStatusUpdated:
            "Статус филиала обновлён.",

        dataRefreshed:
            "Данные обновлены.",

        csvExported:
            "CSV подготовлен.",

        requiredFields:
            "Заполните обязательные поля.",

        invalidPrice:
            "Введите правильную цену.",

        weightRequired:
            "Укажите вес продукта.",

        volumeRequired:
            "Укажите объём напитка.",

        productDeleteQuestion:
            "Удалить этот товар?",

        branchDeleteQuestion:
            "Удалить этот филиал?",

        unknownCustomer:
            "Клиент",

        noAddress:
            "Адрес не указан",

        noComment:
            "Комментария нет",

        unknownBranch:
            "Филиал не определён",

        ordersCount: "Заказов",
        deliveredCount: "Доставлено",

        somoni: "сомони",

        noData: "Нет данных",

        report: "Отчёт",

        generated:
            "Дата формирования отчёта",

        demoNotice:
            "Demo version — Nurullo Coding",

        languageChanged:
            "Язык изменён.",

        productNameTgRequired:
            "Название товара на таджикском обязательно.",

        productNameRuRequired:
            "Название товара на русском обязательно.",

        branchNameRequired:
            "Введите название филиала.",

        searchNoResult:
            "Результаты не найдены.",

        notificationOrders:
            "новых заказов",

        item: "шт."
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


function toLocalizedObject(
    value,
    fallbackTg = "",
    fallbackRu = ""
) {

    if (
        value &&
        typeof value === "object" &&
        !Array.isArray(value)
    ) {

        return {
            tg:
                value.tg ||
                value.ru ||
                fallbackTg,

            ru:
                value.ru ||
                value.tg ||
                fallbackRu ||
                fallbackTg
        };
    }


    const stringValue =
        String(value || "").trim();


    return {
        tg:
            stringValue ||
            fallbackTg,

        ru:
            LEGACY_RU[stringValue] ||
            stringValue ||
            fallbackRu ||
            fallbackTg
    };
}


/* =========================================================
   DOM HELPERS
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
            "Storage write error:",
            key,
            error
        );

        return false;
    }
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

        description: {
            tg: "Мурғи болаззат бо қабати қирмизу хуштаъм.",
            ru: "Вкусная жареная курица с хрустящей корочкой."
        },

        category: "chicken",

        price: 45,

        image:
            "./images/chicken-1.jpg",

        weightGrams: 500,

        active: true
    },


    {
        id: "TFC-P002",

        name: {
            tg: "Мурғи Crispy",
            ru: "Хрустящая курица Crispy"
        },

        description: {
            tg: "Мурғи махсуси crispy бо қабати хрустӣ.",
            ru: "Фирменная хрустящая курица Crispy."
        },

        category: "chicken",

        price: 49,

        image:
            "./images/chicken-2.jpg",

        weightGrams: 400,

        active: true
    },


    {
        id: "TFC-P003",

        name: {
            tg: "Болҳои мурғ",
            ru: "Куриные крылышки"
        },

        description: {
            tg: "Болҳои мурғи болаззат бо соуси махсус.",
            ru: "Аппетитные куриные крылышки с фирменным соусом."
        },

        category: "chicken",

        price: 39,

        image:
            "./images/chicken-3.jpg",

        weightGrams: 350,

        active: true
    },


    {
        id: "TFC-P004",

        name: {
            tg: "Моҳии бирён",
            ru: "Жареная рыба"
        },

        description: {
            tg: "Моҳии тару тоза бо лимӯ ва ҳанут.",
            ru: "Свежая жареная рыба с лимоном и специями."
        },

        category: "fish",

        price: 55,

        image:
            "./images/fish-1.jpg",

        weightGrams: 500,

        active: true
    },


    {
        id: "TFC-P005",

        name: {
            tg: "Моҳии махсус",
            ru: "Фирменная рыба"
        },

        description: {
            tg: "Моҳии махсус бо таъми хоси TFC.",
            ru: "Фирменная рыба с особым вкусом TFC."
        },

        category: "fish",

        price: 65,

        image:
            "./images/fish-2.jpg",

        weightGrams: 450,

        active: true
    },


    {
        id: "TFC-P006",

        name: {
            tg: "Бургери TFC",
            ru: "Бургер TFC"
        },

        description: {
            tg: "Бургер бо мурғи crispy, панир ва сабзавот.",
            ru: "Бургер с хрустящей курицей, сыром и овощами."
        },

        category: "burger",

        price: 35,

        image:
            "./images/burger-1.jpg",

        weightGrams: 300,

        active: true
    },


    {
        id: "TFC-P007",

        name: {
            tg: "Комбо TFC",
            ru: "Комбо TFC"
        },

        description: {
            tg: "Мурғ, картошка, соус ва нӯшокӣ.",
            ru: "Курица, картофель, соус и напиток."
        },

        category: "combo",

        price: 79,

        image:
            "./images/combo-1.jpg",

        weightGrams: 700,

        active: true
    },


    {
        id: "TFC-P008",

        name: {
            tg: "Комбо Family",
            ru: "Семейное комбо"
        },

        description: {
            tg: "Комбои калон барои оила ва дӯстон.",
            ru: "Большое комбо для семьи и друзей."
        },

        category: "combo",

        price: 129,

        image:
            "./images/combo-family.jpg",

        weightGrams: 1400,

        active: true
    },


    {
        id: "TFC-P009",

        name: {
            tg: "Coca-Cola",
            ru: "Coca-Cola"
        },

        description: {
            tg: "Нӯшокии хунук.",
            ru: "Холодный напиток."
        },

        category: "drink",

        price: 10,

        image:
            "./images/coca-cola.jpg",

        volumeLiters: 0.5,

        active: true
    },


    {
        id: "TFC-P010",

        name: {
            tg: "Fanta",
            ru: "Fanta"
        },

        description: {
            tg: "Нӯшокии хунуки афлесунӣ.",
            ru: "Холодный апельсиновый напиток."
        },

        category: "drink",

        price: 10,

        image:
            "./images/fanta.jpg",

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

        workingHours:
            "08:00 – 01:00",

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

        workingHours:
            "10:00 – 23:00",

        active: true
    }

];


/* =========================================================
   STATE
========================================================= */

let products = [];
let branches = [];
let orders = [];

let currentPage =
    "dashboard";

let currentReportPeriod =
    "all";

let pendingDelete = null;


/* =========================================================
   ESCAPE HTML
========================================================= */

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


function escapeHTML(value = "") {

    return String(value)

        .replaceAll(
            "&",
            "&amp;"
        )

        .replaceAll(
            "<",
            "&lt;"
        )

        .replaceAll(
            ">",
            "&gt;"
        )

        .replaceAll(
            '"',
            "&quot;"
        )

        .replaceAll(
            "'",
            "&#039;"
        );
}


/* =========================================================
   MONEY
========================================================= */

function formatMoney(value) {

    const amount =
        Number(value) || 0;

    const locale =
        currentLanguage === "ru"
            ? "ru-RU"
            : "tg-TJ";

    return (
        amount.toLocaleString(locale) +
        " " +
        t("somoni")
    );
}


/* =========================================================
   DATE
========================================================= */

function formatDateTime(value) {

    if (!value) {
        return "-";
    }


    const date =
        new Date(value);


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {
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


function formatDateOnly(value) {

    if (!value) {
        return "-";
    }


    const date =
        new Date(value);


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {
        return "-";
    }


    return date.toLocaleDateString(
        currentLanguage === "ru"
            ? "ru-RU"
            : "tg-TJ"
    );
}


/* =========================================================
   STATUS NORMALIZATION
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


    const map = {

        new:
            "statusNew",

        preparing:
            "statusPreparing",

        ready:
            "statusReady",

        delivered:
            "statusDelivered",

        cancelled:
            "statusCancelled"
    };


    return t(
        map[normalized] ||
        "statusNew"
    );
}


function getStatusClass(status) {

    return (
        "status-" +
        normalizeStatus(status)
    );
}


/* =========================================================
   CATEGORY
========================================================= */

function getCategoryLabel(category) {

    const map = {

        chicken:
            "categoryChicken",

        fish:
            "categoryFish",

        burger:
            "categoryBurger",

        combo:
            "categoryCombo",

        drink:
            "categoryDrink"
    };


    return t(
        map[category] ||
        "categoryOther"
    );
}


/* =========================================================
   NORMALIZE PRODUCT
========================================================= */

function normalizeProduct(product = {}) {

    return {

        id:
            product.id ||
            "TFC-P-" +
            Date.now(),

        name:
            toLocalizedObject(
                product.name,
                "Маҳсулот",
                "Товар"
            ),

        description:
            toLocalizedObject(
                product.description,
                "",
                ""
            ),

        category:
            product.category ||
            "chicken",

        price:
            Number(
                product.price
            ) || 0,

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
            "TFC-B-" +
            Date.now(),

        name:
            toLocalizedObject(
                branch.name,
                "TFC",
                "TFC"
            ),

        city:
            toLocalizedObject(
                branch.city,
                "",
                ""
            ),

        address:
            toLocalizedObject(
                branch.address,
                "",
                ""
            ),

        phone:
            branch.phone || "",

        workingHours:
            branch.workingHours ||
            branch.hours ||
            "",

        hours:
            branch.workingHours ||
            branch.hours ||
            "",

        active:
            branch.active !== false
    };
}


/* =========================================================
   NORMALIZE ORDER
========================================================= */

function normalizeOrder(order = {}) {

    const branchValue =
        order.branchId ||
        order.branch?.id ||
        "";


    let branchName =
        order.branchName ||
        order.branch?.name ||
        "";


    if (
        branchName &&
        typeof branchName !== "object"
    ) {

        const branch =
            branches.find(
                item =>
                    String(item.id) ===
                    String(branchValue)
            );


        if (branch) {
            branchName =
                branch.name;
        }
    }


    const rawItems =
        Array.isArray(order.items)
            ? order.items
            : [];


    const items =
        rawItems.map(
            item => {

                const product =
                    products.find(
                        productItem =>
                            String(productItem.id) ===
                            String(
                                item.productId ||
                                item.id
                            )
                    );


                return {

                    id:
                        item.id ||
                        item.productId ||
                        product?.id ||
                        "",

                    productId:
                        item.productId ||
                        item.id ||
                        product?.id ||
                        "",

                    name:
                        item.name ||
                        product?.name ||
                        {
                            tg: "Маҳсулот",
                            ru: "Товар"
                        },

                    price:
                        Number(
                            item.price ??
                            product?.price
                        ) || 0,

                    quantity:
                        Number(
                            item.quantity
                        ) || 1,

                    image:
                        item.image ||
                        product?.image ||
                        "./images/placeholder.jpg"
                };
            }
        );


    const subtotal =
        Number(
            order.subtotal
        ) ||
        items.reduce(
            (sum, item) =>
                sum +
                (
                    item.price *
                    item.quantity
                ),
            0
        );


    const rawDelivery =
        order.deliveryFee ??
        order.delivery;

    const deliveryFee =
        rawDelivery == null ||
        rawDelivery === ""
            ? 0
            : Number(rawDelivery) || 0;


    const total =
        Number(
            order.total
        ) ||
        subtotal +
        deliveryFee;


    return {

        ...order,

        id:
            order.id ||
            order.orderId ||
            "TFC-" +
            Date.now(),

        customerName:
            order.customerName ||
            order.name ||
            t("unknownCustomer"),

        customerPhone:
            order.customerPhone ||
            order.phone ||
            "",

        phone:
            order.phone ||
            order.customerPhone ||
            "",

        address:
            order.address || "",

        branchId:
            branchValue,

        branchName:
            branchName,

        branch:
            order.branch || {
                id:
                    branchValue,

                name:
                    branchName
            },

        paymentMethod:
            order.paymentMethod ||
            order.payment ||
            "cash",

        payment:
            order.payment ||
            order.paymentMethod ||
            "cash",

        comment:
            order.comment ||
            order.note ||
            "",

        note:
            order.note ||
            order.comment ||
            "",

        items,

        subtotal,

        deliveryFee,

        total,

        status:
            order.status || "Нав",

        statusKey:
            order.statusKey ||
            normalizeStatus(
                order.status || "Нав"
            ),

        createdAt:
            order.createdAt ||
            new Date().toISOString()
    };
}


/* =========================================================
   LOAD DATA
========================================================= */

function loadData() {

    const savedProducts =
        getStorage(
            STORAGE_KEYS.products,
            null
        );


    if (
        !Array.isArray(savedProducts) ||
        !savedProducts.length
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
        !savedBranches.length
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


    const savedOrders =
        getStorage(
            STORAGE_KEYS.orders,
            []
        );


    orders =
        Array.isArray(savedOrders)
            ? savedOrders.map(
                normalizeOrder
            )
            : [];
}


/* =========================================================
   SAVE
========================================================= */

function saveProducts() {

    setStorage(
        STORAGE_KEYS.products,
        products
    );
}


function saveBranches() {

    setStorage(
        STORAGE_KEYS.branches,
        branches
    );
}


function saveOrders() {

    setStorage(
        STORAGE_KEYS.orders,
        orders
    );
}


/* =========================================================
   LOCALIZED GETTERS
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
   GET BY ID
========================================================= */

function getProductById(id) {

    return products.find(
        product =>
            String(product.id) ===
            String(id)
    );
}


function getBranchById(id) {

    return branches.find(
        branch =>
            String(branch.id) ===
            String(id)
    );
}


function getOrderById(id) {

    return orders.find(
        order =>
            String(order.id) ===
            String(id)
    );
}


/* =========================================================
   ORDER BRANCH
========================================================= */

function plainText(value, fallback = "") {

    if (value == null) {
        return fallback;
    }

    if (
        typeof value === "number" ||
        typeof value === "boolean"
    ) {
        return String(value);
    }

    if (typeof value === "string") {

        const text =
            value.trim();

        if (
            !text ||
            text === "[object Object]"
        ) {
            return fallback;
        }

        return text;
    }

    if (typeof value === "object") {

        const preferred =
            plainText(
                value[currentLanguage],
                ""
            );

        if (preferred) {
            return preferred;
        }

        const tajik =
            plainText(value.tg, "");

        if (tajik) {
            return tajik;
        }

        const russian =
            plainText(value.ru, "");

        if (russian) {
            return russian;
        }

        if (value.name) {
            return plainText(
                value.name,
                fallback
            );
        }
    }

    return fallback;
}


function getOrderBranchName(order) {

    const branchId =
        order?.branchId ||
        order?.branch?.id ||
        "";

    const branch =
        getBranchById(branchId);

    if (branch) {

        const liveName =
            plainText(
                getBranchName(branch),
                ""
            );

        if (liveName) {
            return liveName;
        }
    }

    const savedName =
        plainText(order?.branchName, "") ||
        plainText(order?.branch?.name, "") ||
        plainText(order?.branch, "");

    if (savedName) {
        return savedName;
    }

    return t("unknownBranch");
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
        normalized ===
            "card_on_delivery" ||
        normalized.includes("корт") ||
        normalized.includes("карт")
    ) {

        return t(
            "cardOnDelivery"
        );
    }


    return value || t("cash");
}


/* =========================================================
   LANGUAGE
========================================================= */

function applyTranslations() {

    document.documentElement.lang =
        currentLanguage;


    $$("[data-i18n]").forEach(
        element => {

            const key =
                element.dataset.i18n;

            if (
                translations[
                    currentLanguage
                ]?.[key]
            ) {

                element.textContent =
                    t(key);
            }
        }
    );


    $$(
        "[data-i18n-placeholder]"
    ).forEach(
        element => {

            const key =
                element.dataset
                    .i18nPlaceholder;

            element.placeholder =
                t(key);
        }
    );


    $$("[data-i18n-aria]")
        .forEach(
            element => {

                const key =
                    element.dataset
                        .i18nAria;

                element.setAttribute(
                    "aria-label",
                    t(key)
                );
            }
        );


    $$("[data-lang]")
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.lang ===
                    currentLanguage
                );
            }
        );


    updatePageHeading();
}


function setLanguage(language) {

    if (
        !["tg", "ru"].includes(
            language
        )
    ) {
        return;
    }


    currentLanguage =
        language;


    localStorage.setItem(
        STORAGE_KEYS.language,
        language
    );


    applyTranslations();

    renderAll();
}


/* =========================================================
   PAGE HEADING
========================================================= */

function updatePageHeading() {

    const title =
        $("#pageTitle");

    const subtitle =
        $("#pageSubtitle");


    if (
        !title ||
        !subtitle
    ) {
        return;
    }


    const pages = {

        dashboard: {
            title:
                t("dashboard"),

            subtitle:
                t(
                    "welcomeDashboard"
                )
        },

        orders: {
            title:
                t("orders"),

            subtitle:
                t(
                    "ordersSubtitle"
                )
        },

        "new-orders": {
            title:
                t("newOrders"),

            subtitle:
                t(
                    "newOrdersSubtitle"
                )
        },

        products: {
            title:
                t("menu"),

            subtitle:
                t(
                    "productsSubtitle"
                )
        },

        branches: {
            title:
                t("branches"),

            subtitle:
                t(
                    "branchesSubtitle"
                )
        },

        reports: {
            title:
                t("reports"),

            subtitle:
                t(
                    "reportsSubtitle"
                )
        }
    };


    const page =
        pages[currentPage] ||
        pages.dashboard;


    title.textContent =
        page.title;

    subtitle.textContent =
        page.subtitle;
}


/* =========================================================
   OPEN PAGE
========================================================= */

function openPage(page) {

    currentPage =
        page || "dashboard";


    $$(".admin-page")
        .forEach(
            section => {

                section.classList.toggle(
                    "active",
                    section.dataset.pageSection ===
                    currentPage
                );
            }
        );


    $$(".sidebar-nav-item")
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.page ===
                    currentPage
                );
            }
        );


    updatePageHeading();

    closeSidebar();


    if (
        currentPage === "reports"
    ) {
        renderReports();
    }
}


/* =========================================================
   DASHBOARD STATS
========================================================= */

function getDeliveredOrders(
    list = orders
) {

    return list.filter(
        order =>
            normalizeStatus(
                order.status
            ) === "delivered"
    );
}


function calculateRevenue(
    list = orders
) {

    return getDeliveredOrders(list)
        .reduce(
            (sum, order) =>
                sum +
                (
                    Number(
                        order.total
                    ) || 0
                ),
            0
        );
}


/* =========================================================
   UPDATE BADGES
========================================================= */

function updateBadges() {

    const newCount =
        orders.filter(
            order =>
                normalizeStatus(
                    order.status
                ) === "new"
        ).length;


    if (
        $("#ordersNavBadge")
    ) {

        $("#ordersNavBadge")
            .textContent =
            orders.length;
    }


    if (
        $("#newOrdersNavBadge")
    ) {

        $("#newOrdersNavBadge")
            .textContent =
            newCount;
    }


    if (
        $("#notificationCount")
    ) {

        $("#notificationCount")
            .textContent =
            newCount;

        $("#notificationCount")
            .hidden =
            newCount < 1;
    }


    if (
        $("#newOrdersNavBadge")
    ) {

        $("#newOrdersNavBadge")
            .hidden =
            newCount < 1;
    }
}


/* =========================================================
   DASHBOARD
========================================================= */

function renderDashboard() {

    if (
        $("#statTotalOrders")
    ) {

        $("#statTotalOrders")
            .textContent =
            orders.length;
    }


    const newOrdersCount =
        orders.filter(
            order =>
                normalizeStatus(
                    order.status
                ) === "new"
        ).length;


    if (
        $("#statNewOrders")
    ) {

        $("#statNewOrders")
            .textContent =
            newOrdersCount;
    }


    if (
        $("#statRevenue")
    ) {

        $("#statRevenue")
            .textContent =
            formatMoney(
                calculateRevenue()
            );
    }


    if (
        $("#statProducts")
    ) {

        $("#statProducts")
            .textContent =
            products.length;
    }


    renderRecentOrders();

    renderDashboardStatuses();

    renderDashboardBranches();
}


/* =========================================================
   RECENT ORDERS
========================================================= */

function renderRecentOrders() {

    const tbody =
        $("#recentOrdersTable");

    const empty =
        $("#recentOrdersEmpty");


    if (!tbody) {
        return;
    }


    const recent =
        [...orders]

            .sort(
                (a, b) =>
                    new Date(
                        b.createdAt
                    ) -
                    new Date(
                        a.createdAt
                    )
            )

            .slice(0, 6);


    if (!recent.length) {

        tbody.innerHTML = "";

        if (empty) {
            empty.hidden = false;
        }

        return;
    }


    if (empty) {
        empty.hidden = true;
    }


    tbody.innerHTML =
        recent.map(
            order => `
                <tr>

                    <td>
                        <strong>
                            ${escapeHTML(order.id)}
                        </strong>
                    </td>

                    <td>
                        ${escapeHTML(
                            order.customerName
                        )}
                    </td>

                    <td>
                        ${escapeHTML(
                            getOrderBranchName(
                                order
                            )
                        )}
                    </td>

                    <td>
                        <strong>
                            ${formatMoney(
                                order.total
                            )}
                        </strong>
                    </td>

                    <td>
                        <span
                            class="order-status ${getStatusClass(order.status)}"
                        >
                            ${getStatusLabel(order.status)}
                        </span>
                    </td>

                    <td>
                        ${formatDateTime(
                            order.createdAt
                        )}
                    </td>

                    <td>

                        <button
                            type="button"
                            class="table-action-btn"
                            data-view-order="${escapeHTML(order.id)}"
                        >
                            ${t("view")}
                        </button>

                    </td>

                </tr>
            `
        ).join("");
}


/* =========================================================
   DASHBOARD STATUS
========================================================= */

function renderDashboardStatuses() {

    const counts = {
        new: 0,
        preparing: 0,
        ready: 0,
        delivered: 0
    };


    orders.forEach(
        order => {

            const status =
                normalizeStatus(
                    order.status
                );


            if (
                Object.prototype
                    .hasOwnProperty
                    .call(
                        counts,
                        status
                    )
            ) {

                counts[status]++;
            }
        }
    );


    if (
        $("#dashboardStatusNew")
    ) {

        $("#dashboardStatusNew")
            .textContent =
            counts.new;
    }


    if (
        $("#dashboardStatusProgress")
    ) {

        $("#dashboardStatusProgress")
            .textContent =
            counts.preparing;
    }


    if (
        $("#dashboardStatusReady")
    ) {

        $("#dashboardStatusReady")
            .textContent =
            counts.ready;
    }


    if (
        $("#dashboardStatusDelivered")
    ) {

        $("#dashboardStatusDelivered")
            .textContent =
            counts.delivered;
    }
}


/* =========================================================
   DASHBOARD BRANCHES
========================================================= */

function renderDashboardBranches() {

    const container =
        $("#dashboardBranchStats");


    if (!container) {
        return;
    }


    if (!branches.length) {

        container.innerHTML = `
            <div class="page-empty">
                ${t("noData")}
            </div>
        `;

        return;
    }


    container.innerHTML =
        branches.map(
            branch => {

                const branchOrders =
                    orders.filter(
                        order =>
                            String(
                                order.branchId ||
                                order.branch?.id
                            ) ===
                            String(
                                branch.id
                            )
                    );


                const revenue =
                    calculateRevenue(
                        branchOrders
                    );


                return `
                    <article class="branch-stat-card">

                        <div class="branch-stat-icon">
                            📍
                        </div>

                        <div>

                            <h3>
                                ${escapeHTML(
                                    getBranchName(
                                        branch
                                    )
                                )}
                            </h3>

                            <p>
                                ${branchOrders.length}
                                ${t("ordersCount")}
                            </p>

                            <strong>
                                ${formatMoney(
                                    revenue
                                )}
                            </strong>

                        </div>

                    </article>
                `;
            }
        ).join("");
}


/* =========================================================
   FILTER ORDERS
========================================================= */

function getFilteredOrders() {

    const search =
        $("#orderSearch")
            ?.value
            .trim()
            .toLowerCase() ||
        "";


    const status =
        $("#orderStatusFilter")
            ?.value ||
        "all";


    const branch =
        $("#orderBranchFilter")
            ?.value ||
        "all";


    const date =
        $("#orderDateFilter")
            ?.value ||
        "";


    return orders.filter(
        order => {

            const searchable = `
                ${order.id}
                ${order.customerName}
                ${order.customerPhone}
                ${order.phone}
                ${getOrderBranchName(order)}
            `.toLowerCase();


            const searchMatch =
                !search ||
                searchable.includes(
                    search
                );


            const statusMatch =
                status === "all" ||
                normalizeStatus(
                    order.status
                ) ===
                normalizeStatus(
                    status
                );


            const branchMatch =
                branch === "all" ||
                String(
                    order.branchId ||
                    order.branch?.id
                ) ===
                String(branch);


            let dateMatch = true;


            if (date) {

                const orderDate =
                    new Date(
                        order.createdAt
                    );


                if (
                    !Number.isNaN(
                        orderDate.getTime()
                    )
                ) {

                    const year =
                        orderDate.getFullYear();

                    const month =
                        String(
                            orderDate.getMonth() +
                            1
                        ).padStart(
                            2,
                            "0"
                        );

                    const day =
                        String(
                            orderDate.getDate()
                        ).padStart(
                            2,
                            "0"
                        );


                    dateMatch =
                        `${year}-${month}-${day}` ===
                        date;
                }
            }


            return (
                searchMatch &&
                statusMatch &&
                branchMatch &&
                dateMatch
            );
        }
    );
}


/* =========================================================
   ORDER FILTER BRANCHES
========================================================= */

function renderOrderBranchFilter() {

    const select =
        $("#orderBranchFilter");


    if (!select) {
        return;
    }


    const current =
        select.value ||
        "all";


    select.innerHTML = `

        <option value="all">
            ${t("allBranches")}
        </option>

        ${branches.map(
            branch => `
                <option
                    value="${escapeHTML(branch.id)}"
                >
                    ${escapeHTML(
                        getBranchName(
                            branch
                        )
                    )}
                </option>
            `
        ).join("")}
    `;


    if (
        Array.from(
            select.options
        ).some(
            option =>
                option.value ===
                current
        )
    ) {

        select.value =
            current;
    }
}


/* =========================================================
   STATUS FILTER OPTIONS
========================================================= */

function renderStatusFilter() {

    const select =
        $("#orderStatusFilter");


    if (!select) {
        return;
    }


    const current =
        select.value ||
        "all";


    select.innerHTML = `

        <option value="all">
            ${t("allStatuses")}
        </option>

        <option value="new">
            ${t("statusNew")}
        </option>

        <option value="preparing">
            ${t("statusPreparing")}
        </option>

        <option value="ready">
            ${t("statusReady")}
        </option>

        <option value="delivered">
            ${t("statusDelivered")}
        </option>

        <option value="cancelled">
            ${t("statusCancelled")}
        </option>
    `;


    if (
        Array.from(
            select.options
        ).some(
            option =>
                option.value ===
                current
        )
    ) {

        select.value =
            current;
    }
}


/* =========================================================
   ORDERS TABLE
========================================================= */

function renderOrders() {

    const tbody =
        $("#ordersTableBody");

    const empty =
        $("#ordersEmpty");


    if (!tbody) {
        return;
    }


    const filtered =
        getFilteredOrders()

            .sort(
                (a, b) =>
                    new Date(
                        b.createdAt
                    ) -
                    new Date(
                        a.createdAt
                    )
            );


    if (!filtered.length) {

        tbody.innerHTML = "";

        if (empty) {
            empty.hidden = false;
        }

        return;
    }


    if (empty) {
        empty.hidden = true;
    }


    tbody.innerHTML =
        filtered.map(
            order => `
                <tr>

                    <td>
                        <strong>
                            ${escapeHTML(order.id)}
                        </strong>
                    </td>

                    <td>
                        ${escapeHTML(
                            order.customerName
                        )}
                    </td>

                    <td>
                        ${escapeHTML(
                            order.customerPhone ||
                            order.phone ||
                            "-"
                        )}
                    </td>

                    <td>
                        ${escapeHTML(
                            getOrderBranchName(
                                order
                            )
                        )}
                    </td>

                    <td>
                        <strong>
                            ${formatMoney(
                                order.total
                            )}
                        </strong>
                    </td>

                    <td>
                        <span
                            class="order-status ${getStatusClass(order.status)}"
                        >
                            ${getStatusLabel(order.status)}
                        </span>
                    </td>

                    <td>
                        ${formatDateTime(
                            order.createdAt
                        )}
                    </td>

                    <td>

                        <button
                            type="button"
                            class="table-action-btn"
                            data-view-order="${escapeHTML(order.id)}"
                        >
                            ${t("view")}
                        </button>

                    </td>

                </tr>
            `
        ).join("");
}


/* =========================================================
   NEW ORDERS
========================================================= */

function renderNewOrders() {

    const container =
        $("#newOrdersGrid");

    const empty =
        $("#newOrdersEmpty");

    const count =
        $("#newOrdersPageCount");


    if (!container) {
        return;
    }


    const list =
        orders

            .filter(
                order =>
                    normalizeStatus(
                        order.status
                    ) === "new"
            )

            .sort(
                (a, b) =>
                    new Date(
                        b.createdAt
                    ) -
                    new Date(
                        a.createdAt
                    )
            );


    if (count) {

        count.textContent =
            list.length;
    }


    if (!list.length) {

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
        list.map(
            order => `

                <article class="new-order-card">

                    <div class="new-order-card-head">

                        <div>

                            <span>
                                ${t("orderNumber")}
                            </span>

                            <strong>
                                ${escapeHTML(
                                    order.id
                                )}
                            </strong>

                        </div>

                        <span
                            class="order-status status-new"
                        >
                            ${t("statusNew")}
                        </span>

                    </div>


                    <div class="new-order-customer">

                        <h3>
                            ${escapeHTML(
                                order.customerName
                            )}
                        </h3>

                        <p>
                            ☎
                            ${escapeHTML(
                                order.customerPhone ||
                                order.phone ||
                                "-"
                            )}
                        </p>

                        <p>
                            📍
                            ${escapeHTML(
                                getOrderBranchName(
                                    order
                                )
                            )}
                        </p>

                    </div>


                    <div class="new-order-total">

                        <span>
                            ${t("total")}
                        </span>

                        <strong>
                            ${formatMoney(
                                order.total
                            )}
                        </strong>

                    </div>


                    <div class="new-order-actions">

                        <button
                            type="button"
                            class="admin-btn secondary"
                            data-view-order="${escapeHTML(order.id)}"
                        >
                            ${t("view")}
                        </button>

                        <button
                            type="button"
                            class="admin-btn primary"
                            data-accept-order="${escapeHTML(order.id)}"
                        >
                            ✓
                            ${t("acceptOrder")}
                        </button>

                    </div>

                </article>
            `
        ).join("");
}


/* =========================================================
   ORDER MODAL
========================================================= */

function openOrderModal(orderId) {

    const order =
        getOrderById(orderId);


    if (!order) {
        return;
    }


    const title =
        $("#orderModalTitle");

    const content =
        $("#orderModalContent");


    if (
        !title ||
        !content
    ) {
        return;
    }


    title.textContent =
        `${t("order")} ${order.id}`;


    const itemsHTML =
        order.items.length
            ? order.items.map(
                item => {

                    const product =
                        getProductById(
                            item.productId ||
                            item.id
                        );


                    const name =
                        getLocalizedValue(
                            item.name ||
                            product?.name,
                            t("product")
                        );


                    return `

                        <div class="order-product-item">

                            <img
                                src="${escapeHTML(resolveImage(
                                    item.image ||
                                    product?.image ||
                                    "./images/placeholder.jpg"
                                ))}"
                                alt="${escapeHTML(name)}"
                                onerror="if(this.dataset.fallback){this.classList.add('is-missing');return;}this.dataset.fallback='1';this.src='./images/placeholder.jpg';"
                            >

                            <div>

                                <strong>
                                    ${escapeHTML(name)}
                                </strong>

                                <span>
                                    ${item.quantity}
                                    ×
                                    ${formatMoney(
                                        item.price
                                    )}
                                </span>

                            </div>

                            <strong>
                                ${formatMoney(
                                    item.price *
                                    item.quantity
                                )}
                            </strong>

                        </div>
                    `;
                }
            ).join("")
            : `
                <p>
                    ${t("noData")}
                </p>
            `;


    content.innerHTML = `

        <div class="order-detail-grid">

            <div class="order-detail-box">

                <span>
                    ${t("customer")}
                </span>

                <strong>
                    ${escapeHTML(
                        order.customerName
                    )}
                </strong>

            </div>


            <div class="order-detail-box">

                <span>
                    ${t("phone")}
                </span>

                <strong>
                    ${escapeHTML(
                        order.customerPhone ||
                        order.phone ||
                        "-"
                    )}
                </strong>

            </div>


            <div class="order-detail-box">

                <span>
                    ${t("branch")}
                </span>

                <strong>
                    ${escapeHTML(
                        getOrderBranchName(
                            order
                        )
                    )}
                </strong>

            </div>


            <div class="order-detail-box">

                <span>
                    ${t("date")}
                </span>

                <strong>
                    ${formatDateTime(
                        order.createdAt
                    )}
                </strong>

            </div>


            <div class="order-detail-box">

                <span>
                    ${t("address")}
                </span>

                <strong>
                    ${escapeHTML(
                        order.address ||
                        t("noAddress")
                    )}
                </strong>

            </div>


            <div class="order-detail-box">

                <span>
                    ${t("payment")}
                </span>

                <strong>
                    ${escapeHTML(
                        getPaymentLabel(
                            order.paymentMethod ||
                            order.payment
                        )
                    )}
                </strong>

            </div>

        </div>


        <div class="order-comment-box">

            <span>
                ${t("comment")}
            </span>

            <p>
                ${escapeHTML(
                    order.comment ||
                    order.note ||
                    t("noComment")
                )}
            </p>

        </div>


        <div class="order-items-section">

            <h3>
                ${t("orderItems")}
            </h3>

            <div class="order-products-list">
                ${itemsHTML}
            </div>

        </div>


        <div class="order-total-box">

            <div>

                <span>
                    ${t("subtotal")}
                </span>

                <strong>
                    ${formatMoney(
                        order.subtotal
                    )}
                </strong>

            </div>


            <div>

                <span>
                    ${t("delivery")}
                </span>

                <strong>
                    ${formatMoney(
                        order.deliveryFee
                    )}
                </strong>

            </div>


            <div class="order-grand-total">

                <span>
                    ${t("total")}
                </span>

                <strong>
                    ${formatMoney(
                        order.total
                    )}
                </strong>

            </div>

        </div>


        <div class="order-status-editor">

            <label
                for="modalOrderStatus"
            >
                ${t("changeStatus")}
            </label>


            <select
                id="modalOrderStatus"
                data-order-id="${escapeHTML(order.id)}"
            >

                ${ORDER_STATUSES.map(
                    status => `
                        <option
                            value="${status}"
                            ${
                                normalizeStatus(
                                    order.status
                                ) === status
                                    ? "selected"
                                    : ""
                            }
                        >
                            ${getStatusLabel(status)}
                        </option>
                    `
                ).join("")}

            </select>

        </div>
    `;


    openAdminModal(
        "orderModal"
    );
}


/* =========================================================
   UPDATE ORDER STATUS
========================================================= */

function updateOrderStatus(
    orderId,
    status
) {

    const order =
        getOrderById(
            orderId
        );


    if (!order) {
        return;
    }


    order.status =
        normalizeStatus(status);

    order.statusKey =
        order.status;


    saveOrders();

    renderAll();


    showToast(
        t("statusUpdated"),
        "success"
    );
}


/* =========================================================
   ACCEPT ORDER
========================================================= */

function acceptOrder(orderId) {

    const order =
        getOrderById(orderId);


    if (!order) {
        return;
    }


    order.status =
        "preparing";

    order.statusKey =
        "preparing";


    saveOrders();

    renderAll();


    showToast(
        t("orderAccepted"),
        "success"
    );
}


/* =========================================================
   PRODUCT FILTER
========================================================= */

function getFilteredProducts() {

    const search =
        $("#productSearch")
            ?.value
            .trim()
            .toLowerCase() ||
        "";


    const category =
        $("#productCategoryFilter")
            ?.value ||
        "all";


    const status =
        $("#productStatusFilter")
            ?.value ||
        "all";


    return products.filter(
        product => {

            const searchable = `
                ${getLocalizedValue(product.name, "")}
                ${product.name?.tg || ""}
                ${product.name?.ru || ""}
                ${product.description?.tg || ""}
                ${product.description?.ru || ""}
            `.toLowerCase();


            const searchMatch =
                !search ||
                searchable.includes(
                    search
                );


            const categoryMatch =
                category === "all" ||
                product.category ===
                category;


            const statusMatch =
                status === "all" ||
                (
                    status === "active" &&
                    product.active
                ) ||
                (
                    status === "inactive" &&
                    !product.active
                );


            return (
                searchMatch &&
                categoryMatch &&
                statusMatch
            );
        }
    );
}


/* =========================================================
   PRODUCTS
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


function getAdminMeasureMarkup(product) {

    const weight =
        Number(product?.weightGrams) || null;

    const volume =
        Number(product?.volumeLiters) || null;

    let text = "";

    if (product?.category === "drink") {

        if (!volume) {
            return "";
        }

        text =
            `🥤 ${formatMeasure(volume)} ${t("liter")}`;

    } else if (weight) {

        text =
            `⚖ ${formatMeasure(weight)} ${t("gram")}`;

    } else {

        return "";
    }

    return `
        <span class="product-measure">
            ${escapeHTML(text)}
        </span>
    `;
}


function renderProducts() {

    const container =
        $("#adminProductsGrid");

    const empty =
        $("#productsEmpty");


    if (!container) {
        return;
    }


    const list =
        getFilteredProducts();


    if (!list.length) {

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
        list.map(
            product => `

                <article class="admin-product-card">

                    <div class="admin-product-image">

                        <img
                            src="${escapeHTML(resolveImage(product.image))}"
                            alt="${escapeHTML(
                                getProductName(
                                    product
                                )
                            )}"
                            onerror="if(this.dataset.fallback){this.classList.add('is-missing');return;}this.dataset.fallback='1';this.src='./images/placeholder.jpg';"
                        >

                        <span
                            class="product-state ${
                                product.active
                                    ? "active"
                                    : "inactive"
                            }"
                        >
                            ${
                                product.active
                                    ? t("active")
                                    : t("inactive")
                            }
                        </span>

                    </div>


                    <div class="admin-product-content">

                        <span class="product-category-label">
                            ${escapeHTML(
                                getCategoryLabel(
                                    product.category
                                )
                            )}
                        </span>


                        <h3>
                            ${escapeHTML(
                                getProductName(
                                    product
                                )
                            )}
                        </h3>


                        ${getAdminMeasureMarkup(
                            product
                        )}


                        <p>
                            ${escapeHTML(
                                getProductDescription(
                                    product
                                )
                            )}
                        </p>


                        <strong class="admin-product-price">
                            ${formatMoney(
                                product.price
                            )}
                        </strong>


                        <div class="admin-product-actions">

                            <button
                                type="button"
                                class="small-action-btn"
                                data-edit-product="${escapeHTML(product.id)}"
                            >
                                ✎
                                ${t("edit")}
                            </button>


                            <button
                                type="button"
                                class="small-action-btn"
                                data-toggle-product="${escapeHTML(product.id)}"
                            >
                                ${
                                    product.active
                                        ? "◉"
                                        : "○"
                                }
                                ${
                                    product.active
                                        ? t("inactive")
                                        : t("active")
                                }
                            </button>


                            <button
                                type="button"
                                class="small-action-btn danger"
                                data-delete-product="${escapeHTML(product.id)}"
                            >
                                🗑
                            </button>

                        </div>

                    </div>

                </article>
            `
        ).join("");
}


/* =========================================================
   PRODUCT MODAL
========================================================= */

function updateProductMeasureFields() {

    const category =
        $("#productCategory")
            ?.value;

    const isDrink =
        category === "drink";

    const weightGroup =
        $("#productWeightGroup");

    const volumeGroup =
        $("#productVolumeGroup");

    if (weightGroup) {
        weightGroup.hidden = isDrink;
    }

    if (volumeGroup) {
        volumeGroup.hidden = !isDrink;
    }
}


function openProductForm(
    productId = ""
) {

    const product =
        productId
            ? getProductById(
                productId
            )
            : null;


    const title =
        $("#productModalTitle");


    if (title) {

        title.textContent =
            product
                ? t(
                    "editProductTitle"
                )
                : t(
                    "addProductTitle"
                );
    }


    $("#productId").value =
        product?.id || "";


    $("#productNameTg").value =
        product?.name?.tg ||
        "";


    $("#productNameRu").value =
        product?.name?.ru ||
        "";


    $("#productPrice").value =
        product?.price ??
        "";


    $("#productCategory").value =
        product?.category ||
        "chicken";


    $("#productWeight").value =
        product?.weightGrams ??
        "";


    $("#productVolume").value =
        product?.volumeLiters ??
        "";


    updateProductMeasureFields();


    $("#productImage").value =
        product?.image ||
        "";


    $("#productDescriptionTg").value =
        product?.description?.tg ||
        "";


    $("#productDescriptionRu").value =
        product?.description?.ru ||
        "";


    $("#productActive").checked =
        product
            ? product.active !== false
            : true;


    clearFormErrors(
        $("#productForm")
    );

    openAdminModal(
        "productFormModal"
    );
}


/* =========================================================
   FORM ERRORS
========================================================= */

function clearInvalidField(event) {

    const field =
        event.target;

    if (!field?.classList) {
        return;
    }

    field.classList.remove(
        "is-invalid"
    );

    field.closest(".form-group")
        ?.querySelector(".field-error")
        ?.remove();
}


function clearFormErrors(form) {

    if (!form) {
        return;
    }

    form.querySelectorAll(
        ".field-error"
    ).forEach(
        element => element.remove()
    );

    form.querySelectorAll(
        ".is-invalid"
    ).forEach(
        element => element.classList.remove(
            "is-invalid"
        )
    );
}


function showFieldError(input, message) {

    if (!input) {
        return;
    }

    input.classList.add(
        "is-invalid"
    );

    const group =
        input.closest(
            ".form-group"
        );

    if (!group) {
        return;
    }

    let error =
        group.querySelector(
            ".field-error"
        );

    if (!error) {

        error =
            document.createElement(
                "span"
            );

        error.className =
            "field-error";

        group.appendChild(
            error
        );
    }

    error.textContent =
        message;
}


/* =========================================================
   SAVE PRODUCT
========================================================= */

function submitProduct(event) {

    event.preventDefault();

    clearFormErrors(
        $("#productForm")
    );


    const id =
        $("#productId")
            .value
            .trim();


    const nameTg =
        $("#productNameTg")
            .value
            .trim();


    const nameRu =
        $("#productNameRu")
            .value
            .trim();


    const price =
        Number(
            $("#productPrice")
                .value
        );


    const category =
        $("#productCategory")
            .value;


    const image =
        $("#productImage")
            .value
            .trim() ||
        "./images/placeholder.jpg";


    const descriptionTg =
        $("#productDescriptionTg")
            .value
            .trim();


    const descriptionRu =
        $("#productDescriptionRu")
            .value
            .trim();


    const active =
        $("#productActive")
            .checked;


    const isDrink =
        category === "drink";


    const weightGrams =
        isDrink
            ? null
            : readPositiveNumber(
                $("#productWeight")
                    ?.value
            );


    const volumeLiters =
        isDrink
            ? readPositiveNumber(
                $("#productVolume")
                    ?.value
            )
            : null;


    if (!nameTg) {

        showFieldError(
            $("#productNameTg"),
            t("productNameTgRequired")
        );

        showToast(
            t(
                "productNameTgRequired"
            ),
            "error"
        );

        return;
    }


    if (!nameRu) {

        showFieldError(
            $("#productNameRu"),
            t("productNameRuRequired")
        );

        showToast(
            t(
                "productNameRuRequired"
            ),
            "error"
        );

        return;
    }


    if (
        Number.isNaN(price) ||
        price < 0
    ) {

        showFieldError(
            $("#productPrice"),
            t("invalidPrice")
        );

        showToast(
            t("invalidPrice"),
            "error"
        );

        return;
    }


    if (
        !isDrink &&
        !weightGrams
    ) {

        showFieldError(
            $("#productWeight"),
            t("weightRequired")
        );

        showToast(
            t("weightRequired"),
            "error"
        );

        return;
    }


    if (
        isDrink &&
        !volumeLiters
    ) {

        showFieldError(
            $("#productVolume"),
            t("volumeRequired")
        );

        showToast(
            t("volumeRequired"),
            "error"
        );

        return;
    }


    if (id) {

        const product =
            getProductById(id);


        if (!product) {
            return;
        }


        product.name = {
            tg: nameTg,
            ru: nameRu
        };


        product.description = {
            tg: descriptionTg,
            ru: descriptionRu
        };


        product.price =
            price;

        product.category =
            category;

        product.image =
            image;

        product.weightGrams =
            weightGrams;

        product.volumeLiters =
            volumeLiters;

        product.active =
            active;

    } else {

        products.push({

            id:
                createProductId(),

            name: {
                tg: nameTg,
                ru: nameRu
            },

            description: {
                tg: descriptionTg,
                ru: descriptionRu
            },

            price,

            category,

            image,

            weightGrams,

            volumeLiters,

            active
        });
    }


    saveProducts();

    closeAdminModal(
        "productFormModal"
    );

    renderAll();


    showToast(
        t("productSaved"),
        "success"
    );
}


/* =========================================================
   PRODUCT ID
========================================================= */

function createProductId() {

    let max = 0;


    products.forEach(
        product => {

            const match =
                String(
                    product.id
                ).match(
                    /TFC-P(\d+)/
                );


            if (match) {

                max =
                    Math.max(
                        max,
                        Number(
                            match[1]
                        ) || 0
                    );
            }
        }
    );


    return (
        "TFC-P" +
        String(max + 1)
            .padStart(
                3,
                "0"
            )
    );
}


/* =========================================================
   TOGGLE PRODUCT
========================================================= */

function toggleProduct(productId) {

    const product =
        getProductById(
            productId
        );


    if (!product) {
        return;
    }


    product.active =
        !product.active;


    saveProducts();

    renderAll();


    showToast(
        t(
            "productStatusUpdated"
        ),
        "success"
    );
}


/* =========================================================
   DELETE PRODUCT
========================================================= */

function askDeleteProduct(
    productId
) {

    const product =
        getProductById(
            productId
        );


    if (!product) {
        return;
    }


    pendingDelete = {
        type: "product",
        id: product.id
    };


    if (
        $("#deleteModalText")
    ) {

        $("#deleteModalText")
            .textContent =
            `${t("productDeleteQuestion")} ${getProductName(product)}`;
    }


    openAdminModal(
        "deleteModal"
    );
}


/* =========================================================
   BRANCHES
========================================================= */

function renderBranches() {

    const container =
        $("#adminBranchesGrid");

    const empty =
        $("#branchesEmpty");


    if (!container) {
        return;
    }


    if (!branches.length) {

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
        branches.map(
            branch => `

                <article class="admin-branch-card">

                    <div class="admin-branch-head">

                        <div class="admin-branch-icon">
                            📍
                        </div>

                        <span
                            class="branch-state ${
                                branch.active
                                    ? "active"
                                    : "inactive"
                            }"
                        >
                            ${
                                branch.active
                                    ? t("active")
                                    : t("inactive")
                            }
                        </span>

                    </div>


                    <h3>
                        ${escapeHTML(
                            getBranchName(
                                branch
                            )
                        )}
                    </h3>


                    <div class="admin-branch-info">

                        <p>
                            🏙
                            ${escapeHTML(
                                getBranchCity(
                                    branch
                                )
                            )}
                        </p>

                        <p>
                            📍
                            ${escapeHTML(
                                getBranchAddress(
                                    branch
                                )
                            )}
                        </p>

                        <p>
                            ☎
                            ${escapeHTML(
                                branch.phone ||
                                "-"
                            )}
                        </p>

                        <p>
                            🕐
                            ${escapeHTML(
                                branch.workingHours ||
                                "-"
                            )}
                        </p>

                    </div>


                    <div class="admin-branch-actions">

                        <button
                            type="button"
                            class="small-action-btn"
                            data-edit-branch="${escapeHTML(branch.id)}"
                        >
                            ✎
                            ${t("edit")}
                        </button>


                        <button
                            type="button"
                            class="small-action-btn"
                            data-toggle-branch="${escapeHTML(branch.id)}"
                        >
                            ${
                                branch.active
                                    ? t("inactive")
                                    : t("active")
                            }
                        </button>


                        <button
                            type="button"
                            class="small-action-btn danger"
                            data-delete-branch="${escapeHTML(branch.id)}"
                        >
                            🗑
                        </button>

                    </div>

                </article>
            `
        ).join("");
}


/* =========================================================
   BRANCH FORM
========================================================= */

function openBranchForm(
    branchId = ""
) {

    const branch =
        branchId
            ? getBranchById(
                branchId
            )
            : null;


    if (
        $("#branchModalTitle")
    ) {

        $("#branchModalTitle")
            .textContent =
            branch
                ? t(
                    "editBranchTitle"
                )
                : t(
                    "addBranchTitle"
                );
    }


    $("#branchId").value =
        branch?.id || "";


    $("#branchNameTg").value =
        branch?.name?.tg ||
        "";


    $("#branchNameRu").value =
        branch?.name?.ru ||
        "";


    $("#branchCityTg").value =
        branch?.city?.tg ||
        "";


    $("#branchCityRu").value =
        branch?.city?.ru ||
        "";


    $("#branchPhone").value =
        branch?.phone ||
        "";


    $("#branchWorkingHours").value =
        branch?.workingHours ||
        branch?.hours ||
        "";


    $("#branchAddressTg").value =
        branch?.address?.tg ||
        "";


    $("#branchAddressRu").value =
        branch?.address?.ru ||
        "";


    $("#branchActive").checked =
        branch
            ? branch.active !== false
            : true;


    clearFormErrors(
        $("#branchForm")
    );

    openAdminModal(
        "branchFormModal"
    );
}


/* =========================================================
   BRANCH ID
========================================================= */

function createBranchId() {

    let max = 0;


    branches.forEach(
        branch => {

            const match =
                String(
                    branch.id
                ).match(
                    /TFC-B(\d+)/
                );


            if (match) {

                max =
                    Math.max(
                        max,
                        Number(
                            match[1]
                        ) || 0
                    );
            }
        }
    );


    return (
        "TFC-B" +
        String(max + 1)
            .padStart(
                3,
                "0"
            )
    );
}


/* =========================================================
   SAVE BRANCH
========================================================= */

function submitBranch(event) {

    event.preventDefault();

    clearFormErrors(
        $("#branchForm")
    );


    const id =
        $("#branchId")
            .value
            .trim();


    const nameTg =
        $("#branchNameTg")
            .value
            .trim();


    const nameRu =
        $("#branchNameRu")
            .value
            .trim();


    const cityTg =
        $("#branchCityTg")
            .value
            .trim();


    const cityRu =
        $("#branchCityRu")
            .value
            .trim();


    const phone =
        $("#branchPhone")
            .value
            .trim();


    const workingHours =
        $("#branchWorkingHours")
            .value
            .trim();


    const addressTg =
        $("#branchAddressTg")
            .value
            .trim();


    const addressRu =
        $("#branchAddressRu")
            .value
            .trim();


    const active =
        $("#branchActive")
            .checked;


    if (!nameTg) {

        showFieldError(
            $("#branchNameTg"),
            t("branchNameRequired")
        );
    }


    if (!nameRu) {

        showFieldError(
            $("#branchNameRu"),
            t("branchNameRequired")
        );
    }


    if (
        !nameTg ||
        !nameRu
    ) {

        showToast(
            t("branchNameRequired"),
            "error"
        );

        return;
    }


    if (!phone) {

        showFieldError(
            $("#branchPhone"),
            t("requiredFields")
        );

        showToast(
            t("requiredFields"),
            "error"
        );

        return;
    }


    if (id) {

        const branch =
            getBranchById(id);


        if (!branch) {
            return;
        }


        branch.name = {
            tg: nameTg,
            ru: nameRu
        };


        branch.city = {
            tg: cityTg,
            ru: cityRu
        };


        branch.address = {
            tg: addressTg,
            ru: addressRu
        };


        branch.phone =
            phone;


        branch.workingHours =
            workingHours;


        /*
         * Keep both properties for
         * compatibility with older customer JS.
         */
        branch.hours =
            workingHours;


        branch.active =
            active;

    } else {

        branches.push({

            id:
                createBranchId(),

            name: {
                tg: nameTg,
                ru: nameRu
            },

            city: {
                tg: cityTg,
                ru: cityRu
            },

            address: {
                tg: addressTg,
                ru: addressRu
            },

            phone,

            workingHours,

            hours:
                workingHours,

            active
        });
    }


    saveBranches();

    closeAdminModal(
        "branchFormModal"
    );

    renderAll();


    showToast(
        t("branchSaved"),
        "success"
    );
}


/* =========================================================
   TOGGLE BRANCH
========================================================= */

function toggleBranch(branchId) {

    const branch =
        getBranchById(
            branchId
        );


    if (!branch) {
        return;
    }


    branch.active =
        !branch.active;


    saveBranches();

    renderAll();


    showToast(
        t(
            "branchStatusUpdated"
        ),
        "success"
    );
}


/* =========================================================
   DELETE BRANCH
========================================================= */

function askDeleteBranch(
    branchId
) {

    const branch =
        getBranchById(
            branchId
        );


    if (!branch) {
        return;
    }


    pendingDelete = {
        type: "branch",
        id: branch.id
    };


    if (
        $("#deleteModalText")
    ) {

        $("#deleteModalText")
            .textContent =
            `${t("branchDeleteQuestion")} ${getBranchName(branch)}`;
    }


    openAdminModal(
        "deleteModal"
    );
}


/* =========================================================
   CONFIRM DELETE
========================================================= */

function confirmDelete() {

    if (!pendingDelete) {
        return;
    }


    if (
        pendingDelete.type ===
        "product"
    ) {

        products =
            products.filter(
                product =>
                    String(
                        product.id
                    ) !==
                    String(
                        pendingDelete.id
                    )
            );


        saveProducts();


        showToast(
            t("productDeleted"),
            "success"
        );
    }


    if (
        pendingDelete.type ===
        "branch"
    ) {

        branches =
            branches.filter(
                branch =>
                    String(
                        branch.id
                    ) !==
                    String(
                        pendingDelete.id
                    )
            );


        saveBranches();


        showToast(
            t("branchDeleted"),
            "success"
        );
    }


    pendingDelete = null;


    closeAdminModal(
        "deleteModal"
    );


    renderAll();
}


/* =========================================================
   REPORT FILTER
========================================================= */

function filterOrdersByPeriod(
    period
) {

    if (
        !period ||
        period === "all"
    ) {

        return [...orders];
    }


    const now =
        new Date();


    const start =
        new Date(now);


    if (
        period === "today"
    ) {

        start.setHours(
            0,
            0,
            0,
            0
        );
    }


    if (
        period === "week"
    ) {

        start.setDate(
            now.getDate() -
            6
        );

        start.setHours(
            0,
            0,
            0,
            0
        );
    }


    if (
        period === "month"
    ) {

        start.setDate(1);

        start.setHours(
            0,
            0,
            0,
            0
        );
    }


    return orders.filter(
        order => {

            const date =
                new Date(
                    order.createdAt
                );


            return (
                !Number.isNaN(
                    date.getTime()
                ) &&
                date >= start
            );
        }
    );
}


/* =========================================================
   REPORTS
========================================================= */

function renderReports() {

    const filtered =
        filterOrdersByPeriod(
            currentReportPeriod
        );


    const delivered =
        getDeliveredOrders(
            filtered
        );


    const revenue =
        calculateRevenue(
            filtered
        );


    const average =
        delivered.length
            ? revenue /
                delivered.length
            : 0;


    if (
        $("#reportOrders")
    ) {

        $("#reportOrders")
            .textContent =
            filtered.length;
    }


    if (
        $("#reportRevenue")
    ) {

        $("#reportRevenue")
            .textContent =
            formatMoney(
                revenue
            );
    }


    if (
        $("#reportAverage")
    ) {

        $("#reportAverage")
            .textContent =
            formatMoney(
                Math.round(
                    average * 100
                ) / 100
            );
    }


    if (
        $("#reportDelivered")
    ) {

        $("#reportDelivered")
            .textContent =
            delivered.length;
    }


    renderSalesChart();

    renderBranchReports(
        filtered
    );

    renderTopProducts(
        filtered
    );
}


/* =========================================================
   SALES CHART
========================================================= */

function renderSalesChart() {

    const container =
        $("#salesChart");


    if (!container) {
        return;
    }


    const days = [];


    for (
        let i = 6;
        i >= 0;
        i--
    ) {

        const date =
            new Date();


        date.setHours(
            0,
            0,
            0,
            0
        );


        date.setDate(
            date.getDate() -
            i
        );


        const next =
            new Date(date);


        next.setDate(
            next.getDate() +
            1
        );


        const dayOrders =
            orders.filter(
                order => {

                    const orderDate =
                        new Date(
                            order.createdAt
                        );


                    return (
                        normalizeStatus(
                            order.status
                        ) ===
                            "delivered" &&
                        orderDate >=
                            date &&
                        orderDate <
                            next
                    );
                }
            );


        const revenue =
            dayOrders.reduce(
                (sum, order) =>
                    sum +
                    (
                        Number(
                            order.total
                        ) || 0
                    ),
                0
            );


        days.push({
            date,
            revenue
        });
    }


    const maxRevenue =
        Math.max(
            ...days.map(
                day =>
                    day.revenue
            ),
            1
        );


    container.innerHTML =
        days.map(
            day => {

                const height =
                    day.revenue
                        ? Math.max(
                            8,
                            (
                                day.revenue /
                                maxRevenue
                            ) *
                            100
                        )
                        : 3;


                const label =
                    day.date
                        .toLocaleDateString(
                            currentLanguage ===
                                "ru"
                                ? "ru-RU"
                                : "tg-TJ",
                            {
                                weekday:
                                    "short"
                            }
                        );


                return `

                    <div class="chart-column">

                        <div class="chart-value">
                            ${formatMoney(
                                day.revenue
                            )}
                        </div>

                        <div class="chart-bar-wrap">

                            <div
                                class="chart-bar"
                                style="height:${height}%"
                            ></div>

                        </div>

                        <span>
                            ${escapeHTML(label)}
                        </span>

                    </div>
                `;
            }
        ).join("");
}


/* =========================================================
   BRANCH REPORT
========================================================= */

function renderBranchReports(
    filteredOrders
) {

    const container =
        $("#branchReportList");


    if (!container) {
        return;
    }


    if (!branches.length) {

        container.innerHTML =
            `<p>${t("noData")}</p>`;

        return;
    }


    container.innerHTML =
        branches.map(
            branch => {

                const branchOrders =
                    filteredOrders.filter(
                        order =>
                            String(
                                order.branchId ||
                                order.branch?.id
                            ) ===
                            String(
                                branch.id
                            )
                    );


                const delivered =
                    getDeliveredOrders(
                        branchOrders
                    );


                const revenue =
                    calculateRevenue(
                        branchOrders
                    );


                return `

                    <div class="branch-report-item">

                        <div>

                            <strong>
                                ${escapeHTML(
                                    getBranchName(
                                        branch
                                    )
                                )}
                            </strong>

                            <span>
                                ${branchOrders.length}
                                ${t("ordersCount")}
                                •
                                ${delivered.length}
                                ${t("deliveredCount")}
                            </span>

                        </div>

                        <strong>
                            ${formatMoney(
                                revenue
                            )}
                        </strong>

                    </div>
                `;
            }
        ).join("");
}


/* =========================================================
   TOP PRODUCTS
========================================================= */

function renderTopProducts(
    filteredOrders
) {

    const tbody =
        $("#topProductsTable");


    if (!tbody) {
        return;
    }


    const stats = {};


    filteredOrders.forEach(
        order => {

            order.items.forEach(
                item => {

                    const id =
                        item.productId ||
                        item.id ||
                        getLocalizedValue(
                            item.name,
                            "unknown"
                        );


                    if (!stats[id]) {

                        stats[id] = {

                            id,

                            name:
                                item.name,

                            quantity: 0,

                            revenue: 0
                        };
                    }


                    stats[id].quantity +=
                        Number(
                            item.quantity
                        ) || 0;


                    stats[id].revenue +=
                        (
                            Number(
                                item.price
                            ) || 0
                        ) *
                        (
                            Number(
                                item.quantity
                            ) || 0
                        );
                }
            );
        }
    );


    const list =
        Object.values(stats)

            .sort(
                (a, b) =>
                    b.quantity -
                    a.quantity
            )

            .slice(
                0,
                10
            );


    if (!list.length) {

        tbody.innerHTML = `

            <tr>

                <td
                    colspan="4"
                    class="table-no-data"
                >
                    ${t("noData")}
                </td>

            </tr>
        `;

        return;
    }


    tbody.innerHTML =
        list.map(
            (item, index) => {

                const product =
                    getProductById(
                        item.id
                    );


                const name =
                    product
                        ? getProductName(
                            product
                        )
                        : getLocalizedValue(
                            item.name,
                            t("product")
                        );


                return `

                    <tr>

                        <td>
                            ${index + 1}
                        </td>

                        <td>
                            <strong>
                                ${escapeHTML(name)}
                            </strong>
                        </td>

                        <td>
                            ${item.quantity}
                        </td>

                        <td>
                            <strong>
                                ${formatMoney(
                                    item.revenue
                                )}
                            </strong>
                        </td>

                    </tr>
                `;
            }
        ).join("");
}


/* =========================================================
   GLOBAL SEARCH
========================================================= */

function handleGlobalSearch() {

    const value =
        $("#adminGlobalSearch")
            ?.value
            .trim() ||
        "";


    if (!value) {
        return;
    }


    const query =
        value.toLowerCase();


    const order =
        orders.find(
            item => `
                ${item.id}
                ${item.customerName}
                ${item.customerPhone}
                ${item.phone}
            `
                .toLowerCase()
                .includes(
                    query
                )
        );


    if (order) {

        openPage(
            "orders"
        );


        if (
            $("#orderSearch")
        ) {

            $("#orderSearch").value =
                value;
        }


        renderOrders();

        return;
    }


    const product =
        products.find(
            item => `
                ${item.name?.tg || ""}
                ${item.name?.ru || ""}
            `
                .toLowerCase()
                .includes(
                    query
                )
        );


    if (product) {

        openPage(
            "products"
        );


        if (
            $("#productSearch")
        ) {

            $("#productSearch")
                .value =
                value;
        }


        renderProducts();

        return;
    }


    showToast(
        t("searchNoResult"),
        "warning"
    );
}


/* =========================================================
   CSV EXPORT
========================================================= */

function exportOrdersCSV() {

    const list =
        getFilteredOrders();


    const rows = [

        [
            "Order ID",
            "Customer",
            "Phone",
            "Branch",
            "Address",
            "Status",
            "Subtotal",
            "Delivery",
            "Total",
            "Payment",
            "Date"
        ]
    ];


    list.forEach(
        order => {

            rows.push([

                order.id,

                order.customerName,

                order.customerPhone ||
                order.phone ||
                "",

                getOrderBranchName(
                    order
                ),

                order.address || "",

                getStatusLabel(
                    order.status
                ),

                order.subtotal,

                order.deliveryFee,

                order.total,

                getPaymentLabel(
                    order.paymentMethod ||
                    order.payment
                ),

                formatDateTime(
                    order.createdAt
                )
            ]);
        }
    );


    const csv =
        "\uFEFF" +
        rows.map(
            row =>
                row.map(
                    cell =>
                        `"${String(
                            cell ?? ""
                        )
                            .replaceAll(
                                '"',
                                '""'
                            )}"`
                ).join(",")
        ).join("\n");


    const blob =
        new Blob(
            [csv],
            {
                type:
                    "text/csv;charset=utf-8;"
            }
        );


    const url =
        URL.createObjectURL(
            blob
        );


    const link =
        document.createElement(
            "a"
        );


    link.href =
        url;


    link.download =
        `tfc-orders-${Date.now()}.csv`;


    document.body.appendChild(
        link
    );


    link.click();

    link.remove();


    URL.revokeObjectURL(
        url
    );


    showToast(
        t("csvExported"),
        "success"
    );
}


/* =========================================================
   PRINT REPORT
========================================================= */

function printReport() {

    const filtered =
        filterOrdersByPeriod(
            currentReportPeriod
        );


    const revenue =
        calculateRevenue(
            filtered
        );


    const delivered =
        getDeliveredOrders(
            filtered
        );


    const printWindow =
        window.open(
            "",
            "_blank",
            "width=1000,height=700"
        );


    if (!printWindow) {
        return;
    }


    const rows =
        filtered.map(
            order => `
                <tr>

                    <td>
                        ${escapeHTML(order.id)}
                    </td>

                    <td>
                        ${escapeHTML(
                            order.customerName
                        )}
                    </td>

                    <td>
                        ${escapeHTML(
                            getOrderBranchName(
                                order
                            )
                        )}
                    </td>

                    <td>
                        ${escapeHTML(
                            getStatusLabel(
                                order.status
                            )
                        )}
                    </td>

                    <td>
                        ${formatMoney(
                            order.total
                        )}
                    </td>

                    <td>
                        ${formatDateTime(
                            order.createdAt
                        )}
                    </td>

                </tr>
            `
        ).join("");


    printWindow.document.write(`
        <!DOCTYPE html>

        <html lang="${currentLanguage}">

        <head>

            <meta charset="UTF-8">

            <title>
                TFC ${t("report")}
            </title>

            <style>

                * {
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                    padding: 40px;
                    font-family:
                        Arial,
                        sans-serif;
                    color: #151515;
                }

                h1 {
                    margin-bottom: 5px;
                }

                .summary {
                    display: flex;
                    gap: 30px;
                    margin:
                        30px
                        0;
                }

                .summary div {
                    padding: 15px;
                    border:
                        1px solid #ddd;
                    border-radius:
                        10px;
                }

                table {
                    width: 100%;
                    border-collapse:
                        collapse;
                }

                th,
                td {
                    padding:
                        10px;
                    border:
                        1px solid #ddd;
                    text-align:
                        left;
                    font-size:
                        12px;
                }

                th {
                    background:
                        #f4f4f4;
                }

                .footer {
                    margin-top:
                        30px;
                    color:
                        #777;
                    font-size:
                        12px;
                }

            </style>

        </head>

        <body>

            <h1>
                TFC — ${t("report")}
            </h1>

            <p>
                ${t("generated")}:
                ${formatDateTime(
                    new Date()
                )}
            </p>


            <div class="summary">

                <div>
                    <strong>
                        ${t("orders")}
                    </strong>
                    <br>
                    ${filtered.length}
                </div>

                <div>
                    <strong>
                        ${t("deliveredOrders")}
                    </strong>
                    <br>
                    ${delivered.length}
                </div>

                <div>
                    <strong>
                        ${t("revenue")}
                    </strong>
                    <br>
                    ${formatMoney(
                        revenue
                    )}
                </div>

            </div>


            <table>

                <thead>

                    <tr>

                        <th>
                            ${t("orderNumber")}
                        </th>

                        <th>
                            ${t("customer")}
                        </th>

                        <th>
                            ${t("branch")}
                        </th>

                        <th>
                            ${t("status")}
                        </th>

                        <th>
                            ${t("amount")}
                        </th>

                        <th>
                            ${t("date")}
                        </th>

                    </tr>

                </thead>

                <tbody>
                    ${rows}
                </tbody>

            </table>


            <div class="footer">
                ${t("demoNotice")}
            </div>

        </body>

        </html>
    `);


    printWindow.document.close();


    setTimeout(
        () => {

            printWindow.focus();

            printWindow.print();

        },
        300
    );
}


/* =========================================================
   MODALS
========================================================= */

function openAdminModal(id) {

    const modal =
        document.getElementById(
            id
        );


    if (!modal) {
        return;
    }


    modal.classList.add(
        "active"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );
}


function closeAdminModal(id) {

    const modal =
        document.getElementById(
            id
        );


    if (!modal) {
        return;
    }


    modal.classList.remove(
        "active"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    if (
        !document.querySelector(
            ".admin-modal.active"
        )
    ) {

        document.body.classList.remove(
            "modal-open"
        );
    }


    if (
        id === "deleteModal"
    ) {

        pendingDelete = null;
    }
}


/* =========================================================
   SIDEBAR
========================================================= */

function openSidebar() {

    $("#sidebar")
        ?.classList.add(
            "active"
        );


    $("#sidebarOverlay")
        ?.classList.add(
            "active"
        );
}


function closeSidebar() {

    $("#sidebar")
        ?.classList.remove(
            "active"
        );


    $("#sidebarOverlay")
        ?.classList.remove(
            "active"
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
        document.createElement(
            "div"
        );


    toast.className =
        `toast ${type}`;


    const icons = {
        success: "✓",
        error: "!",
        warning: "⚠",
        info: "i"
    };


    toast.innerHTML = `

        <span class="toast-icon">
            ${icons[type] || "i"}
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
   REFRESH
========================================================= */

function refreshData(
    showMessage = true
) {

    loadData();

    renderAll();


    if (showMessage) {

        showToast(
            t("dataRefreshed"),
            "success"
        );
    }
}


/* =========================================================
   REPORT PERIOD
========================================================= */

function setReportPeriod(
    period
) {

    currentReportPeriod =
        period;


    $$(".report-period-btn")
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.period ===
                    period
                );
            }
        );


    renderReports();
}


/* =========================================================
   CLEAR ORDER FILTERS
========================================================= */

function clearOrderFilters() {

    if (
        $("#orderSearch")
    ) {
        $("#orderSearch").value =
            "";
    }


    if (
        $("#orderStatusFilter")
    ) {
        $("#orderStatusFilter").value =
            "all";
    }


    if (
        $("#orderBranchFilter")
    ) {
        $("#orderBranchFilter").value =
            "all";
    }


    if (
        $("#orderDateFilter")
    ) {
        $("#orderDateFilter").value =
            "";
    }


    renderOrders();
}


/* =========================================================
   RENDER ALL
========================================================= */

function renderAll() {

    applyTranslations();

    renderStatusFilter();

    renderOrderBranchFilter();

    updateBadges();

    renderDashboard();

    renderOrders();

    renderNewOrders();

    renderProducts();

    renderBranches();

    renderReports();

    setCurrentYear();
}


/* =========================================================
   YEAR
========================================================= */

function setCurrentYear() {

    if (
        $("#currentYear")
    ) {

        $("#currentYear")
            .textContent =
            new Date()
                .getFullYear();
    }
}


/* =========================================================
   DOCUMENT CLICK
========================================================= */

function handleDocumentClick(event) {

    const language =
        event.target.closest(
            "[data-lang]"
        );


    if (language) {

        setLanguage(
            language.dataset.lang
        );

        return;
    }


    const pageButton =
        event.target.closest(
            "[data-page]"
        );


    if (pageButton) {

        openPage(
            pageButton.dataset.page
        );

        return;
    }


    const openPageButton =
        event.target.closest(
            "[data-open-page]"
        );


    if (openPageButton) {

        openPage(
            openPageButton.dataset.openPage
        );

        return;
    }


    const statusDashboard =
        event.target.closest(
            "[data-status-filter]"
        );


    if (statusDashboard) {

        openPage(
            "orders"
        );


        const status =
            normalizeStatus(
                statusDashboard
                    .dataset
                    .statusFilter
            );


        if (
            $("#orderStatusFilter")
        ) {

            $("#orderStatusFilter")
                .value =
                status;
        }


        renderOrders();

        return;
    }


    const viewOrder =
        event.target.closest(
            "[data-view-order]"
        );


    if (viewOrder) {

        openOrderModal(
            viewOrder.dataset.viewOrder
        );

        return;
    }


    const accept =
        event.target.closest(
            "[data-accept-order]"
        );


    if (accept) {

        acceptOrder(
            accept.dataset.acceptOrder
        );

        return;
    }


    const editProduct =
        event.target.closest(
            "[data-edit-product]"
        );


    if (editProduct) {

        openProductForm(
            editProduct.dataset.editProduct
        );

        return;
    }


    const toggleProductButton =
        event.target.closest(
            "[data-toggle-product]"
        );


    if (toggleProductButton) {

        toggleProduct(
            toggleProductButton
                .dataset
                .toggleProduct
        );

        return;
    }


    const deleteProduct =
        event.target.closest(
            "[data-delete-product]"
        );


    if (deleteProduct) {

        askDeleteProduct(
            deleteProduct
                .dataset
                .deleteProduct
        );

        return;
    }


    const editBranch =
        event.target.closest(
            "[data-edit-branch]"
        );


    if (editBranch) {

        openBranchForm(
            editBranch.dataset.editBranch
        );

        return;
    }


    const toggleBranchButton =
        event.target.closest(
            "[data-toggle-branch]"
        );


    if (toggleBranchButton) {

        toggleBranch(
            toggleBranchButton
                .dataset
                .toggleBranch
        );

        return;
    }


    const deleteBranch =
        event.target.closest(
            "[data-delete-branch]"
        );


    if (deleteBranch) {

        askDeleteBranch(
            deleteBranch
                .dataset
                .deleteBranch
        );

        return;
    }


    const closeModalButton =
        event.target.closest(
            "[data-close-admin-modal]"
        );


    if (closeModalButton) {

        closeAdminModal(
            closeModalButton
                .dataset
                .closeAdminModal
        );

        return;
    }


    const period =
        event.target.closest(
            "[data-period]"
        );


    if (period) {

        setReportPeriod(
            period.dataset.period
        );
    }
}


/* =========================================================
   CHANGE EVENTS
========================================================= */

function handleDocumentChange(
    event
) {

    if (
        event.target.id ===
        "modalOrderStatus"
    ) {

        updateOrderStatus(
            event.target.dataset.orderId,
            event.target.value
        );


        openOrderModal(
            event.target.dataset.orderId
        );
    }
}


/* =========================================================
   STORAGE SYNC
========================================================= */

function handleStorageChange(
    event
) {

    if (
        [
            STORAGE_KEYS.products,
            STORAGE_KEYS.orders,
            STORAGE_KEYS.branches
        ].includes(
            event.key
        )
    ) {

        refreshData(
            false
        );
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
            ["tg", "ru"].includes(
                language
            )
        ) {

            currentLanguage =
                language;

            renderAll();
        }
    }
}


/* =========================================================
   BIND EVENTS
========================================================= */

function bindEvents() {

    document.addEventListener(
        "click",
        handleDocumentClick
    );


    document.addEventListener(
        "change",
        handleDocumentChange
    );


    $("#mobileSidebarBtn")
        ?.addEventListener(
            "click",
            openSidebar
        );


    $("#sidebarCloseBtn")
        ?.addEventListener(
            "click",
            closeSidebar
        );


    $("#sidebarOverlay")
        ?.addEventListener(
            "click",
            closeSidebar
        );


    $("#refreshDataBtn")
        ?.addEventListener(
            "click",
            () => {

                refreshData(
                    true
                );
            }
        );


    $("#notificationBtn")
        ?.addEventListener(
            "click",
            () => {

                openPage(
                    "new-orders"
                );
            }
        );


    $("#orderSearch")
        ?.addEventListener(
            "input",
            renderOrders
        );


    $("#orderStatusFilter")
        ?.addEventListener(
            "change",
            renderOrders
        );


    $("#orderBranchFilter")
        ?.addEventListener(
            "change",
            renderOrders
        );


    $("#orderDateFilter")
        ?.addEventListener(
            "change",
            renderOrders
        );


    $("#clearOrderFiltersBtn")
        ?.addEventListener(
            "click",
            clearOrderFilters
        );


    $("#productSearch")
        ?.addEventListener(
            "input",
            renderProducts
        );


    $("#productCategoryFilter")
        ?.addEventListener(
            "change",
            renderProducts
        );


    $("#productStatusFilter")
        ?.addEventListener(
            "change",
            renderProducts
        );


    $("#addProductBtn")
        ?.addEventListener(
            "click",
            () => {

                openProductForm();
            }
        );


    $("#productForm")
        ?.addEventListener(
            "submit",
            submitProduct
        );


    $("#productForm")
        ?.addEventListener(
            "input",
            clearInvalidField
        );


    $("#branchForm")
        ?.addEventListener(
            "input",
            clearInvalidField
        );


    $("#productCategory")
        ?.addEventListener(
            "change",
            updateProductMeasureFields
        );


    $("#addBranchBtn")
        ?.addEventListener(
            "click",
            () => {

                openBranchForm();
            }
        );


    $("#branchForm")
        ?.addEventListener(
            "submit",
            submitBranch
        );


    $("#confirmDeleteBtn")
        ?.addEventListener(
            "click",
            confirmDelete
        );


    $("#exportOrdersBtn")
        ?.addEventListener(
            "click",
            exportOrdersCSV
        );


    $("#printReportBtn")
        ?.addEventListener(
            "click",
            printReport
        );


    $("#adminGlobalSearch")
        ?.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Enter"
                ) {

                    event.preventDefault();

                    handleGlobalSearch();
                }
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
                event.key !==
                "Escape"
            ) {
                return;
            }


            $$(".admin-modal.active")
                .forEach(
                    modal => {

                        closeAdminModal(
                            modal.id
                        );
                    }
                );


            closeSidebar();
        }
    );
}


/* =========================================================
   LOADER
========================================================= */

function hideLoader() {

    const loader =
        $("#adminLoader");


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
                450
            );

        },
        300
    );
}


/* =========================================================
   INIT
========================================================= */

function init() {

    loadData();

    bindEvents();

    applyTranslations();

    openPage(
        "dashboard"
    );

    renderAll();

    hideLoader();


    console.log(
        "%cTFC Admin Panel TG / RU",
        "font-size:20px;font-weight:900;color:#e50914;"
    );


    console.log(
        "Demo version — Nurullo Coding"
    );
}


/* =========================================================
   START
========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        init
    );

} else {

    init();
}