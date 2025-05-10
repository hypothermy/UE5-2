const days = [
  { title: "Gün 1: gitBlueprint Class Mirası ve Polymorphism", tasks: ["Blueprint sınıf mirası hakkında ileri düzey bilgiler", "Polymorphism ve method override"] },
  { title: "Gün 2: Veri Yapıları - Array, List ve Dictionary Kullanımı", tasks: ["Blueprint'te array, list ve dictionary kullanımı", "Verileri saklamak için uygun yapılar oluşturma"] },
  { title: "Gün 3: İleri Düzey AI - Görsel Algılama ve Tepkiler", tasks: ["AI'nin görsel algılama kullanarak hareket etmesi", "Patikalar ve bölge tespiti"] },
  { title: "Gün 4: AI ve Behavior Tree Kullanımı", tasks: ["Behavior Tree nedir? ve nasıl kullanılır?", "AI karakterlerinin davranışlarını yönetmek"] },
  { title: "Gün 5: Advanced Camera Sistemleri ve Dinamik Kameralar", tasks: ["Kameraların dinamik olarak oyuncuya nasıl yaklaşacağı", "Özel kamera geçişleri ve efektler"] },
  { title: "Gün 6: İleri Düzey Animasyon Sistemleri", tasks: ["İleri düzey animasyon teknikleri: IK, facial animation", "Animasyon Blueprint’leri ile etkileşim"] },
  { title: "Gün 7: Karmaşık Etkileşim Sistemleri", tasks: ["Kullanıcı etkileşimlerini karmaşıklaştırma (puzzle sistemleri, dialog menüleri)", "Oyun içi nesnelerle etkileşim"] },
  { title: "Gün 8: Level Design ve Modular Level Kurulumu", tasks: ["Modüler level tasarımı ve blueprint ile oluşturma", "Level için mantıklı bir yapı kurma"] },
  { title: "Gün 9: Veritabanı ve JSON Kullanımı", tasks: ["JSON formatı ile veri alımı ve kaydedilmesi", "Uzak sunuculara veri gönderme ve alma"] },
  { title: "Gün 10: Oyun İçi Ekonomi ve Envanter Sistemi", tasks: ["Oyun içinde envanter yönetimi ve ekonomiyi kurma", "Oyun içi satın alımlar, para kazanma ve harcama"] },
  { title: "Gün 11: Hikaye Tabanlı Sistemler ve Seçim Mekaniği", tasks: ["Oyun içinde seçim yaparak hikayenin akışını değiştirme", "Dinamik hikaye tasarımı"] },
  { title: "Gün 12: Çoklu Oyuncu Modu Başlangıcı", tasks: ["Unreal Engine 5'te multiplayer (çoklu oyuncu) sistemlerine giriş", "Ağ senkronizasyonu"] },
  { title: "Gün 13: Çoklu Oyuncu Oyununda Zamanlayıcı ve Etkileşim", tasks: ["Multiplayer oyunlarda zamanlayıcılar kullanma", "Etkileşimli çok oyunculu dünyalar yaratma"] },
  { title: "Gün 14: Başka Düşman AI Modelleri ve Görevler", tasks: ["Çeşitli düşman yapay zekası türleri", "Görevlerde AI'yi kullanmak"] },
  { title: "Gün 15: Fizik ve Çevresel Etkileşimler", tasks: ["Fiziksel etkileşimler ve simülasyonları (örneğin, nesnelerin fiziksel çarpışmaları)", "Çevre öğeleriyle etkileşim kurma"] },
  { title: "Gün 16: Post-Processing ve Görsel Efektler", tasks: ["Post-processing efektleri eklemek", "Görsel efektlerin oyun atmosferine etkisi"] },
  { title: "Gün 17: Hızlı Prototipleme ve Oyun Testleri", tasks: ["Oyun prototipleri oluşturmak", "Erken test yaparak oyuncu geri bildirimi almak"] },
  { title: "Gün 18: Karmaşık UI ve Menü Sistemleri", tasks: ["Detaylı kullanıcı arayüzü ve menü sistemleri", "Dinamik içeriklerle UI öğeleri oluşturma"] },
  { title: "Gün 19: Zamanlayıcı ve Etkinlik Sistemi", tasks: ["Oyun içindeki etkinlikleri yönetmek", "Zamanlayıcı kullanarak görevleri ve olayları senkronize etme"] },
  { title: "Gün 20: Sinema ve Video Efektleri Kullanımı", tasks: ["Sinematik oyun içi geçişler", "Video efektlerinin oyun atmosferine dahil edilmesi"] },
  { title: "Gün 21: Gelişmiş Ses Sistemleri", tasks: ["Ses efektleri ile oyun deneyimini geliştirme", "Dinamik sesler ve 3D ses düzenlemeleri"] },
  { title: "GÜN 22: Büyük Dünya Tasarımı ve Yüksek Performans Yönetimi", tasks: ["Büyük oyun dünyaları oluşturma ve optimizasyon", "Performans arttırıcı teknikler"] },
  { title: "gÜN 23: Veri Entegrasyonu - Dış API Kullanımı", tasks: ["Oyun içi verilerin dış servislerden alınıp işlenmesi", "JSON ve REST API'leri kullanarak veri çekme"] },
  { title: "Gün 24: Oyun Dünyası ve Işıklandırma", tasks: ["Gelişmiş ışıklandırma teknikleri", "Doğal ışık sistemlerinin kurulumu"] },
  { title: "Gün 25: Dinamik Zorluk Seviyesi Sistemi", tasks: ["Oyuncu performansına göre zorluk seviyesini dinamik olarak ayarlama", "Yapay zeka zorlukları"] },
  { title: "Gün 26: Partikül Efektleri ve Çevresel Etkileşimler", tasks: ["Patlamalar, duman ve diğer partikül efektleri", "Çevresel etkileşimlerin partiküllerle zenginleştirilmesi"] },
  { title: "Gün 27: Gelişmiş AI ve Makine Öğrenimi", tasks: ["AI öğrenmesi ve adaptasyon sistemleri", "Makine öğrenimi ile gelişen düşman davranışları"] },
  { title: "Gün 28: Sinema Tabanlı Oyunlaştırma", tasks: ["Sinematik tarzda bir oyun dünyası oluşturma", "Film yapım tekniklerini oyun tasarımına adapte etme"] },
  { title: "Gün 29: Gelişmiş Multiplayer Oyun Felsefesi", tasks: ["Karmaşık multiplayer oyun sistemleri", "Sunucu ve istemci yönetimi"] },
  { title: "Gün 30: Oyun Testi ve Yorumlama", tasks: ["Son test ve hata giderme", "Oyuncu geri bildirimleri ve oyun sonu analizi"] }
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
