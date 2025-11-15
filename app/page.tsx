'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { ChevronLeft, ChevronRight, Droplet, Clock, Coffee, Utensils, Apple, Moon, Heart, SmilePlus, Smile, Meh, Frown, Angry, Sparkles, Leaf, Flame, Zap, Brain } from 'lucide-react'

const chasDoDia = [
  "Chá de gengibre",
  "Chá verde",
  "Chá de hibisco",
  "Chá de canela",
  "Chá de cúrcuma",
  "Chá de cavalinha",
  "Chá detox (mistura leve)"
]

const treinosDoDia = [
  {
    titulo: "HIIT Explosivo - Queima Total",
    descricao: "5 rounds de 30s cada exercício com 10s descanso",
    exercicios: ["Burpees", "Mountain Climbers", "Jumping Jacks", "High Knees", "Jump Squats"],
    calorias: "300-400 kcal"
  },
  {
    titulo: "Cardio Intenso - Aceleração Máxima",
    descricao: "4 rounds de 45s cada com 15s descanso",
    exercicios: ["Corrida no lugar", "Polichinelos", "Skater Jumps", "Box Jumps", "Sprint Curto"],
    calorias: "350-450 kcal"
  },
  {
    titulo: "Funcional Power - Força & Explosão",
    descricao: "4 rounds de 40s cada com 20s descanso",
    exercicios: ["Agachamento Jump", "Flexões Explosivas", "Lunges Alternados", "Prancha Dinâmica", "Russian Twists"],
    calorias: "280-380 kcal"
  },
  {
    titulo: "Tabata Inferno - Queima Metabólica",
    descricao: "8 rounds de 20s trabalho / 10s descanso",
    exercicios: ["Burpees", "High Knees", "Prancha com Toque", "Jump Lunges", "Bike no Ar"],
    calorias: "320-420 kcal"
  },
  {
    titulo: "Circuit Training - Potência Total",
    descricao: "3 rounds completos sem pausa",
    exercicios: ["20 Burpees", "30 Mountain Climbers", "15 Jump Squats", "20 Flexões", "30s Prancha"],
    calorias: "400-500 kcal"
  },
  {
    titulo: "AMRAP Challenge - Máxima Intensidade",
    descricao: "Máximo de rounds em 15 minutos",
    exercicios: ["10 Burpees", "15 Jumping Jacks", "20 High Knees", "10 Jump Squats", "15 Mountain Climbers"],
    calorias: "350-450 kcal"
  },
  {
    titulo: "Finalizador Épico - Explosão Final",
    descricao: "5 rounds pirâmide (aumenta e diminui)",
    exercicios: ["Burpees (5-10-15-10-5)", "Jump Squats (10-15-20-15-10)", "High Knees 30s", "Prancha 30s", "Sprint 20s"],
    calorias: "380-480 kcal"
  }
]

const mindsetDoDia = [
  {
    titulo: "Visualização Poderosa",
    exercicio: "Feche os olhos por 3 minutos e visualize você no corpo dos seus sonhos. Sinta a sensação, veja as roupas que está usando, observe o sorriso no espelho. VOCÊ JÁ É ESSA PESSOA!",
    afirmacao: "Eu sou forte, disciplinado(a) e imparável. Cada dia me aproximo do meu melhor!"
  },
  {
    titulo: "Quebra de Padrão Mental",
    exercicio: "Toda vez que pensar 'não consigo', PARE e substitua por 'EU ESCOLHO fazer isso porque EU MEREÇO os resultados'. Anote quantas vezes conseguiu quebrar o padrão hoje.",
    afirmacao: "Meus pensamentos criam minha realidade. Escolho pensamentos de vitória!"
  },
  {
    titulo: "Ancoragem de Poder",
    exercicio: "Crie um gesto físico (punho fechado, palma da mão, etc). Sempre que fizer esse gesto, lembre-se: VOCÊ É CAPAZ! Use quando sentir vontade de desistir.",
    afirmacao: "Eu tenho o poder de escolher minha transformação a cada segundo!"
  },
  {
    titulo: "Diário de Vitórias",
    exercicio: "Liste 5 pequenas vitórias de hoje (bebeu água, fez exercício, comeu bem, acordou cedo, etc). Releia sempre que precisar de motivação.",
    afirmacao: "Cada pequena ação me transforma. Eu celebro meu progresso diário!"
  },
  {
    titulo: "Respiração de Resiliência",
    exercicio: "Inspire por 4s (FORÇA), segure por 4s (FOCO), expire por 6s (SOLTO O QUE NÃO SERVE). Repita 10 vezes quando sentir desânimo.",
    afirmacao: "A cada respiração, renovo minha determinação e libero minhas limitações!"
  },
  {
    titulo: "Espelho da Transformação",
    exercicio: "Olhe no espelho e diga em VOZ ALTA 3 vezes: 'Eu sou capaz, eu sou forte, eu estou me transformando!' Sinta cada palavra.",
    afirmacao: "Meu compromisso comigo é mais forte que qualquer obstáculo!"
  },
  {
    titulo: "Celebração Final",
    exercicio: "Você completou 7 dias! Dance, pule, grite de alegria por 2 minutos. Sinta o orgulho de ter honrado seu compromisso. VOCÊ É UM VENCEDOR!",
    afirmacao: "Eu finalizei o que comecei! Sou prova viva de que sou capaz de qualquer coisa!"
  }
]

const detoxDoDia = [
  "Água com limão em jejum, alimentos ricos em fibras (aveia, chia), vegetais verdes (couve, espinafre)",
  "Suco verde detox (couve + maçã + gengibre), abacaxi, pepino, batata-doce",
  "Chá de hibisco, melancia, beterraba, cenoura, alho e cebola nas refeições",
  "Água de berinjela, brócolis, couve-flor, limão em água morna, alimentos integrais",
  "Chá verde, frutas vermelhas (morango, framboesa), salmão, azeite extra virgem",
  "Água de coco, aspargos, alcachofra, gengibre fresco, maçã verde",
  "Suco detox final (couve + limão + gengibre + hortelã), saladas cruas, frutas cítricas"
]

export default function PlannerResetMetabolico() {
  const [currentPage, setCurrentPage] = useState(0) // 0 = capa, 1-7 = dias
  const [acordei, setAcordei] = useState<{[key: number]: string}>({})
  const [ritualManha, setRitualManha] = useState<{[key: number]: {[key: string]: boolean}}>({})
  const [refeicoes, setRefeicoes] = useState<{[key: number]: {cafeManha: string, almoco: string, lanche: string, jantar: string}}>({})
  const [checklistNutri, setChecklistNutri] = useState<{[key: number]: {[key: string]: boolean}}>({})
  const [coposAgua, setCoposAgua] = useState<{[key: number]: boolean[]}>({})
  const [chaEscrito, setChaEscrito] = useState<{[key: number]: string}>({})
  const [treinoDescricao, setTreinoDescricao] = useState<{[key: number]: string}>({})
  const [checklistTreino, setChecklistTreino] = useState<{[key: number]: {[key: string]: boolean}}>({})
  const [humorSelecionado, setHumorSelecionado] = useState<{[key: number]: number}>({})
  const [metaDia, setMetaDia] = useState<{[key: number]: string}>({})
  const [gratidao, setGratidao] = useState<{[key: number]: string}>({})
  const [fezBem, setFezBem] = useState<{[key: number]: string}>({})
  const [melhorar, setMelhorar] = useState<{[key: number]: string}>({})

  const toggleRitual = (dia: number, key: string) => {
    setRitualManha(prev => ({
      ...prev,
      [dia]: {
        ...(prev[dia] || {}),
        [key]: !(prev[dia]?.[key] || false)
      }
    }))
  }

  const toggleNutri = (dia: number, key: string) => {
    setChecklistNutri(prev => ({
      ...prev,
      [dia]: {
        ...(prev[dia] || {}),
        [key]: !(prev[dia]?.[key] || false)
      }
    }))
  }

  const toggleTreino = (dia: number, key: string) => {
    setChecklistTreino(prev => ({
      ...prev,
      [dia]: {
        ...(prev[dia] || {}),
        [key]: !(prev[dia]?.[key] || false)
      }
    }))
  }

  const toggleCopo = (dia: number, index: number) => {
    setCoposAgua(prev => {
      const diaCopos = prev[dia] || new Array(8).fill(false)
      const newCopos = [...diaCopos]
      newCopos[index] = !newCopos[index]
      return { ...prev, [dia]: newCopos }
    })
  }

  const irParaPagina = (pagina: number) => {
    setCurrentPage(pagina)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Capa
  if (currentPage === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-950 via-orange-900 to-red-950 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/muscular-person-training-intensely-sweating-gym-wo.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-orange-800/85 to-red-900/90" />
        
        <div className="max-w-4xl w-full relative z-10">
          <div className="text-center space-y-8 px-4">
            {/* Energy burst decoration */}
            <div className="flex items-center justify-center gap-3 animate-pulse">
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="w-2 h-2 bg-orange-400 rounded-full" />
              <Sparkles className="w-8 h-8 text-yellow-400" />
              <div className="w-2 h-2 bg-orange-400 rounded-full" />
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            </div>

            {/* Main explosive title */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight text-balance leading-none">
                  EXPLOSÃO
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500">
                    METABÓLICA
                  </span>
                </h1>
              </div>
              
              <div className="space-y-4">
                <div className="h-1.5 w-48 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 mx-auto rounded-full shadow-lg shadow-orange-500/50" />
                <h2 className="text-3xl md:text-5xl font-bold text-white text-balance">
                  Planner de 7 Dias
                </h2>
                <p className="text-xl md:text-2xl text-orange-200 font-semibold uppercase tracking-wide">
                  Reset Completo
                </p>
              </div>
            </div>

            {/* Motivational statements */}
            <div className="space-y-4 py-6">
              <div className="bg-white/10 backdrop-blur-sm border-2 border-yellow-400/30 rounded-2xl p-6 max-w-2xl mx-auto">
                <p className="text-2xl md:text-3xl font-black text-white text-balance leading-tight">
                  A MUDANÇA COMEÇA AGORA!
                </p>
                <p className="text-lg md:text-xl text-orange-200 mt-3 text-balance">
                  7 dias que vão transformar seu corpo e sua mente
                </p>
              </div>

              {/* Power statements */}
              <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-6">
                <div className="bg-gradient-to-br from-red-600 to-orange-600 p-5 rounded-xl border-2 border-yellow-400/40 shadow-xl">
                  <p className="text-yellow-300 font-black text-4xl mb-1">7</p>
                  <p className="text-white font-bold text-sm uppercase">Dias de Foco</p>
                </div>
                <div className="bg-gradient-to-br from-orange-600 to-red-600 p-5 rounded-xl border-2 border-yellow-400/40 shadow-xl">
                  <p className="text-yellow-300 font-black text-4xl mb-1">100%</p>
                  <p className="text-white font-bold text-sm uppercase">Compromisso</p>
                </div>
                <div className="bg-gradient-to-br from-red-600 to-orange-600 p-5 rounded-xl border-2 border-yellow-400/40 shadow-xl">
                  <p className="text-yellow-300 font-black text-4xl mb-1">∞</p>
                  <p className="text-white font-bold text-sm uppercase">Resultados</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 space-y-4">
              <p className="text-orange-200 font-bold text-lg uppercase tracking-wider">
                Está preparado para a transformação?
              </p>
              <Button
                onClick={() => irParaPagina(1)}
                size="lg"
                className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 hover:from-yellow-300 hover:via-orange-400 hover:to-red-500 text-black font-black px-16 py-8 text-xl rounded-2xl shadow-2xl shadow-orange-500/50 border-4 border-yellow-300/50 transform hover:scale-105 transition-all uppercase tracking-wide"
              >
                Começar Agora!
                <ChevronRight className="w-6 h-6 ml-2" />
              </Button>
              <p className="text-orange-300 text-sm font-semibold">
                ⚡ Seu corpo vai agradecer ⚡
              </p>
            </div>

            {/* Bottom motivational line */}
            <div className="pt-8">
              <p className="text-white/80 text-sm md:text-base italic text-balance">
                "A única pessoa que você está destinado a se tornar é a pessoa que você decide ser."
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Páginas dos dias (1-7)
  const diaAtual = currentPage
  const treinoHoje = treinosDoDia[diaAtual - 1]
  const mindsetHoje = mindsetDoDia[diaAtual - 1]
  const detoxHoje = detoxDoDia[diaAtual - 1]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-orange-900 to-red-950">
      {/* Header com navegação */}
      <header className="bg-black/40 backdrop-blur border-b border-orange-500/30 sticky top-0 z-10 print:hidden">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => irParaPagina(currentPage - 1)}
              disabled={currentPage === 0}
              className="text-orange-300 hover:text-orange-200 hover:bg-orange-900/30"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Anterior
            </Button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => irParaPagina(0)}
                className="px-3 py-1.5 rounded-lg text-sm font-bold text-yellow-400 hover:bg-orange-900/50 transition-colors border border-orange-700/50"
              >
                Capa
              </button>
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <button
                  key={num}
                  onClick={() => irParaPagina(num)}
                  className={`w-9 h-9 rounded-lg font-bold text-sm transition-all ${
                    num === currentPage
                      ? 'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 text-black shadow-lg shadow-orange-500/50 border-2 border-yellow-400/50'
                      : 'bg-black/40 text-orange-300 hover:bg-orange-900/40 border border-orange-700/50'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => irParaPagina(currentPage + 1)}
              disabled={currentPage === 7}
              className="text-orange-300 hover:text-orange-200 hover:bg-orange-900/30"
            >
              Próximo
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Day Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 flex items-center justify-center text-black font-black text-2xl shadow-xl shadow-orange-500/50 border-2 border-yellow-400/50">
              {diaAtual}
            </div>
            <div>
              <p className="text-sm font-black text-yellow-400 uppercase tracking-widest mb-1">
                Dia {diaAtual} • Explosão Metabólica
              </p>
              <h1 className="text-3xl md:text-4xl font-black text-white">
                Reset Metabólico
              </h1>
            </div>
          </div>
          <div className="h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-full shadow-lg shadow-orange-500/50" />
        </div>

        {/* 1. Acordar - Ritual da Manhã */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur border-2 border-orange-600/30 shadow-xl">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-orange-600/30">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
              <Clock className="w-4 h-4 text-black" />
            </div>
            <h2 className="text-xl font-black text-white">1. Acordar – Ritual da Manhã</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-orange-300 mb-2">
                Horário que acordei:
              </label>
              <input
                type="time"
                value={acordei[diaAtual] || ''}
                onChange={(e) => setAcordei({...acordei, [diaAtual]: e.target.value})}
                className="w-full md:w-48 px-4 py-2 bg-black/50 border-2 border-orange-600/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-3">
                <Checkbox
                  id={`agua-${diaAtual}`}
                  checked={ritualManha[diaAtual]?.agua || false}
                  onCheckedChange={() => toggleRitual(diaAtual, 'agua')}
                  className="data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-yellow-400 data-[state=checked]:to-orange-500 data-[state=checked]:border-yellow-400 border-orange-600/50"
                />
                <label htmlFor={`agua-${diaAtual}`} className="text-sm text-gray-200 cursor-pointer font-medium">
                  Copo de água logo ao acordar
                </label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox
                  id={`respiracao-${diaAtual}`}
                  checked={ritualManha[diaAtual]?.respiracao || false}
                  onCheckedChange={() => toggleRitual(diaAtual, 'respiracao')}
                  className="data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-yellow-400 data-[state=checked]:to-orange-500 data-[state=checked]:border-yellow-400 border-orange-600/50"
                />
                <label htmlFor={`respiracao-${diaAtual}`} className="text-sm text-gray-200 cursor-pointer font-medium">
                  Respiração profunda por 1 min
                </label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox
                  id={`alongamento-${diaAtual}`}
                  checked={ritualManha[diaAtual]?.alongamento || false}
                  onCheckedChange={() => toggleRitual(diaAtual, 'alongamento')}
                  className="data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-yellow-400 data-[state=checked]:to-orange-500 data-[state=checked]:border-yellow-400 border-orange-600/50"
                />
                <label htmlFor={`alongamento-${diaAtual}`} className="text-sm text-gray-200 cursor-pointer font-medium">
                  Alongamento de 3 min
                </label>
              </div>
            </div>
          </div>
        </Card>

        {/* 2. Meta do Dia */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-purple-900/60 to-violet-900/60 backdrop-blur border-2 border-purple-500/30 shadow-xl">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-purple-500/30">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center shadow-lg">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-black text-white">2. Meta do Dia</h2>
          </div>

          <textarea
            value={metaDia[diaAtual] || ''}
            onChange={(e) => setMetaDia({...metaDia, [diaAtual]: e.target.value})}
            className="w-full px-4 py-3 bg-black/50 border-2 border-purple-600/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none placeholder-gray-500"
            rows={4}
            placeholder="Qual sua meta para hoje..."
          />
        </Card>

        {/* 3. Alimentação do Dia */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur border-2 border-orange-600/30 shadow-xl">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-orange-600/30">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg">
              <Utensils className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-black text-white">3. Alimentação do Dia</h2>
          </div>

          <div className="mb-5 p-4 bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-lg border border-green-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Leaf className="w-5 h-5 text-green-400" />
              <p className="text-sm font-black text-green-300 uppercase">Alimentos Detox de Hoje:</p>
            </div>
            <p className="text-sm text-green-100 leading-relaxed">{detoxHoje}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-orange-300 mb-2">
                <Coffee className="w-4 h-4" />
                Café da manhã
              </label>
              <textarea
                value={refeicoes[diaAtual]?.cafeManha || ''}
                onChange={(e) => setRefeicoes({...refeicoes, [diaAtual]: {...(refeicoes[diaAtual] || {}), cafeManha: e.target.value}})}
                className="w-full px-3 py-2 bg-black/50 border-2 border-orange-600/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none text-sm placeholder-gray-500"
                rows={2}
                placeholder="O que comeu..."
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-orange-300 mb-2">
                <Utensils className="w-4 h-4" />
                Almoço
              </label>
              <textarea
                value={refeicoes[diaAtual]?.almoco || ''}
                onChange={(e) => setRefeicoes({...refeicoes, [diaAtual]: {...(refeicoes[diaAtual] || {}), almoco: e.target.value}})}
                className="w-full px-3 py-2 bg-black/50 border-2 border-orange-600/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none text-sm placeholder-gray-500"
                rows={2}
                placeholder="O que comeu..."
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-orange-300 mb-2">
                <Apple className="w-4 h-4" />
                Lanche da tarde
              </label>
              <textarea
                value={refeicoes[diaAtual]?.lanche || ''}
                onChange={(e) => setRefeicoes({...refeicoes, [diaAtual]: {...(refeicoes[diaAtual] || {}), lanche: e.target.value}})}
                className="w-full px-3 py-2 bg-black/50 border-2 border-orange-600/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none text-sm placeholder-gray-500"
                rows={2}
                placeholder="O que comeu..."
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-orange-300 mb-2">
                <Moon className="w-4 h-4" />
                Jantar
              </label>
              <textarea
                value={refeicoes[diaAtual]?.jantar || ''}
                onChange={(e) => setRefeicoes({...refeicoes, [diaAtual]: {...(refeicoes[diaAtual] || {}), jantar: e.target.value}})}
                className="w-full px-3 py-2 bg-black/50 border-2 border-orange-600/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none text-sm placeholder-gray-500"
                rows={2}
                placeholder="O que comeu..."
              />
            </div>
          </div>

          <div className="pt-4 border-t border-orange-600/30">
            <p className="text-sm font-bold text-orange-300 mb-3">Checklist Nutricional:</p>
            <div className="grid md:grid-cols-2 gap-2">
              <div className="flex items-center gap-3">
                <Checkbox
                  id={`devagar-${diaAtual}`}
                  checked={checklistNutri[diaAtual]?.devagar || false}
                  onCheckedChange={() => toggleNutri(diaAtual, 'devagar')}
                  className="data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-yellow-400 data-[state=checked]:to-orange-500 data-[state=checked]:border-yellow-400 border-orange-600/50"
                />
                <label htmlFor={`devagar-${diaAtual}`} className="text-sm text-gray-200 cursor-pointer font-medium">
                  Comi devagar
                </label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox
                  id={`mastiguei-${diaAtual}`}
                  checked={checklistNutri[diaAtual]?.mastiguei || false}
                  onCheckedChange={() => toggleNutri(diaAtual, 'mastiguei')}
                  className="data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-yellow-400 data-[state=checked]:to-orange-500 data-[state=checked]:border-yellow-400 border-orange-600/50"
                />
                <label htmlFor={`mastiguei-${diaAtual}`} className="text-sm text-gray-200 cursor-pointer font-medium">
                  Mastiguei bem
                </label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox
                  id={`acucar-${diaAtual}`}
                  checked={checklistNutri[diaAtual]?.acucar || false}
                  onCheckedChange={() => toggleNutri(diaAtual, 'acucar')}
                  className="data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-yellow-400 data-[state=checked]:to-orange-500 data-[state=checked]:border-yellow-400 border-orange-600/50"
                />
                <label htmlFor={`acucar-${diaAtual}`} className="text-sm text-gray-200 cursor-pointer font-medium">
                  Evitei açúcar
                </label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox
                  id={`frituras-${diaAtual}`}
                  checked={checklistNutri[diaAtual]?.frituras || false}
                  onCheckedChange={() => toggleNutri(diaAtual, 'frituras')}
                  className="data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-yellow-400 data-[state=checked]:to-orange-500 data-[state=checked]:border-yellow-400 border-orange-600/50"
                />
                <label htmlFor={`frituras-${diaAtual}`} className="text-sm text-gray-200 cursor-pointer font-medium">
                  Evitei frituras
                </label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox
                  id={`proteinas-${diaAtual}`}
                  checked={checklistNutri[diaAtual]?.proteinas || false}
                  onCheckedChange={() => toggleNutri(diaAtual, 'proteinas')}
                  className="data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-yellow-400 data-[state=checked]:to-orange-500 data-[state=checked]:border-yellow-400 border-orange-600/50"
                />
                <label htmlFor={`proteinas-${diaAtual}`} className="text-sm text-gray-200 cursor-pointer font-medium">
                  Priorizei proteínas
                </label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox
                  id={`agua-regular-${diaAtual}`}
                  checked={checklistNutri[diaAtual]?.aguaRegular || false}
                  onCheckedChange={() => toggleNutri(diaAtual, 'aguaRegular')}
                  className="data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-yellow-400 data-[state=checked]:to-orange-500 data-[state=checked]:border-yellow-400 border-orange-600/50"
                />
                <label htmlFor={`agua-regular-${diaAtual}`} className="text-sm text-gray-200 cursor-pointer font-medium">
                  Bebi água em horários regulares
                </label>
              </div>
            </div>
          </div>
        </Card>

        {/* 4. Hidratação */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur border-2 border-cyan-600/30 shadow-xl">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-cyan-600/30">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
              <Droplet className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-black text-white">4. Hidratação</h2>
          </div>

          <p className="text-sm text-cyan-300 mb-4 font-semibold">Registre seus 8 copos de água:</p>
          <div className="flex gap-3 flex-wrap">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
              const preenchido = coposAgua[diaAtual]?.[index] || false
              return (
                <button
                  key={index}
                  onClick={() => toggleCopo(diaAtual, index)}
                  className={`w-12 h-16 rounded-lg border-2 transition-all ${
                    preenchido
                      ? 'bg-gradient-to-b from-cyan-400 to-blue-500 border-cyan-400 shadow-lg shadow-cyan-500/50'
                      : 'bg-black/50 border-2 border-cyan-700/50 hover:border-cyan-500/70'
                  }`}
                >
                  <Droplet className={`w-6 h-6 mx-auto ${preenchido ? 'text-white' : 'text-cyan-700/50'}`} />
                </button>
              )
            })}
          </div>
        </Card>

        {/* 5. Chá do Dia */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-green-900/60 to-emerald-900/60 backdrop-blur border-2 border-green-500/30 shadow-xl">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-green-500/30">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-black text-white">5. Chá do Dia – Acelera Metabolismo</h2>
          </div>

          <div className="mb-3">
            <p className="text-sm font-bold text-green-300 mb-2">
              Sugestão: {chasDoDia[diaAtual - 1]}
            </p>
          </div>

          <div>
            <label className="block text-sm font-bold text-green-300 mb-2">
              Qual chá tomou hoje?
            </label>
            <input
              type="text"
              value={chaEscrito[diaAtual] || ''}
              onChange={(e) => setChaEscrito({...chaEscrito, [diaAtual]: e.target.value})}
              className="w-full px-4 py-2 bg-black/50 border-2 border-green-600/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder-gray-500"
              placeholder="Ex: Chá de gengibre com limão"
            />
          </div>
        </Card>

        {/* 6. Treino de Alta Queima Calórica */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-red-950/90 to-orange-950/90 backdrop-blur border-2 border-red-500/50 shadow-2xl">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-red-500/50">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-400 via-orange-500 to-yellow-400 flex items-center justify-center shadow-lg animate-pulse">
              <Flame className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-black text-white flex items-center gap-2">
              🔥 6. Treino de Alta Queima Calórica
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-4 border-2 border-yellow-500/40">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-black text-yellow-300">{treinoHoje.titulo}</h3>
                <div className="flex items-center gap-1 px-3 py-1 bg-red-600/80 rounded-full">
                  <Zap className="w-4 h-4 text-yellow-300" />
                  <span className="text-xs font-black text-white">{treinoHoje.calorias}</span>
                </div>
              </div>
              <p className="text-sm text-orange-200 mb-3 font-semibold">{treinoHoje.descricao}</p>
              
              <div className="space-y-2">
                <p className="text-xs font-black text-orange-300 uppercase tracking-wide">Exercícios:</p>
                {treinoHoje.exercicios.map((exercicio, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center text-white font-black text-xs shadow-lg">
                      {idx + 1}
                    </div>
                    <span className="text-sm text-white font-semibold">{exercicio}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-900/30 rounded-lg p-3 border border-red-600/30">
              <div className="flex items-center gap-2 mb-2">
                <Flame className="w-4 h-4 text-orange-400" />
                <p className="text-xs font-black text-orange-300 uppercase">Dica Explosiva:</p>
              </div>
              <p className="text-sm text-gray-200">
                Dê tudo de si em cada exercício! É melhor fazer menos repetições com MÁXIMA intensidade do que muitas com meia força. EXPLODA! 💥
              </p>
            </div>
          </div>
        </Card>

        {/* 7. Treino / Movimento */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur border-2 border-red-600/30 shadow-xl">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-red-600/30">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-400 to-rose-500 flex items-center justify-center shadow-lg">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-black text-white">7. Treino / Movimento</h2>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold text-red-300 mb-2">
              Descreva seu treino:
            </label>
            <textarea
              value={treinoDescricao[diaAtual] || ''}
              onChange={(e) => setTreinoDescricao({...treinoDescricao, [diaAtual]: e.target.value})}
              className="w-full px-4 py-3 bg-black/50 border-2 border-red-600/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none placeholder-gray-500"
              rows={3}
              placeholder="Descreva o que fez hoje..."
            />
          </div>

          <div className="pt-3 border-t border-red-600/30">
            <p className="text-sm font-bold text-red-300 mb-3">Checklist:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Checkbox
                  id={`caminhada-${diaAtual}`}
                  checked={checklistTreino[diaAtual]?.caminhada || false}
                  onCheckedChange={() => toggleTreino(diaAtual, 'caminhada')}
                  className="data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-red-400 data-[state=checked]:to-rose-500 data-[state=checked]:border-red-400 border-red-700/50"
                />
                <label htmlFor={`caminhada-${diaAtual}`} className="text-sm text-gray-200 cursor-pointer font-medium">
                  Caminhada de 10 a 20 min
                </label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox
                  id={`hiit-${diaAtual}`}
                  checked={checklistTreino[diaAtual]?.hiit || false}
                  onCheckedChange={() => toggleTreino(diaAtual, 'hiit')}
                  className="data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-red-400 data-[state=checked]:to-rose-500 data-[state=checked]:border-red-400 border-red-700/50"
                />
                <label htmlFor={`hiit-${diaAtual}`} className="text-sm text-gray-200 cursor-pointer font-medium">
                  Treino rápido (HIIT ou funcional)
                </label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox
                  id={`alongamento-treino-${diaAtual}`}
                  checked={checklistTreino[diaAtual]?.alongamentoTreino || false}
                  onCheckedChange={() => toggleTreino(diaAtual, 'alongamentoTreino')}
                  className="data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-red-400 data-[state=checked]:to-rose-500 data-[state=checked]:border-red-400 border-red-700/50"
                />
                <label htmlFor={`alongamento-treino-${diaAtual}`} className="text-sm text-gray-200 cursor-pointer font-medium">
                  Alongamento
                </label>
              </div>
            </div>
          </div>
        </Card>

        {/* 8. Exercício Mental - Limpeza da Mente */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-purple-950/90 to-indigo-950/90 backdrop-blur border-2 border-purple-500/50 shadow-2xl">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-purple-500/50">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 via-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-black text-white flex items-center gap-2">
              🧠 8. Exercício Mental - Limpeza da Mente
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-4 border-2 border-purple-500/40">
              <h3 className="text-lg font-black text-purple-300 mb-3">{mindsetHoje.titulo}</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-black text-purple-300 uppercase mb-1">Como fazer:</p>
                  <p className="text-sm text-gray-200 leading-relaxed">{mindsetHoje.exercicio}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-xl p-4 border-2 border-pink-500/40">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-pink-400" />
                <p className="text-xs font-black text-pink-300 uppercase">Afirmação Poderosa:</p>
              </div>
              <p className="text-base text-white font-bold italic text-center leading-relaxed">
                "{mindsetHoje.afirmacao}"
              </p>
            </div>

            <div className="bg-purple-900/30 rounded-lg p-3 border border-purple-600/30">
              <p className="text-xs font-black text-purple-300 uppercase mb-2">⚡ Lembre-se:</p>
              <p className="text-sm text-gray-200">
                Sua mente é sua maior aliada ou sua pior inimiga. Você decide! Faça este exercício todo dia e REPROGRAME sua mente para o SUCESSO! 🚀
              </p>
            </div>
          </div>
        </Card>

        {/* 9. Humor e Energia */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur border-2 border-yellow-600/30 shadow-xl">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-yellow-600/30">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg">
              <SmilePlus className="w-4 h-4 text-black" />
            </div>
            <h2 className="text-xl font-black text-white">9. Humor e Energia</h2>
          </div>

          <p className="text-sm text-yellow-300 mb-4 font-semibold">Como você se sentiu hoje?</p>
          <div className="flex gap-4 justify-center">
            {[
              { icon: SmilePlus, label: 'Ótimo', value: 5 },
              { icon: Smile, label: 'Bem', value: 4 },
              { icon: Meh, label: 'Normal', value: 3 },
              { icon: Frown, label: 'Mal', value: 2 },
              { icon: Angry, label: 'Péssimo', value: 1 },
            ].map(({ icon: Icon, label, value }) => (
              <button
                key={value}
                onClick={() => setHumorSelecionado({...humorSelecionado, [diaAtual]: value})}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${
                  humorSelecionado[diaAtual] === value
                    ? 'bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-yellow-300 shadow-lg shadow-yellow-500/50'
                    : 'bg-black/50 border-2 border-yellow-700/30 hover:border-yellow-600/50'
                }`}
              >
                <Icon className={`w-8 h-8 ${
                  humorSelecionado[diaAtual] === value ? 'text-black' :
                  value === 5 ? 'text-green-400' :
                  value === 4 ? 'text-emerald-400' :
                  value === 3 ? 'text-yellow-400' :
                  value === 2 ? 'text-orange-400' :
                  'text-red-400'
                }`} />
                <span className={`text-xs font-bold ${
                  humorSelecionado[diaAtual] === value ? 'text-black' : 'text-gray-300'
                }`}>{label}</span>
              </button>
            ))}
          </div>
        </Card>

        {/* 10. Gratidão do Dia */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-amber-900/60 to-yellow-900/60 backdrop-blur border-2 border-amber-500/30 shadow-xl">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-amber-500/30">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-lg">
              <Heart className="w-4 h-4 text-black" />
            </div>
            <h2 className="text-xl font-black text-white">10. Gratidão do Dia</h2>
          </div>

          <label className="block text-sm font-bold text-amber-300 mb-2">
            Hoje sou grato por:
          </label>
          <textarea
            value={gratidao[diaAtual] || ''}
            onChange={(e) => setGratidao({...gratidao, [diaAtual]: e.target.value})}
            className="w-full px-4 py-3 bg-black/50 border-2 border-amber-600/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 resize-none placeholder-gray-500"
            rows={3}
            placeholder="Escreva três coisas..."
          />
        </Card>

        {/* 11. Resumo do Dia */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur border-2 border-teal-600/30 shadow-xl">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-teal-600/30">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-lg">
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-black text-white">11. Resumo do Dia</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-teal-300 mb-2">
                O que fiz bem hoje?
              </label>
              <textarea
                value={fezBem[diaAtual] || ''}
                onChange={(e) => setFezBem({...fezBem, [diaAtual]: e.target.value})}
                className="w-full px-4 py-3 bg-black/50 border-2 border-teal-600/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none placeholder-gray-500"
                rows={3}
                placeholder="Suas conquistas de hoje..."
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-teal-300 mb-2">
                O que posso melhorar amanhã?
              </label>
              <textarea
                value={melhorar[diaAtual] || ''}
                onChange={(e) => setMelhorar({...melhorar, [diaAtual]: e.target.value})}
                className="w-full px-4 py-3 bg-black/50 border-2 border-teal-600/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none placeholder-gray-500"
                rows={3}
                placeholder="Pontos de atenção..."
              />
            </div>
          </div>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur border-t border-orange-600/30 py-6 print:hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-orange-200 font-bold">
            Pronto para continuar seu reset metabólico! Continue firme na sua jornada. 🔥
          </p>
        </div>
      </footer>
    </div>
  )
}
