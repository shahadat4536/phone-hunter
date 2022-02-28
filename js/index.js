const error = document.getElementById('error');
let errorMessage = error.innerText;

const searchPhone = () => {
    console.log('jjjjj')

    const inputValue = document.getElementById('input-value');
    const inputValueText = inputValue.value;
    console.log(inputValueText)
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue.value}`
    console.log(url)
    if (isNaN(inputValue.value) == false) {
        error.innerText = "Please enter text"

    } else {
        fetch(url)
            .then(res => res.json())
            .then(data => displayPhone(data.data))
    }
}
const phonePreDetails = document.getElementById('phone-pre-details')
const displayPhone = (phones) => {
    console.log(phones)

    for (const phone of phones) {
        console.log(phone)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
                <img src="${phone.image}" class="card-img-top mx-auto w-75" alt="...">
                <div class="card-body">
                    <h3 class="card-title"> ${phone.phone_name}</h3>
                    <p>Brand: ${phone.brand}</p>
                </div> 
                <button onclick="phoneFullDetails('${phone.slug}')" type="button" class="btn btn-primary">Details</button>
        </div>`
        phonePreDetails.appendChild(div);
    };

};

const phoneFullDetails = (id) => {
    console.log(id)
}