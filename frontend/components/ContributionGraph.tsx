import { Terminal } from "lucide-react";

// Tipagem para os dados vindos da API do GitHub
interface GithubData {
  totalContributions: number;
  weeks: {
    contributionDays: {
      contributionCount: number;
      date: string;
    }[];
  }[];
}

export default function ContributionGraph({ githubData }: { githubData?: GithubData | null }) {
  const months = ["Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"];
  const days = ["Mon", "", "Wed", "", "Fri", ""];

  // Fallback estático caso não tenha token configurado
  const fallbackPattern = [0,0,0,0,0,0,0,1,2,3,2,1,0,3,4,3,2,1,4,3,2,4,4,3,2,1,0,3,4,3,2,1,0,0,0,1,2,3,4,3,2,1,4,3,2,1,4,3];

  // Função para mapear a quantidade de commits para a cor certa
  const getColorLevel = (count: number) => {
    if (count === 0) return 0;
    if (count <= 3) return 1;
    if (count <= 6) return 2;
    if (count <= 9) return 3;
    return 4;
  };

  // Prepara o grid de contribuições
  let contributionGrid: number[] = [];
  let totalCommits = 1092; // Valor de fallback

  if (githubData) {
    // Achata o array do GraphQL para uma lista simples de blocos
    totalCommits = githubData.totalContributions;
    githubData.weeks.forEach(week => {
      week.contributionDays.forEach(day => {
        contributionGrid.push(getColorLevel(day.contributionCount));
      });
    });
  } else {
    // Usa o fallback estático
    contributionGrid = Array.from({ length: 371 }).map((_, i) => {
      const patternIndex = i % fallbackPattern.length;
      return i < 140 ? 0 : fallbackPattern[patternIndex];
    });
  }

  // Preenche espaços vazios se o ano ainda não acabou
  while (contributionGrid.length < 371) {
    contributionGrid.push(0);
  }

  return (
    <div className="p-5 bg-zinc-900/30 border border-zinc-900 rounded-xl flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-zinc-400">
          <Terminal size={16} />
          <h3 className="text-sm font-semibold tracking-tight text-zinc-200">
            {totalCommits.toLocaleString('pt-BR')} contribuições no último ano
          </h3>
        </div>
        <a 
          href="https://github.com/lucaspaiva-lp" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[11px] font-mono text-zinc-500 hover:text-zinc-300 transition"
        >
          @lucaspaiva-lp
        </a>
      </div>

      <div className="w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-800">
        <div className="min-w-[620px] flex flex-col gap-1 text-[10px] font-mono text-zinc-600 select-none">
          
          <div className="flex pl-7 mb-1 justify-between pr-4">
            {months.map((month, idx) => (
              <span key={idx} className="w-8 text-center">{month}</span>
            ))}
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col justify-between h-[84px] pr-1 text-right w-5">
              {days.map((day, idx) => (
                <span key={idx} className="h-[10px] leading-none">{day}</span>
              ))}
            </div>

            <div className="flex-1 grid grid-flow-col grid-rows-7 gap-[3px] h-[84px]">
              {contributionGrid.slice(0, 371).map((level, i) => {
                const bgColors = [
                  "bg-zinc-900 border border-zinc-950",        
                  "bg-emerald-900/60 border border-transparent", 
                  "bg-emerald-700/70 border border-transparent", 
                  "bg-emerald-500/80 border border-transparent", 
                  "bg-emerald-400 border border-transparent"     
                ];

                return (
                  <div 
                    key={i} 
                    className={`w-[10px] h-[10px] rounded-[2px] transition-colors duration-300 hover:scale-110 ${bgColors[level]}`}
                  />
                );
              })}
            </div>
          </div>
          
          <div className="flex justify-end items-center gap-1.5 mt-2 text-[11px] pr-2">
            <span>Menos</span>
            <div className="w-[10px] h-[10px] rounded-[2px] bg-zinc-900 border border-zinc-950" />
            <div className="w-[10px] h-[10px] rounded-[2px] bg-emerald-900/60" />
            <div className="w-[10px] h-[10px] rounded-[2px] bg-emerald-700/70" />
            <div className="w-[10px] h-[10px] rounded-[2px] bg-emerald-500/80" />
            <div className="w-[10px] h-[10px] rounded-[2px] bg-emerald-400" />
            <span>Mais</span>
          </div>

        </div>
      </div>
    </div>
  );
}