import React from 'react';

function Footer() {
  return (
    <footer className="bottom-0 w-full text-center text-gray-500 fixed">
      <hr className="w-full border-red-400 border-t-4"/>
      <p className="py-3 font-medium">&copy; Abc Company {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
