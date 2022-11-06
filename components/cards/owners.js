import React from 'react'

export default function owners() {

    const sidebarData = [
        {
            title: 'Köyceğiz\'de gezilecek yerler',
            name: 'Osman Kapuzur',
            avatar: '/images/osman.jpeg',
            date: '27 Ekim 2022'
        },
        {
            title: 'Konya Tropikal Kelebek Bahçesi hakkında her şey',
            name: 'Büşra Seymenoğlu',
            avatar: '/images/seymenoglu.jpeg',
            date: '25 Ekim 2022'
        },
        {
            title: 'Nemrut Dağı hikayesi ve hakkında bilinmesi gerekenler',
            name: 'Büşra Seymenoğlu',
            avatar: '/images/seymenoglu.jpeg',
            date: '24 Ekim 2022'
        },
        {
            title: 'Şile kamp alanları',
            name: 'Seyhan Ahen',
            avatar: '/images/seyhan.png',
            date: '17 Ekim 2022'
        },
    ]

    const data = [
        {
            image: '/images/anitkabir.jpeg',
            badge: 'Seyahat Yazıları',
            title: 'Tüm detaylarıyla Anıtkabir gezi rehberi',
            name: 'Bengi Sarihan',
            avatar: '/images/bengi.jpeg',
            date: '14 Ekim 2021'

        },
        {
            image: '/images/kasimda.jpeg',
            badge: 'Seyahat Yazıları',
            title: 'Kasımda tatil yapılacak yerler',
            name: 'Büşra Güzeller',
            avatar: '/images/busra.png',
            date: '2 Kasım 2021'

        },
        {
            image: '/images/koycegiz.jpeg',
            badge: 'Seyahat Yazıları',
            title: 'Köyceğiz\'de gezilecek yerler',
            name: 'Osman Kapusuz',
            avatar: '/images/osman.jpeg',
            date: '4 Kasım 2022'

        },
        {
            image: '/images/anitkabir.jpeg',
            badge: 'Seyahat Yazıları',
            title: 'Arabayla gidilecek tatil yerleri',
            name: 'Bengi Sarihan',
            avatar: '/images/bengi.jpeg',
            date: '2 Kasim 2022'

        },
    ]

    const Card = ({data}) =>  (
        <div className="col-lg-6 populer-travel-galeries-col text-left">
            <div className="populer-travel-galeries-card">
                <div className="populer-travel-galeries-img">
                    <img title="Kasımda tatil yapılacak yerler" className="lazy lazy-loaded" src={data.image} />
                </div>
                <div className="populer-travel-galeries-card-body">
                    <div className="populer-travel-galeries-tag">
                        <p>{data.badge}</p>
                    </div>
                    <div className="populer-travel-galeries-title">
                        <h3>{data.title}</h3>
                    </div>
                    <div className="populer-travel-galeries-line"></div>
                    <div className="populer-travel-galeries-footer">
                        <div className="populer-travel-galeries-author">
                            <div className="populer-travel-galeries-author-img">
                                <img title="Büşra Güzeller" className="lazy lazy-loaded" src={data.avatar} alt="Büşra Güzeller" width="41" height="41" />
                            </div>
                            <div className="populer-travel-galeries-desc">
                                <div className="populer-travel-galeries-desc-title">
                                    {data.name}
                                </div>
                                <div className="populer-travel-galeries-desc-date">
                                    {data.date}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    const SideCard = ({data}) => (
        <a href="/" className="expert-articles-card-box text-left">
            <div className="expert-articles-card-body">
                <div className="expert-articles-card-title w-4/5">
                    <h3>{data.title}</h3>
                </div>
            </div>
            <div className="expert-articles-card-footer">
                <div className="expert-articles-card-author">
                    <div className="expert-articles-author-img">
                        <img title="Osman Kapusuz" className="lazy lazy-loaded" src={data.avatar} alt="Osman Kapusuz" width="41" height="41"  />
                    </div>
                    <div className="expert-articles-author-desc text-left">
                        <div className="expert-articles-author-title">
                            {data.name}
                        </div>
                        <div className="expert-articles-author-date">
                            {data.date}
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
    
  return (
    <div className='flex flex-grow justify-between mt-8 px-20'>
        <div className='populer-travel-galeries-wrapper' style={{width: '65%'}}>
            <div className="populer-travel-galeries-header">
                <div className="populer-travel-galeries-header-title">
                    <span>Popüler Seyahat Galerileri</span>
                </div>
                <a href="/" className="populer-travel-galeries-header-btn">
                    Tümünü gör
                </a>
            </div>
            <div className='flex flex-wrap'>
                {data.map((comment, index) => (
                    <Card data={comment} key={index} />
                ))}
            </div>
        </div>
        <div className="expert-articles-card-wrapper" style={{width: '30%', height: '666px'}}>
            <div className="expert-articles-header-title" data-testid="homepage-expert-articles-title">
                <span>Uzman Yazıları</span>
            </div>
            <div>
                {sidebarData.map((data, index) => (
                    <SideCard data={data} key={index} />
                ))}
            </div>
            <div className="expert-articles-line"></div>
            <div className="expert-articles-button-box">
                <a href="/" title="Enuygun Bilgi" className="expert-articles-button">
					Tümünü gör
				</a>
            </div>
        </div>
    </div>
  )
}
