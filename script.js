//Uppgift 1. 


const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
console.log(names [3]); //här skriver jag ut namnet Maradona eftersom en array alltid börjar på 0

//Uppgift 2.

const newLength = names.push("Drogba");
console.log(names); // här skriver den ut alla namnen i arrayen, inklusive den senaste jag pushade
console.log(newLength); // här skriver den ut en integer: 7

//btw jag kör koden via node direkt i terminalen för att testa den


//Uppgift 3. 

const addName = names.unshift("Figo"); // med denna så addar jag ett namn i början 

console.log(names); // console loggen visar ett nytt namn i början, alltså Figo. 

//Uppgift 4. 

const removeName = names.pop(); //dett tar alltid bort det sista värdet i arrayen

console.log(names); //denna visar att Drogba har tagits bort nu

//Uppgift 6.

//Som jag förstår det så är själva arrayen names oförändbar medans innehållet kan
//manipuleras med olika grejer som t.ex. det vi kört, push(), pop() osv. Så man kan fortfarande
//manipulera innehållet innuti arrayen, men man kan inte t.ex. göra om arrayen "names" till något annat.


//Uppgift 8. 


const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
//här kan jag använda en if - else sats för att ge mig olika svar om den önskade stringen eller värdet finns i min array

if (players.includes("Zlatan")) {
    console.log("Zlatan är med i listan!");
} else {
    console.log("Zlatan är inte med i listan.");
}
//Uppgift 9.

const indexOne = players.indexOf("Maradona");

console.log(indexOne); //detta tillåter mig att få tillbaka vilken plats i arrayen som Maradonna har
// platsen blev 5 eftersom man börjar på 0 och den ligger på sista platsen i arrayen. 

//Uppgift 10.

//const index = players.indexOf("Messi");

//console.log(index); När jag söker efter något som inte finns så får jag tillbaka -1 vilekt berättar 
//att detta värde inte finns i arrayen,

//Uppgift 11.

const playersString = players.join(", "); // detta gjorde så att dem separerades rätt med komma och mellanslag

console.log(playersString); // dett skriver ut strängen i test

//Uppgift 12.

const playersStringTwo = players.join(" - "); // detta gjorde så jag fick ett streck mellan istället

console.log(playersStringTwo); // dett skriver ut strängen i test med strecket istället.

//Uppgift 13. 

const removePlayers = players.splice(1, 2); // tar bort beckhamn so är på 1 och zidane på 2 i indexen

console.log(players); // denna visar vilka namn som finns kvar 
console.log(removePlayers); // denna logg visar vilka jag tagit bort i en ny array

//Uppgift 14.

const addPlayer = players.splice(2, 0, "Ronaldinho"); // här har jag tre värden då den första anger vilken plats i indexen
//den andra hur många element ska tas bort från arrayen och den tredje vad värdet är av det jag lägger till

console.log(players); //denna visar att det lagts till på indexplats nr 2 i arrayen


//Uppgift 15. 

const indexThree = players.indexOf("Ronaldo"); // här letar jag fram vilket index som ronaldo har i min array

if (indexThree !== -1) { //detta säger att om Ronaldo inte hittas så får jag värdet -1, annars om han finns så hittas han
    players.splice(indexThree, 1); //detta gör att om han finns i arrayen index så tas ett element bort på den plats han befinner sig i arrayen 
}

console.log(players); // denna visar att ronaldo tagits bort från arrayen då han kunde finnas.

// Uppgift 16. 

const threePlayersNew = players.slice(0, 3); // detta kopierar dem första tre alltså, 0, 1 och 2 från min array till en helt ny kopia. 

console.log(threePlayersNew); // detta visar att endast tre namn finns zlatan, romario och maradona.





//Uppgift 17.

// behöver inte denna egentligen den bara stör
//const playersTwo = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];  //gör en ny players här nere för det är lättare att hålla koll under uppgiftens gång

const playersFromIndex = players.slice(2);//kopierar alla index från nr 2, zidane och resten eftersom ja inte angett ett slutvärde

console.log(playersFromIndex); // så här ser jag min kopia
console.log(players); // och här ser jag den ursprungliga listan

//Uppgift 18. 

const updatedPlayers = players.with(1, "Mbappé"); //lägger till ny spelare på position 1 (alltså andra plats)

console.log(updatedPlayers); //här ser jag den tillagda spelaren, with ändrar nämligen inte original arrayen 
console.log(players);//här ser jag original arrayen utan Mbappé


