import React from 'react';
import './Projectspage.css';
import Projectslist from '../../components/Projectslist/Projectslist';

const Projectspage = () => {
  return (
    <div className="projects-container">
      <div className="text-myProjects">
        <p className="myprojects-text-white">My</p>
        <p className="myprojects-text-blue">Projects</p>
      </div>
      <p className='myprojects-text-aboutprojects'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, voluptatum id pariatur vitae laboriosam nostrum ratione sapiente suscipit ullam fuga, recusandae, voluptate dignissimos optio fugiat commodi hic laudantium. Iure, reprehenderit!</p>
      <div className='filter-box'>
        <div className='filter-item'>#React</div>
        <div className='filter-item'>#React-native</div>
        <div className='filter-item'>#Javascript</div>
      </div>
      <Projectslist />
    </div>
  );
}

export default Projectspage
