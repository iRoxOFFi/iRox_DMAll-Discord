// Importer les dépendances
const express = require('express');
const cors = require('cors');
const { Client, Intents } = require('discord.js');

// Initialisation du serveur web Express
const app = express();
app.use(cors()); // Autorise la communication entre le site et le serveur
app.use(express.json()); // Permet de lire les données JSON envoyées par le site
app.use(express.static('public')); // Sert les fichiers de ton site web (HTML/CSS)

// Route API pour recevoir la demande d'envoi de messages
app.post('/api/dm-all', async (req, res) => {
    const { token, guildId, message } = req.body;

    if (!token || !guildId || !message) {
        return res.status(400).json({ success: false, message: "Le token, l'ID du serveur et le message sont requis." });
    }

    // On crée un nouveau client pour chaque requête. C'est TRES inefficace mais nécessaire avec cette méthode.
    const client = new Client({
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS]
    });

    try {
        // Connexion du bot avec le token fourni
        await client.login(token);
        console.log(`🤖 Bot temporairement connecté en tant que ${client.user.tag}`);

        const guild = await client.guilds.fetch(guildId);
        const members = await guild.members.fetch();
        
        let successCount = 0;
        let errorCount = 0;

        console.log(`Envoi du message à ${members.size} membres du serveur ${guild.name}...`);

        for (const member of members.values()) {
            if (member.user.bot) continue; // On n'envoie pas de message aux bots

            try {
                await member.send(message);
                successCount++;
                console.log(`✅ Message envoyé à ${member.user.tag}`);
            } catch (error) {
                errorCount++;
                console.error(`❌ Échec de l'envoi à ${member.user.tag}. Raison probable : DMs bloqués.`);
            }
        }

        res.json({
            success: true,
            message: `Opération terminée.`,
            successCount,
            errorCount,
        });

    } catch (error) {
        console.error("Erreur critique:", error.message);
        if (error.code === 'TOKEN_INVALID') {
            return res.status(401).json({ success: false, message: "Le token du bot est invalide." });
        }
        res.status(500).json({ success: false, message: "Erreur. Vérifie le token, l'ID du serveur et que le bot est bien sur le serveur." });
    } finally {
        // On déconnecte le bot pour libérer les ressources
        client.destroy();
        console.log("🤖 Bot déconnecté.");
    }
});

// Démarrage du bot et du serveur web
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Serveur web démarré sur http://localhost:${PORT}`);
    console.log(`Le site est accessible à cette adresse. N'OUBLIEZ PAS LES RISQUES DE SÉCURITÉ !`);
});
