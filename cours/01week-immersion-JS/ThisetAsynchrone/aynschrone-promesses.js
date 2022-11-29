//la gestion d'événements asynchrones c'est ce qui fait l'une des grandes forces de JS 
// parce que vous n'êtes pas obligés d'attendre la réalisation d'une tâche pour en faire une autre. 
//REGARDEZ LA VIDEO sur le fonctionnement de JS avec l'event loop.

//les promesses// promises (se dit promesse)
//permet d'éviter l'enfer des callbacks dans des callbacks dans des callbacks 
//donc essentiellement, c'est une manière d'écrire des événements qui s'enchaînent.
// => check la doc (+vidéo Charles) pour regarder comment sont construites les promesses avec les resolve, reject passé en paramètres
//de manière très grossière, vous avez une promesse, la méthode .then retourne le résultat en cas de succès, la méthode .catch renvoie une erreur. 
// donc ça sera très utile pour faire des requêtes API.
//si une requête fonctionne, je vais pouvoir renvoyer un résultat, si ma requête ne fonctionne pas, plutôt que d'arrêter l'exécution de mon script, je signale juste une erreur. 
//egalement ce qui est très utile c'est que les .then peuvent s'enchainer et donc ça évite de faire des callbacks dans des callbacks 
// 
// les fontions qui utilisent les promesses : fetch, axios
