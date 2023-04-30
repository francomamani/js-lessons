import fs from "fs";
import fsPromises from "fs/promises";

fs.readFile("./users.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

try {
    const countries = fs.readFileSync("./countries.json", "utf-8");
    //JSON.parse(countries).forEach(i => console.log(i.capital));
    console.log(countries);
} catch (err) {
    console.error(err);
}


async function read() {
    try {
        const data = await fsPromises.readFile("./dreams.json", { encoding: "utf-8" });
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

read();


const readStream  = fs.createReadStream("./streams.txt", "ascii");

let data = "";
readStream.on("data", (chunk) => {
    data += chunk;
});

readStream.on("error", (err) => {
    console.error(err);
});

readStream.on("end", () => {
    console.log(data);
});