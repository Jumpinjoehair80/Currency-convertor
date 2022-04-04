const amountEl_1 = document.getElementById('amount-1')
const amountEl_2 = document.getElementById('amount-2')
const currencyEl_1 = document.getElementById('currency-1')
const currencyEl_2 = document.getElementById('currency-2')
const head_countryEl = document.getElementById('head-country')
const head_currencyEl = document.getElementById('head-currency')

function calculate() {
    const currency_1 = currencyEl_1.value
    const currency_2 = currencyEl_2.value
    const amount_1 = amountEl_1.value
    const amount_2 = amountEl_2.value


    const host = 'api.frankfurter.app'
    fetch(`https://${host}/latest?from=${currency_1}`)
        .then(resp => resp.json())
        .then((data) => {
        let rate = data.rates[currency_2]
        head_countryEl.innerText = `${amount_1} ${currency_1} equals`
        head_currencyEl.innerText = `${rate * amount_1} ${currency_2}`        

        amountEl_2.value = (amountEl_1.value * rate).toFixed(2)
        })
      
}



amountEl_1.addEventListener('change', calculate)
amountEl_2.addEventListener('change', calculate)
currencyEl_1.addEventListener('change', calculate)
currencyEl_2.addEventListener('change', calculate)