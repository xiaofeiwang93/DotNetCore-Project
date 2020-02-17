using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentalProject.Models
{
    public class RentalDBContext : DbContext
    {
        public DbSet<RentalItem> RentalItems { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=localhost\SQLEXPRESS;Initial Catalog=RentalProject;Persist Security Info=True;User ID=RentalProject;Password=v4xKLgz8JW");
        }
    }
}
