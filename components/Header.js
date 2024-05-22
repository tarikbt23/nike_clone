import { useState } from 'react';
import Link from 'next/link'
import { VscAccount } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LuShirt } from "react-icons/lu";
import { motion } from 'framer-motion';
import Image from 'next/image';

const categories = [
  {
    name: 'Yeni Ürünler ve Öne Çıkanlar',
    columns: [
      {
        title: 'Öne Çıkanlar',
        items: ['Tüm Yeni Sezon Ürünlerini İncele', 'En Çok Satan Ürünler', 'Member Shop', 'SNKRS Lansman Takvimi']
      },
      {
        title: 'İkonik Modelleri İncele',
        items: ['Air Force 1', 'Air Jordan 1', 'Air Max', 'Dunk', 'Blazer', 'Pegasus', 'Mercurial']
      },
      {
        title: 'Sporu Keşfet',
        items: ['Futbol', 'Koşu', 'Basketbol', 'Fitness', 'Golf', 'Tenis', 'Yoga', 'Dans', 'Kaykay']
      },
      {
        title: 'Trend Ürünler',
        items: ['Air Max Ana Sayfası', , 'Nike Style By', 'Jordan Retro Koleksiyonu', 'Genç Stilleri', 'EasyOn', 'Sürdürülebilirlik']
      }
    ]
  },
  {
    name: 'Erkek',
    columns: [
      {
        title: 'Öne Çıkanlar',
        items: ['Yeni Çıkanlar', 'En Çok Satan Ürünler', 'Member Shop', 'SNKRS Lansman Takvimi']
      },
      {
        title: 'Ayakkabılar',
        items: ['Air Force 1', 'Air Jordan 1', 'Air Max', 'Dunk', 'Blazer', 'Pegasus', 'Mercurial']
      },
      {
        title: 'Giysiler',
        items: ['Tüm Giyim', 'Üstler ve Tişörtler', 'Şortlar', 'Eşofmanlar', 'Ceketler']
      },
      {
        title: 'Sporu Keşfet',
        items: ['Koşu', 'Futbol', 'Basketbol', 'Antreman ve Spor Salonu', 'Golf', 'Tenis',]
      },
      {
        title: 'Aksesuar ve Ekipmanlar',
        items: ['Tüm Aksesuar ve Ekipmanlar', 'Çantalar ve Sırt Çantaları', 'Çoraplar']
      }
    ]
  },
  {
    name: 'Kadın',
    columns: [
      {
        title: 'Öne Çıkanlar',
        items: ['Yeni Çıkanlar', 'En Çok Satan Ürünler', 'Member Shop', 'SNKRS Lansman Takvimi']
      },
      {
        title: 'Ayakkabılar',
        items: ['Air Force 1', 'Air Jordan 1', 'Air Max', 'Dunk', 'Blazer', 'Pegasus', 'Mercurial']
      },
      {
        title: 'Giysiler',
        items: ['Tüm Giyim', 'Üstler ve Tişörtler', 'Şortlar', 'Eşofmanlar', 'Ceketler']
      },
      {
        title: 'Sporu Keşfet',
        items: ['Fitness','Futbol', 'Koşu', 'Basketbol', 'Golf', 'Tenis', 'Yoga', 'Dans', 'Kaykay']
      },
      {
        title: 'Aksesuar ve Ekipmanlar',
        items: ['Tüm Aksesuar ve Ekipmanlar', 'Çantalar ve Sırt Çantaları', 'Çoraplar']
      }
    ]
  },
  {
    name: 'Çocuk',
    columns: [
      {
        title: 'Öne Çıkanlar',
        items: ['Yeni Çıkanlar', 'En Çok Satan Ürünler', 'Member Shop', 'SNKRS Lansman Takvimi']
      },
      {
        title: 'Ayakkabılar',
        items: ['Air Force 1', 'Air Jordan 1', 'Air Max', 'Dunk', 'Blazer', 'Pegasus', 'Mercurial']
      },
      {
        title: 'Giysiler',
        items: ['Tüm Giyim', 'Üstler ve Tişörtler', 'Şortlar', 'Eşofmanlar', 'Ceketler']
      },
      {
        title: 'Yaşa Göre Çocuk',
        items: ['Genç Çocuk', 'Küçük Çocuk', 'Bebek']
      },
      {
        title: 'Aksesuar ve Ekipmanlar',
        items: ['Tüm Aksesuar ve Ekipmanlar', 'Çantalar ve Sırt Çantaları', 'Çoraplar']
      },
    ]
  }
];

const searchSuggestions = {
  recentSearches: ['dekoratif hoparlör', 'Bluetooth Hoparlör', '1307', 'N&R STORE', 'nba tişört'],
  popularSearches: ['omuz çantası', 'pantolon', 'adidas', 'banyo seti', 'pijama', 'allık'],
  personalProducts: ['BETILINA Beyaz Vintage Başlıklı T-shirt', 'FV Palazzo Pantolon Oversize Orjinal Kesim']
};

const dropdownVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } }
};

const Header = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setActiveCategory(category);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };
  
  const getGridTemplateColumns = (columns) => {
    return `repeat(${columns.length}, minmax(200px, 1fr))`;
  };

  const [inputFocused, setInputFocused] = useState(false);


  return (
    <header>
      {/* Jordan Section */}
      <div className='bg-white flex items-center justify-between space-x-8 md:space-x-12 lg:space-x-16 px-64'>
        {/* Logo */}
        <Image 
          src="/images/tarvina_logo.jpeg"
          width={100}
          height={100}
          alt="Tarvina"
          className='ml-5'
        />
        
        <div className="relative">
      <input
        type="text"
        placeholder="Ara"
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        className="block w-full  ps-8 bg-slate-50 hover:bg-slate-100  hover:border-orange-400 border rounded-lg py-2 px-80" 
      />
      {inputFocused && (
        <div className="absolute w-full bg-white border rounded-lg shadow-lg mt-1 z-10">
          <ul className="text-sm text-gray-700">
            <li className="p-2 border-b border-orange-300 cursor-pointer hover:bg-gray-100 font-bold">Son Aramalar:</li>
            {searchSuggestions.recentSearches.map((item, index) => (
              <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer text-lg">{item}</li>
            ))}
            <li className="p-2 border-b border-orange-300 cursor-pointer hover:bg-gray-100 font-bold">Popüler Aramalar:</li>
            {searchSuggestions.popularSearches.map((item, index) => (
              <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer text-lg">{item}</li>
            ))}
            <li className="p-2 border-b border-orange-300  cursor-pointer hover:bg-gray-100 font-bold">Kişisel Ürünler:</li>
            {searchSuggestions.personalProducts.map((item, index) => (
              <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer text-lg">{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>

        {/* Navigation */}
        <nav className='hidden md:flex justify-between'>
          {/* Menu */}
          <div className='flex items-center space-x-4 md:space-x-6 lg:space-x-8 whitespace-nowrap group text-xl  '>
            <div className='flex items-center group space-x-2 hover:text-orange-400'>
              <VscAccount className='text-3xl'/>
              <Link href='/' className='font-normal'>Hesabım</Link>
            </div>
            <div className='flex items-center group space-x-2 hover:text-orange-400'>
              <MdOutlineFavoriteBorder className='text-3xl'/>
              <Link href='/Review' className='font-normal'>Favoriler</Link>
            </div>
            <div className='flex items-center group space-x-2 hover:text-orange-400'>
              <IoCartOutline className='text-3xl'/>
              <Link href='/Address' className='font-normal'>Sepetim</Link>
            </div>
          </div>
        </nav>
      </div>
      <div className='py-1 text-black bg-gray-100'>
        <div className='items-center justify-between space-x-8 md:space-x-12 lg:space-x-16 px-64'>
          {/* Navigation */}
          <nav className='justify-center'>
            {/* Menu */}
            <div className='flex justify-between items-center space-x-4 md:space-x-6 lg:space-x-8 whitespace-nowrap text-xl w-full'>
              <ul className="flex w-full justify-between">
                {categories.map(category => (
                  <li key={category.name} onMouseEnter={() => handleMouseEnter(category.name)} onMouseLeave={handleMouseLeave} className="w-full">
                    <Link href="#" className="py-4 px-6 inline-block hover:text-orange-400 w-full text-center">{category.name}</Link>
                    {activeCategory === category.name && (
                    <motion.div 
                      initial="hidden" 
                      animate="visible" 
                      exit="hidden" 
                      variants={dropdownVariants}
                      className="absolute bg-white  mt-1 grid gap-4 p-4 w-full left-0 right-0 z-40"
                      style={{ gridTemplateColumns: getGridTemplateColumns(category.columns) }}>
                      {category.columns.map((column, index) => (
                        <div key={index} className="flex flex-col">
                          <span className="font-bold mb-2">{column.title}</span>
                          {column.items.map(item => (
                            <Link key={item} href="#" className="py-1 hover:text-orange-400">{item}</Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                  </li>
                ))}
              </ul>
              <div className='flex items-center group space-x-2 p-3 bg-orange-300 rounded-lg hover:text-white'>
                <LuShirt/>
                <button className=''>Kendin Tasarla</button>
              </div>
              <div className='flex items-center group space-x-2 p-3 bg-white rounded-lg hover:text-orange-300'>
                <LuShirt/>
                <button className=''>Tarvina Galeri</button>
              </div>
            </div>
          </nav>
          {/* Search and icons */}
        </div>
      </div>
    </header>
  );
};

export default Header;
