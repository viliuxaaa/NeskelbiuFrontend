import React from 'react'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { GoEye } from 'react-icons/go'
import { FiSettings } from 'react-icons/fi'

const Head = "text-xs text-left text-text font-semibold px-6 py-2 uppercase"
const Text = 'text-sm text-text text-left leading-6 whitespace-nowrap px-5 py-2'

// rows
const Rows = (finalData, i, img, admin) => {
    
    return (
        <tr key={i}>
            <td className={`${Text}`}>
                <div className='w-12 p-1 bg-dry border border-text h-12 rounded overflow-hidden'>
                {img && <img 
                    className='h-full w-full object-cover'
                    src={img.url}
                    alt={finalData?.name}
                />}
                </div>
            </td>
            <td className={`${Text} truncate`}>{finalData.postName}</td>
            <td className={`${Text}`}>{finalData.categoryA}</td>
            <td className={`${Text}`}>{finalData.categoryB}</td>
            <td className={`${Text}`}>{finalData.status}</td>
            <td className={`${Text}`}>{finalData.price}{' '}€</td>
            <td className={`${Text} float-right flex items-center justify-center gap-2`}>
                {
                    admin ? (
                        <>
                            <button className='bg-subMain hover:bg-green-400 border border-text text-text rounded flex-colo w-7 h-7'>
                                <FiSettings />
                            </button>
                            <button className='bg-subMain hover:bg-red-500 border border-text text-text rounded flex-colo w-7 h-7'>
                                <MdDelete />
                            </button>
                            <Link 
                                to={`/movie/${finalData?.name}`} 
                                className='bg-subMain border hover:bg-purple-400 border-text text-text rounded flex-colo w-7 h-7'
                            >
                                <GoEye />
                            </Link>
                        </>
                    ) : (
                        <>
                            <button className='bg-subMain hover:bg-green-400 border border-text text-text rounded flex-colo w-7 h-7'>
                                <FiSettings />
                            </button>
                            <button className='bg-subMain hover:bg-red-500 border border-text text-text rounded flex-colo w-7 h-7'>
                                <MdDelete />
                            </button>
                            <Link 
                                to={`/movie/${finalData?.name}`} 
                                className='bg-subMain border hover:bg-purple-400 border-text text-text rounded flex-colo w-7 h-7'
                            >
                                <GoEye />
                            </Link>
                        </>
                    )
                }
            </td>
        </tr>
    )
}

// table
function Table({finalData, img, admin}) {
  return (
    <div className='overflow-x-scroll overflow-hidden relative w-full'>
        <table className='w-full table-auto border border-text divide-y divide-border'>
            <thead>
                <tr className='bg-accent'>
                    <th scope='col' className={`${Head}`}>
                        Img
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Pavadinimas
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Kategorija A
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Kategorija B
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Status
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Kaina
                    </th>
                    <th scope='col' className={`${Head} text-end`}>
                        Veiksmai
                    </th>
                </tr>
            </thead>
            <tbody className='bg-main border-t border-text divide-y divide-gray-800'>
                {finalData && finalData.map((finalData, i) => Rows(finalData, i, img, admin))}
            </tbody>
        </table>
    </div>
  )
}

export default Table