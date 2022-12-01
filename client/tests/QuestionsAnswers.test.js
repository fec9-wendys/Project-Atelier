/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from  "@testing-library/react";
import App from '../src/components/App.jsx';
import QuestionsAnswers from '../src/components/questions-answers/QuestionsAnswers.jsx'
import QAEntry from '../src/components/questions-answers/QAEntry.jsx'

describe('QA tests', ()=> {
  it('should render QA main', ()=> {
    render(<QuestionsAnswers/>)
    expect(1).toEqual(1)
  });
  it('should render QA Entry', ()=> {
    render(<QAEntry/>)
    expect(1).toEqual(1)
  })
})
