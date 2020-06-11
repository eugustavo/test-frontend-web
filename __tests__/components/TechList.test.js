import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import TechList from '~/components/TechList';

describe('TechList Component', () => {
  afterEach(async () => await cleanup());

  it('should be able to add new tech', () => {
    const { getByText, getByTestId } = render(<TechList />);

    fireEvent.click(getByText('Adicionar'));

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  })
});