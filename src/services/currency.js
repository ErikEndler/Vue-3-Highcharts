export default (httpClient) => ({
    getAll: () => {
        return httpClient.get("/last/USD-BRL,EUR-BRL,USD-BRLT,CAD-BRL,GBP-BRL,ARS-BRL,CHF-BRL,DOGE-BRL");
    }
});