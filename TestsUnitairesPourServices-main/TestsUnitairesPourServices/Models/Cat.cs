﻿using System;
namespace TestsUnitairesPourServices.Models
{
	public class Cat
	{
		public Cat()
		{
		}

		public int Id { get; set; }
		public string Name { get; set; }
		public int Age { get; set; }
        public virtual House House { get; set; }
	}
}

