// import Counter from './component/Counter'
// import UserProfile from './component/UserProfile'
import './App.css'

import UserCard from './component2/UserCard';
import ProductList from './component2/ProductList'
import ContactForm from './component2/ContactForm'

const dummyProducts = [
  { id: 'p1', title: 'Laptop', price: 1000, tags: ['tech', 'work'] },
  { id: 'p2', title: 'Mouse', price: 50, tags: ['gaming'] }
];

function App() {
    const handleAddToCart = (id: string) => {
    console.log(`Product ${id} ditambahkan`);
  };

  return (
    <>
  {/* <Counter/> */}
  {/* <UserProfile/> */}
        <div style={{ padding: '20px' }}>
      <h1>My TypeScript App</h1>
      
      <h2>User Profile</h2>
      <UserCard id={1} name="Budi" email="budi@example.com" isAdmin={true} />

      <h2>Products</h2>
      <ProductList items={dummyProducts} onAddToCart={handleAddToCart} />

      <h2>Contact Us</h2>
      <ContactForm />
    </div>

    </>
  )
}

export default App
