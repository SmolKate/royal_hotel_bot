const TelegramApi = require('node-telegram-bot-api')

const token = '6552090051:AAFf-Paq6kck0vlhLnRSvci0O3d0Ud-5Ihw'
// const token = '6512915316:AAFXYqBVCXPZnV5i7TEcECwHwfOH3n018_Y'

module.exports = async (request, response) => {
    try {
        const bot = new TelegramApi(token) // create bot

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


        const {body} = request

        if (body.message) {
            const {chat: {id}, text} = body.message

            await bot.sendMessage(id, `${text}, Вас приветствует бот отеля Royal Hotel!`)

        }

    } catch (error) {
        console.log(error)
    }

    response.send('ok')
}


