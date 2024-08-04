import React from 'react'

const DynamicNav = ({navData}) => {
    console.log(navData)
    return (
        <nav className='pt-6 pb-2 overflow-hidden'>
        {navData.map((item, index) => (
            <div key={item.title}>
                {item.type === 'links' ? (
                    <>
                        <h2 className='py-4'>{item.title}</h2>
                        <ul className='lg:flex gap-8'>
                            {item.items.map(link => (
                                <li key={link.name} className='text-sm font-normal py-1'>
                                    <a href={link.url}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <div>
                        <h2 className='pt-6 pb-2'>{item.title}</h2>
                        <ul className='flex gap-4 lg:gap-8 pb-4 overflow-x-auto lg:overflow-hidden'>
                            {item.items.map(link => (
                                <li key={link.name} className='flex-shrink-0 w-60 py-2 lg:px-0'>
                                    <h3 className='text-sm py-1'>{link.name}</h3>
                                    <a className='text-xs font-normal block' href={link.url}>{link.description}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        ))}
    </nav>
    )
}

export default DynamicNav