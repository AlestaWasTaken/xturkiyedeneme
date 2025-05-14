
      // TikTok Kartları için Slider İşlevi
const sliderUser = document.getElementById('sliderUser');
const priceUser = document.getElementById('priceUser');
const userCount = document.getElementById('userCount');

sliderUser.addEventListener('input', function() {
  const userCountValue = parseInt(this.value);
  const price = (userCountValue * 200).toFixed(2); // 200 TL fiyatı
  userCount.innerHTML = `Minimum <strong>+${userCountValue}</strong> Kullanıcı`;
  priceUser.textContent = `₺${parseFloat(price).toLocaleString('tr-TR')} `;
});

const sliderMicroInfluencer = document.getElementById('sliderMicroInfluencer');
const priceMicroInfluencer = document.getElementById('priceMicroInfluencer');
const microInfluencerCount = document.getElementById('microInfluencerCount');

sliderMicroInfluencer.addEventListener('input', function() {
  const microInfluencerCountValue = parseInt(this.value);
  const price = (microInfluencerCountValue * 450).toFixed(2); // 450 TL fiyatı
  microInfluencerCount.innerHTML = `Minimum <strong>+${microInfluencerCountValue}</strong> Mikro Fenomen`;
  priceMicroInfluencer.textContent = `₺${parseFloat(price).toLocaleString('tr-TR')} `;
});

const sliderDiscoverEdit = document.getElementById('sliderDiscoverEdit');
const priceDiscoverEdit = document.getElementById('priceDiscoverEdit');
const discoverEditCount = document.getElementById('discoverEditCount');

sliderDiscoverEdit.addEventListener('input', function() {
  const discoverEditCountValue = parseInt(this.value);
  const price = (discoverEditCountValue * 4000).toFixed(2); // 500 TL fiyatı
  discoverEditCount.innerHTML = `Minimum <strong>+${discoverEditCountValue}</strong> Makro Fenomen`;
  priceDiscoverEdit.textContent = `₺${parseFloat(price).toLocaleString('tr-TR')} `;
});

// Modal'ı gösterme fonksiyonu
function showModalTikTok(cardType) {
  const modal = document.getElementById('purchaseModalTikTok');
  let price = '';
  let count = '';

  if (cardType === 'user') {
    price = priceUser.textContent;
    count = userCount.textContent;
  } else if (cardType === 'microInfluencer') {
    price = priceMicroInfluencer.textContent;
    count = microInfluencerCount.textContent;
  } else if (cardType === 'discoverEdit') {
    price = priceDiscoverEdit.textContent;
    count = discoverEditCount.textContent;
  }

  document.getElementById('finalPriceTikTok').textContent = price;
  document.getElementById('finalCountTikTok').textContent = count;
  modal.style.display = "block";
}

// Modal'ı kapatma fonksiyonu
function closeModalTikTok() {
  const modal = document.getElementById('purchaseModalTikTok');
  modal.style.display = "none";
}

// TikTok Linki Gönderme
function submitLinkTikTok() {
  const tikTokLink = document.getElementById('tikTokLink').value;
  const finalPrice = document.getElementById('finalPriceTikTok').textContent;

  if (tikTokLink) {
    const paymentUrl = `https://yourpaymentgateway.com/payment?price=${encodeURIComponent(finalPrice)}&link=${encodeURIComponent(tikTokLink)}`;
    window.location.href = paymentUrl;
  } else {
    alert("Lütfen geçerli bir TikTok linki girin.");
  }
}

