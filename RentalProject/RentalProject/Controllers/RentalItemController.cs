using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RentalProject.Models;
using RentalProject.Service;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RentalProject.Controllers
{
    [Route("api/[controller]")]
    public class RentalItemController : Controller
    {
        RentalItemDataAccessLayer objRentalItem = new RentalItemDataAccessLayer();

        // GET: api/<controller>
        [HttpGet]
        [Route("api/RentalItem/GetAll")]
        public IEnumerable<RentalItem> GetAll()
        {
            return objRentalItem.GetAllItems();
        }

        // POST api/<controller>
        [HttpPost]
        [Route("api/RentalItem/Create")]
        public int Create(RentalItem rentalItem)
        {
            return objRentalItem.AddItem(rentalItem);
        }

        [HttpGet]
        [Route("api/RentalItem/Detail/{id}")]
        public RentalItem Details(int id)
        {
            return objRentalItem.GetItemData(id);
        }

        // PUT api/<controller>/5
        [HttpPut]
        [Route("api/RentalItem/Edit")]
        public int Edit(RentalItem rentalItem)
        {
            return objRentalItem.UpdatItem(rentalItem);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        [Route("api/RentalItem/Delete/{id}")]
        public int Delete(int id)
        {
            return objRentalItem.DeleteItem(id);
        }
    }
}
