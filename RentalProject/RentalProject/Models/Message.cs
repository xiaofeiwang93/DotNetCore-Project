using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentalProject.Models
{
    public class Message
    {
        public int Id { get; set; }

        public int ItemId { get; set; }

        public string Email { get; set; }

        public string NickName { get; set; }

        public string PhoneNumber { get; set; }

        public string MessageContent { get; set; }
    }
}
