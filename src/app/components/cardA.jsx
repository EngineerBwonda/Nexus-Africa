// components/SimpleBootstrapCard.jsx
"use client";
import Image from "next/image";

export default function SimpleBootstrapCard() {
  return (
    <div
      className="card text-bg-dark"
      style={{ width: "100%", maxWidth: "600px" }}
    >
      <div style={{ position: "relative", height: "300px", width: "100%" }}>
        <Image
          src="/phonephoto.png"
          alt="Card image"
          fill
          style={{ objectFit: "cover" }}
          className="card-img"
        />
      </div>
      <div className="card-img-overlay d-flex flex-column justify-content-end">
        <h5 className="card-title fs-2 fw-bold">Card title</h5>
        <p className="card-text fs-5">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small className="text-white-50">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
}
