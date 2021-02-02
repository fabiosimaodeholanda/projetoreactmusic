const ESTADO_INICIAL = {
    musica: [{}],
    playlist: [
      {
        id: 1,
        titulo: "Balada do Buteco",
        cantor: "Gusttavo Lima",
        ano: 2021,
        img:"https://pa1.narvii.com/6514/1f7858ae9ef45b70565378d265eff9d64ef82e72_hq.gif",
      },
      {
        id: 2,
        titulo: "Paradigmas",
        cantor: "Jorge e Mateus",
        ano: 2021,
        img:"https://pa1.narvii.com/6514/1f7858ae9ef45b70565378d265eff9d64ef82e72_hq.gif",
      },
      {
        id: 3,
        titulo: "Lance Individual",
        cantor: "Jorge e Mateus",
        ano: 2021,
        img:"https://pa1.narvii.com/6514/1f7858ae9ef45b70565378d265eff9d64ef82e72_hq.gif",
      },
      {
        id: 4,
        titulo: "É Problema ",
        cantor: "Matheus e Kauan",
        ano: 2021,
        img:"https://pa1.narvii.com/6514/1f7858ae9ef45b70565378d265eff9d64ef82e72_hq.gif",
      },
      {
        id: 5,
        titulo: "Ponta Solta",
        cantor: "Maiara e Maraisa",
        ano: 2021,
        img:"https://pa1.narvii.com/6514/1f7858ae9ef45b70565378d265eff9d64ef82e72_hq.gif",
      }
    ],
  };
  
  export default function musicas(state = ESTADO_INICIAL, action) {
    if (action.type === "TOCAR_MUSICA") {
      return {
        ...state,
        musica: action.musicas, 
      };
    }
    if (action.type === "PARAR_MUSICA") {
      return {
        ...state,
        musica: ESTADO_INICIAL, 
      };
    }
    return state;
  }