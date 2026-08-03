import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';

export default function NotFound() {
  return (
    <main id="main-content">
      <PageTitle title="Page Not Found | Purple Moon Games" description="The requested Purple Moon Games page could not be found." />
      <section className="section not-found">
        <div className="container centered">
          <p className="eyebrow">Locker combination not found</p>
          <h1>That page wandered off between classes.</h1>
          <p>Head back to the homepage and try another hallway.</p>
          <Link className="button button-primary" to="/">Return home</Link>
        </div>
      </section>
    </main>
  );
}
