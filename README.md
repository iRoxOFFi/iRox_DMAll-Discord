# iRox_DMAll-Discord
![Image](https://i.goopics.net/hqpgvx.png)


## 📝 Description

**iRox_DMAll-Discord** est un bot Discord développé en **Node.js**, permettant d’envoyer automatiquement un message privé à tous les membres d’un serveur (dans les limites imposées par Discord).
Il inclut également une interface simple accessible via le dossier `public/`.

Ce projet est idéal pour automatiser des envois de messages, créer des campagnes internes ou gérer des notifications ciblées sur un serveur Discord.

---

## 📦 Installation

### 1️⃣ **Cloner le repository**

```bash
git clone https://github.com/iRoxOFFi/iRox_DMAll-Discord.git
cd iRox_DMAll-Discord
```

### 2️⃣ **Installer les dépendances**

Assurez-vous que **Node.js** est installé sur votre machine.

Ensuite, exécutez :

```bash
npm install discord.js
```

### 3️⃣ **Lancer le bot**

Une fois l'installation terminée, démarrez simplement :

```bash
node server.js
```

Le terminal devrait alors afficher :

```bash
🚀 Serveur web démarré sur http://localhost:PORT/
```

Ainsi que l’état de connexion du bot Discord.

---

## 📁 Structure du projet

```
iRox_DMAll-Discord/
├── public
│   ├── index.html
│   └── style.css
├── node_modules
├── package.json
├── package-lock.json
└── server.js
```

* **public/** → Interface web du projet
* **server.js** → Code principal du bot Discord
* **node_modules/** → Modules installés via NPM

---

## 👥 Contribution

Les contributions sont les bienvenues ! Pour participer :

1. **Fork** du repository
2. **Clone** de votre fork :

   ```bash
   git clone https://github.com/iRoxOFFi/iRox_DMAll-Discord.git
   ```
3. **Création** d’une branche :

   ```bash
   git checkout -b feature/votre-feature
   ```
4. **Commit** de vos changements :

   ```bash
   git commit -am "Ajout d'une fonctionnalité"
   ```
5. **Push** de la branche :

   ```bash
   git push origin feature/votre-feature
   ```
6. **Ouverture** d’une pull request

Merci de respecter le style du projet pour assurer une bonne cohérence.
