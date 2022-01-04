let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnersAge = 20;

if (registeredEarly && runnersAge > 18){
    raceNumber =+ 1000;
}

if (registeredEarly & runnersAge > 18) {
    //console.log(` ${raceNumber}: Your race will start at 9.30am`);
    document.write(` ${raceNumber}: Your race will start at 9.30am`);
}

else if (!registeredEarly && runnersAge > 18) {
    //console.log(`${raceNumber}: Your race will start at 11:00am`);
    document.write(`${raceNumber}: Your race will start at 11:00am`);
}

else if (runnersAge < 18) {
    //console.log(`${raceNumber}: Your race will start at 12:30pm`);
    document.write(`${raceNumber}: Your race will start at 12:30pm`);
}

else {
    //console.log(`Please visit the registration desk if you are exactly 18 years old`);
    document.write(`Please visit the registration desk if you are exactly 18 years old`);
}

