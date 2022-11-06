import React from 'react'

export default function location() {
    const data = [
        {
            image: '/images/instanbul.jpeg',
            title: 'İstanbul',
            name: 'Gezilecek Yerler',
            links: ["Uçak Bileti","Otobüs Bileti","Oteller"]
        },
        {
            image: '/images/bodrum.jpeg',
            title: 'Bodrum',
            name: 'Gezilecek Yerler',
            links: ["Uçak Bileti","Otobüs Bileti","Oteller"]
        },
        {
            image: '/images/izmir.jpeg',
            title: 'Izmir',
            name: 'Gezilecek Yerler',
            links: ["Uçak Bileti","Otobüs Bileti","Oteller"]
        },
        {
            image: '/images/londra.jpeg',
            title: 'Londra',
            name: 'Gezilecek Yerler',
            links: ["Uçak Bileti","Otobüs Bileti","Oteller"]
        },
        {
            image: '/images/ankara.jpeg',
            title: 'Ankara',
            name: 'Gezilecek Yerler',
            links: ["Uçak Bileti","Otobüs Bileti","Oteller"]
        },
        {
            image: '/images/paris.jpeg',
            title: 'Paris',
            name: 'Gezilecek Yerler',
            links: ["Uçak Bileti","Otobüs Bileti","Oteller"]
        },
        {
            image: '/images/antalya.jpeg',
            title: 'Antalya',
            name: 'Gezilecek Yerler',
            links: ["Uçak Bileti","Otobüs Bileti","Oteller"]
        },
        {
            image: '/images/roma.jpeg',
            title: 'Roma',
            name: 'Gezilecek Yerler',
            links: ["Uçak Bileti","Otobüs Bileti","Oteller"]
        },
    ]
    const Card = ({data}) => (
        <div className="card mb-6 travel-list" style={{width: '554px', height: '123px'}}>
            <div className="row no-gutters">
                <div className="">
                    <img src={data.image} className="lazy card-img travel-city-img" alt="Instabul" />
                </div>
                <div className="col">
                    <div className="card-body travel-container">
                        <div className="travel-city-header">
                            <h3 className="card-title travel-city-name">{data.title}</h3>
                            <a href="/">
                                <p className="travel-city-text">{data.name}</p>
                                {/* <i className="ei-angle-right"></i> */}
                            </a>
                        </div>
                        <p className="card-text travel-button-container">
                            {data.links.map((link, index) => (
                                <a href="/" className="travel-link">{link}</a>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

  return (
    <div className='text-left mt-10 px-20'>
        <div className="col-sm-12 card-top-header" style={{marginBottom: '8px'}}>
            <span>Seyahate Buradan Başlayın</span>
        </div>
        <span className="travel-list-text">Popüler şehirler için uçuş, otel ve otobüs bileti hizmetlerimize göz atın.</span>
        <div className='flex align-middle flex-wrap justify-between'>
            {data.map((location, index) => (
                <Card key={index} data={location} />
            ))}
        </div>
        
    </div>
  )
}
