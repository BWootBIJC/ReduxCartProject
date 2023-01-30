using ReduxCartBE.Domain;

namespace ReduxCartBE.Persistence.Queries;

public interface IProductQuery
{
    public List<Product> GetProducts();
}