import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export const Footer: FC = () => (
  <ul className="footer">
    <li className="footer-item">&copy; Copyrights</li>
    <li className="footer-item">All rights reserved</li>
    <li className="footer-item"><Link to="/inprints">Imprint</Link></li>
    <li className="footer-item"><Link to="/terms">Terms of use</Link></li>
    <li className="footer-item"><Link to="/policy">Privacy policy</Link></li>
  </ul>
);
