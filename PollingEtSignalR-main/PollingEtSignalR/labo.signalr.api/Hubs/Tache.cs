using labo.signalr.api.Data;
using labo.signalr.api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace labo.signalr.api.Hubs
{
    public class Tache:Hub
    {
        private readonly ApplicationDbContext _context;

        public Tache(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpPost]
        public async Task<ActionResult<UselessTask>> Add(string taskText)
        {

            UselessTask uselessTask = new UselessTask()
            {
                Completed = false,
                Text = taskText
            };
            _context.UselessTasks.Add(uselessTask);

            await _context.SaveChangesAsync();

            await Clients.All.SendAsync("Add", taskText);
           

            return (uselessTask);
        }

        [HttpGet("{id}")]
        public async Task Complete(int id)
        {
            UselessTask? task = await _context.FindAsync<UselessTask>(id);
            if (task != null)
            {
                task.Completed = true;
                await _context.SaveChangesAsync();
                
            }
            await Clients.All.SendAsync("Complete", id);
            
        }


        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            base.OnDisconnectedAsync(exception);
            // TODO: Ajouter votre logique

        }

    }
}
