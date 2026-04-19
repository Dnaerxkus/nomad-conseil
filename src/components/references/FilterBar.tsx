import { useState, useEffect } from 'react';

interface Props {
  lang: 'fr' | 'en';
}

const FILTERS = [
  { key: 'all',   fr: 'Tous',                    en: 'All' },
  { key: 'AMO',   fr: 'AMO',                     en: 'AMO' },
  { key: 'MOD',   fr: 'MOD',                     en: 'MOD' },
  { key: 'Conseil', fr: 'Conseil',               en: 'Advisory' },
  { key: 'Directeur de programme', fr: 'Dir. de programme', en: 'Programme Director' },
];

export default function FilterBar({ lang }: Props) {
  const [active, setActive] = useState('all');

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('[data-project-card]');

    cards.forEach((card) => {
      if (active === 'all') {
        card.classList.remove('filtered-out');
      } else {
        try {
          const types: string[] = JSON.parse(
            card.getAttribute('data-types') || '[]'
          );
          if (types.includes(active)) {
            card.classList.remove('filtered-out');
          } else {
            card.classList.add('filtered-out');
          }
        } catch {
          card.classList.remove('filtered-out');
        }
      }
    });
  }, [active]);

  return (
    <div className="filter-bar" role="group" aria-label={lang === 'fr' ? 'Filtrer les projets' : 'Filter projects'}>
      {FILTERS.map(({ key, fr, en }) => (
        <button
          key={key}
          className={`filter-pill${active === key ? ' active' : ''}`}
          onClick={() => setActive(key)}
          aria-pressed={active === key}
        >
          {lang === 'fr' ? fr : en}
        </button>
      ))}
    </div>
  );
}
