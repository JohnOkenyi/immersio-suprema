/* ==========================================================================
   IMMERSIO SUPREMA - DNEG & DIGITAL DOMAIN INTERACTIVITY ENGINE
   ========================================================================== */

let currentCategoryFilter = 'vfx'; // Default selected category

let currentLanguage = 'fr';
let frontSlateMesh, rightSlateMesh, backSlateMesh, leftSlateMesh;

const translations = {
  fr: {
    brand_subtitle: "CENTRE D'INNOVATION IMMERSIF",
    nav_home: "Accueil",
    nav_studio: "À Propos",
    nav_showcase: "Galerie",
    nav_technology: "Bac à sable",
    nav_training: "Académie",
    nav_contact: "Contact",
    apply_now: "S'inscrire",
    hero_subtitle: "CENTRE D'INNOVATION IMMERSIF",
    watch_showreel: "Voir la bande-démo",
    explore_studio: "Découvrir le studio",
    featured_work: "TRAVAUX VEDETTES",
    quote_transform: "TRANSFORMER LE DIVERTISSEMENT",
    quote_tech: "TECHNOLOGIE AVANT-GARDISTE",
    quote_innov: "PROMOUVOIR L'INNOVATION",
    studio_kicker: "Pôle d'Innovation Créatif",
    studio_title: "Qui sommes-nous",
    studio_desc: "Nous fusionnons art cinématographique et technologies immersives en temps réel. Notre studio conçoit des moteurs de rendu de pointe, des simulateurs interactifs de haute fidélité et des formations certifiées pour les plus grands studios mondiaux.",
    cap1_title: "Effets Visuels Cinématographiques",
    cap1_desc: "Pipelines de production virtuelle avec intégration d'écrans LED volumétriques haute fidélité, mise en scène Unreal Engine 5.4 et jumeaux numériques d'acteurs en temps réel.",
    cap2_title: "Solutions d'IA Neuronale",
    cap2_desc: "Modèles graphiques d'apprentissage automatique, NeRFs en temps réel, Gaussian Splatting et pipelines de rendu neuronal pour des mondes interactifs photoréalistes.",
    cap3_title: "Simulation de Défense",
    cap3_desc: "Logiciel de répétition de mission, simulations de vol tactique, tableaux de bord de télémétrie biométrique et environnements d'entraînement synthétiques multi-utilisateurs.",
    cap4_title: "Production Virtuelle",
    cap4_desc: "Conception de configurations de scènes LED, étalonnage de caméras, systèmes d'éclairage, programmes universitaires clés en main et formations certifiées.",
    division_subtitle: "REPOUSSER LES LIMITES DES EFFETS VISUELS.",
    watch_our_showreel: "REGARDER NOTRE BANDE-DÉMO",
    showcase_kicker: "Archives Vidéo Interactives",
    showcase_title: "Explorez nos réalisations",
    filter_projects: "FILTRER LES PROJETS",
    filter_titles: "FILTRER LES TITRES",
    filter_search_placeholder: "Filtrer par nom...",
    filter_avail: "Disponibilité",
    avail_soon: "Bientôt disponible",
    avail_theaters: "En salles",
    avail_released: "Sortie publique",
    avail_realtime: "Temps réel",
    avail_volumetric: "Volumétrique",
    filter_tech: "Technologies",
    tech_unreal: "Unreal Engine 5.4",
    tech_gaussian: "Gaussian Splatting",
    tech_nerf: "NeRF",
    tech_houdini: "Houdini Fluides",
    tech_defensesim: "Sim de défense",
    clear_filters: "Effacer les filtres",
    card_desc_netflix: "Disponible sur Netflix",
    card_desc_restricted: "En production • Accès restreint",
    card_desc_visionos: "Disponible sur Apple VisionOS",
    card_desc_sony: "Disponible en 4K UHD, Blu-ray & Digital",
    card_desc_abc: "Le mercredi à 22h sur ABC",
    card_desc_dvd: "Disponible en DVD et Digital",
    card_desc_doc: "Saison 2 sur Fox / Saison 1 sur Netflix",
    card_desc_hulu: "Disponible sur Hulu",
    partners_title: "ENTREPRISES UTILISANT NOS LOGICIELS 3D",
    sandbox_kicker: "Simulation de Caméra Interactive",
    sandbox_title: "Studio de Caméra Virtuelle",
    sandbox_desc: "Ajustez l'objectif, l'exposition et la mise au point ci-dessous pour voir comment ils modifient la scène virtuelle en temps réel.",
    sandbox_controls: "CONTRÔLES DE RENDU",
    ctrl_focal: "Distance focale",
    ctrl_exposure: "Limite d'exposition",
    ctrl_chromatic: "Décalage chromatique",
    ctrl_noise: "Densité de bruit",
    ctrl_vignette: "Profondeur de vignette",
    engine_status: "Statut du pipeline actif",
    status_normal: "ACTIF / NORMAL",
    reset_sandbox: "Réinitialiser le simulateur",
    academy_kicker: "CE QUE VOUS ALLEZ APPRENDRE",
    academy_title: "Nos Programmes de Formation",
    curriculum_kicker: "DISCIPLINES TECHNIQUES FONDAMENTALES",
    curriculum_title: "Notre Programme",
    curriculum_desc: "Explorez les disciplines techniques de pointe enseignées au sein de notre académie. Cliquez sur un rendu pour l'agrandir en plein écran.",
    curr_pyro_title: "PYRO FX - FEU / FUMÉE",
    curr_pyro_desc: "feu, flammes, fumée, explosions, fireballs, shockwaves, fumée en traînée, bâtiments en feu, bougies, torches, feux de camp, explosions gaz/carburant/poussière, propagation du feu, feu/fumée volumétriques, feu coloré/magique/stylisé, braises, cendres, distorsion thermique, fumée secondaire, explosions procédurales",
    curr_part_title: "PARTICULES - SABLE / POUSSIÈRE",
    curr_part_desc: "Simulation de sable, poussière, poudre, cendres, farine, particules type neige, dunes, explosions de sable, empreintes, sable poussé par le vent, objets enterrés, effondrement de sable, simulation granulaire, tempêtes de poussière/sable",
    curr_cloud_title: "NUAGES - NUAGES ET SABLE",
    curr_cloud_desc: "Nuages, nuages d'orage, brouillard, brume, fumée, poussière, explosions volumétriques, volumes atmosphériques, god rays, formations nuageuses, ciel procédural, environnement volumétrique, vent, tornades, météo volumétrique, effets atmosphériques",
    curr_dest_title: "DESTRUCTION - CORPS RIGIDES",
    curr_dest_desc: "Destruction de bâtiments, effondrement de ponts, débris, verre brisé, fractures de bois, impacts de balles, crashs de voitures, fissures de béton, simulation de métal tordu, démolition procédurale",
    curr_fluid_title: "FLUIDES - EFFETS DE LIQUIDES",
    curr_fluid_desc: "Simulation d'eau, éclaboussures, mousse d'eau, bulles, liquides visqueux (miel, chocolat), écoulement de lave, jet d'eau haute pression, simulations de vagues, physique des fluides réaliste",
    curr_ocean_title: "OCÉANS - DYNAMIQUE DES FLUIDES",
    curr_ocean_desc: "Simulations de haute mer, houle, navires bravant la tempête, vagues côtières, écume de mer, embruns, interaction eau-vent, environnement océanique réaliste",
    academy_desc: "Explorez nos différents parcours de formation, des effets visuels et du jeu vidéo aux partenariats académiques et à la simulation professionnelle.",
    academy_controls: "Navigation Studio",
    tab_front: "Plateaux Cinéma & TV",
    tab_garage: "Jeux & Temps Réel",
    tab_rear: "Programmes Académiques",
    tab_glass: "Simulations Tactiques",
    awards_kicker: "Reconnaissance Honorifique",
    awards_title: "Prix & Récompenses",
    awards_desc: "Reconnaissance internationale des contributions de nos équipes créatives et technologiques au cinéma et à l'innovation logicielle.",
    award1_title: "Oscar du mérite scientifique et technique",
    award1_sub: "Contribution significative au processus cinématographique",
    award1_desc: "Notre équipe R&D a reçu un prix de l'Académie des arts et des sciences du cinéma pour nos outils de simulation anatomique et d'acteurs virtuels.",
    award2_title: "Prix d'excellence DevOps",
    award2_sub: "Application réussie des méthodologies cloud-natives",
    award2_desc: "DNEG et Red Hat ont remporté le prix Computing DevOps Excellence pour l'orchestration fluide de fermes de rendu distribuées sur cloud privé hybride.",
    news_kicker: "Dernières Actualités",
    news_title: "Expansion de l'IA chez Immersio & Fusion Metaphysic",
    news_desc: "Immersio Suprema a annoncé l'acquisition de Metaphysic pour accélérer le développement d'outils d'IA générative et de jumeaux numériques photoréalistes en temps réel.",
    read_press: "Lire le communiqué",
    contact_kicker: "Devenez Partenaire",
    contact_title: "Lancer Votre Projet",
    contact_desc: "Discutez avec nos ingénieurs pour concevoir des simulateurs sur-mesure ou planifier des formations.",
    form_title: "Proposition de projet",
    label_name: "Nom complet",
    placeholder_name: "Votre Nom...",
    label_email: "Adresse email",
    placeholder_email: "Votre Email...",
    label_industry: "Secteur d'activité",
    opt_vfx: "Cinéma, VFX & Animation",
    opt_sim: "Défense & Simulation",
    opt_tech: "Logiciel personnalisé",
    opt_training: "Programmes académiques",
    label_budget: "Budget prévisionnel",
    opt_budget1: "Moins de 50k$",
    opt_budget2: "50k$ - 250k$",
    opt_budget3: "250k$ - 1M$",
    opt_budget4: "Plus d'un million $ (Entreprise)",
    label_details: "Détails du projet",
    placeholder_details: "Parlez-nous de votre projet ou de vos besoins de formation...",
    submit_btn: "SOUMETTRE LA PROPOSITION",
    footer_desc: "Collectif d'ingénierie visuelle immersive. Mondes virtuels haut de gamme, ML graphique et pipelines de simulation pour équipes visionnaires.",
    footer_nav: "Navigation",
    footer_caps: "Expertises",
    footer_accred: "Accréditation",
    drawer_accred: "Collectif Membre Accrédité de la VES",
    house_wall_front_title: "STUDIOS DE CINÉMA & TV",
    house_wall_front_desc: "Formations accréditées et masterclasses spécialisées sur site et en ligne : Production virtuelle LED ICVFX, physique des fluides Houdini, Unreal Engine 5.4 et capture de mouvement.",
    house_wall_right_title: "STUDIOS DE JEUX & D'ANIMATION",
    house_wall_right_desc: "Formations accréditées et masterclasses spécialisées sur site et en ligne : Pipelines de jeux AAA, shaders temps réel, art procédural, rigging MetaHuman et Unreal Engine C++.",
    house_wall_back_title: "UNIVERSITÉS & ÉCOLES DE CINÉMA",
    house_wall_back_desc: "Formations accréditées et masterclasses spécialisées sur site et en ligne : Diplômes clés en main, certification de facultés, campus de production virtuelle et mentorat de projets.",
    house_wall_left_title: "DÉFENSE & ORGANISMES PUBLICS",
    house_wall_left_desc: "Formations accréditées et masterclasses spécialisées sur site et en ligne : Simulation tactique de vol de combat VR, jumeaux numériques aérospatiaux, télémétrie biométrique et exercices de mission.",
    
    // ---------------- WHY JOIN US & AMBITION ----------------
        nav_why: "Tech Créative",
    hero_tagline_title: "Expertise Cinématographique. Innovation Immersive.",
    hero_tagline_desc: "Nous fusionnons l'art cinématographique et les technologies immersives pour créer des expériences qui repoussent les limites de la narration.",
    remember_title: "NOUS CRÉONS DES <span class=\"luxury-serif-italic\">expériences</span> DIGNES DE MÉMOIRE",
    remember_editorial_title: "NOUS CRÉONS<br>DES <span class=\"gold-highlight\">EXPÉRIENCES</span><br>DIGNES DE<br>MÉMOIRE.",
    remember_editorial_sub: "Là où l'art cinématographique rencontre la technologie émergente pour façonner des histoires qui touchent, inspirent et marquent durablement.",
    watch_reel_text: "VOIR LA BANDE-DÉMO",
    crafted_experience_title: "L'EXPÉRIENCE DE LA CRÉATION",
    exp1_kicker_editorial: "PRODUCTION CINÉMATOGRAPHIQUE",
    exp1_editorial_title: "Narration<br>Cinématographique",
    exp1_editorial_desc: "Du concept à l'image finale, nous concevons un contenu visuel saisissant avec précision, passion et exigence.",
    exp1_caps: "RÉALISATION / VFX / CG / POST-PRODUCTION",
    exp2_kicker_editorial: "TECHNOLOGIES IMMERSIVES",
    exp2_editorial_title: "Expériences<br>Interactives",
    exp2_editorial_desc: "Nous transformons les idées en expériences immersives en temps réel qui engagent, connectent et inspirent.",
    exp2_caps: "TEMPS RÉEL / SIMULATION / JUMEAUX NUMÉRIQUES / XR",
    exp3_kicker_editorial: "TECHNOLOGIES D'IA",
    exp3_editorial_title: "Solutions Basées<br>sur l'IA",
    exp3_editorial_desc: "Exploiter la puissance de l'IA pour créer des workflows plus intelligents, du contenu génératif et des solutions visuelles de nouvelle génération.",
    exp3_caps: "IA GÉNÉRATIVE / PIPELINES ML / OUTILS / AUTOMATISATION",
    expertise_title_static: "NOTRE EXPERTISE",
    exp1_kicker: "01 / PRODUCTION CINÉMATOGRAPHIQUE",
    exp1_title: "Prises de Vue Cinématographiques",
    exp1_desc: "De la production et réalisation audiovisuelle aux effets visuels 2D/3D de calibre hollywoodien, nous combinons narration créative et précision technique.",
    exp1_sub: "Notre expertise englobe les pipelines VFX complexes, l'étalonnage des couleurs, la direction artistique et l'intégration visuelle haute fidélité.",
    exp1_footer: "Pré-production. Production. Post-production.",
    exp2_kicker: "02 / TECHNOLOGIES IMMERSIVES",
    exp2_title: "Systèmes Immersifs & Expériences Interactives",
    exp2_desc: "Nous transformons les univers cinématographiques en expériences interactives en temps réel grâce au rendu avancé, à la simulation, aux jumeaux numériques et aux technologies immersives.",
    exp2_sub: "Des environnements interactifs aux simulateurs haute fidélité, nous concevons des systèmes qui associent narration visuelle, calcul en temps réel et interaction humaine.",
    exp2_footer: "Mondes cinématographiques. Intelligence en temps réel. Expériences immersives.",
    exp3_kicker: "03 / TECHNOLOGIES D'IA",
    exp3_title: "Solutions d'IA",
    exp3_desc: "Nous développons et supervisons des technologies visuelles avancées basées sur l'IA pour des mondes interactifs photoréalistes.",
    exp3_sub: "Notre expertise s'étend également à l'évaluation technique et à la supervision de l'entraînement de modèles d'IA générative, transformant les technologies émergentes en solutions prêtes pour la production.",
    exp3_footer: "Là où l'intelligence artificielle rencontre la réalité visuelle.",
    strategic_kicker: "UN PROGRAMME AUDIOVISUEL STRATÉGIQUE",
    strategic_title: "UNE AGENCE PRODUIT DU CONTENU. IMMERSIO SUPREMA DÉVELOPPE LA CAPACITÉ AUDIOVISUELLE D'UNE MARQUE.",
    strategic_p1: "Nous n'abordons pas la communication audiovisuelle comme une série de campagnes isolées.",
    strategic_p2: "Nous bâtissons des écosystèmes audiovisuels à long terme qui relient stratégie, créativité, production, technologie, distribution, mesure et apprentissage continu en un programme intégré unique.",
    strategic_p3: "Chaque campagne devient plus qu'un simple contenu. Elle devient un actif, un apprentissage et une brique de base pour la suite.",
    prog1_kicker: "01 / STRATÉGIE",
    prog1_title: "STRATÉGIE & CONSEIL",
    prog1_desc: "Stratégie audiovisuelle, conseil et accompagnement, direction créative, territoires narratifs, coordination et gestion de programme.",
    prog1_footer: "Une stratégie. Une narration. Une direction.",
    prog2_kicker: "02 / CRÉATIVITÉ",
    prog2_title: "CREATION & PRODUCTION",
    prog2_desc: "Concepts de campagne, pré-production, production et réalisation, post-production avancée, adaptations et déclinaisons de contenu.",
    prog2_footer: "Une idée. Expressions infinies.",
    prog3_kicker: "03 / TECHNOLOGIE",
    prog3_title: "TECHNOLOGIE & EXPERTISE",
    prog3_desc: "Nous utilisons la 2D, la 3D, les VFX, l'IA quand c'est pertinent, et des technologies de production avancées pour élargir le champ des possibles créatifs.",
    prog3_footer: "La technologie devient l'avantage créatif.",
    prog4_kicker: "04 / DÉPLOIEMENT",
    prog4_title: "DISTRIBUTION & DÉPLOIEMENT",
    prog4_desc: "Nous préparons et adaptons le contenu pour la TV, les réseaux sociaux, les plateformes numériques, et différents formats et environnements de distribution.",
    prog4_footer: "Une histoire. Chaque écran.",
    prog5_kicker: "05 / MESURES",
    prog5_title: "MESURE & OPTIMISATION",
    prog5_desc: "Nous identifions les contenus, formats, messages et approches qui génèrent la plus grande pertinence et le plus grand impact, tout en analysant les réactions du public et les performances.",
    prog5_footer: "Ces analyses alimentent en continu les étapes suivantes. Chaque campagne génère un signal.",
    prog6_kicker: "06 / CAPITALISATION",
    prog6_title: "BÂTIR SUR CE QUE NOUS CRÉONS",
    prog6_desc: "Nous constituons une bibliothèque d'actifs audiovisuels évolutive, tout en capturant les codes créatifs, les principes narratifs, le savoir-faire de production et les apprentissages de chaque campagne.",
    prog6_footer: "Au fil du temps, le contenu, les données de performance, les réactions du public et les apprentissages créatifs forment une base de connaissances croissante qui oriente les futures créations. La marque ne repart jamais de zéro. Plus nous créons, plus le système devient intelligent.",
    strategic_footer: "NOUS NE FAISONS PAS SEULEMENT DU CONTENU. NOUS CONCEVONS DES EXPÉRIENCES.",
    brand_exp_kicker: "ÉVOLUER L'EXPÉRIENCE DE MARQUE.",
    brand_exp_title: "DU CONTENU À LA CULTURE. DES CAMPAGNES AUX EXPÉRIENCES.",
    be1_kicker: "01 / VIBRANT",
    be1_title: "Plus Vibrant",
    be1_desc: "De l'imagerie statique à des expériences de marque dynamiques, animées et vivantes qui évoluent en permanence.",
    be1_footer: "Plus de mouvement. Plus d'énergie. Plus de vie.",
    be2_kicker: "02 / NARRATIF",
    be2_title: "Plus Narratif",
    be2_desc: "Des campagnes isolées à un écosystème narratif unifié où chaque expérience contribue à l'histoire globale.",
    be2_footer: "Une vision. Expériences multiples. Une histoire.",
    be3_kicker: "03 / ÉMOTIONNEL",
    be3_title: "Plus Émotionnel",
    be3_desc: "De la simple communication d'un message à la création d'expériences que les gens ressentent, retiennent et auxquelles ils s'identifient.",
    be3_footer: "Moins de diffusion. Plus de connexion.",
    be4_kicker: "04 / MÉMORABLE",
    be4_title: "Plus Mémorable",
    be4_desc: "De la communication commerciale ponctuelle à des expériences durables qui s'intègrent à la marque elle-même.",
    be4_footer: "Pas seulement vu. Vécu. Retenu.",
    art_concept_text: "Le département Concept Art d'Immersio se situe au sommet du design cinématographique, unissant art et collaboration pour créer des récits visuels tissés à la main. Immersio Art fonctionne comme un atelier indépendant ou dans le cadre de l'offre globale d'effets visuels d'Immersio. Des créatures aux personnages, des costumes aux accessoires, et des véhicules aux environnements, nous travaillons sur tout le spectre de la narration cinématographique. Notre équipe Immersio Art est fière de collaborer avec les réalisateurs et cinéastes les plus visionnaires de l'industrie, dont l'ambition et la clarté d'intention élèvent continuellement notre savoir-faire. Ces collaborations nous incitent à innover, affiner et élargir les frontières du design, renforçant notre réputation de partenaire créatif de confiance à la pointe du domaine.",
    art_role_head: "Responsable mondial du design",
    art_role_producer: "Productrice mondiale d'art",
    art_role_director: "Directeur artistique",
    art_impossible_title: "Prêt à repousser les limites de l'impossible ?",
    art_impossible_desc: "Prenez contact avec notre équipe de conception artistique pour concevoir votre prochain univers.",
    contact_art_team: "Contacter l'équipe artistique",
    track1_meta: "Logiciels : Unreal Engine 5.4, Houdini, Outils MoCap",
    track2_meta: "Logiciels : Unreal Engine C++, Shaders HLSL, MetaHuman",
    track3_meta: "Format : Diplômes clés en main, certification de facultés",
    track4_meta: "Spécialité : Combat virtuel, simulation de vol, jumeaux numériques",
    
    // Training programs keys
    training_intro_title: "NOS PROGRAMMES DE FORMATION EN TECHNOLOGIE",
    training_intro_p1: "De l'idée à l'image. De la découverte à la création. De la science à l'innovation.",
    training_intro_p2: "Entrez dans les coulisses des technologies qui donnent vie aux films, aux mondes numériques, aux simulations scientifiques et aux innovations de demain.",
    training_intro_p3: "Explorez les effets visuels 2D, la 3D, le compositing et l'intelligence artificielle. Découvrez comment ces technologies sont utilisées pour créer, simuler, visualiser et comprendre des phénomènes complexes dans les secteurs de la création, des sciences et des technologies.",
    training_intro_p4: "Apprenez à analyser et comprendre les images, expérimentez de nouvelles façons de créer et développez une solide culture numérique, nourrie par la créativité, la curiosité scientifique et l'esprit critique.",
    training_intro_p5: "Découvrez comment la technologie transforme notre façon de raconter des histoires, de concevoir, de simuler, de rechercher et de comprendre le monde.",
    training_intro_p6: "Élargissez vos perspectives. Développez vos compétences. Imaginez votre avenir.",
    training_discover_title: "DÉCOUVREZ NOS PROGRAMMES DE TECHNOLOGIES NUMÉRIQUES",
    
    track1_card_title: "01 — DÉCOUVERTE DES TECHNOLOGIES NUMÉRIQUES 2D & 3D ET DE L'INTELLIGENCE ARTIFICIELLE",
    track1_card_badges: "Découverte · Non-intensif · 2D & 3D · Regard critique · 18 ans et plus",
    track1_card_desc: "Découvrez les technologies numériques qui transforment les industries créatives, scientifiques et technologiques d'aujourd'hui. Explorez la 2D, la 3D, l'intelligence artificielle, les effets visuels, l'animation, le compositing et la création numérique, tout en découvrant les métiers et opportunités professionnelles associés.",
    discover_program_btn: "Découvrir le programme →",
    explore_btn: "Explorer →",
    specialize_btn: "Se spécialiser →",
    
    track2_card_title: "02 — SPÉCIALISATION EN EFFETS 3D ET COMPOSITING",
    track2_card_badges: "Spécialisation · Intensif · Effets procéduraux · Compositing · 18 ans et plus",
    track2_card_desc: "Apprenez à créer des effets naturels, physiques et magiques avec Houdini, puis intégrez-les et finalisez-les dans Nuke. Du développement de concept et de la simulation à l'intégration dans des prises de vue réelles et à la finition finale de l'image.",
    
    track1_details_title: "DÉCOUVERTE DES TECHNOLOGIES NUMÉRIQUES 2D & 3D ET DE L'INTELLIGENCE ARTIFICIELLE",
    track1_details_subtitle: "Une immersion dans le monde des technologies numériques",
    track1_p1: "Ce programme offre une introduction immersive aux technologies numériques 2D et 3D et à l'intelligence artificielle, proposée comme activité parascolaire en français et en anglais.",
    track1_p2: "Le programme vise à stimuler la curiosité, développer les compétences et la culture numériques, renforcer l'esprit critique et élargir les perspectives d'avenir des participants.",
    track1_p3: "Il cherche également à favoriser une meilleure compréhension de l'influence des images, des technologies numériques et de l'intelligence artificielle sur la société, tout en contribuant au développement du Burkina Faso et en renforçant sa reconnaissance nationale et internationale.",
    track1_p4: "Grâce à une approche accessible, progressive et orientée vers la découverte, les participants explorent comment les films, les effets visuels, les jeux vidéo, l'imagerie 3D, les environnements numériques, les simulations scientifiques et de nombreux autres types de contenu sont créés et utilisés dans les industries créatives, scientifiques et technologiques.",
    track1_p5: "Ils découvrent également comment l'intelligence artificielle transforme les processus de création, de production, d'analyse et de recherche.",
    track1_p6: "L'objectif est d'aider chaque participant à identifier progressivement les domaines qui correspondent le mieux à ses intérêts, ses talents et ses ambitions.",
    
    target_audience_lbl: "Public Cible",
    target_audience_1: "Étudiants et adultes âgés de 18 ans et plus",
    target_audience_2: "Professionnels désireux de découvrir ou de développer leurs compétences numériques",
    
    excellence_lbl: "Une expérience d'apprentissage axée sur l'excellence",
    excellence_desc: "Les cours sont dispensés par une équipe de professionnels burkinabè, qualifiés et diplômés de grandes universités du Burkina Faso, du Canada et du Royaume-Uni.",
    excellence_p1: "2 heures de cours en ligne par semaine",
    excellence_p2: "Horaires adaptés à la disponibilité des participants",
    excellence_p3: "Cours proposés en français et en anglais",
    excellence_p4: "Une approche accessible, progressive et orientée vers la découverte",
    
    ambition_lbl: "Notre Ambition",
    ambition_desc: "Contribuer à développer une nouvelle génération de créateurs, d'innovateurs et de professionnels du numérique capables de comprendre, d'utiliser et d'explorer les technologies numériques et l'intelligence artificielle.",
    ambition_sub_desc: "À travers ce programme d'initiation, nous visons à donner aux participants les premiers outils pour imaginer, créer, expérimenter et construire leur avenir, tout en contribuant au développement de l'Afrique et à sa présence croissante dans les industries créatives, scientifiques et technologiques internationales."
  },
  en: {
    brand_subtitle: "IMMERSIVE INNOVATION CENTER",
    nav_home: "Home",
    nav_studio: "About us",
    nav_showcase: "Showcase",
    nav_technology: "Sandbox",
    nav_training: "Academy & Admissions",
    nav_contact: "Contact",
    apply_now: "Apply Now",
    hero_subtitle: "IMMERSIVE INNOVATION CENTER",
    watch_showreel: "Watch Showreel",
    explore_studio: "Explore Studio",
    featured_work: "FEATURED WORK",
    quote_transform: "TRANSFORMING ENTERTAINMENT",
    quote_tech: "PIONEERING TECHNOLOGY",
    quote_innov: "FOSTERING INNOVATION",
    studio_kicker: "Creative Innovation Hub",
    studio_title: "Who We Are",
    studio_desc: "We merge cinematic art with real-time immersive technologies. Our studio builds cutting-edge rendering engines, high-fidelity interactive simulators, and certified training programs for top global studios.",
    cap1_title: "Cinematic VFX",
    cap1_desc: "Virtual Production pipelines with high-fidelity LED volume wall integration, Unreal Engine 5.4 staging, and real-time actor digital twins.",
    cap2_title: "AI Neural Solutions",
    cap2_desc: "Machine learning graphic models, real-time NeRFs, Gaussian Splatting, and neural rendering pipelines for photorealistic interactive worlds.",
    cap3_title: "Defense Simulation",
    cap3_desc: "Mission rehearsal software, tactical flight simulations, biometric telemetry dashboards, and multi-user synthetic training environments.",
    cap4_title: "Virtual Production",
    cap4_desc: "LED Stage setup design, camera calibration, lighting rigs, academic degree curricula, and certified training programs.",
    division_subtitle: "FURTHERING THE ART OF VISUAL EFFECTS.",
    watch_our_showreel: "WATCH OUR SHOWREEL",
    showcase_kicker: "Interactive Video Archive",
    showcase_title: "Explore Our Titles",
    filter_projects: "FILTER PROJECTS",
    filter_titles: "FILTER TITLES",
    filter_search_placeholder: "Filter By Name...",
    filter_avail: "Availability",
    avail_soon: "Coming Soon",
    avail_theaters: "In Theaters",
    avail_released: "Released",
    avail_realtime: "Real-Time",
    avail_volumetric: "Volumetric",
    filter_tech: "Tech Stack",
    tech_unreal: "Unreal Engine 5.4",
    tech_gaussian: "Gaussian Splatting",
    tech_nerf: "NeRF",
    tech_houdini: "Houdini Fluid",
    tech_defensesim: "Defense Sim",
    clear_filters: "Clear Filters",
    card_desc_netflix: "Now Streaming on Netflix",
    card_desc_restricted: "In Production • Restricted Access",
    card_desc_visionos: "Released on Apple VisionOS",
    card_desc_sony: "Get it Now on 4K UHD, Blu-ray & Digital",
    card_desc_abc: "Wednesdays 10/9c on ABC",
    card_desc_dvd: "Get it Now on DVD and Digital",
    card_desc_doc: "Watch Season 2 on Fox / Season 1 on Netflix",
    card_desc_hulu: "Now Streaming on Hulu",
    partners_title: "COMPANIES USING 3D SOFTWARES",
    sandbox_kicker: "Interactive Camera Simulation",
    sandbox_title: "Virtual Camera Studio",
    sandbox_desc: "Adjust the camera lens, exposure, and focus settings below to see how they change the virtual scene in real time.",
    sandbox_controls: "RENDER CONTROLS",
    ctrl_focal: "Focal Length",
    ctrl_exposure: "Exposure Limit",
    ctrl_chromatic: "Chromatic Shift",
    ctrl_noise: "Noise Density",
    ctrl_vignette: "Vignette Depth",
    engine_status: "Active Pipeline Status",
    status_normal: "NORMAL",
    reset_sandbox: "Reset Simulator",
    academy_kicker: "WHAT YOU WILL LEARN",
    academy_title: "Our Training Programs",
    curriculum_kicker: "CORE TECHNICAL DISCIPLINES",
    curriculum_title: "Our Curriculum",
    curriculum_desc: "Explore the core technical VFX disciplines taught at our academy. Click on any render to expand it in full screen.",
    curr_pyro_title: "PYRO FX - FIRE / SMOKE",
    curr_pyro_desc: "fire, flames, smoke, explosions, fireballs, shockwaves, trailing smoke, burning buildings, candles, torches, campfires, gas/fuel/dust explosions, fire propagation, volumetric fire/smoke, colored/magic/stylized fire, embers, ash, thermal distortion, secondary smoke, procedural explosions",
    curr_part_title: "PARTICLES - SAND / DUST",
    curr_part_desc: "Simulation of sand, dust, powder, ash, flour, snow-type particles, dunes, sand explosions, footprints, wind-blown sand, buried objects, sand collapse, granular simulation, dust/sand storms",
    curr_cloud_title: "CLOUDS - VOLUMETRICS",
    curr_cloud_desc: "Clouds, storm clouds, fog, haze, mist, smoke, dust, volumetric explosions, atmospheric volumes, god rays, cloud formations, procedural sky, volumetric environment, wind, tornadoes, volumetric weather, atmospheric effects",
    curr_dest_title: "DESTRUCTION - RIGID BODY",
    curr_dest_desc: "Building destruction, bridge collapse, debris, shattered glass, wood fractures, bullet impacts, car crashes, concrete cracks, twisted metal simulation, procedural demolition",
    curr_fluid_title: "FLUIDS - LIQUIDS",
    curr_fluid_desc: "Water simulation, splashes, water foam, bubbles, viscous liquids (honey, chocolate), lava flow, high-pressure water jet, wave simulations, realistic fluid physics",
    curr_ocean_title: "OCEANS - WATER EFFECTS",
    curr_ocean_desc: "Deep sea simulations, swell, ships braving the storm, coastal waves, sea foam, spray, wind-water interaction, realistic ocean environment",
    academy_desc: "Explore our distinct training tracks, from visual effects and game development to academic partnerships and professional simulation.",
    academy_controls: "Studio Navigation",
    tab_front: "Cinema & TV Stages",
    tab_garage: "Games & Real-Time Lab",
    tab_rear: "Academic Programs",
    tab_glass: "Tactical Simulations",
    awards_kicker: "Honorary Recognition",
    awards_title: "Awards & Milestones",
    awards_desc: "International recognition of the contributions of our creative and technological teams to cinema and software innovation.",
    award1_title: "Scientific and Technical Academy Award",
    award1_sub: "Significant contribution to cinema processes",
    award1_desc: "Our R&D team received a Technical Achievement Award from the Academy of Motion Picture Arts and Sciences for our custom anatomical simulation and virtual actor toolsets.",
    award2_title: "DevOps Excellence Award",
    award2_sub: "Successful application of cloud-native methodologies",
    award2_desc: "DNEG and Red Hat won the Computing DevOps Excellence award for orchestrating distributed rendering farms seamlessly on private hybrid cloud architectures.",
    news_kicker: "Breaking Industry News",
    news_title: "Immersio AI Expansion & Metaphysic Integration",
    news_desc: "Immersio Suprema announced the acquisition of Metaphysic to accelerate the development of generative AI tools and photorealistic real-time digital twins.",
    read_press: "Read Press Release",
    contact_kicker: "Partner with Us",
    contact_title: "Start Your Project",
    contact_desc: "Talk with our engineers to design custom simulators or schedule training programs.",
    form_title: "Project Proposal",
    label_name: "Name",
    placeholder_name: "Your Name...",
    label_email: "Email",
    placeholder_email: "Your Email...",
    label_industry: "Industry",
    opt_vfx: "Film VFX & Animation",
    opt_sim: "Defense & Simulation",
    opt_tech: "Custom Software",
    opt_training: "Academic Degrees",
    label_budget: "Budget Range",
    opt_budget1: "Under $50k",
    opt_budget2: "$50k - $250k",
    opt_budget3: "$250k - $1M",
    opt_budget4: "$1M+ Enterprise",
    label_details: "Project details",
    placeholder_details: "Tell us about your project or training needs...",
    submit_btn: "SUBMIT PROPOSAL",
    footer_desc: "Collective of immersive visual engineering. Premium virtual worlds, graphical ML, and simulator pipelines for visionary teams.",
    footer_nav: "Navigation",
    footer_caps: "Capabilities",
    footer_accred: "Accreditation",
    drawer_accred: "VES Accredited Member Collective",
    house_wall_front_title: "FILM & TELEVISION STUDIOS",
    house_wall_front_desc: "Industry-accredited training & specialized masterclasses delivered on-site & online: ICVFX LED Wall Virtual Production, Houdini Fluid Physics, Unreal Engine 5.4, and Motion Capture.",
    house_wall_right_title: "ANIMATION & GAME DEV STUDIOS",
    house_wall_right_desc: "Industry-accredited training & specialized masterclasses delivered on-site & online: AAA Game Pipelines, Real-Time Shaders, Procedural Art, MetaHuman Rigging, and C++ Unreal Engine.",
    house_wall_back_title: "UNIVERSITIES & FILM SCHOOLS",
    house_wall_back_desc: "Industry-accredited training & specialized masterclasses delivered on-site & online: Turnkey Degree Curricula, Faculty Certification Programs, Virtual Production Campus Setup, and Student Capstone Mentorship.",
    house_wall_left_title: "DEFENSE & GOVERNMENT AGENCIES",
    house_wall_left_desc: "Industry-accredited training & specialized masterclasses delivered on-site & online: Tactical VR Combat Flight Simulation, Aerospace Machinery Digital Twins, Biometric Telemetry, and Mission Rehearsal.",
    
    // ---------------- WHY JOIN US & AMBITION ----------------
        nav_why: "Creative Tech",
    hero_tagline_title: "Cinematic Expertise. Immersive Innovation.",
    hero_tagline_desc: "We merge cinematic art with immersive technologies to create experiences that push the boundaries of storytelling.",
    remember_title: "WE CREATE <span class=\"luxury-serif-italic\">experiences</span> WORTH REMEMBERING",
    remember_editorial_title: "WE CREATE<br><span class=\"gold-highlight\">EXPERIENCES</span><br>WORTH<br>REMEMBERING.",
    remember_editorial_sub: "Where cinematic artistry meets emerging technology to craft stories that move, inspire and leave a lasting impact.",
    watch_reel_text: "WATCH REEL",
    crafted_experience_title: "CRAFTED THROUGH EXPERIENCE",
    exp1_kicker_editorial: "CINEMATIC PRODUCTION",
    exp1_editorial_title: "Cinematic<br>Storytelling",
    exp1_editorial_desc: "From concept to final frame, we craft visually stunning content with precision, passion and purpose.",
    exp1_caps: "DIRECTION / VFX / CG / POST PRODUCTION",
    exp2_kicker_editorial: "IMMERSIVE TECHNOLOGIES",
    exp2_editorial_title: "Interactive<br>Experiences",
    exp2_editorial_desc: "We transform ideas into immersive, real-time experiences that engage, connect and inspire.",
    exp2_caps: "REAL-TIME / SIMULATION / DIGITAL TWINS / XR",
    exp3_kicker_editorial: "AI TECHNOLOGIES",
    exp3_editorial_title: "AI-Powered<br>Solutions",
    exp3_editorial_desc: "Harnessing the power of AI to create smarter workflows, generative content and next-generation visual solutions.",
    exp3_caps: "GENERATIVE AI / ML PIPELINES / TOOLS / AUTOMATION",
    expertise_title_static: "OUR EXPERTISE",
    exp1_kicker: "01 / CINEMATIC PRODUCTION",
    exp1_title: "Cinematic Shots",
    exp1_desc: "From audiovisual production and direction to Hollywood-grade 2D/3D visual effects, we combine creative storytelling with technical precision.",
    exp1_sub: "Our expertise spans complex VFX pipelines, color grading, art direction, and high-fidelity visual integration.",
    exp1_footer: "Pre production. Production. Post Production.",
    exp2_kicker: "02 / IMMERSIVE TECHNOLOGIES",
    exp2_title: "Immersive Systems & Interactive Experiences",
    exp2_desc: "We transform cinematic worlds into interactive, real-time experiences through advanced rendering, simulation, digital twins, and immersive technologies.",
    exp2_sub: "From interactive environments to high-fidelity simulators, we engineer systems that bring together visual storytelling, real-time computation, and human interaction.",
    exp2_footer: "Cinematic worlds. Real-time intelligence. Immersive experiences.",
    exp3_kicker: "03 / AI TECHNOLOGIES",
    exp3_title: "AI Solutions",
    exp3_desc: "We develop and supervise advanced AI-driven visual technologies for photorealistic interactive worlds.",
    exp3_sub: "Our expertise also extends to the technical evaluation and supervision of generative AI model training, helping transform emerging technologies into production-ready solutions.",
    exp3_footer: "Where artificial intelligence meets visual reality.",
    strategic_kicker: "A STRATEGIC AUDIOVISUAL PROGRAM",
    strategic_title: "AN AGENCY PRODUCES CONTENT. IMMERSIO SUPREMA BUILDS A BRAND'S AUDIOVISUAL CAPABILITY.",
    strategic_p1: "We don't approach audiovisual communication as a series of isolated campaigns.",
    strategic_p2: "We build long-term audiovisual ecosystems that connect strategy, creativity, production, technology, distribution, measurement, and continuous learning into one integrated program.",
    strategic_p3: "Every campaign becomes more than content. It becomes an asset, a learning, and a building block for what comes next.",
    prog1_kicker: "01 / STRATEGY",
    prog1_title: "STRATEGY & ADVISORY",
    prog1_desc: "Audiovisual strategy, consulting and support, creative direction, narrative territories, coordination, and program management.",
    prog1_footer: "One strategy. One narrative. One direction.",
    prog2_kicker: "02 / CREATIVE",
    prog2_title: "CREATIVE & PRODUCTION",
    prog2_desc: "Campaign concepts, pre-production, production and directing, advanced post-production, adaptations, and content variations.",
    prog2_footer: "One idea. Infinite expressions.",
    prog3_kicker: "03 / TECH",
    prog3_title: "TECHNOLOGY & EXPERTISE",
    prog3_desc: "We use 2D, 3D, VFX, AI when relevant, and advanced production technologies to expand what is creatively possible.",
    prog3_footer: "Technology becomes the creative advantage.",
    prog4_kicker: "04 / DEPLOYMENT",
    prog4_title: "DISTRIBUTION & DEPLOYMENT",
    prog4_desc: "We prepare and adapt content for TV, social media, digital platforms, and different formats and distribution environments.",
    prog4_footer: "One story. Every screen.",
    prog5_kicker: "05 / METRICS",
    prog5_title: "MEASUREMENT & OPTIMIZATION",
    prog5_desc: "We identify the content, formats, messages, and approaches that generate the greatest relevance and impact, while analysing audience reactions and performance.",
    prog5_footer: "These insights continuously inform what comes next. Every campaign generates a signal.",
    prog6_kicker: "06 / CAPITALIZATION",
    prog6_title: "BUILDING ON WHAT WE CREATE",
    prog6_desc: "We build an evolving audiovisual asset library, while capturing creative codes, narrative principles, production knowledge, and learnings from every campaign.",
    prog6_footer: "Over time, content, performance data, audience reactions, and creative learnings become a growing body of knowledge that informs what to create, how to create it, and where to take it next. The brand doesn't start from zero each time. The more we create, the smarter the system becomes.",
    strategic_footer: "WE DON'T JUST MAKE CONTENT. WE ENGINEER EXPERIENCES.",
    brand_exp_kicker: "EVOLVE THE BRAND EXPERIENCE.",
    brand_exp_title: "FROM CONTENT TO CULTURE. FROM CAMPAIGNS TO EXPERIENCES.",
    be1_kicker: "01 / VIBRANT",
    be1_title: "More Vibrant",
    be1_desc: "From static imagery to dynamic, animated, living brand experiences that continuously evolve.",
    be1_footer: "More movement. More energy. More life.",
    be2_kicker: "02 / NARRATIVE",
    be2_title: "More Narrative",
    be2_desc: "From isolated campaigns to a unified narrative ecosystem where every experience contributes to the bigger story.",
    be2_footer: "One vision. Multiple experiences. One story.",
    be3_kicker: "03 / EMOTIONAL",
    be3_title: "More Emotional",
    be3_desc: "From simply communicating a message to creating experiences that people feel, remember, and connect with.",
    be3_footer: "Less broadcasting. More connection.",
    be4_kicker: "04 / MEMORABLE",
    be4_title: "More Memorable",
    be4_desc: "From one-off commercial communication to lasting experiences that become part of the brand itself.",
    be4_footer: "Not just seen. Experienced. Remembered.",
    art_concept_text: "Immersio’s Concept Art department stands at the pinnacle of motion picture design, uniting artistry with collaboration to create handwoven visual narratives. Immersio Art operates as a standalone atelier or as part of Immersio’s wider visual effects offering. From creatures to characters, costumes to props, and vehicles to environments, we work across the full spectrum of cinematic storytelling. Our Immersio Art team is proud to collaborate with the industry’s most visionary directors and filmmakers, whose ambition and clarity of purpose continually elevates our craft. These collaborations challenge us to innovate, refine and expand the possibilities of design, reinforcing our reputation as a trusted creative partner at the forefront of the field.",
    art_role_head: "Global Head of Art",
    art_role_producer: "Global Art Producer",
    art_role_director: "Art Director",
    art_impossible_title: "Ready to Start with Impossible?",
    art_impossible_desc: "Get in touch with our concept design team to build your next visual project.",
    contact_art_team: "Contact the Art team",
    track1_meta: "Software: Unreal Engine 5.4, Houdini, MoCap tools",
    track2_meta: "Software: Unreal Engine C++, HLSL Shaders, MetaHuman Creator",
    track3_meta: "Delivery: Turnkey degree integration, faculty certification",
    track4_meta: "Focus: Virtual combat, flight simulation, digital twin engineering",
    
    // Training programs keys
    training_intro_title: "OUR TECHNOLOGY TRAINING PROGRAMS",
    training_intro_p1: "From idea to image. From discovery to creation. From science to innovation.",
    training_intro_p2: "Step behind the scenes of the technologies that bring films, digital worlds, scientific simulations and tomorrow’s innovations to life.",
    training_intro_p3: "Explore 2D visual effects, 3D, compositing and artificial intelligence. Discover how these technologies can be used to create, simulate, visualize and understand complex phenomena across the creative, scientific and technology industries.",
    training_intro_p4: "Learn to analyze and understand images, experiment with new ways of creating and develop strong digital literacy, fueled by creativity, scientific curiosity and critical thinking.",
    training_intro_p5: "Discover how technology is transforming the way we tell stories, design, simulate, research and understand the world.",
    training_intro_p6: "Broaden your perspective. Develop your skills. Imagine your future.",
    training_discover_title: "DISCOVER OUR DIGITAL TECHNOLOGY PROGRAMS",
    
    track1_card_title: "01 — DISCOVERING 2D & 3D DIGITAL TECHNOLOGIES AND ARTIFICIAL INTELLIGENCE",
    track1_card_badges: "Discovery · Non-intensive · 2D & 3D . Critical perspective . Ages 18+",
    track1_card_desc: "Discover the digital technologies transforming today’s creative, scientific and technology industries. Explore 2D, 3D, artificial intelligence, visual effects, animation, compositing and digital creation, while discovering related careers and professional opportunities.",
    discover_program_btn: "Discover the program →",
    explore_btn: "Explore →",
    specialize_btn: "Specialize →",
    
    track2_card_title: "02 — SPECIALIZATION IN 3D EFFECTS AND COMPOSITING",
    track2_card_badges: "Specialization · Intensive . Procedural Effects · Compositing . Ages 18 +",
    track2_card_desc: "Learn how to create natural, physical and magical effects with Houdini, then integrate and finalize them in Nuke. From concept development and simulation to integration into live-action footage and final image finishing.",
    
    track1_details_title: "DISCOVERING 2D & 3D DIGITAL TECHNOLOGIES AND ARTIFICIAL INTELLIGENCE",
    track1_details_subtitle: "An Immersion into the World of Digital Technologies",
    track1_p1: "This program offers an immersive introduction to 2D and 3D digital technologies and artificial intelligence, offered as an extracurricular activity in both French and English.",
    track1_p2: "The program aims to stimulate curiosity, develop digital skills and literacy, strengthen critical thinking and broaden participants’ future perspectives.",
    track1_p3: "It also seeks to foster a better understanding of the influence of images, digital technologies and artificial intelligence on society, while contributing to the development of Burkina Faso and strengthening its national and international recognition.",
    track1_p4: "Through an accessible, progressive and discovery-oriented approach, participants explore how films, visual effects, video games, 3D imagery, digital environments, scientific simulations and many other types of content are created and used across the creative, scientific and technology industries.",
    track1_p5: "They also discover how artificial intelligence is transforming creative, production, analytical and research processes.",
    track1_p6: "The goal is to help each participant gradually identify the fields that best match their interests, talents and ambitions.",
    
    target_audience_lbl: "Target Audience",
    target_audience_1: "Students and adults aged 18 and over",
    target_audience_2: "Professionals wishing to discover or develop their digital skills",
    
    excellence_lbl: "An Excellence-Oriented Learning Experience",
    excellence_desc: "Courses are delivered by a team of Burkinabè professionals, qualified and graduated from leading universities in Burkina Faso, Canada and the United Kingdom.",
    excellence_p1: "2-hour online classes per week",
    excellence_p2: "Schedules adapted to participants’ availability",
    excellence_p3: "Courses offered in French and English",
    excellence_p4: "An accessible, progressive and discovery-oriented approach",
    
    ambition_lbl: "Our Ambition",
    ambition_desc: "To help develop a new generation of digital creators, innovators and professionals capable of understanding, using and exploring digital technologies and artificial intelligence.",
    ambition_sub_desc: "Through this introductory program, we aim to give participants the first tools to imagine, create, experiment and build their future, while contributing to the development of Africa and its growing presence in the international creative, scientific and technology industries."

  }
};

