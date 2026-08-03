import { useCallback, useState } from 'react';
import InfoDialog from './InfoDialog';

export default function Footer() {
  const [dialog, setDialog] = useState(null);
  const closeDialog = useCallback(() => setDialog(null), []);

  return (
    <>
      <footer className="site-footer">
        <div className="footer-glow footer-glow-one" aria-hidden="true" />
        <div className="footer-glow footer-glow-two" aria-hidden="true" />
        <div className="footer-stars" aria-hidden="true">✦ · ✧ · ✦ · ✧ · ✦</div>

        <div className="footer-inner">
          <div className="footer-brand-card">
            <span className="footer-brand-sparkle sparkle-top" aria-hidden="true">✦</span>
            <span className="footer-brand-sparkle sparkle-bottom" aria-hidden="true">✧</span>

            <img
              className="footer-logo"
              src="/Other_Images/PurpleMoonLogo.png"
              alt="Purple Moon"
              width="1319"
              height="279"
            />

            <div className="footer-brand-copy">
              <strong>www.purplemoongames.xyz</strong>
              <span>A celebration of the CD-ROM classics.</span>
            </div>
          </div>

          <div className="footer-links" aria-label="Footer links">
            <button type="button" aria-haspopup="dialog" onClick={() => setDialog('about')}>About</button>
            <button type="button" aria-haspopup="dialog" onClick={() => setDialog('privacy')}>Privacy Policy</button>
          </div>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} purplemoongames.xyz. Fan-made, not affiliated with Purple Moon.
        </p>
      </footer>

      <InfoDialog
        open={dialog === 'about'}
        onClose={closeDialog}
        titleId="about-title"
        eyebrow="Purple Moon Games"
        title="About this site"
      >
        <div className="dialog-lede-card about-lede-card">
          <span className="dialog-lede-icon" aria-hidden="true">☾</span>
          <div>
            <p>
              Purple Moon Games is a fan-made archive and celebration of the imaginative CD-ROM games.
            </p>
          </div>
        </div>

        <div className="dialog-feature-grid" aria-label="What you can find on this site">
          <section className="dialog-feature-card">
            <span aria-hidden="true">✦</span>
            <strong>Game shelf</strong>
            <p>Stories, artwork, release details, and links for revisiting the classic titles.</p>
          </section>
          <section className="dialog-feature-card">
            <span aria-hidden="true">♥</span>
            <strong>Yearbook</strong>
            <p>Character profiles for Rockett and the unforgettable students of Whistling Pines.</p>
          </section>
          <section className="dialog-feature-card">
            <span aria-hidden="true">✧</span>
            <strong>Play resources</strong>
            <p>Helpful information for running these late-’90s CD-ROM adventures today.</p>
          </section>
        </div>

        <div className="dialog-rights-note">
          <span aria-hidden="true">★</span>
          <p>
            Purple Moon and all related game titles, characters, and artwork belong to their respective rights
            holders. This website is not an official Purple Moon product and is not affiliated with the original company.
          </p>
        </div>
      </InfoDialog>

      <InfoDialog
        open={dialog === 'privacy'}
        onClose={closeDialog}
        titleId="privacy-title"
        eyebrow="Purple Moon Games"
        title="Privacy Policy"
      >
        <p className="privacy-updated">
          <span aria-hidden="true">✦</span>
          Last updated: August 2, 2026
        </p>

        <div className="privacy-card-grid">
          <section className="privacy-card">
            <span className="privacy-card-icon" aria-hidden="true">♡</span>
            <div>
              <strong>No account required</strong>
              <p>This website doesn't ask you to create an account or directly collect your contact information.</p>
            </div>
          </section>

          <section className="privacy-card">
            <span className="privacy-card-icon" aria-hidden="true">✦</span>
            <div>
              <strong>Google Analytics</strong>
              <p>Analytics may be used to understand general traffic and how visitors move through the site.</p>
            </div>
          </section>

          <section className="privacy-card">
            <span className="privacy-card-icon" aria-hidden="true">☾</span>
            <div>
              <strong>Typical analytics data</strong>
              <p>This may include device type, browser, general location, pages viewed, and visit duration.</p>
            </div>
          </section>

          <section className="privacy-card">
            <span className="privacy-card-icon" aria-hidden="true">✧</span>
            <div>
              <strong>Your choices</strong>
              <p>You can limit analytics through browser settings, privacy extensions, or Google’s opt-out tools.</p>
            </div>
          </section>
        </div>

        <div className="privacy-external-note">
          <span aria-hidden="true">›</span>
          <p>
            External links, including Internet Archive links, are governed by the privacy policies of those websites.
          </p>
        </div>
      </InfoDialog>
    </>
  );
}
