export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  fr: {
    // Navigation
    'nav.home':        'Accueil',
    'nav.services':    'Activités',
    'nav.references':  'Références',
    'nav.clients':     'Clients',
    'nav.news':        'Actualités',
    'nav.team':        'Équipe',
    'nav.contact':     'Contact',

    // Hero
    'hero.tagline':    'Maîtrise d\'Ouvrage\nau plus haut niveau.',
    'hero.sub':        'AMO · MOD · Conseil',
    'hero.cta':        'Voir nos références',

    // Value props
    'vp.1.title':  'Expérience Probante',
    'vp.1.body':   'Plus de trente ans de suivi de projets immobiliers tertiaires complexes pour des investisseurs institutionnels, des foncières et des promoteurs.',
    'vp.2.title':  'Accompagnement Personnalisé',
    'vp.2.body':   'Une présence sur-mesure à chaque phase — de la programmation à la livraison — quels que soient la taille, la complexité ou les contraintes du projet.',
    'vp.3.title':  'Assistance et Conseil',
    'vp.3.body':   'Une expertise conseil en programmation, conception et réalisation, fondée sur le triptyque Qualité–Coût–Délai.',

    // Sections
    'section.references':  'Références sélectionnées',
    'section.clients':     'Ils nous font confiance',
    'section.news':        'Actualités',
    'section.team':        'L\'Équipe',
    'section.services':    'Nos Activités',

    // References
    'ref.all':         'Voir toutes les références',
    'ref.filter.all':  'Tous',
    'ref.count':       'projets',
    'ref.area':        'Surface',
    'ref.mission':     'Mission',
    'ref.client':      'Client',

    // Contact
    'contact.title':   'Contact',
    'contact.company': 'Société',
    'contact.role':    'Fonction',
    'contact.name':    'Nom',
    'contact.email':   'Email',
    'contact.subject': 'Objet',
    'contact.message': 'Message',
    'contact.required':'Champs obligatoires',
    'contact.send':    'Envoyer le message',
    'contact.reply':   'Réponse sous 48h',
    'contact.address': 'Paris, France',

    // Team
    'team.title':      'L\'Équipe',
    'team.sub':        'Des experts au service de vos projets.',
    'team.founder':    'Fondateur & Directeur',
    'team.cta':        'Travailler ensemble',

    // News
    'news.title':      'Actualités',
    'news.empty':      'Les actualités arrivent bientôt.',
    'news.read':       'Lire',
    'news.all':        'Toutes les actualités',

    // Clients
    'clients.title':   'Ils nous font confiance',
    'clients.count':   'clients institutionnels',

    // CTA
    'cta.contact':     'Discutons de votre projet',
    'cta.contact.btn': 'Nous contacter',

    // Footer
    'footer.tagline':  'AMO · MOD · Conseil',
    'footer.location': 'Paris, France',
    'footer.copy':     '© 2026 Nomad Conseil',

    // Services
    'services.amo.title': 'Assistance à Maîtrise d\'Ouvrage',
    'services.mod.title': 'Maîtrise d\'Ouvrage Déléguée',
    'services.conseil.title': 'Conseil',
    'services.phase.prog':  'Programmation',
    'services.phase.conc':  'Conception',
    'services.phase.real':  'Réalisation',
  },

  en: {
    'nav.home':        'Home',
    'nav.services':    'Services',
    'nav.references':  'References',
    'nav.clients':     'Clients',
    'nav.news':        'News',
    'nav.team':        'Team',
    'nav.contact':     'Contact',

    'hero.tagline':    'Project Management\nat the highest level.',
    'hero.sub':        'AMO · MOD · Advisory',
    'hero.cta':        'View our references',

    'vp.1.title':  'Proven Expertise',
    'vp.1.body':   'Over thirty years managing complex commercial real estate projects for institutional investors, REITs and developers.',
    'vp.2.title':  'Tailored Support',
    'vp.2.body':   'Bespoke involvement at every phase — from brief to handover — regardless of scale, complexity or constraints.',
    'vp.3.title':  'Advisory & Assistance',
    'vp.3.body':   'Expert advisory across programming, design and delivery, anchored on the Quality–Cost–Schedule triptych.',

    'section.references':  'Selected references',
    'section.clients':     'They trust us',
    'section.news':        'News',
    'section.team':        'The Team',
    'section.services':    'Our Services',

    'ref.all':         'View all references',
    'ref.filter.all':  'All',
    'ref.count':       'projects',
    'ref.area':        'Area',
    'ref.mission':     'Mission',
    'ref.client':      'Client',

    'contact.title':   'Contact',
    'contact.company': 'Company',
    'contact.role':    'Role',
    'contact.name':    'Name',
    'contact.email':   'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.required':'Required fields',
    'contact.send':    'Send message',
    'contact.reply':   'Response within 48h',
    'contact.address': 'Paris, France',

    'team.title':      'The Team',
    'team.sub':        'Experts at the service of your projects.',
    'team.founder':    'Founder & Director',
    'team.cta':        'Work together',

    'news.title':      'News',
    'news.empty':      'News coming soon.',
    'news.read':       'Read',
    'news.all':        'All news',

    'clients.title':   'They trust us',
    'clients.count':   'institutional clients',

    'cta.contact':     'Let\'s discuss your project',
    'cta.contact.btn': 'Contact us',

    'footer.tagline':  'AMO · MOD · Advisory',
    'footer.location': 'Paris, France',
    'footer.copy':     '© 2026 Nomad Conseil',

    'services.amo.title': 'Project Management Assistance (AMO)',
    'services.mod.title': 'Delegated Project Management (MOD)',
    'services.conseil.title': 'Advisory',
    'services.phase.prog':  'Programming',
    'services.phase.conc':  'Design',
    'services.phase.real':  'Delivery',
  },
} as const;

export type UIKey = keyof typeof ui.fr;

export function t(lang: Lang, key: UIKey): string {
  return (ui[lang] as Record<string, string>)[key] ?? (ui.fr as Record<string, string>)[key] ?? key;
}

export function getLocalePath(lang: Lang, path: string): string {
  return `/${lang}${path}`;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'fr' ? 'en' : 'fr';
}

export function getAlternatePath(lang: Lang, slug: string): string {
  const alt = getAlternateLang(lang);
  return `/${alt}${slug}`;
}
