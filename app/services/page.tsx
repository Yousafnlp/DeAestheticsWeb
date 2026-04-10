"use client";

import { useState } from "react";
import ServiceCategory from "@/components/service-category";
import SearchBar from "@/components/search-bar";
import { Navbar } from "@/components/Navbar";

const SERVICES = {
  "Medicated Facial": [
    { name: "HydraFacial 4000", description: "7 steps (Serums)", price: 4000 },
    {
      name: "HydraFacial Glow 6000",
      description: "10 steps (Serums + Phototherapy)",
      price: 6000,
    },
    {
      name: "HydraFacial Ultra 8500",
      description: "12 steps (Serums + Skin Tightening + Phototherapy)",
      price: 8500,
    },
    {
      name: "HydraFacial Supreme 10000",
      description:
        "15 steps (Serums + Skin Tightening + Lifting + Phototherapy)",
      price: 10000,
    },
  ],

  "BB Glow": [
    { name: "BB Glow 6000", description: "", price: 6000 },
    { name: "BB Glow Facial 9000", description: "", price: 9000 },
    { name: "BB Glow Ultra 12000", description: "", price: 12000 },
    { name: "BB Glow Supreme 20000", description: "", price: 20000 },
    {
      name: "Magic Peel 6k",
      description: "Acne / Pigmentation / Brightening",
      price: 6000,
    },
    { name: "Glow Peel 10k", description: "", price: 10000 },
  ],

  "Laser Facial": [
    { name: "Carbon Laser Peel 6000", description: "Laser Gel", price: 6000 },
    {
      name: "Carbon Laser Facial 9000",
      description: "HF + Laser Gel",
      price: 9000,
    },
    {
      name: "China Doll Facial 12000",
      description: "HF + Laser Gel + Phototherapy",
      price: 12000,
    },
    { name: "Red Carpet Facial 7000", description: "", price: 7000 },
    { name: "Hollywood Facial 12000", description: "", price: 12000 },
  ],

  "PRP/Mesotherapy": [
    { name: "Micro Needling 6000", description: "", price: 6000 },
    {
      name: "PRP Face / PRP Hair 8000",
      description: "5 sessions in 30,000",
      price: 8000,
    },
    {
      name: "Full Scalp PRP + GF 10000",
      description: "3 sessions in 30,000",
      price: 10000,
    },
    {
      name: "Mesotherapy 8000",
      description: "Brightening / Acne / Pigmentation",
      price: 8000,
    },
    {
      name: "Cocktail Mesotherapy 18000",
      description: "PRP + Serums (3 in 50,000)",
      price: 18000,
    },
  ],

  "Eyelash Extensions": [
    { name: "Classic", description: "", price: 10000 },
    { name: "Volume", description: "", price: 12000 },
    { name: "Hybrid", description: "", price: 15000 },
    { name: "Mega Volume", description: "", price: 20000 },
    { name: "Lash Lifting", description: "", price: 5000 },
    { name: "Lash Tinting", description: "", price: 3000 },
  ],

  "Nails Extensions": [
    { name: "Gel Nails", description: "", price: 5000 },
    { name: "Nails Art", description: "", price: 6000 },
    { name: "Acrylic", description: "", price: 10000 },
    { name: "Creative Nails", description: "", price: 10000 },
    { name: "3D Nails Art", description: "", price: 12000 },
  ],

  "IV Drips": [
    {
      name: "Whitening Injections Standard",
      description: "3 in 25,000",
      price: 8000,
    },
    {
      name: "Whitening Injections Supreme",
      description: "5 in 60,000",
      price: 12000,
    },
    {
      name: "Slimming Drip Standard",
      description: "3 in 20,000",
      price: 8000,
    },
    {
      name: "Slimming Drip Supreme",
      description: "6 in 50,000",
      price: 10000,
    },
    { name: "IV Glow Drip Standard", description: "", price: 6000 },
    { name: "IV Glow Drip Supreme", description: "", price: 8000 },
  ],

  HIFU: [
    { name: "Double Chin", description: "Single Session", price: 20000 },
    { name: "Full Face", description: "Single Session", price: 35000 },
    { name: "Neck", description: "Single Session", price: 30000 },
    { name: "Full Face + Neck", description: "Single Session", price: 55000 },
  ],

  "Laser Hair Removal": [
    { name: "Chin + Upper Lips", description: "Face", price: 3000 },
    { name: "Half Face", description: "Face", price: 4000 },
    { name: "Full Face", description: "Face", price: 5000 },
    { name: "Full Face + Neck", description: "Face", price: 6500 },
    { name: "Under Arms", description: "Body", price: 6000 },
    { name: "Full Legs", description: "Body", price: 8000 },
  ],

  "Tattoo Removal": [
    { name: "Small Tattoo", description: "Single Session", price: 6000 },
    { name: "Medium Tattoo", description: "Single Session", price: 8000 },
    { name: "Large Tattoo", description: "Single Session", price: 12000 },
    { name: "Extra Large Tattoo", description: "Single Session", price: 15000 },
  ],
};

export default function PricingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openCategory, setOpenCategory] = useState<string>("Medicated Facial");

  const toggleCategory = (category: string) => {
    setOpenCategory((prev) => (prev === category ? "" : category));
  };

  const filteredServices = Object.entries(SERVICES).filter(
    ([category, services]) => {
      const categoryMatch = category
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const serviceMatch = services.some(
        (service) =>
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description.toLowerCase().includes(searchTerm.toLowerCase()),
      );

      return categoryMatch || serviceMatch;
    },
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#005a5f] px-4 pb-22 pt-12 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 60% 50%, #00b4ac 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-200/80">
            D.Aesthetics Clinic & Wellness Lounge
          </p>

          <h1 className="text-4xl font-light sm:text-5xl md:text-6xl">
            Our <span className="font-semibold">Services</span> & Pricing
          </h1>

          <p className="mt-4 text-base font-light tracking-widest text-white/50">
            Laser · Skin · Hair · Mind · Body · Soul
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-2xl px-4 pb-12 sm:px-6 flex flex-col">
        {/* SEARCH */}
        <div className="-mt-6 mb-10">
          <div className="rounded-2xl border border-border/40 bg-white shadow-xl shadow-primary/10">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
          </div>
        </div>

        {/* ACCORDION */}
        <div className="flex flex-col gap-2 grow">
          {filteredServices.length > 0 ? (
            filteredServices.map(([category, services]) => (
              <ServiceCategory
                key={category}
                category={category}
                services={services}
                isExpanded={openCategory === category}
                onToggle={() => toggleCategory(category)}
              />
            ))
          ) : (
            <div className="rounded-2xl border border-border/30 bg-card/50 p-12 text-center">
              <p className="text-muted-foreground">
                No services found matching your search.
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-[#005a5f] px-8 py-14 text-center text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 30% 50%, #00b4ac 0%, transparent 70%)",
            }}
          />

          <h2 className="relative text-3xl font-light sm:text-4xl">
            Book your <span className="font-semibold">consultation</span>
          </h2>

          <a
            href="https://wa.me/923083694455"
            target="_blank"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#005a5f]"
          >
            Book via WhatsApp →
          </a>
        </div>
      </main>
    </div>
  );
}
