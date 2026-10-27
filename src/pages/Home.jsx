import { Link, useNavigate } from "react-router-dom"
import Card from "../components/Card"

const destaques = [
  {
    id: 1,
    nome: "LaFerrari",
    marca: "Ferrari",
    ano: 2022,
    preco: 4800.00,
    imagem: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
  },
  {
    id: 2,
    nome: "AMG GT",
    marca: "Mercedes-Benz",
    ano: 2023,
    preco: 2600.00,
    imagem: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
  },
  {
    id: 3,
    nome: "Panamera",
    marca: "Porsche",
    ano: 2023,
    preco: 2200.00,
    imagem: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  },
]

const Home = () => {
  const navigate = useNavigate()

  return (
    <main className="px-[5%] mt-10 mb-16 flex-grow">
      <section className="text-center mb-14">
        <h2 className="titulo text-4xl">Locação de Carros Importados</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Alugue o carro dos seus sonhos por diária, sem burocracia e com seguro
          incluso.
        </p>

        <Link
          to="/carros"
          className="inline-block mt-6 bg-[#d4af37] text-black py-3 px-8 rounded-[20px] font-semibold transition-transform hover:scale-105"
        >
          Ver todos os carros
        </Link>
      </section>

      <h3 className="titulo text-3xl">Destaques da semana</h3>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {destaques.map((carro) => (
          <Card
            key={carro.id}
            id={carro.id}
            nome={carro.nome}
            marca={carro.marca}
            ano={carro.ano}
            preco={carro.preco}
            imagem={carro.imagem}
            onAlugar={() => navigate("/carros")}
          />
        ))}
      </section>
    </main>
  )
}

export default Home
