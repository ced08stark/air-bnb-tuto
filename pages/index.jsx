
import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header'
import Banner from '../components/Banner'
import { useState } from 'react'
import React from 'react'
import SmallCard from "../components/SmallCard"
import MeduimCard from "../components/MediumCard"
import LargeCard from "../components/LargeCard"
import Footer from "../components/Footer"

const Home = () => {

  const mediumDataExplore = [
    {
      img: "https://links.papareact.com/2io",
      title: "Outdoor getaways",
    },
    {
      img: "https://links.papareact.com/q7j",
      title: "Unique stays",
    },
    {
      img: "https://links.papareact.com/s03",
      title: "Entire homes",
    },
    {
      img: "https://links.papareact.com/8ix",
      title: "Pet allowed",
    },
  ];

  const smallDataExplore = [
    {
      img: "https://links.papareact.com/5j2",
      Location: "London",
      distance: "45-minute drive",
    },
    {
      img: "https://links.papareact.com/1to",
      Location: "Manchester",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/40m",
      Location: "liverpool",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/msp",
      Location: "fork",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/ynx",
      Location: "Cardiff",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/kji",
      Location: "Mewquay",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/41m",
      Location: "Move",
      distance: "4.5-hour drive",
    },
  ];

  return (
    <div className="">
      <Head>
        <title>Tuto Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* pull some data from a server - API endpoins */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {smallDataExplore?.map((data) => (
              <SmallCard
                key={data.img}
                img={data.img}
                distance={data.distance}
                location={data.Location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {mediumDataExplore?.map((item) => (
              <MeduimCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <LargeCard img="https://links.papareact.com/4cj" title="The Greatest Outdoors" description="wishlists curated by Airbnb." buttonText="Get Inspired" />
      </main>
      <Footer />
    </div>
  );
}



export default Home