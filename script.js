let quotes = [
    {
        id: 0,
        name: 'Hazrat Muhammad',
        text: "Leave me as I leave you, for the people who were before you were ruined because their questions and their differences over the prophets. So, if I forbid you to do something, then keep away from it. And if I order you to do something, then do of it as much as you can.",
        img: 'muhammad.jpg'
    },
    {
        id: 1,
        name: 'Hazrat Abu Bakar Saddique ',
        text: `Always fear Allah, like if only one person was to go to hell,it could be you. Never get disappointed from Allah, like if only one person was to go to Jannah, it could be you.`,
        img: 'abubaker.png'
    },
    {
        id: 2,
        name: 'Hazrat Ali',
        text: `The tongue is like a lion. If you let it loose, it will wound someone`,
        img: 'ali.png'
    },

    {
        id: 3,
        name: 'Hazrat Usman',
        text: `"Three worldly things have been made dear to me: feeding the hungry, clothing the naked and reading the Qur'an." ~ Uthman ibn Affan`,
        img: 'usman.svg'
    },
    {
        id: 4,
        name: 'Umar Ibn Al-Khattab',
        text: ` Do not grieve over what has passed unless it makes you work harder for what is about to come Umar ibn Al-Khattab`,
        img: 'umer.png'
    },
    {
        id: 5,
        name: 'Khalid ibn al-Walid',
        text: `When I am in the battlefield, I love it more then my wedding night with the most beautiful of women`,
        img: 'waleed.jpg'
    },


]
// content
let img = document.getElementById('img')
let name = document.getElementById('name')
let quote = document.getElementById('quote')


// bts
let previous = document.getElementById('pre')
let next = document.getElementById('nxt')
var current = 0;


function currentquote(){
    const item = quotes[current];
    img.src = item.img
    quote.innerText = item.text
    name.innerText = item.name
    console.log(current)
}
currentquote()

next.addEventListener('click', function () {

    if (current > quotes.length - 2) {
        current = -1;

    }
    else {
        current++
        const item = quotes[current];
        img.src = item.img
        quote.innerText = item.text
        name.innerText = item.name
        console.log(quotes.length)
       
    }
})

previous.addEventListener('click', function () {
    if (current <= 0) {
        current = 6;
        console.log('ok')
    }
    else {
        current--
        const item = quotes[current];
        img.src = item.img
        quote.innerText = item.text
        name.innerText = item.name
    }


})



