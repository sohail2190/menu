import { useState } from 'react'
import './App.css'
import Menu from './components/Menuu'
import Categories from './components/Categories'
import items from './components/Data'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filterItem = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return;
    }

    const newItem = items.filter((item) => item.category === category);
    setMenuItems(newItem);
  }

  return (
    <div className='menu section'>
      <div className="title">
        <h2>Our Filter Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={allCategories} filterItem={filterItem}/>
      <Menu items={menuItems} />
    </div>
  )
}

export default App
