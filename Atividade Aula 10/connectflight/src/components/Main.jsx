export default function Main() {
  return (
    <main className="conteudo-principal" id="inicio">
      <section className="apresentacao">
        <div className="ilustracao">
          <img
            src="/viagem.svg"
            alt="Ilustração de viagem"
          />
        </div>

        <h1>
          O seu próximo <span>destino</span> pode estar aqui...
        </h1>

        <p className="texto-introdutorio" id="destinos">
          Aqui você encontra uma seleção de <strong>pacotes completos</strong> para as suas férias!
        </p>

        <p className="texto-pacotes">
          No <strong>ConnectFlight</strong> você encontra pacotes de viagens nacionais e
          internacionais que incluem: passagens aéreas, hotéis, café da manhã,
          e até seguro viagem com <strong>preços arrasadores</strong>!
        </p>

        <p className="texto-ofertas" id="ofertas">
          Se você ainda não tem um destino definido, confira nossa seção de ofertas.
        </p>
      </section>
    </main>
  );
}