// Helper to draw text and designs on the slate canvas
function drawSlateCanvas(canvas, titleText, descText, themeColor, lang, isNarrow) {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const w = canvas.width;
  const h = canvas.height;

  // 1. Premium deep obsidian-violet-dark gradient background
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, '#07060a');
  grad.addColorStop(0.5, '#0e0d13');
  grad.addColorStop(1, '#050407');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // 2. High-Tech Cyber Dot Grid Background
  ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
  for (let x = 80; x < w - 80; x += 100) {
    for (let y = 80; y < h - 80; y += 100) {
      ctx.fillRect(x, y, 4, 4);
    }
  }

  // 3. Neon glowing borders
  ctx.shadowColor = themeColor;
  ctx.shadowBlur = 30;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
  ctx.lineWidth = 4;
  ctx.strokeRect(60, 60, w - 120, h - 120);

  ctx.shadowBlur = 0; // reset shadow for performance

  // Inner thin border
  ctx.strokeStyle = themeColor + '33';
  ctx.lineWidth = 2;
  ctx.strokeRect(76, 76, w - 152, h - 152);

  // Tech corner brackets
  ctx.strokeStyle = themeColor;
  ctx.lineWidth = 8;
  const bracketLen = 60;
  const rightX = w - 76;
  const bottomY = h - 76;
  // Top-Left corner
  ctx.beginPath(); ctx.moveTo(76 + bracketLen, 76); ctx.lineTo(76, 76); ctx.lineTo(76, 76 + bracketLen); ctx.stroke();
  // Top-Right corner
  ctx.beginPath(); ctx.moveTo(rightX - bracketLen, 76); ctx.lineTo(rightX, 76); ctx.lineTo(rightX, 76 + bracketLen); ctx.stroke();
  // Bottom-Left corner
  ctx.beginPath(); ctx.moveTo(76 + bracketLen, bottomY); ctx.lineTo(76, bottomY); ctx.lineTo(76, bottomY - bracketLen); ctx.stroke();
  // Bottom-Right corner
  ctx.beginPath(); ctx.moveTo(rightX - bracketLen, bottomY); ctx.lineTo(rightX, bottomY); ctx.lineTo(rightX, bottomY - bracketLen); ctx.stroke();

  // 4. Pill badge for the section category
  ctx.fillStyle = themeColor + '14';
  ctx.beginPath();
  if (typeof ctx.roundRect === 'function') {
    ctx.roundRect(120, 120, w - 240, 112, 56);
  } else {
    ctx.rect(120, 120, w - 240, 112);
  }
  ctx.fill();

  ctx.strokeStyle = themeColor + '77';
  ctx.lineWidth = 4;
  ctx.stroke();

  // Badge text inside pill
  ctx.fillStyle = themeColor;
  ctx.font = '900 36px "Inter", "Segoe UI", sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  const badgeLabel = lang === 'fr' ? 'PROGRAMME & SERVICE OFFERT' : 'PROGRAM & SERVICE OFFERED';
  ctx.fillText(badgeLabel, 190, 176);

  // Decorative tiny LED square inside pill
  ctx.fillStyle = themeColor;
  ctx.fillRect(160, 168, 16, 16);

  // 5. Main Title Typography
  ctx.fillStyle = '#ffffff';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
  ctx.shadowBlur = 24;
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 6;

  const titleSize = isNarrow ? 66 : 92;
  ctx.font = `700 ${titleSize}px "Montserrat", "Inter", "Segoe UI", sans-serif`;
  ctx.textBaseline = 'top';
  ctx.fillText(titleText, 120, 390);

  // Reset shadow
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  // Thin elegant separator line with glowing gradient
  const lineGrad = ctx.createLinearGradient(120, 0, w - 120, 0);
  lineGrad.addColorStop(0, themeColor);
  lineGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
  lineGrad.addColorStop(1, themeColor);
  ctx.strokeStyle = lineGrad;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(120, 520); ctx.lineTo(w - 120, 520);
  ctx.stroke();

  // 6. Description Typography (Clean, highly visible sans-serif)
  ctx.fillStyle = '#ffffff'; 
  ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
  ctx.shadowBlur = 18;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 4;
  
  const descSize = isNarrow ? 56 : 68;
  const lineHeight = isNarrow ? 95 : 120;
  const maxWidth = w - 240;

  ctx.font = `700 ${descSize}px "Montserrat", "Inter", "Segoe UI", sans-serif`;
  
  const words = descText.split(' ');
  let line = '';
  let y = 610;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && n > 0) {
      ctx.fillText(line, 120, y);
      line = words[n] + ' ';
      y += lineHeight; 
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, 120, y);
}

