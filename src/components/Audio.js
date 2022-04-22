// import React, { useState, useEffect } from 'react';
// import Song from '../media/Harry-Potter-Theme-Song.mp3';

// // const url = 'https://www.youtube.com/watch?v=Htaj3o3JD8I';

// const useAudio = url => {
//   const [audio] = useState(new Audio(url));
//   const [playing, setPlaying] = useState(false);

//   const toggle = () => setPlaying(!playing);

//   useEffect(() => {
//     playing ? audio.play() : audio.pause();
//   },
//   [playing]
//   );

//   useEffect(() => {
//     audio.addEventListener('ended', () => setPlaying(false));
//     return () => {
//       audio.removeEventListener('ended', () => setPlaying(false));
//     };
//   }, []);

//   return [playing, toggle];
// };

// const Audio = ({ url }) => {
//   const [playing, toggle] = useAudio('https://www.youtube.com/watch?v=Htaj3o3JD8I');

//   return (
//     <div>
//       <button onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
//     </div>
//   );
// };

// export default Audio;