import { componentCategories } from "@/lib/constans"
import { categoryIdToDbType } from "@/lib/types"

describe("componentCategories", () => {
  it("покрывает все 8 категорий", () => {
    expect(componentCategories).toHaveLength(8)
  })

  it("каждая категория имеет id, name и icon", () => {
    for (const c of componentCategories) {
      expect(typeof c.id).toBe("string")
      expect(c.id.length).toBeGreaterThan(0)
      expect(typeof c.name).toBe("string")
      expect(c.name.length).toBeGreaterThan(0)
      expect(typeof c.icon).toBe("string")
      expect(c.icon.length).toBeGreaterThan(0)
    }
  })

  it("id категорий уникальны", () => {
    const ids = componentCategories.map((c) => c.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it("каждый id категории имеет соответствие в categoryIdToDbType", () => {
    for (const c of componentCategories) {
      expect(categoryIdToDbType[c.id]).toBeDefined()
    }
  })
})
