import ProjectComponent from "./ProjectComponent";

import image1 from '../images/sun-m.jpg';
import image2 from '../images/vapur-m.jpg';
import image3 from '../images/capa-m.jpg';
import image4 from '../images/capa-l.jpg';
import image5 from '../images/sun-s.jpg';
import image6 from '../images/vapur-s.jpg';

const Projects = () => {
  const works = [
    {
      title: "Project 1",
      image: image1,
      class: 'self-center',
    },
    {
      title: "Project 2",
      image: image2,
      class: 'self-center',
    },
    {
      title: "Project 3",
      image: image3,
      class: 'self-center',
    },
    {
      title: "Project 4",
      image: image4,
      class: 'self-end',
    },
    {
      title: "Project 5",
      image: image5,
      class: 'self-end',
    },
    {
      title: "Project 6",
      image: image6,
      class: 'self-end',
    },
  ];

  return (
    <div class="h-full mx-6 my-5 grid grid-cols-3 gap-7 grid-rows-[minmax(200px,_300px)]">
      {/* 
      <ProjectComponent class="self-end h-2/6">
        */}
      {works.map((project) =>
        <ProjectComponent key={project.title} class={project.class}>
          {project.title}
        <img src={project.image} alt={project.title}/>
      </ProjectComponent>
      )}
    </div>
  );
};

export default Projects;
