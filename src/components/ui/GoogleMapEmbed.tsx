
import React from "react";
const GoogleMapEmbed: React.FC = () => (
  <div className="overflow-hidden rounded-xl border my-4 w-full h-80 shadow">
    <iframe
      title="Calabria Italy"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132653.3378598497!2d14.28905687931022!3d39.30814090831044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133fa48f7eefd17d%3A0xe3aeaa1e15c60b49!2sCalabria%2C%20Italy!5e0!3m2!1sen!2sit!4v1718214776732!5m2!1sen!2sit"
      width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
);
export default GoogleMapEmbed;
