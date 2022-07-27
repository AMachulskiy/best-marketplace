import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

describe('routing', () => {
  test('not found pages', () => {
    render(
      <MemoryRouter initialEntries={['/404']}>
        <Routes>
          <Route path='*' element={<h1 data-testid='404'>404</h1>} />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByTestId('404')).toBeInTheDocument()
  })
})
