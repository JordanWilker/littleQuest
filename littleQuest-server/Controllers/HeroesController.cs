using System;
using Microsoft.AspNetCore.Mvc;
using littleQuest.Models;
using littleQuest.Services;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;
using CodeWorks.Auth0Provider;

namespace littleQuest.Controllers
{
   [ApiController]
   [Route("api/[controller]")]
   public class HeroesController : ControllerBase
   {
      private readonly HeroesService _service;
      public HeroesController(HeroesService service)
      {
         _service = service;
      }

      [HttpGet]
      public ActionResult<Hero> Get()
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

      [HttpGet("{id}")]
      public ActionResult<Hero> GetAll(int id)
      {
         try
         {
            return Ok(_service.GetById(id));
         }
         catch (Exception e)
         {
            return BadRequest(e.Message);
         }
      }

      [HttpPost]
      [Authorize]
      public async Task<ActionResult<Hero>> Post([FromBody] Hero newHero)
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        newHero.creatorId = userInfo.Id;
        newHero.Creator = userInfo;
        Hero created = _service.Create(newHero);

        return Ok(created);
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }     
    [HttpPut("{id}")]
    [Authorize]
    public async Task<ActionResult<Hero>> Edit(int id, [FromBody] Hero editData)
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        editData.Id = id;
        editData.Creator = userInfo;
        editData.creatorId = userInfo.Id;
        return Ok(_service.Edit(editData, userInfo.Id));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }
      [HttpDelete("{id}")]
      [Authorize]
      public async Task<ActionResult<string>> Delete(int id)
      {
         try
         {
            Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
            return Ok(_service.Delete(id, userInfo.Id));
         }
         catch (Exception e)
         {
            return BadRequest(e.Message);
         }
      }
   }
}