
export default function Header() {
  return (
    <header className="cabecalho">
      <a className="logo" href="#inicio">
        Connect<span>Flight</span>
      </a>

      <nav className="navegacao" aria-label="Navegação principal">
        <a href="#destinos">Destinos</a>
        <a href="#ofertas">Ofertas</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}
