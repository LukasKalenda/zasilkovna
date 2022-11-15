// let hraciPlocha = [
//     ["1", "2", "3"], 
//     ["4", "5", "6"], 
//     ["7", "8", "9"]
// ];


// for (let index = 0; index < hraciPlocha.length; index++) {
//     console.log(hraciPlocha[index]);
//     let subbaray = hraciPlocha[index];   

//     for (let j = 0; j < subbaray.length; j++) {
//         console.log(subbaray[j])
        
//     }
// }
// let i = 0;
// while(i < 15) console.log(i++)

class User {
    name;
    registrationTime;

    #dateDay = new Date().getDate();
    #dateMonth = new Date().getMonth();
    #dateYear = new Date().getFullYear();
    #dateHour = new Date().getHours();
    #dateMinutes = new Date().getMinutes();
    

    constructor(name, registrationTime) {
        this.name = name;
        this.registrationTime = `(${this.#dateDay}. ${this.#dateMonth}. ${this.#dateYear} ${this.#dateHour}:${this.#dateMinutes})`;
    }

    getWrite = () => {
        return `Jméno uživatele: ${this.name}, čas přihlášení: ${this.registrationTime}`;
    }
}

class Message {
    content;
    user; // uzivatel - name z predchozi tridy
    sendTime;
}

class Channel {
    channelName;
    messages;
}

class Server {
    serverName;
    channelNames; // všechny
    users;        // všichni
}

console.log(new User("Karel").getWrite());
console.log(new Date().getFullYear());