export const sleepMenu = ['Меню подушек', 'Дополнительные принадлежности', 'Назад в основное меню']


export const menuOptions = (menu) => {
    const menuArr = menu.map(el => [{text: el}])

    return  {reply_markup: {
                keyboard: [menuArr]
            }
    }
}


// const sleepMenuOpt = {
//     reply_markup: {
//         keyboard: [
//             [{ text: 'Меню подушек'}],
//             [{ text: 'Дополнительные принадлежности'}],
//             [{ text: 'Назад в основное меню'}],
//         ]
//     }
// }