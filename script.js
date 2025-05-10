const days = [
  { title: "Gün 1: gitBlueprint Class Mirası ve Polymorphism", tasks: ["Blueprint sınıf mirası hakkında ileri düzey bilgiler", "Polymorphism ve method override"] },
  { title: "Gün 2: Veri Yapıları - Array, List ve Dictionary Kullanımı", tasks: ["Blueprint'te array, list ve dictionary kullanımı", "Verileri saklamak için uygun yapılar oluşturma"] },
  { title: "İleri Düzey AI - Görsel Algılama ve Tepkiler", tasks: ["AI'nin görsel algılama kullanarak hareket etmesi", "Patikalar ve bölge tespiti"] },
  { title: "AI ve Behavior Tree Kullanımı", tasks: ["Behavior Tree nedir? ve nasıl kullanılır?", "AI karakterlerinin davranışlarını yönetmek"] },
  { title: "Advanced Camera Sistemleri ve Dinamik Kameralar", tasks: ["Kameraların dinamik olarak oyuncuya nasıl yaklaşacağı", "Özel kamera geçişleri ve efektler"] },
  { title: "İleri Düzey Animasyon Sistemleri", tasks: ["İleri düzey animasyon teknikleri: IK, facial animation", "Animasyon Blueprint’leri ile etkileşim"] },
  { title: "Karmaşık Etkileşim Sistemleri", tasks: ["Kullanıcı etkileşimlerini karmaşıklaştırma (puzzle sistemleri, dialog menüleri)", "Oyun içi nesnelerle etkileşim"] },
  { title: "Level Design ve Modular Level Kurulumu", tasks: ["Modüler level tasarımı ve blueprint ile oluşturma", "Level için mantıklı bir yapı kurma"] },
  { title: "Veritabanı ve JSON Kullanımı", tasks: ["JSON formatı ile veri alımı ve kaydedilmesi", "Uzak sunuculara veri gönderme ve alma"] },
  { title: "Oyun İçi Ekonomi ve Envanter Sistemi", tasks: ["Oyun içinde envanter yönetimi ve ekonomiyi kurma", "Oyun içi satın alımlar, para kazanma ve harcama"] },
  { title: "Hikaye Tabanlı Sistemler ve Seçim Mekaniği", tasks: ["Oyun içinde seçim yaparak hikayenin akışını değiştirme", "Dinamik hikaye tasarımı"] },
  { title: "Çoklu Oyuncu Modu Başlangıcı", tasks: ["Unreal Engine 5'te multiplayer (çoklu oyuncu) sistemlerine giriş", "Ağ senkronizasyonu"] },
  { title: "Çoklu Oyuncu Oyununda Zamanlayıcı ve Etkileşim", tasks: ["Multiplayer oyunlarda zamanlayıcılar kullanma", "Etkileşimli çok oyunculu dünyalar yaratma"] },
  { title: "Başka Düşman AI Modelleri ve Görevler", tasks: ["Çeşitli düşman yapay zekası türleri", "Görevlerde AI'yi kullanmak"] },
  { title: "Fizik ve Çevresel Etkileşimler", tasks: ["Fiziksel etkileşimler ve simülasyonları (örneğin, nesnelerin fiziksel çarpışmaları)", "Çevre öğeleriyle etkileşim kurma"] },
  { title: "Post-Processing ve Görsel Efektler", tasks: ["Post-processing efektleri eklemek", "Görsel efektlerin oyun atmosferine etkisi"] },
  { title: "Hızlı Prototipleme ve Oyun Testleri", tasks: ["Oyun prototipleri oluşturmak", "Erken test yaparak oyuncu geri bildirimi almak"] },
  { title: "Karmaşık UI ve Menü Sistemleri", tasks: ["Detaylı kullanıcı arayüzü ve menü sistemleri", "Dinamik içeriklerle UI öğeleri oluşturma"] },
  { title: "Zamanlayıcı ve Etkinlik Sistemi", tasks: ["Oyun içindeki etkinlikleri yönetmek", "Zamanlayıcı kullanarak görevleri ve olayları senkronize etme"] },
  { title: "Sinema ve Video Efektleri Kullanımı", tasks: ["Sinematik oyun içi geçişler", "Video efektlerinin oyun atmosferine dahil edilmesi"] },
  { title: "Gelişmiş Ses Sistemleri", tasks: ["Ses efektleri ile oyun deneyimini geliştirme", "Dinamik sesler ve 3D ses düzenlemeleri"] },
  { title: "Büyük Dünya Tasarımı ve Yüksek Performans Yönetimi", tasks: ["Büyük oyun dünyaları oluşturma ve optimizasyon", "Performans arttırıcı teknikler"] },
  { title: "Veri Entegrasyonu - Dış API Kullanımı", tasks: ["Oyun içi verilerin dış servislerden alınıp işlenmesi", "JSON ve REST API'leri kullanarak veri çekme"] },
  { title: "Oyun Dünyası ve Işıklandırma", tasks: ["Gelişmiş ışıklandırma teknikleri", "Doğal ışık sistemlerinin kurulumu"] },
  { title: "Dinamik Zorluk Seviyesi Sistemi", tasks: ["Oyuncu performansına göre zorluk seviyesini dinamik olarak ayarlama", "Yapay zeka zorlukları"] },
  { title: "Partikül Efektleri ve Çevresel Etkileşimler", tasks: ["Patlamalar, duman ve diğer partikül efektleri", "Çevresel etkileşimlerin partiküllerle zenginleştirilmesi"] },
  { title: "Gelişmiş AI ve Makine Öğrenimi", tasks: ["AI öğrenmesi ve adaptasyon sistemleri", "Makine öğrenimi ile gelişen düşman davranışları"] },
  { title: "Sinema Tabanlı Oyunlaştırma", tasks: ["Sinematik tarzda bir oyun dünyası oluşturma", "Film yapım tekniklerini oyun tasarımına adapte etme"] },
  { title: "Gelişmiş Multiplayer Oyun Felsefesi", tasks: ["Karmaşık multiplayer oyun sistemleri", "Sunucu ve istemci yönetimi"] },
  { title: "Oyun Testi ve Yorumlama", tasks: ["Son test ve hata giderme", "Oyuncu geri bildirimleri ve oyun sonu analizi"] }
];

const container = document.getElementById("days-container");

days.forEach((day, index) => {
  const dayDiv = document.createElement("div");
  dayDiv.className = "day";

  const title = document.createElement("h2");
  title.textContent = day.title;

  const task = document.createElement("div");
  task.className = "tasks";
  task.textContent = day.tasks;

  const textarea = document.createElement("textarea");
  textarea.placeholder = "Bugünkü deneyimini yaz...";
  textarea.value = localStorage.getItem(`note-${index}`) || "";

  const button = document.createElement("button");
  button.textContent = "Kaydet";
  button.className = "save-btn";
  button.onclick = () => {
    localStorage.setItem(`note-${index}`, textarea.value);
    alert("Not kaydedildi!");
  };

  dayDiv.appendChild(title);
  dayDiv.appendChild(task);
  dayDiv.appendChild(textarea);
  dayDiv.appendChild(button);

  container.appendChild(dayDiv);
});
