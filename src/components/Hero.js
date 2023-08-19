import React from 'react';
import styled from "styled-components";
import { other_images } from '../utils/images';

const Hero = () => {
  return (
    <HeroWrapper className = "bg-black">
      <div className='container h-100 flex'>
        <div className='hero-content'>
          <h1>Online Learning Platform.</h1>
          <p>An online learning platform is a webspace or portal for educational content and resources that offers a student everything they need in one place: lectures, resources, opportunities to meet and chat with other students, and more. It is also an excellent way for the student and the teacher to monitor student progress.</p>
        </div>
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  background: url(${other_images.hero_img}) center/cover no-repeat;
  height: 300px;

  .container{
    .hero-content{
      background-color: var(--clr-white);
      max-width: 500px;
      width: 100%;
      margin-left: 0;
      padding: 20px;

      h1{
        color:blue;
        font-size: 32px;
        margin-bottom: 5px;
        white-space: nowrap;
      }
      p{
        font-size: 15px;
      }
    }
  }
`;

export default Hero