//Uppgift 19. Utgå från arrayen nedan. Skriv en for-loop som skriver ut varje tal i arrayen.
const numbers = [5, 8, 12, 20, 3];

for (let i = 0; i < numbers.length; i++) { //börjar på 0 och går igenom hela numbers arrayens längd, och går fram 1 hela tiden med i++
    console.log(numbers[i]); //denna visar vad för siffror som finns i min array i kronologisk ordning
}

//Uppgift 20.

let sum = 0; //sätter startvärdet på denna variabel sum till 0 - sätter jag till 2, så blir slutvärdet 50 istället för 48 tex

for (let i = 0; i < numbers.length; i++) { //denna går igenom alla tal från 0 till slutet 
    sum += numbers[i];// och denna säger att jag vill spara alla tals summor i min variabel sum
}

console.log("Summan av alla tal i arrayen är:", sum); // denna ger mig texten och sedan summan som jag lagrat i sum


//Uppgift 21. 

let largest = numbers[0]; // här sätter jag att det största talet i arrayen är det första talet, i detta fall 5

for (let i = 1; i < numbers.length; i++) { //denna forloop går igenom alla tal från första talet och om i är större än det
    if (numbers[i] > largest) { //alltså 5, så uppdateras  largest till det talet större.
        largest = numbers[i];//i slutet innehåller largest endast det tal med högst värde
    }
}

console.log("Det högsta talet i arrayen är:", largest); // här skriver ja ut en text som förklarar och själva summan, i detta fall blev det 20

//Uppgift 22. 

const doubledNumbers = []; //skapar en tom array dit jag ska lägga in siffrorna sen

for (let i = 0; i < numbers.length; i++) {  //går igenom alla tal från start till slut
    doubledNumbers.push(numbers[i] * 2); //lägger till värdet i den nya arrayen och multiplicerar det med 2
}
 console.log(doubledNumbers); // här ser vi dem dubblade talen i den tidigare tomma arrayen

 //Uppgift 23. 

 let sum1 = 0; //Skapar en variabel som heter sum1 där alla tal kommer att plussas samman

 for (let i = 0; i < numbers.length; i++) { //skapar samma forloop som summerar alla tal i min variabel sum1
    sum1 += numbers[i];
}

const average = sum1 / numbers.length; //räknar ut vad medelvärdet i sum1 är delat på antar siffror i arrayen

console.log("Medelvärder av arrayen är:", average); // skriver ut det med test + summan av uträkningen som jag gjorde till en constant. 
//så jag kan spara ner reslutatet av min sum1 delat på längden på arrayen numbers.

//Uppgift 24. 

let smallest = numbers[0]; // här sätter jag att det största talet i arrayen är det första talet, i detta fall 5

for (let i = 1; i < numbers.length; i++) { //denna forloop går igenom alla tal från första talet och om i är mindre än det
    if (numbers[i] < smallest) { //alltså 5, så uppdateras  smallest till det minsta talet.
        smallest = numbers[i];//till slut innehåller smallest endast det tal med minst värde
    }
}

console.log("Detta tal är det minsta i arrayen:", smallest); // här vänder jag egentligen bara på tidgare loop där jag letar efter det största talet och visar det

//Uppgift 25. 

const numbers2 = [5, -3, 12, -7, 20, -1, 0, 8];


const positiveNumbers = []; //skapar en tom array som heter positiveNumbers

for (let i = 0; i < numbers2.length; i++) { //går igenom min array 
    if (numbers2[i] > 0) { //och om talet är större än 0 så adderas det till min nya array
        positiveNumbers.push(numbers2[i]);
    }
}
console.log(positiveNumbers) // hade denna innanför måsvingen ovan och då blev det fel, men utanför så ger den rätt resutlat i en ny array


//Uppgift 26. 

const mixedNumbers = [3, -5, 12, -1, 8, -6];

for (const number of mixedNumbers) {
    if (number > 0) { //kollar om number är större än 0 då vill jag adda det till mixednumbers arrayen
        console.log(number); //detta ger mig alla positiva tal, asså 3,12,8 i in lista. 
    }
}

//Uppgift 27. Använd en while-loop för att logga alla tal i arrayen numbers från och med index 0. Avbryt loopen om talet är större än 10.

let i = 0; //sätter min variabel i till 0, så när jag kör min if sats att den börjar kolla av på första elementet

while (i < numbers.length) {
    if (numbers[i] > 10) { //om 0 eller i är större än 10 så avbryter den loopen med break nedan
        break; 
    }
    console.log(numbers[i]); //här ger den mig 5 och 8 och avbryter innan jag kommer till 12. 
    i++; //om ja inte har denna så går den för alltid i en loop som spottar ut 0 från numbers, alltså siffran 5

} 

