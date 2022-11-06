import React, {useState} from 'react';

export default function subHeader() {
    const [color, setColor] = useState(false)

    const data = [
        {
            image: '/images/banner.jpeg',
            title: 'Hediye Kart',
            name: 'Gonder',
            color: 'gold'
        },
        {
            image: '/images/banner.jpeg',
            title: 'Kart Puanlarimi',
            name: 'ENCoin\'e Cevir',
            color: 'green'
        },
        {
            image: '/images/banner.jpeg',
            title: 'Biletimi',
            name: 'Iptal Et',
            color: 'red'
        },
        {
            image: '/images/banner.jpeg',
            title: 'Online',
            name: 'Check-in',
            color: 'purple'
        },
        {
            image: '/images/banner.jpeg',
            title: 'PNR',
            name: 'Sorgulama',
            color: 'skyblue'
        },
        {
            image: '/images/banner.jpeg',
            title: 'Kurumsal',
            name: 'Uye OI',
            color: 'gold'
        },
    ]
  return (
    <div className='flex justify-around mt-8 w-full px-20'>
        {data.map((card, index) => {
            return (
                <div 
                    key={index} 
                    className="flex border p-4 rounded-md w-44 cursor-pointer" 
                    onMouseOver={() => setColor(true)} 
                    onMouseOut={() => setColor(false)} 
                    style={{borderColor: color && data[index].color, color: color && data[index].color}} 
                >
                    <img src={card.image} alt={card.name} width="33px" height="33px" className='rounded-full' />
                    <div className='ml-2 text-left'>
                        <p>{card.title}</p>
                        <p>{card.name}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