// 6. Clean Slate Canvas Texture Generator (Global Scope)
function createSlateMaterial(titleKey, descKey, themeColor, faceType) {
  const isNarrow = (faceType === 'right' || faceType === 'left');
  const canvas = document.createElement('canvas');
  canvas.width = isNarrow ? 1360 : 2160;
  canvas.height = 1400;
  
  const titleText = translations[currentLanguage][titleKey];
  const descText = translations[currentLanguage][descKey];
  drawSlateCanvas(canvas, titleText, descText, themeColor, currentLanguage, isNarrow);

  const texture = new THREE.CanvasTexture(canvas);
  
  // Apply anisotropic filtering for high-resolution sharp text at oblique angles
  if (typeof threeRenderer !== 'undefined' && threeRenderer) {
    texture.anisotropy = threeRenderer.capabilities.getMaxAnisotropy();
  }
  
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;

  const material = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.95, metalness: 0.02 });
  material.userData = { canvas: canvas, texture: texture, themeColor: themeColor, titleKey: titleKey, descKey: descKey, faceType: faceType };
  return material;
}

// In-place texture updater to ensure instant updates without material leak/flicker
function updateSlateTexture(mesh, lang) {
  if (!mesh || !mesh.material || !mesh.material.userData || !mesh.material.userData.canvas) return;
  const { canvas, texture, themeColor, titleKey, descKey, faceType } = mesh.material.userData;
  const isNarrow = (faceType === 'right' || faceType === 'left');
  const titleText = translations[lang][titleKey];
  const descText = translations[lang][descKey];
  
  drawSlateCanvas(canvas, titleText, descText, themeColor, lang, isNarrow);
  
  // Set anisotropy again just in case it wasn't initialized on load
  if (typeof threeRenderer !== 'undefined' && threeRenderer && texture.anisotropy === 1) {
    texture.anisotropy = threeRenderer.capabilities.getMaxAnisotropy();
  }
  
  texture.needsUpdate = true;
}

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('vfx_lang', lang);
  
  // Highlight active option in all lang switchers
  document.querySelectorAll('.lang-switcher').forEach(switcher => {
    switcher.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.remove('active');
    });
    const frOption = switcher.querySelector('#lang-fr') || switcher.querySelector('#drawer-lang-fr');
    const enOption = switcher.querySelector('#lang-en') || switcher.querySelector('#drawer-lang-en');
    if (lang === 'fr' && frOption) frOption.classList.add('active');
    if (lang === 'en' && enOption) enOption.classList.add('active');
  });

  // Dual switchers active state sync
  const frBtn = document.getElementById('lang-fr');
  const enBtn = document.getElementById('lang-en');
  const frDrawer = document.getElementById('drawer-lang-fr');
  const enDrawer = document.getElementById('drawer-lang-en');
  if (lang === 'fr') {
    if (frBtn) frBtn.classList.add('active');
    if (frDrawer) frDrawer.classList.add('active');
    if (enBtn) enBtn.classList.remove('active');
    if (enDrawer) enDrawer.classList.remove('active');
  } else {
    if (enBtn) enBtn.classList.add('active');
    if (enDrawer) enDrawer.classList.add('active');
    if (frBtn) frBtn.classList.remove('active');
    if (frDrawer) frDrawer.classList.remove('active');
  }

  // Update translation key elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.classList.remove('i18n-fade');
      void el.offsetWidth;
      el.classList.add('i18n-fade');
      const val = translations[lang][key];
      if (val.includes('<') || el.classList.contains('allow-html')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Re-draw clapperboard house canvas textures if Three.js initialized
  if (typeof frontSlateMesh !== 'undefined' && frontSlateMesh) {
    updateSlateTexture(frontSlateMesh, lang);
    updateSlateTexture(rightSlateMesh, lang);
    updateSlateTexture(backSlateMesh, lang);
    updateSlateTexture(leftSlateMesh, lang);
  }

  // Update Houdini carousel translations
  if (typeof switchHoudiniCarousel === 'function') {
    switchHoudiniCarousel(currentHoudiniIndex);
  }
}

