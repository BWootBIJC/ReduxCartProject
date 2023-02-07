using Microsoft.EntityFrameworkCore;
using ReduxCartBE.Domain;

namespace ReduxCartBE.DbContext;

public class ReduxCartDbContext : Microsoft.EntityFrameworkCore.DbContext
{
    public ReduxCartDbContext(DbContextOptions<ReduxCartDbContext> options) : base(options)
    {
        
    }
    public DbSet<Product> Products { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>().HasData(
            new Product { Id = 1, Name = "Suhr Classic Stratocaster", Description = "Arctic White", Price = 2000.00 },
            new Product { Id = 2, Name = "Gibson Les Paul", Description = "BlueBerry Burst", Price = 3200 },
            new Product { Id = 3, Name = "Fender Telecaster", Description = "Sunburst", Price = 800 },
            new Product { Id = 4, Name = "Custom P90 Stratocaster", Description = "Pea Pea", Price = 2000 },
            new Product { Id = 5, Name = "Taylor 814c", Description = "Classic Wood", Price = 3000 }
        );
    }
}