export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '76e8ba8ccfmsha8c6e8285b2b8a4p17acacjsn9fc10de63e62',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers
    });

    const result = await response.json();
    return result;

}