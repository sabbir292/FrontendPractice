import React from 'react'

const DynamicNav = ({navData}) => {
    console.log(navData)
    return (
        <nav className='pt-6 pb-2'>
        {navData.map((item, index) => (
            <div key={item.title} className={index === navData.length - 1 ? 'overflow-x-auto' : ''}>
                {item.type === 'links' ? (
                    <>
                        <h2 className='py-4'>{item.title}</h2>
                        <ul>
                            {item.items.map(link => (
                                <li key={link.name} className='text-sm font-normal py-1'>
                                    <a href={link.url}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <>
                        <h2 className='pt-6 pb-2'>{item.title}</h2>
                        <ul className='flex gap-4 pb-4 snap-x' style={{ width: '300px' }}>
                            {item.items.map(link => (
                                <li key={link.name} className='flex-shrink-0 w-60 snap-center p-2'>
                                    <h3 className='text-sm py-1'>{link.name}</h3>
                                    <a className='text-xs font-normal block' href={link.url}>{link.description}</a>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        ))}
    </nav>
    )
}

export default DynamicNav