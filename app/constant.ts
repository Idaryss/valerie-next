import { Book, NewsEvent, PressItem } from "@/types";

export const AUTHOR_NAME = "Valérie FRANCOIS";

export const AUTHOR_BIO = `Autrice passionnée de romans contemporains, où l’émotion, les parcours de vie et les relations humaines occupent le premier rôle, Valérie François explore des histoires intimes et puissantes, ancrées dans le réel.\n
C’est sous le nom de plume Valy Péry qu’elle se glisse dans un tout autre registre, plus léger et pétillant : celui des romances et comédies romantiques, avec des héroïnes attachantes, des situations inattendues, et toujours une bonne dose d’humour.\n
Originaire de métropole, Valérie a posé ses valises à La Réunion, une île inspirante où le quotidien se teinte de chaleur, de nature et d’imaginaire.\nC’est là que ses histoires prennent vie, au gré de ses humeurs et de ses envies.\n
Auteure hybride, elle a d’abord publié en autoédition, puis en maison d’édition traditionnelle, avant de faire le choix assumé de revenir à l’autoédition.\n
Un choix guidé par la liberté : celle d’écrire sans contrainte, de créer un lien direct avec ses lecteurs et lectrices, et de bâtir une aventure littéraire qui lui ressemble pleinement.\n
L’autoédition lui permet d’explorer de nouveaux chemins, d’oser des histoires singulières, et de rester maîtresse de chaque étape du processus.\n
Que vous soyez ici pour découvrir une histoire forte, une parenthèse romantique ou simplement en savoir un peu plus sur son univers, vous êtes au bon endroit.\n
Installez-vous confortablement… et laissez-vous emporter par les mots.`;

export const NOVELS_DATA: Book[] = [
  {
    id: 1,
    title: "Les jours ou je suis née",
    coverImageUrl: "/les-jours-ou-je-suis-nee.png",
    summary:
      "Paul Becker est un homme comblé. Après plus de quinze ans de recherches éprouvantes, il s’apprête à ramener à la maison sa fille Lily-Rose, enlevée au Vietnam quand elle était bébé. Avec son enfant adoré à ses côtés, il pourra enfin recommencer à vivre. Dans l’avion qui descend vers Paris, Luu-Ly est anxieuse. Elle ne rêve que d’une chose : aller à l’école. Mais saura-t-elle s’adapter, elle qui n’a connu que la vie dans les champs au Vietnam, une enfance à dissimuler ses cheveux blonds sous son foulard ? Autour d’elle, tous parlent de celle qui l’a élevée comme d’une criminelle, mais dans son cœur, elle restera sa mère. Elle sait que, quelle que soit la distance, leur lien ne se rompra jamais. Devenue Lily-Rose Becker, va-t-elle pouvoir recoller les morceaux d’une vie brisée ? Parviendra-t-elle à tenir la promesse faite à sa mère Minh Tâm lorsqu’elle était enfant ? Et comment va-t-elle concilier ses deux identités ? Parce qu’une seule et même vie justifie parfois plusieurs naissances.",
  },
  {
    id: 2,
    title: "Vous n'aurez pas mon âme",
    coverImageUrl: "/vous-naurez-pas-mon-ame.png",
    summary:
      "Le lieutenant-colonel Steel le sait pertinemment : depuis le début de cette affaire, elle déconne à plein tube. Pourtant, malgré les conseils de ses collègues et les pressions de sa hiérarchie, pas question qu’elle renonce. Et tant pis si le bel inconnu de la chambre 212, miraculé d’un effroyable accident, réveille en elle des souvenirs qu’elle aurait préféré oublier depuis longtemps. Toutefois, dans cette enquête qu’elle mène pour découvrir l’identité de ce blessé que personne ne réclame, chacune des pistes entrevues se transforme en cul-de-sac : requêtes classées sans suite, demandes perdues, rejetées, invalidées… Steel semble se heurter à un mur. Alors, quand l’inconnu disparaît de sa chambre d’hôpital et que le dossier est classé, elle refuse de s’avouer vaincue. L’enquête, elle la mènera jusqu’au bout. Quitte à s’embarquer, seule, pour La Réunion. Quitte à risquer sa carrière. Quitte à affronter ses démons.",
  },
];

export const NEW_ROMANCE_DATA: Book[] = [
  {
    id: 3,
    title: "Lou mode d'emploi Tome 1",
    coverImageUrl: "/lou-mode-demploi.png",
    summary:
      "Quand on grandit entourée de militaires, difficile d’échapper à la tradition familiale... Lou en sait quelque chose. Au milieu de cette ribambelle de treillis exclusivement masculin, elle n’a jamais envisagé un autre avenir que l’armée. Alors, portée par un mélange d’orgueil et de loyauté et malgré des rêves bien à elle, elle s’engage. Heureusement, son cousin, Sylvain, son complice de toujours, est de la partie. Ensemble, ils feront face. Enfin, ça s’était le plan. Très vite, Lou se heurte à un instructeur aussi impitoyable que mystérieux. Caché sous une cagoule, cet homme semble prendre un malin plaisir à lui mener la vie dure. Déterminée à lui tenir tête, Lou compte bien ne pas se laisser écraser. Mais entre entraînement éprouvants, quiproquos en cascade et révélations inattendues, elle n’est pas au bout de ses surprises… Un roman pétillant mêlant humour, action et romance…Pour une mission aussi improbable qu’inoubliable !",
  },
];

export const ALL_BOOKS_DATA: Book[] = [...NOVELS_DATA, ...NEW_ROMANCE_DATA];

export const NEWS_EVENTS_DATA: NewsEvent[] = [
  {
    id: 1,
    title: "Salon du Livre de Paris",
    date: "12 Avril 2024 - 15h00",
    location: "Grand Palais Éphémère, Paris",
    description:
      "Je serai présente sur le stand des éditions 'Plumes d'Argent' pour une séance de dédicaces de mon dernier roman, 'Les Sentinelles de Verre'.",
    mapQuery: "Grand Palais Éphémère, Place Joffre, 75007 Paris, France",
  },
  {
    id: 2,
    title: "Rencontre et Dédicace à la Librairie 'Le Divan'",
    date: "25 Mai 2024 - 18h00",
    location: "Librairie Le Divan, Paris",
    description:
      "Une soirée d'échange et de discussion autour de mes inspirations et de mon processus d'écriture, suivie d'une séance de dédicaces.",
    mapQuery:
      "Librairie Le Divan, 203 Rue de la Convention, 75015 Paris, France",
  },
  {
    id: 3,
    title: "Festival 'Les Imaginales'",
    date: "8 Juin 2024 - 11h00",
    location: "Épinal",
    description:
      "Participation à une table ronde sur le thème 'Construire des mondes imaginaires', puis dédicaces sur le stand de la librairie partenaire.",
    mapQuery: "Centre des Congrès, Épinal, France",
  },
];

export const PRESS_DATA: PressItem[] = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/seed/press1/800/1100",
    title: "Une plume qui captive",
    source: "Le Figaro Littéraire, Avril 2024",
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/seed/press2/800/1100",
    title: "L'interview vérité de Valérie FRANCOIS",
    source: "Magazine Lire, Mars 2024",
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/seed/press3/800/1100",
    title: "Le phénomène littéraire du printemps",
    source: "France Culture, Mai 2024",
  },
  {
    id: 4,
    imageUrl: "https://picsum.photos/seed/press4/800/1100",
    title: "Dans les coulisses de la création",
    source: "Le Monde des Livres, Avril 2024",
  },
];
