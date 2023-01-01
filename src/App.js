import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonLabel } from '@ionic/react';
import { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard'
import useStoredState from './libs/hooks';

function TodayDate(){
  return new Date().toISOString().slice(0, 'yyyy-mm-dd'.length);
}

function App() {
  const [targetDate, setTargetDate] = useState(TodayDate);
  const [birthDate, setBirthDate] = useStoredState('birthDate', '');
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      {Boolean(birthDate) && (
          <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
        )}
        <IonItem>
          <IonLabel position="fixed">Date of Birth:</IonLabel>
          <IonInput 
          type="date"
          value={birthDate}
          onIonChange={(event)=>setBirthDate(event.detail.value)}/>
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">Target Date:</IonLabel>
          <IonInput 
          type="date"
          value={targetDate}
          onIonChange={(event)=>setTargetDate(event.detail.value)} />
        </IonItem>
        
      </IonContent>
    </IonApp>
  );
}

export default App;
