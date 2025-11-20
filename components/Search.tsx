'use client';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    PagefindUI: any;
  }
}

const Search: React.FC = () => {
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Pagefind UI CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/pagefind/pagefind-ui.css';
    document.head.appendChild(link);

    // Load Pagefind UI JS
    const script = document.createElement('script');
    script.src = '/pagefind/pagefind-ui.js';
    script.async = true;
    script.onload = () => {
      if (searchRef.current && window.PagefindUI) {
        new window.PagefindUI({
          element: searchRef.current,
          showSubResults: true,
          showImages: false,
          excerptLength: 15,
          resetStyles: false,
          translations: {
            placeholder: 'Keresés a dokumentációban...',
            clear_search: 'Törlés',
            load_more: 'Több eredmény',
            search_label: 'Keresés az oldalon',
            filters_label: 'Szűrők',
            zero_results: 'Nincs találat: [SEARCH_TERM]',
            many_results: '[COUNT] találat: [SEARCH_TERM]',
            one_result: '[COUNT] találat: [SEARCH_TERM]',
            alt_search: 'Nincs találat: [SEARCH_TERM]. Helyette mutatva: [DIFFERENT_TERM]',
            search_suggestion: 'Nincs találat: [SEARCH_TERM]. Próbáld ki:',
            searching: 'Keresés: [SEARCH_TERM]...',
          },
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (link.parentNode) link.parentNode.removeChild(link);
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return <div ref={searchRef} className="pagefind-search" />;
};

export default Search;
