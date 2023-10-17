const TelegramApi = require('node-telegram-bot-api')
require('dotenv').config()

const token = '6552090051:AAFf-Paq6kck0vlhLnRSvci0O3d0Ud-5Ihw'
// const token = '6512915316:AAFXYqBVCXPZnV5i7TEcECwHwfOH3n018_Y'
// const token = process.env.TELEGRAM_TOKEN
let bot

// if (process.env.NODE_ENV === 'production') {
    bot = new TelegramApi(token) // create bot
//     bot.setWebHook(process.env.VERCEL_URL + bot.token)
//     console.log('bot is alive')
// } else {
    // bot = new TelegramApi(token, {polling: true}) // create bot
// }

// bot.on('message', async (msg) => {   // request on message receive
//     console.log(msg)
//     const text = msg.text
//     const chatId = msg.chat.id
//     const messageId = msg.message_id 

//     if (text === '/start') {
//         back.push(text)
//         await bot.sendSticker(chatId, './img/canvas.png')
//         await bot.sendMessage(chatId, `${msg.from.first_name} ${msg.from.last_name}, Вас приветствует бот отеля Royal Hotel!`, welcomeMenu)
//     }
// })

bot.setMyCommands([
    {command: '/start', description: 'Здравствуйте'},
    {command: '/wifi', description: 'Интернет'},
])

const welcomeMenu = {
    reply_markup: {
        keyboard: [
            [{ text: 'Идеальный сон'}, { text: 'Выставка в холле отеля'}],
            [{ text: 'Спа центр отеля'}, { text: 'Где поесть в отеле'}],
            [{ text: 'Интернет'}, { text: 'Аптечка'}],
            [{ text: 'Утюг и доска'}, { text: 'Минибар'}],
            [{ text: 'Консьерж сервис'}, { text: 'Что посмотреть в городе'}],
            [{ text: 'Популярные рестораны города'}],
            [{ text: 'Как воспользоваться услугами прачечной?'}],
        ]
    }
}

const sleepMenu = [
    {title: 'Меню подушек', message: 'Для Вашего удобства мы предлагаем меню подушек, в котором Вы сможете выбрать наиболее удобную подушку для Вашего комфортного сна. Обратитесь на ресепшен для получения информации (2020, 2030).'},
    {title: 'Дополнительные принадлежности', message: 'Для Вашего удобства Вы можете попросить второе одеяло, для комфортного сна. Обратитесь на ресепшен для получения информации (2020, 2030).'},
    {title: 'Назад'}
]

const spaMenu = [
    {title: 'Как записаться в СПА?', message: 'Вы можете позвонить из номера (2060), по телефону +7 (4852) 67-29-09 или пройти на стойку ресепшен СПА-центра. Удобная онлайн запись: https://n67878.yclients.com'},
    {title: 'Где расположен СПА-центр?', message: 'СПА-центр расположен на 0 этаже отеля. При выходе из лифта — поверните направо.'},
    {title: 'Что необходимо взять с собой на сеанс?', message: 'Необходимо взять с собой купальные принадлежности, сланцы и шапочку.'},
    {title: 'Как записаться к специалистам спа комплекса?', message: 'Вы можете позвонить из номера (2060), по телефону +7 (4852) 67-29-09 или пройти на стойку ресепшен СПА-центра.'},
    {title: 'Назад'}
]

const foodMenu = [
    {title: 'Ресторан отеля', message: 'Ресторан Легран : Вы можете пройти в ресторан «Легран», который расположен на  0 этаже отеля Royal SPA. Часы работы ресторана: 13:00-23:00. Забронировать стол можно по номеру (2002).'},
    {title: 'Lobby Bar', message: 'Вы можете пройти в Лобби - бар, который расположен на  0 этаже отеля Royal SPA. Часы работы: круглосуточно. Забронировать стол можно по номеру (2002).'},
    {title: 'Room servise', message: 'Вы можете воспользоваться круглосуточным room-service, меню находиться у вас в номере на столе. Часы работы: круглосуточно. Сделать заказ можно по номеру (2002).'},
    {title: 'Теплый выезд', message: 'Вы можете заказать набор пирогов в дорогу. Для его заказа необходимо позвонить (2020/2030) или подойти на ресепшн отеля. Коллеги подскажут о наличии и проконсультируют по времени изготовления.'},
    {title: 'Завтрак'},
    {title: 'Назад'}
]

