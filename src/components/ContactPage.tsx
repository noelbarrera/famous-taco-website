
const ContactPage = () => {
    return(
        <section className="contact-container">
          <div>
            <h3>Contact & Hours</h3>
            <a href="https://maps.app.goo.gl/4vQnUzz18VfZrVvd6">
              4104 N Clinton St, Fort Wayne, IN 46805
            </a>
            <p>Phone Number: (260)480-2400</p>
            <p>Monday-Thursday: 10:30am-10:00pm</p>
            <p>Friday-Saturday: 10:30am-11:00pm</p>
            <p>Sunday: 10:30pm-11:00pm</p>
            <div></div>
          </div>
          <div className="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.908632190769!2d-85.13336182356257!3d41.11468647133568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8815e36bbc902f45%3A0xeb60047be5dca273!2sThe%20Famous%20Taco!5e0!3m2!1sen!2sus!4v1696530685627!5m2!1sen!2sus"
              style={{ border: "0"}}
              loading="lazy"
              ></iframe>
          </div>
      </section>
    )
}

export default ContactPage;