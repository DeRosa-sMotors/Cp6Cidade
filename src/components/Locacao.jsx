const emReais = (valor) => "R$ " + valor.toFixed(2).replace(".", ",")

const formatarData = (dataISO, dias) => {
  if (!dataISO) {
    return "--/--/----"
  }

  const data = new Date(dataISO + "T00:00:00")
  data.setDate(data.getDate() + dias)

  return data.toLocaleDateString("pt-BR")
}

const Locacao = ({
  selecionados,
  dataRetirada,
  alterarDataRetirada,
  taxaSeguro,
  subtotal,
  total,
  status,
  alterarDias,
  confirmarReserva,
  cancelarLocacao,
}) => {
  return (
    <section className="bg-[#161616] border-2 border-[#d4af37] rounded-[20px] p-6 mb-10">
      <h3 className="text-[#d4af37] text-xl font-bold uppercase mb-4">
        Sua locação
      </h3>

      <div className="flex flex-wrap items-center gap-3 mb-5">
        <label className="text-gray-400">Data de retirada:</label>
        <input
          type="date"
          value={dataRetirada}
          onChange={(evento) => alterarDataRetirada(evento.target.value)}
          className="bg-[#0d0d0d] text-white py-2 px-4 rounded-[20px] cursor-pointer"
        />
      </div>

      {selecionados.map((carro) => (
        <div
          key={carro.id}
          className="flex flex-wrap justify-between items-center gap-4 border-b border-gray-700 py-3"
        >
          <div>
            <p className="text-white font-semibold">
              {carro.marca} {carro.nome}
            </p>
            <p className="text-gray-400 text-sm">
              {formatarData(dataRetirada, 0)} até {formatarData(dataRetirada, carro.dias)}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => alterarDias(carro.id, -1)}
              className="bg-[#0d0d0d] text-white w-9 h-9 rounded-full font-bold cursor-pointer hover:text-[#d4af37]"
            >
              -
            </button>

            <span className="text-white w-20 text-center">{carro.dias} dia(s)</span>

            <button
              onClick={() => alterarDias(carro.id, 1)}
              className="bg-[#0d0d0d] text-white w-9 h-9 rounded-full font-bold cursor-pointer hover:text-[#d4af37]"
            >
              +
            </button>
          </div>

          <p className="text-white font-bold w-32 text-right">
            {emReais(carro.preco * carro.dias)}
          </p>
        </div>
      ))}

      <div className="text-right mt-5 text-gray-400">
        <p>Subtotal: {emReais(subtotal)}</p>
        <p>Taxa de seguro: {emReais(taxaSeguro)}</p>
        <p className="text-white text-2xl font-bold mt-2">Total: {emReais(total)}</p>
      </div>

      <div className="flex flex-wrap justify-end gap-3 mt-5">
        <button
          onClick={cancelarLocacao}
          className="bg-[#0d0d0d] text-white py-2 px-6 rounded-[20px] font-semibold cursor-pointer hover:text-[#d4af37]"
        >
          Cancelar
        </button>

        <button
          onClick={confirmarReserva}
          className="bg-[#d4af37] text-black py-2 px-6 rounded-[20px] font-semibold cursor-pointer transition-transform hover:scale-105"
        >
          Confirmar reserva
        </button>
      </div>

      {status && (
        <p className="text-[#d4af37] text-center font-semibold mt-5">{status}</p>
      )}
    </section>
  )
}

export default Locacao
