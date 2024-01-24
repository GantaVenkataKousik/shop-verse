import React from 'react';
import socialLinksData from './socialLinksData.js';

const SocialLinks = () => {
  return (
    <ul className="d-flex list-unstyled gap-2">
      {socialLinksData.map((link) => (
        <li key={link.id}>
          <a href={link.link} className="btn btn-outline-light">
            <img src={link.icon} alt="Social Icon" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
