export default function CategoryFilter({ category, setCategory }) {
  return (
    <div style={{ margin: "20px 0" }}>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men’s Clothing</option>
        <option value="women's clothing">Women’s Clothing</option>
      </select>
    </div>
  );
}
