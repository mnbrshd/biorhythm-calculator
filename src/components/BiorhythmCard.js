import { IonCard, IonHeader, IonCardContent, IonCardTitle } from '@ionic/react';
import dayjs from 'dayjs';
import {calculateBiorhythms} from '../libs/biorhythms';
import BiorhythmChart from './BiorhythmChart';
import './BiorhythmCard.css'

const formatDate = (isoString) => {
    const day = dayjs(isoString);
    return day.format('D MMMM YYYY');
}

const BiorhythmCard = ({birthDate, targetDate}) => {
    const biorhythms = calculateBiorhythms(birthDate, targetDate);
    return(
        <div>
            <IonCard className="BiorhythmCard ion-text-center">
                <IonHeader>
                    <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
                </IonHeader>
                <IonCardContent>
                    <BiorhythmChart 
                    birthDate={birthDate} 
                    targetDate={targetDate} />
                    <p className='physical'>
                        Physical: {biorhythms.physical.toFixed(4)}
                    </p>
                    <p className='emotional'>
                        Emotional: {biorhythms.emotional.toFixed(4)}
                    </p>
                    <p className='intellectual'>
                        Intellectual: {biorhythms.intellectual.toFixed(4)}
                    </p>
                </IonCardContent>
            </IonCard>
        </div>
    );
}

export default BiorhythmCard;