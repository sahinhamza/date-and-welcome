let body =document.querySelector("#body")
body.style.backgroundColor = "rgb(96, 96, 96)"
body.style.color = "rgb(255, 165, 0)"
body.style.fontStyle = "Arial"


let isim = prompt("Adınız Nedir?") //isim bigisi alındı.
let baslik = document.querySelector("#baslik")
baslik.innerHTML="KODLUYORUZ" //başlık kısmı ekrana yazdırıldı.

let karsilama = document.querySelector("#karsilama")
let isim_metin = isim.bold()
karsilama.innerHTML = `Merhaba, ${isim_metin} Hoş Geldin!` //karşılama yapıldı.
karsilama.style.fontSize = "large";
karsilama.style.lineHeight = "0.5"

// tarih bilgisi oluşturuldu.
function startTime() {
    const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    const today = new Date();
    let d = days[today.getDay()-1];
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    date.innerHTML =  h + ":" + m + ":" + s+" "+d;
    date.style.fontSize = "x-large";
    date.style.lineHeight = "0.5"
    setTimeout(startTime, 1000);
  }
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
    }
  
startTime()

let alt = document.querySelector("#alt")
let text = "Kodluyoruz Frontend Wep Development Patikası";
let bold_metin = text.bold()
alt.innerHTML = `tarihinde ${bold_metin}'nın Javascript ` //alt bilgi.
let alt_ = document.querySelector("#alt_")
alt_.innerHTML = `bölümü 1.Ödevindesiniz.` //alt bilgi.
