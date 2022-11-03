let select = document.querySelector(".select");
const array = [];
let non_p = document.querySelector(".non_p");
select.addEventListener("click", (e) => {
  e.preventDefault();
  non_p.textContent = "--" + select.value;
  if(select.value=='bosh'){
    non_p.textContent=''
  }
});
let button = document.querySelectorAll("button");
let katta_p = document.querySelector(".katta_p");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    katta_p.textContent = "--" + button[i].value;
    
  });

}
let pomidor_span = document.querySelector(".pomidor");
let pomidor_input = document.querySelector(".pomidor_input");
let pomidor_label = document.querySelector(".pomidor_label");
let ustida_pomidor = document.querySelector(".ustida_pomidor");
pomidor_span.addEventListener("click", (e) => {
  if (e.target.checked == true) {
    ustida_pomidor.textContent = "--" + pomidor_input.value;
    array.push(e.target.value);
    
  } else {
    ustida_pomidor.textContent = "";
    array.pop();
    
  }
});
let kurka_span = document.querySelector(".kurka_span");
let kurka_input = document.querySelector(".kurka_input");
let kurka_label = document.querySelector(".kurka_label");
let ustida_kurka = document.querySelector(".ustida_kurka");
kurka_input.addEventListener("click", (e) => {
  if (e.target.checked == true) {
    ustida_kurka.textContent = "--" + kurka_input.value;
    array.push(e.target.value);
    
  } else {
    ustida_kurka.textContent = "";
    array.pop();
   
  }
});

let zaytun_span = document.querySelector(".zaytun_span");
let zaytun_input = document.querySelector(".zaytun_input");
let zaytun_label = document.querySelector(".zaytun_label");
let ustida_zaytun = document.querySelector(".ustida_zaytun");
zaytun_input.addEventListener("click", (e) => {
  if (e.target.checked == true) {
    ustida_zaytun.textContent = "--" + zaytun_input.value;
    array.push(e.target.value);
   
  } else {
    ustida_zaytun.textContent = "";
    array.pop();
    
  }
});
let bodrig_span = document.querySelector(".bodring_span");
let bodring_input = document.querySelector(".bodring_input");
let bodring_label = document.querySelector(".bodring_label");
let ustida_bodring = document.querySelector(".ustida_bodring");
bodring_input.addEventListener("click", (e) => {
  if (e.target.checked == true) {
    ustida_bodring.textContent = "--" + bodring_input.value;
    array.push(e.target.value);
    
  } else {
    ustida_bodring.textContent = "";
    array.pop();
   
  }
});
let qozi_span = document.querySelector(".qozi_span");
let qozi_input = document.querySelector(".qozi_input");
let qozi_label = document.querySelector(".qozi_label");
let ustida_qozi = document.querySelector(".ustida_qozi");
qozi_input.addEventListener("click", (e) => {
  if (e.target.checked == true) {
    ustida_qozi.textContent = "--" + qozi_input.value;
    array.push(e.target.value);
   
  } else {
    ustida_qozi.textContent = "";
    array.pop();
    
  }
});
let qazi_span = document.querySelector(".qazi_span");
let qazi_input = document.querySelector(".qazi_input");
let qazi_label = document.querySelector(".qazi_label");
let ustida_qazi = document.querySelector(".ustida_qazi");
qazi_input.addEventListener("click", (e) => {
  if (e.target.checked == true) {
    ustida_qazi.textContent = "--" + qazi_input.value;
    array.push(e.target.value);
    
  } else {
    ustida_qazi.textContent = "";
    array.pop();
    
  }
});
let achchiq_span = document.querySelector(".achchiq_span");
let achchiq_input = document.querySelector(".achchiq_input");
let achchiq_label = document.querySelector(".achchiq_label");
let qoshimcha_achchiq = document.querySelector(".qoshimcha_achchiq");
achchiq_input.addEventListener("click", (e) => {
  if (e.target.checked == true) {
    qoshimcha_achchiq.textContent = "--" + achchiq_input.value;
  } else {
    qoshimcha_achchiq.textContent = "";
  }
});
let sosiska_span = document.querySelector(".span_sosiska");
let sosiska_input = document.querySelector(".input_sosiska");
let sosiska_label = document.querySelector(".label_sosiska");
let qoshimcha_sosiska = document.querySelector(".qoshimcha_sosiska");
sosiska_input.addEventListener("click", (e) => {
  if (e.target.checked == true) {
    qoshimcha_sosiska.textContent = "--" + sosiska_input.value;
  } else {
    qoshimcha_sosiska.textContent = "";
  }
});

let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");

button1.addEventListener("click", (e) => {
  e.preventDefault();
  button1.style.background = "green";
  button2.style.background = "transparent";
  button3.style.background = "transparent";
});
button2.addEventListener("click", (e) => {
  e.preventDefault();
  button2.style.background = "green";
  button1.style.background = "transparent";
  button3.style.background = "transparent";
});
button3.addEventListener("click", (e) => {
  e.preventDefault();
  button3.style.background = "green";
  button2.style.background = "transparent";
  button1.style.background = "transparent";
});

let modal=document.querySelector('.modal');
let modal_wrapper=document.querySelector('.modal_wrapper');
let modal_wrapper_x=document.querySelector('.modal_wrapper_x')
modal_wrapper_x.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", () => {
  if (modal) {
    modal.classList.remove("active");
  }
});

this.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    modal.classList.remove("active");
  }
});
let modal_h2=document.querySelector('.modal_h2')
let ong_btn=document.querySelector('.ong_btn')
let check=document.querySelector("#check")
ong_btn.addEventListener("click", (e) => {
 
  if (array.length <= 0) {
    check.setAttribute("class", " border fa fa-x");
    modal.setAttribute("class", " border modal active");
    
    
    
    
  } else {
  
    check.setAttribute("class", "border_x fa fa-check");
    modal.setAttribute("class", " border_x modal active");
  }
});
