import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { HiOutlineArrowCircleLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <header>
        <Link to="/"><HiOutlineArrowCircleLeft /></Link>
      </header>
    </>
  );
}

export default Navigation;
