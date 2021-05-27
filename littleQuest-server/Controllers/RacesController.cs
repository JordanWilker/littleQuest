using System;
using littleQuest.Models;
using littleQuest.Services;
using Microsoft.AspNetCore.Mvc;

namespace littleQuest.Controllers{
    [ApiController]
    [Route("api/[contoller]")]
    public class RacesController: ControllerBase
    {
      private readonly RacesService _service;  
      public RacesController(RacesService service)
      {
          _service = service;
      }
      [HttpGet]
      public ActionResult<Race> Get()
      {
          try
          {
              return Ok(_service.GetAll());
          }
          catch (Exception e)
         {
            return BadRequest(e.Message);
         }
      }
    }
}