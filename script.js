let lang = "ar";

function toggleLang() {
  lang = lang === "ar" ? "en" : "ar";
  document.querySelectorAll("[data-ar]").forEach(el => {
    el.innerText = el.dataset[lang];
  });
}

function buy(product) {
  alert("تم إرسال طلب الشراء ✅");

  sendTelegram(product);
}

function sendTelegram(product) {
  const token = "ضع_توكن_البوت_هنا";
  const chat_id = "ضع_chat_id_هنا";

  const text = `طلب شراء جديد 🛒\nالمنتج: ${product}`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      chat_id: chat_id,
      text: text
    })
  });
}
