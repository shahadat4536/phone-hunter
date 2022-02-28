const error = document.getElementById('error');
let errorMessage = error.innerText;

const searchPhone = () => {
    // console.log('jjjjj')

    const inputValue = document.getElementById('input-value');
    const inputValueText = inputValue.value;
    // console.log(inputValueText)
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue.value}`
    // console.log(url)
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
    // console.log(phones)

    for (const phone of phones) {
        // console.log(phone)
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
    // console.log(id)

    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneFullDetails(data.data))
}

const phoneFullDetailsCard = document.getElementById('phone-full-details-card')
const displayPhoneFullDetails = (info) => {
    console.log(info)
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <div class="row g-0">
            <div class="col-md-4">
                <img src="${info.image}" class="img-fluid rounded-start my-auto" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h3 class="card-title">${info.name}</h3>
                    <p class="card-text"><small class="text-muted">${info.releaseDate ? info.releaseDate : `no found release date`}</small></p>
                    <p class="card-text">ChipSet: ${info.mainFeatures.chipSet}</p>
                    <p class="card-text">Display Size: ${info.mainFeatures.displaySize}</p>
                    <p class="card-text">Memory: ${info.mainFeatures.memory}</p>
                    <p class="card-text">Storage: ${info.mainFeatures.storage}</p>
                    <p class="card-text">Sensors: ${info.mainFeatures.sensors}</p>
                    <p class="card-text">Bluetooth: ${info.others.Bluetooth}</p>
                    <p class="card-text">GPS: ${info.others.GPS}</p>
                    <p class="card-text">NFC: ${info.others.NFC}</p>
                    <p class="card-text">Radio: ${info.others.Radio}</p>
                    <p class="card-text">USB: ${info.others.USB}</p>
                    <p class="card-text">WLAN: ${info.others.WLAN}</p>
                </div>
            </div>
        </div>`

    phoneFullDetailsCard.appendChild(div)
}