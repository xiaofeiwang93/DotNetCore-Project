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
    public class MessageController : Controller
    {
        MessageAccessLayer objMessage = new MessageAccessLayer();

        // GET: api/<controller>
        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<Message> GetAll()
        {
            return objMessage.GetAllItems();
        }

        // POST api/<controller>
        [HttpPost]
        [Route("Create")]
        public int Create(Message message)
        {
            return objMessage.AddItem(message);
        }

        [HttpGet]
        [Route("Details/{id}")]
        public Message Details(int id)
        {
            return objMessage.GetItemData(id);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        [Route("Delete/{id}")]
        public int Delete(int id)
        {
            return objMessage.DeleteItem(id);
        }
    }
}
