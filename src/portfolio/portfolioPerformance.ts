export interface PortfolopPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSUmmary: String;
}

// The function to calculatePortfoliooPerformance //
    export function calculatePortfolioPerformance(): any {
    let initialInvestment = 10000;
    let currentValue = 12000;

    const profitOrLoss = currentValue - initialInvestment;
    const percentageChange = (profitOrLoss / initialInvestment) * 100;

// performance summary criteria//
  let performanceSummary: string;
  switch(true) {
    case percentageChange > 20:
        return performanceSummary = `The portfolio has gained moderately with a profit of $${profitOrLoss}.`;
    case percentageChange > 10:
        return performanceSummary = `The portfolio has gained slightly with a profit of $${profitOrLoss}.`;
    case percentageChange > 0:
        return performanceSummary = `The portfolio has gained no change with  $${profitOrLoss}.`;
    case percentageChange > -0.1:
        return performanceSummary = `The portfolio has lost slightly with a loss of $${profitOrLoss}.`;
    case percentageChange > -10:
        return performanceSummary = `The portfolio has lost moderately with a loss of $${profitOrLoss}.`;
    case percentageChange > -20:
        return performanceSummary = `The portfolio has lost significantly with a loss of $${profitOrLoss}.`;
    default:
        performanceSummary = `The portfolio has performed poorly.`;
  }
   
    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}