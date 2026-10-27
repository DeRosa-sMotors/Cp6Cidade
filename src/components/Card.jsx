const Card = ({ id, nome, marca, ano, preco, imagem, dias, onAlugar }) => {
  return (
    <div className="bg-[#161616] rounded-[20px] overflow-hidden border-2 border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-[#d4af37]">
      <img src={imagem} alt={nome} className="w-full h-[220px] object-cover" />

      <article className="text-center p-5">
        <p className="text-gray-400 text-sm uppercase">{marca} · {ano}</p>
        <h2 className="text-xl text-[#d4af37] uppercase mt-1 mb-3 font-bold">{nome}</h2>
        <p className="text-white text-2xl font-bold mb-4">
          R$ {preco.toFixed(2).replace(".", ",")}
          <span className="text-gray-400 text-base font-normal"> /dia</span>
        </p>

        <button
          onClick={() => onAlugar(id, 1)}
          className="bg-[#d4af37] text-black w-[60%] py-2 px-4 rounded-[20px] font-semibold cursor-pointer transition-transform hover:scale-105"
        >
          Alugar
        </button>

        {dias > 0 && (
          <p className="text-[#d4af37] text-sm mt-3">{dias} dia(s) reservado(s)</p>
        )}
      </article>
    </div>
  )
}

export default Card
