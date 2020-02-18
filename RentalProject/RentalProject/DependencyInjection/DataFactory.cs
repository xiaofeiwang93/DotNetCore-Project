using RentalProject.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentalProject.DependencyInjection
{
    public class DataFactory
    {
        public static IDataAccessLayer ItemDataObj()
        {
            return new RentalItemDataAccessLayer();
        }

    }
}
