import { useState } from "react";

// ===============================
// CONFIG FIREBASE
// ===============================
// Crie projeto no Firebase e substitua os dados abaixo

/*
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_BUCKET",
  messagingSenderId: "SEU_ID",
  appId: "SEU_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
*/

// ===============================
// PROJETO HORIZONTE
// MVP DE ORIENTAÇÃO PROFISSIONAL
// React + Tailwind + Firebase
// ===============================

// PASSO A PASSO PARA RODAR:
// 1. Criar projeto React:
// npm create vite@latest projeto-horizonte -- --template react
//
// 2. Entrar na pasta:
// cd projeto-horizonte
//
// 3. Instalar dependências:
// npm install
// npm install firebase react-router-dom jspdf
//
// 4. Instalar Tailwind:
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p
//
// 5. Rodar projeto:
// npm run dev
//
// 6. Publicar:
// Subir no GitHub e conectar na Vercel

import { useState } from "react";

export default function CareerGuideApp() {
  const careers = [
    "Tecnologia",
    "Programação",
    "Administração",
    "Gestão",
    "Farmácia",
    "Medicina",
    "Enfermagem",
    "Odontologia",
    "Direito",
    "Psicologia",
    "Pedagogia",
    "Biologia",
    "Física",
    "Matemática",
    "Logística",
    "Vendas",
    "Empreendedorismo",
    "Moda",
    "Estética",
    "Educação Física",
  ];

  const questions = [
    "Você gosta de ajudar pessoas?",
    "Você gosta de tecnologia?",
    "Você se considera organizado(a)?",
    "Você gosta de ensinar?",
    "Você gostaria de ter seu próprio negócio?",
    "Você gosta de matemática?",
    "Você gosta de trabalhar em equipe?",
    "Você gosta de resolver problemas?",
    "Você gosta da área da saúde?",
    "Você gosta de criar coisas novas?",
    "Você gosta de conversar com pessoas?",
    "Você gosta de aprender aplicativos novos?",
    "Você gosta de cuidar da aparência?",
    "Você gosta de liderar grupos?",
    "Você gostaria de trabalhar em hospital?",
    "Você gosta de estudar o corpo humano?",
    "Você gosta de escrever textos?",
    "Você gosta de desenhar ou criar designs?",
    "Você gosta de organizar tarefas?",
    "Você gostaria de trabalhar de casa?",
    "Você gosta de números?",
    "Você gosta de trabalhar com vendas?",
    "Você gosta de cozinhar?",
    "Você gosta de cuidar de crianças?",
    "Você gosta de ciência?",
    "Você gosta de biologia?",
    "Você gosta de moda?",
    "Você gosta de gravar vídeos?",
    "Você gosta de redes sociais?",
    "Você gosta de ensinar outras pessoas?",
    "Você gosta de trabalhar em equipe?",
    "Você gosta de trabalhar com computadores?",
    "Você gosta de atendimento ao público?",
    "Você gosta de resolver conflitos?",
    "Você gostaria de abrir um negócio próprio?",
    "Você gosta de cuidar de animais?",
    "Você gosta de estudar leis e justiça?",
    "Você gosta de planejamento financeiro?",
    "Você gosta de logística e organização?",
    "Você gosta de aprender idiomas?",
  ];

  const [step, setStep] = useState("home");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [socialCode, setSocialCode] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (value) => {
    const updated = [...answers, value];
    setAnswers(updated);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep("result");
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Projeto Horizonte</h1>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-xl font-semibold shadow">
            Entrar
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <section className="bg-white rounded-3xl shadow-lg p-8 mb-10 text-center">
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-3 rounded-2xl w-72"
            />

            <input
              type="password"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-3 rounded-2xl w-72"
            />
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Descubra sua carreira ideal
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Um app criado para ajudar adolescentes a descobrirem caminhos
            profissionais reais através de um quiz inteligente.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() => setStep("quiz")}
              className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 transition"
            >
              Fazer Quiz
            </button>

            <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
              <input
                type="text"
                placeholder="Código Social"
                value={socialCode}
                onChange={(e) => setSocialCode(e.target.value)}
                className="border p-3 rounded-2xl text-gray-900"
              />

              <button className="bg-green-600 text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 transition">
                Tenho Código Social
              </button>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">
              Como funciona?
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✅ Responda o quiz de carreira</li>
              <li>✅ Descubra suas áreas compatíveis</li>
              <li>✅ Receba cursos gratuitos recomendados</li>
              <li>✅ Baixe seu PDI personalizado</li>
              <li>✅ Conheça caminhos reais de crescimento</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">
              Acesso ao App
            </h3>

            <div className="space-y-4">
              <div className="border rounded-2xl p-4">
                <h4 className="font-bold text-lg">Plano Individual</h4>
                <p className="text-gray-600">Acesso completo por apenas</p>
                <p className="text-3xl font-bold text-blue-600">R$ 1,99</p>
              </div>

              <div className="border rounded-2xl p-4">
                <h4 className="font-bold text-lg">Projeto Social</h4>
                <p className="text-gray-600">
                  Use um código gratuito disponibilizado por escolas,
                  voluntários e ONGs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-8 mb-10">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Carreiras disponíveis
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {careers.map((career) => (
              <div
                key={career}
                className="bg-gray-100 rounded-2xl p-4 text-center font-semibold hover:bg-blue-100 transition"
              >
                {career}
              </div>
            ))}
          </div>
        </section>

        {step === "quiz" && (
          <section className="bg-white rounded-3xl shadow-lg p-8 mb-10">
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">
                  Pergunta {currentQuestion + 1} de {questions.length}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-600 h-4 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="border rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-8">
                {questions[currentQuestion]}
              </h3>

              <div className="flex flex-col gap-4 max-w-md mx-auto">
                <button
                  onClick={() => handleAnswer(3)}
                  className="bg-green-500 text-white py-4 rounded-2xl text-lg font-semibold"
                >
                  🟢 Muito
                </button>

                <button
                  onClick={() => handleAnswer(2)}
                  className="bg-yellow-500 text-white py-4 rounded-2xl text-lg font-semibold"
                >
                  🟡 Um pouco
                </button>

                <button
                  onClick={() => handleAnswer(1)}
                  className="bg-red-500 text-white py-4 rounded-2xl text-lg font-semibold"
                >
                  🔴 Não gosto
                </button>
              </div>
            </div>
          </section>
        )}

        {step === "result" && (
          <section className="bg-white rounded-3xl shadow-lg p-8 mb-10">
            <h3 className="text-3xl font-bold mb-6 text-center">
              Seu Resultado
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-3xl p-6">
                <h4 className="text-2xl font-bold mb-4">🎯 Carreiras Indicadas</h4>

                <ul className="space-y-3 text-lg">
                  <li>✅ Tecnologia & Programação</li>
                  <li>✅ Administração & Gestão</li>
                  <li>✅ Empreendedorismo</li>
                  <li>✅ Educação</li>
                </ul>
              </div>

              <div className="border rounded-3xl p-6">
                <h4 className="text-2xl font-bold mb-4">📚 Cursos Gratuitos</h4>

                <ul className="space-y-2 text-gray-700">
                  <li>• Excel Básico — Fundação Bradesco</li>
                  <li>• Introdução à Programação — Google</li>
                  <li>• Atendimento ao Cliente — Sebrae</li>
                  <li>• Empreendedorismo — SENAI</li>
                  <li>• Comunicação Profissional — FGV</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => window.print()}
                className="bg-blue-600 text-white px-6 py-4 rounded-2xl text-lg font-bold shadow-lg"
              >
                📄 Baixar Meu PDI
              </button>
            </div>
          </section>
        )}

        <section className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h4 className="text-xl font-bold mb-3">🎯 Resultado Inteligente</h4>
            <p className="text-gray-600">
              O sistema analisa habilidades e interesses para sugerir áreas
              profissionais compatíveis.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h4 className="text-xl font-bold mb-3">📚 Cursos Gratuitos</h4>
            <p className="text-gray-600">
              Recomendações de SENAI, Fundação Bradesco, Sebrae, Google e
              plataformas gratuitas.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h4 className="text-xl font-bold mb-3">📄 PDI Personalizado</h4>
            <p className="text-gray-600">
              O aluno pode baixar um plano de desenvolvimento com metas e
              trilhas profissionais.
            </p>
          </div>
        </section>

        <section className="bg-blue-600 text-white rounded-3xl shadow-lg p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Transformando futuros através da educação
          </h3>

          <p className="text-lg mb-6">
            Projeto criado para ajudar adolescentes a encontrarem caminhos
            profissionais reais e acessíveis.
          </p>

          <button className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition">
            Começar Agora
          </button>
        </section>
      <section className="bg-white rounded-3xl shadow-lg p-8 mt-10 mb-10">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Área Administrativa
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-2xl p-6">
              <h4 className="font-bold text-xl mb-3">👥 Usuários</h4>
              <p className="text-gray-600">
                Gerencie alunos cadastrados e acompanhe resultados.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h4 className="font-bold text-xl mb-3">🎟 Códigos Sociais</h4>
              <p className="text-gray-600">
                Crie códigos gratuitos para ONGs, escolas e projetos.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h4 className="font-bold text-xl mb-3">📊 Relatórios</h4>
              <p className="text-gray-600">
                Veja carreiras mais procuradas e desempenho do projeto.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-8 mb-10">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Pagamento via Pix
          </h3>

          <div className="text-center space-y-4">
            <p className="text-lg">
              Acesso individual por apenas <strong>R$ 1,99</strong>
            </p>

            <div className="bg-gray-100 rounded-3xl p-6 inline-block">
              <p className="font-semibold mb-3">QR Code Pix</p>

              <div className="w-48 h-48 bg-gray-300 rounded-2xl mx-auto flex items-center justify-center">
                QR CODE
              </div>
            </div>

            <p className="text-gray-600">
              Após o pagamento, o acesso será liberado automaticamente.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
