import React from 'react'
import { SmallCase } from '../components/SmallCase';

export const Work = () => {
return(
  <div className="work">
    <SmallCase 
    location="/CaseOne"
    backgroundColor="#FFFFFF" 
    title="Case" 
    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    />

    <SmallCase 
    location="/CaseOne"
    backgroundColor="#E7E9EA" 
    title="Case" 
    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    />

    <SmallCase 
    location="/CaseOne"
    backgroundColor="#FFFFFF" 
    title="Case" 
    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    />

    <SmallCase 
    location="/about"
    backgroundColor="#E7E9EA" 
    title="Case" 
    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    />

  </div>
);
}