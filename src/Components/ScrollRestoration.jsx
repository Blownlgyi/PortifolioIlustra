import { useEffect } from "react";
import { useLocation } from "react-router";


const ScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    // Recupera o scroll salvo do localStorage
    const savedScroll = localStorage.getItem(`scroll-${location.pathname}`);
    if (savedScroll) {
      // Verifica se o scroll salvo existe, e restaurar o scroll
      window.scrollTo(0, parseInt(savedScroll, 10));
    } else {
      // Se não houver scroll salvo, rolar para o topo por padrão
      window.scrollTo(0, 0);
    }

    // Salvar o scroll sempre que a página estiver prestes a ser descarregada
    const handleBeforeUnload = () => {
      localStorage.setItem(`scroll-${location.pathname}`, window.scrollY);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [location]);
};

export default ScrollRestoration;