//Uppgift 28. 

let count = 0;

while (i < mixedNumbers.length) { //kör en whileloop här för att gå igenom arrayen mixedNumbers
    if (mixedNumbers[i] < 0) { //så om talet är mindre än 9 så ökar jag röknaren med 1 med count++
        count++; 
    }
    i++; // så att loopen inte körs för alltid, går den också vidare till nästa element o kollar av där
}

console.log("Antal negativa tal i arrayen är:", count); /*här vill jag få ut 3 eftersom det finns tre negativa tal i mixedNumbers
men jag får ut 2, vilket jag inte fattar... får kolla det med Niklas eller en klasskamrat. */

//Uppgift 29. 

const words = ["banana", "apple", "kiwi", "strawberry", "peach"]; //skapar en ny array som heter words

for (let i = 0; i < words.length; i++) {
    console.log("The word, " + words[i] + " - " + words[i].length + " letters"); //den klagade på att det words behövde skrivas om till en string, startade om VSC så funkade det!
}

//Uppgift 30. 

let firstLetters = ""; //En variabel med en tom string som jag ska fylla med första bokstaven i alla variablar i arrayen words

for (let i = 0; i < words.length; i++) { //for loopen går igenom alla element i arrayen
    firstLetters += words[i][0]; // Lägger till den första bokstaven i varje ord i firstLetters med hjälp av words[i][0]
}

console.log(firstLetters); //  skriver ut baksp

//Uppgift 31. 

let a = 0; // skapar en variabel som kan gå igenom arrayen steg för steg och börjar på första steget
let sum2 = 0; //och en variabel som börjar på 0 som kan ta in summorna från numbers arrayen tills den fylls med 25

while (a < numbers.length && sum2 <= 25) { //så detta säger att loopen går sålänge a som är 0 går igenom arrayen eftersom 0 är mindre än längden på arrayen så fortsätter den, iaf tills sum2 är mindre än eller lika med 25
    console.log(numbers[a]); //här loggar jag då siffrorna i numnbers
    sum2 += numbers[a]; //detta lägger till det som finns i variabeln sum2 till variabeln a
    a++; // detta så inte loopen fortsätter för evigt och hoppar fram ett steg hela tiden
} 


//Ovan uppgift gav inte rätt resiltat, fattar inte varför den ger siffrorna 5, 8, 12 och 20. Den borde slutat efter 12 för då är jag uppe i 25 totalt i sum2

//Uppgift 32. 

let summa = 0; //börjar summa på 0

for (const number of mixedNumbers) { // for of går igenom alla nummer i arrayen
    summa += number; // lägger till alla talen som den går igenom från arrayen till summa 
}

console.log("Summan av alla värden är:", summa); //skriver ut summan av talen från summa

//Uppgift 33. 

const temperatures = [15, 22, 19, 30, 28, 18, 25];

let highestTemperature = temperatures[0];
let highestIndex = 0; //skapar en varialebl för att hitta vilket index som högsta tempen ligger på

for (let i = 1; i < temperatures.length; i++) {//om värdet är högre än highestTemperature, uppdateras highestTemperature med detta nya värde
                                                // och highestIndex sätts till den aktuella indexpositionen i.
    if (temperatures[i] > highestTemperature) {
        highestTemperature = temperatures[i];
        highestIndex = i;
    }
}

console.log("Högsta temperaturen är:", highestTemperature);
console.log("Index för högsta temperaturen är:", highestIndex);


//Uppgift 34. 


// For-loop för att räkna ord med fler än fem bokstäver
for (let i = 0; i < words.length; i++) {
    if (words[i].length > 6) { //om längen på order är mer än 6 bokstäver så loggar den ordet in i min let, i
        count++; //om ovan villkor stämmer så ökar count med 1
    }
}

console.log("Antal ord med fler än fem bokstäver är:", count);

//Uppgift 35. 

const numberz = [2, 4, 6, 8, 3, 10, 12];


let o = 0; //sätter o till 0

while (o < numberz.length) {
    if (numberz[o] % 2 !== 0) { // går igenom arrayen för att hitta det första udda talet med %, det är ett jämnt tal om % är 0 och udda om det är 1
        console.log("Första udda talet är:", numberz[o]);
        break; //breakar om ja når ett udda tal
    }
    o++; // så om talet är jämt så går ja vidare i arrayen för tills ett udda tal hittas, då breakar jag med if satsen ovan
}








