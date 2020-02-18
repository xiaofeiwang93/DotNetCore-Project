using RentalProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentalProject.Service
{
    public interface IDataAccessLayer
    {
        IEnumerable<RentalItem> GetAllItems();
        int AddItem(RentalItem rentalItem);
        int UpdatItem(RentalItem rentalItem);
        RentalItem GetItemData(int id);
        int DeleteItem(int id);

    }
}
