window.addEventListener('load', solution);

function solution() {

    let infoPreview = document.querySelector('#infoPreview');
    let divInfo = document.querySelector('.information');

    let block = document.querySelector('#block');

    let inputName = document.querySelector('#fname');
    let inputEmail = document.querySelector('#email');
    let inputPhone = document.querySelector('#phone');
    let inputAddress = document.querySelector('#address');
    let inputPostalCode = document.querySelector('#code');

    let submitButton = document.querySelector('#submitBTN');
    let editButton = document.querySelector('#editBTN');
    let continueButton = document.querySelector('#continueBTN');


    function createLiElement(value) {
        let li = document.createElement('li');
        li.innerHTML = value;
        return li;
    }

    let submitInfo = (event) => {
        let name = inputName.value;
        inputName.value = '';
        let email = inputEmail.value;
        inputEmail.value = '';
        let phone = inputPhone.value;
        inputPhone.value = '';
        let address = inputAddress.value;
        inputAddress.value = '';
        let code = inputPostalCode.value;
        inputPostalCode.value = '';
        if (name.trim() == '' || email.trim() == '') {
            return;
        }

        infoPreview.appendChild(createLiElement(`Full name: ${name}`));
        infoPreview.appendChild(createLiElement(`Email: ${email}`));
        infoPreview.appendChild(createLiElement(`Phone number: ${phone}`));
        infoPreview.appendChild(createLiElement(`Address: ${address}`));
        infoPreview.appendChild(createLiElement(`Postal code: ${code}`));

        submitButton.disabled = true;
        editButton.disabled = false;
        continueButton.disabled = false;


    }
    let editInfo = (event) => {
        let liArray = Array.from(infoPreview.querySelectorAll('li'));
        let inputArray = [inputName, inputEmail, inputPhone, inputAddress, inputPostalCode];

        for (let i = 0; i < liArray.length; ++i) {
            inputArray[i].value = liArray[i].innerHTML.split(': ')[1];
        }

        infoPreview.innerHTML = '';
        editButton.disabled = true;
        continueButton.disabled = true;
        submitButton.disabled = false;

    }
    let continueFunc = (event) => {

        block.innerHTML = '';
        let h3 = document.createElement('h3');
        h3.innerHTML = 'Thank you for your reservation!';
        block.appendChild(h3);

    }
    submitButton.addEventListener('click', submitInfo);
    editButton.addEventListener('click', editInfo);
    continueButton.addEventListener('click', continueFunc);
}