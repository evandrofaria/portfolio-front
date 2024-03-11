import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
})
export class SobrePage implements OnInit {
  menuList = [
    { section: 'Sobre', active: true },
    { section: 'Projetos', active: false },
    { section: 'Experiencias', active: false },
    { section: 'Educação', active: false },
    { section: 'Contato', active: false }
  ];

  projectList = [
    {
      img: './assets/investsus-card.svg',
      name: 'InvestSUS',
      description: 'Descrição do app',
    },
    {
      img: './assets/investsus-card.svg',
      name: 'InvestSUS',
      description: 'Descrição do app',
    },
    {
      img: './assets/investsus-card.svg',
      name: 'InvestSUS',
      description: 'Descrição do app',
    },
    {
      img: './assets/investsus-card.svg',
      name: 'InvestSUS',
      description: 'Descrição do app',
    },
    {
      img: './assets/investsus-card.svg',
      name: 'InvestSUS',
      description: 'Descrição do app',
    },
    {
      img: './assets/investsus-card.svg',
      name: 'InvestSUS',
      description: 'Descrição do app',
    },
    {
      img: './assets/investsus-card.svg',
      name: 'InvestSUS',
      description: 'Descrição do app',
    },
  ];

  jobsList = [
    {
      img: './assets/logos/zello-tecnologia-logo.jpeg',
      cargo: 'Desenvolvedor Full Stack',
      empresa: 'Zello Tecnologia',
      periodo: '06/2021 - 12/2023',
      atribuicoes: 'Desenvolvimento de softwares PWA/Mobile usando Ionic, Angular, TypeScript e Java com Spring Boot. Responsável por build e publicação de aplicativos para iOS e Android, com proficiência em ferramentas de prototipagem como Figma. Experiência em versionamento de código utilizando Git e GitFlow, e aplicação de metodologias ágeis e suas cerimônias.'
    },
    {
      img: './assets/logos/nox-logo.jpeg',
      cargo: 'Desenvolvedor Web',
      empresa: 'Nox Sistemas',
      periodo: '2019 - 2021',
      atribuicoes: 'Atuação no desenvolvimento de sites e aplicações web com C# e ASP.NET. Experiência com CMS como WordPress e Elementor, e gestão de banco de dados SQL Server.'
    },
    {
      img: './assets/logos/odebrecht-logo.jpeg',
      cargo: 'Analista de infraestrutura',
      empresa: 'Odebrecht',
      periodo: '2015 - 2017',
      atribuicoes: 'Responsável por desenvolver sites e aplicações usando C# e ASP.NET. Familiarizado com plataformas CMS, incluindo WordPress e Elementor, além de criar e manter bancos de dados SQL Server.'
    }
  ];

  educationList = [
    {
      img: './assets/logos/ceub-logo.jpeg',
      local: 'Centro Universitário de Brasília - UniCEUB',
      area: 'Graduado em Análise e Desenvolvimento de Sistemas, 2017.',
      descricao: 'Honrado com o Prêmio de Excelência Acadêmica por obter a nota máxima no Projeto Final e selecionado como padrão de excelência para o repositório acadêmico da faculdade.'
    },
    {
      img: './assets/logos/howard-logo.jpg',
      local: 'Howard Community College',
      area: 'Especialização em Língua Inglesa e Literatura, 2018 - 2019.',
      descricao: 'Curso intensivo de 5 meses em Columbia, Maryland - EUA, com foco no aprimoramento da língua inglesa, incluindo habilidades de leitura, escrita, fala e compreensão gramatical. Adaptado para estudantes e profissionais visando a excelência no inglês acadêmico e empresarial.'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  scrollTo(sectionId: string) {
    const section = document.getElementById(sectionId);
    this.menuList = this.menuList.map(item => {
      return { ...item, active: item.section.toLowerCase() === sectionId.toLowerCase() };
    });

    const navbar = document.getElementById('navbar-sticky');
    if (navbar) {
      navbar.classList.add('hidden');
    }

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
