using BrainTraining.Core.Interfaces;
using BrainTraining.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BrainTraining.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class QuestionController : Controller
    {
        private readonly IRepository<Question> repository;

        public QuestionController(IRepository<Question> repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public async Task<IEnumerable<Question>> Index()
        {
            return await repository.GetAllAsync();
        }

        // GET: QuestionController/Details/5
        //public ActionResult Details(int id)
        //{
        //    return View();
        //}
    }
}
