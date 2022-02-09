import React from 'react';
import Card from './components/Card';
import './css/app.css';
import data from './providers.json';

interface SlotImage {
  src: string,
  alt: string,
}

interface Items {
  img: SlotImage,
  text: string,
}

interface Slots {
  item1: Items,
  item2: Items,
  item3: Items,
}

interface Votes {
  text: string,
  count: number,
  linkText: string,
}

interface IDeposit {
  text: string,
  value: string,
}

export interface CardProps {
  logo: string,
  offerTitle: string,
  offerSubText: string,
  slotsImages: Slots,
  votes: Votes,
  rate: number, 
  buttonText: string,
  deposit: IDeposit,
  providerLegalDisclaimer: string,
}

const new_data: CardProps = {
  logo: data[0].providerLogo.logo.src,
  offerTitle:data[0].providerBonus.offerTitle,
  offerSubText:data[0].providerBonus.offerSubText,
  slotsImages: {
    item1: {
      img: {
        src: data[0].slotsImages[0].image.src,
        alt: data[0].slotsImages[0].image.alt,
      },
      text: data[0].slotsImages[0].text
    },
    item2: {
      img: {
        src: data[0].slotsImages[1].image.src,
        alt: data[0].slotsImages[1].image.alt,
      },
      text: data[0].slotsImages[1].text
    },
    item3: {
      img: {
        src: data[0].slotsImages[2].image.src,
        alt: data[0].slotsImages[2].image.alt,
      },
      text: data[0].slotsImages[2].text
    }
  },
  votes: {
    text: data[0].providerRating.votesFollowText,
    count: data[0].providerRating.votes,
    linkText: data[0].providerRating.linkText,
  },
  rate: data[0].providerRating.value,
  buttonText: data[0].providerVisitLink.text,
  deposit: {
    text: data[0].minDepositLabel,
    value: data[0].minDeposit,
  },
  providerLegalDisclaimer: data[0].providerLegalDisclaimer,
}

function App() {
  return (
    <div className="app">
      <Card props={new_data}/>
    </div>
  );
}

export default App;
