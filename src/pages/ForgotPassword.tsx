import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, ArrowLeft } from 'lucide-react';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica de envio do email de recuperação aqui
    setEnviado(true);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Box className="w-12 h-12 text-azul-primario mx-auto mb-3" />
          <h2 className="text-azul-primario text-2xl font-bold">RASTRO</h2>
        </div>

        {!enviado ? (
          <>
            <h1 className="text-2xl font-bold mb-4">Recuperar Senha</h1>
            <p className="text-cinza-texto mb-8">
              Digite seu e-mail cadastrado e enviaremos as instruções para redefinir sua senha
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
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

              <button type="submit" className="botao-primario mb-4">
                ENVIAR INSTRUÇÕES
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6">
              ✓ Email enviado com sucesso!
            </div>
            <p className="text-cinza-texto mb-6">
              Verifique sua caixa de entrada e siga as instruções enviadas para recuperar sua senha.
            </p>
          </div>
        )}

        <div className="text-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-azul-primario hover:text-azul-hover font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;