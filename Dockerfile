# Utiliser l'image officielle Nginx comme image de base
FROM nginx:alpine

# Copier les fichiers de votre site web dans le répertoire par défaut de Nginx
COPY . /usr/share/nginx/html

# Exposer le port 80 pour le serveur web
EXPOSE 80

# Commande par défaut pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
