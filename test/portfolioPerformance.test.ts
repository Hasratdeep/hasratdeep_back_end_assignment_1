import { calculatePortfolioPerformance, PortfolopPerformance } from  "../src/portfolio/portfolioPerformance";
    describe("calculatePortfolioPerformance", () => {
        it("should correctly identify the profits", () => {
            //ACT//
            const result = calculatePortfolioPerformance(12000,10000);

            //ASSERT//
            expect(result).not.toBeNull();
            expect(result.profitOrLoss).toBe(2000);
            expect(result.percentageChange).toBe(20);
            expect(result.performanceSummary).toContain("Gained Significantly");
        })

        it("should correctly identify no change", () => {
            //ACT//
            const result = calculatePortfolioPerformance(10000,10000);

            //ASSERT//
            expect(result.profitOrLoss).toBe(0);
            expect(result.percentageChange).toBe(0);
            expect(result.performanceSummary).toContain("no change");
        })

        it("should correctly identify the loss", () => {
            //ACT//
            const result = calculatePortfolioPerformance(10000,8000);

            //ASSERT//
            expect(result.profitOrLoss).toBe(-2000);
            expect(result.percentageChange).toBe(-20);
            expect(result.performanceSummary).toContain("Loss slightly");
        });
    })

