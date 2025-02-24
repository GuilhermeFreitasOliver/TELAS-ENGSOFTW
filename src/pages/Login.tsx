import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, CheckSquare, Palette, Search, Dices as Devices } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica de login aqui
  };

  return (
    <div className="flex min-h-screen">
      {/* Seção do Formulário */}
      <div className="w-full md:w-5/12 flex items-center justify-center p-4 md:p-12 bg-white sombra-suave" data-aos="fade-right">
        <div className="w-full max-w-md">
          <div className="text-center mb-4 md:hidden">
            <Box className="w-9 h-9 mx-auto mb-2" />
            <h2 className="text-azul-primario text-xl font-bold">RASTRO</h2>
          </div>

          <h1 className="text-2xl font-bold mb-4">LOGIN</h1>
          <p className="text-cinza-texto mb-8">INFORME SEU E-MAIL E SENHA E ACESSE SUA CONTA</p>
          
          <form onSubmit={handleSubmit}>
            <div className="espaco-y-4">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="campo-texto"
                  placeholder="Digite seu e-mail"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="senha" className="block text-sm font-medium mb-1">Senha</label>
                <input
                  type="password"
                  id="senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="campo-texto"
                  placeholder="Digite sua senha"
                  required
                />
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 rounded border-cinza-claro" />
                  <span className="ml-2 text-sm">Lembre-me</span>
                </label>
                <Link to="/recuperar-senha" className="text-sm text-azul-primario hover:text-azul-hover">
                  Esqueceu a senha?
                </Link>
              </div>
              
              <button type="submit" className="botao-primario">
                ENTRAR
              </button>
              
              <p className="text-center mt-4">
                Não tem uma conta?{' '}
                <Link to="/register" className="text-azul-primario hover:text-azul-hover font-semibold">
                  Cadastre-se gratuitamente
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      
      {/* Seção de Benefícios */}
      <div className="hidden md:flex md:w-7/12 bg-gradient-to-br from-azul-primario to-azul-secundario text-white p-12 relative" data-aos="fade-left">
        <div className="w-full max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Box className="w-12 h-12 mx-auto mb-3" />
            <h2 className="text-3xl font-bold">RASTRO</h2>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Benefícios de usar nosso sistema</h1>
          <p className="text-xl mb-12">Organize e simplifique o gerenciamento de recursos e insumos da sua instituição</p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="cartao-beneficio" data-aos="fade-up" data-aos-delay="100">
              <div className="icone-beneficio">
                <CheckSquare className="w-6 h-6" />
              </div>
              <h5 className="text-lg font-bold">Controle completo de empréstimos e devoluções</h5>
            </div>
            <div className="cartao-beneficio" data-aos="fade-up" data-aos-delay="200">
              <div className="icone-beneficio">
                <Search className="w-6 h-6" />
              </div>
              <h5 className="text-lg font-bold">Rastreamento detalhado e histórico acessível</h5>
            </div>
            <div className="cartao-beneficio" data-aos="fade-up" data-aos-delay="300">
              <div className="icone-beneficio">
                <Palette className="w-6 h-6" />
              </div>
              <h5 className="text-lg font-bold">Interface personalizável e fácil de usar</h5>
            </div>
            <div className="cartao-beneficio" data-aos="fade-up" data-aos-delay="400">
              <div className="icone-beneficio">
                <Devices className="w-6 h-6" />
              </div>
              <h5 className="text-lg font-bold">Acesso rápido de qualquer lugar, a qualquer hora</h5>
            </div>
          </div>
          
          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="500">
            <h2 className="text-3xl font-bold">Eficiência e praticidade na palma da sua mão!</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;