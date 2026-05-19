/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ThreeScene from './components/ThreeScene';
import { Navbar, Hero, Services, Properties, About, Location, Contact, Footer } from './components/PageComponents';

export default function App() {
  return (
    <main className="relative min-h-screen">
      <ThreeScene />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <Services />
        <Properties />
        <About />
        <Location />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
