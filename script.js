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
    sandbox_kicker: "Paramètres Temps Réel",
    sandbox_title: "Bac à Sable Graphique",
    sandbox_desc: "Ajustez les curseurs ci-dessous pour modifier dynamiquement les paramètres de rendu 3D du simulateur en temps réel.",
    sandbox_controls: "CONTRÔLES DE RENDU",
    ctrl_focal: "Distance focale",
    ctrl_exposure: "Limite d'exposition",
    ctrl_chromatic: "Décalage chromatique",
    ctrl_noise: "Densité de bruit",
    ctrl_vignette: "Profondeur de vignette",
    engine_status: "Statut du pipeline actif",
    status_normal: "ACTIF / NORMAL",
    reset_sandbox: "Réinitialiser le simulateur",
    academy_kicker: "Formations & Inscriptions",
    academy_title: "Académie VFX & Diplômes",
    academy_desc: "Rejoignez nos programmes académiques accrédités et préparez-vous aux métiers du cinéma et du temps réel. Explorez les façades du studio interactif ci-dessous pour découvrir nos programmes de formation.",
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
    nav_why: "Pourquoi nous ?",
    why_join_kicker: "POURQUOI MAINTENANT ?",
    why_join_title: "Pourquoi nous rejoindre ?",
    why_join_sub1: "FAIRE ÉVOLUER L'EXPRESSION DE MARQUE À LA HAUTEUR DE L'AMBITION",
    why_join_text1: "À mesure qu'une entreprise consolide sa croissance et renforce sa présence sur le continent, un nouveau chapitre se dessine : FAIRE ÉVOLUER L'EXPRESSION DE MARQUE À LA HAUTEUR DE L'AMBITION.",
    why_join_text2: "L'enjeu n'est plus uniquement la visibilité. Il s'agit de construire une expression de marque qui est :",
    why_join_vibrant: "PLUS VIVANTE",
    why_join_narrative: "PLUS NARRATIVE",
    why_join_emotional: "PLUS ÉMOTIONNELLE",
    why_join_memorable: "PLUS MÉMORABLE",
    why_join_text3: "La photographie permet de représenter. La vidéo permet de donner vie. Le cinéma permet de :",
    why_join_cinema_stories: "RACONTER DES HISTOIRES",
    why_join_cinema_emotion: "CRÉER DE L'ÉMOTION",
    why_join_cinema_memory: "BÂTIR LA MÉMOIRE",
    why_join_text4: "L'opportunité consiste donc à faire évoluer progressivement l'entreprise :",
    why_join_evolution: "DE L'IMAGERIE STATIQUE → À L'EXPÉRIENCE AUDIOVISUELLE",
    ambition_kicker: "AMBITION & EXPRESSION DE MARQUE",
    ambition_title: "Notre Ambition",
    ambition_bullet1: "DE L'IMAGE À L'EXPÉRIENCE",
    ambition_bullet2: "DE LA CAMPAGNE À LA PLATEFORME DE MARQUE",
    ambition_bullet3: "DU CONTENU À LA MÉMOIRE",
    ambition_bullet4: "DE LA COMMUNICATION À LA MARQUE",
    ambition_campaign_text: "Chaque campagne que nous créons est construite autour de :",
    ambition_campaign_bullets: "DIRECTION ARTISTIQUE → CODES NARRATIFS → QUALITÉ D'IMAGE → IDENTITÉ SONORE → CONTINUITÉ",
    ambition_sub_title: "L'AMBITION :",
    ambition_sub_text: "NE PLUS SEULEMENT COMMUNIQUER SUR CE QU'UNE ENTREPRISE FAIT, MAIS RACONTER L'HISTOIRE DE CE QU'ELLE CONSTRUIT.",
    
    // ---------------- WHY IMMERSIO SUPREMA & VISION/VALUE ----------------
    why_suprema_kicker: "POURQUOI IMMERSIO SUPREMA ?",
    why_suprema_title: "Bâtir votre puissance audiovisuelle",
    why_suprema_text1: "Une agence produit du contenu. Immersio Suprema bâtit la capacité audiovisuelle d'une marque.",
    why_suprema_chain: "LA CHAÎNE IMMERSIO SUPREMA :",
    why_suprema_chain_text: "INTELLIGENCE + STRATÉGIE + CRÉATIVITÉ + PRODUCTION + TECHNOLOGIE + DISTRIBUTION + PERFORMANCE",
    why_suprema_cycle: "UN CYCLE CONTINU :",
    why_suprema_cycle_text: "PENSER → CONCEVOIR → PRODUIRE → DISTRIBUER → MESURER → APPRENDRE → OPTIMISER",
    why_suprema_text2: "Chaque campagne devient ainsi une nouvelle étape dans la construction du territoire de marque audiovisuel de l'entreprise.",
    vision_title: "Vision et Valeur",
    vision_desc: "Bâtir une plateforme audiovisuelle de marque capable de transformer les campagnes de communication en expressions cohérentes de l'univers d'une entreprise.",
    vision_bullet1: "Une marque qui raconte des histoires.",
    vision_bullet2: "Une marque qui émeut.",
    vision_bullet3: "Une marque qui inspire confiance.",
    vision_bullet4: "Une marque qui est instantanément reconnaissable.",
    vision_bullet5: "Une marque qui résiste à l'épreuve du temps.",

    // ---------------- INTERNATIONAL EXPERTISE ----------------
    expertise_kicker: "EXPERTISE INTERNATIONALE",
    expertise_title: "Direction VFX de classe mondiale",
    expertise_text1: "Le PDG et Président d'Immersio Suprema a notamment officié en tant que Directeur Technique en effets 3D chez Sony Pictures Imageworks, travaillant notamment sur Spider-Man: Across the Spider-Verse, production nommée aux Oscars.",
    expertise_text2: "Immersio Suprema s'appuie sur une expertise développée au sein d'environnements internationaux exigeants, couvrant la supervision technique, le storytelling visuel, la production, les technologies audiovisuelles et les effets visuels 2D/3D.",
    expertise_text3: "Cette expertise inclut également des travaux impliquant l'intelligence artificielle et l'évaluation de contenus utilisés pour entraîner des modèles d'IA pour des entreprises américaines.",
    expertise_transfer: "EXPERTISE DIRECTEMENT TRANSFÉRABLE :",
    expertise_transfer_bullets: "PRODUCTION AUDIOVISUELLE → SUPERVISION TECHNIQUE → EFFETS VISUELS 2D/3D → INTELLIGENCE ARTIFICIELLE",
    expertise_objective: "L'objectif est d'intégrer des standards internationaux de production, de storytelling, de technologie et de qualité visuelle dans un univers de marque profondément africain, humain et distinctif.",
    expertise_brings_title: "Cette expérience apporte :",
    expertise_brings_bullets: "MÉTHODES → STANDARDS INTERNATIONAUX → UNE CULTURE DE L'EXCELLENCE",
    expertise_translates_title: "Elle se traduit par :",
    expertise_translates_bullets: "RIGUEUR → STORYTELLING → DIRECTION ARTISTIQUE → MAÎTRISE TECHNIQUE",

    // ---------------- VALUE CHAIN (10 STEPS) ----------------
    value_chain_kicker: "CHAÎNE DE VALEUR COMPLÈTE",
    value_chain_title: "Notre cycle opérationnel de 12 mois",
    step1_title: "1. INTELLIGENCE",
    step1_desc: "Analyser les enjeux commerciaux, les audiences, les comportements, les tendances et les opportunités.",
    step2_title: "2. STRATÉGIE",
    step2_desc: "Définir les objectifs de chaque campagne et son rôle dans la construction de la marque.",
    step3_title: "3. CRÉATIVITÉ",
    step3_desc: "Développer des idées, des concepts, des univers visuels et des territoires narratifs.",
    step4_title: "4. PRODUCTION",
    step4_desc: "Transformer les concepts en contenus audiovisuels avec un niveau de qualité cinématographique.",
    step5_title: "5. POST-PRODUCTION",
    step5_desc: "Finaliser chaque actif via le montage, le sound design, l'étalonnage, l'animation 2D/3D, les effets visuels, le compositing, le sous-titrage et les exports finaux.",
    step6_title: "6. DISTRIBUTION",
    step6_desc: "Préparer et adapter les contenus aux différents formats, supports, plateformes et environnements de diffusion.",
    step7_title: "7. MESURE",
    step7_desc: "Identifier les contenus, les formats, les messages et les approches qui génèrent le plus d'impact.",
    step8_title: "8. CAPITALISATION",
    step8_desc: "Bâtir une bibliothèque d'actifs audiovisuels et capitaliser sur les codes créatifs, ainsi que sur les enseignements de chaque campagne.",
    step9_title: "9. OPTIMISATION",
    step9_desc: "Utiliser les données de performance et les réactions des audiences pour améliorer en continu les campagnes suivantes.",
    step10_desc: "Assurer la coordination stratégique, créative, technique et opérationnelle sur tout le cycle de 12 mois.",
    
    // ---------------- CHALLENGE & DIFF & PARTNERSHIP ----------------
    challenge_kicker: "LE DÉFI DES 12 MOIS",
    challenge_title: "Plus que du simple contenu",
    challenge_desc: "À la fin des 12 mois, l'entreprise ne disposera pas simplement d'une série de contenus produits au fil des campagnes. Elle disposera progressivement de :",
    challenge_bullet1: "UN TERRITOIRE DE MARQUE AUDIOVISUEL COHÉRENT",
    challenge_bullet2: "UNE SIGNATURE DE MARQUE DISTINCTIVE ET RECONNAISSABLE",
    challenge_bullet3: "UNE BIBLIOTHÈQUE D'ACTIFS DE CONTENU RÉUTILISABLES",
    challenge_bullet4: "UNE BASE DE CONNAISSANCES POUR AMÉLIORER LES FUTURES COMMUNICATIONS",
    challenge_obj: "L'objectif est de transformer chaque campagne en une brique de construction pour une marque plus forte, plus cohérente et plus reconnaissable dans le temps, avant même que le logo n'apparaisse.",
    diff_kicker: "DIFFÉRENCIATION",
    diff_title: "L'Espace de Différenciation",
    diff_team: "UNE ÉQUIPE COMPLÈTE DE PRÉ-PRODUCTION, PRODUCTION ET POST-PRODUCTION.",
    diff_program: "Le programme annuel est structuré autour de campagnes stratégiques.",
    diff_campaign_includes: "Chaque campagne comprend :",
    diff_inc1: "FILM DE SIGNATURE CORPORATIVE",
    diff_inc2: "CRÉATION DE CONTENU TV",
    diff_inc3: "CRÉATION DE CONTENU POUR LES RÉSEAUX SOCIAUX",
    diff_support: "Le programme assure un volume structuré de contenu, une capacité de production et un soutien stratégique continu.",
    diff_results_note: "Les résultats de distribution et commerciaux dépendent, entre autres facteurs, du plan média, des audiences cibles, du timing, des approbations et des données disponibles.",
    partner_scope_kicker: "NOTRE PROGRAMME PARTENARIAT",
    partner_scope_title: "Un programme stratégique complet",
    scope1_title: "STRATÉGIE ET CONSEIL",
    scope1_desc: "Stratégie audiovisuelle, conseil et accompagnement, direction artistique, territoires narratifs, coordination et gestion de programme.",
    scope2_title: "CRÉATION & PRODUCTION",
    scope2_desc: "Concepts de campagne, pré-production, production et réalisation, post-production avancée, adaptations et déclinaisons de contenu.",
    scope3_title: "TECHNOLOGIE ET EXPERTISE",
    scope3_desc: "2D, 3D, VFX, IA si pertinente, et technologies de production avancées.",
    scope4_title: "DIFFUSION & DÉPLOIEMENT",
    scope4_desc: "Diffusion TV incluse sous conditions, préparation et adaptation de contenu, création et adaptation de contenu pour réseaux sociaux.",
    scope5_title: "MESURE ET OPTIMISATION",
    scope5_desc: "Identifier les contenus, formats, messages et approches qui génèrent le plus de pertinence et d'impact, tout en analysant les réactions pour améliorer les campagnes suivantes.",
    continuous_kicker: "PAS DE RUPTURE DE FLUX",
    continuous_title: "Capacité de production continue",
    continuous_desc: "Le modèle permet de préparer la campagne suivante pendant que la campagne en cours est diffusée et mesurée, évitant ainsi toute rupture de production.",
    continuous_track_a: "CAMPAGNE SUR LE MARCHÉ",
    continuous_track_a_desc: "DIFFUSION → MESURE → APPRENTISSAGE",
    continuous_track_b: "CAMPAGNE SUIVANTE",
    continuous_track_b_desc: "DÉVELOPPEMENT DU CONCEPT → PRÉ-PRODUCTION"
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
    sandbox_kicker: "Real-time Parameters",
    sandbox_title: "Graphics Sandbox",
    sandbox_desc: "Adjust the sliders below to dynamically modify the 3D rendering parameters of the simulator in real time.",
    sandbox_controls: "RENDER CONTROLS",
    ctrl_focal: "Focal Length",
    ctrl_exposure: "Exposure Limit",
    ctrl_chromatic: "Chromatic Shift",
    ctrl_noise: "Noise Density",
    ctrl_vignette: "Vignette Depth",
    engine_status: "Active Pipeline Status",
    status_normal: "NORMAL",
    reset_sandbox: "Reset Simulator",
    academy_kicker: "Training & Admissions",
    academy_title: "VFX Academy & Degrees",
    academy_desc: "Join our accredited academic programs and prepare for careers in cinema and real-time environments. Explore the facades of the interactive studio below to discover our training programs.",
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
    nav_why: "Why Us",
    why_join_kicker: "WHY JOIN US NOW?",
    why_join_title: "Why Join Us Now?",
    why_join_sub1: "EVOLVING THE BRAND EXPRESSION TO MATCH THE AMBITION",
    why_join_text1: "As a company consolidates its growth and strengthens its presence across the continent, a new chapter is emerging: EVOLVE THE BRAND EXPRESSION TO MATCH THE AMBITION.",
    why_join_text2: "The challenge is no longer simply about visibility. It is about building a brand expression that is:",
    why_join_vibrant: "MORE VIBRANT",
    why_join_narrative: "MORE NARRATIVE",
    why_join_emotional: "MORE EMOTIONAL",
    why_join_memorable: "MORE MEMORABLE",
    why_join_text3: "Photography allows us to represent. Video allows us to bring things to life. Cinema allows us to:",
    why_join_cinema_stories: "TELL STORIES",
    why_join_cinema_emotion: "CREATE EMOTION",
    why_join_cinema_memory: "BUILD MEMORY",
    why_join_text4: "The opportunity, therefore, is to progressively evolve the company:",
    why_join_evolution: "FROM STATIC IMAGERY → TO AN AUDIOVISUAL EXPERIENCE",
    ambition_kicker: "AMBITION & BRAND EXPRESSION",
    ambition_title: "Our Ambition",
    ambition_bullet1: "FROM IMAGE TO EXPERIENCE",
    ambition_bullet2: "FROM CAMPAIGN TO BRAND PLATFORM",
    ambition_bullet3: "FROM CONTENT TO MEMORY",
    ambition_bullet4: "FROM COMMUNICATION TO BRAND",
    ambition_campaign_text: "Every campaign we create is built around:",
    ambition_campaign_bullets: "ART DIRECTION → NARRATIVE CODES → IMAGE QUALITY → SONIC IDENTITY → CONTINUITY",
    ambition_sub_title: "THE AMBITION:",
    ambition_sub_text: "NO LONGER SIMPLY COMMUNICATE WHAT A COMPANY DOES, BUT TELL THE STORY OF WHAT A COMPANY IS BUILDING.",
    
    // ---------------- WHY IMMERSIO SUPREMA & VISION/VALUE ----------------
    why_suprema_kicker: "WHY IMMERSIO SUPREMA?",
    why_suprema_title: "Building your audiovisual capability",
    why_suprema_text1: "An agency produces content. Immersio Suprema builds a brand’s audiovisual capability.",
    why_suprema_chain: "THE IMMERSIO SUPREMA CHAIN:",
    why_suprema_chain_text: "INTELLIGENCE + STRATEGY + CREATIVE + PRODUCTION + TECHNOLOGY + DISTRIBUTION + PERFORMANCE",
    why_suprema_cycle: "A CONTINUOUS CYCLE:",
    why_suprema_cycle_text: "THINK → DESIGN → PRODUCE → DISTRIBUTE → MEASURE → LEARN → OPTIMIZE",
    why_suprema_text2: "Each campaign therefore becomes a new step in building the company’s audiovisual brand territory.",
    vision_title: "Vision and Value",
    vision_desc: "Build a brand audiovisual platform capable of transforming communication campaigns into coherent expressions of a company’s universe.",
    vision_bullet1: "A brand that tells stories.",
    vision_bullet2: "A brand that moves people.",
    vision_bullet3: "A brand that inspires trust.",
    vision_bullet4: "A brand that is instantly recognizable.",
    vision_bullet5: "A brand that stands the test of time.",

    // ---------------- INTERNATIONAL EXPERTISE ----------------
    expertise_kicker: "INTERNATIONAL EXPERTISE",
    expertise_title: "World-Class VFX Leadership",
    expertise_text1: "The CEO and President of Immersio Suprema has notably served as Technical Director in 3D Effects at Sony Pictures Imageworks, including work on Spider-Man: Across the Spider-Verse, an Academy Award-nominated production.",
    expertise_text2: "Immersio Suprema draws on expertise developed within demanding international environments, spanning technical supervision, visual storytelling, production, audiovisual technologies, and 2D/3D visual effects.",
    expertise_text3: "This expertise also includes work involving artificial intelligence and the evaluation of content used to train AI models for american companies.",
    expertise_transfer: "DIRECTLY TRANSFERABLE EXPERTISE:",
    expertise_transfer_bullets: "AUDIOVISUAL PRODUCTION → TECHNICAL SUPERVISION → 2D/3D VISUAL EFFECTS → ARTIFICIAL INTELLIGENCE",
    expertise_objective: "The objective is to bring international standards of production, storytelling, technology, and visual quality into a deeply African, human, and distinctive brand universe.",
    expertise_brings_title: "This experience brings:",
    expertise_brings_bullets: "METHODS → INTERNATIONAL STANDARDS → A CULTURE OF EXCELLENCE",
    expertise_translates_title: "It translates into:",
    expertise_translates_bullets: "RIGOR → STORYTELLING → ART DIRECTION → TECHNICAL MASTERY",

    // ---------------- VALUE CHAIN (10 STEPS) ----------------
    value_chain_kicker: "COMPLETE VALUE CHAIN",
    value_chain_title: "Our continuous 12-month operational cycle",
    step1_title: "1. INTELLIGENCE",
    step1_desc: "Analyze business challenges, audiences, behaviors, trends, and opportunities.",
    step2_title: "2. STRATEGY",
    step2_desc: "Define the objectives of each campaign and its role in building the brand.",
    step3_title: "3. CREATIVE",
    step3_desc: "Develop ideas, concepts, visual worlds, and narrative territories.",
    step4_title: "4. PRODUCTION",
    step4_desc: "Transform concepts into audiovisual content with a cinematic level of quality.",
    step5_title: "5. POST-PRODUCTION",
    step5_desc: "Finalize every asset through editing, sound design, color grading, 2D/3D animation, 2D/3D visual effects, compositing, subtitles, and final exports.",
    step6_title: "6. DISTRIBUTION",
    step6_desc: "Prepare and adapt content to different formats, media, platforms, and distribution environments.",
    step7_title: "7. MEASUREMENT",
    step7_desc: "Identify the content, formats, messages, and approaches that generate the greatest relevance and impact.",
    step8_title: "8. CAPITALIZATION",
    step8_desc: "Build an audiovisual asset library and capitalize on creative and narrative codes, as well as learnings from each campaign.",
    step9_title: "9. OPTIMIZATION",
    step9_desc: "Use performance data and audience reactions to continuously improve subsequent campaigns.",
    step10_desc: "Ensure strategic, creative, technical, and operational coordination across the full 12-month cycle.",
    
    // ---------------- CHALLENGE & DIFF & PARTNERSHIP ----------------
    challenge_kicker: "THE 12-MONTH CHALLENGE",
    challenge_title: "More Than Simple Content",
    challenge_desc: "At the end of the 12 months, the company would not simply have a series of content pieces produced throughout the campaigns. It would progressively have:",
    challenge_bullet1: "A COHERENT AUDIOVISUAL BRAND TERRITORY",
    challenge_bullet2: "A DISTINCTIVE AND RECOGNIZABLE BRAND SIGNATURE",
    challenge_bullet3: "A REUSABLE CONTENT ASSET LIBRARY",
    challenge_bullet4: "A KNOWLEDGE BASE TO INFORM AND IMPROVE FUTURE COMMUNICATIONS",
    challenge_obj: "The objective is to transform each campaign into a building block for a stronger, more consistent, and more recognizable brand over time even before the logo appears.",
    diff_kicker: "DIFFERENTIATION",
    diff_title: "The Space for Differentiation",
    diff_team: "A COMPLETE PRE-PRODUCTION, PRODUCTION AND POST-PRODUCTION TEAM.",
    diff_program: "The annual program is structured around strategic campaigns.",
    diff_campaign_includes: "Each campaign includes:",
    diff_inc1: "CORPORATE SIGNATURE FILM",
    diff_inc2: "TV CONTENT CREATION",
    diff_inc3: "SOCIAL MEDIA CONTENT CREATION",
    diff_support: "The program ensures a structured volume of content, production capacity, and ongoing strategic support.",
    diff_results_note: "Distribution and commercial results depend, among other factors, on the media plan, target audiences, timing, approvals, and the data available.",
    partner_scope_kicker: "OUR PARTNERSHIP PROGRAM",
    partner_scope_title: "A Strategic Audiovisual Program",
    scope1_title: "STRATEGY AND ADVISORY",
    scope1_desc: "Audiovisual strategy, consulting and support, creative direction, narrative territories, coordination, and program management.",
    scope2_title: "CREATIVE & PRODUCTION",
    scope2_desc: "Campaign concepts, pre-production, production and directing, advanced post-production, adaptations, and content variations.",
    scope3_title: "TECHNOLOGY AND EXPERTISE",
    scope3_desc: "2D, 3D, VFX, AI when relevant, and advanced production technologies.",
    scope4_title: "DISTRIBUTION & DEPLOYMENT",
    scope4_desc: "TV distribution included subject to conditions, content preparation and adaptation, and social media content creation and adaptation.",
    scope5_title: "MEASUREMENT AND OPTIMIZATION",
    scope5_desc: "Identifying the content, formats, messages, and approaches that generate the greatest relevance and impact, while analyzing audience reactions to continuously improve subsequent campaigns.",
    continuous_kicker: "CONTINUOUS FLUX",
    continuous_title: "Continuous Production Capacity",
    continuous_desc: "The model makes it possible to prepare the next campaign while the current campaign is being distributed and measured, avoiding production gaps and maintaining continuous production capacity.",
    continuous_track_a: "CAMPAIGN IN MARKET",
    continuous_track_a_desc: "DISTRIBUTION → MEASUREMENT → LEARNING",
    continuous_track_b: "NEXT CAMPAIGN",
    continuous_track_b_desc: "CONCEPT DEVELOPMENT → PRE-PRODUCTION"
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
      el.textContent = translations[lang][key];
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
}


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
  initCyberHouseEngine();
  
  // Set default view on load (prevent initial scroll)
  switchDivision('vfx', true);
  
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
      subtitle: 'EXPLORING NEURAL GRAPHICS AND DIGITAL AESTHETICS.',
      video: 'showreelone.mp4'
    },
    technology: {
      title: 'IMMERSIO TECHNOLOGY',
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
    const submitBtn = form.querySelector('.vfx-btn-submit-red');
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
let uiAudioCtx = null;

function getUIAudioContext() {
  if (!uiAudioCtx) {
    const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
    if (AudioCtxClass) {
      uiAudioCtx = new AudioCtxClass();
    }
  }
  if (uiAudioCtx && uiAudioCtx.state === 'suspended') {
    uiAudioCtx.resume();
  }
  return uiAudioCtx;
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
    '.vfx-btn-submit-red',
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
      const colors = ['#ff625a', '#00f2fe', '#bf5af2', '#ff9f0a'];
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
  const frontMat = createSlateMaterial('house_wall_front_title', 'house_wall_front_desc', '#ff625a', 'front');
  const rightMat = createSlateMaterial('house_wall_right_title', 'house_wall_right_desc', '#00f2fe', 'right');
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
  pGrad.addColorStop(0.3, 'rgba(255, 98, 90, 0.8)');
  pGrad.addColorStop(1, 'rgba(255, 98, 90, 0)');
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
