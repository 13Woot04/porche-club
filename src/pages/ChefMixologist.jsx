import React from 'react';

const ChefMixologist = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-12 text-center">Chef & Mixologist</h1>
        
        {/* Chef Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Chef Image */}
          <div className="order-1 md:order-1 flex justify-center">
            <img 
              src="/chef-and-mixologist/chef.jpeg" 
              alt="Chef Ashish Bhasin" 
              className="rounded-full shadow-medium max-w-md h-auto"
            />
          </div>
          {/* Chef Info */}
          <div className="order-2 md:order-2 md:pl-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Chef Bhasin</h2>
            <h3 className="text-2xl font-semibold text-neutral-800 mb-4">Chef Ashish Bhasin : A Maestro of Culinary Excellence</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              With an illustrious career spanning over 28 years, Chef Ashish Bhasin stands as one of India's top 5 chefs, celebrated for his unparalleled artistry and crowned with the prestigious Silver Hat Award.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-4">
              His expertise has graced iconic events such as World Food India, the Constitutional Day feast for the Hon'ble President of India, and exclusive soirées at the Ambani Wedding Celebrations, where his creations left an indelible mark on the world's most discerning palates.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              Chef Bhasin's journey of perfection includes leading the kitchens at The Leela, Oberoi, and Taj in the past, and now brings his visionary touch to redefine luxury dining at Porche. This promising relationship between Porche and Chef Bhasin is bound to offer an unparalleled culinary experience to our esteemed guests.
            </p>
          </div>
        </section>

        {/* Mixologist Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mixologist Info */}
          <div className="order-2 md:order-1 md:pr-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Mixologist Viju</h2>
            <h3 className="text-2xl font-semibold text-neutral-800 mb-4">Viju Raj: Elevating the Art of Mixology at Porsche</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              With an illustrious career spanning nearly two decades, Viju Raj is a trailblazer in luxury mixology and bar design. Renowned for his innovation and mastery, he has transformed India's hospitality landscape, crafting signature beverage experiences for the country's most prestigious venues and elite clientele.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-4">
              His expertise has shaped some of the most celebrated bars across India, where his unique approach to mixology—blending artistry with precision—has set new benchmarks in the industry. From conceptualizing avant-garde bar spaces to curating bespoke cocktails, every creation by Viju Raj is a testament to craftsmanship and elegance.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              Now, as Porche partners with Viju Raj, we embark on a journey to redefine indulgence. This collaboration promises an extraordinary blend of sophistication, creativity, and innovation, bringing an unparalleled luxury beverage experience to our esteemed guests.
            </p>
            <p className="text-neutral-700 leading-relaxed mt-4">Get ready to sip on perfection.</p>
          </div>
          {/* Mixologist Image */}
          <div className="order-1 md:order-2 flex justify-center">
             <img 
              src="/chef-and-mixologist/mixologist.jpeg" 
              alt="Mixologist Viju Raj" 
              className="rounded-full shadow-medium max-w-md h-auto"
            />
          </div>
        </section>

      </div>
    </div>
  );
};

export default ChefMixologist; 