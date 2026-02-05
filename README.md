# ✈️ Flight Manager App

**Proiect realizat pentru disciplina MPP (Medii de Proiectare și Programare)**  

---

## 📋 Descriere

Flight Manager App este o aplicație software modulară concepută pentru **gestionarea eficientă a zborurilor, rezervărilor și administrarea pasagerilor**. Aplicația dispune de două versiuni distincte care demonstrează diferite arhitecturi și tehnologii.

---

## 🎯 Obiective

- ✅ Centralizarea informațiilor despre zboruri și rezervări
- ✅ Interfață intuitivă și ușor de folosit pentru gestionarea datelor
- ✅ Scalabilitate și modularitate pentru dezvoltări ulterioare
- ✅ Implementarea diferitelor arhitecturi și protocoale de comunicare

---

## 🚀 Versiuni ale Aplicației

### 📱 Versiunea 1: JavaFX & C#

**Frontend:**
- Aplicație desktop cu JavaFX
- Interfață grafică prietenoasă și responsivă
- Gestionare evenimente și validare formulare

**Backend:**
- Dezvoltat în C# (.NET)
- Logică de business robustă
- Gestionare baze de date

**Comunicare:**
- Protocol **gRPC** pentru comunicare rapidă și eficientă
- Serialization Protobuf pentru transfer optim de date

**Bază de Date:**
- MySQL pentru persistența datelor

### 🌐 Versiunea 2: React & Spring Boot

**Frontend:**
- Aplicație web modernă cu **React**
- Interfață responsive și interactivă
- Componente reutilizabile
- State management

**Backend:**
- Framework **Spring Boot**
- API-uri REST bine structurate
- **Hibernate** & **Spring Data JPA** pentru ORM
- Autentificare securizată cu **JWT** (JSON Web Tokens)

**Bază de Date:**
- MySQL cu integrare prin Hibernate

---

## 💻 Tehnologii Utilizate

### Limbaje
- **Java** (85.3%) - Backend și frontend desktop
- **JavaScript** (8.5%) - Frontend web cu React
- **C#** (.NET) - Backend versiunea 1
- **CSS** (5.9%) - Stilizare interfață web
- **HTML** (0.3%) - Structură aplicație web

### Framework-uri și Librării
- **JavaFX** - Desktop UI
- **React** - Web UI
- **Spring Boot** - Backend framework
- **Hibernate** - ORM
- **Spring Data JPA** - Data access layer
- **gRPC** - Remote procedure calls
- **.NET** - Backend C#

### Securitate și Autentificare
- **JWT (JSON Web Tokens)** - Autentificare stateless
- **Spring Security** - Securizare endpoints

### Baze de Date
- **MySQL** - Sistem de gestiune a bazelor de date

### Build Tools
- **Gradle** - Build automation

---

## 📁 Structura Proiectului

```
Flight-Manager-App/
│
├── Client/              # Client JavaFX
├── Server/              # Server logic
├── Model/               # Entități și clase de domeniu
├── Networking/          # gRPC și comunicare rețea
├── Persistence/         # Repository și DAO
├── Services/            # Business logic
├── RestComponent/       # REST API controllers
├── react-client/        # Aplicație React
├── logs/                # Fișiere de log
└── gradle/              # Gradle wrapper
```

---

## 🎮 Funcționalități

### Pentru Utilizatori
- 🔍 **Căutare zboruri** - Filtrare după destinație, dată, companie
- 🎫 **Rezervare locuri** - Sistem de rezervare cu validare
- 👤 **Gestionare profil** - Date personale și istoric rezervări
- 📧 **Notificări** - Confirmări și actualizări

### Pentru Administratori
- ✈️ **Gestionare zboruri** - CRUD complet pentru zboruri
- 📊 **Dashboard** - Statistici și rapoarte
- 👥 **Gestionare utilizatori** - Administrare conturi
- 🗄️ **Gestionare bază de date** - Backup și restore

---

## 🔐 Securitate

- **JWT Authentication** - Token-based authentication pentru API
- **Password Hashing** - Parole criptate în baza de date
- **Input Validation** - Validare și sanitizare date de intrare
- **SQL Injection Prevention** - Prepared statements și ORM
- **CORS Configuration** - Securitate cross-origin requests

---

---

**⭐ Dacă proiectul ți-a fost util, lasă un star!**
