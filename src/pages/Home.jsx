import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';
import PageTitle from '../components/PageTitle';

const purpleMoonStats = [
  {
    number: '9',
    label: 'games and creative titles',
    detail: 'Stories, sports, puzzles, and creative play',
    icon: '✦',
  },
  {
    number: '6',
    label: 'Rockett titles',
    detail: 'From her first school day to summer camp',
    icon: '♥',
  },
  {
    number: '2',
    label: 'Secret Paths adventures',
    detail: 'Magical journeys through forest and sea',
    icon: '☾',
  },
  {
    number: '5',
    label: 'titles released in 1998',
    detail: 'The busiest release year',
    icon: '★',
  },
  {
    number: '1997–1999',
    label: 'the original release era',
    detail: 'Three unforgettable years of CD-ROM magic',
    icon: '✧',
  },
];

export default function Home() {
  return (
    <main id="main-content">
      <PageTitle
        title="Purple Moon Games"
        description="Explore the Purple Moon games, characters, and resources for playing the classic CD-ROM adventures today."
      />

      <section className="home-hero">
        <div className="sparkle-field" aria-hidden="true">
          <span>✧</span><span>✧</span><span>★</span><span>✦</span><span>✧</span>
        </div>

        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow">Welcome back to Whistling Pines</p>
            <h1>Choices, friendships, and one unforgettable middle school.</h1>
            <p className="hero-lede">
              Revisit the imaginative Purple Moon CD-ROM games that made everyday middle-school moments
              feel like an adventure. Explore the stories, meet the students of Whistling Pines, and find
              resources for playing the classics today.
            </p>

            <div className="hero-actions">
              <Link className="button button-primary" to="/games">
                Explore the games <Icon name="arrow" size={18} />
              </Link>
              <Link className="button button-secondary" to="/characters">
                Meet the characters <Icon name="arrow" size={18} />
              </Link>
            </div>

            <p className="hero-note">
              <span aria-hidden="true">✦</span>
              <span>A fan-made home for the stories, characters, and memories.</span>
            </p>
          </div>

          <div
            className="hero-art"
            role="group"
            aria-label="Rockett’s New School feature with Rockett in her first-day outfit"
          >
            <div className="hero-art-panel">
              {/* <span className="hero-art-sparkle hero-art-sparkle-one" aria-hidden="true">✦</span> */}
              <span className="hero-art-sparkle hero-art-sparkle-two" aria-hidden="true">✧</span>

              <div className="hero-art-copy">
                <p className="hero-game-eyebrow">
                  <span aria-hidden="true">✦</span>
                  The Beginning
                </p>

                <img
                  className="hero-logo"
                  src="/Other_Images/PurpleMoonLogo.png"
                  alt="Purple Moon"
                />

                <div className="hero-game-title">
                  <h2>
                    <span>Rockett’s</span>
                    <em>New School</em>
                  </h2>
                </div>

                <p className="hero-game-blurb">
                  Rockett’s first day at Whistling Pines is the beginning of new friendships, choices, and finding her place.
                </p>
              </div>

              <figure className="rockett-figure">
                <div className="rockett-stage">
                  <span className="rockett-stage-moon" aria-hidden="true" />
                  <span className="rockett-stage-star star-a" aria-hidden="true">✦</span>
                  <img
                    className="rockett-outfit"
                    src="/Other_Images/Rocketts_First_Day_Outfit.png"
                    alt="Rockett wearing her complete first-day outfit from Rockett’s New School"
                  />
                </div>

                <figcaption>
                  <strong>Rockett Movado</strong>
                  <span>First-day look</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-section section">
        <div className="container split-intro">
          <div>
            <p className="eyebrow">The series</p>
            <h2>Games that treated friendship like a real adventure</h2>
          </div>
          <div className="prose-large">
            <p>
              Purple Moon created story-rich games centered on girls’ experiences, personalities, and choices.
              Instead of racing toward a single “right” ending, players explored conversations, cliques,
              creativity, family worries, teamwork, and the complicated social world of growing up.
            </p>
            <p>
              The Rockett games follow a new student at Whistling Pines Junior High, while Secret Paths and
              Starfire expand the universe through puzzles, sports, reflection, and magical environments.
            </p>
          </div>
        </div>
      </section>

      <section className="hallway-feature section section-lavender">
        <div className="container hallway-grid">
          <div className="image-frame hallway-frame">
            <img src="/Other_Images/Hallway.png" alt="The locker-lined hallway at Whistling Pines Junior High" />
            <span className="image-label">Whistling Pines Junior High</span>
          </div>
          <div className="feature-copy">
            <p className="eyebrow">Between classes</p>
            <h2>The hallway is where everything happens</h2>
            <p>
              The lockers at Whistling Pines are more than background scenery. They are a place to discover
              notes, check in with friends, revisit memories, and decide where Rockett’s day goes next.
            </p>
            <ul className="icon-list">
              <li><span className="mini-icon" aria-hidden="true">♥</span><span>Friendship-driven storytelling</span></li>
              <li><span className="mini-icon" aria-hidden="true">✎</span><span>Branching choices and personal journals</span></li>
              <li><span className="mini-icon" aria-hidden="true">✦</span><span>A late-’90s atmosphere</span></li>
            </ul>
            <Link className="text-link" to="/games">
              See every game <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="class-photo-section section">
        <span className="class-photo-section-star star-one" aria-hidden="true">✦</span>
        <span className="class-photo-section-star star-two" aria-hidden="true">✧</span>
        <span className="class-photo-section-star star-three" aria-hidden="true">★</span>

        <div className="container">
          <div className="section-heading centered class-photo-heading">
            <p className="eyebrow">Class of Whistling Pines ’99</p>
            <h2>Every clique, crush, conflict, and friendship</h2>
            <p>
              Get reacquainted with Rockett, The Ones, the Sagittarius Girls, and the rest of the crew.
            </p>
          </div>

          <div className="class-photo-card">
            <span className="photo-tape photo-tape-left" aria-hidden="true" />
            <span className="photo-tape photo-tape-right" aria-hidden="true" />
            <span className="photo-sparkle photo-sparkle-one" aria-hidden="true">✦</span>
            <span className="photo-sparkle photo-sparkle-two" aria-hidden="true">✧</span>

            <div className="class-photo-wrap">
              <img
                src="/Other_Images/ClassPhoto.png"
                alt="Complete Whistling Pines class photo featuring the Purple Moon characters"
                width="1448"
                height="1086"
              />
            </div>

            <div className="photo-caption">
              <div className="photo-caption-copy">
                <span className="photo-caption-kicker">Whistling Pines yearbook</span>
                <strong>Class photo</strong>
                <span>Everyone is here! Plus one very important framed classmate.</span>
              </div>
              <Link className="button button-small photo-button" to="/characters">
                Open the yearbook <Icon name="arrow" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="memory-strip stats-section" aria-label="Purple Moon game statistics">
        <div className="stats-orbit stats-orbit-one" aria-hidden="true" />
        <div className="stats-orbit stats-orbit-two" aria-hidden="true" />
        <span className="stats-floating-star stats-star-one" aria-hidden="true">✦</span>
        <span className="stats-floating-star stats-star-two" aria-hidden="true">✧</span>
        <span className="stats-floating-star stats-star-three" aria-hidden="true">★</span>

        <div className="container">
          <div className="stats-heading">
            <div>
              <p className="eyebrow light">Purple Moon by the numbers</p>
              <h2>A little shelf of late-’90s magic</h2>
            </div>
            <p>Nine titles, countless choices, and a whole lot of memories.</p>
          </div>

          <div className="memory-grid memory-grid-five">
            {purpleMoonStats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <span className="stat-icon" aria-hidden="true">{stat.icon}</span>
                <strong>{stat.number}</strong>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-detail">{stat.detail}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