// Modal dışına tıklandığında kapanmasını sağlamak için
window.onclick = function(event) {
  const modal = document.getElementById('purchaseModalTikTok');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const sliderStarter = document.getElementById('sliderStarter');
const priceStarter = document.getElementById('priceStarter');
const listenerCount = document.getElementById('listenerCount');

sliderStarter.addEventListener('input', function () {
  const dinleyici = parseInt(this.value);
  const fiyat = (dinleyici * 0.80).toFixed(2); // ondalıklı ₺

  // Dinleyici sayısını "Minimum +2.000 Dinleyici" şeklinde yaz
  listenerCount.innerHTML = `Minimum +<strong>${dinleyici.toLocaleString('tr-TR')}</strong> Dinleyici veya Dinlenme`;

  // Fiyatı yaz
  priceStarter.textContent = `₺${parseFloat(fiyat).toLocaleString('tr-TR')} `;
});


const sliderYouTube = document.getElementById('sliderYouTube');
const priceYouTube = document.getElementById('priceYouTube');
const viewCount = document.getElementById('viewCount');

sliderYouTube.addEventListener('input', function () {
  const izlenme = parseInt(this.value);
  const fiyat = (izlenme * 0.08).toFixed(2); // 10.000 izlenme 800 TL => 0.08 TL başı

  viewCount.innerHTML = `Minimum +<strong>${izlenme.toLocaleString('tr-TR')}</strong> İzlenme`;
  priceYouTube.textContent = `₺${parseFloat(fiyat).toLocaleString('tr-TR')} `;
});

// Modal'ı gösterme fonksiyonu
function showModal(event) {
  event.preventDefault();  // Sayfanın yenilenmesini engeller

  const modal = document.getElementById('purchaseModal');
  const priceYouTube = document.getElementById('priceYouTube').textContent;
  
  // Fiyatı modalda güncelle
  document.getElementById('finalPrice').textContent = priceYouTube;
  
  // Modal'ı göster
  modal.style.display = "block";
}

// Modal'ı kapatma fonksiyonu
function closeModal() {
  const modal = document.getElementById('purchaseModal');
  modal.style.display = "none"; // Modal'ı gizle
}

// YouTube linki gönderildiğinde yapılacak işlem
function submitLink() {
  const youtubeLink = document.getElementById('youtubeLink').value;
  const finalPrice = document.getElementById('finalPrice').textContent;

  if (youtubeLink) {
    // Ödeme sayfasına yönlendirme yapılacak URL
    const paymentUrl = `https://yourpaymentgateway.com/payment?price=${encodeURIComponent(finalPrice)}&link=${encodeURIComponent(youtubeLink)}`;

    // Yönlendirme işlemi
    window.location.href = paymentUrl;
  } else {
    alert("Lütfen geçerli bir YouTube linki girin.");
  }
}

// Modal dışına tıklandığında kapanmasını sağlamak için
window.onclick = function(event) {
  const modal = document.getElementById('purchaseModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Modal'ı gösterme fonksiyonu
function showModal(event) {
  event.preventDefault();  // Sayfanın yenilenmesini engeller

  const modal = document.getElementById('purchaseModalSpotify');
  const priceStarter = document.getElementById('priceStarter').textContent;
  
  // Fiyatı modalda güncelle
  document.getElementById('finalPriceSpotify').textContent = priceStarter;
  
  // Modal'ı göster
  modal.style.display = "block";
}

// Modal'ı kapatma fonksiyonu
function closeModal() {
  const modal = document.getElementById('purchaseModalSpotify');
  modal.style.display = "none"; // Modal'ı gizle
}

// Spotify linki gönderildiğinde yapılacak işlem
function submitLinkSpotify() {
  const spotifyLink = document.getElementById('spotifyLink').value;
  const finalPrice = document.getElementById('finalPriceSpotify').textContent;

  if (spotifyLink) {
    // Ödeme sayfasına yönlendirme yapılacak URL
    const paymentUrl = `https://yourpaymentgateway.com/payment?price=${encodeURIComponent(finalPrice)}&link=${encodeURIComponent(spotifyLink)}`;

    // Yönlendirme işlemi
    window.location.href = paymentUrl;
  } else {
    alert("Lütfen geçerli bir Spotify linki girin.");
  }
}

// Modal dışına tıklandığında kapanmasını sağlamak için
window.onclick = function(event) {
  const modal = document.getElementById('purchaseModalSpotify');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

    document.addEventListener('DOMContentLoaded', function() {
        // Sonsuz döngü için artistleri kopyala
        const sliders = document.querySelectorAll('.artists-slider');
        sliders.forEach(slider => {
            slider.innerHTML = slider.innerHTML + slider.innerHTML;
        });
    });
