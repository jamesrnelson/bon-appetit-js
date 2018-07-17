import { expect } from "chai"
import Pantry from "../lib/pantry"

describe("Pantry", () => {
  describe("attributes", () => {
    const pantry = new Pantry()

    it("has a stock", () => {
      expect(pantry.stock).to.eql({})
    })
  })

  describe("functions", () => {
    describe("stockCheck", () => {
      it("returns 0 when the requested item is not in stock", () => {
        const pantry = new Pantry();
        expect(pantry.stockCheck("Cheese")).to.eql(0);
      });
    });

    describe("restock", () => {
      it("adds the specified amount to the ingredient", () => {
        const pantry = new Pantry();
        pantry.restock("Cheese", 10);
        expect(pantry.stock).to.eql({ "Cheese": 10 });
        expect(pantry.stockCheck("Cheese")).to.eql(10);

        pantry.restock("Cheese", 20);
        expect(pantry.stock).to.eql({ "Cheese": 30 });
        expect(pantry.stockCheck("Cheese")).to.eql(30);
      });
    });
  });
});
