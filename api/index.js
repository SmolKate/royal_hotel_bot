// const TelegramApi = require('node-telegram-bot-api')

// // const token = '6552090051:AAFf-Paq6kck0vlhLnRSvci0O3d0Ud-5Ihw'
// const token = '6512915316:AAFXYqBVCXPZnV5i7TEcECwHwfOH3n018_Y'

// module.exports = async (request, response) => {
//     try {
//         const bot = new TelegramApi(token, {polling: true}) // create bot
//         const {body} = request

//         if (body.message) {
//             const {chat: {id}, text} = body.message

//             await bot.sendMessage(id, `${text}, Вас приветствует бот отеля Royal Hotel!`)

//         }

//     } catch (error) {
//         console.log(error)
//     }

//     response.send('ok')
// }


// const app = require('../index')

// module.export = app

