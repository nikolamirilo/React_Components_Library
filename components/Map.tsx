import React from "react";

const Map: React.FC = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.383320235512!2d20.458928111589213!3d44.79337617095026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a70123ebc0001%3A0x609128c404e80dda!2z0KTQsNCx0YDQuNGB0L7QstCwIDUsINCR0LXQvtCz0YDQsNC0!5e0!3m2!1ssr!2srs!4v1682098836605!5m2!1ssr!2srs"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
