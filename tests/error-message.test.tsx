import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { ErrorMessage } from "@/components/error-message"

describe("<ErrorMessage />", () => {
  it("отрисовывает переданный message", () => {
    render(<ErrorMessage message="Что-то пошло не так" />)
    expect(screen.getByText("Что-то пошло не так")).toBeInTheDocument()
  })

  it("имеет role=alert для скринридеров", () => {
    render(<ErrorMessage message="Ошибка" />)
    const alert = screen.getByRole("alert")
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveTextContent("Ошибка")
  })

  it("рендерится как <p> элемент", () => {
    const { container } = render(<ErrorMessage message="x" />)
    expect(container.querySelector("p")).not.toBeNull()
  })

  it("отрисовывает пустую строку без падения", () => {
    render(<ErrorMessage message="" />)
    expect(screen.getByRole("alert")).toBeInTheDocument()
  })
})
