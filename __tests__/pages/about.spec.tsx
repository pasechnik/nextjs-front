import { render, screen } from '@testing-library/react'
import About from '../../pages/about'

describe('About Page', () => {
  it('should show about page link', async () => {
    render(<About />)

    const heading = screen.getByTitle('heading')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent("It's About page")
  })
})
