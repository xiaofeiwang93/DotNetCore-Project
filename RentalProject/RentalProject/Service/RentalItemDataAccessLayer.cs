using Microsoft.EntityFrameworkCore;
using RentalProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentalProject.Service
{
    public class RentalItemDataAccessLayer
    {
        RentalDBContext db = new RentalDBContext();

        public IEnumerable<RentalItem> GetAllItems()
        {
            try
            {
                return db.RentalItems.ToList();
            }
            catch
            {
                throw;
            }
        }

        public int AddItem(RentalItem rentalItem)
        {
            if (rentalItem is null)
            {
                throw new ArgumentNullException(nameof(rentalItem));
            }
            try
            {
                db.RentalItems.Add(rentalItem);
                db.SaveChanges();
                return 1;
            }
            catch { throw; }
        }

        public int UpdatItem(RentalItem rentalItem)
        {
            if (rentalItem is null)
            {
                throw new ArgumentNullException(nameof(rentalItem));
            }
            try
            {
                db.Entry(rentalItem).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch { throw; }
        }

        public RentalItem GetItemData(int id)
        {
            try
            {
                RentalItem rentalItem = db.RentalItems.Find(id);

                return rentalItem;
            }
            catch { throw; }
        }

        public int DeleteItem(int id)
        {
            try
            {
                RentalItem rentalItem = db.RentalItems.Find(id);
                db.RentalItems.Remove(rentalItem);
                db.SaveChanges();

                return 1;
            }
            catch { throw; }
        }
    }
}
