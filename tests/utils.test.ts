import { cn, getTabValue } from "@/lib/utils"

describe("cn()", () => {
  it("склеивает строковые классы", () => {
    expect(cn("a", "b")).toBe("a b")
  })

  it("игнорирует falsy-значения", () => {
    expect(cn("a", false && "b", null, undefined, "", "c")).toBe("a c")
  })

  it("выбирает последний конфликтующий tailwind-класс", () => {
    expect(cn("p-2", "p-4")).toBe("p-4")
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500")
  })

  it("работает с массивами и объектами (clsx API)", () => {
    expect(cn(["a", "b"], { c: true, d: false })).toBe("a b c")
  })
})

describe("getTabValue()", () => {
  it("возвращает 'dashboard' для /dashboard и вложенных путей", () => {
    expect(getTabValue("/dashboard")).toBe("dashboard")
    expect(getTabValue("/dashboard/settings")).toBe("dashboard")
  })

  it("возвращает 'explore' для /builds/explore", () => {
    expect(getTabValue("/builds/explore")).toBe("explore")
    expect(getTabValue("/builds/explore/123")).toBe("explore")
  })

  it("возвращает 'builds' для /builds и вложенных, кроме /builds/explore", () => {
    expect(getTabValue("/builds")).toBe("builds")
    expect(getTabValue("/builds/new")).toBe("builds")
    expect(getTabValue("/builds/123/edit")).toBe("builds")
  })

  it("возвращает пустую строку для неизвестных путей", () => {
    expect(getTabValue("/")).toBe("")
    expect(getTabValue("/login")).toBe("")
    expect(getTabValue("/signup")).toBe("")
    expect(getTabValue("/random/path")).toBe("")
  })

  it("НЕ матчит по подстроке — только по префиксу", () => {
    expect(getTabValue("/other/builds")).toBe("")
    expect(getTabValue("/my-dashboard")).toBe("")
  })
})
