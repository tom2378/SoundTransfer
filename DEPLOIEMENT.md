# Déployer SoundTransfer sur Vercel

## 1. Publier sur GitHub
Créez un dépôt GitHub et importez **le contenu de ce dossier** à sa racine (pas le ZIP comme un fichier unique).

## 2. Déployer
Sur https://vercel.com/new, importez le dépôt GitHub.
- Framework Preset : Next.js
- Root Directory : `./`
- Install Command : `npm ci`
- Build Command : `npm run build`
Cliquez sur **Deploy**.

## 3. Vérifier
- `/` : accueil
- `/versions/4/index.html` : SoundTransfer v4
- `/versions/3/index.html`, `/versions/2/index.html`, `/versions/1/1.html` : versions précédentes
- `/sstv` : décodeur SSTV
- `/pong/index.html` : Pong

Les accès au microphone nécessitent HTTPS et une autorisation du navigateur.

**Attention :** la compilation n'a pas été exécutée dans cet environnement. Si Vercel signale une erreur, transmettre le journal de build pour correction. Le service worker PWA original du décodeur SSTV peut également nécessiter des ajustements pour cohabiter avec les autres pages.
