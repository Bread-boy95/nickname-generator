document.getElementById("nickname").addEventListener("click", randomName);
document.getElementById("allNames").addEventListener("click", allNicknames);
let firstname = document.getElementById("first");
let lastname = document.getElementById("last");
let out = document.getElementById("output");

function randomName() {
  let names = [0, 1, 2, 3, 4, 5];
  let randnum = Math.floor(Math.random() * 6 + 1);
  for (let i = 0; i < 6; i++) {
    if (randnum == 1) {
      names[0] = `${firstname} The Intelligent ${lastname}`;
    }
    if (randnum == 2) {
      names[1] = `${firstname} The extreme ${lastname}`;
    }
    if (randnum == 3) {
      names[2] = `${firstname} Iron fist ${lastname}`;
    }
    if (randnum == 4) {
      names[3] = `${firstname} The coder ${lastname}`;
    }
    if (randnum == 5) {
      names[4] = `${firstname} The smelly ${lastname}`;
    }
    if (randnum == 6) {
      names[5] = `${firstname} The Intelligent ${lastname}`;
    }
  }
  out.HTML(names);
}