function switchCurriculumItem(index) {
  const currentLang = currentLanguage || 'fr';
  let dataset = [];
  if (activeSoftwareTrack === 'houdini') {
    dataset = (currentLang === 'en') ? houdiniCurriculumEN : houdiniCurriculumFR;
  } else {
    dataset = (currentLang === 'en') ? nukeCurriculumEN : nukeCurriculumFR;
  }
  
  if (dataset.length === 0) return;
  if (index < 0) index = dataset.length - 1;
  if (index >= dataset.length) index = 0;
  
  currentCurriculumIndex = index;
  const item = dataset[index];
  
  const titleEl = document.getElementById('h-carousel-title');
  const descEl = document.getElementById('h-carousel-desc');
  const trackEl = document.getElementById('curriculum-slider-track');
  const badgeEl = document.getElementById('h-carousel-badge');
  const counterEl = document.getElementById('h-carousel-counter');
  
  if (titleEl) {
    titleEl.style.opacity = '0.3';
    descEl.style.opacity = '0.3';
    if (trackEl) trackEl.style.opacity = '0.3';
    
    const specElements = ['sim-software', 'sim-engine', 'sim-particles', 'sim-rendertime'].map(id => document.getElementById(id));
    specElements.forEach(el => { if (el) el.style.opacity = '0.3'; });
    
    setTimeout(() => {
      titleEl.textContent = item.title;
      descEl.textContent = item.text;
      renderSubCarousel(item.images);
      
      const specSoft = document.getElementById('sim-software');
      const specEng = document.getElementById('sim-engine');
      const specPart = document.getElementById('sim-particles');
      const specTime = document.getElementById('sim-rendertime');
      
      if (specSoft && item.specs) specSoft.textContent = item.specs.software;
      if (specEng && item.specs) specEng.textContent = item.specs.engine;
      if (specPart && item.specs) specPart.textContent = item.specs.particles;
      if (specTime && item.specs) specTime.textContent = item.specs.time;
      
      badgeEl.textContent = `MENU ${(index + 1).toString().padStart(2, '0')} / ${dataset.length.toString().padStart(2, '0')}`;
      counterEl.textContent = `${index + 1} - ${dataset.length}`;
      
      titleEl.style.opacity = '1';
      descEl.style.opacity = '1';
      if (trackEl) trackEl.style.opacity = '1';
      specElements.forEach(el => { if (el) el.style.opacity = '1'; });
    }, 150);
  }
  
  const indicatorBars = document.querySelectorAll('.houdini-tab-indicator-bar');
  indicatorBars.forEach((bar, idx) => {
    if (idx === index) {
      bar.classList.add('active');
    } else {
      bar.classList.remove('active');
    }
  });
}

function switchHoudiniCarousel(index) {
  buildCurriculumTabs();
  switchCurriculumItem(index);
}

function prevHoudiniCarousel() {
  switchCurriculumItem(currentCurriculumIndex - 1);
}

function nextHoudiniCarousel() {
  switchCurriculumItem(currentCurriculumIndex + 1);
}

/* --------------------------------------------------------
   PIPELINE HUD STEPS SELECTOR ENGINE
   -------------------------------------------------------- */
const pipelineStepsData = [
  {
    stamp: "STAGE // 01",
    title: "STRATEGY & ADVISORY",
    text: "Audiovisual strategy, consulting and support, creative direction, narrative territories, coordination, and program management.",
    options: [
      {
        title: "Audiovisual Strategy",
        tag: "Executive Planning",
        desc: "Aligning brand vision with cinematic visual direction to capture target audience engagement.",
        image: "picture1.jpeg",
        icon: "fa-compass"
      },
      {
        title: "Narrative Territories",
        tag: "Brand Storytelling",
        desc: "Defining unique storytelling frameworks and emotional resonant themes across media touchpoints.",
        image: "picture2.jpeg",
        icon: "fa-feather-alt"
      },
      {
        title: "Creative Direction",
        tag: "Visual Governance",
        desc: "Overseeing holistic visual identity, artistic tone, and brand aesthetic guidelines.",
        image: "third.jpeg",
        icon: "fa-palette"
      },
      {
        title: "Program Governance",
        tag: "End-to-End Control",
        desc: "Structured roadmap execution, cross-functional milestone tracking, and quality assurance.",
        image: "fifth.jpeg",
        icon: "fa-tasks"
      }
    ]
  },
  {
    stamp: "STAGE // 02",
    title: "CREATIVE & PRODUCTION",
    text: "Campaign concepts, pre-production, production and directing, advanced post-production, adaptations, and content variations.",
    options: [
      {
        title: "Campaign Concepts",
        tag: "Concept Ideation",
        desc: "Breakthrough creative concepts designed for high-impact multi-channel campaigns.",
        image: "first 1.jpeg",
        icon: "fa-lightbulb"
      },
      {
        title: "Cinematic Production",
        tag: "Live-Action & Virtual",
        desc: "World-class film direction, virtual production integration, and high-end set execution.",
        image: "second.jpeg",
        icon: "fa-video"
      },
      {
        title: "Post-Production Mastery",
        tag: "Editing & Color",
        desc: "Master-grade editorial assembly, custom color grading, and precision sound design.",
        image: "forth.jpeg",
        icon: "fa-film"
      },
      {
        title: "Content Adaptation",
        tag: "Multi-Format Delivery",
        desc: "Tailored aspect ratio variations, social cuts, and localized campaign assets.",
        image: "sixth.jpeg",
        icon: "fa-expand-arrows-alt"
      }
    ]
  },
  {
    stamp: "STAGE // 03",
    title: "TECHNOLOGY & VFX",
    text: "We use 2D, 3D, VFX, AI when relevant, and advanced production technologies to expand what is creatively possible.",
    options: [
      {
        title: "Computational VFX",
        tag: "Visual Effects",
        desc: "Photorealistic 3D simulations, particle systems, and complex visual magic.",
        image: "seventh.jpeg",
        icon: "fa-magic"
      },
      {
        title: "Real-Time Engine",
        tag: "Unreal Engine 5.4",
        desc: "Real-time rendering, virtual environments, and interactive camera tracking.",
        image: "eighth.jpeg",
        icon: "fa-gamepad"
      },
      {
        title: "Procedural Environments",
        tag: "Houdini FX",
        desc: "Algorithmic landscape design, pyro effects, and dynamic fluid simulations.",
        image: "ninth.jpeg",
        icon: "fa-cubes"
      },
      {
        title: "AI & Generative Workflows",
        tag: "Smart Augmentation",
        desc: "Ethical AI tool integration to accelerate concept previz and style exploration.",
        image: "10th.jpeg",
        icon: "fa-brain"
      }
    ]
  },
  {
    stamp: "STAGE // 04",
    title: "DISTRIBUTION & DEPLOYMENT",
    text: "We prepare and adapt content for TV, social media, digital platforms, and different formats and distribution environments.",
    options: [
      {
        title: "Broadcast Mastering",
        tag: "Technical Compliance",
        desc: "Pristine 4K/HDR mastering compliant with international broadcast standards.",
        image: "eleventh.jpeg",
        icon: "fa-tv"
      },
      {
        title: "Multi-Platform Delivery",
        tag: "Omni-Channel",
        desc: "Optimized encoding for streaming networks, social channels, and web platforms.",
        image: "thirthinth.jpeg",
        icon: "fa-network-wired"
      },
      {
        title: "Cloud Content Hub",
        tag: "Global CDN",
        desc: "High-speed secure digital asset delivery and cloud distribution pipelines.",
        image: "fortheenth.jpeg",
        icon: "fa-cloud-upload-alt"
      },
      {
        title: "Dynamic Localization",
        tag: "Global Scale",
        desc: "Subtitling, voiceover integration, and market-specific graphic adaptations.",
        image: "fivethinth.jpeg",
        icon: "fa-globe"
      }
    ]
  },
  {
    stamp: "STAGE // 05",
    title: "MEASUREMENT & METRICS",
    text: "We identify the content, formats, messages, and approaches that generate the greatest relevance and impact, while analysing audience reactions and performance.",
    options: [
      {
        title: "Audience Analytics",
        tag: "Performance Insights",
        desc: "Tracking viewer retention, attention heatmaps, and campaign engagement depth.",
        image: "sixthiinth.jpeg",
        icon: "fa-chart-bar"
      },
      {
        title: "Content Resonance Index",
        tag: "Impact Assessment",
        desc: "Qualitative and quantitative evaluation of brand recall and emotional response.",
        image: "18th.jpeg",
        icon: "fa-heartbeat"
      },
      {
        title: "Multi-Variant Testing",
        tag: "Optimization",
        desc: "Data-driven A/B testing of creative hooks, pacing, and calls to action.",
        image: "19th.jpeg",
        icon: "fa-vials"
      },
      {
        title: "ROI & Conversion Metrics",
        tag: "Value Tracking",
        desc: "Measuring campaign attribution, lead conversions, and brand equity growth.",
        image: "20th.jpeg",
        icon: "fa-chart-line"
      }
    ]
  },
  {
    stamp: "STAGE // 06",
    title: "BUILDING ASSETS",
    text: "We build an evolving audiovisual asset library, while capturing creative codes, narrative principles, production knowledge, and learnings from every campaign.",
    options: [
      {
        title: "Digital Vault & Archiving",
        tag: "Asset Preservation",
        desc: "Secure, structured cloud vaulting of raw footage, project files, and master deliverables.",
        image: "21th.jpeg",
        icon: "fa-box-archive"
      },
      {
        title: "Modular Brand Libraries",
        tag: "Reusable Elements",
        desc: "Organizing 3D models, motion graphics, and audio stems for future campaign speed.",
        image: "22nd.jpeg",
        icon: "fa-layer-group"
      },
      {
        title: "Smart Metadata Tagging",
        tag: "Instant Retrieval",
        desc: "AI-assisted tagging of scenes, talent, products, and locations for rapid search.",
        image: "23rd.jpeg",
        icon: "fa-tags"
      },
      {
        title: "Creative Playbook",
        tag: "Knowledge Transfer",
        desc: "Documenting technical workflows, creative codes, and strategic learnings per brand.",
        image: "24th.jpeg",
        icon: "fa-book-open"
      }
    ]
  }
];

let currentStageIndex = 0;
let currentActiveOptionIndex = 0;

function selectHudStep(index) {
  currentStageIndex = index;
  currentActiveOptionIndex = 0;

  if (typeof playUICardClickSound === 'function') {
    try { playUICardClickSound(); } catch(e){}
  }

  const stepNodes = document.querySelectorAll('.hud-step-node');
  stepNodes.forEach((node, idx) => {
    if (idx === index) {
      node.classList.add('active');
    } else {
      node.classList.remove('active');
    }
  });

  const data = pipelineStepsData[index];
  if (!data) return;

  const stampEl = document.getElementById('console-stage-stamp');
  const titleEl = document.getElementById('console-stage-title');
  const textEl = document.getElementById('console-stage-text');

  if (stampEl) stampEl.textContent = data.stamp;
  if (titleEl) titleEl.textContent = data.title;
  if (textEl) textEl.textContent = data.text;

  renderStageDeliverables(data);
}

function renderStageDeliverables(data) {
  const gridEl = document.getElementById('stage-deliverables-grid');

  if (gridEl) {
    gridEl.innerHTML = data.options.map((opt, idx) => `
      <div class="deliverable-card ${idx === currentActiveOptionIndex ? 'active-option' : ''}" onclick="selectDeliverableOption(${idx})">
        <div class="deliverable-card-media">
          <img src="${opt.image}" alt="${opt.title}" loading="lazy" />
          <div class="deliverable-media-overlay"></div>
          <span class="deliverable-tag"><i class="fas ${opt.icon}"></i> ${opt.tag}</span>
        </div>
        <div class="deliverable-card-body">
          <h4 class="deliverable-title">${opt.title}</h4>
          <p class="deliverable-desc">${opt.desc}</p>
        </div>
      </div>
    `).join('');
  }
}

function selectDeliverableOption(optIndex) {
  currentActiveOptionIndex = optIndex;
  const cards = document.querySelectorAll('.deliverable-card');
  cards.forEach((c, idx) => {
    if (idx === optIndex) c.classList.add('active-option');
    else c.classList.remove('active-option');
  });
  if (typeof playSciFiChirpSound === 'function') {
    try { playSciFiChirpSound(); } catch(e){}
  }
}

window.selectHudStep = selectHudStep;
window.selectDeliverableOption = selectDeliverableOption;

/* ==========================================================================
   AUTHENTIC VINTAGE TV SOUND EFFECTS (WEB AUDIO SYNTHESIZER)
   ========================================================================== */
var globalAudioCtx = typeof globalAudioCtx !== 'undefined' ? globalAudioCtx : null;

var tvStaticLoopSource = null;
var tvStaticGainNode = null;
var isTvStaticPlaying = false;

function playTvChannelChangeSound() {
  try {
    if (!globalAudioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) globalAudioCtx = new AudioContext();
    }
    if (globalAudioCtx && globalAudioCtx.state === 'suspended') {
      globalAudioCtx.resume();
    }
    if (!globalAudioCtx) return;

    const now = globalAudioCtx.currentTime;

    // 1. Heavy Mechanical TV Knob Dial Clack
    const osc = globalAudioCtx.createOscillator();
    const gain = globalAudioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(28, now + 0.1);

    gain.gain.setValueAtTime(0.75, now);
    gain.gain.exponentialRampToValueAtTime(0.005, now + 0.1);

    osc.connect(gain);
    gain.connect(globalAudioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.1);

    // 2. Metallic Latch Switch Impulse
    const oscSnap = globalAudioCtx.createOscillator();
    const gainSnap = globalAudioCtx.createGain();
    oscSnap.type = 'square';
    oscSnap.frequency.setValueAtTime(1800, now);
    oscSnap.frequency.exponentialRampToValueAtTime(120, now + 0.04);

    gainSnap.gain.setValueAtTime(0.4, now);
    gainSnap.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    oscSnap.connect(gainSnap);
    gainSnap.connect(globalAudioCtx.destination);
    oscSnap.start(now);
    oscSnap.stop(now + 0.04);

    // 3. AUTHENTIC CRT TV NO SIGNAL STATIC WHITE NOISE "SHHHHH" BURST (350ms)
    const duration = 0.35; // 350ms static snow hiss
    const bufferSize = Math.floor(globalAudioCtx.sampleRate * duration);
    const buffer = globalAudioCtx.createBuffer(1, bufferSize, globalAudioCtx.sampleRate);
    const output = buffer.getChannelData(0);

    // Generate textured analog white noise static snow
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      // Pinkish/white analog noise filtering for true TV "shhhhh" sound
      output[i] = (lastOut * 0.45) + (white * 0.55);
      lastOut = output[i];
    }

    const whiteNoise = globalAudioCtx.createBufferSource();
    whiteNoise.buffer = buffer;

    // Dual-stage CRT tuner bandpass filter (850Hz center with subtle sweep)
    const filter = globalAudioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(750, now);
    filter.frequency.exponentialRampToValueAtTime(1250, now + 0.15);
    filter.frequency.exponentialRampToValueAtTime(850, now + 0.35);
    filter.Q.setValueAtTime(1.1, now);

    // 60Hz CRT Mains Hum Layer
    const humOsc = globalAudioCtx.createOscillator();
    const humGain = globalAudioCtx.createGain();
    humOsc.type = 'sawtooth';
    humOsc.frequency.setValueAtTime(60, now);
    humGain.gain.setValueAtTime(0.08, now);
    humGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    humOsc.connect(humGain);
    humGain.connect(globalAudioCtx.destination);
    humOsc.start(now);
    humOsc.stop(now + 0.35);

    const noiseGain = globalAudioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.45, now); // Strong, clear "shhhhh" sound
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    whiteNoise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(globalAudioCtx.destination);

    whiteNoise.start(now);
    whiteNoise.stop(now + 0.35);

  } catch (e) {
    console.warn('TV Sound Effect Exception:', e);
  }
}

function toggleContinuousTvStatic() {
  try {
    if (!globalAudioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) globalAudioCtx = new AudioContext();
    }
    if (globalAudioCtx && globalAudioCtx.state === 'suspended') {
      globalAudioCtx.resume();
    }

    if (isTvStaticPlaying) {
      if (tvStaticGainNode) {
        tvStaticGainNode.gain.exponentialRampToValueAtTime(0.0001, globalAudioCtx.currentTime + 0.2);
        setTimeout(() => {
          if (tvStaticLoopSource) {
            tvStaticLoopSource.stop();
            tvStaticLoopSource = null;
          }
        }, 220);
      }
      isTvStaticPlaying = false;
      return false;
    } else {
      const bufferSize = globalAudioCtx.sampleRate * 2; // 2 sec loop
      const buffer = globalAudioCtx.createBuffer(1, bufferSize, globalAudioCtx.sampleRate);
      const output = buffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut * 0.45) + (white * 0.55);
        lastOut = output[i];
      }

      tvStaticLoopSource = globalAudioCtx.createBufferSource();
      tvStaticLoopSource.buffer = buffer;
      tvStaticLoopSource.loop = true;

      const filter = globalAudioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(950, globalAudioCtx.currentTime);
      filter.Q.setValueAtTime(1.2, globalAudioCtx.currentTime);

      tvStaticGainNode = globalAudioCtx.createGain();
      tvStaticGainNode.gain.setValueAtTime(0.18, globalAudioCtx.currentTime);

      tvStaticLoopSource.connect(filter);
      filter.connect(tvStaticGainNode);
      tvStaticGainNode.connect(globalAudioCtx.destination);

      tvStaticLoopSource.start();
      isTvStaticPlaying = true;
      return true;
    }
  } catch (e) {
    console.warn('Continuous Static Exception:', e);
    return false;
  }
}
window.toggleContinuousTvStatic = toggleContinuousTvStatic;

function triggerTvStaticGlitch() {
  const glitch = document.getElementById('tvStaticGlitch');
  if (glitch) {
    glitch.classList.add('active');
    setTimeout(() => {
      glitch.classList.remove('active');
    }, 180);
  }
}

/* ==========================================================================
   INTERACTIVE RETRO TV SLIDER CONTROLLER
   ========================================================================== */
var currentCinemaIndex = 0;
var cinemaSlideInterval = null;

function goToCinemaSlide(index, userInitiated = false) {
  const slides = document.querySelectorAll('#cinema-main-stage .cinema-slide');
  
  if (!slides.length) return;
  
  currentCinemaIndex = (index + slides.length) % slides.length;

  if (userInitiated) {
    playTvChannelChangeSound();
  }
  triggerTvStaticGlitch();
  
  slides.forEach((slide, idx) => {
    if (idx === currentCinemaIndex) {
      slide.classList.add('active');
      const video = slide.querySelector('video');
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    } else {
      slide.classList.remove('active');
    }
  });

  resetCinemaTimer();
}

function nextCinemaSlide() {
  goToCinemaSlide(currentCinemaIndex + 1, true);
}

function prevCinemaSlide() {
  goToCinemaSlide(currentCinemaIndex - 1, true);
}

function resetCinemaTimer() {
  if (cinemaSlideInterval) clearInterval(cinemaSlideInterval);
  cinemaSlideInterval = setInterval(() => {
    goToCinemaSlide(currentCinemaIndex + 1, false);
  }, 7000);
}

document.addEventListener('DOMContentLoaded', () => {
  goToCinemaSlide(0, false);
});

document.addEventListener('DOMContentLoaded', () => {
  // Force page scroll restoration to top on load
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);

  initCustomCursor();
  initMenuDrawer();
  initMobileAppLogic();
  initMosaicFilters();
  initVFXNavbar();
  initBackgroundVideo();
  initInteractiveSandbox();
  initPortfolioFilters();
  initCinemaModal();
  initProposalForm();
  initHero3DCard();
  initCardHoverSoundEffects();
  // initCyberHouseEngine();
  
  // Set default view on load (prevent initial scroll)
  switchDivision('vfx', true);
  selectTrainingTrack('track1');
  
  const savedLang = localStorage.getItem('vfx_lang') || 'fr';
  setLanguage(savedLang);
});

/* --------------------------------------------------------------------------
   0. NAVIGATION SCROLL HELPER
   -------------------------------------------------------------------------- */
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

