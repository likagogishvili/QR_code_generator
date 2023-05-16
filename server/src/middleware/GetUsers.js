const fs = require('fs');

const dataPath = './src/userData/userData.json';

async function ReadDataFromFile() {
    try {
        const data = await fs.promises.readFile(dataPath, { encoding: 'utf8' });
        return data;
    } catch (err) {
        console.log(err);
        return [F];
    }
}

module.exports = ReadDataFromFile;