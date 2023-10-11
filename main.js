const fs = require("node:fs");

fs.readFile("data.json", (err, data) => {
        if (err === null) {
        let jsondata = JSON.parse(data);

        const filteredData = jsondata.filter(entry => entry.r030 === 840);

        const outputText = filteredData.map(entry => `${entry.exchangedate}:${entry.rate}`).join('\n');

        fs.writeFile('output.txt', outputText, (err) => {
            if (err === null) {
                console.log("Saved!"); 
            } else {
                console.log(err); 
            }
        });
    } else {
        console.log(err); 
    }
});