/* --------------------------------------------------------------------------
   0.5 MOBILE APP-LIKE BEHAVIORS & HOOKS
   -------------------------------------------------------------------------- */
function initMobileAppLogic() {
  // Mobile Bottom Sheet Drawer Toggle
  const openFilterBtn = document.getElementById('open-filter-btn');
  const closeFilterBtn = document.getElementById('close-filter-btn');
  const filterSheet = document.getElementById('mobile-filter-sheet');
  const resetBtnMobile = document.getElementById('btn-reset-filters-mobile');

  if (openFilterBtn && filterSheet) {
    openFilterBtn.addEventListener('click', () => {
      filterSheet.classList.add('open');
    });
  }

  if (closeFilterBtn && filterSheet) {
    closeFilterBtn.addEventListener('click', () => {
      filterSheet.classList.remove('open');
    });
  }

  if (resetBtnMobile && filterSheet) {
    resetBtnMobile.addEventListener('click', () => {
      filterSheet.classList.remove('open');
    });
  }

  // Mobile Bottom Tab Navigation Clicks
  const tabItems = document.querySelectorAll('.mobile-tab-item');
  tabItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('href').substring(1);
      scrollToSection(targetId);
      
      // Update active state manually on click
      tabItems.forEach(t => t.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // IntersectionObserver to sync tab states automatically as user scrolls
  const sections = ['home', 'studio', 'showcase', 'technology', 'contact'].map(id => document.getElementById(id)).filter(el => el !== null);
  
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger near center screen
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          tabItems.forEach(t => {
            if (t.getAttribute('href') === `#${sectionId}`) {
              t.classList.add('active');
            } else {
              t.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }
}

/* --------------------------------------------------------------------------
   1. CUSTOM CURSOR TRAILING EFFECT
   -------------------------------------------------------------------------- */
function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  if (!cursor) return;

  // Disable custom cursor on mobile or touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth <= 768) {
    cursor.style.display = 'none';
    return;
  }

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    let dx = mouseX - cursorX;
    let dy = mouseY - cursorY;
    cursorX += dx * 0.15;
    cursorY += dy * 0.15;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  const hoverTargets = 'a, button, select, input, textarea, .apple-work-card, .dneg-text-capability, .dneg-award-card, .house-nav-tab, .slate-cell, .slate-text-line, .division-watch-showreel-box, .hero-scroll-indicator';
  
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.add('hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.remove('hover');
    }
  });
}

/* --------------------------------------------------------------------------
   2. MOBILE/FULL-SCREEN NAV DRAWER OVERLAY
   -------------------------------------------------------------------------- */
function initMenuDrawer() {
  const burgerBtn = document.getElementById('burger-menu-btn');
  const drawer = document.getElementById('menu-drawer');
  
  if (burgerBtn && drawer) {
    burgerBtn.addEventListener('click', () => {
      burgerBtn.classList.toggle('active');
      drawer.classList.toggle('open');
    });
  }
}

function toggleMenuDrawer() {
  const burgerBtn = document.getElementById('burger-menu-btn');
  const drawer = document.getElementById('menu-drawer');
  if (burgerBtn && drawer) {
    burgerBtn.classList.remove('active');
    drawer.classList.remove('open');
  }
}

function handleMenuDivisionClick(divisionName) {
  toggleMenuDrawer();
  switchDivision(divisionName);
}

/* --------------------------------------------------------------------------
   2.5 DNEG DYNAMIC DIVISION HERO SWITCHER
   -------------------------------------------------------------------------- */
function switchDivision(divisionName, preventScroll = false) {
  currentCategoryFilter = divisionName;

  // 1. Update Showcase Hero Banner text & video
  const heroTitle = document.getElementById('division-hero-title');
  const heroSubtitle = document.getElementById('division-hero-subtitle');
  const heroVideo = document.getElementById('division-hero-video-player');
  
  const data = {
    vfx: {
      title: 'IMMERSIO VFX',
      subtitle: 'FURTHERING THE ART OF VISUAL EFFECTS.',
      video: 'showreelone.mp4'
    },
    animation: {
      title: 'IMMERSIO ANIMATION',
      subtitle: 'FURTHERING THE ART OF ANIMATION.',
      video: 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreelone.mp4'
    },
    simulation: {
      title: 'IMMERSIO SIMULATION',
      subtitle: 'MISSION-READY FIDELITY IN REAL-TIME.',
      video: 'showreel_2.mp4'
    },
    art: {
      title: 'IMMERSIO ART',
      subtitle: 'WHERE WORLDS BEGIN',
      video: 'showreelone.mp4'
    },
    technology: {
      title: 'IMMERSIO TECH',
      subtitle: 'THE ENGINE POWERING THE FUTURE OF STORYTELLING.',
      video: 'showreel_2.mp4'
    }
  };
  
  const info = data[divisionName] || data.vfx;
  if (heroTitle) heroTitle.textContent = info.title;
  if (heroSubtitle) heroSubtitle.textContent = info.subtitle;
  if (heroVideo) {
    heroVideo.src = info.video;
    heroVideo.currentTime = 0;
    heroVideo.play().catch(() => {});
  }
  
  // 2. Set active state on standard filter buttons if visible
  const filterButtons = document.querySelectorAll('.apple-filter-btn');
  filterButtons.forEach(btn => {
    if (btn.getAttribute('data-filter') === divisionName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // 2.5 Update floating switcher active button state
  const divButtons = document.querySelectorAll('.div-switch-btn');
  divButtons.forEach(btn => {
    if (btn.getAttribute('data-div') === divisionName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // 2.6 Toggle DNEG Art department vs standard posters grid
  const posterView = document.getElementById('showcase-poster-view');
  const artView = document.getElementById('showcase-art-view');
  if (divisionName === 'art') {
    if (posterView) posterView.style.display = 'none';
    if (artView) {
      artView.style.display = 'block';
      artView.style.opacity = '0';
      setTimeout(() => { artView.style.opacity = '1'; }, 50);
    }
  } else {
    if (artView) artView.style.display = 'none';
    if (posterView) {
      posterView.style.display = 'block';
      posterView.style.opacity = '0';
      setTimeout(() => { posterView.style.opacity = '1'; }, 50);
    }
  }

  // 2.7 Update division-collage-grid class state
  const collageBg = document.getElementById('division-collage-bg');
  if (collageBg) {
    collageBg.className = `division-collage-grid division-${divisionName}`;
  }
  
  // 3. Apply Sony Poster Grid filter logic
  applyMosaicFilters();
  
  // 4. Scroll smoothly to showcase section (only if not initial load)
  if (!preventScroll) {
    scrollToSection('showcase');
  }
}

/* --------------------------------------------------------------------------
   2.8 SONY PICTURES POSTERS FILTER SYSTEM
   -------------------------------------------------------------------------- */
function initMosaicFilters() {
  const searchInput = document.getElementById('poster-search');
  const searchInputMobile = document.getElementById('poster-search-mobile');
  const checkboxes = document.querySelectorAll('.filter-checkbox');
  const resetBtn = document.getElementById('btn-reset-filters');
  const resetBtnMobile = document.getElementById('btn-reset-filters-mobile');
  
  if (searchInput) {
    searchInput.addEventListener('input', applyMosaicFilters);
  }
  if (searchInputMobile) {
    searchInputMobile.addEventListener('input', applyMosaicFilters);
  }
  
  checkboxes.forEach(cb => {
    cb.addEventListener('change', applyMosaicFilters);
  });
  
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (searchInputMobile) searchInputMobile.value = '';
      checkboxes.forEach(cb => cb.checked = false);
      switchDivision('vfx');
    });
  }
  if (resetBtnMobile) {
    resetBtnMobile.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (searchInputMobile) searchInputMobile.value = '';
      checkboxes.forEach(cb => cb.checked = false);
      switchDivision('vfx');
    });
  }
}

function applyMosaicFilters() {
  const searchInput = document.getElementById('poster-search');
  const searchInputMobile = document.getElementById('poster-search-mobile');
  let searchQuery = '';
  if (window.innerWidth <= 768 && searchInputMobile) {
    searchQuery = searchInputMobile.value.toLowerCase().trim();
  } else if (searchInput) {
    searchQuery = searchInput.value.toLowerCase().trim();
  }
  
  const checkboxes = document.querySelectorAll('.filter-checkbox');
  const activeAvailabilities = [];
  const activeTechs = [];
  
  checkboxes.forEach(cb => {
    if (cb.checked) {
      if (cb.getAttribute('data-type') === 'availability') {
        activeAvailabilities.push(cb.value);
      } else if (cb.getAttribute('data-type') === 'tech') {
        activeTechs.push(cb.value);
      }
    }
  });
  
  const cards = document.querySelectorAll('#poster-grid .apple-work-card');
  
  cards.forEach(card => {
    const title = card.querySelector('.work-title').textContent.toLowerCase();
    const desc = card.querySelector('.work-desc').textContent.toLowerCase();
    const category = card.getAttribute('data-category');
    const availability = card.getAttribute('data-availability');
    const tech = card.getAttribute('data-tech');
    
    // Category match
    const matchesCategory = (currentCategoryFilter === 'all' || category === currentCategoryFilter);
    
    // Name search match
    const matchesSearch = title.includes(searchQuery) || desc.includes(searchQuery);
    
    // Availability checkbox match
    const matchesAvailability = (activeAvailabilities.length === 0 || activeAvailabilities.includes(availability));
    
    // Tech stack checkbox match
    const matchesTech = (activeTechs.length === 0 || activeTechs.includes(tech));
    
    if (matchesCategory && matchesSearch && matchesAvailability && matchesTech) {
      card.style.display = 'block';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      }, 50);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.95)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 300);
    }
  });
}

/* --------------------------------------------------------------------------
   3. ADAPTIVE NAVBAR WITH SCROLL DETECTION & SECTION THEMING
   -------------------------------------------------------------------------- */
function initVFXNavbar() {
  const navbar = document.getElementById('main-navbar');
  const navLinks = document.querySelectorAll('.vfx-nav-link');
  const sections = document.querySelectorAll('section');
  
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 90) {
      if (currentScrollY > lastScrollY) {
        navbar.classList.add('scrolling-down');
        navbar.classList.remove('scrolling-up');
      } else {
        navbar.classList.remove('scrolling-down');
        navbar.classList.add('scrolling-up');
      }
    } else {
      navbar.classList.remove('scrolling-down');
      navbar.classList.remove('scrolling-up');
    }
    
    lastScrollY = currentScrollY;

    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (currentScrollY >= sectionTop && currentScrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    const lightSections = ['studio', 'technology', 'contact'];
    if (lightSections.includes(currentSectionId)) {
      navbar.classList.add('light-section');
    } else {
      navbar.classList.remove('light-section');
    }

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}


function initBackgroundVideo() {
  const heroVideo = document.getElementById('hero-video');
  const soundToggleBtn = document.getElementById('sound-toggle');
  const soundToggleHero = document.getElementById('sound-toggle-hero');
  const soundIcon = document.getElementById('sound-icon');
  const soundIconHero = document.getElementById('sound-icon-hero');

  const playToggleBtn = document.getElementById('video-play-toggle');
  const playIcon = document.getElementById('play-icon');

  if (heroVideo) {
    heroVideo.play().catch(() => {
      document.addEventListener('click', () => { heroVideo.play(); }, { once: true });
    });
  }

  function toggleAudio() {
    if (!heroVideo) return;
    heroVideo.muted = !heroVideo.muted;
    const iconClass = heroVideo.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
    if (soundIcon) soundIcon.className = iconClass;
    if (soundIconHero) soundIconHero.className = iconClass;
  }

  if (soundToggleBtn) soundToggleBtn.addEventListener('click', toggleAudio);
  if (soundToggleHero) soundToggleHero.addEventListener('click', toggleAudio);

  if (heroVideo && playToggleBtn) {
    playToggleBtn.addEventListener('click', () => {
      if (heroVideo.paused) {
        heroVideo.play();
        if (playIcon) playIcon.className = 'fas fa-pause';
      } else {
        heroVideo.pause();
        if (playIcon) playIcon.className = 'fas fa-play';
      }
    });
  }
}

/* --------------------------------------------------------------------------
   3. INTERACTIVE REAL-TIME SANDBOX WIDGET
   -------------------------------------------------------------------------- */
function initInteractiveSandbox() {
  const focalSlider = document.getElementById('range-focal');
  const exposureSlider = document.getElementById('range-exposure');
  const chromaticSlider = document.getElementById('range-chromatic');
  const noiseSlider = document.getElementById('range-noise');
  const vignetteSlider = document.getElementById('range-vignette');

  const valFocal = document.getElementById('val-focal');
  const valExposure = document.getElementById('val-exposure');
  const valChromatic = document.getElementById('val-chromatic');
  const valNoise = document.getElementById('val-noise');
  const valVignette = document.getElementById('val-vignette');

  const sandboxVideo = document.getElementById('sandbox-viewport-video');
  const btnReset = document.getElementById('btn-reset-sandbox');
  const viewportFrame = document.querySelector('.apple-viewport-frame');

  // Insert procedural overlays inside viewport frame
  let noiseOverlay = null;
  let vignetteOverlay = null;

  if (viewportFrame) {
    noiseOverlay = viewportFrame.querySelector('.sandbox-noise-overlay');
    if (!noiseOverlay) {
      noiseOverlay = document.createElement('div');
      noiseOverlay.className = 'sandbox-noise-overlay';
      viewportFrame.appendChild(noiseOverlay);
    }
    vignetteOverlay = viewportFrame.querySelector('.sandbox-vignette-overlay');
    if (!vignetteOverlay) {
      vignetteOverlay = document.createElement('div');
      vignetteOverlay.className = 'sandbox-vignette-overlay';
      viewportFrame.appendChild(vignetteOverlay);
    }
  }

  function updateViewport() {
    if (!sandboxVideo) return;

    const focal = focalSlider ? parseInt(focalSlider.value) : 35;
    const exposure = exposureSlider ? parseFloat(exposureSlider.value) : 1.0;
    const chromatic = chromaticSlider ? parseInt(chromaticSlider.value) : 0;
    const noise = noiseSlider ? parseFloat(noiseSlider.value) : 0.05;
    const vignette = vignetteSlider ? parseFloat(vignetteSlider.value) : 0.3;

    // Update text labels
    if (valFocal) valFocal.textContent = `${focal}mm`;
    if (valExposure) valExposure.textContent = exposure.toFixed(1);
    if (valChromatic) valChromatic.textContent = `${chromatic}px`;
    if (valNoise) valNoise.textContent = noise.toFixed(2);
    if (valVignette) valVignette.textContent = vignette.toFixed(2);

    // Apply overlays opacity
    if (noiseOverlay) noiseOverlay.style.opacity = noise;
    if (vignetteOverlay) vignetteOverlay.style.opacity = vignette;

    // Apply focal zoom (scale)
    // At 35mm, scale is 1.0. At 200mm, zoom in to 2.5x. At 18mm, zoom out to 0.85x.
    const scaleVal = 1 + (focal - 35) / 165 * 1.5;
    sandboxVideo.style.transform = `scale(${scaleVal})`;

    // Apply WebGL Exposure & Chromatic effects via CSS filters
    const brightnessVal = exposure;
    const blurVal = chromatic * 0.4;
    const hueVal = chromatic * 1.5;
    sandboxVideo.style.filter = `brightness(${brightnessVal}) blur(${blurVal}px) hue-rotate(${hueVal}deg)`;
  }

  // Play sandbox video if present
  if (sandboxVideo) {
    sandboxVideo.play().catch(() => {});
  }

  // Bind input events
  if (focalSlider) focalSlider.addEventListener('input', updateViewport);
  if (exposureSlider) exposureSlider.addEventListener('input', updateViewport);
  if (chromaticSlider) chromaticSlider.addEventListener('input', updateViewport);
  if (noiseSlider) noiseSlider.addEventListener('input', updateViewport);
  if (vignetteSlider) vignetteSlider.addEventListener('input', updateViewport);

  // Bind reset button
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (focalSlider) focalSlider.value = 35;
      if (exposureSlider) exposureSlider.value = 1.0;
      if (chromaticSlider) chromaticSlider.value = 0;
      if (noiseSlider) noiseSlider.value = 0.05;
      if (vignetteSlider) vignetteSlider.value = 0.3;
      updateViewport();
    });
  }

  // Run once to initialize
  updateViewport();
}

/* --------------------------------------------------------------------------
   4. PORTFOLIO SHOWCASE FILTERS
   -------------------------------------------------------------------------- */
function initPortfolioFilters() {
  const filterTabs = document.querySelectorAll('.apple-filter-btn');
  const portfolioCards = document.querySelectorAll('.apple-work-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. CINEMA LIGHTBOX MODAL PLAYER
   -------------------------------------------------------------------------- */
function initCinemaModal() {
  const modal = document.getElementById('cinema-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeCinemaModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeCinemaModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCinemaModal();
  });
}

function openCinemaModal(title, description) {
  const modal = document.getElementById('cinema-modal');
  const modalTitle = document.getElementById('modal-project-title');
  const modalDesc = document.getElementById('modal-project-desc');
  const modalVideo = document.getElementById('modal-video-player');

  if (modalTitle) modalTitle.textContent = title;
  if (modalDesc) modalDesc.textContent = description;

  if (modal) modal.classList.add('active');
  if (modalVideo) {
    modalVideo.currentTime = 0;
    modalVideo.play();
  }
}

function closeCinemaModal() {
  const modal = document.getElementById('cinema-modal');
  const modalVideo = document.getElementById('modal-video-player');

  if (modal) modal.classList.remove('active');
  if (modalVideo) modalVideo.pause();
}

/* --------------------------------------------------------------------------
   6. PROPOSAL / APPLICATION FORM SUBMISSION
   -------------------------------------------------------------------------- */
function initProposalForm() {
  const form = document.getElementById('proposal-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('.vfx-btn-submit-blue');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<span>TRANSMITTING APPLICATION...</span>';
    submitBtn.style.opacity = '0.7';

    setTimeout(() => {
      submitBtn.innerHTML = '<span>APPLICATION TRANSMITTED SUCCESSFULLY ✓</span>';
      submitBtn.style.background = '#34d399';
      submitBtn.style.color = '#000000';
      form.reset();

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.opacity = '1';
        submitBtn.style.background = '';
        submitBtn.style.color = '';
      }, 4000);
    }, 1800);
  });
}

/* --------------------------------------------------------------------------
   7. DYNAMIC INTERACTIVE 3D TILT FOR HERO EXTRUDED CARD
   -------------------------------------------------------------------------- */
