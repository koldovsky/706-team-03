function changeRaiting(elementId, change) {
    let raiting = document.getElementById(elementId).innerHTML * 1;
    raiting += change;
    document.getElementById(elementId).innerHTML = raiting;
}