const breakfastMenu = [
    {title: 'Ланч бокс', message: 'Если Вы уезжаете из отеля и не сможете попасть на завтрак , Вы можете заказать ланч бокс. Для его заказа необходимо позвонить (2020/2030) или подойти на ресепшн  отеля. При заказе ланч бокса Вам предоставляется выбор напитка (кофе/чай/вода), в ланч бокс так же входит: сэндвич, фрукт, йогурт, выпечка.'},
    {title: 'Завтрак в лобби баре', message: 'Вы можете пройти в Лобби - бар, который расположен на  0 этаже отеля Royal Hotel. Для наших гостей разработано меню ранних завтраков, которое действует ежедневно с 05:00 до 12:00. Забронировать стол можно по номеру (2002).'},
    {title: 'Завтрак шведский стол', message: 'Вы можете пройти в Лобби - бар, который расположен на  0 этаже отеля Royal Hotel. Для наших гостей разработано меню ранних завтраков, которое действует ежедневно с 05:00 до 12:00. Забронировать стол можно по номеру (2002).'},
    {title: 'Назад'}
]

const wifiMenu = [
    {title: 'Wi-Fi', message: `*Подключиться к сети Wi\\-Fi\\.*\n\nCеть: ROYAL HOTEL SPA\\.\nПароль: регистарция по Вашему личному номеру телефона`},
    {title: 'Коворкинг', message: `На 0 этаже отеля расположен бизнес\\-центр с компьютером и принтером, которыми Вы также можете воспользоваться в любое время\\. Пароль для входа в учетную запись на компьютере: 123`},
    {title: 'Назад'}
]

const miniBarMenu = [
    {title: 'Минибар в номерах категории «Стандарт»', message: 'В номерах категории «Стандарт» минибар предоставляется по депозиту в размере 3000 рублей. Минибар в номерах оплачивается по выезду и пополняется каждый день.'},
    {title: 'Минибар в номерах категории «Делюкс», «Люкс», «Посольский люкс», «Презедентский люкс»', message: 'Минибар в номерах оплачивается по выезду и пополняется каждый день.'},
    {title: 'Назад'}
]

const serviceMenu = [
    {title: 'Цветы', message: 'Если Вы хотите заказать цветы, обратитесь на ресепшен службы приема и размещения.'},
    {title: 'Трансфер', message: 'Если Вы хотите заказать трансфер, обратитесь на ресепшен службы приема и размещения. Хотели бы обратить Ваше внимание, что отель пользуется услугами транспортной компании. Минимальное время аренды автомобиля (с водителем) – 4 часа.'},
    {title: 'Назад'}
]

const visitMenu = [
    {title: 'Часовня Казанской Богоматери', message: 'https://yandex.ru/maps/org/chasovnya_kazanskoy_ikony_bozhiyey_materi/1695985384/?ll=39.879993%2C57.631971&mode=search&sll=39.892637%2C57.622072&sspn=0.013416%2C0.004597&text=%D0%A7%D0%B0%D1%81%D0%BE%D0%B2%D0%BD%D1%8F%20%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B9%20%D0%91%D0%BE%D0%B3%D0%BE%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8&z=12.86'},
    {title: 'Церковь Архангела Михаила', message: 'https://yandex.ru/maps/org/garnizonnaya_tserkov_arkhangela_mikhaila/1099562393/?ll=39.892637%2C57.622072&z=16.37'},
    {title: 'Церковь Богоявления', message: 'https://yandex.ru/maps/org/khram_bogoyavleniya_gospodnya/232637384229/?ll=39.879993%2C57.631971&mode=search&sll=39.879993%2C57.631971&sspn=0.080202%2C0.052354&text=%D0%A6%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C%20%D0%91%D0%BE%D0%B3%D0%BE%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F&z=12.86'},
    {title: 'Спасо-Преображенский монастырь (Ярославский музей-заповедник)', message: 'https://yandex.ru/maps/org/yaroslavskiy_muzey_zapovednik/120403955433/?ll=39.887499%2C57.620942&z=14.58'},
    {title: 'Улица Кирова', message: 'https://yandex.ru/maps/16/yaroslavl/geo/ulitsa_kirova/8025723/?ll=39.889309%2C57.626002&z=17.3'},
    {title: 'Успенский кафедральный собор', message: 'https://yandex.ru/maps/org/kafedralny_sobor_uspeniya_presvyatoy_bogoroditsy/1720613052/?ll=39.902063%2C57.622415&mode=search&sll=40.996136%2C56.988708&sspn=0.013416%2C0.004677&text=%D0%A3%D1%81%D0%BF%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D1%81%D0%BE%D0%B1%D0%BE%D1%80&z=16.37'},
    {title: 'Парк на Стрелке', message: 'https://yandex.ru/maps/org/park_strelka/216329343153/?ll=39.904023%2C57.619260&z=16.4'},
    {title: 'Волжская набережная', message: 'https://yandex.ru/maps/16/yaroslavl/geo/volzhskaya_naberezhnaya/8025620/?ll=39.897715%2C57.632146&z=14'},
    {title: 'Назад'}
]