function initHero3DCard() {
  const heroSection = document.getElementById('home');
  const heroCard = document.querySelector('.apple-hero-content');

  if (!heroSection || !heroCard) return;

  heroCard.addEventListener('click', (e) => {
    if (e.target.closest('.apple-btn-white-pill') || e.target.closest('.apple-btn-glass-pill')) {
      return;
    }
    heroCard.classList.toggle('card-extruded-active');
  });

  heroSection.addEventListener('mousemove', (e) => {
    if (window.innerWidth <= 900 || heroCard.classList.contains('card-extruded-active')) return;
    const rect = heroSection.getBoundingClientRect();
    const distFromCenter = Math.abs(e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);

    const zOffset = 65 + (1 - Math.min(distFromCenter, 1)) * 30;

    heroCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(${zOffset}px)`;
  });

  heroSection.addEventListener('mouseleave', () => {
    if (window.innerWidth <= 900 || heroCard.classList.contains('card-extruded-active')) return;
    heroCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(65px)';
  });
}

/* --------------------------------------------------------------------------
   8. SCI-FI GAME UI HOVER & SELECTION SOUND SYNTHESIZER (WEB AUDIO API)
   -------------------------------------------------------------------------- */
var globalAudioCtx = null;

function getUIAudioContext() {
  if (!globalAudioCtx) {
    const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
    if (AudioCtxClass) {
      globalAudioCtx = new AudioCtxClass();
    }
  }
  if (globalAudioCtx && globalAudioCtx.state === 'suspended') {
    globalAudioCtx.resume();
  }
  return globalAudioCtx;
}

// Crisp Sci-Fi Game UI Menu Hover Selection Sound (Pitch Sweep 750Hz -> 1350Hz)
function playUICardHoverSound() {
  try {
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo && heroVideo.muted) return;

    const ctx = getUIAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(750, now);
    osc.frequency.exponentialRampToValueAtTime(1350, now + 0.05);

    gain.gain.setValueAtTime(0.045, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.06);
  } catch (e) {
    // Non-blocking Web Audio error handler
  }
}

// Crisp Sci-Fi Game Selection Click Sound (Pitch Sweep 1300Hz -> 650Hz)
function playUICardClickSound() {
  try {
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo && heroVideo.muted) return;

    const ctx = getUIAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1300, now);
    osc.frequency.exponentialRampToValueAtTime(650, now + 0.08);

    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  } catch (e) {}
}

function initCardHoverSoundEffects() {
  // Target all interactive cards and elements across the website
  const cardSelectors = [
    '.apple-pro-card', '.dneg-text-capability', '.dneg-award-card', '.drawer-main-link', '.secondary-link-item', '.hero-scroll-indicator', '.dneg-text-capability', '.dneg-award-card', '.drawer-main-link', '.secondary-link-item', '.hero-scroll-indicator', '.dneg-text-capability', '.dneg-award-card', '.drawer-main-link', '.secondary-link-item', '.hero-scroll-indicator', '.dneg-text-capability', '.dneg-award-card', '.drawer-main-link', '.secondary-link-item', '.hero-scroll-indicator', '.dneg-text-capability', '.dneg-award-card', '.drawer-main-link', '.secondary-link-item', '.hero-scroll-indicator', '.dneg-text-capability', '.dneg-award-card', '.drawer-main-link', '.secondary-link-item', '.drawer-main-link', '.secondary-link-item', '.dneg-award-card', '.drawer-main-link', '.secondary-link-item', '.dneg-award-card', '.dneg-award-card', '.dneg-news-container', '.dneg-award-card', '.dneg-news-container',
    '.apple-strip-card',
    '.training-card',
    '.apple-work-card',
    '.apple-hero-3d-card',
    '.apple-form-card',
    '.apple-btn-white-pill',
    '.apple-btn-glass-pill',
    '.apple-btn-secondary-sm',
    '.vfx-btn-submit-blue',
    '.apple-filter-btn',
    '.vfx-nav-link'
  ].join(', ');

  const cards = document.querySelectorAll(cardSelectors);

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      playUICardHoverSound();
    });

    card.addEventListener('click', () => {
      playUICardClickSound();
    });
  });

  // Dynamic delegation for dynamic elements
  document.addEventListener('mouseover', (e) => {
    const targetCard = e.target.closest('.apple-pro-card, .apple-strip-card, .training-card, .apple-work-card, .apple-filter-btn, .house-wall, .house-nav-tab');
    if (targetCard && !targetCard.dataset.soundBound) {
      targetCard.dataset.soundBound = 'true';
      targetCard.addEventListener('mouseenter', () => playUICardHoverSound());
      targetCard.addEventListener('click', () => playUICardClickSound());
    }
  });
}

/* --------------------------------------------------------------------------
   8.1 INLINE LOCAL CARD VIDEO PLAYER (Plays showreelone.mp4 inside card box)
   -------------------------------------------------------------------------- */
function playCardLocalVideo(cardElement, videoSrc) {
  if (!cardElement) return;

  const imgContainer = cardElement.querySelector('.work-img-container');
  if (!imgContainer) return;

  if (typeof playUICardClickSound === 'function') playUICardClickSound();

  // If video is already playing inside this card, return
  if (imgContainer.querySelector('.inline-card-video')) return;

  // Create HTML5 video element (Cloud CDN stream)
  const video = document.createElement('video');
  video.className = 'inline-card-video';
  video.src = videoSrc || 'https://raw.githubusercontent.com/JohnOkenyi/immersio-suprema/main/showreelone.mp4';
  video.autoplay = true;
  video.controls = true;
  video.playsInline = true;
  video.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; border-radius: 20px; z-index: 10;';

  // Create close button
  const closeBtn = document.createElement('button');
  closeBtn.className = 'close-inline-video-btn';
  closeBtn.innerHTML = '<i class="fas fa-times"></i> Close Video';
  closeBtn.onclick = function(e) {
    e.stopPropagation();
    video.pause();
    video.remove();
    closeBtn.remove();
  };

  imgContainer.style.position = 'relative';
  imgContainer.appendChild(video);
  imgContainer.appendChild(closeBtn);
}

/* --------------------------------------------------------------------------
   9. PHOTOREALISTIC WEBGL THREE.JS 3D CLAPPERBOARD ARCHITECTURAL HOUSE ENGINE
   -------------------------------------------------------------------------- */
let threeScene, threeCamera, threeRenderer, houseGroup;
let targetHouseRotationY = -0.4;
let currentHouseRotationY = -0.4;
let houseAutoRotate = true;
let isDraggingHouse = false;
let startX = 0;
let previousRotationY = 0;

function rotateHouseToAngle(targetAngleRad) {
  targetHouseRotationY = (targetAngleRad * Math.PI) / 180;
  updateHouseNavTabs((targetAngleRad % 360 + 360) % 360);
}

function toggleHouseAutoRotate() {
  houseAutoRotate = !houseAutoRotate;
  const toggleBtn = document.getElementById('house-autorotate-toggle');
  if (toggleBtn) {
    if (houseAutoRotate) {
      toggleBtn.classList.add('active');
      toggleBtn.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Auto-Rotate: ON';
    } else {
      toggleBtn.classList.remove('active');
      toggleBtn.innerHTML = '<i class="fas fa-play"></i> Auto-Rotate: OFF';
    }
  }
}

function updateHouseNavTabs(angleDeg) {
  const tabs = document.querySelectorAll('.house-nav-tab:not(.auto-rotate-btn)');
  const normalized = ((angleDeg % 360) + 360) % 360;
  
  let activeIndex = 0;
  if (normalized >= 315 || normalized < 45) {
    activeIndex = 0;
  } else if (normalized >= 45 && normalized < 135) {
    activeIndex = 1;
  } else if (normalized >= 135 && normalized < 225) {
    activeIndex = 2;
  } else if (normalized >= 225 && normalized < 315) {
    activeIndex = 3;
  }

  tabs.forEach((tab, index) => {
    if (index === activeIndex) {
      tab.classList.add('active');
      const colors = ['#cca43b', '#ffdf7a', '#bf5af2', '#ff9f0a'];
      const activeColor = colors[activeIndex];
      tab.style.setProperty('--active-accent-color', activeColor);
      tab.style.setProperty('--active-shadow-glow', `0 0 16px ${activeColor}dd`);
    } else {
      tab.classList.remove('active');
      tab.style.removeProperty('--active-accent-color');
      tab.style.removeProperty('--active-shadow-glow');
    }
  });
}

function initCyberHouseEngine() {
  const container = document.getElementById('cyber-house-viewport');
  if (!container || typeof THREE === 'undefined') return;

  const width = container.clientWidth || window.innerWidth;
  const height = width < 480 ? 380 : width < 768 ? 440 : 560;

  // 1. Scene & Camera Setup (Calibrated for mobile responsiveness & desktop high-impact centering)
  threeScene = new THREE.Scene();
  threeScene.background = null;

  threeCamera = new THREE.PerspectiveCamera(36, width / height, 0.1, 1000);
  threeCamera.position.set(0, 0.8, width < 768 ? 26 : 22.5);
  threeCamera.lookAt(0, 0.3, 0);

  // 2. WebGL Renderer with Logarithmic Depth Buffer to Eliminate Z-Fighting Flicker
  threeRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, logarithmicDepthBuffer: true, powerPreference: 'high-performance' });
  threeRenderer.setSize(width, height);
  threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  threeRenderer.shadowMap.enabled = true;
  threeRenderer.shadowMap.type = THREE.PCFSoftShadowMap;

  container.innerHTML = '';
  container.appendChild(threeRenderer.domElement);

  // 3. Studio Lighting Rig
  const ambientLight = new THREE.AmbientLight(0x404054, 1.4);
  threeScene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
  keyLight.position.set(14, 20, 16);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 2048;
  keyLight.shadow.mapSize.height = 2048;
  threeScene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xff625a, 0.8);
  fillLight.position.set(-14, 10, -12);
  threeScene.add(fillLight);

  const entranceLight = new THREE.PointLight(0xffedd5, 1.2, 12);
  entranceLight.position.set(-3.0, -2.5, 6.0);
  threeScene.add(entranceLight);

  const garageLight = new THREE.PointLight(0xf97316, 1.0, 12);
  garageLight.position.set(3.0, -2.5, 6.0);
  threeScene.add(garageLight);

  // 4. Master 3D House Group
  houseGroup = new THREE.Group();
  houseGroup.position.set(0, -0.6, 0);
  threeScene.add(houseGroup);

  // 5. PBR Materials
  const matteConcreteMat = new THREE.MeshStandardMaterial({ color: 0x0c0b11, roughness: 0.18, metalness: 0.95 });
  const aluminumMat = new THREE.MeshStandardMaterial({ color: 0x1f1d24, roughness: 0.25, metalness: 0.92 });
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x070b19,
    transparent: true,
    opacity: 0.55,
    roughness: 0.08,
    metalness: 0.95,
    clearcoat: 1.0
  });
  const goldGlowMat = new THREE.MeshStandardMaterial({ color: 0xff625a, roughness: 0.1, metalness: 0.9, emissive: 0xff625a, emissiveIntensity: 1.2 });

  // Generate 4 Facade Materials for Each Surface Face (Cleaned & Focused)
  const frontMat = createSlateMaterial('house_wall_front_title', 'house_wall_front_desc', '#cca43b', 'front');
  const rightMat = createSlateMaterial('house_wall_right_title', 'house_wall_right_desc', '#ffdf7a', 'right');
  const backMat = createSlateMaterial('house_wall_back_title', 'house_wall_back_desc', '#bf5af2', 'back');
  const leftMat = createSlateMaterial('house_wall_left_title', 'house_wall_left_desc', '#ff9f0a', 'left');

  // 7. Solid Watertight House Geometry (Single Solid Flush Box Architecture)
  const houseMainBox = new THREE.Mesh(new THREE.BoxGeometry(11, 7.2, 7), matteConcreteMat);
  houseMainBox.castShadow = true;
  houseMainBox.receiveShadow = true;
  houseGroup.add(houseMainBox);

  // Front Slate Surface Facade (0°)
  frontSlateMesh = new THREE.Mesh(new THREE.PlaneGeometry(10.8, 7.0), frontMat);
  frontSlateMesh.position.set(0, 0, 3.52);
  houseGroup.add(frontSlateMesh);

  // Right Slate Surface Facade (90°)
  rightSlateMesh = new THREE.Mesh(new THREE.PlaneGeometry(6.8, 7.0), rightMat);
  rightSlateMesh.rotation.y = Math.PI / 2;
  rightSlateMesh.position.set(5.52, 0, 0);
  houseGroup.add(rightSlateMesh);

  // Back Slate Surface Facade (180°)
  backSlateMesh = new THREE.Mesh(new THREE.PlaneGeometry(10.8, 7.0), backMat);
  backSlateMesh.rotation.y = Math.PI;
  backSlateMesh.position.set(0, 0, -3.52);
  houseGroup.add(backSlateMesh);

  // Left Slate Surface Facade (-90°)
  leftSlateMesh = new THREE.Mesh(new THREE.PlaneGeometry(6.8, 7.0), leftMat);
  leftSlateMesh.rotation.y = -Math.PI / 2;
  leftSlateMesh.position.set(-5.52, 0, 0);
  houseGroup.add(leftSlateMesh);

  // 8. Hinged Top Clapstick Roof Structure (Attached with Metal Bracket & Bolts)
  const clapstickCanvas = document.createElement('canvas');
  clapstickCanvas.width = 512;
  clapstickCanvas.height = 64;
  const cctx = clapstickCanvas.getContext('2d');
  cctx.fillStyle = '#09090b';
  cctx.fillRect(0, 0, 512, 64);
  cctx.fillStyle = '#f8fafc';
  for (let i = 0; i < 8; i++) {
    cctx.beginPath();
    cctx.moveTo(i * 70 + 20, 0);
    cctx.lineTo(i * 70 + 60, 0);
    cctx.lineTo(i * 70 + 30, 64);
    cctx.lineTo(i * 70 - 10, 64);
    cctx.fill();
  }
  const clapstickTex = new THREE.CanvasTexture(clapstickCanvas);
  clapstickTex.wrapS = THREE.RepeatWrapping;
  clapstickTex.repeat.set(2, 1);
  const clapstickMat = new THREE.MeshStandardMaterial({
    map: clapstickTex,
    roughness: 0.4,
    metalness: 0.3,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1
  });

  // Fixed Base Eave Stick (Positioned at Z = 3.18)
  const fixedStick = new THREE.Mesh(new THREE.BoxGeometry(11.2, 1.2, 1.2), clapstickMat);
  fixedStick.position.set(0, 4.0, 3.18);
  houseGroup.add(fixedStick);

  // Angled Top Open Clapstick (Positioned at Z = 3.42 to prevent depth overlap flicker)
  const topStick = new THREE.Mesh(new THREE.BoxGeometry(11.2, 1.2, 1.2), clapstickMat);
  topStick.position.set(0.6, 5.2, 3.42);
  topStick.rotation.z = -0.26;
  houseGroup.add(topStick);

  // Metal Corner Hinge Bracket & 3 Stainless Bolts
  const hingePlate = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.2, 1.4), aluminumMat);
  hingePlate.position.set(-5.2, 4.5, 3.2);
  houseGroup.add(hingePlate);

  const boltGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.5, 16);
  const boltMat = new THREE.MeshStandardMaterial({ color: 0xff625a, roughness: 0.1, metalness: 0.9 });

  const b1 = new THREE.Mesh(boltGeo, boltMat); b1.rotation.x = Math.PI / 2; b1.position.set(-5.4, 5.0, 3.2); houseGroup.add(b1);
  const b2 = new THREE.Mesh(boltGeo, boltMat); b2.rotation.x = Math.PI / 2; b2.position.set(-5.0, 5.0, 3.2); houseGroup.add(b2);
  const b3 = new THREE.Mesh(boltGeo, boltMat); b3.rotation.x = Math.PI / 2; b3.position.set(-5.2, 4.0, 3.2); houseGroup.add(b3);

  // 9. Pedestal Turntable Base
  const pedestalBase = new THREE.Mesh(new THREE.CylinderGeometry(8.5, 9.0, 0.6, 64), aluminumMat);
  pedestalBase.position.set(0, -4.0, 0);
  houseGroup.add(pedestalBase);

  const glowRing = new THREE.Mesh(new THREE.TorusGeometry(8.2, 0.08, 16, 100), goldGlowMat);
  glowRing.rotation.x = Math.PI / 2;
  glowRing.position.set(0, -3.6, 0);
  houseGroup.add(glowRing);

  // 10. Cyber Particle System (floating particles around box)
  const particleCount = 120;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const speeds = [];

  for (let i = 0; i < particleCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 6 + Math.random() * 8;
    const x = Math.cos(angle) * radius;
    const y = -3.5 + Math.random() * 10;
    const z = Math.sin(angle) * radius;
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    speeds.push({
      y: 0.015 + Math.random() * 0.02,
      angleSpeed: 0.002 + Math.random() * 0.004,
      radius: radius,
      angle: angle,
      amplitude: 0.2 + Math.random() * 0.3,
      phase: Math.random() * Math.PI * 2
    });
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const pCanvas = document.createElement('canvas');
  pCanvas.width = 16;
  pCanvas.height = 16;
  const pCtx = pCanvas.getContext('2d');
  const pGrad = pCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
  pGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
  pGrad.addColorStop(0.3, 'rgba(204, 164, 59, 0.8)');
  pGrad.addColorStop(1, 'rgba(204, 164, 59, 0)');
  pCtx.fillStyle = pGrad;
  pCtx.fillRect(0, 0, 16, 16);
  const pTexture = new THREE.CanvasTexture(pCanvas);

  const particleMat = new THREE.PointsMaterial({
    size: 0.35,
    map: pTexture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    opacity: 0.85
  });

  const particleSystem = new THREE.Points(particleGeo, particleMat);
  threeScene.add(particleSystem);

  // 12. Render & Mouse Drag Event Loop
  function animateThree() {
    requestAnimationFrame(animateThree);

    if (houseAutoRotate && !isDraggingHouse) {
      targetHouseRotationY += 0.005;
    }

    currentHouseRotationY += (targetHouseRotationY - currentHouseRotationY) * 0.1;
    houseGroup.rotation.y = currentHouseRotationY;

    // Pulsate glow ring
    if (glowRing && glowRing.material) {
      glowRing.material.emissiveIntensity = 0.8 + Math.sin(Date.now() * 0.0025) * 0.4;
    }

    // Animate particles
    if (particleGeo) {
      const posArr = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const speed = speeds[i];
        speed.angle += speed.angleSpeed;
        posArr[i * 3 + 1] += speed.y;
        if (posArr[i * 3 + 1] > 6) {
          posArr[i * 3 + 1] = -3.5;
        }
        posArr[i * 3] = Math.cos(speed.angle) * speed.radius;
        posArr[i * 3 + 2] = Math.sin(speed.angle) * speed.radius;
        posArr[i * 3] += Math.sin(Date.now() * 0.001 + speed.phase) * speed.amplitude * 0.1;
      }
      particleGeo.attributes.position.needsUpdate = true;
    }

    const angleDeg = ((currentHouseRotationY * 180 / Math.PI) % 360 + 360) % 360;
    updateHouseNavTabs(angleDeg);

    threeRenderer.render(threeScene, threeCamera);
  }

  animateThree();

  // Pointer Drag 3D Rotation Controls
  function onPointerDown(e) {
    isDraggingHouse = true;
    startX = e.clientX || (e.touches && e.touches[0].clientX);
    previousRotationY = targetHouseRotationY;
  }

  function onPointerMove(e) {
    if (!isDraggingHouse) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX);
    const deltaX = currentX - startX;
    targetHouseRotationY = previousRotationY + deltaX * 0.008;
  }

  function onPointerUp() {
    isDraggingHouse = false;
  }

  container.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);

  container.addEventListener('touchstart', onPointerDown, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });
  window.addEventListener('touchend', onPointerUp);

  window.addEventListener('resize', () => {
    if (!container) return;
    const w = container.clientWidth || window.innerWidth;
    const h = w < 480 ? 380 : w < 768 ? 440 : 560;
    threeCamera.aspect = w / h;
    threeCamera.position.set(0, 0.8, w < 768 ? 26 : 22.5);
    threeCamera.updateProjectionMatrix();
    threeRenderer.setSize(w, h);
  });
}

// --------------------------------------------------------
// CATEGORIZED LOGO GRID FILTER
// --------------------------------------------------------
function filterLogos(category, btnElement) {
  // Update active pill state
  const buttons = document.querySelectorAll('.logo-tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  }

  // Hide/Show logos by category
  const logoItems = document.querySelectorAll('#functional-logo-grid .dneg-logo-item');
  logoItems.forEach(item => {
    if (item.getAttribute('data-category') === category) {
      item.style.display = 'flex';
      item.style.opacity = '0';
      setTimeout(() => {
        item.style.opacity = '1';
      }, 50);
    } else {
      item.style.display = 'none';
    }
  });
}

// --------------------------------------------------------
// CURRICULUM IMAGE DOT SWITCHER
// --------------------------------------------------------
function swapCurrImage(cardId, src, dotElement) {
  // Find active image element
  const activeImg = document.getElementById(`curr-img-${cardId}`);
  if (activeImg) {
    activeImg.style.opacity = '0.3';
    setTimeout(() => {
      activeImg.src = src;
      activeImg.style.opacity = '1';
    }, 150);
  }

  // Update dots active state
  if (dotElement) {
    const parent = dotElement.parentNode;
    const dots = parent.querySelectorAll('.curr-dot');
    dots.forEach(d => d.classList.remove('active'));
    dotElement.classList.add('active');
  }
}

// --------------------------------------------------------
// FULLSCREEN LIGHTBOX WINDOW CONTROLS
// --------------------------------------------------------
function openLightbox(src) {
  const lightbox = document.getElementById('vfx-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (lightbox && lightboxImg) {
    lightboxImg.src = src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock main scroll
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('vfx-lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Unlock scroll
  }
}

// --------------------------------------------------------
// HOUDINI & NUKE CURRICULUM DATASET & CAROUSEL SWITCHER
// --------------------------------------------------------
let currentTrainingTrack = 'track1';
let activeSoftwareTrack = 'houdini';
let currentCurriculumIndex = 0;

const houdiniCurriculumEN = [
  {
    title: "1. CLOUD / SMOKE / FIRE / EXPLOSION",
    text: "Clouds, fog, mist, wind, god rays, atmospheric effects, fire, flames, smoke, explosions, fireballs, shockwaves, smoke trails, burning buildings or objects, candles, torches, campfires, gas, fuel or dust explosions, fire propagation, volumetric fire and smoke, colored, magical or stylized fire, embers, ashes, heat distortion, secondary smoke, procedural explosions, magical smoke, magical fire, energy explosions.",
    images: ["first 1.jpeg", "thirthinth.jpeg", "33.jpeg"],
    specs: { software: "Houdini 20.5", engine: "Sparse Pyro Solver", particles: "4.8 Million", time: "3.2s / Frame" }
  },
  {
    title: "2. PARTICLES",
    text: "Sparks, dust, splinters, glass fragments, smoke, embers, shards, paper, leaves, debris clouds, impact particles, collision dust, rain, snow, ashes, smoke particles, magical and energy particles, fireflies, swarms, insects, birds, sand, gravel, leaves, confetti, particle trails, forces, collisions, characters transforming into dust, dissolving objects.",
    images: ["10th.jpeg", "fivethinth.jpeg", "sixthiinth.jpeg"],
    specs: { software: "Houdini 20.5", engine: "POP Particle Engine", particles: "32.0 Million", time: "2.5s / Frame" }
  },
  {
    title: "3. LIGHTNING / ENERGY",
    text: "Lightning, electrical arcs, sparks, Tesla coils, energy beams, plasma, electric fields, energy trails, procedural electricity, electrical explosions, electrical storms, energy effects and stylized electrical phenomena.",
    images: ["eleventh.jpeg", "seventh17.jpeg"],
    specs: { software: "Houdini 20.5", engine: "POP/VEX Lightning Solver", particles: "Arcs: 120", time: "1.2s / Frame" }
  },
  {
    title: "4. DESTRUCTION",
    text: "Car crashes, bullets, explosions, falling objects, character impacts, earthquakes, meteor impacts, giant creature impacts, superhero landings, shockwaves, structural collapses, building destruction, fractures, breaks, shattering, fragmentation, demolition and material deformation.",
    images: ["forth.jpeg", "30th.jpeg", "34.jpeg"],
    specs: { software: "Houdini 20.5", engine: "RBD Bullet Physics", particles: "Fractures: 45,000", time: "2.1s / Frame" }
  },
  {
    title: "5. SMALL SCALE LIQUIDS",
    text: "Small-scale liquid simulations, splashes, droplets, jets, flows, pouring, object-liquid interactions, viscous liquids, oil, paint, mud, blood, foam and surface effects.",
    images: ["fifth.jpeg", "29th.jpeg", "35.jpeg"],
    specs: { software: "Houdini 20.5", engine: "FLIP Fluid Solver", particles: "9.2 Million", time: "11.5s / Frame" }
  },
  {
    title: "6. LARGE SCALE LIQUIDS",
    text: "Large-scale fluid simulations, large bodies of water, oceans, waves, hurricanes, rivers, waterfalls, fluid/environment interactions, object/water interaction, flows, floods, underwater turbulence, foam, spray and whitewater.",
    images: ["sixth.jpeg", "31th.jpeg"],
    specs: { software: "Houdini 20.5", engine: "Ocean Toolkit / FLIP", particles: "Spectrum Resol: 10", time: "6.2s / Frame" }
  },
  {
    title: "7. CROWD SIMULATION",
    text: "Crowds, multiple characters, collective behaviors, movement, trajectories, avoidance, interactions, agents, procedural behaviors, group simulations, urban crowds, animals and creatures.",
    images: ["ninth.jpeg"],
    specs: { software: "Houdini 20.5", engine: "Crowd State Agent Solver", particles: "Agents: 2,500", time: "0.9s / Frame" }
  },
  {
    title: "8. HAIR / FUR / FEATHERS",
    text: "Hair, fur, feathers, hairstyles, motion, interactions, dynamics, wind and collisions.",
    images: ["eighth.jpeg"],
    specs: { software: "Houdini 20.5", engine: "Guide Groom / Hair Sim", particles: "Strands: 350,000", time: "4.5s / Frame" }
  },
  {
    title: "9. CLOTH / SOFT BODIES",
    text: "Cloth, clothing, flags, capes, curtains, soft materials, deformations, folds, wrinkles, collisions, wind, dynamics and interactions with characters or the environment.",
    images: ["seventh.jpeg", "32nd.jpeg"],
    specs: { software: "Houdini 20.5", engine: "Vellum Cloth Solver", particles: "Stitches: 250,000", time: "1.8s / Frame" }
  },
  {
    title: "10. ENVIRONMENTS GENERATION",
    text: "Cities, buildings, roads, highways, bridges, tunnels, mountains, cliffs, rocks, caves, forests, vegetation, fields, deserts, beaches, snowy landscapes, urban environments, sci-fi environments and alien planets.",
    images: ["third.jpeg", "27th.jpeg", "28th.jpeg"],
    specs: { software: "Houdini 20.5", engine: "Procedural Landscape Toolkit", particles: "Tiles: 128x128", time: "5.4s / Frame" }
  },
  {
    title: "11. GROWTH / ORGANIC / FRACTAL",
    text: "Automatically growing buildings, plants, vegetation, vines, crystals, assembling cities, organic growth, fractal growth, surface growth, procedural transformations, cracks, aging, corrosion, proliferation and development of organic or mineral structures.",
    images: ["thevth.jpeg", "fortheenth.jpeg", "18th.jpeg", "19th.jpeg", "20th.jpeg", "21th.jpeg", "22nd.jpeg", "23rd.jpeg", "24th.jpeg"],
    specs: { software: "Houdini 20.5", engine: "Shortest Path Growth VEX", particles: "Voxel Dim: 256^3", time: "3.8s / Frame" }
  }
];

const houdiniCurriculumFR = [
  {
    title: "1. NUAGE / FUMÉE / FEU / EXPLOSION",
    text: "Nuages, brouillard, brume, vent, rayons divins, effets atmosphériques, feu, flammes, fumée, explosions, boules de feu, ondes de choc, traînées de fumée, bâtiments ou objets en feu, bougies, torches, feux de camp, explosions de gaz, de carburant ou de poussière, propagation du feu, feu et fumée volumétriques, feu coloré, magique ou stylisé, braises, cendres, distorsion thermique, fumée secondaire, explosions procédurales, fumée magique, feu magique, explosions d'énergie.",
    images: ["first 1.jpeg", "thirthinth.jpeg", "33.jpeg"],
    specs: { software: "Houdini 20.5", engine: "Sparse Pyro Solver", particles: "4.8 Millions", time: "3.2s / Frame" }
  },
  {
    title: "2. PARTICULES",
    text: "Étincelles, poussière, éclats, fragments de verre, fumée, braises, tessons, papier, feuilles, nuages de débris, particules d'impact, poussière de collision, pluie, neige, cendres, particules de fumée, particules magiques et d'énergie, lucioles, essaims, insectes, oiseaux, sable, gravier, feuilles, confettis, traînées de particules, forces, collisions, personnages se transformant en poussière, objets se dissolvant.",
    images: ["10th.jpeg", "fivethinth.jpeg", "sixthiinth.jpeg"],
    specs: { software: "Houdini 20.5", engine: "POP Particle Engine", particles: "32.0 Millions", time: "2.5s / Frame" }
  },
  {
    title: "3. FOUDRE / ÉNERGIE",
    text: "Foudre, arcs électriques, étincelles, bobines Tesla, faisceaux d'énergie, plasma, champs électriques, traînées d'énergie, électricité procédurale, explosions électriques, tempêtes de foudre, effets d'énergie et phénomènes électriques stylisés.",
    images: ["eleventh.jpeg", "seventh17.jpeg"],
    specs: { software: "Houdini 20.5", engine: "POP/VEX Lightning Solver", particles: "Arcs: 120", time: "1.2s / Frame" }
  },
  {
    title: "4. DESTRUCTION",
    text: "Accidents de voiture, balles, explosions, chutes d'objets, impacts de personnages, tremblements de terre, impacts de météores, impacts de créatures géantes, atterrissages de super-héros, ondes de choc, effondrements de structures, destruction de bâtiments, fractures, cassures, éclatement, fragmentation, démolition et déformation des matériaux.",
    images: ["forth.jpeg", "30th.jpeg", "34.jpeg"],
    specs: { software: "Houdini 20.5", engine: "RBD Bullet Physics", particles: "Fractures: 45 000", time: "2.1s / Frame" }
  },
  {
    title: "5. LIQUIDES À PETITE ÉCHELLE",
    text: "Simulations de liquides à petite échelle, éclaboussures, gouttelettes, jets, écoulements, versement, interactions objet-liquide, liquides visqueux, huile, peinture, boue, sang, mousse et effets de surface.",
    images: ["fifth.jpeg", "29th.jpeg", "35.jpeg"],
    specs: { software: "Houdini 20.5", engine: "FLIP Fluid Solver", particles: "9.2 Millions", time: "11.5s / Frame" }
  },
  {
    title: "6. LIQUIDES À GRANDE ÉCHELLE",
    text: "Simulations de fluides à grande échelle, grandes étendues d'eau, océans, vagues, ouragans, rivières, cascades, interactions fluide/environnement, interaction objet/eau, écoulements, inondations, turbulences sous-marines, mousse, embruns et écume.",
    images: ["sixth.jpeg", "31th.jpeg"],
    specs: { software: "Houdini 20.5", engine: "Ocean Toolkit / FLIP", particles: "Spectrum Resol: 10", time: "6.2s / Frame" }
  },
  {
    title: "7. SIMULATION DE FOULE",
    text: "Foules, personnages multiples, comportements collectifs, mouvements, trajectoires, évitement, interactions, agents, comportements procéduraux, simulations de groupe, foules urbaines, animaux et créatures.",
    images: ["ninth.jpeg"],
    specs: { software: "Houdini 20.5", engine: "Crowd State Agent Solver", particles: "Agents: 2 500", time: "0.9s / Frame" }
  },
  {
    title: "8. CHEVEUX / FOURRURE / PLUMES",
    text: "Cheveux, fourrure, plumes, coiffures, mouvement, interactions, dynamique, vent et collisions.",
    images: ["eighth.jpeg"],
    specs: { software: "Houdini 20.5", engine: "Guide Groom / Hair Sim", particles: "Strands: 350 000", time: "4.5s / Frame" }
  },
  {
    title: "9. TISSU / CORPS SOUPLES",
    text: "Tissu, vêtements, drapeaux, capes, rideaux, matériaux souples, déformations, plis, rides, collisions, vent, dynamique et interactions avec les personnages ou l'environnement.",
    images: ["seventh.jpeg", "32nd.jpeg"],
    specs: { software: "Houdini 20.5", engine: "Vellum Cloth Solver", particles: "Stitches: 250 000", time: "1.8s / Frame" }
  },
  {
    title: "10. GÉNÉRATION D'ENVIRONNEMENT",
    text: "Villes, bâtiments, routes, autoroutes, ponts, tunnels, montagnes, falaises, rochers, grottes, forêts, végétation, champs, déserts, plages, paysages enneigés, environnements urbains, environnements de science-fiction et planètes extraterrestres.",
    images: ["third.jpeg", "27th.jpeg", "28th.jpeg"],
    specs: { software: "Houdini 20.5", engine: "Procedural Landscape Toolkit", particles: "Tuiles: 128x128", time: "5.4s / Frame" }
  },
  {
    title: "11. CROISSANCE / ORGANIQUE / FRACTALE",
    text: "Bâtiments à croissance automatique, plantes, végétation, lianes, cristaux, assemblage de villes, croissance organique, croissance fractale, croissance de surface, transformations procédurales, fissures, vieillissement, corrosion, prolifération et développement de structures organiques ou minérales.",
    images: ["thevth.jpeg", "fortheenth.jpeg", "18th.jpeg", "19th.jpeg", "20th.jpeg", "21th.jpeg", "22nd.jpeg", "23rd.jpeg", "24th.jpeg"],
    specs: { software: "Houdini 20.5", engine: "Shortest Path Growth VEX", particles: "Voxel Dim: 256^3", time: "3.8s / Frame" }
  }
];

const nukeCurriculumEN = [
  {
    title: "1. PIPELINE",
    text: "Project organization, folder structure, naming conventions, file management, formats, import/export, element preparation and workflow organization.",
    images: ["25th.jpeg", "26th.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "Disk Cache Pipeline", particles: "Nodes: 12", time: "0.2s / Frame" }
  },
  {
    title: "2. ROTOSCOPY / MASKING / CLEANUP / MATTE EXTRACTION",
    text: "Rotoscoping, masking, matte extraction, unwanted element removal, cables, objects, people, technical equipment, reconstruction of removed areas, cleanup and shot restoration.",
    images: ["27th.jpeg", "28th.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "RotoPaint / Inpaint", particles: "Shapes: 48", time: "1.5s / Frame" }
  },
  {
    title: "3. COLOR CORRECTION",
    text: "Color correction, exposure, contrast, saturation, changing the color of an element and harmonizing different elements within the shot.",
    images: ["29th.jpeg", "30th.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "OCIO Color Engine", particles: "Grade Nodes", time: "0.1s / Frame" }
  },
  {
    title: "4. LIGHTING / RELIGHTING",
    text: "Light modification, creation of light sources, relighting, shadows, interactive lighting and adapting elements to the lighting of the shot.",
    images: ["31th.jpeg", "32nd.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "Nuke 3D Relight Shader", particles: "Light Nodes: 4", time: "0.8s / Frame" }
  },
  {
    title: "5. IMAGE RESTORATION / RECONSTRUCTION",
    text: "Image restoration, artifact removal, area reconstruction, correction of shooting defects, image repair and detail recovery.",
    images: ["33.jpeg", "34.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "F_DeNoise / Clean", particles: "Repair Factor: 98%", time: "1.1s / Frame" }
  },
  {
    title: "6. TRACKING / CAMERA TRACKING",
    text: "2D tracking, surface tracking, camera tracking, motion analysis, stabilization and integrating elements into the movement of the shot.",
    images: ["35.jpeg", "first 1.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "3D Camera Tracker", particles: "Solve Error: 0.45px", time: "2.4s / Frame" }
  },
  {
    title: "7. MATTE PAINTING / SET EXTENSION / CAMERA PROJECTION",
    text: "Matte painting, set extension, environment replacement or expansion, camera projection, 2D, 2.5D and 3D environments.",
    images: ["second.jpeg", "third.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "3D Projector Node", particles: "Projection Layers: 8", time: "0.9s / Frame" }
  },
  {
    title: "8. SKY REPLACEMENT",
    text: "Sky replacement, mood creation, cloud integration, lighting and atmospheric adaptation.",
    images: ["forth.jpeg", "fifth.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "Sky Matte / Keyer", particles: "Atmospheric Blends", time: "0.4s / Frame" }
  },
  {
    title: "9. KEYING",
    text: "Green and blue screen removal, subject extraction, matte creation and integration of new backgrounds and environments.",
    images: ["sixth.jpeg", "seventh.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "Keylight / Primatte", particles: "Fine Details: 99%", time: "0.6s / Frame" }
  },
  {
    title: "10. SCREEN REPLACEMENT",
    text: "Screen replacement, interfaces, panels, displays, phones, monitors and digital surfaces.",
    images: ["eighth.jpeg", "ninth.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "CornerPin 2D", particles: "Track Points: 4", time: "0.3s / Frame" }
  },
  {
    title: "11. CG INTEGRATION",
    text: "Integration of 3D elements, characters, objects, vegetation, buildings, vehicles, creatures and effects generated in Houdini or other 3D software.",
    images: ["10th.jpeg", "eleventh.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "ScanlineRender / Deep", particles: "AOVs / Light Paths", time: "1.8s / Frame" }
  },
  {
    title: "12. DEEP COMPOSITING",
    text: "Depth-based compositing, Deep data management, integration of 2D and 3D elements in space, interactions across different depth levels, occlusion management and integration of complex effects.",
    images: ["thevth.jpeg", "thirthinth.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "Deep Merge / Deep Read", particles: "Deep Samples: 16", time: "3.5s / Frame" }
  },
  {
    title: "13. MOTION BLUR / DEPTH / Z-DEPTH",
    text: "Motion blur, depth of field, Z-depth, depth management, blur, spatial integration and motion consistency.",
    images: ["fortheenth.jpeg", "fivethinth.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "ZDefocus / VectorGenerator", particles: "Depth Layers", time: "1.2s / Frame" }
  },
  {
    title: "14. ATMOSPHERICS / VOLUMETRICS",
    text: "Fog, mist, dust, smoke, rain, snow, atmospherics, god rays, volumetrics and environmental effects.",
    images: ["sixthiinth.jpeg", "seventh17.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "VolumeRays / Merge", particles: "Scattering samples", time: "1.4s / Frame" }
  }
];

const nukeCurriculumFR = [
  {
    title: "1. PIPELINE",
    text: "Organisation du projet, structure des dossiers, conventions de nommage, gestion des fichiers, formats, import/export, préparation des éléments et organisation du workflow.",
    images: ["25th.jpeg", "26th.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "Disk Cache Pipeline", particles: "Noeuds: 12", time: "0.2s / Frame" }
  },
  {
    title: "2. ROTOSCOPIE / MASQUAGE / NETTOYAGE / EXTRACTION DE MATTE",
    text: "Rotoscopie, masquage, extraction de matte, suppression d'éléments indésirables, câbles, objets, personnes, matériel technique, reconstruction des zones supprimées, nettoyage et restauration des plans.",
    images: ["27th.jpeg", "28th.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "RotoPaint / Inpaint", particles: "Formes: 48", time: "1.5s / Frame" }
  },
  {
    title: "3. CORRECTION DES COULEURS",
    text: "Correction des couleurs, exposition, contraste, saturation, changement de couleur d'un élément et harmonisation des différents éléments dans le plan.",
    images: ["29th.jpeg", "30th.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "OCIO Color Engine", particles: "Grade Nodes", time: "0.1s / Frame" }
  },
  {
    title: "4. ÉCLAIRAGE / RECONSTRUCTION DE LUMIÈRE (RELIGHTING)",
    text: "Modification de la lumière, création de sources lumineuses, ré-éclairage, ombres, éclairage interactif et adaptation des éléments à l'éclairage de la prise de vue.",
    images: ["31th.jpeg", "32nd.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "Nuke 3D Relight Shader", particles: "Light Nodes: 4", time: "0.8s / Frame" }
  },
  {
    title: "5. RESTAURATION D'IMAGE / RECONSTRUCTION",
    text: "Restauration d'image, suppression d'artéfacts, reconstruction de zones, correction des défauts de prise de vue, réparation d'image et récupération de détails.",
    images: ["33.jpeg", "34.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "F_DeNoise / Clean", particles: "Repair Factor: 98%", time: "1.1s / Frame" }
  },
  {
    title: "6. TRACKING / TRACKING DE CAMÉRA",
    text: "Suivi 2D, suivi de surface, suivi de caméra 3D, analyse du mouvement, stabilisation et intégration d'éléments dans le mouvement de la prise de vue.",
    images: ["35.jpeg", "first 1.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "3D Camera Tracker", particles: "Erreur: 0.45px", time: "2.4s / Frame" }
  },
  {
    title: "7. MATTE PAINTING / EXTENSION DE DÉCOR / PROJECTION DE CAMÉRA",
    text: "Matte painting, extension de décor, remplacement ou expansion de l'environnement, projection de caméra, environnements 2D, 2.5D et 3D.",
    images: ["second.jpeg", "third.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "3D Projector Node", particles: "Couches Proj: 8", time: "0.9s / Frame" }
  },
  {
    title: "8. REMPLACEMENT DU CIEL",
    text: "Remplacement du ciel, création d'ambiances, intégration de nuages, adaptation de la lumière et de l'atmosphère.",
    images: ["forth.jpeg", "fifth.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "Sky Matte / Keyer", particles: "Mélanges Atmos", time: "0.4s / Frame" }
  },
  {
    title: "9. INCRUSTATION / KEYING",
    text: "Suppression des écrans verts et bleus, extraction de sujets, création de mattes et intégration de nouveaux arrière-plans et environnements.",
    images: ["sixth.jpeg", "seventh.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "Keylight / Primatte", particles: "Détails: 99%", time: "0.6s / Frame" }
  },
  {
    title: "10. REMPLACEMENT D'ÉCRAN",
    text: "Remplacement d'écran, interfaces, panneaux, affichages, téléphones, moniteurs et surfaces numériques.",
    images: ["eighth.jpeg", "ninth.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "CornerPin 2D", particles: "Points Suivi: 4", time: "0.3s / Frame" }
  },
  {
    title: "11. INTÉGRATION CG",
    text: "Intégration d'éléments 3D, personnages, objets, végétation, bâtiments, véhicules, créatures et effets générés dans Houdini ou d'autres logiciels 3D.",
    images: ["10th.jpeg", "eleventh.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "ScanlineRender / Deep", particles: "AOVs / Light Paths", time: "1.8s / Frame" }
  },
  {
    title: "12. COMPOSITING PROFOND (DEEP COMPOSITING)",
    text: "Compositing basé sur la profondeur, gestion des données Deep, intégration d'éléments 2D et 3D dans l'espace, interactions à différents niveaux de profondeur, gestion de l'occlusion et intégration d'effets complexes.",
    images: ["thevth.jpeg", "thirthinth.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "Deep Merge / Deep Read", particles: "Deep Samples: 16", time: "3.5s / Frame" }
  },
  {
    title: "13. FLOU DE MOUVEMENT / PROFONDEUR / DEPTH Z",
    text: "Flou de mouvement, profondeur de champ, Z-depth, gestion de la profondeur, flou, intégration spatiale et cohérence du mouvement.",
    images: ["fortheenth.jpeg", "fivethinth.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "ZDefocus / VectorGenerator", particles: "Couches Prof.", time: "1.2s / Frame" }
  },
  {
    title: "14. ATMOSPHERIQUE / VOLUMETRIQUE",
    text: "Brouillard, brume, poussière, fumée, pluie, neige, effets atmosphériques, rayons divins, volumétrie et effets environnementaux.",
    images: ["sixthiinth.jpeg", "seventh17.jpeg"],
    specs: { software: "Nuke Studio 15.0", engine: "VolumeRays / Merge", particles: "Échantillons", time: "1.4s / Frame" }
  }
];

let currentSubImageIndex = 0;
let autoSlideInterval = null;

function renderSubCarousel(images) {
  const trackEl = document.getElementById('curriculum-slider-track');
  const dotsContainer = document.getElementById('curriculum-sub-dots');
  if (!trackEl || !dotsContainer) return;
  
  trackEl.innerHTML = '';
  dotsContainer.innerHTML = '';
  currentSubImageIndex = 0;
  
  images.forEach((imgSrc, idx) => {
    const slide = document.createElement('div');
    slide.className = 'curriculum-slider-slide';
    
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = `Render slide ${idx + 1}`;
    img.onclick = () => openLightbox(imgSrc);
    
    slide.appendChild(img);
    trackEl.appendChild(slide);
    
    const dot = document.createElement('div');
    dot.className = `curriculum-sub-dot ${idx === 0 ? 'active' : ''}`;
    dot.onclick = (e) => {
      e.stopPropagation();
      goToSubImage(idx);
    };
    dotsContainer.appendChild(dot);
  });
  
  trackEl.style.transform = `translateX(0%)`;
  
  const arrows = document.querySelectorAll('.curriculum-sub-arrow');
  arrows.forEach(arrow => {
    if (images.length > 1) {
      arrow.style.display = 'flex';
    } else {
      arrow.style.display = 'none';
    }
  });
  
  startAutoSlide(images.length);
}

function goToSubImage(idx) {
  const trackEl = document.getElementById('curriculum-slider-track');
  const dots = document.querySelectorAll('.curriculum-sub-dot');
  if (!trackEl || dots.length === 0) return;
  
  const slideCount = dots.length;
  if (idx < 0) idx = slideCount - 1;
  if (idx >= slideCount) idx = 0;
  
  currentSubImageIndex = idx;
  trackEl.style.transform = `translateX(-${idx * 100}%)`;
  
  dots.forEach((dot, dIdx) => {
    if (dIdx === idx) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function prevSubImage(event) {
  if (event) event.stopPropagation();
  goToSubImage(currentSubImageIndex - 1);
}

function nextSubImage(event) {
  if (event) event.stopPropagation();
  goToSubImage(currentSubImageIndex + 1);
}

function startAutoSlide(slideCount) {
  if (autoSlideInterval) clearInterval(autoSlideInterval);
  if (slideCount <= 1) return;
  
  autoSlideInterval = setInterval(() => {
    goToSubImage(currentSubImageIndex + 1);
  }, 4000);
}

function selectTrainingTrack(trackId) {
  currentTrainingTrack = trackId;
  
  document.querySelectorAll('.training-track-card').forEach(card => {
    if (card.dataset.track === trackId) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
  
  const track1El = document.getElementById('track1-details-panel');
  const track2El = document.getElementById('track2-details-panel');
  
  if (track1El && track2El) {
    if (trackId === 'track1') {
      track1El.style.display = 'block';
      track2El.style.display = 'none';
    } else {
      track1El.style.display = 'none';
      track2El.style.display = 'block';
      selectSoftwareTrack(activeSoftwareTrack);
    }
  }
}

function selectSoftwareTrack(softwareId) {
  activeSoftwareTrack = softwareId;
  
  document.querySelectorAll('.software-switch-btn').forEach(btn => {
    if (btn.dataset.software === softwareId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  buildCurriculumTabs();
  switchCurriculumItem(0);
}

function buildCurriculumTabs() {
  const container = document.getElementById('curriculum-tabs-container');
  if (!container) return;
  
  const currentLang = currentLanguage || 'fr';
  let dataset = [];
  if (activeSoftwareTrack === 'houdini') {
    dataset = (currentLang === 'en') ? houdiniCurriculumEN : houdiniCurriculumFR;
  } else {
    dataset = (currentLang === 'en') ? nukeCurriculumEN : nukeCurriculumFR;
  }
  
  container.innerHTML = '';
  
  dataset.forEach((item, idx) => {
    const tab = document.createElement('div');
    tab.className = `houdini-tab-indicator-bar ${idx === 0 ? 'active' : ''}`;
    tab.id = `h-tab-${idx}`;
    tab.onclick = () => switchCurriculumItem(idx);
    
    const num = document.createElement('span');
    num.className = 'hud-num';
    num.textContent = (idx + 1).toString().padStart(2, '0');
    
    const label = document.createElement('span');
    label.className = 'hud-label';
    const titleText = item.title.replace(/^\d+\.\s*/, '');
    label.textContent = titleText;
    
    const blueLine = document.createElement('div');
    blueLine.className = 'hud-blue-line';
    
    tab.appendChild(num);
    tab.appendChild(label);
    tab.appendChild(blueLine);
    
    container.appendChild(tab);
  });
}

function switchCurriculumItem(index) {
  const currentLang = currentLanguage || 'fr';
  let dataset = [];
  if (activeSoftwareTrack === 'houdini') {
    dataset = (currentLang === 'en') ? houdiniCurriculumEN : houdiniCurriculumFR;
  } else {
    dataset = (currentLang === 'en') ? nukeCurriculumEN : nukeCurriculumFR;
  }
  
  if (!dataset || dataset.length === 0) return;
  if (index < 0) index = dataset.length - 1;
  if (index >= dataset.length) index = 0;
  
  currentCurriculumIndex = index;
  const item = dataset[index];
  
  const titleEl = document.getElementById('h-carousel-title');
  const descEl = document.getElementById('h-carousel-desc');
  const trackEl = document.getElementById('curriculum-slider-track');
  const badgeEl = document.getElementById('h-carousel-badge');
  const counterEl = document.getElementById('h-carousel-counter');
  
  if (titleEl) {
    titleEl.style.opacity = '0.3';
    if (descEl) descEl.style.opacity = '0.3';
    if (trackEl) trackEl.style.opacity = '0.3';
    
    const specElements = ['sim-software', 'sim-engine', 'sim-particles', 'sim-rendertime'].map(id => document.getElementById(id));
    specElements.forEach(el => { if (el) el.style.opacity = '0.3'; });
    
    setTimeout(() => {
      if (titleEl) titleEl.textContent = item.title;
      if (descEl) descEl.textContent = item.text;
      renderSubCarousel(item.images);
      
      const specSoft = document.getElementById('sim-software');
      const specEng = document.getElementById('sim-engine');
      const specPart = document.getElementById('sim-particles');
      const specTime = document.getElementById('sim-rendertime');
      
      if (specSoft && item.specs) specSoft.textContent = item.specs.software;
      if (specEng && item.specs) specEng.textContent = item.specs.engine;
      if (specPart && item.specs) specPart.textContent = item.specs.particles;
      if (specTime && item.specs) specTime.textContent = item.specs.time;
      
      if (badgeEl) badgeEl.textContent = `MENU ${(index + 1).toString().padStart(2, '0')} / ${dataset.length.toString().padStart(2, '0')}`;
      if (counterEl) counterEl.textContent = `${index + 1} - ${dataset.length}`;
      
      if (titleEl) titleEl.style.opacity = '1';
      if (descEl) descEl.style.opacity = '1';
      if (trackEl) trackEl.style.opacity = '1';
      specElements.forEach(el => { if (el) el.style.opacity = '1'; });
    }, 150);
  } else {
    renderSubCarousel(item.images);
  }
  
  const indicatorBars = document.querySelectorAll('.houdini-tab-indicator-bar');
  indicatorBars.forEach((bar, idx) => {
    if (idx === index) {
      bar.classList.add('active');
    } else {
      bar.classList.remove('active');
    }
  });
}
window.switchCurriculumItem = switchCurriculumItem;

/* ==========================================================================
   AUTHENTIC VINTAGE TV SOUND EFFECTS (WEB AUDIO SYNTHESIZER)
   ========================================================================== */
// var globalAudioCtx = null;

function playTvChannelChangeSound() {
  try {
    if (!globalAudioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) globalAudioCtx = new AudioContext();
    }
    if (globalAudioCtx && globalAudioCtx.state === 'suspended') {
      globalAudioCtx.resume();
    }
    if (!globalAudioCtx) return;

    const now = globalAudioCtx.currentTime;

    // 1. Heavy Mechanical Metal Knob Clack / Click Impulse
    const osc = globalAudioCtx.createOscillator();
    const gain = globalAudioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(25, now + 0.09);

    gain.gain.setValueAtTime(0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.09);

    osc.connect(gain);
    gain.connect(globalAudioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.09);

    // 2. High Frequency Metallic Latch Snap
    const oscSnap = globalAudioCtx.createOscillator();
    const gainSnap = globalAudioCtx.createGain();
    oscSnap.type = 'square';
    oscSnap.frequency.setValueAtTime(1600, now);
    oscSnap.frequency.exponentialRampToValueAtTime(150, now + 0.035);

    gainSnap.gain.setValueAtTime(0.35, now);
    gainSnap.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

    oscSnap.connect(gainSnap);
    gainSnap.connect(globalAudioCtx.destination);
    oscSnap.start(now);
    oscSnap.stop(now + 0.035);

    // 3. Analog CRT TV Static White Noise Burst (150ms)
    const bufferSize = Math.floor(globalAudioCtx.sampleRate * 0.15); // 150ms
    const buffer = globalAudioCtx.createBuffer(1, bufferSize, globalAudioCtx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = globalAudioCtx.createBufferSource();
    whiteNoise.buffer = buffer;

    // Bandpass filter to sound like analog CRT TV tuner static
    const filter = globalAudioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1100, now);
    filter.Q.setValueAtTime(1.4, now);

    const noiseGain = globalAudioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.22, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    whiteNoise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(globalAudioCtx.destination);

    whiteNoise.start(now);
    whiteNoise.stop(now + 0.15);

  } catch (e) {
    console.warn('TV Sound Effect Exception:', e);
  }
}

function triggerTvStaticGlitch() {
  const glitch = document.getElementById('tvStaticGlitch');
  if (glitch) {
    glitch.classList.add('active');
    setTimeout(() => {
      glitch.classList.remove('active');
    }, 180);
  }
}

/* ==========================================================================
   INTERACTIVE RETRO TV SLIDER CONTROLLER
   ========================================================================== */
var currentCinemaIndex = 0;
var cinemaSlideInterval = null;

function goToCinemaSlide(index, userInitiated = false) {
  const slides = document.querySelectorAll('#cinema-main-stage .cinema-slide');
  
  if (!slides.length) return;
  
  currentCinemaIndex = (index + slides.length) % slides.length;

  if (userInitiated) {
    playTvChannelChangeSound();
  }
  triggerTvStaticGlitch();
  
  slides.forEach((slide, idx) => {
    if (idx === currentCinemaIndex) {
      slide.classList.add('active');
      const video = slide.querySelector('video');
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    } else {
      slide.classList.remove('active');
    }
  });

  resetCinemaTimer();
}

function nextCinemaSlide() {
  goToCinemaSlide(currentCinemaIndex + 1, true);
}

function prevCinemaSlide() {
  goToCinemaSlide(currentCinemaIndex - 1, true);
}

function resetCinemaTimer() {
  if (cinemaSlideInterval) clearInterval(cinemaSlideInterval);
  cinemaSlideInterval = setInterval(() => {
    goToCinemaSlide(currentCinemaIndex + 1, false);
  }, 7000);
}

function playSciFiChirpSound() {
  try {
    if (!globalAudioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) globalAudioCtx = new AudioContext();
    }
    if (globalAudioCtx && globalAudioCtx.state === 'suspended') {
      globalAudioCtx.resume();
    }
    if (!globalAudioCtx) return;

    const now = globalAudioCtx.currentTime;
    const osc = globalAudioCtx.createOscillator();
    const gain = globalAudioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1400, now);
    osc.frequency.exponentialRampToValueAtTime(2800, now + 0.035);
    
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
    
    osc.connect(gain);
    gain.connect(globalAudioCtx.destination);
    
    osc.start(now);
    osc.stop(now + 0.035);
  } catch (e) {}
}

/* GLOBAL WINDOW EXPORTS */
window.setLanguage = typeof setLanguage !== 'undefined' ? setLanguage : function(){};
window.goToCinemaSlide = goToCinemaSlide;
window.nextCinemaSlide = nextCinemaSlide;
window.prevCinemaSlide = prevCinemaSlide;
window.playTvChannelChangeSound = playTvChannelChangeSound;
window.playSciFiChirpSound = playSciFiChirpSound;

document.addEventListener('DOMContentLoaded', () => {
  goToCinemaSlide(0, false);
  buildCurriculumTabs();
  switchCurriculumItem(0);

  // 3D Parallax Mouse Tilt for Sci-Fi Diagnostic HUD Cards
  const scifiCards = document.querySelectorAll('.scifi-3d-card');
  scifiCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px) scale(1.03)`;
      
      const shine = card.querySelector('.card-3d-shine');
      if (shine) {
        shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(204, 164, 59, 0.35), transparent 70%)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1.0)';
    });

    card.addEventListener('click', () => {
      playSciFiChirpSound();
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(-4px) scale(0.97)';
      setTimeout(() => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(12px) scale(1.03)';
      }, 150);
    });
  });

  // Attach direct event listeners to language options
  const frBtn = document.getElementById('lang-fr');
  const enBtn = document.getElementById('lang-en');
  const frDrawer = document.getElementById('drawer-lang-fr');
  const enDrawer = document.getElementById('drawer-lang-en');

  if (frBtn) frBtn.addEventListener('click', () => setLanguage('fr'));
  if (enBtn) enBtn.addEventListener('click', () => setLanguage('en'));
  if (frDrawer) frDrawer.addEventListener('click', () => setLanguage('fr'));
  if (enDrawer) enDrawer.addEventListener('click', () => setLanguage('en'));

  // Attach direct event listeners to TV buttons & knobs
  const tvPrevBtn = document.querySelector('.cinema-prev-btn');
  const tvNextBtn = document.querySelector('.cinema-next-btn');
  const tvKnobVhf = document.querySelector('.knob-vhf');
  const tvKnobUhf = document.querySelector('.knob-uhf');

  if (tvPrevBtn) tvPrevBtn.addEventListener('click', prevCinemaSlide);
  if (tvNextBtn) tvNextBtn.addEventListener('click', nextCinemaSlide);
  if (tvKnobVhf) tvKnobVhf.addEventListener('click', nextCinemaSlide);
  if (tvKnobUhf) tvKnobUhf.addEventListener('click', prevCinemaSlide);
});
