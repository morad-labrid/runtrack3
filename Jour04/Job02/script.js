var json = '{"nom":"LABRID","prénom":"Morad","age":"25 ans","ville":"Marseille"}';

function jsonValueKey(json, key) {
    var obj = JSON.parse(json)
    return obj[key];
}

document.getElementById('demo').innerHTML = jsonValueKey(json, 'ville');