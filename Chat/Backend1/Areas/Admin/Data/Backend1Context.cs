using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Backend1.Models;

namespace Backend1.Data
{
    public class Backend1Context : DbContext
    {
        public Backend1Context (DbContextOptions<Backend1Context> options)
            : base(options)
        {
        }

        public DbSet<Backend1.Models.Chat> Chat { get; set; } = default!;
    }
}
