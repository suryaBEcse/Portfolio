import logo from '../assets/img/logo.svg'; // Corrected import path

export const Logo = () => {
  return (
    <img src={logo} alt="Logo" className="logo" />
  );
}