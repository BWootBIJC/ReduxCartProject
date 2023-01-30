using Microsoft.AspNetCore.Mvc;
using ReduxCartBE.Persistence.Queries;
using Xunit;

namespace ReduxCartBE.Controllers;

public class ProductsController_Tests
{
    private readonly ProductsController _controller;
    private readonly IProductQuery _query;
    public ProductsController_Tests(ProductsController controller, ProductQuery query)
    {
        _controller = controller;
        _query = query;
    }

    [Fact]
    public void OnSuccessfulGetProductsList_ReturnsOkObjectResult()
    {
        

    }
}