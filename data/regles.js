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
{cat:"Propriétés", t:"Propriétés des armes (A–D)", ref:"K p.154-155", tags:"antiblindage camouflage choc contondant tonnerre zone déviation dispersion double canon",
h:`<dl><dt>Antiblindage</dt><dd>Ignore les propriétés spéciales d’armure (Massif, Pare-balles).</dd>
<dt>Camouflage (diff.)</dt><dd>Arme discrète ; INS+Perception (diff.) pour la repérer.</dd>
<dt>Chargement par la gueule</dt><dd>Recharger prend 2 actions.</dd>
<dt>Choc (DC)</dt><dd>Sans ce nombre de DC, on ne peut ni attaquer ni défendre à l’action suivante (1 action pour reprendre l’arme).</dd>
<dt>Contondant</dt><dd>Efficace contre les armures Massives.</dd>
<dt>Coup de tonnerre</dt><dd>Le bruit fait fuir les animaux.</dd>
<dt>Dégâts de zone (angle)</dt><dd>Touche tout ce qui est dans la zone.</dd>
<dt>Dégâts spéciaux (type, +X)</dt><dd>Dégâts en plus contre un type d’ennemi.</dd>
<dt>Déviation</dt><dd>Sur une réussite, 1D mètres d’écart moins les DC ; sur un échec, 2D.</dd>
<dt>Dispersion</dt><dd>Pas de malus de portée, mais -4 dégâts au-delà de la portée courte.</dd>
<dt>Double canon</dt><dd>Tirer les deux canons ensemble double les dégâts.</dd></dl>`},

{cat:"Propriétés", t:"Propriétés des armes (E–Z)", ref:"K p.155-156", tags:"encodage enchevêtrement enrayement étendard étourdissement explosif fragile incendiaire incontrôlable mortel nuage pénétration rafale régularité sensible talisman terrifiant",
h:`<dl><dt>Encodage biométrique</dt><dd>Ne tire que pour son propriétaire (AGI+Artisanat puis INT+Technologie pour le contourner).</dd>
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
<dt>Pénétration (X)</dt><dd>Ignore l’armure ≤ X.</dd>
<dt>Rafale (X)</dt><dd>Jusqu’à X balles en 1 action : +1D et +1 dégât par balle ; dés répartis entre cibles.</dd>
<dt>Régularité (DC)</dt><dd>Avec ce nombre de DC, nouvelle attaque immédiate à -2D (cumulable).</dd>
<dt>Sensible</dt><dd>Au contact ou attaquée, 1 DC adverse = -1D de Maniabilité permanent.</dd>
<dt>Talisman (bonus)</dt><dd>Dés en plus en PSY+Foi/Volonté.</dd>
<dt>Terrifiant (diff.)</dt><dd>PSY+Foi/Volonté (diff.) ou -2D à la prochaine action.</dd></dl>`},

{cat:"Propriétés", t:"Propriétés d’armure", ref:"K p.162-163", tags:"massif pare-balles hermétique ignifugé camouflage cassant",
h:`<dl><dt>Massif (X)</dt><dd>Contre lames et armes pointues, l’armure vaut X. Les armes contondantes qui dépassent la valeur normale blessent quand même.</dd>
<dt>Pare-balles (X)</dt><dd>Contre les armes à feu, l’armure vaut X.</dd>
<dt>Hermétique (+XS)</dt><dd>Succès automatiques contre gaz, spores et toxines inhalés.</dd>
<dt>Ignifugé (X)</dt><dd>Protège du feu et ne s’enflamme pas.</dd>
<dt>Camouflage (diff.)</dt><dd>INS+Perception (diff.) pour repérer le porteur.</dd>
<dt>Cassant (X)</dt><dd>+1 armure, mais après X dégâts les plaques perdent 1 point définitif.</dd>
<dt>Instable, Isolant</dt><dd>Voir Katharsys p.162-163.</dd></dl>`},
];
