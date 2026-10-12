/* =========================================================
   TRAINER / VA SOP  (PT / EN)
   ========================================================= */
const SCORE = {
  pt: ["Parte alta: teias, ventiladores, luminárias", "Persianas, parapeitos e trincos", "Quadros, enfeites, prateleiras e móveis", "Portas, molduras e rodapés", "Cozinha completa (topo da geladeira, armários, micro-ondas, fogão)", "Banheiros higienizados (espelho, metais, box, vaso)", "Camas (até 3) bem feitas", "Lixeiras esvaziadas e com saco novo", "Escadas e pisos sem marcas", "Ordem correta: de cima para baixo, seco antes do molhado", "Código de cores dos panos respeitado", "Segurança: escada, produtos, nada misturado", "Pontualidade, uniforme e comunicação com o cliente", "Conferência final feita e nada esquecido"],
  en: ["High work: cobwebs, fans, light fixtures", "Blinds, sills & lock ledges", "Pictures, knick-knacks, shelves & furniture", "Doors, moldings & baseboards", "Full kitchen (top of fridge, cabinets, microwave, stovetop)", "Bathrooms sanitized (mirror, fixtures, shower, toilet)", "Beds (up to 3) made well", "Wastebaskets emptied & relined", "Stairs & floors with no marks", "Correct order: top to bottom, dry before wet", "Cloth color code followed", "Safety: ladder, products, nothing mixed", "On time, uniform & client communication", "Final check done, nothing left behind"]
};

