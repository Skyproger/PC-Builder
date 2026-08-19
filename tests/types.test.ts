import {
  categoryIdToDbType,
  dbTypeToCategoryId,
  type ComponentType,
} from "@/lib/types"

describe("mapping categoryId <-> ComponentType", () => {
  it("categoryIdToDbType и dbTypeToCategoryId зеркальны", () => {
    for (const [categoryId, dbType] of Object.entries(categoryIdToDbType)) {
      expect(dbTypeToCategoryId[dbType]).toBe(categoryId)
    }
  })

  it("каждый ComponentType имеет обратный ключ", () => {
    const dbTypes: ComponentType[] = [
      "cpu",
      "gpu",
      "ram",
      "ssd",
      "motherboard",
      "psu",
      "case",
      "cooler",
    ]
    for (const t of dbTypes) {
      expect(dbTypeToCategoryId[t]).toBeDefined()
    }
  })

  it("маппинг корзины 'storage' <-> 'ssd' работает в обе стороны", () => {
    expect(categoryIdToDbType.storage).toBe("ssd")
    expect(dbTypeToCategoryId.ssd).toBe("storage")
  })

  it("маппинг охлаждения 'cooling' <-> 'cooler' работает в обе стороны", () => {
    expect(categoryIdToDbType.cooling).toBe("cooler")
    expect(dbTypeToCategoryId.cooler).toBe("cooling")
  })

  it("возвращает undefined для неизвестной категории", () => {
    expect(categoryIdToDbType["unknown"]).toBeUndefined()
  })
})
