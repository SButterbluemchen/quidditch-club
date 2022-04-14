import React from 'react';
import { useTranslation } from 'react-i18next';

// const lngs = {
//   en: { nativeName: 'English' },
//   fr: { nativeName: 'Francais' }
// };

const trainingplanRow = (props) => {

  const { t } = useTranslation();
  // const { t, i18n } = useTranslation();

  const trainingArray = props.trainingAttributes.trainings;
  const trainingsTime = trainingArray.map((training, index) =>
    <tr key={index}>
      {training && <>
        {training.begin && <td className="training-time">{training.begin.slice(0, -3)} - {training.end.slice(0, -3)}</td>}
        <td style={{ textTransform: 'capitalize'}}>{training.name}</td>
      </>}
    </tr>
  );

  return (
    <table className='trainingplan-column'>
      {/* <div>
        {Object.keys(lngs).map((lng) => (
          <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
            {lngs[lng].nativeName}
          </button>
        ))}
      </div> */}
      <thead>
        <tr>
          <th><h4>{t(`day.${props.trainingAttributes.day}`)}</h4></th>
        </tr>
      </thead>
      <tbody>{trainingsTime}</tbody>
    </table>
  );
};

export default trainingplanRow;