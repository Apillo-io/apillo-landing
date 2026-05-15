# Apillo — Hermes Context
**Oluşturulma:** 2026-05-15  
**Last Updated:** 2026-05-15  
**Durum:** Ekip kurulumu aşamasında, Landing page başlatıldı

---

## 🏢 Şirket Bilgileri

| Alan | Değer |
|------|-------|
| **Ad** | Apillo |
| **GitHub Organization** | Apillo-io |
| **Kurucu** | Emre Turhan |
| **Akademik Ortaklar** | Dr. Cem Özkurt, Doç. Dr. Yüksel Yurtay |
| **Ekip** | Milli Teknoloji Atölyeleri (Sakarya Üni) — 4-5 kişi |
| **Teknokent** | Kurulum sürecinde |
| **Email** | info@apillo.io |

---

## 🎯 Temel Vizyon

Küçük ve orta ölçekli işletmelerin dijital operasyonlarını yöneten, farklı sektörlerde çalışan ama arka planda tek bir veri ve ağ sistemine bağlı yaşayan bir ekosistem kurmak.

**Apillo ID:** Uzun vadede tüm ürünleri birleştiren kimlik katmanı.

---

## 💼 İş Modeli Özeti

### Başlangıç Stratejisi (Stealth)
- Dışarıdan görünen: Birbirinden bağımsız sektörel SaaS ürünleri
- Gerçekte: Tek veri mimarisi, tek büyüme stratejisi
- White label olarak başlangıç (işletme kendi markasıyla görür)

### Hedef Sektörler (öncelik sırası belirlenecek)
- Kafeler
- Kuaförler
- Çiçekçiler
- Mikro turizm işletmeleri
- Bungalov rezervasyonları
- Küçük işletme operasyonları

### Revenue Model
- Setup fee + aylık abonelik
- Ekstra özellikler için faturanlama
- Loyalty / pay sistemi ile veri akışı

---

## 👥 Ekip — Milli Teknoloji Atölyeleri

### Ekip Büyüklüğü
- **İdeal:** 5 kişi (Emre dahil)
- **Minimum:** 4 kişi (zorlanırsa)
- **Durum:** Çalışabilecek kişiler mevcut

### Ekip Özellikleri
- Sakarya Üniversitesi Milli Teknoloji Atölyeleri bünyesindeki mühendis ve öğrenciler
- Şu an çok güzel akademik taraflı işler yapıyorlar
- Emre ekibe Dr. Cem Özkurt kadar yakın

### Çalışma Düzeni
- **Maaş yok** — sprint/milestone bazlı ödeme
- **Gelir bölüşümü yok** — sadece düzensiz sprint ödemeleri
- **Hisse yok başta** — daha sonra, şirket güçlenince
- **Uzun vadeli vizyon:** Ekip üyeleri kendi şirketlerini kurar → alt yüklenici olurlar

### Proje Yönetimi
- Başlangıç: Emre yönetir
- Nihai hedef: Delegation with ownership

### Bakanlık Bütçesi
- Bakanlık bütçesi atölyeye ait (MTA)
- Emre dolaylı olarak bilgisayar ve serverları yönetici olarak kullanır

---

## 👤 Dr. Cem Özkurt — Mentor + Kaynak Yöneticisi

| Alan | Değer |
|------|-------|
| **Tanışma** | 2019 Şubat — 7+ yıldır yakın tanıdık |
| **Rol** | Milli Teknoloji Atölyeleri Yöneticisi |
| **Üniversite** | Sakarya Üniversitesi — Veri Bilimi ve Analitiği bölümü |
| **Üst Bağlantı** | Rektöre yakın |
| **Bakanlık Bağlantısı** | Sanayi ve Teknoloji Bakanlığı |

---

## 👤 Doç. Dr. Yüksel Yurtay — Akademik + İş Ortağı

| Alan | Değer |
|------|-------|
| **Rol** | Doçent Dr. — Sakarya Üniversitesi |
| **Bölüm** | Bilgisayar Mühendisliği + Veri Bilimi ve Analitiği |
| **Emre ile İlişki** | Akademik hoca, aynı bölümde |

---

## 👤 Emre Turhan — Kurucu/CEO

| Alan | Değer |
|------|-------|
| **Üniversite Rol** | Araştırma Görevlisi — Sakarya Üniversitesi |
| **Şirket** | Apillo — Teknokent üzerinden (kurulum sürecinde) |
| **Hedef** | Akademi + Şirket beraber yürütmek |
| **Kadastro** | Araştırma görevlisi kadrosu bekleniyor (Ağustos 2026) |

---

## 🗺️ 2026 Hedefleri

| Dönem | Hedef |
|-------|-------|
| 13-31 Mayıs 2026 | Ekip tanışma + Agile onboarding + Landing page |
| Haziran 2026 | İlk büyük proje (Yüksel Hoca işi) + MVP başlangıcı |
| Temmuz-Ağustos 2026 | Emre askerde — ekip devam eder |
| Ağustos 2026 | Akademik kadro başlangıcı |
| Eylül-Aralık 2026 | Validation + ilk gelir |

---

## 🔧 Tech Stack

| Katman | Teknoloji |
|--------|-----------|
| **Frontend** | Next.js 14 (App Router), TypeScript, TailwindCSS |
| **Backend** | Spring Boot 3, Java 21, MongoDB |
| **Infra** | AWS, Docker, Kubernetes, GitHub Actions |
| **AI** | RAG Pipeline (sonra) |
| **Deployment** | Vercel (frontend), AWS (backend) |

---

## 📁 Repo Yapısı

```
Apillo-io/
├── apillo-landing/        ← Landing page (bu repo, başladı)
├── apillo-shared/         ← (sonra — auth, DB, API contract)
├── apillo-kobi-[sektor]/  ← (sonra — KOBİ SaaS ürünleri)
└── apillo-ai/             ← (sonra — AI asistan, RAG)
```

---

## ✅ YAPILACAKLAR (Next Steps)

### Hemen (Mayıs 2026)
- [x] GitHub Organization kuruldu
- [x] Landing page başlatıldı
- [ ] Landing page deploy edilecek (Vercel)
- [ ] Ekip tanışma toplantısı

### Yakında (Haziran 2026)
- [ ] İlk sektör belirleme (Kafe / Kuaför / Çiçekçi)
- [ ] Yüksel Hoca işi için MVP başlat
- [ ] MVP stack kararı (tek platform mu, ayrı deploy mu)
- [ ] CI/CD pipeline kurulumu

### Askerde (Temmuz 2026)
- [ ] Landing page güncellenir (yeni projeler, ekip)
- [ ] KOBİ SaaS MVP geliştirmesi devam eder
- [ ] Yüksel Hoca projesi ilerler

---

## 📝 KRİTİK NOTLAR

### Emre'nin Askerliği (Temmuz 2026)
- 1 ay askere gidiyor
- Bu sürede ben (Hermes) Apillo geliştirmeye devam edeceğim
- Ekip (MTA) de devam edecek
- Emre'ye sadece review + karar için gereken

### Emre'nin Değerleri
- **İş bitirmek = en önemli şey**
- **Reputation kazanmak** — her iş Apillo'ya ve Emre'ye yazılır
- **Tüm sorumluluk Emre'de** — fatura, müşteri ilişkisi, teslimat
- **Nihai amaç:** Hem kendine hem çevresine sektörel projeler yaparak gelir ve reputation sağlamak

---

## 🔗 İletişim

- **Email:** info@apillo.io
- **GitHub:** https://github.com/Apillo-io
- **Instagram:** https://instagram.com/oemtalks