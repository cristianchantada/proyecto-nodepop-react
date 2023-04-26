import Button from "./button";

function Layout ({isLogged, children, handleLogin, handleLogout}) {

  return (
    <div className="container layoutContainer">
      <header>
        <h1>NodePop</h1>
        <nav>
          {isLogged ?
            <>
              <Button /* handleButtonClick={} */title={"Crear anuncio"} />
              <Button handleButtonClick={handleLogout} title={"Logout"} />
            </> : null
          }
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
          <p>Cristian Copyright 2023</p>
      </footer>
    </div>
  );
}

export default Layout;