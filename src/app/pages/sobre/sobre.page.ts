import { Component, ViewChild } from '@angular/core';
import { EducationItem, JobItem, MenuItem, ProjectItem, SkillItem } from '../../shared/models/sobre.model';
import { AssetPaths } from '../../shared/constants/assets-paths';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
})

export class SobrePage {
  @ViewChild(IonContent, { static: false }) content!: IonContent;
  AssetPaths = AssetPaths;

  menuList: MenuItem[] = [
    { section: 'Sobre', active: true },
    { section: 'Projetos', active: false },
    { section: 'Experiências', active: false },
    { section: 'Educação', active: false },
    { section: 'Contato', active: false },
  ];

  projectList: ProjectItem[] = [
    {
      img: AssetPaths.investsusCard,
      name: 'InvestSUS Cidadão',
      badge: 'Ministério da Saúde',
      description: 'O InvestSUS Cidadão melhora o acesso a informações de saúde e transparência em repasses do Fundo Nacional de Saúde, convidando a sociedade a acompanhar a aplicação de recursos no SUS, com detalhes acessíveis sobre a destinação de verbas federais.',
      linkApple: 'https://apps.apple.com/br/app/investsus-cidad%C3%A3o/id1471696623',
      linkGoogle: 'https://play.google.com/store/apps/details?id=br.gov.ms.investsus',
    },
    {
      img: AssetPaths.mbkCard,
      name: 'BRB Mobile',
      badge: 'Banco BRB',
      description: 'O BRB Mobile foi desenvolvido para revolucionar a gestão financeira, permite abrir contas digitais gratuitas, oferecendo serviços como cartão de crédito, empréstimos competitivos, pagamento via PIX, seguros e investimentos, tudo de forma simplificada.',
      linkApple: 'https://apps.apple.com/br/app/brb-mobile/id1005747186',
      linkGoogle: 'https://play.google.com/store/apps/details?id=la.foton.brb.myphone',
    },
    {
      img: AssetPaths.superappCard,
      name: 'SuperApp MMA',
      badge: 'Ministério do Meio Ambiente',
      description: 'O SuperApp do MMA oferece um hub para serviços ambientais, com funcionalidades como monitoramento da balneabilidade das praias e qualidade do ar, através de miniapps interativos. Visa a melhor experiência e acesso facilitado a informações ambientais.',
      linkApple: 'https://apps.apple.com/br/app/superapp-mma/id1608190929',
      linkGoogle: 'https://play.google.com/store/apps/details?id=br.gov.mma.superapp',
    },
    {
      img: AssetPaths.conectesusCard,
      name: 'Meu SUS Digital',
      badge: 'Ministério da Saúde',
      description: 'O Meu SUS Digital é a porta de acesso aos serviços do Sistema Único de Saúde (SUS). O aplicativo foi desenvolvido para gerenciar a saúde pessoal do usuário, permitindo o acompanhamento de histórico de exames, vacinas, medicamentos, localização de serviços e emissão de certificados.',
      linkApple: 'https://apps.apple.com/br/app/meu-sus-digital/id1045754608',
      linkGoogle: 'https://play.google.com/store/apps/details?id=br.gov.datasus.cnsdigital',
    },
    {
      img: AssetPaths.pcnCard,
      name: 'BRB Crédito Imobiliário',
      badge: 'Banco BRB',
      description: 'O BRB é um simulador de financiamento imobiliário, visando melhorar a experiência do usuário com uma interface amigável. A ferramenta facilita a consulta e o planejamento financeiro para financiamento imobiliário, com respostas rápidas e uma análise de crédito mais ágil.',
      linkWeb: '#',
    },
    {
      img: AssetPaths.nexiaCard,
      name: 'Nexia',
      badge: 'Zello Tecnologia',
      description: 'A Nexia é uma inteligência artificial que centraliza, analisa e encontra padrões em seus dados. Por meio do aprendizado de máquina, a ferramenta faz cruzamentos de grande volume de dados para gerar insights apoiando na tomada decisões, com informações de qualidade, mais rápido do que nunca.',
      linkWeb: 'https://www.nexia.ai/',
    },
  ];

