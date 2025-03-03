import React from 'react'

const Location = () => {
  return (<div className='pb-20 pt-10'>
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-6">Visit Our Spa</h2>
    <div className='md:flex'>
      <section id="location" className='basis-full md:basis-6/12'>
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-6">
            <p className="mx-auto max-w-[700px] font-bold text-white md:text-xl/relaxed">Located in the heart of Lahore</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10000!2d74.328522!3d31.534437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <div className='basis-full md:basis-6/12'>
        <div className="container mt-8 md:mt-0 px-4 md:px-6">
          <div className="text-center space-y-4 mb-6">
            <p className="mx-auto max-w-[700px] text-white text-xl font-bold md:text-2xl/relaxed">Located in the heart of Sialkot</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10000!2d74.553734!3d32.513237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1709472000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Location