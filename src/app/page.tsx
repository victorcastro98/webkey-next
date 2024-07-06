'use client'

import Image from "next/image";
import React from "react";
import webKeyLogo from "./assets/webkey-logo-lg.png";
import image01 from "./assets/main-banner.png";
import iconScroll from "./assets/icon-scroll.svg";
import Card from "./components/Card";
import Divider from "./components/Divider";
import Modal from "./components/Modal";

export default function Home() {
  const texto = "Olá! eu quero fazer um orçamento de website.";
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  return (
    <main className="w-full h-full flex flex-col items-center bg-main-pattern">
      <Modal/>
      <div className="bg-dark w-full h-fit flex justify-center">
      <Image className="w-[30%] my-2" src={webKeyLogo} alt="logo"/>
      </div>
      <Divider />
      <Image className=" my-2" src={image01} alt="main" />
      <button
      className="w-full bg-[#003D98] p-2 text-gray-200 text-xl flex flex-row items-center gap-2 justify-center"
        onClick={() => {
          scrollRef.current?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Dá uma olhada!
        <Image className="h-[15px] animate-bounce" src={iconScroll} alt="logo" />
      </button>
      <div ref={scrollRef} className="flex flex-col w-full my-10 items-center justify-center">
        
        <div className="lg:pl-36 w-full flex justify-center">
          <Card
          title="Tenha seu Brand Site"
          list={[
            "Profissionalize sua marca perante o mercado com um site por meio de Branding e reforço da sua identidade.",
            "90% dos consumidores escolhem uma marca somente depois de pesquisarem sobre ela no Google.(SEO Hedgehog Digital)",
            "Personalize seus CTC(chamadas de engajamento) e crie leeds da maneira mais adequada para o seu perfil de cliente.",
            "Melhor meio para conseguir o email de forma não invasiva. Email é quase 40x melhor na aquisição de clientes que Facebook e Twitter.(McKinsey & Company)",
          ]}
          />
        </div>
          
        
          <div className="w-full flex flex-row-reverse justify-center lg:pr-36">
          <Card
          title="Montamos sua loja virtual"
          list={[
            "Ajudamos você a selecionar a melhor opção de loja virtual oferecida pelo mercado.",
            "Plano de personalização do layout para a sua loja ficar com a sua cara.",
            "Serviços de lojas virtuais com sistemas de pagamento e entrega ja totalmente integrados e fáceis de usar.",
            "Melhor desempenho se SEO e loja integrada com google ads para maior obtenção de leeds.",
          ]}
          />
          </div>
        
          <Card
          title="Aprenda a usar WhatsApp Business"
          list={[
            "Otimize e personalize seu atendimento e de a melhor experiência para seus clientes",
            "48% do consumidores elegeram o bate-papo ao vivo como WhastApp como o primeiro canal para solicitar assistência.(Capterra);",
            "Na black friday de 2020 o grupo ViaVrejo (Casas Bahia, ponto frio, Extra) mais de 20% do faturamento deles (2bi) foi pelo whatsapp",
            "Coloque mensagens automáticas de saudação, ausência, respostas rápidas.",
          ]}
          />
         
      </div>
      <a 
      href={`https://api.whatsapp.com/send?text=${texto}&phone=${"5531993966037"}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{boxShadow: "0px 0px 20px 2px rgba(9,107,255,0.9)"}}
      className="bg-light text-web-blue py-6 px-6 w-[90%] m-2 text-3xl 
      font-semibold rounded-full cursor-pointer items-center justify-center text-center">
        ENTRE EM CONTATO!
        FAÇA UM ORÇAMENTO GRATUITO!
      </a>
      <div className="flex flex-col w-[95%] lg:w-[70%] text-[#1B1B1B] my-24 gap-20 text-3xl font-semibold text-center justify-center text-light">
        <a className="text-5xl mb-2">Por que trabalhar conosco e aumentar suas vendas online?</a>
        <a>Oferecemos serviços em “blocos”, ou seja, o atendimento mais adequado para sua marca e para você.</a>
        <a>Atendimento total! Nossa equipe estará sempre disponível para esclarecer qualquer dúvida que surgir a qualquer momento.</a>
        <a>Para clientes da Grande Belo Horizonte, garantimos atendimento presencial.</a>
        <a>Período de suporte estendido mínimo de 3 meses após a entrega do produto final.</a>
      </div>
      <a
      href={`https://api.whatsapp.com/send?text=${texto}&phone=${"5531993966037"}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{boxShadow: "0px 0px 20px 2px rgba(9,107,255,0.9)"}}
      className="bg-light h-[100px] lg:w-[50%] w-[90%] p-2 mb-4 mt-6 text-2xl text-web-blue 
      font-semibold rounded-2xl shadow-xl cursor-pointer flex justify-center text-center items-center">
       QUERO FAZER MEU ORÇAMENTO GRATUITO AGORA!
      </a>
    </main>
  );
}
