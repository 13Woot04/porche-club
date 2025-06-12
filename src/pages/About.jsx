const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">About Porsche Club</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-6">
            Founded by passionate Porsche enthusiasts, our club brings together owners
            and admirers of these exceptional vehicles. We share a common love for
            engineering excellence, stunning design, and the pure joy of driving.
          </p>
          <p className="text-gray-600">
            Our community organizes regular events, from track days to social gatherings,
            creating opportunities for members to connect, learn, and celebrate the
            Porsche legacy together.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="space-y-4 text-gray-600">
            <li>• Regular track days and driving events</li>
            <li>• Technical workshops and maintenance tips</li>
            <li>• Social gatherings and networking opportunities</li>
            <li>• Access to exclusive Porsche community events</li>
            <li>• Monthly newsletter with latest updates</li>
            <li>• Discounts with partner service providers</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About 