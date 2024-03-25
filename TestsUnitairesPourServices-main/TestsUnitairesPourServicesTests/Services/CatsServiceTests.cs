using Microsoft.VisualStudio.TestTools.UnitTesting;
using TestsUnitairesPourServices.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TestsUnitairesPourServices.Data;
using TestsUnitairesPourServices.Models;
using Microsoft.AspNetCore.Cors.Infrastructure;
using System.Runtime.InteropServices;
using TestsUnitairesPourServices.Exceptions;

namespace TestsUnitairesPourServices.Services.Tests
{
    [TestClass()]
    public class CatsServiceTests
    {
        DbContextOptions<ApplicationDBContext> options;

        public CatsServiceTests()
        {
            options = new DbContextOptionsBuilder<ApplicationDBContext>()
                .UseInMemoryDatabase(databaseName: "TestsUnitairesPourServicesContext")
                .UseLazyLoadingProxies(true)
                .Options;
        }

        [TestInitialize]
        public void Init()
        {
            using ApplicationDBContext db = new ApplicationDBContext(options);

            Cat[] cats = new Cat[]
            {
                new Cat
                {
                Id = 1,
                Name = "Foo",
                Age = 1,

                },
                new Cat
                {
                Id= 2,
                Name = "Bar",
                Age = 2,
                House = new House {
                    Id = 3,
                    Address = "rouge",
                    OwnerName = "eee"
                }
                }
    
            };

            House[] houses = new House[]
            {
            new House
            {
                Id=1,
                Address = "red",
                OwnerName = "fwfe" 
                
                
            },
            new House
            {
                Id = 2,
                Address = "qdqwd",
                OwnerName = "dwqiu"
            }
            };
            db.AddRange(cats);           
            db.AddRange(houses);
            db.SaveChanges();
           
        }

        [TestCleanup]
        public void Dispose()
        {
            using ApplicationDBContext db = new ApplicationDBContext(options);
            db.Cat.RemoveRange(db.Cat);
            db.House.RemoveRange(db.House);
            db.SaveChanges();
        }

        //[TestMethod]
        //public void Test1()
        //{
            
        //}

        [TestMethod]
        public void Test2()
        {
            using ApplicationDBContext db = new ApplicationDBContext(options);
            CatsService service = new CatsService(db);
           
            Cat? cat = service.Move(3,null ,null);

            Assert.IsNull(cat);
           
        }

        [TestMethod]
        public void Test3()
        {
            using ApplicationDBContext db = new ApplicationDBContext(options);
            CatsService service = new CatsService(db);
            Cat c = new Cat()
            {
               
            };

            Exception e = Assert.ThrowsException<WildCatException>(() => service.Move(1, null, null));
            Assert.AreEqual("On n'apprivoise pas les chats sauvages", e.Message);

        }

        [TestMethod]
        public void Test4()
        {
            using ApplicationDBContext db = new ApplicationDBContext(options);
            CatsService service = new CatsService(db);
            House house = db.House.Find(1);
            House house2 = db.House.Find(2);
            Cat cat2 = db.Cat.Find(2);
            Cat cat1 = db.Cat.Find(1);
            Exception e = Assert.ThrowsException<DontStealMyCatException>(() => service.Move(2,house,house2));
            Assert.AreEqual("Touche pas à mon chat!", e.Message);
        }

    }
}