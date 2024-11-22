import React from 'react';
import './assets/css/styles.css';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import ContactOptions from './components/ContactOptions';
import Locations from './components/Locations';
import Footer from './components/Footer';

const App = () => (
  <>
    <Header />
    <main>
      <section aria-label="Contact Us" className="contacting">
        <div className="container">
          <h1>Contact Us</h1>
          <div className="content">
            <ContactOptions />
            <ContactForm />
          </div>
        </div>
      </section>
      <Locations />
    </main>
    <Footer />
  </>
);

export default App;