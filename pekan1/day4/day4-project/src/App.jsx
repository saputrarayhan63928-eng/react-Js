import './App.css'
import styles from '../tugas/App-tgs.module.css'
import AlertBox from '../tugas/alertbox'
import ResponsiveBox from '../tugas/perbedaan'

function App() {


  return (
    <>
    <div>
      <h1 style={{background: "red", padding: "20px", border: "2px solid #ccc"}}>Ini Adalah h1 ke 1</h1>
      <h1 style={{background: "green", padding: "30px", border: "2px solid #061af7ff"}}>Ini Adalah h1 ke 2 </h1>
    </div>
    <div>
      <p className='p1'>ini adalah p1 dgn styleing menggunakan className</p>
      <p className='p2'>ini adalah p2 dgn styleing menggunakan className</p>
    </div>
    <div>
      <button className={styles.btn}>ini btn 1</button>
      <button className={styles.btn2}>ini btn 2</button>
    </div>
      <AlertBox type="success" message="Data berhasil disimpan!" />
      <AlertBox type="warning" message="Harap isi semua data!" />
      <AlertBox type="error" message="Terjadi kesalahan server!" />

      <ResponsiveBox />
    </>
  )
}

export default App
