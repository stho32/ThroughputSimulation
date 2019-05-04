/**
 * Stock Piles
 */


function StockPile(x,y,name,material,stock) {
    var publicApi = {};

    publicApi.x = x;
    publicApi.y = y;
    publicApi.height = 100;
    publicApi.width  = 140;
    publicApi.Name = name;
    publicApi.Material = material;
    publicApi.Stock = stock;

    return publicApi;
}