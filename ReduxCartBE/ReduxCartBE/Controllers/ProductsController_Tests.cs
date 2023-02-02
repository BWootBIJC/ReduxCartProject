using Microsoft.AspNetCore.Mvc;
using ReduxCartBE.Persistence.Queries;
using Xunit;
using Moq;

namespace ReduxCartBE.Controllers;

public class ProductsController_Tests
{
    private readonly ProductsController _controller;
    private readonly Mock<IProductQuery> _query;
    public ProductsController_Tests()
    {
        _query = new Mock<IProductQuery>();
        _controller = new ProductsController(_query.Object);
    }

    [Fact]
    public void OnSuccessfulGetProductsList_ReturnsOkObjectResult()
    {
        var result = (OkObjectResult)_controller.GetProducts();
        Assert.Equal(StatusCodes.Status200OK, result.StatusCode);
    }

    [Fact]
    public void OnUnsuccessfulGetProductsList_ReturnsBadObjectResult()
    {
        _query.Setup(x => x.GetProducts())
            .Throws(new Exception("Yea, you can't do that 'round these parts..."));

        var result = (BadRequestObjectResult)_controller.GetProducts();
        
        Assert.Equal(StatusCodes.Status400BadRequest, result.StatusCode);
    }

    [Fact]
    public void GetProductsList_CallsQuery()
    {
        _controller.GetProducts();

        _query.Verify(x => x.GetProducts(), Times.Once);
    }
}