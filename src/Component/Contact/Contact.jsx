import React from 'react'
import './Contact.css'
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5662be58-16e5-468c-8a84-13c39d1313ac");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message <img src="./image/msg.avif" alt="" /></h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Consequatur voluptatum labore magni nihil sed sequi cupiditate
          temporibus a facilis quidem impedit doloremque,
          fuga quisquam officia illo explicabo saepe omnis dignissimos.</p>
        <ul>
          <li> <i className="ri-mail-line"></i>prince@gmail.com</li>
          <li> <i className="ri-phone-fill"></i>+91,7388610478</li>
          <li><i className="ri-map-pin-2-fill"></i>Mirzapur</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type='text' name='name' placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type='tel' name='names' placeholder='Enter your mobile number' required />
          <label>Write your messages here</label>
          <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
          <button className='btn dark-btn'>Submit now<i className="ri-arrow-right-line"></i></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact