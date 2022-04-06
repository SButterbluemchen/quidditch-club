import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules';
import 'react-vertical-timeline-component/style.min.css';
import BludgerIcon from './BludgerIcon';


// Données en 'dur' pour tester la timeline animée
const Timeline = () => {
  const timelineElements = [
    {
      id: 1,
      title: 'History 1',
      description: 'lorem ipsum lorem ipsum',
      date: 'Février 2015',
      icon: <BludgerIcon />,
    },
    {
      id: 2,
      title: 'History 2',
      description: 'lorem ipsum lorem ipsum',
      date: 'Octobre 2018',
      icon: <BludgerIcon />,
    },
    {
      id: 3,
      title: 'History 3',
      description: 'lorem ipsum lorem ipsum',
      date: 'Mai 2020',
      icon: <BludgerIcon />,
    },
    {
      id: 4,
      title: 'History 4',
      description: 'lorem ipsum lorem ipsum',
      date: 'lorem 35',
      icon: <BludgerIcon />,
    },
    {
      id: 5,
      title: 'History 4',
      description: 'lorem ipsum lorem ipsum',
      date: 'lorem 35',
      icon: <BludgerIcon />,
    },
    {
      id: 6,
      title: 'History 4',
      description: 'lorem ipsum lorem ipsum',
      date: 'lorem 35',
      icon: <BludgerIcon />,
    },
  ];
  //implémentation de la timeline à l'aide des alias importés plus haut
  return (
    <section className='timeline-section'>
      <h2>Timeline</h2>
      <VerticalTimeline>
        { //itération sur l'objet timelineElements
          timelineElements.map((timelineElement) => {
            return (
              <VerticalTimelineElement
                key={timelineElement.key} //obligatoire lors d'un .map
                date={timelineElement.date}
                dateClassName='date'
                icon={timelineElement.icon}
              >
                <h3 className='timeline-title'>
                  {timelineElement.title}
                </h3>
                <p id='timeline-description'>
                  {timelineElement.description}
                </p>



              </VerticalTimelineElement>
            );
          })
        }
      </VerticalTimeline>
    </section>
  );
};


export default Timeline;
