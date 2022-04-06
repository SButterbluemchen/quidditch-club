import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules';
import 'react-vertical-timeline-component/style.min.css';
import BludgerIcon from './BludgerIcon';

const Timeline = () => {
  const timelineElements = [
    {
      id: 1,
      title: 'History 1',
      description: 'lorem ipsum lorem ipsum',
      buttonText: 'blabla',
      date: 'Février 2015',
      icon: <BludgerIcon />,
    },
    {
      id: 2,
      title: 'History 2',
      description: 'lorem ipsum lorem ipsum',
      buttonText: 'blabla',
      date: 'Octobre 2018',
      icon: <BludgerIcon />,
    },
    {
      id: 3,
      title: 'History 2',
      description: 'lorem ipsum lorem ipsum',
      buttonText: 'blabla',
      date: 'Mai 2020',
      icon: <BludgerIcon />,
    },
    {
      id: 4,
      title: 'Avril 2022',
      description: 'lorem ipsum lorem ipsum',
      buttonText: 'blabla',
      date: 'lorem 35',
      icon: <BludgerIcon />,
    },
  ];

  return (
    <section>
      <h2>Timeline</h2>
      <VerticalTimeline>
        { //itération sur l'objet timelineElements
          timelineElements.map((timelineElement) => {
            return (
              <VerticalTimelineElement
                key={timelineElement.key} //obligatoire lors d'un .map
                date={timelineElement.date}
                dateClassName="date"
                icon={timelineElement.icon}
              >
                <h3 className='vertical-timeline-element-title'>
                  {timelineElement.title}
                </h3>


              </VerticalTimelineElement>
            );
          })
        }
      </VerticalTimeline>
    </section>
  );
};


export default Timeline;
