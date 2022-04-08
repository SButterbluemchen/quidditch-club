import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component/dist-modules';
import 'react-vertical-timeline-component/style.min.css';
import BludgerIcon from './BludgerIcon';
//import TimelineImage from './TimelineImage';

//Données 'en dur"
const Timeline = () => {
  const timelineElements = [
    {
      id: 1,
      title: '"Tout est possible du moment que l\'on a assez de cran."',
      description:
        'Quidditch Club est l\'une des premières équipes françaises de Quidditch moldu, créée le 18 juin 2007 par trois amis à Lille. L\'idée a pris naissance autour d\'un verre, d\'abord sous forme de blague, puis ce pari fou est apparu comme une évidence.',
      date: 'Juin 2007',
      icon: <BludgerIcon />,
      //image: <TimelineImage />
    },
    {
      id: 2,
      title:
        '"C’est de la force des convictions que dépend la réussite, pas du nombre des partisans."',
      description:
        'La machine Quidditch Club est lancée. En premier lieu, c\'est le bouche à oreilles qui fait connaitre l\'association sportive. Nous démarrons à 15 adhérent.e.s régulier.e.s.',
      date: 'Octobre 2007',
      icon: <BludgerIcon />,
    },
    {
      id: 3,
      title: '"Tout homme s\'enrichit quand abonde l\'esprit."',
      description:
        'Explosion des réseaux sociaux en France et création de la toute première page Quidditch Club, bien différente de celle que nous connaissons aujourd\'hui. Les sponsors commencent à s\'intéresser à nous, le club compte désormais 300 membres actifs.',
      date: 'Décembre 2009',
      icon: <BludgerIcon />,
    },
    {
      id: 4,
      title:
        '"Il n\'y a pas de bien ou de mal, il n\'y a que le pouvoir, et ceux qui sont trop faibles pour le rechercher..."',
      description:
        'Premier gros partenariat avec Decathlon, nos équipements évoluent. Nous rencontrons d\'autres fédérations françaises et organisons des échanges.',
      date: 'Mai 2015',
      icon: <BludgerIcon />,
    },
    {
      id: 5,

      title:
        '"La célébrité ne peut donner que ce qu\'elle a, Harry. N\'oublie jamais ça !"',
      description:
        'Aujourd\'hui nous sommes fiers vous annoncer que l\'une de nos équipes est sélectionnée aux J.O 2024 ! Nous ne saurions que trop remercier les personnes qui nous ont soutenu dès le départ. Notre club continuera à exister à petite échelle et les personnes passionnées à promouvoir nos valeurs : dépassement de soi et partage.',
      date: '2022',
      icon: <BludgerIcon />,
    },
  ];
  //implémentation de la timeline à l'aide des alias importés plus haut
  return (
    <section className="timeline-section">
      <h2>Timeline</h2>
      <VerticalTimeline>
        {
          //itération sur le tableau d'objets timelineElements
          timelineElements.map((timelineElement) => {
            return (
              <VerticalTimelineElement
                key={timelineElement.key} //obligatoire lors d'un .map
                date={timelineElement.date}
                dateClassName="timeline-date-color"
                icon={timelineElement.icon}
                //image={timelineElement.image}
              >
                <h3 className="timeline-title">{timelineElement.title}</h3>
                <p id="timeline-description">{timelineElement.description}</p>
              </VerticalTimelineElement>
            );
          })
        }
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
