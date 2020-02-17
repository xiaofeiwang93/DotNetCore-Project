using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentalProject.Models
{
    public class RentalItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string PhotoURL { get; set; }
        public string Description { get; set; }
        public DateTime ExpiryDate { get; set; }
    }
}
