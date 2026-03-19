import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import CoreValues from '../components/CoreValues';
import Updates from '../components/Updates';
import Membership from '../components/Membership';
import Donate from '../components/Donate';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>नेपाल विवेकशील पार्टी | Nepal Bibeksheel Party</title>
        <meta name="description" content="नेपाल विवेकशील पार्टीको आधिकारिक वेबसाइट। सुसंस्कृत राजनीति र समृद्ध राष्ट्र निर्माणको अभियानमा हामीसँग जोडिनुहोस्।" />
        <meta name="keywords" content="Nepal Bibeksheel Party, Bibeksheel, Politics Nepal, Nepali Politics, Youth Politics Nepal, विवेकशील पार्टी, नेपाल राजनीति" />
        <meta property="og:title" content="नेपाल विवेकशील पार्टी | Nepal Bibeksheel Party" />
        <meta property="og:description" content="सुसंस्कृत राजनीति र समृद्ध राष्ट्र निर्माणको अभियानमा हामीसँग जोडिनुहोस्।" />
        <meta property="og:type" content="website" />
      </Helmet>
      <main>
        <Hero />
        <CoreValues />
        <Updates />
        <Membership />
        <Donate />
      </main>
    </>
  );
}
