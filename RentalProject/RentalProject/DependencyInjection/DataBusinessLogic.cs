using RentalProject.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentalProject.DependencyInjection
{
    public class DataBusinessLogic
    {
        IDataAccessLayer _itemData;

        public DataBusinessLogic()
        {
            _itemData = DataFactory.ItemDataObj();
        }

        
    }
}
