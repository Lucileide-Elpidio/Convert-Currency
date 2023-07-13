
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

async function convertValue() {
    const inputValue = document.querySelector(".input-value").value
    const currencyToconvert = document.querySelector(".currency-to-convert")
    const currencyConvert = document.querySelector(".currency-convert")
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const bitcoinToday = data.BTCBRL.high

    if (currencySelect.value == "dolar") {
        currencyConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyConvert.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue / bitcoinToday)
    }

    currencyToconvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)
}


function currencyChange() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = 'Dólar'
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = "./assets/bitcoin 1.png"
    }
    convertValue()
}

currencySelect.addEventListener("change", currencyChange)
convertButton.addEventListener("click", convertValue)
