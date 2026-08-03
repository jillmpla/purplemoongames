import { useEffect, useMemo, useRef, useState } from 'react';
import { games, playGuide } from '../data/content';
import { Icon } from '../components/Icons';
import PageTitle from '../components/PageTitle';

const collections = ['All games', 'Rockett series', 'Secret Paths', 'Creative studio', 'Other adventures'];

export default function Games() {
  const [query, setQuery] = useState('');
  const [collection, setCollection] = useState('All games');
  const [selectedGame, setSelectedGame] = useState(null);
  const previewDialogRef = useRef(null);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return games.filter((game) => {
      const collectionMatch = collection === 'All games' || game.collection === collection;
      const searchMatch =
        !normalized ||
        `${game.title} ${game.description} ${game.date}`.toLowerCase().includes(normalized);

      return collectionMatch && searchMatch;
    });
  }, [query, collection]);

  useEffect(() => {
    const dialog = previewDialogRef.current;

    if (selectedGame && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [selectedGame]);

  const openPreview = (game) => {
    setSelectedGame(game);
  };

  const closePreview = () => {
    const dialog = previewDialogRef.current;

    if (dialog?.open) {
      dialog.close();
    }

    setSelectedGame(null);
  };

  return (
    <main id="main-content">
      <PageTitle
        title="Games | Purple Moon Games"
        description="Browse Purple Moon games and find resources for playing the classic CD-ROM titles today."
      />

      <section className="page-hero games-hero">
        <div className="page-hero-stars" aria-hidden="true">
          <span>✦</span><span>✧</span><span>★</span><span>✦</span><span>✧</span>
        </div>
        <div className="moon-orbit orbit-one" aria-hidden="true" />
        <div className="moon-orbit orbit-two" aria-hidden="true" />

        <div className="container page-hero-layout">
          <div className="page-hero-inner">
            <p className="eyebrow light">The complete shelf</p>
            <h1>Choose your next adventure</h1>
            <p>
              Explore Rockett’s school stories, magical Secret Paths, soccer challenges, and a creative studio
              made for inventing adventures of your own.
            </p>
          </div>

          <aside className="page-hero-feature-card games-feature-card" aria-label="Purple Moon game collection overview">
            <span className="feature-card-sparkle feature-card-sparkle-one" aria-hidden="true">✦</span>
            <span className="feature-card-sparkle feature-card-sparkle-two" aria-hidden="true">✧</span>
            <div className="feature-card-moon" aria-hidden="true">☾</div>
            <p>On the shelf</p>
            <strong>9 adventures</strong>
            <span>Stories, puzzles, soccer, and creativity</span>
            <div className="feature-card-pills" aria-label="Featured game collections">
              <span>Rockett</span>
              <span>Secret Paths</span>
              <span>Starfire</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section catalog-section">
        <div className="container">
          <div className="filter-panel game-filters" aria-label="Filter games">
            <div className="game-filter-heading">
              <div className="filter-title-cluster">
                <span className="filter-star game-filter-star" aria-hidden="true">✦</span>
                <div>
                  <p>Game shelf finder</p>
                  <h2>Find an adventure</h2>
                </div>
              </div>
              <span className="filter-sparkles" aria-hidden="true">✧ ✦ ✧</span>
            </div>

            <div className="game-filter-controls">
              <div className="field-group">
                <label className="field-label" htmlFor="game-search">Search games</label>
                <span className="field-shell search-field-shell game-search-shell">
                  <Icon name="search" size={20} />
                  <input
                    id="game-search"
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Title, description, or year"
                  />
                  {query && (
                    <button
                      className="clear-search"
                      type="button"
                      onClick={() => setQuery('')}
                      aria-label="Clear game search"
                    >
                      <Icon name="close" size={17} />
                    </button>
                  )}
                </span>
              </div>

              <div className="game-collection-group">
                <span className="field-label">Browse by collection</span>
                <div className="chip-group game-chip-group" aria-label="Game collection">
                  {collections.map((item) => {
                    const active = item === collection;

                    return (
                      <button
                        key={item}
                        type="button"
                        className={`chip${active ? ' active' : ''}`}
                        aria-pressed={active}
                        onClick={() => setCollection(item)}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <p className="result-count" aria-live="polite">
            Showing {filtered.length} {filtered.length === 1 ? 'title' : 'titles'}
          </p>

          <div className="game-grid">
            {filtered.map((game, index) => (
              <article className="game-card" key={game.title}>
                <button
                  className="game-image-button"
                  type="button"
                  onClick={() => openPreview(game)}
                  aria-label={`View the full-size image for ${game.title}`}
                >
                  <span className="game-image-wrap">
                    <img
                      src={game.image}
                      alt={`Screenshot or cover art for ${game.title}`}
                      loading="lazy"
                    />
                    <span className="game-number" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="view-image-label" aria-hidden="true">
                      <Icon name="search" size={17} /> View full image
                    </span>
                  </span>
                </button>

                <div className="game-card-content">
                  <div className="game-meta-top">
                    <span>
                      <Icon name="calendar" size={16} /> {game.date}
                    </span>
                    <span>{game.collection}</span>
                  </div>

                  <h2>{game.title}</h2>
                  <p>{game.description}</p>

                  <dl className="mini-details">
                    <div>
                      <dt>Creator</dt>
                      <dd>{game.creator}</dd>
                    </div>
                    <div>
                      <dt>Language</dt>
                      <dd>{game.language}</dd>
                    </div>
                  </dl>

                  <a
                    className="button button-primary card-button"
                    href={game.download}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open the Internet Archive ISO page for ${game.title} in a new tab`}
                  >
                    Open ISO page <Icon name="external" size={18} />
                  </a>
                </div>
              </article>
            ))}

            {filtered.length === 0 && (
              <div className="empty-state full-width">
                <Icon name="sparkle" size={48} />
                <h2>No games found</h2>
                <p>Try a different title, date, or collection.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="play-section section section-dark">
        <div className="container play-guide-grid">
          <div className="play-image-card">
            <img
              src={playGuide.image}
              alt="Windows 95 desktop used for running classic Purple Moon games"
            />
            <span className="pixel-tag">virtual machine setup</span>
          </div>

          <div>
            <p className="eyebrow light">How to play today</p>
            <h2>Play Purple Moon games on Windows 95</h2>

            <p>
              Use these archived setup files to create a Windows 95 virtual machine
              for running the original Purple Moon CD-ROM games.
            </p>

            <div className="guide-notes">
              <div>
                <Icon name="monitor" />
                <span>
                  Provides the files needed to install Windows 95 OSR2 in an{' '}
                  <a
                    href="https://86box.net/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    86Box
                  </a>{' '}
                  virtual machine.
                </span>
              </div>

              <div>
                <Icon name="download" />
                <span>Includes a Windows 95 installation CD image and Windows 98 boot floppy.</span>
              </div>
            </div>

            <p className="legal-note">
              A valid Windows 95 product key may be required. Use all software in
              accordance with its applicable license terms.
            </p>

            <a
              className="button button-gold"
              href={playGuide.link}
              target="_blank"
              rel="noreferrer"
              aria-label="Open the Windows 95 setup resources on Internet Archive in a new tab"
            >
              Open on Internet Archive <Icon name="external" size={18} />
            </a>
          </div>
        </div>
      </section>

      <dialog
        ref={previewDialogRef}
        className="game-preview-dialog"
        aria-label={selectedGame ? `Full-size image for ${selectedGame.title}` : 'Full-size game image'}
        onClose={() => setSelectedGame(null)}
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
        {selectedGame && (
          <div className="game-preview-card">
            <div className="game-preview-header">
              <div>
                <p className="eyebrow">Full game image</p>
                <h2>{selectedGame.title}</h2>
              </div>
              <button
                className="game-preview-close"
                type="button"
                onClick={closePreview}
                aria-label="Close full-size image"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <img
              className="game-preview-image"
              src={selectedGame.image}
              alt={`Full-size screenshot or cover art for ${selectedGame.title}`}
            />
          </div>
        )}
      </dialog>
    </main>
  );
}
