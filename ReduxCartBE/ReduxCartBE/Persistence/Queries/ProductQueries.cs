using ReduxCartBE.DbContext;
using ReduxCartBE.Domain;

namespace ReduxCartBE.Persistence.Queries;

public class ProductQuery : IProductQuery
{
    private readonly ReduxCartDbContext _dbContext;
    public ProductQuery(ReduxCartDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    public List<Product> GetProducts()
    {
        var result = _dbContext.Products.ToList();
        return result;
    }
}