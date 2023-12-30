
const settingsBtn = document.getElementById('settings_button');
const settingsDropdown = document.getElementById('settings_dropdown');


const maxNumInput = document.getElementById('maxNum');
const maxInput = document.getElementById('max');
const negativeInput = document.getElementById('canBeNegative');

maxNumInput.value = config.maxNums;
maxInput.value = config.max;
negativeInput.value = config.canBeNegative;

settingsBtn.onclick = () => {
    settingsDropdown.classList.toggle('hidden');
}

maxNumInput.oninput = (e) => {
    config.maxNums = e.target.value;
}

maxInput.oninput = (e) => {
    config.max = e.target.value;
}
negativeInput.onchange = (e) => {
    config.canBeNegative = e.target.checked;
}