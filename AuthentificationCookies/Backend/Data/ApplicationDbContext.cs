using Backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            var hasher = new PasswordHasher<DemoUser>();
            DemoUser u1 = new DemoUser
            {
                // Primary key au format GUID
                Id = "11111111-1111-1111-1111-111111111111",
                UserName = "jim@test.com",
                Email = "jim@test.com",
                // La comparaison d'identity se fait avec les versions normalisés
                NormalizedEmail = "JIM@TEST.COM",
                NormalizedUserName = "JIM@TEST.COM"
            };
            // On encrypte le mot de passe
            u1.PasswordHash = hasher.HashPassword(u1, "Passw0rd!");
            builder.Entity<DemoUser>().HasData(u1);
        }


    }
}