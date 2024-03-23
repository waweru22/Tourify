import { toast } from "react-toastify"
import { useState } from "react"

function NewsLetter() {
    const [email, setEmail] = useState('')

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        toast.success(`Thank you for subscribing`)
    }

    return (
        <form id="newsletter" onSubmit={onSubmit}>
            <h1>Sign Up  for our Newsletter</h1>
            <p>To get information about exclusive deals, new spots, cities and exciting new features</p>
            <input name="email" type="email" onChange={handleChange} value={email || ''} placeholder="Enter your email address"/>
            <button className="main" type="submit">Subscribe</button>
        </form>
    )
}

export default NewsLetter