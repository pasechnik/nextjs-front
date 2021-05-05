import { render, screen } from '@testing-library/react'
import Copyright from './Copyright'

test('should display My Website link', async () => {
  render(<Copyright />)
  const siteLink = screen.getByText('My website')
  expect(siteLink).toBeInTheDocument()
  expect(siteLink).toHaveAttribute('href', 'https://nextjs-front-seven.vercel.app/')
})
