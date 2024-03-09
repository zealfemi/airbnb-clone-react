import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './components/data';

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        // item={item}
        {...item}
      />
    );
  });

  return (
    <div className="container">
      <NavBar />
      <Hero />
      <section className="cards">{cards}</section>
    </div>
  );
}
