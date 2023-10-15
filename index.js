const TelegramApi = require('node-telegram-bot-api')

const token = '6552090051:AAFf-Paq6kck0vlhLnRSvci0O3d0Ud-5Ihw'

const bot = new TelegramApi(token, {polling: true}) // create bot

bot.setMyCommands([
    {command: '/start', description: 'Приветствие'},
    {command: '/wifi', description: 'Общая информация'},
])


const welcomeOptions = {
    reply_markup: {
        keyboard: [
            [{ text: 'Интернет', callback_data: '/wifi'}],
            [{ text: 'Интернет', callback_data: '/wifi'}],
        ]
    }
}

const start = () => {
    bot.on('message', async (msg) => {   // request on message receive

        const text = msg.text
        const chatId = msg.chat.id
    
        if (text === '/start') {
            await bot.sendSticker(chatId, './img/canvas.png')
            return bot.sendMessage(chatId, `${msg.from.first_name} ${msg.from.last_name}, Вас приветствует бот отеля Royal Hotel!`, welcomeOptions)
        }
    
        if (text === '/wifi') {
            return bot.sendMessage(chatId, `Подключиться к сети Wi-Fi. Cеть: ROYAL HOTEL SPA. Пароль: регистарция по Вашему личному номеру телефона`)
        }
    
        return bot.sendMessage(chatId, 'Простите, я Вас не понял. Попробуйте еще раз.')

    })  

    bot.on('callback_query', msg => {
        const data = msg.data
        console.log(data)
        const chatId = msg.message.chat.id
        return bot.sendMessage(chatId, `${data}`)
    })
}

start()