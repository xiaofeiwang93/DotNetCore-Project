using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RentalProject.Models;
using RentalProject.Service;

namespace RentalProject.Controllers
{
    [Route("api/[controller]")]
    public class RentalItemController : Controller
    {
        RentalItemDataAccessLayer objRentalItem = new RentalItemDataAccessLayer();

        // GET: api/<controller>
        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<RentalItem> GetAll()
        {
            return objRentalItem.GetAllItems();
        }

        // POST api/<controller>
        [HttpPost]
        [Route("Create")]
        public int Create(RentalItem rentalItem)
        {
            return objRentalItem.AddItem(rentalItem);
        }

        [HttpGet]
        [Route("Details/{id}")]
        public RentalItem Details(int id)
        {
            return objRentalItem.GetItemData(id);
        }

        // PUT api/<controller>/5
        [HttpPut]
        [Route("Edit")]
        public int Edit(RentalItem rentalItem)
        {
            return objRentalItem.UpdatItem(rentalItem);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        [Route("Delete/{id}")]
        public int Delete(int id)
        {
            return objRentalItem.DeleteItem(id);
        }
    }
}
