const proxy = "https://justcors.com/tl_5efb572/";
const url = "https://zdkhiu5mp5dwa.elma365.ru/pub/v1/app/test_sreda/test_task/list";
const token = "6b2a6b4c-51c4-4beb-94b8-250d12d023b1"
const data = {
    "fileHash": "0190983f-d7be-7895-bc40-5f403f0bc287",
    "format": "xlsx",
    "withEventHandlers": false

}


async function getData() {

    try {

        const response = await fetch(proxy+url, {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })

        const result = await response.json();
        console.log((result.result.result[0].__name))

        document.querySelector("h2").textContent = "__name: " + result.result.result[0].__name

    } catch (error) {
        console.error(`ОШИБКА ПРИ ВЫПОЛНЕНИИ ЗАПРОСА - ${error}`)
    }

}

getData()