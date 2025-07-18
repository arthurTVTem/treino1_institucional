import Image from "next/image";

export default function DefaultHeader() {
  return (
    <header>
      <div className="bg-[#111] w-full min-h-[12vh] flex">
        {/* logo */}
        <div className="px-[5vw]">
          <Image
            src="/images/logoLong.svg"
            alt="Logo"
            width={100}
            height={100}
            className="h-full w-[15vw] mx-auto invert"
          />
        </div>

        {/* navegação */}

        <nav className="w-full flex items-">
          <ul className="flex gap-[5vw] px-[5vw] items-center justify-evenly w-full">
            <li>
              <a className="text-[#fff]">Serviços</a>
            </li>
            <li>
              <a className="text-[#fff]">Projetos</a>
            </li>
            <li>
              <a className="text-[#fff]">Contato</a>
            </li>
            <li>
              <a className="text-[#fff]">Carreiras</a>
            </li>
            <li>
              <a className="text-[#fff]">Quem Somos</a>
            </li>
          </ul>

          {/* botoes de login e cadastro */}
          <div className="flex gap-[5vw] px-[5vw] items-center justify-evenly">
            <button className="bg-[#fff] text-[#000]">Login</button>
            <button className="bg-[#fff] text-[#000]">Cadastro</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
