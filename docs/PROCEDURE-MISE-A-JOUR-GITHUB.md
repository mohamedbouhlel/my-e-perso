# Procédure — Mise à jour du dépôt local depuis GitHub

## Objectif

Mettre à jour le dépôt local avec les dernières modifications présentes sur GitHub, sans écraser de travail local et sans utiliser d'opération Git destructive.

## Préconditions

* Être dans le répertoire du projet.
* Le dépôt doit utiliser `main` comme branche de travail.
* Le dépôt distant doit être configuré sous le nom `origin`.
* Les modifications locales doivent être connues avant toute récupération.

## 1. Vérifier l'état local

```bash
git status --short
git branch --show-current
git remote -v
```

Vérifier :

* la branche courante est `main` ;
* le dépôt distant `origin` pointe vers le dépôt GitHub attendu ;
* les éventuelles modifications locales sont identifiées.

### Cas 1 — Working tree propre

Si :

```text
git status --short
```

ne retourne rien, poursuivre.

### Cas 2 — Modifications locales présentes

Ne pas exécuter immédiatement `git pull`.

Identifier d'abord les modifications :

```bash
git status
git diff
```

Les modifications locales doivent être traitées explicitement avant la mise à jour.

## 2. Récupérer l'état de GitHub

```bash
git fetch origin
```

Cette commande met à jour les références distantes sans modifier les fichiers de travail.

## 3. Comparer `main` et `origin/main`

```bash
git status
git log --oneline --decorate --graph --max-count=10
git log --oneline HEAD..origin/main
git log --oneline origin/main..HEAD
```

Interprétation :

* `HEAD..origin/main` : commits présents sur GitHub mais absents localement ;
* `origin/main..HEAD` : commits locaux absents de GitHub.

### Cas A — Aucun écart

Si les deux commandes `git log` ne retournent rien :

```text
local = origin/main
```

Aucune mise à jour n'est nécessaire.

### Cas B — GitHub contient de nouveaux commits

Si `HEAD..origin/main` retourne des commits et que le dépôt local n'a pas de commits divergents :

```bash
git pull --ff-only origin main
```

`--ff-only` empêche Git de créer automatiquement un merge lorsque l'historique local diverge.

### Cas C — Les historiques divergent

Si les deux commandes retournent des commits :

```text
HEAD..origin/main
origin/main..HEAD
```

ne pas utiliser automatiquement `git pull`.

Arrêter la procédure et analyser la divergence :

```bash
git log --oneline --left-right HEAD...origin/main
git status
```

La résolution doit être décidée explicitement avant toute fusion ou réécriture d'historique.

## 4. Vérifier après la mise à jour

Après un `git pull --ff-only` réussi :

```bash
git status
git branch -vv
git log --oneline --decorate -5
```

Le résultat attendu est :

```text
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

## 5. Vérifier le projet

Après une mise à jour du code, exécuter les vérifications prévues par le projet.

Pour le site React :

```bash
npm run build
```

Si le script de validation existe :

```bash
./scripts/validate.sh
```

Ne pas déclarer la mise à jour validée si le build ou les vérifications obligatoires échouent.

## 6. Verdict

### VALIDÉ

Conditions :

* branche `main` ;
* `origin/main` correctement récupéré ;
* aucune divergence non résolue ;
* working tree propre ;
* build réussi ;
* vérifications du projet réussies.

### NON VALIDÉ

Utiliser ce verdict si :

* le dépôt local diverge de GitHub ;
* des modifications locales empêchent la mise à jour ;
* le `pull --ff-only` échoue ;
* le build échoue ;
* une vérification obligatoire n'a pas pu être effectuée.

## Commande courte — cas nominal

Lorsque le dépôt local est propre et que `main` ne diverge pas :

```bash
git status --short &&
git fetch origin &&
git pull --ff-only origin main &&
git status &&
npm run build
```

Cette séquence ne doit être utilisée que lorsque les préconditions sont satisfaites.

## Opérations interdites automatiquement

La procédure ne doit jamais exécuter automatiquement :

```bash
git reset --hard
git clean -fd
git checkout -- .
git restore .
```

Ces commandes peuvent supprimer ou écraser du travail local.

## Résumé opérationnel

```text
État local
    ↓
git fetch origin
    ↓
Comparer main / origin/main
    ↓
┌───────────────────────────────┐
│ aucune divergence             │
│                               │
│       git pull --ff-only      │
└───────────────────────────────┘
    ↓
Vérification Git
    ↓
Build / validation
    ↓
VALIDÉ
```

En cas de divergence :

```text
main ≠ origin/main
       ↓
ARRÊT
       ↓
diagnostic
       ↓
résolution explicite
       ↓
vérification
```
