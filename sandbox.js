let s = document.querySelector('table').rows;
let i, j;
for (i = 1; i < s.length - 1; i++) {
  for (j = 1; j < s[i].cells.length - 1; j++) {
      let obj1 = s[i].cells[j];
      obj1.style.border = "0px";
      obj1.style.backgroundColor="purple";
    }
  }
let m = 0, n = 0, l;
let v, k, a = 1, b;
let c = 1, d = 1;
function Calc() {
  let z = Math.ceil(Math.random() * 6);
  change();
  let el=document.getElementById("info");
  el.innerHTML=z;
  v = document.querySelector('table').rows[0].cells;
  m += z;
  console.log(z, m);
  for (i = 0; i < 8; i++)
    v[i].textContent = "";
  if (m < 8)
    v[m].textContent = "A";
  if (m >= 8 && n <= 7) {
    v = document.querySelector('table');
    for (i = 0; i < 7; i++)
      v.rows[i].cells[7].textContent = "";
    if (c == 1) {
      v.rows[m - 7].cells[7].textContent = "A";
      k = m - 7;
    }
    if (c > 1) {
      n += (z + k);
      if (n <= 7)
        v.rows[n].cells[7].textContent = "A";
    }
    c++;
  }
  if (n > 7) {
    v = document.querySelector('table');
    for (i = 0; i < 8; i++)
      v.rows[7].cells[i].textContent = "";
    if (a == 1) {
      k = n - 7;
      v.rows[7].cells[7 - k].textContent = "A";
      b = 7 - k;
    }
    if (a > 1) {
      b -= z;
      if (b >= 0)
        v.rows[7].cells[b].textContent = "A";
    }
    a++;
  }
  if (b < 0) {
    v = document.querySelector('table');
    for (i = 0; i < 8; i++)
      v.rows[i].cells[0].textContent = "";
    if (d == 1) {
      l = b + 7;
      v.rows[l].cells[0].textContent = "A";
    }
    if (d > 1) {
      l -= z;
      if (l >= 0)
        v.rows[l].cells[0].textContent = "A";
    }
    d++;
  }
}
function change()
{
  let e1=document.getElementById("turn");
  if(e1.innerHTML=="TURN: PLAYER A")
  {
    e1.innerHTML="TURN: PLAYER B";
  }
  else if(e1.innerHTML=="TURN: PLAYER B")
  {
    e1.innerHTML="TURN: PLAYER A";
  }
}