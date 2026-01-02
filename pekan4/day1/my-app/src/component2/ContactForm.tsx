import React, {useState, ChangeEvent, FormEvent} from "react";

interface FormFields {
    userName: string
    message: string
    priority: number
}

const ContactForm: React.FC = () =>{
    const [formData, setFormData] = useState<FormFields>({
        userName: '',
        message: '',
        priority: 1
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: name === 'priority' ? parseInt(value) : value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form dikirim:' , formData);
        alert(`Pesan Dari ${formData.userName} Terkirim!`)
    }

    return(
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
      <input 
        name="username" 
        placeholder="Nama" 
        value={formData.userName} 
        onChange={handleChange} 
        required 
      />
      <textarea 
        name="message" 
        placeholder="Pesan" 
        value={formData.message} 
        onChange={handleChange} 
      />
      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option value={1}>Rendah</option>
        <option value={2}>Tinggi</option>
      </select>
      <button type="submit">Kirim</button>
    </form>
    )
}

export default ContactForm