  jobsList: JobItem[] = [
    {
      img: AssetPaths.imagemGeoLogo,
      cargo: 'Desenvolvedor de software',
      empresa: 'Imagem Geosistemas',
      periodo: '06/2024 - o momento',
      atribuicoes: 'Desenvolvimento de aplicações front-end no setor de inovação, utilizando React. Responsável pela criação de soluções integradas com ArcGIS (plataforma GIS da Esri), aprimorando a gestão de dados geoespaciais e oferecendo análises espaciais avançadas. Experiência em mapas, dados geográficos e análise espacial.'
    },
    {
      img: AssetPaths.zelloTecnologiaLogo,
      cargo: 'Desenvolvedor Full Stack',
      empresa: 'Zello Tecnologia',
      periodo: '06/2021 - 12/2023',
      atribuicoes: 'Desenvolvimento de softwares PWA/Mobile usando Ionic, Angular, TypeScript e Java com Spring Boot. Responsável por build e publicação de aplicativos para iOS e Android, com proficiência em ferramentas de prototipagem como Figma. Experiência em versionamento de código utilizando Git e GitFlow, e aplicação de metodologias ágeis e suas cerimônias.'
    },
    {
      img: AssetPaths.noxLogo,
      cargo: 'Desenvolvedor Web',
      empresa: 'Nox Sistemas',
      periodo: '2019 - 2021',
      atribuicoes: 'Atuação no desenvolvimento de sites e aplicações web com C# e ASP.NET. Experiência com CMS como WordPress e Elementor, e gestão de banco de dados SQL Server.'
    },
    {
      img: AssetPaths.odebrechtLogo,
      cargo: 'Analista de infraestrutura',
      empresa: 'Odebrecht',
      periodo: '2015 - 2017',
      atribuicoes: 'Administração e configuração de redes, incluindo criação de infraestrutura. Suporte e manutenção de computadores e servidores em ambientes Linux, Windows e Windows Server. Atuação direta em suporte ao usuário, assegurando a eficiência e segurança das soluções de TI implementadas.'
    }
  ];

  educationList: EducationItem[] = [
    {
      img: AssetPaths.ceubLogo,
      local: 'Centro Universitário de Brasília',
      area: 'Graduado em Análise e Desenvolvimento de Sistemas, 2017.',
      descricao: 'Honrado com o Prêmio de Excelência Acadêmica por obter a nota máxima no Projeto Final e selecionado como padrão de excelência para o repositório acadêmico da faculdade.'
    },
    {
      img: AssetPaths.howardLogo,
      local: 'Howard Community College',
      area: 'Especialização em Língua Inglesa e Literatura, 2018 - 2019.',
      descricao: 'Curso intensivo de 5 meses em Columbia, Maryland - EUA, com foco no aprimoramento da língua inglesa, incluindo habilidades de leitura, escrita, fala e compreensão gramatical. Adaptado para estudantes e profissionais visando a excelência no inglês acadêmico e empresarial.'
    },
  ];

  skillsList: SkillItem[] = [
    { img: AssetPaths.html5Logo },
    { img: AssetPaths.cssLogo },
    { img: AssetPaths.jsLogo },
    { img: AssetPaths.tsLogo },
    { img: AssetPaths.angularLogo },
    { img: AssetPaths.ionicLogo },
    { img: AssetPaths.tailwindLogo },
    { img: AssetPaths.springLogo },
    { img: AssetPaths.reactLogo },
    { img: AssetPaths.nextLogo },
  ];

  constructor() { }

  parseAltFromPath(path: string): string {
    let fileName = path.split('/').pop() || '';
    fileName = fileName.split('.').shift() || '';
    fileName = fileName.replace(/-/g, ' ');

    return fileName;
  }

  scrollTo(sectionId: string) {
    this.menuList = this.menuList.map(item => {
      return {
        ...item,
        active: item.section.toLowerCase() === sectionId.toLowerCase()
      };
    });

    const navbar = document.getElementById('navbar-sticky');
    if (navbar) {
      navbar.classList.add('hidden');
    }

    const sectionElem = document.getElementById(sectionId);
    if (sectionElem && this.content) {
      const yOffset = sectionElem.offsetTop - 90;

      this.content.scrollToPoint(0, yOffset, 500);
    }
  }
}