const restaurantMenu = [
    {title: 'Грузинская кухня', message: 'Описание'},
    {title: 'Авторская кухня', message: 'Описание'},
    {title: 'Паб, пивной бар', message: 'Описание'},
    {title: 'Итальянская кухня', message: 'Описание'},
    {title: 'Восточная, азиатская кухня', message: 'Описание'},
    {title: 'Европейская', message: 'Описание'},
    {title: 'Русская кухня', message: 'Описание'},
    {title: 'Назад'}
]



const menuOptions = (menu) => {
    const menuArr = menu.map(el => [{text: el.title}])

    return  {reply_markup: {
                keyboard: menuArr
            }
    }
}

const back = []

const start = () => {
    // bot.on("polling_error", err => console.log(err.data.error.message));

    bot.on('message', async (msg) => {   // request on message receive
        console.log(msg)
        const text = msg.text
        const chatId = msg.chat.id
        const messageId = msg.message_id 
    
        if (text === '/start') {
            back.push(text)
            await bot.sendSticker(chatId, './img/canvas.png')
            return bot.sendMessage(chatId, `${msg.from.first_name} ${msg.from.last_name}, Вас приветствует бот отеля Royal Hotel!`, welcomeMenu)
        }


        if (text === 'Идеальный сон') {
            back.push(text)
            return bot.sendMessage(chatId, `${text}`, menuOptions(sleepMenu))
        }
            if (sleepMenu.map(el => el.title).includes(text)) {
                const message = sleepMenu.filter(el => el.title === text)[0].message
                if(message) {
                    return bot.sendMessage(chatId, message)
                }
            }


        if (text === 'Выставка в холле отеля') {
            return bot.sendMessage(chatId, 'Если Вы хотите приобрести один из выставочных образцов. Необходимо позвонить по указанному номеру телефона, и договориться об оплате. На ресепшен отеля сотрудники упакуют приобретенную Вами картину в коробку. Телефоны для связи: Павел +7 (910) 339-70-30, Ольга +7 (910) 963-02-88')
        }


        if (text === 'Спа центр отеля') {
            back.push(text)
            return bot.sendMessage(chatId, `${text}`, menuOptions(spaMenu))
        }
            if (spaMenu.map(el => el.title).includes(text)) {
                const message = spaMenu.filter(el => el.title === text)[0].message
                if(message) {
                    return bot.sendMessage(chatId, message)
                }
            }


        if (text === 'Где поесть в отеле') {
            back.push(text)
            return bot.sendMessage(chatId, `${text}`, menuOptions(foodMenu))
        }
            if (foodMenu.map(el => el.title).includes(text)) {
                const message = foodMenu.filter(el => el.title === text)[0].message
                if(message) {
                    return bot.sendMessage(chatId, message)
                }
            }

            if (text === 'Завтрак') {
                back.push(text)
                return bot.sendMessage(chatId, `${text}`, menuOptions(breakfastMenu))
            }
                if (breakfastMenu.map(el => el.title).includes(text)) {
                    const message = breakfastMenu.filter(el => el.title === text)[0].message
                    if(message) {
                        return bot.sendMessage(chatId, message)
                    }
                }


        if (text === 'Как воспользоваться услугами прачечной?') {
            return bot.sendMessage(chatId, 'В шкафу в Вашем номере есть прайс-лист и пакет для вещей. Необходимо самостоятельно отметить услугу, положить вещи в пакет и позвонить на ресепшен (2020,2030). К Вам в номер подойдет старшая горничная, заберет и затем принесет в номер вещи по готовности. Часы работы прачечной: с 7:00 до 21:00')
        }


        if (text === 'Интернет') {
            back.push(text)
            return bot.sendMessage(chatId, `${text}`, menuOptions(wifiMenu))
        }
            if (wifiMenu.map(el => el.title).includes(text)) {
                const message = wifiMenu.filter(el => el.title === text)[0].message
                if(message) {
                    return bot.sendMessage(chatId, message, {parse_mode: "MarkdownV2"})
                }
            }
        
        if (text === 'Аптечка') {
            return bot.sendMessage(chatId, 'Правилами отеля запрещено выдавать гостям какие-либо медикаменты. Мы можем предложить Вам бинты и пластырь, градусник, хлоргексидин. Если Вам необходимы иные лекарства, Вы можете воспользоваться доставкой Е-аптека или же пройти до ближайшей аптеки -  «Вита», «Столички».')
        }

        if (text === 'Утюг и доска') {
            return bot.sendMessage(chatId, 'На каждом этаже между номерами 02 и 03 стоит гладильная доска и утюг, которыми Вы можете воспользоваться. По желанию мы можем принести утюг в номер.')
        }


        if (text === 'Минибар') {
            back.push(text)
            return bot.sendMessage(chatId, `${text}`, menuOptions(miniBarMenu))
        }
            if (miniBarMenu.map(el => el.title).includes(text)) {
                const message = miniBarMenu.filter(el => el.title === text)[0].message
                if(message) {
                    return bot.sendMessage(chatId, message)
                }
            }

        if (text === 'Консьерж сервис') {
            back.push(text)
            return bot.sendMessage(chatId, `${text}`, menuOptions(serviceMenu))
        }
            if (serviceMenu.map(el => el.title).includes(text)) {
                const message = serviceMenu.filter(el => el.title === text)[0].message
                if(message) {
                    return bot.sendMessage(chatId, message)
                }
            }

        if (text === 'Что посмотреть в городе') {
            back.push(text)
            return bot.sendMessage(chatId, `${text}`, menuOptions(visitMenu))
        }
            if (visitMenu.map(el => el.title).includes(text)) {
                const message = visitMenu.filter(el => el.title === text)[0].message
                if(message) {
                    return bot.sendMessage(chatId, message)
                }
            }

        if (text === 'Как заказать экскурсию') {
            return bot.sendMessage(chatId, 'Мы рекомендуем обратиться к нашим партнерам в экскурсионное агентство «А-тур», где можно заказать индивидуальную или групповую, пешую или автомобильную экскурсию. Скажите нашим , что Вы из отеля «Royal Spa» и коллеги проконсультируют Вас по всем вопросам. Телефон для связи: 8-920-132-35-35. Или можно заказать через сайт: https://а-тур.рф/')
        }

        if (text === 'Популярные рестораны города') {
            // back.push(text)
            return bot.sendMessage(chatId, 'https://yandex.ru/maps/16/yaroslavl/category/restaurant/')
        }
            // if (restaurantMenu.map(el => el.title).includes(text)) {
            //     const message = restaurantMenu.filter(el => el.title === text)[0].message
            //     if(message) {
            //         return bot.sendMessage(chatId, message)
            //     }
            // }
            
        if (text === 'Назад') {
            back.pop()
            if(back.pop() === 'Где поесть в отеле') {
                return bot.sendMessage(chatId, `${text}`, menuOptions(foodMenu))
            }
            return bot.sendMessage(chatId, `${text}`, welcomeMenu)
        }
        
        if (text === '/wifi') {
            return bot.sendMessage(chatId, `*Подключиться к сети Wi\\-Fi\\.*\n\nCеть: ROYAL HOTEL SPA\\.\nПароль: регистарция по Вашему личному номеру телефона`, {parse_mode: "MarkdownV2"})
        }
    
        return bot.sendMessage(chatId, 'Простите, я Вас не понял. Попробуйте еще раз.')

    })  
    
    bot.on('callback_query', msg => {
        const data = msg.data
        console.log(msg)
        const chatId = msg.message.chat.id
        bot.sendMessage(chatId, `${data}`)
    })
}

start()

module.export = bot