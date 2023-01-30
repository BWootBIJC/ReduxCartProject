using ReduxCartBE.Domain;

namespace ReduxCartBE.Services;

public interface IProductsService
{
    public List<Product> GetProducts();
}