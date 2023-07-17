screen = document.getElementById("insideScreen");
description = document.getElementById("description");
nickname = document.getElementById("nickname");

eva00 = document.getElementById("a");
eva01 = document.getElementById("b");
eva02 = document.getElementById("c");

eva00.onclick = function () {
    screen.className = '';
    screen.classList.add('screen-image');
    screen.classList.add('screen00');
    nickname.innerHTML = "EVA-00 BATTLE MACHINE";
}
eva01.onclick = function () {
    screen.className = '';
    screen.classList.add('screen-image');
    screen.classList.add('screen01');
    nickname.innerHTML = "EVA-01 BATTLE WARRIOR";
}
eva02.onclick = function () {
    screen.className = '';
    screen.classList.add('screen-image');
    screen.classList.add('screen02');
    nickname.innerHTML = "EVA-02 BATTLE ANGEL";
}