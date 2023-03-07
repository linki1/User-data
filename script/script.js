// Функция возвращающая имя и фамилию, с 1 большими буквами и без лишниш пробелов
function giveName() {
    let firstusername = "";
    let lastusername = "";

    firstusername = prompt('What is your name?', '').toUpperCase().trim();

    while (firstusername == "") {
        alert("You don't wrote first name! ")
        firstusername = prompt('What is your name?', '').toUpperCase().trim();
    }

    firstusername = firstusername.slice(0, 1) + firstusername.slice(1).toLocaleLowerCase();

    lastusername = prompt('what is your last name?', '').toUpperCase().trim();
    while (lastusername == "") {
        alert("You don't wrote last name ! ")
        lastusername = prompt('what is your last name?', '').toUpperCase().trim();
    }

    lastusername = lastusername.slice(0, 1) + lastusername.slice(1).toLocaleLowerCase();
    let username = firstusername + " " + lastusername;

    return username;

}

let username = giveName();
// запрос и проверка емейл который ввел пользователь
username.startsWith()
let emale = prompt('Enter your Email', "");

emale.replaceAll().toLocaleLowerCase();
emale = (!emale.includes('@')) ? ` not valid email  <b>${emale}</b> (symbol @ not exist)` :
    (emale.startsWith('@')) ? `not valid email <b>${emale}</b> (symbol @ find in first place)` :
        (emale.endsWith('@')) ? ` not valid email <b>${emale}</b> (symbol @ find in last place)` :
            `<b>${emale}</b>`;

// функция делающая дату без лишних пробелов 
function createNamearr(variable) {
    const namearr = variable.trim().split(' ');
    let date = [];
    let counter = 0;
    for (let i = 0; i < variable.length; i++) {

        if (!namearr[i] == " ") {
            date[counter] = namearr[i];
        }
        counter++;
    }

    let createDate = "";
    for (let i = 0; i < date.length; i++) {
        createDate += date[i];
    }
    return createDate;
}

// присвоение и расчет в переменную old возраста
let dataset = createNamearr(prompt('Enter your date of birth', ""));
let nowDate = String(new Date);
let old = nowDate.slice(11, 15) - dataset;

// вывод всех данных
document.writeln(
    `<ul>
    <li> Full name: <b>${username}</b></li>
    <li> Email: ${emale}</li>
    <li>Age: <b>${old}</b></li>
    </ul>`
)