import { useState } from "react"
import Card from "../components/Card"
import Locacao from "../components/Locacao"

const frota = [
  {
    id: 1,
    nome: "LaFerrari",
    marca: "Ferrari",
    ano: 2022,
    preco: 4800.00,
    imagem: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
    dias: 0,
  },
  {
    id: 2,
    nome: "AMG GT",
    marca: "Mercedes-Benz",
    ano: 2023,
    preco: 2600.00,
    imagem: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
    dias: 0,
  },
  {
    id: 3,
    nome: "Panamera",
    marca: "Porsche",
    ano: 2023,
    preco: 2200.00,
    imagem: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    dias: 0,
  },
  {
    id: 4,
    nome: "Mustang Shelby",
    marca: "Ford",
    ano: 2021,
    preco: 1500.00,
    imagem: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    dias: 0,
  },
  {
    id: 5,
    nome: "Série 4 Coupé",
    marca: "BMW",
    ano: 2022,
    preco: 1200.00,
    imagem: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
    dias: 0,
  },
  {
    id: 6,
    nome: "Camaro SS",
    marca: "Chevrolet",
    ano: 2021,
    preco: 1100.00,
    imagem: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    dias: 0,
  },
]

const marcas = ["Todas", "Ferrari", "Mercedes-Benz", "Porsche", "Ford", "BMW", "Chevrolet"]

const dataDeHoje = () => {
  const data = new Date()
  const dia = String(data.getDate()).padStart(2, "0")
  const mes = String(data.getMonth() + 1).padStart(2, "0")

  return data.getFullYear() + "-" + mes + "-" + dia
}

const formatarData = (dataISO, dias) => {
  const data = new Date(dataISO + "T00:00:00")
  data.setDate(data.getDate() + dias)

  return data.toLocaleDateString("pt-BR")
}

const Carros = () => {
  const [carros, setCarros] = useState(frota)
  const [marca, setMarca] = useState("Todas")
  const [dataRetirada, setDataRetirada] = useState(dataDeHoje())
  const [status, setStatus] = useState("")

  const taxaSeguro = 150.00

  const alterarDias = (id, valor) => {
    setCarros((prev) =>
      prev.map((carro) =>
        carro.id === id
          ? { ...carro, dias: Math.max(0, carro.dias + valor) }
          : carro
      )
    )
    setStatus("")
  }

  const alterarDataRetirada = (novaData) => {
    setDataRetirada(novaData)
    setStatus("")
  }

  const cancelarLocacao = () => {
    setCarros(frota)
    setDataRetirada(dataDeHoje())
    setStatus("")
  }

  const selecionados = carros.filter((carro) => carro.dias > 0)

  const subtotal = selecionados.reduce(
    (soma, carro) => soma + carro.preco * carro.dias,
    0
  )

  const total = subtotal + taxaSeguro

  const diasDaLocacao = selecionados.reduce(
    (maior, carro) => Math.max(maior, carro.dias),
    0
  )

  const confirmarReserva = () => {
    if (!dataRetirada) {
      setStatus("Escolha a data de retirada para confirmar a reserva.")
      return
    }

    setStatus(
      "Reserva confirmada de " +
        formatarData(dataRetirada, 0) +
        " a " +
        formatarData(dataRetirada, diasDaLocacao) +
        ". Valor total de R$ " +
        total.toFixed(2).replace(".", ",")
    )
  }

  const carrosFiltrados =
    marca === "Todas" ? carros : carros.filter((carro) => carro.marca === marca)

  return (
    <main className="px-[5%] mt-10 mb-16 flex-grow">
      <h2 className="titulo text-3xl">Nossa frota</h2>

      {selecionados.length > 0 && (
        <Locacao
          selecionados={selecionados}
          dataRetirada={dataRetirada}
          alterarDataRetirada={alterarDataRetirada}
          taxaSeguro={taxaSeguro}
          subtotal={subtotal}
          total={total}
          status={status}
          alterarDias={alterarDias}
          confirmarReserva={confirmarReserva}
          cancelarLocacao={cancelarLocacao}
        />
      )}

      <section className="flex flex-wrap gap-3 mb-8">
        {marcas.map((item) => (
          <button
            key={item}
            onClick={() => setMarca(item)}
            className={
              marca === item
                ? "bg-[#d4af37] text-black py-2 px-5 rounded-[20px] font-semibold cursor-pointer"
                : "bg-[#161616] text-white py-2 px-5 rounded-[20px] font-semibold cursor-pointer hover:text-[#d4af37]"
            }
          >
            {item}
          </button>
        ))}
      </section>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {carrosFiltrados.map((carro) => (
          <Card
            key={carro.id}
            id={carro.id}
            nome={carro.nome}
            marca={carro.marca}
            ano={carro.ano}
            preco={carro.preco}
            imagem={carro.imagem}
            dias={carro.dias}
            onAlugar={alterarDias}
          />
        ))}
      </section>
    </main>
  )
}

export default Carros
