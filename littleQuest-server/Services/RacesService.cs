using System.Collections.Generic;
using System.Linq;
using littleQuest.Models;
using littleQuest.Repositories;

namespace littleQuest.Services 
{
    public class RacesService
    {
        private readonly RacesRepository _repo;

        public RacesService(RacesRepository repo)
        {
            _repo = repo;
        }
         internal IEnumerable<Race> GetAll()
      {
         {
      return _repo.GetAll();
    }
      }
    }
}