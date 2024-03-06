﻿using Microsoft.AspNetCore.Mvc;
using serverAngular.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace serverAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {

        public static List<Course> COURSES = new List<Course>
        {

           new Course(1,"English",1,50,"2/3/2024" ,new string[]{"aaa","sss:"},1 ,2,"https://www.limudonline.co.il/StaticFiles/Courses/0404202017105106.jpg"),
           new Course(2,"Word",2,15,"2/3/2024" ,new string[]{"www","EEE"},1 ,4,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWoa2MsieGH6Ts1twrAxnKTd1yak3sPXKiw&usqp=CAU"),
           //new Course{code=3,name="Poto",category=3,countLesson=50,date=new DateOnly(2024,3,25) ,sillibos=new string[]{"aaa","sss:"},wayLearning=1 ,codeLecturer=2,image="https//:foeoksddf.afa"},
           //new Course{code=4,name="PowerPoint",category=2,countLesson=25,date=new DateOnly(2024,5,7) ,sillibos=new string[]{"aaa","sss:"},wayLearning=2 ,codeLecturer=4,image="https//:fogggeoksddf.afa"},
        };
        // GET: api/<courses>
        [HttpGet]
        public IEnumerable<Course> Get()
        {
            return COURSES;
        }
        [HttpGet("{id}")]
        public Course Get(int id)
        {
            var c = COURSES.Find(x => x.code == id);
            return c;

        }
        //[HttpGet("category={category}")]
        //public IEnumerable<Course> Get(int category)
        //{
        //    Console.WriteLine(category);
        //    if (category >= 0)
        //        return COURSES.Where(s => s.category == category);
        //    return COURSES;
        //}
        [HttpGet("name={name}")]
        public IEnumerable<Course> Get(string name)
        {

            if (name == null)
                return COURSES;
            var s = COURSES.Where(s => s.name.Contains(name));
            Console.WriteLine(s);
            return s;

        }
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST api/<courses>
        [HttpPost]
        public Course Post([FromBody] Course value)
        {
            value.code = COURSES.Max(s => s.code) + 1;
            Console.WriteLine(value);
            COURSES.Add(value);
            return value;
        }

        // PUT api/<courses>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Course value)
        {
            var course = COURSES.Find(s => s.code == id);
            if (course != null)
            {
                course.codeLecturer = value.codeLecturer;
                course.name = value.name;
                course.category = value.category;
                course.date = value.date;
                course.countLesson = value.countLesson;
                course.sillibos = value.sillibos;
                course.name = value.name;
                course.wayLearning = value.wayLearning;
                course.image = value.image;
                return Ok();
            }
            return BadRequest("course is not find!");

        }

        // DELETE api/<courses>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var course = COURSES.Find(s => s.code == id);
            COURSES.Remove(course);
            if (!COURSES.Contains(course))
                return Ok();
            return BadRequest("course is not deleted!");
        }
    }
}
