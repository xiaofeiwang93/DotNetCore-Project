using RentalProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentalProject.Service
{
    public interface IMessageAccessLayer
    {
        IEnumerable<Message> GetAllItems();
        int AddItem(Message message);
        Message GetItemData(int id);
        int DeleteItem(int id);
    }
}
