import { useState } from "react";

export default function RequestDemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    newsletter: true,
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "mandaliya@gmail.com",  // Replace with your designated email
        subject: "Demo Request",
        text: `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Message: ${formData.message}
Newsletter Opt-In: ${formData.newsletter ? "Yes" : "No"}
        `,
        userEmail: formData.email,
        userName: formData.name,
        type: "request-demo",
      }),
    });

    if (response.ok) {
      setStatus("Thanks! We’ll get in touch shortly to schedule your demo.");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        newsletter: true,
      });
    } else {
      setStatus("❌ Submission failed. Please try again.");
    }
  };

  return (
    <div className="container my-5">
      <p className="mb-4">See Intelation in action and discover how it fits your needs.</p>

      <form className="mt-4 fillForm bs_default" onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input type="text" name="name" className="form-control" value={formData.name} required onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Work Email</label>
            <input type="email" name="email" className="form-control" value={formData.email} required onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Company Name</label>
            <input type="text" name="company" className="form-control" value={formData.company} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone Number</label>
            <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="col-12">
            <label className="form-label">Message (optional)</label>
            <textarea name="message" className="form-control" rows="3" value={formData.message} onChange={handleChange}></textarea>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" name="newsletter" checked={formData.newsletter} onChange={handleChange} />
              <label className="form-check-label">Subscribe to product updates</label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-4">Request Demo</button>
      </form>

      {status && <p className="mt-3">{status}</p>}
    </div>
  );
}