const DATA = {
pt: {
  title: "SOP do Treinador",
  intro: "Guia para quem treina novas cleaners (ou para a VA que organiza o treinamento) em todos os tipos de limpeza: Regular, Deluxe, Move In/Out, Pós-obra, Comercial pequeno e Airbnb.",
  steps: [
    { icon: "target", t: "Objetivo do treinamento", lead: "No fim do treinamento, a nova cleaner faz sozinha o tipo de limpeza para o qual está sendo treinada, na ordem certa, com segurança e nota mínima de 90% na avaliação.",
      blocks: [
        { k: "do", h: "O que a cleaner precisa dominar", list: ["As regras de ouro: de cima para baixo, seco antes do molhado, esquerda para direita, à mão.", "Todos os passos do SOP da Cleaner desse tipo de limpeza, na ordem.", "Código de cores dos panos e uso seguro de produtos e escada.", "O que está incluído e o que NÃO está incluído no serviço.", "Como falar com o cliente na chegada e na saída."] },
        { k: "tip", h: "Material de apoio", p: "Mande para a trainee o link do SOP da Cleaner do tipo de limpeza, no idioma dela (inglês, português ou espanhol). Ela deve ler antes do primeiro dia." }
      ] },
    { icon: "route", t: "O caminho de treinamento", lead: "Cinco fases. Só avance quando a fase anterior estiver aprovada.",
      table: { head: ["Fase", "Onde", "O que acontece", "Aprovada quando"], rows: [
        ["1. Orientação", "Escritório ou chamada de vídeo", "Empresa, uniforme, pontualidade, segurança, produtos, kit, código de cores, regras de ouro (Passos 1–3 do SOP).", "Trainee explica as regras de ouro e o código de cores sem olhar."],
        ["2. Acompanhamento", "Trabalho 1", "Trainee observa e ajuda. Treinador explica o porquê de cada passo enquanto faz.", "Trainee diz o próximo passo antes do treinador fazer."],
        ["3. Prática guiada", "Trabalhos 2 e 3", "Trainee lidera. Treinador confere cada cômodo antes de seguir e corrige na hora.", "Menos de 3 correções por cômodo."],
        ["4. Avaliação", "Trabalho 4", "Trainee faz tudo sozinha. Treinador só observa e preenche a Avaliação de Qualidade.", "Nota de 90% ou mais."],
        ["5. Certificação e acompanhamento", "Escritório + 30 dias", "Treinador assina a certificação. VA agenda inspeção surpresa em 30 dias.", "Inspeção de 30 dias com 90% ou mais."]
      ] } },
    { icon: "chat", t: "Como ensinar: Explicar, Mostrar, Fazer, Revisar", lead: "Use o mesmo método para cada passo do SOP. Ele funciona para quem nunca limpou uma casa.",
      blocks: [
        { k: "do", h: "O método em 4 tempos", list: ["EXPLICAR: diga o que vai fazer e POR QUÊ. Ex.: “Limpamos o ventilador antes do chão porque a poeira cai.”", "MOSTRAR: faça devagar, falando cada movimento. Mostre a ferramenta e o produto certos.", "FAZER: a trainee faz enquanto você observa em silêncio. Não pegue o pano da mão dela.", "REVISAR: elogie o que ficou bom, mostre UMA coisa para melhorar, e peça para refazer se necessário."] },
        { k: "tip", h: "Dica", p: "Corrija uma coisa por vez. Muitas correções de uma vez confundem e desanimam. Fale no idioma em que a trainee entende melhor." },
        { k: "avoid", h: "Evite", list: ["Corrigir na frente do cliente. Chame a trainee de lado.", "Refazer o trabalho dela sem explicar.", "Pular o “porquê”. Quem entende o motivo não esquece o passo."] }
      ] },
    { icon: "shield", t: "Módulo de segurança", lead: "Ensine e teste a segurança no primeiro dia, antes de qualquer limpeza.",
      blocks: [
        { k: "avoid", h: "Regras que nunca podem ser quebradas", list: ["Nunca misturar produtos (água sanitária + amônia ou vinagre = gás tóxico).", "Escada: só a de 2 degraus, firme, nunca no último degrau, nunca em cadeira ou móvel.", "Desligar ventilador e luminária antes de limpar. Borrifar o pano, nunca a parte elétrica.", "Luvas sempre no banheiro e com produtos fortes.", "Não levantar peso sozinha. Não mover móveis pesados."] },
        { k: "do", h: "Como testar", list: ["Pergunte: “O que acontece se misturar água sanitária com vinagre?”", "Peça para ela montar a escada e mostrar onde pode pisar.", "Mostre dois rótulos e peça para ela achar o tempo de contato do desinfetante."] }
      ] },
    { icon: "bulb", t: "Erros comuns e como corrigir", lead: "Estes são os erros que mais aparecem em cleaners novas. Fique de olho.",
      table: { head: ["Passo", "Erro comum", "Como corrigir"], rows: [
        ["Parte alta", "Limpa o ventilador depois do chão.", "Volte à regra de cima para baixo. Peça para ela dizer a ordem do cômodo antes de começar."],
        ["Persianas", "Lava com água ou entorta as lâminas.", "Mostre o bocal de escova e o movimento de cima para baixo, dos dois lados."],
        ["Móveis", "Borrifa lustra-móveis direto no móvel ou na TV.", "Sempre borrifar no pano. Tela só com microfibra seca."],
        ["Rodapés", "Passa pano úmido sem tirar o pó antes.", "Seco antes do molhado: aspire primeiro."],
        ["Cozinha", "Esquece o topo da geladeira ou as frentes dos armários.", "Use a lista de “Pronto quando…” do passo da cozinha."],
        ["Cozinha", "Usa o lado verde da esponja no inox.", "Lado amarelo em superfície sensível. Verde só em sujeira incrustada em superfície resistente."],
        ["Banheiro", "Leva pano rosa ou azul do banheiro para a cozinha.", "Revise o código de cores: cada área tem seu par (úmido + seco). Pano de banheiro nunca sai do banheiro."],
        ["Banheiro", "Tira o desinfetante na hora.", "Mostre o tempo de contato no rótulo e espere junto com ela."],
        ["Pisos", "Passa mop e fica presa no meio do cômodo.", "Comece no canto mais longe e saia de costas pela porta."],
        ["Final", "Esquece pano ou frasco na casa.", "Contagem do kit na saída: tudo o que entrou tem que sair."]
      ] } },
    { icon: "clip", t: "Avaliação de qualidade", lead: "Use no Trabalho 4 e na inspeção de 30 dias da Limpeza Deluxe. Para os outros tipos, use a lista “Pronto quando…” de cada passo do SOP da Cleaner.", scorecard: true },
    { icon: "award", t: "Feedback e certificação", lead: "Termine cada dia de treinamento com uma conversa curta. Termine o treinamento com uma decisão clara.",
      blocks: [
        { k: "do", h: "Conversa de fim de dia (5 minutos)", list: ["Comece com 2 coisas que ela fez bem, com exemplos.", "Fale de 1 ponto para melhorar no próximo trabalho.", "Pergunte: “O que foi mais difícil hoje?”", "Anote tudo no registro de treinamento."] },
        { k: "done", h: "Certificar quando", list: ["Nota de 90% ou mais na Avaliação de Qualidade", "Nenhum item de segurança errado", "Cliente sem reclamação no trabalho de avaliação"] },
        { k: "avoid", h: "Não passou?", list: ["Repita a fase 3 (prática guiada) focando nos itens que falharam.", "Faça nova avaliação em outro trabalho.", "Duas avaliações abaixo de 90%: converse com a dona da empresa."] }
      ] },
    { icon: "home", t: "Limpeza regular: o que muda", lead: "O mesmo método de ensino serve para a Limpeza Regular. Mostre à trainee as diferenças entre os dois serviços.",
      table: { head: ["Item", "Deluxe", "Regular"], rows: [
        ["Objetivo", "Remover sujeira acumulada, à mão", "Manter o básico em dia, semanal ou mensal"],
        ["Rodapés, frentes de armário, ventiladores, luminárias", "Incluídos, à mão", "Não incluídos"],
        ["Saídas de ar (vents)", "—", "Pó em todas"],
        ["Banheiros", "Higienizar bancadas e metais", "Paredes e box lavados com Clorox"],
        ["Lençóis", "Até 3 camas, lençóis que o cliente deixou", "Lençóis que o cliente deixou em cima da cama"],
        ["Louça", "Não incluída", "Não incluída: não lavar nem guardar"]
      ] },
      blocks: [
        { k: "do", h: "Como treinar a Regular", list: ["Use as mesmas 5 fases, com o link do SOP da Cleaner da Limpeza Regular.", "Faça a trainee explicar o que está e o que NÃO está incluído antes do primeiro trabalho.", "Na fase de prática, confira cada banheiro antes de ela seguir: Clorox bem enxaguado."] },
        { k: "avoid", h: "Segurança com Clorox", list: ["Teste: “Com o que o Clorox nunca pode ser misturado?” (amônia, vinagre, qualquer outro limpador).", "Luvas e ventilação sempre.", "Nunca em pedra natural. Mancha tecido."] }
      ] },
    { icon: "home", t: "Move In/Out: o que muda", lead: "Casa vazia, sem cliente para perguntar. Ensine a trainee a documentar tudo e a não esquecer o que só existe neste serviço.",
      table: { head: ["Item", "Move In/Out"], rows: [
        ["Casa", "Vazia. Conferir água e luz antes de começar"],
        ["Fotos", "Antes e depois de TODOS os cômodos, inclusive geladeira e forno por dentro"],
        ["Geladeira e forno", "Incluídos por dentro e por fora"],
        ["Rodapés e portas", "Limpos e desinfetados com Clorox ou Lysol"],
        ["Armários", "Só por fora"],
        ["Janelas", "Pó das persianas e vidros limpos"],
        ["Lixo", "Remover se houver. Objetos que não são lixo: foto e perguntar ao escritório"]
      ] },
      blocks: [
        { k: "do", h: "Como treinar a Move In/Out", list: ["Use as mesmas 5 fases, com o link do SOP da Cleaner da Move In/Out.", "Na prática guiada, confira as fotos do antes antes de a trainee começar a limpar.", "Confira geladeira e forno por dentro antes de liberar a cozinha.", "Na avaliação, compare as fotos do antes e do depois."] },
        { k: "avoid", h: "Segurança", list: ["Nunca desengordurante com o forno quente.", "Nunca água sanitária líquida em porta pintada ou de madeira: lenço ou spray desinfetante.", "Nunca misturar Clorox com Lysol ou outro produto."] }
      ] },
    { icon: "tool", t: "Pós-obra: o que muda", lead: "Muita poeira fina, resíduos de obra e superfícies novas e delicadas. Segurança e paciência valem mais que velocidade.",
      table: { head: ["Item", "Pós-obra"], rows: [
        ["Antes de entrar", "Obra liberada pelo empreiteiro. EPI: máscara N95, óculos, luvas, sapato fechado"],
        ["Poeira", "Aspirador com filtro HEPA primeiro, depois pano. Duas a três passadas de pó"],
        ["Vidros", "Etiquetas e respingos de tinta: raspador só em vidro liso e molhado, testado antes"],
        ["Armários", "Por dentro e por fora (poeira entra em tudo)"],
        ["Pisos", "Aspirar duas vezes e mop úmido duas vezes, trocando a água sempre"],
        ["Fim", "Segunda passada de pó nas superfícies horizontais: a poeira volta a assentar"]
      ] },
      blocks: [
        { k: "do", h: "Como treinar a Pós-obra", list: ["Faça a trainee identificar os riscos da casa antes de pegar qualquer produto (pregos, parafusos, fios, guarda-corpo sem fixar).", "Mostre o raspador num vidro de teste antes de liberar.", "Confira o primeiro cômodo com lanterna rasante: é assim que o cliente vai ver a poeira."] },
        { k: "avoid", h: "Segurança", list: ["Nunca limpar sem máscara e óculos.", "Nunca raspador em vidro texturizado, com película, pedra, madeira ou inox.", "Nunca ácido em pedra natural. Rejunte manchado: avisar o escritório.", "Nunca pano molhado em pó de gesso antes de aspirar: vira massa."] }
      ] },
    { icon: "users", t: "Comercial pequeno: o que muda", lead: "Escritórios, lojas, salões e estúdios. O cliente é um negócio: privacidade, segurança do local e regularidade contam muito.",
      table: { head: ["Item", "Comercial pequeno"], rows: [
        ["Acesso", "Muitas vezes fora do horário. Código de alarme e chave são responsabilidade da cleaner"],
        ["Mesas", "Só a área livre. Nunca mexer em papéis, computadores ou caixa registradora"],
        ["Pontos de toque", "Maçanetas, interruptores, botões e corrimãos desinfetados toda visita"],
        ["Banheiros", "Repor sabonete, papel e papel-toalha do estoque do cliente e avisar quando estiver acabando"],
        ["Pisos", "Placa de piso molhado sempre que passar mop"],
        ["Fim", "Anotar recados no caderno/log do cliente, apagar luzes, trancar e ligar o alarme"]
      ] },
      blocks: [
        { k: "do", h: "Como treinar o Comercial", list: ["Treine o código de alarme e o caminho de saída no primeiro dia.", "Faça a trainee repetir as regras de privacidade em voz alta.", "Na avaliação, confira o log de recados e o alarme."] },
        { k: "avoid", h: "Erros que não podem acontecer", list: ["Deixar porta destrancada ou alarme desligado.", "Mover documentos ou tocar em equipamentos ligados.", "Esquecer a placa de piso molhado."] }
      ] },
    { icon: "calendar", t: "Airbnb: o que muda", lead: "Troca entre hóspedes com hora marcada. O próximo hóspede chega no horário, então a casa precisa estar pronta e com cara de foto do anúncio.",
      table: { head: ["Item", "Airbnb"], rows: [
        ["Tempo", "Janela curta entre check-out e check-in. Começar pela roupa de cama e toalhas"],
        ["Fotos", "Antes (danos, sujeira fora do normal, objetos esquecidos) e depois de cada cômodo"],
        ["Louça", "Incluída: lavar, secar e guardar"],
        ["Roupa de cama", "Trocar todas as camas e toalhas com o enxoval do anfitrião"],
        ["Reposição", "Papel higiênico, sabonete, café etc. do estoque do anfitrião. Avisar o que está acabando"],
        ["Arrumação", "Montar a casa igual às fotos do anúncio"]
      ] },
      blocks: [
        { k: "do", h: "Como treinar o Airbnb", list: ["Mostre as fotos do anúncio de cada imóvel antes do primeiro trabalho.", "Cronometre: a trainee precisa terminar dentro da janela do imóvel.", "Confira o relatório de danos e objetos esquecidos com ela."] },
        { k: "avoid", h: "Erros que não podem acontecer", list: ["Entrar se ainda houver hóspede: ligar para o escritório.", "Deixar um fio de cabelo em banheiro ou cama.", "Esquecer de avisar dano ou objeto esquecido com foto."] }
      ] },
    { icon: "calendar", t: "Tarefas da VA", lead: "A VA organiza o treinamento para que o treinador só se preocupe em ensinar.",
      blocks: [
        { k: "do", h: "Antes do treinamento", list: ["Confirmar documentos, uniforme e kit da nova cleaner.", "Mandar o link do SOP da Cleaner no idioma dela.", "Escolher o treinador e os trabalhos 1 a 4 (casas com clientes que aceitam trainee).", "Avisar os clientes que haverá uma pessoa em treinamento."] },
        { k: "do", h: "Durante e depois", list: ["Registrar cada fase com data, treinador e nota.", "Guardar a Avaliação de Qualidade de cada trabalho.", "Pedir feedback ao cliente depois do trabalho de avaliação.", "Agendar a inspeção surpresa de 30 dias."] },
        { k: "tip", h: "Registro de treinamento (modelo)", p: "Nome · Idioma · Data de início · Treinador · Fase 1 ✓ · Trabalho 1 ✓ · Trabalhos 2–3 ✓ · Nota do trabalho 4 · Data da certificação · Nota dos 30 dias." }
      ] }
  ]
},
en: {
  title: "Trainer SOP",
  intro: "Guide for the person who trains new cleaners (or the VA who organizes training) for every cleaning type: Regular, Deluxe, Move In/Out, Post-Construction, Small Commercial and Airbnb.",
  steps: [
    { icon: "target", t: "Training goal", lead: "By the end of training, the new cleaner performs the cleaning type they are training for alone, in the right order, safely, with a score of at least 90% on the evaluation.",
      blocks: [
        { k: "do", h: "What the cleaner must master", list: ["The golden rules: top to bottom, dry before wet, left to right, by hand.", "All the steps of the Cleaner SOP for that cleaning type, in order.", "Cloth color code and safe use of products and the ladder.", "What IS and what is NOT included in the service.", "How to talk to the client on arrival and before leaving."] },
        { k: "tip", h: "Support material", p: "Send the trainee the link to the Cleaner SOP for the cleaning type, in their language (English, Portuguese or Spanish). They should read it before day one." }
      ] },
    { icon: "route", t: "The training path", lead: "Five phases. Move on only when the previous phase is approved.",
      table: { head: ["Phase", "Where", "What happens", "Approved when"], rows: [
        ["1. Orientation", "Office or video call", "Company, uniform, punctuality, safety, products, kit, color code, golden rules (SOP Steps 1–3).", "Trainee explains the golden rules and color code without looking."],
        ["2. Shadow", "Job 1", "Trainee watches and helps. Trainer explains the why of each step while doing it.", "Trainee names the next step before the trainer does it."],
        ["3. Guided practice", "Jobs 2 and 3", "Trainee leads. Trainer checks each room before moving on and corrects on the spot.", "Fewer than 3 corrections per room."],
        ["4. Evaluation", "Job 4", "Trainee does everything alone. Trainer only watches and fills in the Quality Scorecard.", "Score of 90% or higher."],
        ["5. Certification & follow-up", "Office + 30 days", "Trainer signs the certification. VA schedules a surprise inspection at 30 days.", "30-day inspection at 90% or higher."]
      ] } },
    { icon: "chat", t: "How to teach: Tell, Show, Do, Review", lead: "Use the same method for every SOP step. It works for people who have never cleaned a house.",
      blocks: [
        { k: "do", h: "The 4-beat method", list: ["TELL: say what you will do and WHY. E.g. “We clean the fan before the floor because dust falls.”", "SHOW: do it slowly, naming each move. Show the right tool and product.", "DO: the trainee does it while you watch quietly. Don't take the cloth from their hand.", "REVIEW: praise what is good, point out ONE thing to improve, and ask for a redo if needed."] },
        { k: "tip", h: "Tip", p: "Correct one thing at a time. Many corrections at once confuse and discourage. Speak in the language the trainee understands best." },
        { k: "avoid", h: "Avoid", list: ["Correcting in front of the client. Take the trainee aside.", "Redoing their work without explaining.", "Skipping the “why”. People who understand the reason don't forget the step."] }
      ] },
    { icon: "shield", t: "Safety module", lead: "Teach and test safety on day one, before any cleaning.",
      blocks: [
        { k: "avoid", h: "Rules that are never broken", list: ["Never mix products (bleach + ammonia or vinegar = toxic gas).", "Ladder: only the 2-step, steady, never the top step, never a chair or furniture.", "Turn off fans and fixtures before cleaning. Spray the cloth, never the electrical part.", "Gloves always in bathrooms and with strong products.", "Don't lift heavy items alone. Don't move heavy furniture."] },
        { k: "do", h: "How to test", list: ["Ask: “What happens if you mix bleach and vinegar?”", "Ask them to set up the ladder and show where they can stand.", "Show two labels and ask them to find the disinfectant's contact time."] }
      ] },
    { icon: "bulb", t: "Common mistakes & how to fix them", lead: "These mistakes show up most with new cleaners. Watch for them.",
      table: { head: ["Step", "Common mistake", "How to correct"], rows: [
        ["High work", "Cleans the fan after the floor.", "Go back to top to bottom. Ask them to say the room order before starting."],
        ["Blinds", "Washes with water or bends slats.", "Show the brush tool and the top-to-bottom move, both sides."],
        ["Furniture", "Sprays polish straight on furniture or the TV.", "Always spray the cloth. Screens get dry microfiber only."],
        ["Baseboards", "Wet wipes without dusting first.", "Dry before wet: vacuum first."],
        ["Kitchen", "Forgets the top of the fridge or cabinet fronts.", "Use the “Done when…” list of the kitchen step."],
        ["Kitchen", "Uses the green side of the sponge on stainless steel.", "Yellow side on delicate surfaces. Green only for stuck-on dirt on tough surfaces."],
        ["Bathroom", "Takes a pink or blue bathroom cloth into the kitchen.", "Review the color code: each area has its own pair (wet + dry). Bathroom cloths never leave the bathroom."],
        ["Bathroom", "Wipes disinfectant off right away.", "Show the contact time on the label and wait together."],
        ["Floors", "Mops into the middle of the room and gets stuck.", "Start at the farthest corner and back out through the door."],
        ["Final", "Leaves a cloth or bottle behind.", "Kit count on the way out: everything that came in goes out."]
      ] } },
    { icon: "clip", t: "Quality scorecard", lead: "Use on Job 4 and at the 30-day inspection for Deluxe Cleaning. For other types, use the “Done when…” list of each Cleaner SOP step.", scorecard: true },
    { icon: "award", t: "Feedback & certification", lead: "End every training day with a short talk. End training with a clear decision.",
      blocks: [
        { k: "do", h: "End-of-day talk (5 minutes)", list: ["Start with 2 things they did well, with examples.", "Name 1 thing to improve on the next job.", "Ask: “What was hardest today?”", "Write it all in the training log."] },
        { k: "done", h: "Certify when", list: ["Score of 90% or more on the Quality Scorecard", "No safety item missed", "No client complaint on the evaluation job"] },
        { k: "avoid", h: "Didn't pass?", list: ["Repeat phase 3 (guided practice) focusing on the items that failed.", "Run a new evaluation on another job.", "Two evaluations under 90%: talk with the business owner."] }
      ] },
    { icon: "home", t: "Regular Cleaning: what changes", lead: "The same teaching method works for Regular Cleaning. Show the trainee the differences between the two services.",
      table: { head: ["Item", "Deluxe", "Regular"], rows: [
        ["Goal", "Remove build-up, by hand", "Keep up with the basics, weekly or monthly"],
        ["Baseboards, cabinet fronts, fans, light fixtures", "Included, by hand", "Not included"],
        ["Vents", "—", "Dusted"],
        ["Bathrooms", "Counters and fixtures sanitized", "Walls and shower washed with Clorox"],
        ["Sheets", "Up to 3 beds, sheets the client left out", "Sheets the client left on top of the bed"],
        ["Dishes", "Not included", "Not included: don't wash or put away"]
      ] },
      blocks: [
        { k: "do", h: "How to train Regular", list: ["Use the same 5 phases, with the Regular Cleaning Cleaner SOP link.", "Have the trainee explain what IS and is NOT included before the first job.", "During practice, check each bathroom before they move on: Clorox rinsed well."] },
        { k: "avoid", h: "Clorox safety", list: ["Test: “What can Clorox never be mixed with?” (ammonia, vinegar, any other cleaner).", "Gloves and ventilation, always.", "Never on natural stone. It stains fabric."] }
      ] },
    { icon: "home", t: "Move In/Out: what changes", lead: "An empty home with no client to ask. Teach the trainee to document everything and to remember what only this service includes.",
      table: { head: ["Item", "Move In/Out"], rows: [
        ["Home", "Empty. Check water and power before starting"],
        ["Photos", "Before and after of EVERY room, including inside the fridge and oven"],
        ["Fridge and oven", "Included inside and out"],
        ["Baseboards and doors", "Cleaned and disinfected with Clorox or Lysol"],
        ["Cabinets", "Outside only"],
        ["Windows", "Blinds dusted and glass cleaned"],
        ["Trash", "Removed if any. Items that aren't trash: photo and ask the office"]
      ] },
      blocks: [
        { k: "do", h: "How to train Move In/Out", list: ["Use the same 5 phases, with the Move In/Out Cleaner SOP link.", "During guided practice, check the before photos before the trainee starts cleaning.", "Check the fridge and oven inside before signing off the kitchen.", "On the evaluation, compare the before and after photos."] },
        { k: "avoid", h: "Safety", list: ["Never degreaser on a hot oven.", "Never liquid bleach on painted or wood doors: use disinfecting wipes or spray.", "Never mix Clorox with Lysol or any other product."] }
      ] },
    { icon: "tool", t: "Post-Construction: what changes", lead: "Lots of fine dust, construction residue and new, delicate surfaces. Safety and patience matter more than speed.",
      table: { head: ["Item", "Post-Construction"], rows: [
        ["Before entering", "Site released by the contractor. PPE: N95 mask, safety glasses, gloves, closed shoes"],
        ["Dust", "HEPA vacuum first, then cloths. Two to three dust passes"],
        ["Glass", "Labels and paint specks: razor scraper only on plain, wet glass, tested first"],
        ["Cabinets", "Inside and outside (dust gets into everything)"],
        ["Floors", "Vacuum twice and damp mop twice, changing water often"],
        ["End", "Second dust pass on horizontal surfaces: dust settles again"]
      ] },
      blocks: [
        { k: "do", h: "How to train Post-Construction", list: ["Have the trainee spot the hazards before touching any product (nails, screws, wires, loose railings).", "Show the razor scraper on a test pane before letting them use it.", "Check the first room with a low-angle flashlight: that's how the client will see the dust."] },
        { k: "avoid", h: "Safety", list: ["Never clean without a mask and glasses.", "Never use a razor on textured or coated glass, stone, wood or stainless.", "Never acid on natural stone. Stained grout: tell the office.", "Never a wet cloth on drywall dust before vacuuming: it turns into paste."] }
      ] },
    { icon: "users", t: "Small Commercial: what changes", lead: "Offices, shops, salons and studios. The client is a business: privacy, building security and consistency matter a lot.",
      table: { head: ["Item", "Small Commercial"], rows: [
        ["Access", "Often after hours. Alarm code and keys are the cleaner's responsibility"],
        ["Desks", "Clear areas only. Never touch papers, computers or the register"],
        ["High-touch points", "Handles, switches, buttons and railings disinfected every visit"],
        ["Restrooms", "Refill soap, toilet paper and paper towels from the client's stock and report when low"],
        ["Floors", "Wet floor sign every time you mop"],
        ["End", "Notes in the client's log, lights off, doors locked, alarm set"]
      ] },
      blocks: [
        { k: "do", h: "How to train Commercial", list: ["Train the alarm code and exit route on day one.", "Have the trainee repeat the privacy rules out loud.", "On the evaluation, check the notes log and the alarm."] },
        { k: "avoid", h: "Mistakes that can't happen", list: ["Leaving a door unlocked or the alarm off.", "Moving documents or touching running equipment.", "Forgetting the wet floor sign."] }
      ] },
    { icon: "calendar", t: "Airbnb: what changes", lead: "A timed turnover between guests. The next guest arrives on schedule, so the home must be ready and look like the listing photos.",
      table: { head: ["Item", "Airbnb"], rows: [
        ["Time", "Short window between check-out and check-in. Start with linens and towels"],
        ["Photos", "Before (damage, unusual mess, left items) and after of every room"],
        ["Dishes", "Included: wash, dry and put away"],
        ["Linens", "Change every bed and towel with the host's linens"],
        ["Restock", "Toilet paper, soap, coffee etc. from the host's supply. Report what is running low"],
        ["Staging", "Set the home up like the listing photos"]
      ] },
      blocks: [
        { k: "do", h: "How to train Airbnb", list: ["Show the listing photos of each property before the first job.", "Time it: the trainee must finish inside the property's window.", "Review the damage and left-items report with them."] },
        { k: "avoid", h: "Mistakes that can't happen", list: ["Entering while a guest is still there: call the office.", "Leaving a single hair in a bathroom or bed.", "Not reporting damage or left items with photos."] }
      ] },
    { icon: "calendar", t: "VA tasks", lead: "The VA organizes training so the trainer only has to teach.",
      blocks: [
        { k: "do", h: "Before training", list: ["Confirm the new cleaner's documents, uniform and kit.", "Send the Cleaner SOP link in their language.", "Choose the trainer and jobs 1 to 4 (homes with clients who accept a trainee).", "Tell those clients a trainee will be present."] },
        { k: "do", h: "During and after", list: ["Log each phase with date, trainer and score.", "Save the Quality Scorecard from each job.", "Ask the client for feedback after the evaluation job.", "Schedule the surprise 30-day inspection."] },
        { k: "tip", h: "Training log (template)", p: "Name · Language · Start date · Trainer · Phase 1 ✓ · Job 1 ✓ · Jobs 2–3 ✓ · Job 4 score · Certification date · 30-day score." }
      ] }
  ]
}
};

/* ---------- tracks ---------- */
