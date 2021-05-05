import { render, screen } from '@testing-library/react'
import Index from '../../pages'

describe('Index Page', () => {
  it('should show index page link', async () => {
    render(<Index />)

    const heading = screen.getByTitle('heading')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Welcome to Next.js!')
  })
})
