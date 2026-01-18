let keranjang = [];

function tambahCart(namaProduk) {
    keranjang.push(namaProduk);
    alert(namaProduk + " ditambahkan ke keranjang!");
}

/* CHAT BOT */
function kirimPesan() {
    let input = document.getElementById("userInput");
    let chatBody = document.getElementById("chatBody");

    let userText = input.value.trim().toLowerCase();
    if (userText === "") return;

    chatBody.innerHTML += `<p><b>Anda:</b> ${userText}</p>`;

    let botReply = "";

    if (userText.includes("halo") || userText.includes("hai")) {
        botReply = "Halo 👋 Selamat datang di Grosir Maju Jaya!";
    }
    else if (userText.includes("produk")) {
        botReply = "Produk tersedia: Gula, Beras, Minyak Goreng.";
    }
    else if (userText.includes("checkout")) {

        if (keranjang.length === 0) {
            botReply = "Keranjang masih kosong. Silakan pilih produk dulu.";
        } else {
            let pesanWA = "Halo Admin, saya ingin pesan:\n";
            keranjang.forEach((item, i) => {
                pesanWA += `${i+1}. ${item}\n`;
            });

            let noWA = "6283134749029"; // GANTI NOMOR ADMIN
            let linkWA = `https://wa.me/${noWA}?text=${encodeURIComponent(pesanWA)}`;

            botReply = `
            Pesanan siap diproses ✅<br>
            <a href="${linkWA}" target="_blank"
               style="color:green;font-weight:bold;">
               👉 Klik untuk Checkout via WhatsApp
            </a>`;
        }
    }
    else {
        botReply = "Ketik: produk, checkout, atau halo 😊";
    }

    setTimeout(() => {
        chatBody.innerHTML += `<p><b>Bot:</b> ${botReply}</p>`;
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 500);

    input.value = "";
}
