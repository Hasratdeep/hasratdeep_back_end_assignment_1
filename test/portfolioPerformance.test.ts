import { calculatePortfolioPerformance, PortfolopPerformance } from  "../src/portfolio/portfolioPerformance";
    describe("calculatePortfolioPerformance", () => {
        it("should correctly identify the profits", () => {
            //ARRANGE//
            const initialInvestment = 10000;
            const currentValue = 12000;

            //ACT//
            const result = calculatePortfolioPerformance();

            //ASSERT//
            expect(result).not.toBeNull();
            expect(result.profitOrLoss).toBe(2000);
            expect(result.performanceChange).toBe(20);
            expect(result.performanceSummary).toContain("Gained Significantly");
        })

        it("should correctly identify no change", () => {
            //ARRANGE//
            const initialInvestment = 10000;
            const currentValue = 10000;

            //ACT//
            const result = calculatePortfolioPerformance();

            //ASSERT//
            expect(result.profitOrLoss).toBe(0);
            expect(result.percentageChange).toBe(0);
            expect(result.performanceSummary).toContain("no change");
        })

        it("should correctly identify the loss", () => {
            //ARRANGE//
            const initialInvestment = 10000;
            const currentValue = 8000;

            //ACT//
            const result = calculatePortfolioPerformance();

            //ASSERT//
            expect(result.profitOrLoss).toBe(-2000);
            expect(result.percentageChange).toBe(-20);
            expect(result.performanceSummary).toContain("Loss slightly");
        });
    })

    