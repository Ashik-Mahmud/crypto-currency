// api calling for crypto currency 
function ApiCall() {
    var url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var bitcoin = document.querySelector(".bitcoin_crncy");
            var ethereum = document.querySelector(".ethereum_crncy");
            var dogecoin = document.querySelector(".dogecoin_crncy");
            //    bitcoin 
           bitcoin.textContent = `$ ${data.bitcoin.usd} `;
           ethereum.textContent = `$ ${data.ethereum.usd} `;
           dogecoin.textContent = `$ ${data.dogecoin.usd} `;

        });

}

ApiCall();