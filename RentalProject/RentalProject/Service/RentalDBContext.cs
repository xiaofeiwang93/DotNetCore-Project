using Microsoft.EntityFrameworkCore;
using RentalProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentalProject.Service
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
