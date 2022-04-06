import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
  const timelineElements = [
    {
      id: 1,
      title: 'History 1',
      description: 'lorem ipsum lorem ipsum',
      buttonText: 'blabla',
      date: 'lorem 34',
      icon: 'icon',

    },
    {
      id: 2,
      title: 'History 2',
      description: 'lorem ipsum lorem ipsum',
      buttonText: 'blabla',
      date: 'lorem 35',
      icon: 'icon',

    },
    {
      id: 3,
      title: 'History 2',
      description: 'lorem ipsum lorem ipsum',
      buttonText: 'blabla',
      date: 'lorem 35',
      icon: 'icon',

    },
    {
      id: 4,
      title: 'History 2',
      description: 'lorem ipsum lorem ipsum',
      buttonText: 'blabla',
      date: 'lorem 35',
      icon: 'icon',

    }
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
              >

              </VerticalTimelineElement>
            );
          })
        }
      </VerticalTimeline>
    </section>
  );
};


export default Timeline;
