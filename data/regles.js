/* Fiches de règles — résumés pour le MJ. Pages = Katharsys (K) ou supplément Artefacts (A). */
window.REGLES = [
/* ───────────── BASES ───────────── */
{cat:"Bases", t:"Valeur d’action et jet de dés", ref:"K p.18", tags:"VA jet dés succès 12",
h:`<p><b>VA = Attribut + Compétence ± modificateurs</b> (toujours exprimés en dés : +2D, -3D).</p>
<ul><li>On lance autant de <b>d6</b> que la VA.</li>
<li>Chaque dé ≥ <b>4</b> = un <b>succès</b>.</li>
<li>Maximum <b>12 dés</b> : chaque point au-delà de 12 devient un <b>succès automatique</b>.</li>
<li>VA réduite à 0 ou moins : l’action échoue automatiquement.</li>
<li>Notation : <i>ATTRIBUT+Compétence (difficulté)</i>, ex. INS+Dressage (2).</li></ul>`},

{cat:"Bases", t:"Difficulté", ref:"K p.18", tags:"difficulté seuil",
h:`<p>L’action réussit si <b>succès ≥ difficulté</b>. Le MJ n’est pas obligé de l’annoncer.</p>
<table><tr><th>Succès</th><th>Difficulté</th></tr>
<tr><td>1</td><td>Facile</td></tr><tr><td>2</td><td>Délicate</td></tr><tr><td>4</td><td>Difficile</td></tr>
<tr><td>6</td><td>Très difficile</td></tr><tr><td>8</td><td>Presque impossible</td></tr><tr><td>10</td><td>Tentative désespérée</td></tr></table>`},

{cat:"Bases", t:"Déclencheurs (DC)", ref:"K p.19", tags:"déclencheur 6 trigger qualité",
h:`<p>Chaque <b>6</b> est un succès <b>et</b> un déclencheur. Les DC ne comptent <b>que si l’action réussit</b>.</p>
<p>Ils mesurent la vitesse et la maîtrise : actions supplémentaires, dégâts en plus, activation de Potentiels et de propriétés d’armes. Un DC n’est pas « consommé » par un effet, sauf mention contraire (ex. Complications, Dilacération).</p>
<table><tr><th>DC</th><th>Résultat</th></tr><tr><td>1</td><td>Bien</td></tr><tr><td>2</td><td>Remarquable</td></tr><tr><td>3</td><td>Excellent</td></tr><tr><td>4</td><td>Brillant</td></tr><tr><td>5</td><td>Exceptionnel</td></tr><tr><td>6</td><td>Légendaire</td></tr></table>`},

{cat:"Bases", t:"Échec et échec critique", ref:"K p.19", tags:"échec critique botch 1",
h:`<p><b>Échec</b> : succès &lt; difficulté.</p><p><b>Échec critique</b> : échec <b>et</b> plus de <b>1</b> que de succès. L’action tourne mal : l’artefact se brise, le guide mène le groupe chez les gendos, le prix double, le combattant lâche son arme…</p>`},

{cat:"Bases", t:"Confrontation", ref:"K p.19-20", tags:"opposition conflit égalité",
h:`<p>Deux adversaires lancent en même temps ; la difficulté de chacun = succès de l’autre. <b>Le plus de succès gagne</b> ; à égalité, <b>le plus de DC</b> gagne.</p>
<p>Encore égalité : selon la situation (match nul possible en compétition). S’il faut un vainqueur, <b>celui qui a pris l’initiative de l’action perd</b>.</p>
<p>Des compétences différentes peuvent s’opposer (CHA+Séduction contre PSY+Foi/Volonté, INS+Empathie contre PSY+Ruse…).</p>`},

{cat:"Bases", t:"Combinaisons", ref:"K p.20", tags:"combinaison deux jets",
h:`<ul><li>Deux tests successifs : le second n’est tenté <b>que si le premier réussit</b>.</li>
<li>Les DC du premier jet s’<b>ajoutent</b> à ceux du second.</li>
<li>Plus risqué, mais plus spectaculaire. Peu utile en combat (prend du temps).</li></ul>
<p>Ex. AGI+Furtivité puis PHY+Corps à corps = embuscade ; INS+Perception puis AGI+Armes à projectiles = tir d’élite.</p>`},

{cat:"Bases", t:"Actions complexes", ref:"K p.21", tags:"complexe cumul succès",
h:`<p>Série d’actions : il faut <b>cumuler un total de succès</b> fixé par le MJ, souvent en temps limité (rounds).</p><p>Les <b>DC comptent comme des succès supplémentaires</b>. Combinable avec confrontation ou combinaison.</p>`},

{cat:"Bases", t:"Coopération", ref:"K p.21", tags:"aide coopération assistant",
h:`<p><b>Action complexe à plusieurs</b> : les succès et DC des participants s’additionnent (si la situation s’y prête).</p>
<p><b>Aide sur un jet normal</b> : l’assistant fait le même jet avec <b>difficulté +1</b>. S’il réussit, <b>ses DC deviennent des dés bonus</b> pour le personnage aidé. Chaque assistant supplémentaire : +1 de difficulté.</p>`},

{cat:"Bases", t:"Encombrement", ref:"K p.103", tags:"encombrement charge sac",
h:`<p>Maximum sans pénalité = <b>PHY+Force</b>.</p><p>Malus : <b>-1D par point d’encombrement au-delà</b>, sur toutes les VA. Si on jette son sac, on ne compte que ce que le personnage porte sur lui.</p>`},

/* ───────────── COMBAT ───────────── */
{cat:"Combat", t:"Déroulé d’un round", ref:"K p.100-102", tags:"round tour ordre 4 secondes",
h:`<p>Un round = <b>4 secondes</b>.</p><ol><li><b>Ego</b> : chacun peut dépenser jusqu’à 3 points d’Égo (+1D chacun à l’Initiative <i>et</i> à la 1re action).</li>
<li><b>Initiative</b> : PSY+Réactivité ± modificateurs. Score = nombre de succès.</li>
<li><b>Actions</b> : 1 + 1 action par tranche de 2 DC du jet d’Initiative.</li>
<li><b>Ordre</b> : l’Initiative la plus haute agit en premier ; égalité = simultané.</li></ol>`},

{cat:"Combat", t:"Initiative et Ego", ref:"K p.102", tags:"initiative ego réactivité",
h:`<ul><li>Jet : <b>PSY+Réactivité</b> + modificateurs + max <b>3D d’Égo</b>.</li>
<li>Chaque point d’Égo dépensé : +1D à l’Initiative <b>et</b> +1D à la première action.</li>
<li><b>Pas d’Égo en cas de surprise ou d’embuscade.</b></li>
<li>Score d’Initiative = nombre de succès (aucun succès = 0).</li>
<li>Actions = 1 + 1 par tranche de 2 DC.</li></ul>`},

{cat:"Combat", t:"Actions courantes", ref:"K p.102-106", tags:"déplacement recharger changer arme",
h:`<table><tr><th>Action</th><th>Règle</th></tr>
<tr><td>Marcher</td><td>≤ 2 m, gratuit, sans malus</td></tr>
<tr><td>Courir</td><td>&gt; 2 m (max PHY+Athlétisme m) : <b>-2D</b> aux actions, <b>+1</b> en Défense passive</td></tr>
<tr><td>Recharger</td><td>1 action (chargement par la gueule : 2 actions)</td></tr>
<tr><td>Changer d’arme</td><td>Gratuit, mais <b>-2D</b> à l’action suivante</td></tr>
<tr><td>Défense</td><td>Garder une action pour une Défense active</td></tr>
<tr><td>Coincé</td><td>Tireur pris au corps à corps : 1 action pour se dégager avant de viser</td></tr></table>`},

{cat:"Combat", t:"Attaque", ref:"K p.106", tags:"attaque VA modificateurs portée",
h:`<p><b>Compétences</b> : PHY+Lutte (mains nues), PHY+Corps à corps (mêlée), AGI+Armes à projectiles (distance).</p>
<p><b>Modificateurs</b> :</p><ul>
<li>Maniabilité de l’arme (±D)</li><li>+1D par point d’Égo dépensé (1re action)</li>
<li>-1D par Traumatisme</li><li>-2D si déplacement &gt; 2 m</li>
<li>Portée : normale 0, longue <b>-4D</b>, extrême <b>-8D</b></li>
<li>Encombrement : -1D par point au-delà de PHY+Force</li>
<li>Environnement : -1D brouillard/faible visibilité, -2D clair de lune, -4D obscurité</li></ul>
<p>L’attaque touche si <b>succès ≥ Défense passive</b> de la cible (ou bat sa Défense active).</p>`},

{cat:"Combat", t:"Défense passive", ref:"K p.106", tags:"défense passive couverture",
h:`<table><tr><th>Situation</th><th>Valeur</th></tr>
<tr><td>Base</td><td>1</td></tr><tr><td>Défenseur actif et debout</td><td>+1</td></tr>
<tr><td>Couverture partielle</td><td>+1</td></tr><tr><td>Couverture totale</td><td>+4</td></tr>
<tr><td>Défenseur s’est déplacé de plus de 2 m</td><td>+1</td></tr><tr><td>Bouclier</td><td>selon bouclier</td></tr></table>`},

{cat:"Combat", t:"Défense active et contre-attaque", ref:"K p.106", tags:"esquive parade contre-attaque",
h:`<ul><li>Coûte <b>une action</b> (impossible si toutes sont utilisées). Se fait hors de son tour.</li>
<li>Contre un tir ou pour esquiver : <b>AGI+Mobilité</b>.</li>
<li>Parade au contact : <b>PHY+Corps à corps</b> ou <b>PHY+Lutte</b> selon l’arme.</li>
<li>Réussie si <b>succès du défenseur ≥ succès de l’attaquant</b>.</li></ul>
<p><b>Contre-attaque</b> (corps à corps / lutte, blocage avec une compétence de combat) : défense réussie <b>avec 3 DC</b> → le défenseur inflige les dégâts de son arme à l’assaillant.</p>`},

{cat:"Combat", t:"Dégâts", ref:"K p.107", tags:"dégâts armure F force",
h:`<p><b>Dégâts = dégâts de l’arme + DC + Potentiels</b></p><p><b>Blessures = dégâts − valeur d’armure</b></p>
<p>« F » = PHY+Force. Ex. 2+F/2 avec PHY+Force 8 → 2+4 = 6. Divisions arrondies <b>au supérieur</b>.</p>
<p>Les dégâts remplissent d’abord les <b>Blessures superficielles</b>, puis les <b>Traumatismes</b>.</p>`},

{cat:"Combat", t:"Attaques mentales", ref:"K p.107", tags:"mental ego foi volonté",
h:`<ul><li>Contrées par <b>PSY+Foi</b> ou <b>PSY+Volonté</b>, sans perte d’action (sauf exception).</li>
<li>Si la défense échoue : <b>dégâts + DC retirés des points d’Égo</b>.</li>
<li>Égo à 0 ou moins : le défenseur s’effondre.</li></ul>`},

{cat:"Combat", t:"Lutte et étranglement", ref:"K p.157", tags:"étranglement lutte ego",
h:`<ul><li>Étranglement : nécessite une attaque <b>PHY+Lutte</b> réussie.</li>
<li>Dégâts : <b>2 points d’Égo par round</b>.</li>
<li>Se libérer : confrontation PHY+Lutte ou PHY+Force contre PHY+Lutte ou PHY+Force de l’assaillant.</li>
<li>Égo à 0 : mort au bout de 3 rounds.</li></ul>`},

/* ───────────── BLESSURES & SOINS ───────────── */
{cat:"Blessures & soins", t:"Blessures superficielles et Traumatismes", ref:"K p.113", tags:"blessures traumatismes mort maximum",
h:`<table><tr><th>Jauge</th><th>Maximum</th></tr>
<tr><td>Blessures superficielles</td><td>(PHY+Résistance) × 2</td></tr>
<tr><td>Traumatismes</td><td>PHY + PSY</td></tr>
<tr><td>Égo</td><td>(INT+Concentration ou INS+Pulsions) × 2</td></tr>
<tr><td>Sporulation</td><td>(PSY+Foi ou Volonté) × 2</td></tr></table>
<ul><li>1 Blessure superficielle par point de dégât ; une fois la jauge pleine, les dégâts passent en Traumatismes.</li>
<li><b>-1D à toutes les actions par Traumatisme</b>.</li>
<li>Traumatismes ≥ maximum : <b>mort</b>.</li></ul>`},

{cat:"Blessures & soins", t:"Soigner", ref:"K p.112-113", tags:"médecine guérison soin chirurgie",
h:`<p><b>Blessures superficielles</b> : juste après la blessure, <b>INT+Médecine (2)</b> → guérit <b>1 + DC</b> Blessures superficielles.</p>
<p><b>Traumatismes</b> : chirurgie, <b>INT+Médecine (nb de Traumatismes)</b> → guérit <b>1 + DC</b> Traumatismes. 12 heures d’intervention, une tentative tous les <b>4 jours</b>.</p>
<p><b>Récupération naturelle</b> : d’abord les Blessures superficielles (1 par jour), puis les Traumatismes (1 tous les 10 jours).</p>
<p>Bandages : +1 Blessure superficielle récupérée juste après la blessure. Sac de couchage : 1 Blessure superficielle par nuit.</p>`},

{cat:"Blessures & soins", t:"Complications", ref:"A p.54-55", tags:"complication hémorragie infection inconscience",
h:`<p>Quand une attaque inflige des dégâts, l’attaquant peut <b>dépenser des DC</b> pour appliquer une Complication (ces DC ne servent plus aux dégâts). Blessures superficielles → Complications de BS ; Traumatismes → Complications de Traumatismes.</p>
<p><b>Sur Blessures superficielles</b></p><ul>
<li><b>Désorientation</b> (1DC/niv.) : malus = niveau à la prochaine action (pas à l’Initiative).</li>
<li><b>Infection</b> (1DC/niv.) : jet de résistance le lendemain.</li>
<li><b>Hémorragie lente</b> (1DC/niv.) : -1 PHY par heure, intervalle divisé par 2 par niveau. Soin : INT+Médecine (niveau), action complexe.</li>
<li><b>Souffle coupé</b> (1DC/niv.) : -2D/niv. à l’Initiative suivante, sauf si on dépense 2 Égo.</li></ul>
<p><b>Sur Traumatismes</b></p><ul>
<li><b>Hémorragie rapide</b> (1DC/niv.) : 1 dégât tous les 4 rounds, -1 round par niveau.</li>
<li><b>Commotion</b> (1DC/niv.) : perte temporaire de PSY et INT = niveau (récup. 1/heure ; à 0 = arrêt cardiaque).</li>
<li><b>Réouverture</b> (2DC/niv.) : effort physique → PHY+Vigueur (niveau) ou les dégâts soignés reviennent.</li>
<li><b>Inguérissable</b> (2DC) : la chirurgie ne soigne plus les Traumatismes.</li>
<li><b>Obusite</b> (3DC) : ne peut pas agir au round suivant.</li>
<li><b>Défiguration</b> (3DC compétence, 5DC attribut) : perte définitive d’un point.</li>
<li><b>Inconscience</b> (5DC) : incapable d’agir pendant 3 minutes.</li></ul>`},

{cat:"Blessures & soins", t:"Infections", ref:"A p.56-57", tags:"infection amputation vigueur",
h:`<ul><li>Un jour après la blessure : <b>PHY+Vigueur (niveau de la Complication)</b>, une fois par Complication Infection. DC = succès en plus.</li>
<li>Échec : <b>-1 PHY</b> (récupérable avec de l’XP) ; on refait le jet chaque jour jusqu’à réussite. PHY à 0 = mort.</li>
<li>Les Traumatismes provoquent aussi des infections : difficulté = Traumatismes / 2.</li>
<li>Un soignant qui passe 1 h (INT+Médecine) ajoute ses DC en succès au jet du blessé.</li>
<li>Pas de quoi nettoyer : -1D au jet de résistance. Environnement inconfortable : -1D aux jets médicaux.</li>
<li><b>Amputation</b> : supprime la Complication, -1 PHY définitif.</li></ul>`},

/* ───────────── EGO, SPORES & DANGERS ───────────── */
{cat:"Ego & dangers", t:"Points d’Égo", ref:"K p.107", tags:"ego régénération concept",
h:`<ul><li>Maximum : (INT+Concentration ou INS+Pulsions) × 2.</li>
<li>Dépense : jusqu’à 3 points pour +3D sur un jet dans une situation extrême.</li>
<li>Régénération : <b>+1 toutes les 24 h</b>, +1 pour un repos confortable, <b>+1D points</b> quand on joue son Concept.</li>
<li>Égo à 0 à cause de dégâts : perte de connaissance. À 0 par dépense : simple épuisement.</li></ul>`},

{cat:"Ego & dangers", t:"Sporulation", ref:"K p.186", tags:"spores sporulation léperos champ",
h:`<table><tr><th>Cause</th><th>Intervalle</th><th>Gain</th></tr>
<tr><td>Légère sporination près d’un champ de spores</td><td>1×/jour</td><td>1</td></tr>
<tr><td>Nuage de spores en zone à risque (Parasite)</td><td>1×/jour</td><td>1</td></tr>
<tr><td>Forte sporination dans un champ adulte</td><td>1×/heure</td><td>1</td></tr>
<tr><td>Efflorescence dans un champ adulte</td><td>1×/heure</td><td>1D</td></tr>
<tr><td>Efflorescence dans un champ de spores-mères</td><td>1×/heure</td><td>1D</td></tr>
<tr><td>Saturation sur le front sporique / Chakras terrestres</td><td>1×/heure</td><td>1D</td></tr></table>
<ul><li>Dès 1 : réaction du mollusk. À 50 % du maximum : stigmates (Chakra sur la poitrine).</li>
<li>Au-delà du maximum : PSY+Foi/Volonté (excédent) ; échec = +1 Sporulation permanente.</li>
<li>50 % de points permanents : le personnage devient <b>Léperos</b>.</li>
<li>Exsporiation complète au Spital : une journée et 900 LC.</li></ul>`},

{cat:"Ego & dangers", t:"Feu, chute, explosions", ref:"K p.112, 188", tags:"feu chute explosion brûlure",
h:`<p><b>Feu</b> : seules les armures <i>Ignifugées</i> protègent. Si les dégâts ≥ 2 × la valeur d’armure, l’armure prend feu → <b>3 dégâts par round</b> jusqu’à extinction.</p>
<p><b>Chute</b> : +2 dégâts par mètre au-delà de 2 m, l’armure ne protège pas. Éviter : PHY+Athlétisme (dégâts).</p>
<p><b>Explosions</b> : dégâts maximums à l’épicentre, puis -1 par mètre.</p>`},

{cat:"Ego & dangers", t:"Noyade, fumée, gaz", ref:"K p.112", tags:"noyade asphyxie gaz fumée",
h:`<ul><li>Apnée : max <b>PHY+Vigueur</b> rounds (double si immobile).</li>
<li>Ensuite, perte d’Égo à chaque round : fumée/vapeur 1, gaz toxiques ou eau 1 à 4.</li>
<li>Égo à 0 : mort au bout de 3 rounds.</li></ul>`},

{cat:"Ego & dangers", t:"Poisons, maladies, la Vorace", ref:"K p.112", tags:"poison maladie vorace psychovore",
h:`<p><b>Poison / maladie</b> : résister avec PHY+Résistance (Puissance). Effets selon le toxique.</p>
<p><b>La Vorace</b> (Psychovore) : PHY+Résistance (niveau du Psychovore), un jet par minute. Échec : 1 Traumatisme et -1 permanent en PHY+Résistance. Seul le fruit de Douât interrompt le processus.</p>`},

/* ───────────── MANŒUVRES (Artefacts) ───────────── */
{cat:"Manœuvres", t:"Tir ciblé", ref:"A p.71", tags:"tir ciblé abri tête",
h:`<table><tr><th>Cible visible</th><th>Difficulté</th></tr><tr><td>Moitié d’un humain</td><td>+1</td></tr><tr><td>Quart d’un humain</td><td>+2</td></tr><tr><td>Huitième (tête, fissure)</td><td>+4</td></tr></table>
<p>Si l’abri empêche le tir d’atteindre la cible, c’est l’abri qui encaisse (voir Intégrité structurelle).</p>`},

{cat:"Manœuvres", t:"Intégrité structurelle", ref:"A p.71", tags:"mur matériau structure",
h:`<p>On soustrait la valeur d’armure du matériau ; chaque point au-delà fait perdre 1 point de structure. Structure à 0 : détruit ou traversé, le surplus touche la cible derrière.</p>
<table><tr><th>Matériau</th><th>Armure</th><th>Structure / 10 cm</th></tr>
<tr><td>Titane, fibres de carbone</td><td>7</td><td>20</td></tr><tr><td>Acier</td><td>6</td><td>15</td></tr><tr><td>Métal, fibre de verre</td><td>5</td><td>15</td></tr>
<tr><td>Béton, bois dur</td><td>4</td><td>10</td></tr><tr><td>Plastique</td><td>3</td><td>10</td></tr><tr><td>Bois tendre</td><td>2</td><td>5</td></tr><tr><td>Briques</td><td>1</td><td>5</td></tr></table>`},

{cat:"Manœuvres", t:"Silence mortel (attaque furtive)", ref:"A p.73", tags:"assassinat furtif sournois",
h:`<ul><li>Confrontation <b>AGI+Furtivité</b> contre <b>INS+Perception</b> de la cible (-2D si elle ne surveille pas).</li>
<li>Les DC de l’attaquant sont reportés sur son jet d’attaque contre la Défense passive.</li>
<li>Si l’attaque réussit : tous ses DC sont infligés <b>directement en Traumatismes</b>, sans armure.</li></ul>`},

{cat:"Manœuvres", t:"Avantage du terrain", ref:"A p.72", tags:"environnement point faible terrain",
h:`<p>1 action pour examiner les lieux, puis combinaison <b>INS+Perception</b> et <b>INT+Technologie</b> (difficulté MJ : 1-2 pour une poutre évidente, 4+ pour un court-circuit). Les DC sont gardés pour exploiter la faiblesse (plus de dégâts, plus de cibles).</p>`},

{cat:"Manœuvres", t:"Fuite et moral", ref:"A p.73", tags:"fuite moral reddition",
h:`<p>Jet de <b>PSY+Foi/Volonté</b> (ou INS+Pulsions si plus haut). Échec : le personnage se rend ou fuit. Un allié peut le ramener avec CHA+Commandement contre sa PSY+Foi/Volonté.</p>
<p>Déclencheurs : première arme létale dégainée, première giclée de sang ou premier Traumatisme d’un allié, première mort, mort du chef.</p>
<table><tr><th>Facteur</th><th>Diff.</th></tr><tr><td>Base</td><td>1</td></tr><tr><td>Infériorité numérique</td><td>+1</td></tr><tr><td>À 2 contre 1</td><td>+2</td></tr><tr><td>Blessé</td><td>+1</td></tr><tr><td>Armes létales</td><td>+1</td></tr><tr><td>Camarade mort</td><td>+1 / mort</td></tr><tr><td>Pris de flanc</td><td>+2</td></tr><tr><td>Encerclé</td><td>-1</td></tr><tr><td>Ennemi haï</td><td>-1</td></tr><tr><td>Protège sa famille</td><td>-3</td></tr><tr><td>Protège son foyer</td><td>-1</td></tr><tr><td>Nulle part où aller</td><td>-2</td></tr><tr><td>Combat pour une cause</td><td>-2</td></tr></table>
<p>Intimider : 1 action, PSY+Domination contre Défense mentale (+1D par jet de fuite déjà fait). Réussite : nouveau jet de fuite à -2D.</p>`},

{cat:"Manœuvres", t:"Poursuite", ref:"A p.74", tags:"poursuite course",
h:`<ul><li>Jets opposés de <b>PHY+Athlétisme</b> ; on cumule les succès (<b>DC comptent double</b>).</li>
<li>Tous les 3 jets : PHY+Vigueur (4), échec = -2D aux jets d’Athlétisme. Jusqu’à 2 Égo pour +1D chacun.</li>
<li>Dès que l’écart atteint <b>5</b>, le camp en tête gagne.</li></ul>`},

{cat:"Manœuvres", t:"Feinte, provocation, surnombre", ref:"A p.75", tags:"feinte provocation surnombre",
h:`<p><b>Feinte</b> : 1 action, PSY+Ruse contre Défense mentale. Réussite : chaque DC = -1D à la prochaine Défense active de la cible. Échec : pas de Défense active contre sa prochaine attaque, ses DC comptent double en dégâts.</p>
<p><b>Provocation</b> : PSY+Ruse et CHA+Art combinés contre Défense mentale (ou INT+Concentration). Réussite : la cible ne peut attaquer que le provocateur pendant (DC) rounds.</p>
<p><b>Surnombre</b> : +1D par allié ciblant le même adversaire, max +3D.</p>`},

{cat:"Manœuvres", t:"Désarmer, temporiser, assommer", ref:"A p.74-75", tags:"désarmer retarder assommer",
h:`<p><b>Désarmer</b> : attaque ciblée sur l’arme ; DC = mètres parcourus par l’arme. Résister : PHY+Force avec DC ≥ ceux de l’attaquant. Armes Fragiles/Sensibles : 2 DC au contact, 4 à distance pour ne pas les briser.</p>
<p><b>Temporiser</b> : une action peut être déclarée à son Initiative puis jouée plus tard, avant le prochain tour. Elle s’exécute avant l’action qu’elle interrompt.</p>
<p><b>Assommer</b> : poings et armes anesthésiantes frappent l’Égo ; à 0 par dégâts, la cible s’évanouit.</p>`},

/* ───────────── PROGRESSION & RESSOURCES ───────────── */
{cat:"Progression", t:"Expérience", ref:"K p.96, 324", tags:"xp expérience progression",
h:`<p><b>Gains</b> : survivre à une scène clé +1 ; but de l’aventure atteint +2 ; scène exceptionnellement réussie (tous) +1 ; performance individuelle +1 ; fin de campagne : nb d’aventures × 2.</p>
<p><b>Coûts</b> : attribut = nouvelle valeur × 12 XP (10 si privilégié) ; compétence = nouvelle valeur × 12 XP (10 si privilégiée) ; Potentiel = (somme des Potentiels + 1) × 10 XP.</p>
<p>Pulsions privilégie PHY, CHA, INS ; Concentration privilégie INT, AGI, PSY.</p>`},

{cat:"Progression", t:"Création de personnage", ref:"K p.27-33", tags:"création personnage culture concept culte",
h:`<ol><li>Choisir une <b>culture</b>, un <b>concept</b> et un <b>Culte</b> (les 3 C) : chacun donne +1 au maximum de certains attributs/compétences.</li>
<li>1 point gratuit par attribut, puis <b>10 points d’attributs</b> et <b>28 de compétences</b> ; max 2 points dépensés par caractéristique (+1 par bonus des 3 C).</li>
<li><b>4 points</b> d’historiques (max 3 chacun).</li><li>Déterminer le <b>rang</b> dans le Culte.</li><li>Un <b>Potentiel</b> de niveau 1.</li></ol>
<p>Choisir PSY+Volonté <i>ou</i> PSY+Foi, et INT+Concentration <i>ou</i> INS+Pulsions.</p>`},

{cat:"Progression", t:"Chasse aux rebuts", ref:"K p.169", tags:"rebuts artefacts ferrailleur ruines",
h:`<p><b>1. Trouver un champ de ruines</b> : INT+Légendes (+Réseau pour les Ferrailleurs). Qualité du champ = DC du jet réussi.</p>
<table><tr><th>Culture</th><th>Difficulté</th></tr><tr><td>Borca</td><td>2</td></tr><tr><td>Purgare</td><td>3</td></tr><tr><td>Pollen</td><td>4</td></tr><tr><td>Balkhans</td><td>4</td></tr><tr><td>Franka</td><td>5</td></tr><tr><td>Hybrispanie</td><td>5</td></tr><tr><td>Afrika</td><td>5</td></tr></table>
<p><b>2. Fouiller</b> : un INS+Perception par heure. Difficulté de base 8 − qualité du champ, −1 par tranche de 20 km depuis le village le plus proche (max 4 fois). +1 de difficulté toutes les 10 trouvailles.</p>
<p><b>3. Trouvé !</b> Qualité = Tech III + DC/2 ; quantité = 1D kg de débris.</p>
<p><b>Récolte</b> (toutes les 6 h) : 2D kg Tech I, 1D kg Tech II.</p>`},

{cat:"Progression", t:"Prix des débris et artefacts", ref:"K p.180", tags:"prix vente achat tech chroniqueurs",
h:`<table><tr><th>Tech</th><th>Disponibilité</th><th>Achat /kg</th><th>Vente /kg</th></tr>
<tr><td>I</td><td>Partout (matières premières)</td><td>1</td><td>–</td></tr>
<tr><td>II</td><td>Clans uniquement</td><td>15</td><td>5</td></tr>
<tr><td>III</td><td>Aussi dans les halls ferrailleurs</td><td>80</td><td>25</td></tr>
<tr><td>IV</td><td>Halls ferrailleurs, manufactures</td><td>200</td><td>80</td></tr>
<tr><td>V</td><td>Pas vendu par les Chroniqueurs</td><td>600</td><td>200</td></tr>
<tr><td>VI</td><td>Pas vendu par les Chroniqueurs</td><td>2000</td><td>600</td></tr></table>
<p>Objet lié à un Culte (valeur de Ressources + Culte) : pas en vente libre hors du Culte, seulement au marché noir.</p>`},

/* ───────────── PROPRIÉTÉS DES ARMES ───────────── */
{cat:"Propriétés", t:"Propriétés des armes (A–D)", ref:"K p.154-155", tags:"antiblindage assommement chargement unique camouflage choc contondant tonnerre zone déviation dispersion double canon",
h:`<dl><dt>Antiblindage</dt><dd>Ignore les propriétés spéciales d’armure (Massif, Pare-balles).</dd>
<dt>Assommement (niveau)</dt><dd>Des arcs électriques, un coup de tonnerre ou un éclat qui fait vibrer le crâne : la cible subit la Complication Désorientation, à un niveau égal à celui de la propriété.</dd>
<dt>Camouflage (diff.)</dt><dd>Arme discrète ; INS+Perception (diff.) pour la repérer.</dd>
<dt>Chargement par la gueule</dt><dd>Recharger prend 2 actions.</dd>
<dt>Chargement unique (nombre de balles)</dt><dd>Pas de magasin amovible, de chargeur ni de barillet : porte de chargement ou magasin tubulaire, les balles se chargent une à une. Le niveau indique combien de munitions on peut charger en une seule action.</dd>
<dt>Choc (DC)</dt><dd>Sans ce nombre de DC, on ne peut ni attaquer ni défendre à l’action suivante (1 action pour reprendre l’arme).</dd>
<dt>Contondant</dt><dd>Efficace contre les armures Massives.</dd>
<dt>Coup de tonnerre</dt><dd>Le bruit fait fuir les animaux.</dd>
<dt>Dégâts de zone (angle)</dt><dd>Touche tout ce qui est dans la zone.</dd>
<dt>Dégâts spéciaux (type, +X)</dt><dd>Dégâts en plus contre un type d’ennemi.</dd>
<dt>Déviation</dt><dd>Sur une réussite, 1D mètres d’écart moins les DC ; sur un échec, 2D.</dd>
<dt>Dispersion</dt><dd>Pas de malus de portée, mais -4 dégâts au-delà de la portée courte.</dd>
<dt>Double canon</dt><dd>Tirer les deux canons ensemble double les dégâts.</dd></dl>`},

{cat:"Propriétés", t:"Propriétés des armes (E–Z)", ref:"K p.155-156", tags:"effroyable panique rechargement long encodage enchevêtrement enrayement étendard étourdissement explosif fragile incendiaire incontrôlable mortel nuage pénétration rafale régularité sensible talisman terrifiant",
h:`<dl><dt>Effroyable (niveau)</dt><dd>Lames dentelées ou pointes menaçantes : une douleur cuisante persiste après le coup. Ajoute (niveau) déclencheur(s) bonus quand l’arme cause une Complication (au moins un déclencheur doit d’abord être dépensé pour infliger la Complication).</dd>
<dt>Encodage biométrique</dt><dd>Ne tire que pour son propriétaire (AGI+Artisanat puis INT+Technologie pour le contourner).</dd>
<dt>Enchevêtrement (malus)</dt><dd>Malus aux actions de mouvement ; les DC augmentent le malus. Se libérer : PHY+Force ou AGI+Mobilité (2).</dd>
<dt>Enrayement</dt><dd>Plus de 1 que de 6 : l’arme s’enraye au round suivant (1 action pour désenrayer).</dd>
<dt>Étendard (bonus)</dt><dd>Bonus aux alliés autour tant qu’il est levé.</dd>
<dt>Étourdissement</dt><dd>Inflige des dégâts d’Égo (l’armure réduit, sauf mention).</dd>
<dt>Explosif</dt><dd>Règles d’explosion.</dd>
<dt>Fragile</dt><dd>Au moins un 1 : l’arme se brise (les dégâts passent si l’action réussit).</dd>
<dt>Incendiaire</dt><dd>Règles de feu.</dd>
<dt>Incontrôlable (diff.)</dt><dd>Sur un raté, PHY+Corps à corps (diff.) ou on se touche soi-même.</dd>
<dt>Mortel</dt><dd>Inflige directement des Traumatismes.</dd>
<dt>Nuage (rayon, durée)</dt><dd>Zone persistante, dégâts cumulatifs.</dd>
<dt>Panique (niveau)</dt><dd>Un simple aperçu de l’arme à l’œuvre terrifie la plupart des guerriers. Quiconque la voit exercer ses ravages fait un jet de Défense mentale dont la difficulté égale le niveau de la propriété ; en cas d’échec, la cible subit la Complication Obusite.</dd>
<dt>Pénétration (X)</dt><dd>Ignore l’armure ≤ X.</dd>
<dt>Rafale (X)</dt><dd>Jusqu’à X balles en 1 action : +1D et +1 dégât par balle ; dés répartis entre cibles.</dd>
<dt>Rechargement long (durée)</dt><dd>Processus de rechargement presque impossible à parachever pendant un combat. Le temps requis est indiqué juste après le nom de la propriété.</dd>
<dt>Régularité (DC)</dt><dd>Avec ce nombre de DC, nouvelle attaque immédiate à -2D (cumulable).</dd>
<dt>Sensible</dt><dd>Au contact ou attaquée, 1 DC adverse = -1D de Maniabilité permanent.</dd>
<dt>Talisman (bonus)</dt><dd>Dés en plus en PSY+Foi/Volonté.</dd>
<dt>Terrifiant (diff.)</dt><dd>PSY+Foi/Volonté (diff.) ou -2D à la prochaine action.</dd></dl>`},

{cat:"Propriétés", t:"Modifications d’armes (emplacements)", ref:"Nouveaux équipements", tags:"modification arme emplacement effroyable assommement panique dragonne désarmement sangle augmentation",
h:`<p>Certaines propriétés peuvent être ajoutées à une arme en échange d’emplacements :</p>
<table><tr><th>Propriété</th><th>Emplacement</th><th>Augmentation</th></tr>
<tr><td>Effroyable (1)</td><td>1</td><td>Un emplacement pour +1</td></tr>
<tr><td>Assommement (1)</td><td>1</td><td>Un emplacement pour +1</td></tr>
<tr><td>Panique (3)</td><td>2</td><td>Deux emplacements pour +3</td></tr></table>
<dl><dt>Dragonne</dt><dd>Simple sangle qui permet de ne pas lâcher un objet ou une arme en cas de tentative de désarmement (ou de simple maladresse). Difficulté +2 lors des tentatives de désarmement, ou bonus de +4D pour garder un objet en main. 1 emplacement, Tech I, 10 LC.</dd></dl>`},

{cat:"Propriétés", t:"Propriétés d’armure", ref:"K p.162-163", tags:"massif pare-balles hermétique ignifugé camouflage cassant instable isolant première impression respecté terrifiant",
h:`<dl><dt>Massif (X)</dt><dd>Contre lames et armes pointues, l’armure vaut X. Les armes contondantes qui dépassent la valeur normale blessent quand même.</dd>
<dt>Pare-balles (X)</dt><dd>Contre les armes à feu, l’armure vaut X.</dd>
<dt>Hermétique (+XS)</dt><dd>Succès automatiques contre gaz, spores et toxines inhalés.</dd>
<dt>Ignifugé (X)</dt><dd>Protège du feu et ne s’enflamme pas.</dd>
<dt>Camouflage (diff.)</dt><dd>INS+Perception (diff.) pour repérer le porteur.</dd>
<dt>Cassant (X)</dt><dd>+1 armure, mais après X dégâts les plaques perdent 1 point définitif.</dd>
<dt>Instable (X)</dt><dd>Chaque coup qui inflige X dégâts ou plus fait perdre 1 point de valeur d’armure. Réparation : 1 point d’armure avec 1 kg de rebuts (qualité = Niveau Tech de l’armure) et un test d’AGI+Artisanat (Niveau Tech).</dd>
<dt>Isolant</dt><dd>Protège entièrement des décharges électriques : tout dégât d’électricité est réduit à zéro.</dd>
<dt>Première impression (+XD)</dt><dd>Bonus aux interactions sociales lors du tout premier contact avec des étrangers.</dd>
<dt>Respecté (groupe, +XD)</dt><dd>Bonus de dés à toute interaction sociale avec le groupe indiqué.</dd>
<dt>Terrifiant (diff.)</dt><dd>Qui attaque le porteur fait un test de PSY+Foi/Volonté (diff.) ; en cas d’échec, −2D à ses attaques contre lui. Une fois la peur vaincue, immunisé pour le reste du combat.</dd></dl>`},
/* ───────────── HÉRITAGES ───────────── */
{cat:"Héritages", t:"Entrepreneur", ref:"A ch.1", tags:"héritage héritages création personnage entrepreneur", h:`<p><b>Condition :</b> un concept parmi le Créateur, le Conquérant ou le Visionnaire ; Ressources 3.</p>
<p><b>Bonus :</b> l’historique Ressources peut être appliqué à n’importe quel Culte, avec un malus de -2.</p>
<p><b>Héritage :</b> vous avez le don de comprendre la façon dont les lettres de change et les dinars passent de main en main, et vous repérez intuitivement les meilleures occasions de réaliser des profits. Par le passé, vous avez réussi à trouver un créneau commercial et avez été en mesure de l’exploiter au maximum. Tous les Cultes se sont offert vos services, ce qui vous a conduit à entretenir de bonnes relations avec chacun d’entre eux, que ce soit ouvertement ou dans le plus grand secret. Le joueur devrait définir la nature de son ancienne entreprise avec son MJ.</p>
<p><b>Inconvénient :</b> une telle réussite suscite forcément des envieux, en particulier lorsque vous traitez avec les membres de Cultes rivaux. Chaque fois que vous utilisez l’historique Ressources pour acquérir quelque chose provenant d’un Culte en particulier, tous vos jets d’interaction sociale visant à obtenir un bien auprès d’un autre Culte subissent un malus de -1D durant une semaine.</p>`},
{cat:"Héritages", t:"Descendant", ref:"A ch.1", tags:"héritage héritages création personnage descendant", h:`<p><b>Condition :</b> un concept parmi le Traditionaliste, l’Abomination ou l’Élu.</p>
<p><b>Bonus :</b> +1 niveau de Potentiel (Unique, Potentiel spécifiquement lié au clan). Le joueur devrait collaborer avec son MJ pour développer un Potentiel conforme aux traits de son clan déclinant.</p>
<p><b>Héritage :</b> vous êtes originaire d’un clan déchu (Taunar ou Benesato par exemple) et vous faites partie de ses derniers membres survivants. Que vous ayez été chanceux ou que vous vous soyez trouvé ailleurs lorsque votre foyer a été anéanti, vous êtes parvenu à vous en tirer et vous brûlez de vous venger. Vous êtes le dernier rempart qui sépare votre lignée de l’oubli, et vous ne reculerez devant rien pour préserver sa mémoire.</p>
<p><b>Inconvénient :</b> puisque vous venez d’un clan éteint, vous n’avez personne vers qui vous tourner dans les moments difficiles. Vous êtes seul. Aucun de vos Historiques ne peut dépasser (4), sauf si vous parvenez à entrer dans les bonnes grâces d’un Culte ou d’un autre clan.</p>`},
{cat:"Héritages", t:"Marqué", ref:"A ch.1", tags:"héritage héritages création personnage marqué", h:`<p><b>Condition :</b> un concept parmi l’Aventurier, le Chercheur, l’Hérétique ou l’Abomination ; Secrets 2.</p>
<p><b>Bonus :</b> +1 dans une compétence d’INS, +5 à la valeur maximale de sporulation temporaire.</p>
<p><b>Héritage :</b> vous ne pouviez pas vous en empêcher : vous deviez continuer d’inhaler les spores blanches qui vous menaient tout droit dans l’étreinte du Chakra terrestre. Vous étiez un Brûlé et vous êtes allé trop loin, vous en avez trop pris. La Sepsie avait planté ses griffes dans votre corps et votre esprit. Seul un énorme effort vous a permis de revenir en arrière, de résister aux spores qui avaient envahi vos poumons. Aujourd’hui, la souillure a été pratiquement purgée de votre organisme et votre tolérance à ses effets a augmenté.</p>
<p><b>Inconvénient :</b> même si vous avez réussi à surmonter votre dépendance et que votre corps a été en grande partie purgé de l’infestation, celle-ci persiste toujours. De minuscules flocons de Sepsie s’accumulent dans vos poumons et un léger stigmate marque votre peau. Vos anciens fournisseurs vous considèrent toujours comme un Brûlé et essaient de vous vendre leur marchandise chaque fois qu’ils ont un arrivage. Vous subissez un malus de -3D lorsque vous essayez d’éviter de retomber dans la dépendance.</p>`},
{cat:"Héritages", t:"Solitaire", ref:"A ch.1", tags:"héritage héritages création personnage solitaire", h:`<p><b>Condition :</b> aucune.</p>
<p><b>Bonus :</b> +1 aux compétences d’INS, permet de dépasser le maximum normal à la création du personnage.</p>
<p><b>Héritage :</b> vous travaillez seul. Les autres sont inutiles : ils compliquent toujours les choses avec des variables supplémentaires et des erreurs stupides que vous n’auriez jamais commises. Comme vous l’avez appris il y a longtemps, on n’est jamais mieux servi que par soi-même.</p>
<p><b>Inconvénient :</b> vous êtes quasiment incapable d’œuvrer en équipe. Vous avez peut-être des amis et des personnes avec qui vous voyagez, mais lorsque vous vous fixez pour trouver un emploi, vous ne supportez tout simplement pas de travailler avec les autres. Chaque fois que vous devez agir en étroite collaboration avec un autre personnage, vous devez dépenser (2) points d’Égo pour surmonter votre aversion, sinon vous subissez un malus de -1D à toutes vos actions.</p>`},
{cat:"Héritages", t:"Techo-influenceur", ref:"A ch.1", tags:"héritage héritages création personnage techo-influenceur", h:`<p><b>Condition :</b> Renommée 2 ; INT+Connaissance des artefacts 6.</p>
<p><b>Bonus :</b> Renommée +2, +2D à toutes les tentatives visant à rassembler un groupe pour chercher de la ferraille.</p>
<p><b>Héritage :</b> en fouillant une ruine, vous avez découvert par hasard un incroyable artefact, un acte qui vous a rendu célèbre au sein de votre Culte ou de votre Culture. Depuis, les gens vous arrêtent dans la rue pour vous demander d’examiner leurs trouvailles ou de donner votre avis sur leurs projets d’exploration. Quand vous évoquez l’idée de vous lancer dans une nouvelle chasse à la ferraille, vous êtes immédiatement harcelé par tous ceux qui meurent d’envie de vous accompagner et de tomber sur un filon d’artefacts technologiques.</p>
<p><b>Inconvénient :</b> votre réputation repose sur un mensonge fragile : vous n’avez rien de spécial, vous avez simplement eu de la chance. Cependant, cette explication ne satisfait jamais ceux qui s’appuient sur vos paroles pour tenter de définir l’emplacement d’une trouvaille ou le lieu d’une exploration. Chaque fois que vous estimez incorrectement la valeur d’un objet ou envoyez quelqu’un dans un endroit qui a déjà été exploré, vous perdez (1) point en Renommée et votre bonus pour rassembler des groupes de chercheurs de ferraille est réduit de 1D (pour un maximum de -2D).</p>`},
{cat:"Héritages", t:"Homme de main", ref:"A ch.1", tags:"héritage héritages création personnage homme de main", h:`<p><b>Condition :</b> Renommée 1 ; Secrets 1.</p>
<p><b>Bonus :</b> +6 points de compétence.</p>
<p><b>Héritage :</b> chaque fois que les hauts gradés de votre Culte ont besoin que quelque chose de louche ou d’illicite soit fait, c’est vers vous qu’ils se tournent. Ils ont confiance en votre inébranlable fidélité et vous en avez récolté les fruits tout au long de votre vie. Cependant, que vous le sachiez ou non, ils vous considèrent en réalité comme un sbire jetable dont on peut se débarrasser aisément au besoin.</p>
<p><b>Inconvénient :</b> votre utilité pour votre Culte se juge à l’aulne de votre fidélité absolue. Si vous agissez contre lui, ou si votre loyauté est remise en question, vos protecteurs vous renieront et ne reculeront devant rien pour vous faire taire. Vos historiques Alliés, Autorité et Ressources seront réduits de (2), et si vous continuez à défier vos supérieurs, ils pourraient bien décider de prendre des mesures plus radicales à votre rencontre.</p>`},
{cat:"Héritages", t:"Mécène", ref:"A ch.1", tags:"héritage héritages création personnage mécène", h:`<p><b>Condition :</b> Alliés 2.</p>
<p><b>Bonus :</b> +4 points de compétence.</p>
<p><b>Héritage :</b> un membre de haut rang de votre Culte vous porte un intérêt particulier. Il vous protège des pires bureaucrates des niveaux supérieurs de la hiérarchie, ce qui vous assure d’être bien placé pour atteindre tous vos objectifs ainsi que de recevoir la meilleure formation possible. Le soutien de votre mécène peut provenir d’une affection familiale, d’un simple engouement ou de la certitude inébranlable que vous êtes destiné à accomplir de grandes choses.</p>
<p><b>Inconvénient :</b> votre mécène peut s’avérer autoritaire et exiger que vous récompensiez l’intérêt qu’il vous porte en accomplissant des tâches pour lui. Si vous le décevez, la relation sera rompue : il commencera à se méfier de vous et finira par vous abandonner complètement. Dans le pire des cas, il essaiera même de retourner des membres de votre Culte contre vous en guise de vengeance.</p>`},
{cat:"Héritages", t:"Débiteur", ref:"A ch.1", tags:"héritage héritages création personnage débiteur", h:`<p><b>Condition :</b> Renommée 2.</p>
<p><b>Bonus :</b> +5 points de compétence, Ressources +1.</p>
<p><b>Héritage :</b> vous vous êtes faits des ennemis vraiment teigneux. Des individus vous ont confié des lettres de change et du matériel et vous les avez remerciés en dépensant leur argent ou en vendant leurs biens. Cela vous a rendu célèbre parmi les commerçants du marché noir : certains vous considèrent comme un héros pour avoir arnaqué autant de gens tandis que d’autres vous voient comme une plaie pour leur bizness.</p>
<p><b>Inconvénient :</b> nombreux sont ceux qui se souviennent de ce que vous avez fait, et beaucoup vous en tiennent encore rigueur. Vos jets d’interaction sociale subissent un malus de -2D auprès des marchands qui connaissent votre réputation, et de -4D auprès de ceux que vous avez escroqués par le passé. Où que vous alliez, il existe un risque qu’un commerçant particulièrement mécontent engage quelqu’un pour vous enseigner une leçon que vous n’oublierez jamais.</p>`},
{cat:"Héritages", t:"Expérimenté", ref:"A ch.1", tags:"héritage héritages création personnage expérimenté", h:`<p><b>Condition :</b> avoir plus de 40 ans.</p>
<p><b>Bonus :</b> +6 points de compétence, +1 dans n’importe quel historique, +2 niveaux de Potentiel.</p>
<p><b>Héritage :</b> vous avez mené une longue mais terne existence. Vous avez trimé pour survivre, mais sans jamais vraiment vivre. Aujourd’hui, c’est fini : l’ineptie de votre séjour sur Terre vous a frappé de plein fouet. L’heure est venue pour vous d’entrer dans l’histoire.</p>
<p><b>Inconvénient :</b> le temps presse : votre corps et votre esprit ne sont plus tout à fait aussi solides qu’avant. Vos gestes commencent à devenir plus lents, vous perdez votre force et il vous faut désormais plus de temps pour résoudre des problèmes que vous auriez autrefois réglés en un éclair. Vous perdez (1) point dans deux attributs de votre choix et ne pouvez pas les récupérer. Ces attributs ne peuvent jamais dépasser (5).</p>`},
{cat:"Héritages", t:"Kidnappé", ref:"A ch.1", tags:"héritage héritages création personnage kidnappé", h:`<p><b>Condition :</b> l’Abomination ; Secrets 3.</p>
<p><b>Bonus :</b> +1 point d’attribut.</p>
<p><b>Héritage :</b> enfant, on vous a arraché à votre famille pour vous séquestrer dans une sinistre installation souterraine. Vous n’avez jamais vu vos ravisseurs : ils vous ont maintenu dans le noir pour vous empêcher de les identifier. Cependant, vous vous souvenez de ce qu’ils vous ont fait subir. Les expériences qu’ils ont menées sur votre corps et votre esprit ne vous ont pas laissé indemne. Pourtant, elles n’ont pas été totalement infructueuses et, contre toute attente, une partie de vous a été améliorée de manière significative.</p>
<p><b>Inconvénient :</b> votre corps est souillé et vous avez déjà subi (3) points de sporulation permanente. Ceux qui vous ont capturé autrefois continuent de vous surveiller afin de s’assurer que leur cruelle expérimentation n’a pas d’effets secondaires imprévus. S’ils soupçonnent que vous êtes en train de succomber à la Sepsie, ou s’ils décident de mettre fin à leur expérience, ils viendront vous éliminer sans prévenir.</p>`},
{cat:"Héritages", t:"Justicier", ref:"A ch.1", tags:"héritage héritages création personnage justicier", h:`<p><b>Condition :</b> un concept parmi le Conquérant, l’Élu, le Protecteur ou le Vertueux.</p>
<p><b>Bonus :</b> Foi/Volonté +1, +1 niveau de Potentiel.</p>
<p><b>Héritage :</b> vous avez observé le monde et compris qu’il était mauvais. Vous avez vu des criminels échapper à leur châtiment et ne laisser que vies brisées et des deuils dans leur sillage. Vous avez entendu les excuses contrites des agents de la loi, vous les avez vus rester passifs et clamer leur impuissance. Votre cœur et votre esprit se sont assombris et vous avez réalisé qu’il n’existe qu’une seule loi importante en ce monde : si vous voulez que quelque chose soit bien fait, vous devez le faire vous-même.</p>
<p><b>Inconvénient :</b> vous êtes connu. Les criminels considèrent que vous menacez leur pouvoir et tenteront de vous traquer pour vous éliminer. De l’autre côté du spectre de la loi, les agents de l’ordre craignent que vous ne sapiez leur autorité et essaieront de faire de même. Tous vos jets d’interaction sociale avec des membres des forces de l’ordre ou d’entités criminelles subissent un malus de -2D.</p>`},
{cat:"Héritages", t:"Mesmérisé", ref:"A ch.1", tags:"héritage héritages création personnage mesmérisé", h:`<p><b>Condition :</b> Secrets 3.</p>
<p><b>Bonus :</b> +8 points de compétence.</p>
<p><b>Héritage :</b> il y a des années, un Dormeur vous a placé sous son emprise mémétique. Vous avez suivi ses ordres divins et marché selon les caprices de son plan incompréhensible. Même si vous êtes parvenu à vous libérer de ce cauchemar, vous avez vu l’autre côté : des éléments du Projet Tannhäuser sont éparpillés dans les recoins de votre esprit, et chaque aspect de votre existence est entaché par des événements qui se déroulent dans l’ombre.</p>
<p><b>Inconvénient :</b> le Dormeur qui vous a autrefois dominé est toujours à votre recherche, désireux de vous ramener sous son emprise. S’il vous trouve, vous connaîtrez de nouveau l’enfer, et tous ceux que vous chérissez aussi. Votre esprit a été érodé par son influence mémétique, et vos jets de Défense mentale visant à résister à la mémétique subissent un malus de -1D.</p>`},
{cat:"Héritages", t:"Exilé", ref:"A ch.1", tags:"héritage héritages création personnage exilé", h:`<p><b>Condition :</b> Alliés, Autorité et Réseau ne doivent pas être supérieurs à 1.</p>
<p><b>Bonus :</b> +6 points de compétence.</p>
<p><b>Héritage :</b> que cela soit justifié ou non, votre Culte, clan ou tribu vous a exilé en raison d’un événement de votre passé. Cela vous a forcé à apprendre par vous-même comment fonctionne le monde, et vous êtes devenu plus compétent que vous ne l’auriez jamais été si vous étiez resté enchaîné à la doctrine qui a influencé votre jeunesse.</p>
<p><b>Inconvénient :</b> vous avez été chassé de votre propre patrie et vous n’y êtes plus accepté. Tous vos jets d’interaction sociale subissent un malus de -2D dans toute ville ou zone où votre Culte est dominant.</p>`},
{cat:"Héritages", t:"Célèbre", ref:"A ch.1", tags:"héritage héritages création personnage célèbre", h:`<p><b>Condition :</b> Renommée 3.</p>
<p><b>Bonus :</b> +2D à toutes les interactions sociales.</p>
<p><b>Héritage :</b> que ce soit grâce à vos actes, votre talent ou vos créations, votre nom suscite l’admiration auprès des habitants de votre région. Vous êtes connu de tous, même si certains n’ont jamais vu votre visage. Votre simple renommé fait que tout le monde veut travailler avec vous. Ils sont à ce point éblouis par votre présence, qu’en échange de quelques bribes de votre attention, ils ignoreront tout ce qui viendra écorner votre image… Du moins pendant un temps.</p>
<p><b>Inconvénient :</b> au fil du temps, l’engouement cède la place à la vérité. La réalité ne sera jamais à la hauteur du mythe ; une profonde déception qui emplit d’amertume ceux qui, hier encore, vous idolâtraient. Dès que les autres apprennent à vous connaître, votre bonus d’interaction sociale commence à se détériorer au rythme de 1D par semaine, jusqu’à ce que vous souffriez finalement d’un total de -1D .</p>`},
{cat:"Héritages", t:"Transfuge", ref:"A ch.1", tags:"héritage héritages création personnage transfuge", h:`<p><b>Condition :</b> un concept parmi l’Hérétique, le Profanateur ou l’Abomination ; Réseau 1 ; Secrets 3.</p>
<p><b>Bonus :</b> +6 points de compétence, le bonus de compétence maximal de l’ancien Culte reste applicable à la création du personnage.</p>
<p><b>Héritage :</b> avant de changer de camp, vous apparteniez à un autre Culte. Vous pouvez être un Blafard recruté par les Chroniqueurs ou un Juge converti à la Néognose, voire un Spitalier en disgrâce ayant rejoint les Apocalyptiques. Ce cas de figure incroyablement rarissime implique que vous apportez à votre nouveau Culte un atout suffisamment précieux pour qu’il vous accorde sa confiance.</p>
<p><b>Inconvénient :</b> bien qu’il soit possible pour un déserteur hellvétique de ramasser une épée et un bouclier pour combattre au côté de ses nouveaux frères et sœurs anabaptistes, un Jehammétan rejoignant une communauté de Blafards peut se révéler un concept trop étrange. Quelle que soit votre histoire, votre nouveau Culte scrute vos actes avec attention tandis que l’ancien vous déteste et vous considère comme le pire des traîtres. Il fera tout pour vous ruiner et vous faire taire : tous vos jets d’interaction sociale avec votre ancien Culte subissent un malus de -5D dès que vous êtes reconnu.</p>`},
{cat:"Héritages", t:"Vétéran", ref:"A ch.1", tags:"héritage héritages création personnage vétéran", h:`<p><b>Condition :</b> Autorité 2 ; Renommée 2.</p>
<p><b>Bonus :</b> Renommée +2, Alliés +2, +2 points dans une compétence de combat, permet de dépasser le maximum normal à la création du personnage.</p>
<p><b>Héritage :</b> on vous a poussé au combat beaucoup trop jeune ; pourtant, vous êtes parvenu à vous faire un nom très tôt en survivant à de nombreuses batailles. Que vous ayez pris la tête d’une charge de Glaives de Jehammet ou que vous ayez porté le coup fatal à un Biokinésiste enragé, votre exploit n’est pas passé inaperçu.</p>
<p><b>Inconvénient :</b> avec un tel passé, vous devez vous révéler à la hauteur. Chaque fois que vous entrez dans un débit de boisson, vous êtes harcelé par tous les fous qui désirent tester leur force en vous affrontant. Si vous perdez un combat ou ne parvenez pas à atteindre l’objectif qui vous a été confié, tous vos historiques sont réduits de (2).</p>`},
{cat:"Héritages", t:"Chair à canon", ref:"A ch.1", tags:"héritage héritages création personnage chair à canon", h:`<p><b>Condition :</b> un concept parmi le Martyr, le Conquérant ou le Destructeur ; Renommée 2.</p>
<p><b>Bonus :</b> +1 à toutes les compétences de combat, permet de dépasser le maximum normal à la création du personnage.</p>
<p><b>Héritage :</b> que ce soit en raison de l’alignement des étoiles sur votre lieu de naissance, de l’héritage de vos ancêtres ou simplement parce que vous avez été choisi par votre Culte ou votre clan, on vous a élevé dans l’espoir de faire de vous un redoutable guerrier capable de mener toutes les charges. Dès votre naissance, on vous a appris que votre vie n’avait pas de sens et que ce sont vos actions au combat qui déterminent votre valeur.</p>
<p><b>Inconvénient :</b> votre esprit est incapable de faire abstraction des doctrines que vos professeurs vous ont inculquées : votre vie n’a aucune valeur, seuls vos actes comptent, le conflit résout tout. Tous vos jets concernant des interactions sociales pacifiques subissent un malus de -2D.</p>`},
{cat:"Héritages", t:"Conditionné", ref:"A ch.1", tags:"héritage héritages création personnage conditionné", h:`<p><b>Condition :</b> Secrets 2.</p>
<p><b>Bonus :</b> +1 niveau de Potentiel.</p>
<p><b>Héritage :</b> vous êtes tombé sous l’emprise d’un leader charismatique ou d’une doctrine fascinante. Manipulé, vous y avez adhéré de tout votre cœur et vous êtes conformé aux idéaux qu’ils promouvaient. Complètement absorbé par votre dévotion religieuse pendant un temps, vous avez fini par ouvrir les yeux. Cependant, même ainsi, les choses ne sont plus tout à fait les mêmes : votre esprit fonctionne de manière légèrement différente et des choses que vous n’auriez pas tolérées autrefois ne paraissent plus si déraisonnables.</p>
<p><b>Inconvénient :</b> bien que vous vous soyez extrait de la fosse idéologique dans laquelle vous croupissiez, les concepts qu’on vous a inculqués surnagent toujours à la surface de votre esprit. Si vous vous retrouvez dans une situation où vous pouvez réaliser ou approfondir l’une des idées fondamentales de votre conditionnement, vous le ferez même si c’est au détriment de relations, d’alliances ou de votre propre sécurité. Vous devez réussir un jet de Défense mentale (2) pour résister à la tentation. Le joueur devrait coopérer avec son MJ pour définir l’idéologie qui a influencé le personnage et comment elle l’affectera en jeu.</p>`},
{cat:"Héritages", t:"Optimisé", ref:"A ch.1", tags:"héritage héritages création personnage optimisé", h:`<p><b>Condition :</b> un concept parmi le Chercheur, le Soigneur, l’Élu ou le Disciple.</p>
<p><b>Bonus :</b> +6 points de compétence.</p>
<p><b>Héritage :</b> vous êtes motivé par le désir incessant de vous améliorer. Vous pouvez être plus fort, plus rapide, plus intelligent ou plus charmant, et vous ne cesserez jamais d’essayer de le devenir.</p>
<p><b>Inconvénient :</b> vous êtes si concentré sur votre propre amélioration que vous avez perdu de vue tout le reste, y compris vos connexions avec les autres. Lors de la création de personnage, vous ne pouvez dépenser que (1) point dans les historiques et vos jets d’INS+Empathie subissent systématiquement un malus de -1D.</p>`},
{cat:"Héritages", t:"Assassin", ref:"A ch.1", tags:"héritage héritages création personnage assassin", h:`<p><b>Condition :</b> aucune.</p>
<p><b>Bonus :</b> Secrets +2, AGI+Furtivité +1 et AGI+Dextérité +1.</p>
<p><b>Héritage :</b> vous l’avez fait parce qu’on vous a ordonné de le faire ; ou du moins c’est l’excuse que vous vous murmurez lorsque votre conscience ramène sa sale trogne. Vous avez assassiné un membre de haut rang d’un autre Culte sur ordre du vôtre. Que vous ayez aveuglément suivi les ordres ou que vous ayez été tenté par la récompense importe peu à ceux qui veulent se venger. Heureusement, la formation que vous avez reçue vous a rendu plus que capable de les éviter, alors vous continuez d’espérer.</p>
<p><b>Inconvénient :</b> vos jets d’interaction sociale avec le Culte de votre victime subissent un malus en dés égal au rang de celle-ci. Avoir assassiné un Ascète vous vaut un malus de -2D, et -4D s’il s’agissait d’un Sublime. Vous courrez toujours le risque que quelqu’un s’intéresse à votre crime et se mette à vous traquer, que ce soit pour se venger ou pour vous faire chanter afin que vous commettiez un meurtre pour son compte.</p>`},
{cat:"Héritages", t:"Renégat", ref:"A ch.1", tags:"héritage héritages création personnage renégat", h:`<p><b>Condition :</b> Réseau 3.</p>
<p><b>Bonus :</b> vous pouvez appliquer vos historiques à deux Cultes différents du vôtre.</p>
<p><b>Héritage :</b> vous agissez en tant que mercenaire pour le compte de plusieurs Cultes. Vous êtes connu pour maîtriser votre domaine d’expertise, mais aussi pour ne pas être particulièrement regardant sur l’origine de vos émoluments. Les gens vous confient des travaux dans vos cordes, même s’ils ne partagent pas votre idéologie ou ne sont pas des alliés de votre Culte. La plupart du temps, vous essayez d’éviter de tuer des agents des Cultes pour lesquels vous travaillez.</p>
<p><b>Inconvénient :</b> si vous agissez contre l’un des deux Cultes supplémentaires auxquels vos historiques s’appliquent, ils vous retireront leur soutien : vous ne pourrez plus leur appliquer vos historiques et tous les jets d’interaction sociale avec eux subiront un malus de -2D. Si l’infraction est particulièrement grave, ils pourraient même dépêcher un agent pour vous administrer une punition.</p>`},
{cat:"Héritages", t:"Bourlingueur", ref:"A ch.1", tags:"héritage héritages création personnage bourlingueur", h:`<p><b>Condition :</b> un concept parmi l’Aventurier ou le Voyageur ; Réseau 2 ; Ressources 1.</p>
<p><b>Bonus :</b> Réseau +1, jets d’INS+Orientation +1D.</p>
<p><b>Héritage :</b> Vous êtes allé partout ! Vous avez passé des années à vous frayer un chemin à travers tout le monde connu, de l’Europe à l’Afrika. Quel que soit l’endroit où vous vous trouvez, vous avez au moins une vague idée de votre position et de ce qui se trouve à proximité. Et si ce n’est pas le cas, vous connaissez probablement quelqu’un dans la région qui le sait et qui peut vous être utile.</p>
<p><b>Inconvénient :</b> voyager à travers autant de régions et rencontrer autant de cultures vous a empêché de planter vos racines. Vous ne vous êtes jamais installé suffisamment longtemps quelque part pour développer de véritables relations. Vos historiques Alliés et Autorité ne peuvent pas dépasser (3), car votre Culte vous considère comme trop extravagant et irresponsable pour vous affecter à des tâches véritablement importantes.</p>`},
{cat:"Héritages", t:"Voyant", ref:"A ch.1", tags:"héritage héritages création personnage voyant", h:`<p><b>Condition :</b> un concept parmi le Soigneur, le Médiateur, l’Élu ou le Vertueux ; Autorité 3.</p>
<p><b>Bonus :</b> INS+Empathie +2 et INS+Perception +2, permet de dépasser le maximum normal à la création du personnage.</p>
<p><b>Héritage :</b> tout était clair pour vous. Vous saviez que cela arriverait d’après la forme des nuages dans le ciel, l’ordre des cartes du Tarot, les lignes sur votre paume ou tout autre moyen de prédiction. Votre entourage se moquait, incrédule, mais vous lui avez prouvé qu’il avait tort : tout s’est réalisé dans les moindres détails. Depuis lors, vous avez tourné toute votre attention vers l’avenir et êtes devenu un maître dans l’art de calculer vos chances de succès ainsi que celles des autres.</p>
<p><b>Inconvénient :</b> vous avez perdu de vue le monde qui vous entoure, car vos yeux sont rivés sur la route qui s’étend devant vous. Vous entretenez une relation fragile avec le présent, et votre confusion a des répercussions néfastes : chaque fois que vous devez faire face à des personnes ou à des situations qui se produisent dans le moment présent, vous subissez un malus de -1D à tous les jets nécessitant que vous examiniez le monde qui vous entoure.</p>`},
{cat:"Héritages", t:"Impulsif", ref:"A ch.1", tags:"héritage héritages création personnage impulsif", h:`<p><b>Condition :</b> INS+Pulsions.</p>
<p><b>Bonus :</b> le facteur de coût en expérience est réduit de -2 pour vos attributs privilégiés et de -1 pour les compétences privilégiées.</p>
<p><b>Héritage :</b> votre esprit est entièrement subordonné à votre cœur. La seule chose qui vous importe lorsque vous agissez est de savoir ce que vous et ceux qui vous entourent ressentez. Vous établissez des relations solides comme le roc qui résisteront à toutes les tempêtes.</p>
<p><b>Inconvénient :</b> votre esprit est incapable d’anticiper les conséquences logiques de vos actions. Vous faites tout sous l’impulsion de l’instant et vous vous préoccupez rarement de l’avenir. Cela vous pousse à profiter uniquement de ce qui vous fait vous sentir bien sur le moment. Le facteur de coût en expérience est augmenté de +2 pour vos attributs non privilégiés et de +1 pour les compétences non privilégiées.</p>`},
{cat:"Héritages", t:"Boutefeu", ref:"A ch.1", tags:"héritage héritages création personnage boutefeu", h:`<p><b>Condition :</b> un concept parmi le Conquérant, le Zélote ou le Vertueux ; Renommée 3.</p>
<p><b>Bonus :</b> CHA+Commandement +2S lorsque vous dirigez un groupe de vos anciens disciples.</p>
<p><b>Héritage :</b> à une époque aujourd’hui révolue, vos paroles ont pénétré le cœur des gens, les ont arrachés à leur vie quotidienne et ont attisé le feu de leur colère. Que vous vous soyez élevé contre l’oppression ou que vous ayez mené une faction dissidente d’une religion, vous avez dû faire profil bas après avoir failli vous brûler les ailes. Cependant, vos partisans sont toujours là, prêts à boire vos paroles et à se dresser de nouveau.</p>
<p><b>Inconvénient :</b> si vous revenez en pleine lumière, le Culte (ou l’organisation) dont vous sapiez l’influence reprendra où il en était avant que vous ne vous cachiez. Une fois que votre Renommée aura atteint (5), il passera à l’action et vous enverra des assassins ou mènera des campagnes de diffamation publique. Si votre Renommée grimpe à (6), il déploiera ses troupes contre vos partisans et vous.</p>`},
{cat:"Héritages", t:"Dur à cuire", ref:"A ch.1", tags:"héritage héritages création personnage dur à cuire", h:`<p><b>Condition :</b> un concept parmi l’Abomination, le Destructeur, le Profanateur ou le Visionnaire.</p>
<p><b>Bonus :</b> jets de Défense mentale +1D, PSY +1, permet de dépasser le maximum normal à la création du personnage.</p>
<p><b>Héritage :</b> le monde se déforme autour de vous, mais vous continuez à progresser stoïquement dans la faille. Vos camarades ensanglantés hurlent entre les griffes d’un Biokinésiste, mais vous avez vu pire. Votre réalité menace de se déchirer dans les profondeurs de la Distorsion, mais vous avez déjà perdu tout ce à quoi vous teniez. Vous avez vu des choses qui briseraient n’importe qui, mais vous les avez surmontées. Votre résolution est absolument inébranlable.</p>
<p><b>Inconvénient :</b> à un moment donné, vous vous écroulerez. Votre esprit atteindra son point de rupture et le fardeau que vous avez porté trop longtemps vous brisera. Chaque fois que vous échouez à un jet de Défense mentale, vous perdez également un nombre de points d’Égo égal à la difficulté du jet.</p>`},
{cat:"Héritages", t:"Disculpé", ref:"A ch.1", tags:"héritage héritages création personnage disculpé", h:`<p><b>Condition :</b> Renommée 1.</p>
<p><b>Bonus :</b> Renommée +3, jets d’interaction sociale avec les criminels +1D.</p>
<p><b>Héritage :</b> vous étiez piégé. Fait comme un rat. Sur le point de tomber pour le crime de quelqu’un d’autre. Vous avez réussi à laver votre nom, du moins officiellement, mais le mal était déjà fait : vous avez une réputation de criminel. Paradoxalement, cela a eu un effet étrangement positif. Les bandits, les scélérats et les crapules du monde entier vous accueillent à bras ouverts et vous proposent leur aide.</p>
<p><b>Inconvénient :</b> même si vous n’avez officiellement commis aucun crime, la plupart des gens qui ont entendu parler de vous continuent de réagir instinctivement avec suspicion ou répulsion. Vos jets d’interaction sociale auprès d’individus qui connaissent votre passé subissent un malus de -2D, du moins tant que vous ne leur avez pas prouvé votre innocence.</p>`},
{cat:"Héritages", t:"Superstitieux", ref:"A ch.1", tags:"héritage héritages création personnage superstitieux", h:`<p><b>Condition :</b> un concept parmi le Soigneur, le Traditionaliste, le Fanatique ou le Disciple.</p>
<p><b>Bonus :</b> +2 points dans n’importe quelle compétence d’INS, permet de dépasser le maximum normal à la création de personnage.</p>
<p><b>Héritage :</b> il y a longtemps, vous avez été témoin d’un miracle. Vous avez vu quelque chose que votre esprit s’est refusé à attribuer à la science : quelqu’un ramené des rivages de la mort par le pouvoir de la prière, objets inconnus planant dans le ciel au-dessus de vous ou lumières merveilleuses dans la nuit. Vous avez préféré vous tourner vers les anciennes traditions pour trouver une explication.</p>
<p><b>Inconvénient :</b> votre âme s’est fermée à tout sauf aux traditions rituelles qui vous ont été enseignées. Vos compétences Science et Technologie ne peuvent pas dépasser (0) et vous traitez tout ce qui relève de la pensée scientifique avec suspicion.</p>`},
{cat:"Héritages", t:"Répugnant", ref:"A ch.1", tags:"héritage héritages création personnage répugnant", h:`<p><b>Condition :</b> aucune.</p>
<p><b>Bonus :</b> PSY+Domination +2S lorsque vous utilisez cette compétence pour intimider les autres.</p>
<p><b>Héritage :</b> une explosion de pétro ou une bagarre de comptoir vous a laissé horriblement défiguré. Vous êtes effrayant et vous avez appris à en tirer parti. Un simple coup d’œil à votre figure suffit à déstabiliser la plupart des gens, et cela avant même que vous n’ouvriez la bouche.</p>
<p><b>Inconvénient :</b> avec un visage aussi abîmé que le vôtre, dites adieux aux échanges agréables, si ce n’est auprès des personnes les plus douces et attentionnées. Vous subissez une pénalité de -1S à tous vos jets de compétences de CHA à l’exception de CHA+Art.</p>`},
{cat:"Héritages", t:"Prédicateur", ref:"A ch.1", tags:"héritage héritages création personnage prédicateur", h:`<p><b>Condition :</b> un concept parmi le Chef, le Conquérant, l’Élu ou le Visionnaire ; Renommée 3.</p>
<p><b>Bonus :</b> +2D à toutes les compétences de CHA tant que votre Renommée est supérieure à 2.</p>
<p><b>Héritage :</b> ce fut votre plus beau chef-d’œuvre, votre manifeste, un appel à l’action qui se répercuta dans votre société et la toucha au plus profond de son cœur. Les gens connaissent votre nom, connaissent vos mots, vos idéaux et vos inventions, et beaucoup sont prêts à écouter vos conseils. En faisant résonner les paroles de votre chefd’œuvre, vous pouvez inspirer les gens, les encourager à aller de l’avant ou en faire vos marionnettes.</p>
<p><b>Inconvénient :</b> vous avez essayé, vous avez investi cœur et âme dans vos nouveaux discours et sermons, sans qu’aucun n’impacte le monde avec la force du premier. L’angoisse de ne jamais reproduire ce succès hante vos rêves : chaque fois que vous essayez de créer quelque chose de nouveau, vous devez dépenser (1) point d’Égo pour surmonter votre manque d’assurance et éviter de subir un malus de -2D.</p>`},
{cat:"Héritages", t:"Propriétaire", ref:"A ch.1", tags:"héritage héritages création personnage propriétaire", h:`<p><b>Condition :</b> Autorité 1 ; Ressources 3.</p>
<p><b>Bonus :</b> 1 000 LC de revenus mensuels, Renommée +1.</p>
<p><b>Héritage :</b> vous possédez une propriété, un lopin de terre, quelque chose que vous avez acquis en dehors de vos fonctions au sein de votre Culte. Cette possession génère des bénéfices mensuels et vous accorde le statut de propriétaire. Cependant, s’en occuper requiert de l’attention et peut vous détourner de questions plus importantes.</p>
<p><b>Inconvénient :</b> tout ce que vous possédez finit par vous posséder. Vous devez financer l’entretien de votre terre et en prendre soin, sinon elle perdra de sa valeur, sera pillée par des bandits ou laissée à l’abandon jusqu’à ce qu’un vagabond la revendique pour lui-même. Si vos Ressources tombent en dessous de (2), votre propriété et votre statut vous échappent : les gens se mettent à croire que vos terres sont maudites. Vous perdez (3) points d’Autorité et de Renommée, et vous ne recevez plus les revenus afférents.</p>`},
{cat:"Héritages", t:"Hors-la-loi", ref:"A ch.1", tags:"héritage héritages création personnage hors-la-loi", h:`<p><b>Condition :</b> Autorité 2 ; Renommée 2.</p>
<p><b>Bonus :</b> AGI+Furtivité +1 et PSY+Ruse +1, jets d’interaction sociale avec des criminels +1D.</p>
<p><b>Héritage :</b> que vous ayez commis un larcin ou un meurtre, vous avez enfreint la loi et êtes désormais considéré comme un criminel par les membres de votre Culture d’origine. Au cours de votre cavale permanente, vous avez appris à éviter les forces de l’ordre et à raser les murs. Pour autant, vous n’êtes pas seul : les hors-la-loi se regroupent souvent pour accroître leur influence, ce que vous pouvez exploiter.</p>
<p><b>Inconvénient :</b> votre nom est connu du Culte ou du clan qui domine la région d’où vous venez, et celui-ci a placé une prime sur votre tête. Quiconque parviendra à apporter la preuve qu’il vous a éliminé recevra une prime égale à 250 LC x la somme de vos deux plus hauts Historiques en se rendant dans votre ville natale. Beaucoup tuent pour beaucoup moins, et ils ne feront pas d’exception pour vous.</p>`},
{cat:"Héritages", t:"Impitoyable", ref:"A ch.1", tags:"héritage héritages création personnage impitoyable", h:`<p><b>Condition :</b> aucune.</p>
<p><b>Bonus :</b> maximum de points d’Égo +6, Foi/Volonté +1, Concentration/Pulsions +1.</p>
<p><b>Héritage :</b> un de vos proches a été assassiné. Enfant, conjoint, parent, frère, sœur ou ami, c’est sans importance. Ce qui compte c’est qu’il est mort des mains d’un criminel inconnu. Vous ignorez son nom, mais vous cherchez sa piste. Vous ne connaîtrez le repos que lorsque vous l’aurez trouvé et traduit devant la justice.</p>
<p><b>Inconvénient :</b> votre véritable objectif sera toujours de retrouver celui qui vous a fait du tort, et il vous est presque impossible de vous détourner de cette tâche. Les emplois que vous occupez ne servent qu’à financer vos recherches ou à vous assurer de la loyauté de ceux qui vous aideront à vous venger. Si vous cessez de traquer activement votre cible durant une semaine, vous ne pourrez pas reconstituer votre réserve de points Égo en jouant votre Concept.</p>`},
{cat:"Héritages", t:"Lien familial", ref:"A ch.1", tags:"héritage héritages création personnage lien familial", h:`<p><b>Condition :</b> Alliés 1 ; Réseau 1.</p>
<p><b>Bonus :</b> Ressources et Alliés +2 dans votre Culture d’origine.</p>
<p><b>Héritage :</b> vous êtes aimé par votre famille. Vos proches vous hébergent en cas de besoin et partagent ce qu’ils peuvent avec vous. Vos succès les réconfortent et ils feront tout ce qui est en leur pouvoir pour vous aider.</p>
<p><b>Inconvénient :</b> le sang est plus épais que l’eau. Lorsque votre famille vous le demandera, vous devrez agir en son nom. Si vous rejetez sa générosité et son amour, rien ne pourra vous faire revenir en grâce à ses yeux : tous vos Historiques baisseront de (2) points. Posséder une famille vous rend également vulnérable. Si vos ennemis découvrent votre identité, vos proches seront les premiers à le payer. Le joueur doit travailler avec le MJ pour définir certains détails de la famille du personnage : qui sont ses membres, où vivent-ils, le niveau d’influence du patronyme, etc.</p>`},
{cat:"Héritages", t:"Enlevé", ref:"A ch.1", tags:"héritage héritages création personnage enlevé", h:`<p><b>Condition :</b> aucune.</p>
<p><b>Bonus :</b> INS+Survie +1 et PSY+Foi/Volonté +1, permet de dépasser le maximum normal à la création du personnage.</p>
<p><b>Héritage :</b> votre Culte vous a recruté de force lorsque vous n’étiez encore qu’un enfant. Vous pouvez avoir été vendu à une Cigogne apocalyptique, remis à un Chroniqueur après avoir passé ses tests de logique, ou même kidnappé par un Ferrailleur désireux d’avoir de l’aide gratuite pour fouiller les ruines. Quoi qu’il en soit, vous avez été arraché à votre famille, forcé à apprendre comment vous débrouiller seul en usant et abusant de la moindre aide que vous pouviez obtenir.</p>
<p><b>Inconvénient :</b> le désir de découvrir votre véritable passé vous obsède. Votre vie a perdu son ancrage fondamental et vous ne vous souvenez que de quelques lieux et visages, à peine plus que des flashs. Si vous avez l’occasion d’en apprendre plus sur votre histoire, où vous êtes né ou l’identité de vos parents par exemple, vous devez dépenser (2) points d’Égo pour éviter de suivre cette piste. Si vous ne dépensez pas ces points, tous les jets non liés à la découverte de votre passé subiront un malus de -2D pour le reste de la journée.</p>`},
{cat:"Héritages", t:"Héritier", ref:"A ch.1", tags:"héritage héritages création personnage héritier", h:`<p><b>Condition :</b> Alliés 2 ; Autorité 1.</p>
<p><b>Bonus :</b> Ressources +2, Alliés +1.</p>
<p><b>Héritage :</b> l’un des membres de votre famille est un membre haut placé de la hiérarchie de votre Culte ou de votre clan. Ses faveurs discrètes ont tendance à grandement faciliter votre existence : les meilleurs équipements, les quartiers les plus confortables et les missions les moins risquées vous sont systématiquement attribués. Il est bon d’avoir quelqu’un qui veille sur vous.</p>
<p><b>Inconvénient :</b> les autres membres de votre Culte ou de votre clan vont finir par vous prendre en grippe. Le fait que l’on vous réserve toujours la voie la plus facile les motivera à provoquer votre ruine. Si votre Historique Alliés passe en dessous de (2), celui de Ressources sera réduit à (0). Désormais, vous ne pourrez compter que sur votre propre mérite pour atteindre le sommet.</p>`},
{cat:"Héritages", t:"Rejeton", ref:"A ch.1", tags:"héritage héritages création personnage rejeton", h:`<p><b>Condition :</b> CHA 2 ; INT 2.</p>
<p><b>Bonus :</b> PHY et INS +1.</p>
<p><b>Héritage :</b> vous descendez de Léperos ou de faux-bourdons. D’une manière ou d’une autre, vous avez survécu à une purge spitalière et avez recouvré la lumière. Les années ont passé et votre petite enfance n’est plus qu’un lointain souvenir. Cependant, la Sepsie qui parcourait votre corps a amélioré votre développement, vous rendant légèrement plus fort et vif d’esprit que les autres.</p>
<p><b>Inconvénient :</b> si la Sepsie a augmenté vos capacités physiques et votre instinct, elle vous a aussi laissé un cheminement de pensée étrange et décousu ainsi qu’une incapacité à bien comprendre les autres humains. Vos attributs CHA et INT sont réduits de (1) point.</p>`},
{cat:"Héritages", t:"Routinier", ref:"A ch.1", tags:"héritage héritages création personnage routinier", h:`<p><b>Condition :</b> INT+Concentration.</p>
<p><b>Bonus :</b> le facteur de coût en expérience est réduit de -2 pour vos attributs privilégiés et de -1 pour les compétences privilégiées.</p>
<p><b>Héritage :</b> quelque chose ne tourne pas rond dans votre tête : votre esprit ne suit que des modèles strictement logiques, parcourant des chemins clairs vers une conclusion froide et sans égard pour les sentiments des autres.</p>
<p><b>Inconvénient :</b> sympathiser avec qui que ce soit se révèle presque impossible et vous ne concevez vos relations qu’en termes de profits mutuels. Vous vous focalisez sur des choses et vous y cramponnez au détriment de tout le reste. Bien que vous excelliez dans tout ce que vous abordez de cette manière, certains définissent votre comportement comme autistique, d’autres l’appellent robotique, et le reste vous décrit plus simplement comme un connard sans émotion. Le facteur de coût en expérience est augmenté de +2 pour vos attributs non privilégiés et de +1 pour les compétences non privilégiées.</p>`},
{cat:"Héritages", t:"Intermédiaire", ref:"A ch.1", tags:"héritage héritages création personnage intermédiaire", h:`<p><b>Condition :</b> Réseau 2.</p>
<p><b>Bonus :</b> +3 points de compétence.</p>
<p><b>Héritage :</b> vous êtes connu comme la personne à contacter en cas d’ennui. Vous fournissez l’indispensable à ceux qui comptent sur vous, ce qui fait de vous un confident digne de confiance et un atout précieux. Les gens partagent leurs secrets, parfois sans même s’en rendre compte. De votre côté, vous recueillez avec plaisir leurs informations et leurs lettres de change en échange de votre aide.</p>
<p><b>Inconvénient :</b> un jour, vous aurez accumulé une masse critique de connaissances. Si votre Historique Secrets atteint (4) points, ceux qui vous faisaient confiance vous considèrent désormais comme un risque pour leur sécurité : ils se retournent immédiatement contre vous.</p>`},
{cat:"Héritages", t:"Doué", ref:"A ch.1", tags:"héritage héritages création personnage doué", h:`<p><b>Condition :</b> un concept parmi le Créateur, le Chercheur ou le Visionnaire.</p>
<p><b>Bonus :</b> +6 points dans les compétences de CHA ou d’INT, permet de dépasser le maximum normal à la création de personnage.</p>
<p><b>Héritage :</b> depuis votre plus jeune âge, on vous considère comme un maître, un véritable génie artistique, scientifique ou technologique. Des foules sont venues de loin pour vous observer travailler sur vos œuvres et vous encourager.</p>
<p><b>Inconvénient :</b> bien que vos talents justifient amplement qu’on vous voue un tel culte, cela vous a rendu naïf et aveugle face à la réalité du monde. Rien n’est plus facile que de vous influencer pour vous rallier à une cause, et les horreurs de l’extérieur vous font trembler d’une peur enfantine. Tous vos jets de Défense mentale subissent un malus de -2D.</p>`},
{cat:"Héritages", t:"Crapule", ref:"A ch.1", tags:"héritage héritages création personnage crapule", h:`<p><b>Condition :</b> Renommée 2 ; Réseau 1.</p>
<p><b>Bonus :</b> +2D aux jets d'interaction sociale avec des criminels.</p>
<p><b>Héritage :</b> certains vous traitent de racaille, mais vous savez qu’ils comptent tout de même sur vous quand il faut remuer la merde. Vous venez des bas-fonds, où vous avez côtoyé la pire lie de la société et appris ses manières. Vous savez comment vous adresser aux autres dégénérés quand vous devez trouver les meilleurs fourgues de la ville, qu’ils vendent des armes ou de la Brûlure. Vous savez également comment vous intégrer facilement dans les hiérarchies criminelles. Les rats aiment l’odeur des autres rats.</p>
<p><b>Inconvénient :</b> même si vous vouliez revenir dans les bonnes grâces de la société, personne ne vous accepterait. En raison de vos fréquentations, on se méfie toujours de vous, et les milices de maintien de l’ordre vous surveillent attentivement où que vous voyagiez. Vos jets d’interaction sociale avec les forces de l’ordre subissent un malus de -2D.</p>`},
{cat:"Héritages", t:"Imposteur", ref:"A ch.1", tags:"héritage héritages création personnage imposteur", h:`<p><b>Condition :</b> Secrets 2 ; Alliés 2 ; PSY+Tromperie 7.</p>
<p><b>Bonus :</b> vous pouvez appliquer tous vos Historiques à un autre Culte.</p>
<p><b>Héritage :</b> cela fait si longtemps que vous endossez cette identité qu’elle n’est pratiquement plus un mensonge. Cependant, le fait que vous n’êtes pas vraiment qui vous êtes censé être ne quitte jamais tout à fait votre esprit. Que vous ayez dû adopter une nouvelle identité pour échapper à vos poursuivants ou pour infiltrer une organisation dans le cadre d’un vaste complot, votre nouvelle vie est aussi réelle que l’ancienne : difficile de démêler le vrai du faux, même pour vous.</p>
<p><b>Inconvénient :</b> chaque fois que vous tentez d’asseoir votre nouvelle identité, jongler avec votre double vie devient une véritable épreuve. Il est si facile de mélanger les noms, de confondre les lieux ou d’échanger les dates. Chaque fois que vous effectuez un jet pour tromper quelqu’un à propos de votre histoire, vous devez dépenser (1) point d’Égo pour vous assurer qu’elle reste cohérente. Si vous ne le faites pas, celui à qui vous mentez bénéficiera d’un bonus de +2D pour déceler votre mensonge.</p>`},
{cat:"Héritages", t:"Sombre secret", ref:"A ch.1", tags:"héritage héritages création personnage sombre secret", h:`<p><b>Condition :</b> Secrets 3 ; Alliés 1.</p>
<p><b>Bonus :</b> Secrets +3.</p>
<p><b>Héritage :</b> vous connaissez un secret qui ne devrait jamais être prononcé de vive voix, ou vous avez accidentellement vu quelque chose qui n’était pas destiné à vos yeux. Ce savoir peut potentiellement provoquer la chute de membres très hauts placés de votre Culte ou d’une faction opposée. Vous savez que si vous osez le révéler, le monde entier se retournera contre vous. Dans ce cas, vous n’aurez nulle part où vous cacher de la colère des individus que vous avez exposés.</p>
<p><b>Inconvénient :</b> si vous dévoilez votre secret en public, le Culte qui y est connecté enverra immédiatement un agent de haut rang pour vous exécuter. Cet individu ne reculera devant rien pour vous éliminer, et même si vous parvenez à le stopper, ses supérieurs en enverront simplement un autre. Vous ne serez jamais libéré de ces assassins, à moins que vous ne puissiez éradiquer leurs donneurs d’ordres.</p>`},
];
