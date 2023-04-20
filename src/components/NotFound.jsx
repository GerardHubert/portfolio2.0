import React from 'react';
import notFound from "../images/page-not-found.png";

function NotFound(props) {
  return (
    <section className='not-found-section'>
      <img className='not-found-image' src={notFound} alt="page non trouvée" />
    </section>
  );
}

export default NotFound;