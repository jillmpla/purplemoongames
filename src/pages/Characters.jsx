import { useEffect, useMemo, useRef, useState } from 'react';
import { characters } from '../data/content';
import { Icon } from '../components/Icons';
import PageTitle from '../components/PageTitle';

const signs = ['All signs', ...new Set(characters.map((character) => character.zodiac).sort())];

export default function Characters() {
  const [query, setQuery] = useState('');
  const [zodiac, setZodiac] = useState('All signs');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const previewDialogRef = useRef(null);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return characters.filter((character) => {
      const signMatch = zodiac === 'All signs' || character.zodiac === zodiac;
      const searchMatch =
        !normalized ||
        `${character.name} ${character.description} ${character.zodiac}`.toLowerCase().includes(normalized);

      return signMatch && searchMatch;
    });
  }, [query, zodiac]);

  useEffect(() => {
    const dialog = previewDialogRef.current;

    if (selectedCharacter && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [selectedCharacter]);

  const openPreview = (character) => {
    setSelectedCharacter(character);
  };

  const closePreview = () => {
    const dialog = previewDialogRef.current;

    if (dialog?.open) {
      dialog.close();
    }

    setSelectedCharacter(null);
  };

  return (
    <main id="main-content">
      <PageTitle
        title="Characters | Purple Moon Games"
        description="Meet Rockett Movado and the students of Whistling Pines Junior High from the Purple Moon games."
      />

      <section className="page-hero characters-hero">
        <div className="page-hero-stars" aria-hidden="true">
          <span>✧</span><span>✦</span><span>★</span><span>✧</span><span>✦</span>
        </div>
        <div className="moon-orbit orbit-one" aria-hidden="true" />
        <div className="moon-orbit orbit-two" aria-hidden="true" />

        <div className="container page-hero-layout">
          <div className="page-hero-inner">
            <p className="eyebrow light">The Whistling Pines yearbook</p>
            <h1>Meet the characters</h1>
            <p>
              From artistic free spirits and popular-girl royalty to soccer stars, rebels, musicians, psychics,
              and super-nerds. Everyone brings something unforgettable.
            </p>
          </div>

          <aside className="page-hero-feature-card characters-feature-card" aria-label="Whistling Pines character collection overview">
            <span className="feature-card-sparkle feature-card-sparkle-one" aria-hidden="true">✦</span>
            <span className="feature-card-sparkle feature-card-sparkle-two" aria-hidden="true">★</span>
            <div className="yearbook-heart" aria-hidden="true">♥</div>
            <p>Inside the yearbook</p>
            <strong>14 classmates</strong>
            <span>Every clique, crush, talent, and zodiac sign</span>
            <div className="feature-card-pills" aria-label="Character groups">
              <span>The Ones</span>
              <span>Rebel Angels</span>
              <span>Sagittarius Girls</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section catalog-section">
        <div className="container">
          <div className="filter-panel character-filters" aria-label="Filter characters">
            <div className="character-filter-heading">
              <div className="filter-title-cluster">
                <span className="filter-star" aria-hidden="true">✦</span>
                <div>
                  <p>Yearbook finder</p>
                  <h2>Find a classmate</h2>
                </div>
              </div>
              <span className="filter-sparkles" aria-hidden="true">✧ ✦ ✧</span>
            </div>

            <div className="character-filter-fields">
              <div className="field-group">
                <label className="field-label" htmlFor="character-search">Search characters</label>
                <span className="field-shell search-field-shell">
                  <Icon name="search" size={20} />
                  <input
                    id="character-search"
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Name, interests, or personality"
                  />
                  {query && (
                    <button
                      className="clear-search"
                      type="button"
                      onClick={() => setQuery('')}
                      aria-label="Clear character search"
                    >
                      <Icon name="close" size={17} />
                    </button>
                  )}
                </span>
              </div>

              <div className="field-group">
                <label className="field-label" htmlFor="zodiac-filter">Zodiac sign</label>
                <span className="field-shell select-field-shell">
                  <Icon name="sparkle" size={18} />
                  <select id="zodiac-filter" value={zodiac} onChange={(event) => setZodiac(event.target.value)}>
                    {signs.map((sign) => (
                      <option key={sign}>{sign}</option>
                    ))}
                  </select>
                </span>
              </div>
            </div>
          </div>

          <p className="result-count" aria-live="polite">
            Showing {filtered.length} {filtered.length === 1 ? 'character' : 'characters'}
          </p>

          <div className="character-grid">
            {filtered.map((character) => (
              <article className="character-card" key={character.name}>
                <button
                  className="character-image-button"
                  type="button"
                  onClick={() => openPreview(character)}
                  aria-label={`View a larger portrait of ${character.name}`}
                >
                  <span className="character-portrait">
                    <span className="portrait-moon" aria-hidden="true" />
                    <img
                      src={character.image}
                      alt={`${character.name} from the Purple Moon games`}
                      loading="lazy"
                    />
                    <span className="zodiac-badge">
                      <Icon name="sparkle" size={15} /> {character.zodiac}
                    </span>
                    <span className="view-character-label" aria-hidden="true">
                      <Icon name="search" size={16} /> View portrait
                    </span>
                  </span>
                </button>

                <div className="character-content">
                  <h2>{character.name}</h2>
                  <p>{character.description}</p>
                  <div className="birthday-row">
                    <Icon name="heart" size={18} />
                    <span><strong>Birthday:</strong> {character.birthday}</span>
                  </div>
                </div>
              </article>
            ))}

            {filtered.length === 0 && (
              <div className="empty-state full-width">
                <Icon name="sparkle" size={48} />
                <h2>No characters found</h2>
                <p>Try another name, trait, or zodiac sign.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <dialog
        ref={previewDialogRef}
        className="character-preview-dialog"
        aria-label={selectedCharacter ? `Larger portrait of ${selectedCharacter.name}` : 'Larger character portrait'}
        onClose={() => setSelectedCharacter(null)}
        onCancel={(event) => {
          event.preventDefault();
          closePreview();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closePreview();
          }
        }}
      >
        {selectedCharacter && (
          <div className="character-preview-card">
            <button
              className="character-preview-close"
              type="button"
              onClick={closePreview}
              aria-label="Close character portrait"
            >
              <Icon name="close" size={22} />
            </button>

            <div className="character-preview-visual">
              <span className="preview-sparkle preview-sparkle-one" aria-hidden="true">✦</span>
              <span className="preview-sparkle preview-sparkle-two" aria-hidden="true">✧</span>
              <span className="preview-sparkle preview-sparkle-three" aria-hidden="true">★</span>
              <span className="character-preview-moon" aria-hidden="true" />
              <img
                src={selectedCharacter.image}
                alt={`${selectedCharacter.name} from the Purple Moon games`}
              />
            </div>

            <div className="character-preview-copy">
              <p className="eyebrow">Whistling Pines yearbook</p>
              <h2>{selectedCharacter.name}</h2>

              <div className="character-preview-details">
                <span><Icon name="sparkle" size={16} /> {selectedCharacter.zodiac}</span>
                <span><Icon name="heart" size={16} /> {selectedCharacter.birthday}</span>
              </div>

              <p>{selectedCharacter.description}</p>
            </div>
          </div>
        )}
      </dialog>
    </main>
  );
}
