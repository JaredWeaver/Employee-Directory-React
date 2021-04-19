function NavBar(props) {
  return (
    <nav className="navbar navbar-light justify-content-center bg-dark">
      <span style={headingStyle} className="navbar-brand mb-0 p-4">
        Employee Directory
      </span>
    </nav>
  );
}

const headingStyle = {
  color: 'white',
  fontSize: '52px'

};

export default NavBar;
