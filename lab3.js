"use strict";

let grant="Grant the Chicken Overlord";
let grantxp=10;
let namexp=40;
let wins=0;
let winner=null;
let random=0

let ans = prompt("Do you want to play a game with Grant?")
if(ans.toLowerCase() === "yes"){
    let name = prompt("What is your name?")
    while(wins < 3){
        while(namexp > 0 && grantxp > 0){
            namexp -= Math.floor(Math.random() * 2) + 1;
            console.log(`${name} has ${namexp} health left`);
            grantxp -= Math.floor(Math.random() * 2) + 1;
            console.log(`${grant} has ${grantxp} health left`);
            }
            console.log(" ")
            grantxp = 10;
            wins++;
        }
    if(namexp <=0){
        console.log(`${grant} destroyed ${name}`);
    }else if(wins === 3){
        console.log(`${name} destroyed ${grant} ${wins} times`);
    }
}

// let phrase=null
// let ans = prompt("Do you want to play a game with Grant?")
// if(ans.toLowerCase() === "yes"){
//     let name = prompt("What is your name?")
//     while(wins < 3){
//         while(namexp > 0 && grantxp > 0){
//             random = Math.floor(Math.random() * 3)
//             if(random === 2){
//                 phrase = "Critical Hit, 2 damage on";
//             }else if(random === 1){
//                 phrase = "Light hit, 1 damage on";
//             } else {
//                 phrase = "missed his hit what a loser... 0 damage on";
//             }
//             namexp -= random;
//             console.log(`${grant} had a ${phrase} ${name} now has ${namexp} health left`);

//             random = Math.floor(Math.random() * 3)
//             if(random === 2){
//                 phrase = ", you had a Critical Hit, 2 damage on";
//             }else if(random === 1){
//                 phrase = ", you had a Light hit, 1 damage on";
//             } else {
//                 phrase = ", you missed loser... 0 damage on";
//             }
//             grantxp -= random;
//             console.log(`${name}${phrase} ${grant} now has ${grantxp} health left`);
//             console.log(" ");
//             }
//             console.log(" ");
//             grantxp = 10;
//             wins++;
//         }
//     if(namexp <=0){
//         console.log(`${grant} destroyed ${name}`);
//     }else if(wins === 3){
//         console.log(`${name} destroyed ${grant} ${wins} times`);
//     }
// }