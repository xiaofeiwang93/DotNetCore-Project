using RentalProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentalProject.Service
{
    public class MessageAccessLayer : IMessageAccessLayer
    {
        RentalDBContext db = new RentalDBContext();

        public IEnumerable<Message> GetAllItems()
        {
            try
            {
                return db.Messages.ToList();
            }
            catch
            {
                throw;
            }
        }

        public int AddItem(Message message)
        {
            if (message is null)
            {
                throw new ArgumentNullException(nameof(message));
            }
            try
            {
                db.Messages.Add(message);
                db.SaveChanges();
                return 1;
            }
            catch { throw; }
        }

        public Message GetItemData(int id)
        {
            try
            {
                Message message = db.Messages.Find(id);

                return message;
            }
            catch { throw; }
        }

        public int DeleteItem(int id)
        {
            try
            {
                Message message = db.Messages.Find(id);
                db.Messages.Remove(message);
                db.SaveChanges();

                return 1;
            }
            catch { throw; }
        }
    }
}
