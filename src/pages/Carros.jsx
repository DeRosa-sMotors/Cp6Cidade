import { useState } from "react"
import Card from "../components/Card"

const Carros = () => {
  const carros = [
    {
      id: 1,
      nome: "LaFerrari",
      marca: "Ferrari",
      ano: 2022,
      preco: "R$ 4.800,00",
      imagem: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
    },
    {
      id: 2,
      nome: "AMG GT",
      marca: "Mercedes-Benz",
      ano: 2023,
      preco: "R$ 2.600,00",
      imagem: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
    },
    {
      id: 3,
      nome: "Panamera",
      marca: "Porsche",
      ano: 2023,
      preco: "R$ 2.200,00",
      imagem: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    },
    {
      id: 4,
      nome: "Mustang Shelby",
      marca: "Ford",
      ano: 2021,
      preco: "R$ 1.500,00",
      imagem: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    },
    {
      id: 5,
      nome: "Série 4 Coupé",
      marca: "BMW",
      ano: 2022,
      preco: "R$ 1.200,00",
      imagem: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
    },
    {
      id: 6,
      nome: "Camaro SS",
      marca: "Chevrolet",
      ano: 2021,
      preco: "R$ 1.100,00",
      imagem: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    },
  ]

  const [marca, setMarca] = useState("Todas")

  const marcas = ["Todas", "Ferrari", "Mercedes-Benz", "Porsche", "Ford", "BMW", "Chevrolet"]

  const carrosFiltrados =
    marca === "Todas" ? carros : carros.filter((carro) => carro.marca === marca)

  return (
    <main className="px-[5%] mt-10 mb-16 flex-grow">
      <h2 className="titulo text-3xl">Nossa frota</h2>

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
            nome={carro.nome}
            marca={carro.marca}
            ano={carro.ano}
            preco={carro.preco}
            imagem={carro.imagem}
          />
        ))}
      </section>
    </main>
  )
}

export default Carros
