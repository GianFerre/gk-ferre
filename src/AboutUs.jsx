import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <div className="about-us-content">
        <p>Welcome to GK Ferre! Here's what we're about...</p>
        <p>
          🚚 <strong>Delivery Only:</strong> Please message us on{" "}
          <a
            href="https://www.facebook.com/gk.ferre"
            target="_blank"
            rel="noopener noreferrer"
            className="about-us-link"
          >
            Facebook
          </a>{" "}
          to place an order.
        </p>
      </div>
    </div>
  );
}
