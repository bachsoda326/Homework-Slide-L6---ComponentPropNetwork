export default function(codeStock) {
    let url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${codeStock}&apikey=N67FNWK3OMYWXZYX`;
    return fetch(url).then(function (reponse) {
        return reponse.text();
    }).then(function (text) {
        let result = text.replace("l Q", "lQ");
        let json = JSON.parse(result);

        if (json.Information) {
            alert("Buy API : https://www.alphavantage.co ");
            return;
        }
        return {
            price: json.GlobalQuote["05. price"],
            change: json.GlobalQuote["09. change"],
            changePercent: json.GlobalQuote["10. change percent"],
            codeStock: json.GlobalQuote["01. symbol"],
        };
    });
}
