using Microsoft.AspNetCore.Mvc;
using ReduxCartBE.Domain;
using ReduxCartBE.Persistence.Queries;
using ReduxCartBE.Services;

namespace ReduxCartBE.Controllers;

[ApiController]
[Route("/api/products")]
public class ProductsController : ControllerBase
{
    private readonly IProductQuery _queries;
    public ProductsController(IProductQuery queries)
    {
        _queries = queries;
    }

    [HttpGet]
    [Route("products/list")]
    public IActionResult GetProducts()
    {
        try
        {
            var listOfProducts = _queries.GetProducts();
            return new OkObjectResult(listOfProducts);
        }
        catch (Exception e)
        {
            return new BadRequestObjectResult(e);
        }
    }
    
}